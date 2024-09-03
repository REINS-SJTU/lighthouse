package com.example.demo.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.context.AvgSimulate;
import com.example.demo.context.RoadAllocation;
import com.example.demo.dao.AISDao;
import com.example.demo.dao.CarDao;
import com.example.demo.dao.RoadDao;
import com.example.demo.dto.*;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Car;
import com.example.demo.entity.Road;
import com.example.demo.service.AISService;
import com.example.demo.service.Astar.AStarService;
import com.example.demo.service.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class AISServiceImpl implements AISService {

    //ShipType:规定1为顺航道顺流船，2为顺航向逆流船，3为横越顺流船，4为横越逆流船。

    @Autowired
    AISDao aisDao;

    @Autowired
    RoadDao roadDao;

    @Autowired
    CarDao carDao;

    @Autowired
    AStarService aStarService;

    @Autowired
    RoadAllocation roadAllocation;

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    WebSocketServer webSocketServer;

    @Value("${task.url}")
    String taskUrl;

    public boolean handleMission(Mission m) {

        boolean isDatabaseSet = setMissionData(m); // 假设这是你的数据库操作
        if (isDatabaseSet) {
            try {
                int carId = m.getCarId();
                AISInfo aisInfo = aisDao.findLatestAIS(carId).getAisInfo();
                handle(aisInfo,true);// 调用 handle 函数
            } catch (Exception e) {
                // 处理 handle 调用失败的情况，但不影响最终结果
                System.err.println("Handle function failed: " + e.getMessage());
            }
        }
        return isDatabaseSet;
    }

    private boolean setMissionData(Mission m) {
        // 返回 true 表示操作成功，返回 false 表示操作失败
            int carId = m.getCarId();
            int x = m.getX();
            int y = m.getY();
            int[] loc = {x, y};
            Road road = roadDao.findRoadByLoc(loc);
            if(road == null) return false;
            carDao.SetRoadID(carId, road.getRoadID());
            AIS ais = aisDao.findLatestAIS(carId);
            Road car_road= roadDao.findRoadByLocation(ais.getLocation());
            //把车子位置的道路恢复为1，读小车的位置
            roadDao.setRoadTmpValid(car_road.getRoadID(),1);
            //aisDao.SetRoadID(carId, road.getRoadID());
            return true; // 成功
    }


    @Override
    public Message handle(AISInfo aisInfo,boolean isSetMission) {

        //插入新的数据,得到了ais（动态信息）和car（静态信息）
        System.out.println("正在处理小车" + aisInfo.getCarId());
        AIS ais = aisDao.getAIS(aisInfo);
        System.out.println("AIS " + ais);
        int carID = ais.getCarName();
        Car car = carDao.getCar(carID);
//        System.out.println("Car " + car);


        //数据存入数据库
        aisDao.addAISRecords(ais);

        //目前位置
        Road road1 = roadDao.findRoadByLocation(ais.getLocation());
        System.out.println("Road1 " + road1);
        //终点
        Road road2 = roadDao.findRoadById(car.getRoadID());
        System.out.println("Road2 " + road2);


        //应该是想处理到达终点后的情况，roadID = 0，road =null
        if (road2 == null) {
            putInMap(carID, road1);
            return null;
        }

        //到终点，向任务系统发消息
        if (road1.equals(road2)) {
                roadDao.setRoadTmpValid(road1.getRoadID(),0);
                endHelper(ais, road2);
            return null;
        }

        //进行A*规划算法，得到接下来的路径
        System.out.println("A*规划路线");
        List<int[]> ans_point = obstacleHandle(ais, road1, road2);

        System.out.println("ans_point:" );
        ans_point.forEach(point -> System.out.println(Arrays.toString(point)));

        //Todo:修改道路块的分配逻辑

        //上面的方法没有得到有效路径，第一个节点就是障碍物或被阻挡
        if (ans_point.size() == 0) {
               //第一个道路块就和别人有冲突
                int t = car.getTime();
                int limit = 3;
                System.out.println("等待时间t=" + t);
                if (t < limit) {
                    carDao.setCarTime(carID, t + 1);
                } else {
                    //超出时间限制,尝试向周围走
                    //Todo:按照三个方向，按顺序尝试
                    ans_point = collisionAvoidance(ais, car, road1);
                }
        }

        System.out.println("最终ans_point:" );
        ans_point.forEach(point -> System.out.println(Arrays.toString(point)));

        //最终结果
        double speed = ais.getSpeed();
        List<Double> heading = new ArrayList<>();

        if (ans_point.size() == 0) {
            //最后未找到路，等待,速度为0，方向不变
            speed = 0.0;
            heading.add(ais.getAisInfo().getHeading());

        } else {
            //有路可走，time清零，计算heading
            carDao.setCarTime(carID, 0);
            carDao.setCarPosition(carID, 0);
            for(int i=0;i<ans_point.size();++i)
            {
                //第一个点
                if(i==0) {
                    heading.add(getRoadHeading(road1.getLocation(), ans_point.get(0)));
                }else {
                    heading.add(getRoadHeading(ans_point.get(i-1),ans_point.get(i)));
                }
            }

            if (ans_point.size() < 3) {
                //可能有部分障碍，需要减速,暂定减半
                speed /= 2;
            }
        }


        //根据道路创建message，将int[]转化为double[]
        Message m;
        m = getMessage(carID, ans_point, speed, heading);
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
        Date date = new Date(System.currentTimeMillis());
        System.out.println(formatter.format(date)+" :message1+" + m);
        sendMessage(m);

        //额外发送给任务中心""
        //sendToTask(m);

        //向模拟程序发消息
        //AvgSimulate.receive(ais.getCarName(), m);

        return m;
    }

    public void endHelper(AIS ais, Road end) {
        System.out.println("到达终点");
        int carID = ais.getCarName();
        //设置目的地为0
        carDao.SetRoadID(carID, 0);

        //把自己放到hashmap里
        List<Integer> roads = new ArrayList<>();
        roads.add(end.getRoadID());
        roadAllocation.mapRemove(carID);
        roadAllocation.mapPut(carID, roads);

        //向任务系统发消息
        sendEndToTask(carID);

        //达到终点发送的消息
        List<Double> heading= new ArrayList<>();
        heading.add(ais.getAisInfo().getHeading());
        Message m = new Message(carID, new ArrayList<>(), 0.0, heading);
        sendMessage(m);
    }

    double getRoadHeading(int[] loc1,int[] loc2)
    {
//        int[] loc1 = start.getLocation();
//        int[] loc2 = end.getLocation();
        double course = Math.atan2(loc2[1] - loc1[1], loc2[0] - loc1[0]);
        return course;
    }


    /**
     * 预检测，并不实际把点放进map中
     * 把自身的位置加入到roads中，且限制了返回结果长度在4以内（包含自身）
     */
    public List<Integer> roadAllocateHelper(Integer carID, List<Road> points, Road start_road) {
        System.out.println("roadAllocation route: " + points);
        //加入起始点的id
        List<Integer> roads = new ArrayList<>();
        roads.add(start_road.getRoadID());

        //看一下占用表
        roadAllocation.mapPrint();

        //检测道路是否能用,限制检测前三格
        for (int i = 0; i < points.size() && i < 3; ++i) {
            Road r = points.get(i);
            int roadId = r.getRoadID();
            //道路块是障碍物或被其他船舶占用
            if (isRoadAvailable(r, carID)) {
                System.out.println("roadAllocation: " + r + "is in map");
                break;
            }
            //不被占用，可以加入
//            System.out.println("roadAllocation: add " + roadId);
            roads.add(roadId);
        }
        return roads;
    }

    /**
     * 判断道路是否是valid或者是否已经被其他船占用
     */
    public boolean isRoadAvailable(Road road, Integer carID) {
        return road.getValid() == 0 || roadAllocation.obstacleInMap(road.getRoadID(), carID);
    }


    /**
     * 判断当前分配的道路是否正确,修改map Todo:改成在事务中进行的
     * 增加对第一个点的检测，在一定范围外仍向第一个点导航
     */
    public List<int[]> roadAllocate(AIS ais, List<Integer> roads) {
        //确定好路线，再去修改map
        Integer carID = ais.getCarName();
        List<int[]> ans = new ArrayList<>();

        //将点加进map，包括当前点，遇到重复点截止
        roadAllocation.mapPut(carID, roads);//先把自己所有点放进去，又问题会在下面修改
        for (int i = 1; i < roads.size(); ++i) {
            int r = roads.get(i);
            //中间时间有人加进去了 Todo：多线程需要考虑完善，自己的就不加了
            if (roadAllocation.obstacleInMap(r, carID)) {
                List<Integer> new_road = roads.subList(0, i);
                System.out.println("new_road" + new_road);
                //需要放进map包含自身的及后续的点
                roadAllocation.mapPut(carID, new_road);
                break;
            }
            Road rr = roadDao.findRoadById(r);
            int[] a = new int[]{rr.getLocation()[0], rr.getLocation()[1]};
            ans.add(a);
        }
        return ans;
    }

    /**
     * 将道路的相对位置int[]转化为绝对位置double[]
     */

    private double[] roadLoc(int[] loc) {
        double len = 0.8;
        double x = (loc[0] - 0.5) * len;
        double y = (loc[1] - 0.5) * len;
        return new double[]{x, y};
    }

    /**
     * 小于规定距离返回true，超过返回false
     */

    private boolean distance(double[] loc, double[] road) {
        //todo:根据实际情况修改
        double limit = 0.2;
        double dx = road[0] - loc[0];
        double dy = road[1] - loc[1];
        double dis = Math.sqrt(dx * dx + dy * dy);
        System.out.println("距离为" + dis);
        return dis < limit;
    }

    private boolean isHeadingValid(AIS ais, int[] loc) {
        double heading1 = getHeading(ais, loc);
        double heading2 = ais.getAisInfo().getHeading();
        System.out.println("heading1" + heading1);
        System.out.println("heading2" + heading2);
        if (Math.abs(heading1 - heading2) < 0.5 * Math.PI || Math.abs(heading1 - heading2) > 1.5 * Math.PI) {
            return true;
        }
        return false;
    }


    //有障碍物,A*规划路线
    public List<int[]> obstacleHandle(AIS ais, Road start, Road end) {
        //在开始和结尾间找道路
        System.out.println("start"+start.getRoadID());
        System.out.println("end"+end.getRoadID());
        List<Road> path = aStarService.searchWay(start, end);
        System.out.println(path);
        int endIndex = Math.min(path.size(), 4);
        //A*算法搜索出存在障碍物的路径后，再对路径进行判断判断
        int carID = ais.getCarName();
        List<Integer> roadIds = roadAllocateHelper(carID, path.subList(1, endIndex), start);
        List<int[]> points = roadAllocate(ais, roadIds);
        return points;
    }

    //无障碍物,处理可能的碰撞
    public List<int[]> collisionAvoidance(AIS ais, Car car, Road start) {
        //道路块分配
        List<int[]> points = new ArrayList<>();

        int position = car.getPosition();
        System.out.println("position " + position);
        carDao.setCarPosition(car.getCarID(), position + 1);


        //按照左右后的顺序依次选择看能否移动
        //存储的是弧度，变为 90，-90，180，0
        double radian = ais.getAisInfo().getHeading();
        //弧度转化为角度
        double heading = radian * (180.0 / Math.PI);

        System.out.println("radian" + radian);
        System.out.println("heading (看direction)" + heading);
        //Todo:实际航向
        int direction = 5;
        if (heading > 45 && heading < 135) {
            direction = 1;
        } else if (heading <= -45 && heading >= -135) {
            direction = 2;
        } else if ((heading <= 180 && heading >= 135) || (heading >= -180 && heading < -135)) {
            direction = 3;
        } else if (heading > 45 && heading <= 45) {
            direction = 4;
        }

        //附近的不是障碍物的列表
        List<Road> path = roadDao.getOtherRoads(start.getRoadID(), direction);
        System.out.println("可以移动的列表" + path);

        if (position < path.size()) {
            //取position对应的road
            Road r = path.get(position);
            if (!isRoadAvailable(r, ais.getCarName())) {
                //需要更新map
                putInMap2(ais.getCarName(), start, r);
                if (!distance(ais.getLocation(), roadLoc(start.getLocation())) && isHeadingValid(ais, r.getLocation())) {
                    points.add(new int[]{start.getLocation()[0], start.getLocation()[1]});
                }
                points.add(new int[]{r.getLocation()[0], r.getLocation()[1]});
            }
        }

        System.out.println("可以移动的点" + points);

        return points;
    }


    public void putInMap(Integer carID, Road startRoad) {
        List<Integer> roads = new ArrayList<>();
        roads.add(startRoad.getRoadID());
        roadAllocation.mapPut(carID, roads);
    }

    public void putInMap2(Integer carID, Road startRoad, Road r) {
        List<Integer> roads = new ArrayList<>();
        roads.add(startRoad.getRoadID());
        roads.add(r.getRoadID());
        roadAllocation.mapPut(carID, roads);
    }


    //获得航向
    public Double getHeading(AIS ship, int[] point) {
        //计算目前船的位置和下一个点位置之间的航向
        double[] shipLoc = ship.getLocation();
        double[] location = roadLoc(point);
        //弧度
        double course = Math.atan2(location[1] - shipLoc[1], location[0] - shipLoc[0]);
        return course;
    }

    public Message getMessage(Integer carId, List<int[]> points, Double speed, List<Double> heading) {
        Message m = new Message();
        List<double[]> ans_points = getDoublePoints(points);
        m.setCarId(carId);
        m.setPoints(ans_points);
        m.setSpeed(speed);
        m.setHeading(heading);
        //use for test only
        //模拟器
//      ShipSimulate.receive(ais.getAisInfo().getVesselName(),json);
        return m;
    }

    private List<double[]> getDoublePoints(List<int[]> points) {
        List<double[]> ans_points = new ArrayList<>();
        for (int[] loc : points) {
            ans_points.add(roadLoc(loc));
        }
        return ans_points;
    }

    public void sendEndToTask(int carID) {
        String url = String.format(taskUrl+"/task/arrive?robot_id=%d", carID);
        RestTemplate restTemplate = new RestTemplate();

        // 发送POST请求并获取响应
        ResponseEntity<String> response = restTemplate.postForEntity(url, null, String.class);

        System.out.println("Response: " + response.getBody());
    }

    public void sendToTask(Message m) {
        String url = taskUrl+"/arrive";

        //Todo:向任务系统发消息,修改地址
        ResponseEntity<Message> response = restTemplate.postForEntity(url, m, Message.class);

        // 检查响应状态
        if (response.getStatusCode().is2xxSuccessful()) {
            System.out.println("Request was successful: " + response.getBody());
        } else {
            System.out.println("Request failed: " + response.getStatusCode());
        }
    }


    public void sendMessage(Message m) {
        Integer carId = m.getCarId();
        //todo:meaasge格式
        String messageStr = JSONObject.toJSONString(m);
//        System.out.println(messageStr);
        webSocketServer.sendMessageByUserId(carId, messageStr);
    }

    @Override
    public AISInfo findAISInfo(Integer shipID) {
        System.out.println("findAISInfo" + shipID);
        AIS tmp = aisDao.findLatestAIS(shipID);
        return tmp.getAisInfo();
    }

    @Override
    public List<CarState2> getValidCar() {
        List<Integer> carIDS = carDao.getValidCarIDS();
        System.out.println(carIDS);
        List<CarState2> cars = aisDao.getValidCar(carIDS);
        return cars;
    }

    @Override
    public List<CarState2> getAllCar() {
        List<Integer> carIDS = carDao.getAllCarIDS();
        System.out.println(carIDS);
        List<CarState2> cars = aisDao.getValidCar(carIDS);
        return cars;
    }

    @Override
    public List<Road> getAllRoad()
    {
        return roadDao.findAll();
    }
}

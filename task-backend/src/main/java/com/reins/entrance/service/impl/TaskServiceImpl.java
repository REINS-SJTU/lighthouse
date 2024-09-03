package com.reins.entrance.service.impl;

import com.reins.entrance.constant.ConstantValue;
import com.reins.entrance.constant.RobotState;
import com.reins.entrance.dao.ResidenceDao;
import com.reins.entrance.dao.RobotDao;
import com.reins.entrance.dao.TaskDao;
import com.reins.entrance.entity.Robot;
import com.reins.entrance.entity.Task;
import com.reins.entrance.entity.dto.ObstacleDTO;
import com.reins.entrance.entity.dto.RobotDTO;
import com.reins.entrance.entity.dto.TaskDTO;
import com.reins.entrance.entity.dto.WebSocketDTO;
import com.reins.entrance.service.TaskService;
import com.reins.entrance.util.JsonUtil;
import com.reins.entrance.ws.WebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import springfox.documentation.spring.web.json.Json;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.*;


@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private ResidenceDao residenceDao;
    @Autowired
    private RobotDao robotDao;
    @Autowired
    private TaskDao taskDao;
    @Autowired
    private ConstantValue constantValue;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private WebSocketHandler webSocketHandler;

    @Override
    public void refreshRobotPositionData() {

        // 获取当前所有的机器人位置信息
        List<Robot> robots = robotDao.getAllRobots();

        // 更新到Redis作为历史的位置信息
        for (Robot r : robots){
            if(r.getState()==1&&robotDao.isActive(r.getRobotId())){
                robotDao.addHistoricalPos(r.getRobotId(),r);
            }
        }


        List<Robot> newRobots = new ArrayList<>();
        String url = constantValue.navigateUrl+"/AllCar";
        String jsonStr = restTemplate.getForObject(url,String.class);
        if(jsonStr!=null){
            Map<String,Object> mp =(Map<String, Object>) JsonUtil.jsonStringToObject(jsonStr);
            if(mp.containsKey("code")){
                Integer code = (Integer)mp.get("code");
                if(code==2000){
                    Object o1 = mp.get("data");
                    List o11 = (List) o1;
                    for(Object o111:o11){
                        Map o1111 = (Map) o111;
                        Robot robot = new Robot();
                        BigDecimal x = (BigDecimal) o1111.get("x");
                        BigDecimal y = (BigDecimal) o1111.get("y");
                        int carId=(Integer)o1111.get("carID");
                        boolean valid = (Boolean) o1111.get("valid");
                        robot.setRobotId(carId);
                        robot.setX(x);
                        robot.setY(y);
                        robot.setState(valid?0:1);
                        robot.setStatus(0);
                        System.out.println("refresh data: robot="+robot);
                        newRobots.add(robot);
                    }
                }
            }
        }


        robotDao.refreshAll(newRobots);
    }

    @Override
    public void robotArrives(Integer robotId) {
        // 更新机器人的状态以及任务状态
        Robot robot = robotDao.getRobotById(robotId);
        Integer taskId = robot.getTaskId();
        robot.setState(0);
        robotDao.updateRobot(robot);
        taskDao.updateTaskState(taskId,2);
        robotDao.deactivateRobot(robotId);
        WebSocketDTO webSocketDTO = new WebSocketDTO();
        webSocketDTO.setMsg("arrive");
        webSocketHandler.sendMessageToUser("1", JsonUtil.objectToJsonString(webSocketDTO));
    }

    @Override
    public Integer findNearestRobot(Double destX, Double destY) {
        List<Robot> robots = robotDao.getAvailableRobots();
        Double dist = 1.0* Integer.MAX_VALUE;
        Integer robotId = -1;
        for(Robot robot :robots){
            // 曼哈顿距离
            Double x= Double.parseDouble(robot.getX().toString());
            Double y= Double.parseDouble(robot.getY().toString());
            Double delta = Math.abs(destX-x)+Math.abs(destY-y);
            if(delta<dist) {
                dist=delta;
                robotId=robot.getRobotId();
            }
        }
        return robotId;
    }

    @Override
    public Task assignTaskToRobot(Integer robotId,Double x, Double y) {
        Task task = new Task();
        task.setX(new BigDecimal(x));
        task.setY(new BigDecimal(y));
        task.setState(1);
        task.setRobotId(robotId);
        taskDao.createNewTask(task);
        robotDao.setRobotActiveInRedis(robotId);
        try{
            String url = constantValue.navigateUrl+"/SetMission";
            Map<String,Object> mp = new HashMap<>();
            mp.put("carId",robotId);
            mp.put("x",x);
            mp.put("y",y);
            System.out.println(mp);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(mp, headers);
            String jsonStr = restTemplate.postForObject(url,requestEntity,String.class);
            System.out.println("Assign Task :"+jsonStr);
            return task;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public List<RobotDTO> getRobotDTOsOfAllState() {
        // 1. 从数据库获取所有当前位置信息
        List<Robot> allRobots = robotDao.getAllRobots();
        List<RobotDTO> result = new ArrayList<>();
        // 2. 从redis里获取所有历史位置信息
        for(Robot robot:allRobots){
            RobotDTO robotDTO = new RobotDTO();
            robotDTO.setRobotId(robot.getRobotId());
            Double x = Double.parseDouble(robot.getX().toString());
            Double y = Double.parseDouble(robot.getY().toString());
            robotDTO.setX(x);
            robotDTO.setY(y);
            robotDTO.setTimestamp(robot.getUpdateTime().getTime());
            switch (robot.getState()){
                case 0:
                    robotDTO.setState(RobotState.IDLE);
                    break;
                case 1:
                    robotDTO.setState(RobotState.CURRENT);
                    break;
                case -1:
                    robotDTO.setState(RobotState.EXCEPTION);
                    break;
            }
            result.add(robotDTO);


            List<Robot> historicalPos = robotDao.getHistoricalPos(robot.getRobotId());
            for(Robot hr:historicalPos){
                RobotDTO robotDTO1 = new RobotDTO();
                robotDTO1.setRobotId(hr.getRobotId());
                Double x0=Double.parseDouble(hr.getX().toString());
                Double y0=Double.parseDouble(hr.getY().toString());
                robotDTO1.setX(x0);
                robotDTO1.setY(y0);
                robotDTO1.setTimestamp(hr.getUpdateTime().getTime());
                robotDTO1.setState(RobotState.HISTORY);
                result.add(robotDTO1);
            }

        }
        return result;
    }

    @Override
    public List<TaskDTO> getAllTasks() {
        List<TaskDTO> list1 = new ArrayList<>();
        List<Task> tasks = taskDao.getAllTasks();
        for(Task task:tasks){
            TaskDTO taskDTO = new TaskDTO();
            taskDTO.setRobotId(task.getRobotId());
            taskDTO.setTaskId(task.getTaskId());
            taskDTO.setStatus(task.getStatus());
            taskDTO.setState(task.getState());
            Double x=Double.parseDouble(task.getX().toString());
            Double y=Double.parseDouble(task.getY().toString());
            taskDTO.setX(x);
            taskDTO.setY(y);
            list1.add(taskDTO);
        }
        return list1;
    }

    @Override
    public List<ObstacleDTO> getAllObstacles() {
        List<ObstacleDTO> obstacles = new ArrayList<>();
        String url = constantValue.navigateUrl+"/AllRoad";
        String jsonStr = restTemplate.getForObject(url,String.class);
        if(jsonStr!=null){
            Map<String,Object> mp =(Map<String, Object>) JsonUtil.jsonStringToObject(jsonStr);
            if(mp.containsKey("code")){
                Integer code = (Integer)mp.get("code");
                if(code==2000){
                    Object o1 = mp.get("data");
                    List o11 = (List) o1;
                    for(Object o111:o11){
                        Map o1111 = (Map) o111;
                        int valid = (Integer)o1111.get("valid");
                        if(valid==1){
                            int roadID=(Integer)o1111.get("roadID");
                            List location = (List) o1111.get("location");
                            double x= Double.parseDouble(location.get(0).toString()) ;
                            double y= Double.parseDouble(location.get(1).toString()) ;

                            ObstacleDTO obstacleDTO = new ObstacleDTO();
                            obstacleDTO.setRoadId(roadID);
                            obstacleDTO.setX(x);
                            obstacleDTO.setY(y);
                            obstacles.add(obstacleDTO);
                        }
                    }
                }
            }
        }
        return obstacles;
    }
}

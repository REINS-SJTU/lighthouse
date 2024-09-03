package com.example.demo.context;

import com.example.demo.dto.AISInfo;
import com.example.demo.dto.Message;
import com.example.demo.service.AISService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@EnableScheduling
@Component
public class AvgSimulate {

    @Autowired
    AISService aisService;

    private static final ConcurrentHashMap<Integer, AISInfo> carPool = new ConcurrentHashMap<>();

    private static Boolean simulateSwitch = false; //模拟开始的开关


    @Scheduled(fixedDelay = 500)
    public void schedule() {
        if (simulateSwitch) {
            send();
        }
    }

    public void send() {
        List<AISInfo> aisList = new ArrayList<>(carPool.values()); //返回映射中所有value组成的Set视图
        System.out.println();
        System.out.println("---------------------------------");
        System.out.println("Simulate发送消息:" + aisList);
        for (AISInfo aisInfo : aisList) {
            System.out.println("aisInfo:" + aisInfo);
            aisService.handle(aisInfo,false);
        }
    }

    public void start() {
        System.out.println("----------Simulate start");
        List<Integer> shipList = new ArrayList<>();

        //读取数据库所有船的信息 Todo：自己设置start，end
        for (int i = 1; i < 9; ++i) {
            shipList.add(i);
        }


        for (Integer i : shipList) {
            AISInfo aisInfo = aisService.findAISInfo(i);
            System.out.println("ship消息:" + aisInfo);
            System.out.println("ship速度:" + aisInfo.getSpeed());
            carPool.put(i, aisInfo);
        }
        simulateSwitch = true;
    }

    public void stop() {
        System.out.println("----------Simulate stop");
        simulateSwitch = false;
        carPool.clear();
    }

    //用来更新接收到的数据
    public static void receive(Integer carId, Message m) {
        System.out.println("carId: " + carId);
        System.out.println("message: " + m);
        List<double[]> points = m.getPoints();
        double speed = m.getSpeed();
        double heading = m.getHeading().get(0);

        //无路可走不用变
        if (points.size() == 0) {
            return;
        }

        //Todo:更换模拟的方式
//        int[] loc = points.get(0);
        //之前的坐标
        Double x = carPool.get(carId).getX();
        Double y = carPool.get(carId).getY();
        System.out.println("更新前x"+x);
        System.out.println("更新前y"+y);

        //按照速度模拟，运动距离的计算
        double length = speed*0.005;
        System.out.println("移动距离"+length);
        x +=length*Math.cos(heading);
        y +=length*Math.sin(heading);
        System.out.println("横向移动距离"+length*Math.cos(heading));
        System.out.println("纵向移动距离"+length*Math.sin(heading));



        //模拟接下来小车的位置,计算后的结果更新到当前数据中
        // Todo：暂时没想好连续怎么模拟，暂时设置车一次走一格,速度方向属性暂时设置了也没什么用,而且用int表示后续可能考虑改。

        System.out.println("更新后x"+x);
        System.out.println("更新后y"+y);

        carPool.get(carId).setX(x);
        carPool.get(carId).setY(y);
        //carPool.get(carId).setSpeed(speed);
        carPool.get(carId).setHeading(heading);
    }


}

package com.example.demo.context;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.dto.AISInfo;
import com.example.demo.dto.Message;
import com.example.demo.service.AISService;
import com.example.demo.util.GeoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

//this file is used for test only
@EnableScheduling
@Component
public class ShipSimulate {

    @Autowired
    AISService aisService;

    private static final ConcurrentHashMap<Integer, AISInfo> shipPool = new ConcurrentHashMap<>();
    private static final ConcurrentHashMap<Integer, Double> horsePower = new ConcurrentHashMap<>();
    private static Boolean simulateSwitch=false; //模拟开始的开关


    @Scheduled(fixedDelay = 1000)
    public void schedule(){
        if(simulateSwitch){
            send();
        }
    }

    public void send(){
        List<AISInfo> aisList = new ArrayList<>(shipPool.values()); //返回映射中所有value组成的Set视图
        System.out.println();
        System.out.println("---------------------------------");
        System.out.println("Simulate发送消息:" + aisList);
        for(AISInfo aisInfo:aisList){
            System.out.println("aisInfo:" + aisInfo);
            aisService.handle(aisInfo,false);
        }
    }

    public void start(){
        System.out.println("----------Simulate start");
        List<Integer> shipList = new ArrayList<>();
//        shipList.add(1);
//        shipList.add(2);
//        shipList.add(3);
        for (int i=10;i<26;++i)
        {
            shipList.add(i);
        }


        for(Integer i:shipList){
            AISInfo aisInfo = aisService.findAISInfo(i);
            System.out.println("ship消息:" + aisInfo);
            System.out.println("ship速度:" + aisInfo.getSpeed());
            shipPool.put(i,aisInfo);
        }
//        horsePower.put(1,1.0);
//        horsePower.put(2,1.0);
//        horsePower.put(3,1.0);
        for (int i=10;i<26;++i)
        {
            horsePower.put(i,1.0);
        }

        simulateSwitch=true;
    }

    public void stop(){
        System.out.println("----------Simulate stop");
        simulateSwitch=false;
        shipPool.clear();
    }

    public static void receive(String shipName, String message){
        System.out.println("shipName: "+shipName);
        System.out.println("message: "+message);
        Message m = JSONObject.parseObject(message, Message.class);
        Integer shipID = m.getCarId();
        List<double[]> points = m.getPoints();
        Double speed = m.getSpeed();

        if(points.size()==0){
            return;
        }

        double[] loc=points.get(0);
        double longitude = shipPool.get(shipID).getX();
        double latitude = shipPool.get(shipID).getY();

        //离第0个点太近时，会选择第1个点
        if(GeoUtil.getLenWithPoints(loc[0],loc[1],longitude,latitude)<1){
            if(points.size()<=1){
                return;
            }
            loc=points.get(1);
        }

        //bearing返回的是角度
        double course= GeoUtil.bearing(longitude,latitude,loc[0],loc[1]);
        double radian=Math.toRadians(course);//角度转弧度

        //固定速度
//        speed=30.0;
        //乘上船自身的马力 ??
        speed*=horsePower.get(shipID);
        double length = speed*0.000001*2;
        longitude+=length*Math.cos(radian);
        latitude+=length*Math.sin(radian);
//        shipPool.get(shipID).setLongitude(longitude);
//        shipPool.get(shipID).setLatitude(latitude);
//        shipPool.get(shipID).setCOG(radian);
//        shipPool.get(shipID).setCOG(course);
//        shipPool.get(shipID).setSOG(speed);
    }

}

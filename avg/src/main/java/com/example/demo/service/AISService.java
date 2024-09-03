package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Road;

import java.util.List;

public interface AISService {

//    void handleAISRecords(List<AISInfo> aisList);

    Message handle(AISInfo aisInfo,boolean isSetMission);

    boolean handleMission(Mission m);

//    void adjust(AIS ship, List<AIS> aroundShips, List<Integer> routes);
//
//    Boolean overtake(AIS ship, List<AIS> aroundShips);
//
//    void obstacleAvoidance(AIS ship, List<AIS> aroundShips, Integer obstacleNum, List<Integer> routes);
//
//    void collisionAvoidance(AIS ais, List<Integer> routes);

    //无障碍物,处理可能的碰撞
    // void collisionAvoidance(AIS ais, List<Road> routes, Road start);

//    void obstacleHandle(AIS ais, Integer endRoadID);
//
//    void inSpecialState(AIS ais, List<AIS> aroundShips);
//
//    void offsetHandle(AIS ais,Integer roadID);

    AISInfo findAISInfo(Integer shipID);

    List<CarState2> getValidCar();

    List<CarState2> getAllCar();

    List<Road> getAllRoad();
}

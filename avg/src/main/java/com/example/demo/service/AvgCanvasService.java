package com.example.demo.service;

import com.example.demo.dto.AvgState;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Road;

import java.util.List;

public interface AvgCanvasService {

    //
    List<Road> findRoads();

    //小车的坐标
    List<AvgState> findCars(Integer carIDFrom, Integer carIDTo);

}

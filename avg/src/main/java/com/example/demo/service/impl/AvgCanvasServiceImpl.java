package com.example.demo.service.impl;

import com.example.demo.dao.AISDao;
import com.example.demo.dao.RoadDao;
import com.example.demo.dto.AvgState;
import com.example.demo.dto.State;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Road;
import com.example.demo.service.AvgCanvasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AvgCanvasServiceImpl implements AvgCanvasService {

    @Autowired
    RoadDao roadDao;

    @Autowired
    AISDao aisDao;

    @Override
    public List<Road> findRoads() {

        //Todo:对数据进行包装，删掉无用的数据
        return roadDao.findAll();
    }

    @Override
    public List<AvgState> findCars(Integer carFrom, Integer carTo) {

        List<AIS> shipList= new ArrayList<>();
        for(Integer i= carFrom;i <= carTo;++i)
        {
            shipList.add(aisDao.findLatestAIS(i));
        }
        List<AvgState> ret= new ArrayList<>();
        for(AIS a:shipList) {
            AvgState state = new AvgState(a.getAisInfo().getX(),a.getAisInfo().getY());
            ret.add(state);
        }
        return ret;
    }
}

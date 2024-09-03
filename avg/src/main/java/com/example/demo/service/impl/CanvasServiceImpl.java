package com.example.demo.service.impl;

import com.example.demo.dao.AISDao;
import com.example.demo.dao.RoadDao;
import com.example.demo.dto.RoadState;
import com.example.demo.dto.State;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Road;
//import com.example.demo.entity.SubArea;
import com.example.demo.service.CanvasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CanvasServiceImpl implements CanvasService {

    @Autowired
    RoadDao roadDao;

    @Autowired
    AISDao aisDao;

    @Override
    public List<RoadState> findRoadsCenter(Integer roadIDFrom, Integer roadIDTo){
        List<Road> roadList= roadDao.findRoadsByID(roadIDFrom,roadIDTo);
        List<RoadState> ret= new ArrayList<>();
//        for(Road r:roadList) {
//            RoadState state = new RoadState(r.getRoadID(),r.getLocation()[0],r.getLocation()[1]);
//            ret.add(state);
//        }
        return ret;
    }

    @Override
    public List<State> findShips(Integer shipIDFrom, Integer shipIDTo){
        List<AIS> shipList= new ArrayList<>();
        for(Integer i= shipIDFrom;i <= shipIDTo;++i)
        {
            shipList.add(aisDao.findLatestAIS(i));
        }
        List<State> ret= new ArrayList<>();
//        for(AIS a:shipList) {
//            State state = new State(a.getAisInfo().getLongitude(),a.getAisInfo().getLatitude());
//            ret.add(state);
//        }
        return ret;
    }

}

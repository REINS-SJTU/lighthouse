package com.example.demo.service;

import com.example.demo.dto.RoadState;
import com.example.demo.dto.State;
import java.util.List;

public interface CanvasService {

    List<RoadState> findRoadsCenter(Integer roadIDFrom, Integer roadIDTo);

    List<State> findShips(Integer shipIDFrom, Integer shipIDTo);

//    List<State> findSubAreas(Integer subAreaIDFrom, Integer subAreaIDTo);

}

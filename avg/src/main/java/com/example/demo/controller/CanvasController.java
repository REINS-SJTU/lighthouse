package com.example.demo.controller;

import com.example.demo.dto.RoadState;
import com.example.demo.dto.State;
import com.example.demo.service.CanvasService;
import com.example.demo.context.ShipSimulate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CanvasController {

    @Autowired
    CanvasService canvasService;

    @Autowired
    ShipSimulate shipSimulate;

    @RequestMapping("/canvas/roadsCenter")
    public List<RoadState> canvasRoadsCenter(@RequestParam Integer roadFrom, @RequestParam Integer roadTo){
        return canvasService.findRoadsCenter(roadFrom,roadTo);
    }

    @RequestMapping("/canvas/ships")
    public List<State> canvasShips(@RequestParam Integer shipFrom,@RequestParam Integer shipTo){
        return canvasService.findShips(shipFrom,shipTo);
    }

//    @RequestMapping("/canvas/obstacles")
//    public List<State> canvasObstacles(@RequestParam Integer obstacleFrom,@RequestParam Integer obstacleTo){
//        return canvasService.findSubAreas(obstacleFrom,obstacleTo);
//    }

    @RequestMapping("/canvas/start")
    public void canvasStart(){
        shipSimulate.start();
    }

    @RequestMapping("/canvas/stop")
    public void canvasStop(){
        shipSimulate.stop();
    }

}

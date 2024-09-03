package com.example.demo.controller;

import com.example.demo.context.AvgSimulate;
import com.example.demo.dto.AvgState;
import com.example.demo.dto.RoadState;
import com.example.demo.dto.State;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Road;
import com.example.demo.service.AvgCanvasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class AvgCanvasController {
    @Autowired
    AvgCanvasService avgCanvasService;

    @Autowired
    AvgSimulate avgSimulate;

    @RequestMapping("/avgCanvas/roads")
    public List<Road> avgCanvasRoads(){
        //todo:简化传递的数据
        return avgCanvasService.findRoads();
    }

    @RequestMapping("/avgCanvas/cars")
    public List<AvgState> avgCanvasCars(@RequestParam Integer carFrom, @RequestParam Integer carTo){
        return avgCanvasService.findCars(carFrom,carTo);
    }

    @RequestMapping("/avgCanvas/start")
    public void avgCanvasStart(){
        avgSimulate.start();
    }

    @RequestMapping("/avgCanvas/stop")
    public void avgCanvasStop(){
        avgSimulate.stop();
    }
}

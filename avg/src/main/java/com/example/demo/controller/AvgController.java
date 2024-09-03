package com.example.demo.controller;

import com.example.demo.dto.AISInfo;
import com.example.demo.dto.Mission;
import com.example.demo.dto.ResultVo;
import com.example.demo.service.AISService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AvgController {

    @Autowired
    AISService aisService;

    @RequestMapping(value = "/AvgMessage", method = RequestMethod.POST)
    public ResultVo AvgMessage(@RequestBody AISInfo data) {
        System.out.println(data);
        aisService.handle(data,false);
        return ResultVo.success(null, null);
    }

    @RequestMapping(value = "/SetMission", method = RequestMethod.POST)
    public ResultVo SetMission(@RequestBody Mission data) {
        System.out.println(data);
        boolean success = aisService.handleMission(data);
        System.out.println("set success = "+success);
        return ResultVo.success(null, success? "1" : "0");
    }

    @RequestMapping(value = "/ValidCar", method = RequestMethod.GET)
    public ResultVo ValidCar() {
        return ResultVo.success(null,aisService.getValidCar());
    }

    @RequestMapping(value = "/AllCar", method = RequestMethod.GET)
    public ResultVo AllCar() {
        return ResultVo.success(null,aisService.getAllCar());
    }

    @RequestMapping(value = "/AllRoad", method = RequestMethod.GET)
    public ResultVo AllRoad() {
        return ResultVo.success(null,aisService.getAllRoad());
    }


}
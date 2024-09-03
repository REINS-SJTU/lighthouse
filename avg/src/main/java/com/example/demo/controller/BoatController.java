package com.example.demo.controller;

import com.example.demo.dto.AISInfo;
import com.example.demo.dto.ResultVo;
import com.example.demo.service.AISService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class BoatController {

//    @Autowired
//    AISProducer aisProducer;

    @Autowired
    AISService aisService;

    private final Logger logger = LoggerFactory.getLogger(BoatController.class);

    @RequestMapping("/boat")
    public ResultVo boat(@RequestBody AISInfo data){
        logger.info(data.toString());
        System.out.println(data);
        aisService.handle(data,false);
        return ResultVo.success("OK");
    }

}

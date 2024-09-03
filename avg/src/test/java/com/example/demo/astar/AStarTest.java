package com.example.demo.astar;

import com.example.demo.dao.RoadDao;
import com.example.demo.entity.Road;
import com.example.demo.service.Astar.AStarService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AStarTest {

    @Autowired
    AStarService aStarService;

    @Autowired
    RoadDao roadDao;

    @Test
    public void SearchWay(){
        Integer startRoadID=100, endRoadID=115;
        Road start= roadDao.findRoadById(startRoadID);
        Road end= roadDao.findRoadById(endRoadID);
        List<Road> path=aStarService.searchWay(start,end);
    }

}

package com.example.demo.dataImport;

import com.example.demo.dao.AISDao;
import com.example.demo.dao.RoadDao;
import com.example.demo.dto.AISInfo;
import com.example.demo.entity.*;
import org.assertj.core.util.Lists;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class dataImport {
    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    RoadDao roadDao;

    @Autowired
    AISDao aisDao;

    @Test
    public void setBarrier(){
        //设置障碍物
    }

    @Test
    public void setAIS(){

        Random random = new Random();

        for (int i = 1; i <= 8; i++) {
            int x = random.nextInt(1) + 1;
            int y = random.nextInt(7) + 1;
            int roadID = random.nextInt(460) + 1;

            double len= 0.8;
            double dx = (x-0.5)*len ;
            double dy = (y-0.5)*len ;
            AISInfo aisInfo = new AISInfo(i, 40.0, 0.0, dx, dy);
            AIS ais = new AIS(i, aisInfo, new double[]{dx, dy}, 40.0);
            Car car = new Car(i,roadID,0,0);
            mongoTemplate.insert(ais,"AIS");
            mongoTemplate.save(car,"Car");

            System.out.println(ais);
            System.out.println(car);
        }

    }

    @Test
    public void sqlTest()
    {
        AIS tmp = aisDao.findLatestAIS(9);
        System.out.println(tmp);
    }

    @Test
    public void setRoad(){
        int rows = 7;
        int cols = 14;
        int roadId = 1;

        for (int y = 1; y <= rows; y++) {
            for (int x = 1; x <= cols; x++) {
                Road road = new Road();
                road.setRoadID(roadId);
                road.setLocation(new int[]{x, y}); // Fixed: x, y are swapped


                // Set up, down, left, right neighbors
                road.setDown((y > 1) ? roadId - cols : 0);
                road.setUp((y < rows) ? roadId + cols : 0);
                road.setLeft((x > 1) ? roadId - 1 : 0);
                road.setRight((x < cols) ? roadId + 1 : 0);
                if ((x >= 2 && x <= 13 && y >= 1 && y <= 6) || ( 13<x && x<=14 && 0<y && y<=2 )) {
                    road.setValid(0);
                } else {
                    road.setValid(1);
                }

                System.out.println(road);
                mongoTemplate.save(road, "Road");
                roadId++;
            }
        }
    }

    @Test
    public void setShip()
    {

    }

}

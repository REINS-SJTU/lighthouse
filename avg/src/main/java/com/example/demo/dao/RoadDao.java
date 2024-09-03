package com.example.demo.dao;

import com.example.demo.entity.Road;
import com.example.demo.repository.RoadRepository;
import com.example.demo.util.GeoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class RoadDao {

    @Autowired
    RoadRepository roadRespository;


    public Road findRoadByLocation(double[] loc) {
        int[] tmp = fromLocToRoad(loc);
        Road r = roadRespository.findByLocation(tmp);
        //System.out.println("Road "+r);
        return r;
    }

    public Road findRoadByLoc(int[] loc) {
        Road r = roadRespository.findByLocation(loc);
        //System.out.println("Road "+r);
        return r;
    }

    private int[] fromLocToRoad(double[] loc)
    {
        double len = 0.8;
        int x=(int)(loc[0]/len)+1 ;
        int y =(int)( loc[1]/len)+1;
        int[] ans = new int[]{x,y};
        return ans;
    }

    private double[] fromRoadToLoc(int[] loc)
    {
        double len = 0.8;
        double x = (loc[0]-0.5)*len;
        double y = (loc[1]-0.5)*len;
        double[] ans = new double[]{x,y};
        return ans;
    }

    public Road findRoadById(Integer roadID) {
        return roadRespository.findByRoadID(roadID);
    }


    public List<Road> getOtherRoads(int roadId, int direction) {
        Road road = findRoadById(roadId);
        if (road == null) {
            return new ArrayList<>();
        }

        int[] directions = {road.getUp(), road.getDown(), road.getLeft(), road.getRight()};
        int[][] priorities = {
                {2, 3, 1}, // For UP (1), return LEFT (3), RIGHT (4), DOWN (2)
                {3, 2, 0}, // For DOWN (2), return RIGHT (4), LEFT (3), UP (1)
                {1, 0, 3}, // For LEFT (3), return DOWN (2), UP (1), RIGHT (4)
                {0, 1, 2}, // For RIGHT (4), return UP (1), DOWN (2), LEFT (3)
                {0, 1, 2, 3} // For unknown (5), return all directions
        };

        List<Road> otherRoads = new ArrayList<>();
        for (int i : priorities[direction - 1]) {
            int neighborRoadId = directions[i];
            if (neighborRoadId != 0) {
                Road neighborRoad = findRoadById(neighborRoadId);
                //找到附近的不是障碍物的道路块,删掉了对障碍物的判断 todo：理清这里的逻辑
                if (neighborRoad != null ) {
                    otherRoads.add(neighborRoad);
                }
            }
        }
        return otherRoads;
    }

    public  List<Road> findAll()
    {
        return roadRespository.findAll();
    }

    public void Insert(Road road) {
        roadRespository.save(road);
    }


    public int[] getPointByID(Integer RoadID) {
        Road road = roadRespository.findByRoadID(RoadID);
        int result[] = {road.getLocation()[0], road.getLocation()[1]};
        return result;
    }
    public List<Road> findRoadsByID(Integer roadIDFrom, Integer roadIDTo) {
        return roadRespository.findByIdBetween(roadIDFrom, roadIDTo);
    }

    public void setRoadTmpValid(Integer roadID,Integer valid) {
        Road tmp = roadRespository.findByRoadID(roadID);
        tmp.setValid(valid);
        roadRespository.save(tmp);
    }
}

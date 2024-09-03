package com.example.demo.repository;

import com.example.demo.entity.Road;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.ArrayList;

public interface RoadRepository extends MongoRepository<Road, Integer> {
    @Query("{ '_id' : {$gte : ?0, $lte: ?1 }}")
    ArrayList<Road> findByIdBetween(Integer from, Integer to);

    Road findByLocation (int[] location);

    Road  findByRoadID (int roadID);

}

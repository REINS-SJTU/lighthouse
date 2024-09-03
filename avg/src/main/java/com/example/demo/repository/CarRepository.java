package com.example.demo.repository;

import com.example.demo.entity.AIS;
import com.example.demo.entity.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public  interface CarRepository extends MongoRepository<Car, Integer> {

    @Query(value = "{ 'roadID': ?0 }", sort = "{ '_id': -1 }")
    List<Car> findCarByRoadID(Integer roadID);
}

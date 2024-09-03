package com.example.demo.dao;

import com.example.demo.entity.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public class CarDao {

    @Autowired
    CarRepository carRepository;

    public void SetRoadID(Integer carID, Integer roadID) {
        Car tmp_car = carRepository.findById(carID).get();
        tmp_car.setRoadID(roadID);
        carRepository.save(tmp_car);
    }

    public Car getCar(int carID) {
        return carRepository.findById(carID).get();
    }

    public void setCarTime(int carID, int time) {
        Car tmp_car = carRepository.findById(carID).get();
        tmp_car.setTime(time);
        carRepository.save(tmp_car);
    }

    public void setCarPosition(Integer carID, Integer position) {
        Car tmp_car = carRepository.findById(carID).get();
        tmp_car.setPosition(position);
        carRepository.save(tmp_car);
    }

    public List<Integer> getValidCarIDS() {
        List<Integer> carIDs = new ArrayList<>();
        List<Car> cars = carRepository.findCarByRoadID(0);
        for (Car c : cars)
            carIDs.add(c.getCarID());
        return carIDs;
    }

    public List<Integer> getAllCarIDS() {
        List<Integer> carIDs = new ArrayList<>();
        List<Car> cars = carRepository.findAll();
        for (Car c : cars)
            carIDs.add(c.getCarID());
        return carIDs;
    }
}

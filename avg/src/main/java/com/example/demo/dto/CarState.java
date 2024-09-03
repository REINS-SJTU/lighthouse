package com.example.demo.dto;

import lombok.Data;

@Data
public class CarState {

    Integer carID;
    double x;
    double y;

    public CarState(Integer _carID,double _x, double _y) {
        this.carID = _carID;
        this.x=_x;
        this.y=_y;
    }

}

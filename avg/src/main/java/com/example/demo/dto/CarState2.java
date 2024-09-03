package com.example.demo.dto;

import lombok.Data;

@Data
public class CarState2 {

    Integer carID;
    double x;
    double y;
    boolean valid;

    public CarState2(Integer _carID,double _x, double _y,boolean _valid) {
        this.carID = _carID;
        this.x=_x;
        this.y=_y;
        this.valid = _valid;
    }

}

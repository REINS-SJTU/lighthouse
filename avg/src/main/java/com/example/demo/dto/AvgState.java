package com.example.demo.dto;

import lombok.Data;
@Data
public class AvgState {

    Double x;
    Double y;

    public AvgState(Double x, Double y) {
        this.x=x;
        this.y=y;
    }

}




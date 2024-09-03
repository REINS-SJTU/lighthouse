package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Mission {
    Integer carId;
    Integer x;
    Integer y;

    public Mission(Integer carId,Integer _x,Integer _y)
    {
        this.carId = carId;
        x=_x;
        y=_y;
    }
}

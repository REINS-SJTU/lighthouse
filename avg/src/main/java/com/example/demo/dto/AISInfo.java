package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class AISInfo implements Serializable {

    Integer carId;//小车号码
    Double speed;//对地航速
    Double heading;//对地航向
    Double x;//从左下角算起x
    Double y;//y

    public AISInfo() {
        // 无参构造函数
    }

    public AISInfo(Integer carId, Double speed, Double heading, Double x, Double y) {
        this.carId = carId;
        this.speed = speed;
        this.heading = heading;
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "AISInfo{" +
                "carId=" + carId +
                ", speed=" + speed +
                ", heading=" + heading +
                ", x=" + x +
                ", y=" + y +
                '}';
    }
}

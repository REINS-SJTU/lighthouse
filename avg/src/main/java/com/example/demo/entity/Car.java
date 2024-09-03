package com.example.demo.entity;

import com.example.demo.dto.AISInfo;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Car")
@Getter
@Setter
public class Car {

    @Id
    @Indexed
    Integer carID;
    //目的地号码
    Integer roadID;

    //默认速度
    //Double speed;

    //等待时间
    Integer time;

    //方位
    Integer position;

    public Car(){

    };

    public Car(Integer _carID, Integer _roadID , Integer _time,Integer _position) {
        this.carID = _carID;
        this.roadID = _roadID;
        this.time = _time;
        this.position = _position;
    }

    @Override
    public String toString() {
        return "Car{" +
                "carID=" + carID +
                ", roadID=" + roadID +
                ", time=" + time +
                ", position=" + position +
                '}';
    }
}

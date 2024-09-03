package com.example.demo.entity;

import com.example.demo.dto.AISInfo;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "AIS")
@Getter
@Setter
public class AIS implements Serializable {

    @Indexed
    //car呼号作为主键
    Integer carName;

    AISInfo aisInfo;

    //[x,y] 构建2d索引
    double[] location;

    //目的地号码
    //Integer roadID;

    //超越中，被超越的船舶ID，默认为0
    // Integer overtakenCarID;

    //默认速度
    Double speed;

    //等待时间
    //Integer time;

    //方位
    //Integer position;



    public AIS() {
        // 无参构造函数
    }

    public AIS(Integer carName, AISInfo aisInfo, double[] location, Double speed) {
        this.carName = carName;
        this.aisInfo = aisInfo;
        this.location = location;
//        this.roadID = roadID;
        this.speed = speed;
//        this.time = time;
//        this.position = position;
    }

    @Override
    public String toString() {
        return "AIS{" +
                "carName=" + carName +
                ", aisInfo=" + aisInfo +
                ", location=[" + location[0] + "," + location[1] + "]" +
//                ", roadID=" + roadID +
                ", speed=" + speed +
//                ", time=" + time +
//                ", position=" + position +
                '}';
    }

}

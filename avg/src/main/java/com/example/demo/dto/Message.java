package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

//返回给船舶的导航信息
@Data
@Getter
@Setter
public class Message implements Serializable {

    Integer carId;
    List<double[]> points;
    Double speed;
    List<Double> heading;

    public Message() {}

    public Message(Integer carId, List<double[]> points, Double speed, List<Double> heading) {
        this.carId = carId;
        this.points = points;
        this.speed = speed;
        this.heading = heading;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Message{")
                .append("carId=").append(carId)
                .append(", points=");

        if (points != null && points.size() > 0) {
            sb.append("[");
            for (double[] point : points) {
                sb.append(Arrays.toString(point)).append(",");
            }
            sb.deleteCharAt(sb.length() - 1); // remove trailing comma
            sb.append("]");
        } else {
            sb.append("[");
            sb.append("]");
        }

        sb.append(", speed=").append(speed);
        sb.append(",heading=");
        sb.append("[");
        for(double h:heading)
        {
            sb.append(h).append(",");
        }
        sb.deleteCharAt(sb.length() - 1); // remove trailing comma
        sb.append("]");
        sb.append("}");
        return sb.toString();
    }

}

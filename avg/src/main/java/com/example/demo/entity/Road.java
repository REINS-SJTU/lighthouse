package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Document(collection = "Road")
@Getter
@Setter
public class Road implements Serializable {
    //道路分段的最小单位
    @Indexed
    @Id
    Integer roadID;

    //[x,y] 创建索引
    @Indexed
    int[] location;

    //附近的四个道路块id，不存在的标记为0
    int up;
    int down;
    int left;
    int right;

    //道路块是否可以正常使用
    int valid;

    @Override
    public String toString() {
        return "Road{" +
                "roadID=" + roadID +
                ", location=" + Arrays.toString(location) +
                ", up=" + up +
                ", down=" + down +
                ", left=" + left +
                ", right=" + right +
                ", valid=" + valid +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Road road = (Road) o;
        return Objects.equals(roadID, road.roadID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(roadID);
    }
}

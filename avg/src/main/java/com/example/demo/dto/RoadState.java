package com.example.demo.dto;

import lombok.Data;

@Data
public class RoadState {

    Integer roadID;
    Double longitude;
    Double latitude;

    public RoadState(Integer roadID, Double longitude, Double latitude) {
        this.roadID=roadID;
        this.latitude=latitude;
        this.longitude=longitude;
    }

}

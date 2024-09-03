package com.example.demo.dto;

import lombok.Data;

@Data
public class State{

   Double longitude;
   Double latitude;

   public State(Double longitude, Double latitude) {
      this.latitude=latitude;
      this.longitude=longitude;
   }
}

package com.reins.entrance.entity.dto;

import lombok.Data;

import java.util.List;

@Data
public class WebSocketDTO {
    private List<TaskDTO> task;
    private List<RobotDTO> robot;
    private String msg; // arrive
}

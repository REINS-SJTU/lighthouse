package com.reins.entrance.entity.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private Integer taskId;
    private Double x;
    private Double y;
    private Integer state;
    private Integer status;
    private Integer robotId;
}

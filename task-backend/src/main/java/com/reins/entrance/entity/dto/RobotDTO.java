package com.reins.entrance.entity.dto;

import com.reins.entrance.constant.RobotState;
import lombok.Data;

@Data
public class RobotDTO {
    private Integer robotId;
    private Double x;
    private Double y;
    private Long timestamp;
    private RobotState state; // 类型: 空闲0; 当前任务中1; 历史2; 预测3 ;异常4
}

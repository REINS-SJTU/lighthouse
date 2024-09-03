package com.reins.entrance.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@TableName("robot")
public class Robot {
    @TableId(type= IdType.INPUT)
    private Integer robotId;
    private BigDecimal x;
    private BigDecimal y;
    private Integer state;  // 0 空闲; 1任务中 ; -1异常
    private Integer taskId;
    private Integer residenceId;
    private Timestamp createTime;
    private Timestamp updateTime;
    @TableLogic
    private Integer status;
}

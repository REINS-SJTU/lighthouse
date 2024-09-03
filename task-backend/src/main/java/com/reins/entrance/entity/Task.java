package com.reins.entrance.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@TableName("task")
public class Task {
    @TableId
    private Integer taskId;
    private BigDecimal x;
    private BigDecimal y;
    private Integer robotId;
    private Integer state;  // 0 未开始; 1执行中; 2执行结束; -1异常
    private Timestamp createTime;
    private Timestamp updateTime;
    @TableLogic
    private Integer status;
}

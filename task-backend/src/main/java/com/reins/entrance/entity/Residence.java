package com.reins.entrance.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;

/**
 * 表示园区
 */
@Data
@TableName("residence")
public class Residence {
    @TableId
    private int id;
    private String name;

    private Timestamp createTime;
    private Timestamp updateTime;
    @TableLogic
    private Integer status;
}

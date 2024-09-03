package com.reins.entrance.entity;


import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;

@Data
@TableName("visitor")
public class Visitor {
    @TableId
    private int id;
    private String telephone;
    private int photoId;
    private Timestamp createTime;
    private Timestamp updateTime;
    @TableLogic
    private Integer status;
    @TableField(exist = false)
    private Image photo;
}

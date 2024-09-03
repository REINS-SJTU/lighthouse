package com.reins.entrance.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("image")
public class Image {
    @TableId

    private int id;
    private String imageStr;
}

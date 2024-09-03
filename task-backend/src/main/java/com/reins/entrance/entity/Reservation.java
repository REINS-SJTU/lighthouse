package com.reins.entrance.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import com.reins.entrance.util.AesUtil;
import com.reins.entrance.util.CryptUtil;
import com.reins.entrance.util.JsonUtil;
import lombok.Data;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Data
@TableName("reservation")
public class Reservation {
    @TableId
    private int id;
    private int residenceId;
    private int visitorId;
    private Timestamp startTime;
    private Timestamp endTime;
    private Integer isVisited;
    private Timestamp createTime;
    private Timestamp updateTime;
    @TableLogic
    private Integer status;
    private String inviteCode;

    @TableField(exist = false)
    private Visitor visitor;

    @TableField(exist = false)
    private Residence residence;

    public String generateInviteCode(){
        Map<String,Object> mp = new HashMap<>();
        mp.put("residenceId",residenceId);
        mp.put("visitorId",visitorId);
        // 用时间戳属性的字段做验证，时间戳会有精度误差，难以确定相等
//        mp.put("startTime",startTime);
//        mp.put("endTime",endTime);
//        mp.put("createTime",createTime);
        mp.put("id",id);
        this.inviteCode = CryptUtil.encrypt(mp);
        return this.inviteCode;
    }

    public static boolean validateInviteCode(String inviteCode,Reservation r){
        return CryptUtil.validate(inviteCode,r,new String[]{
                "residenceId","visitorId","id"
        });
    }
}

package com.example.demo.dto;

import lombok.Data;

@Data
public class ResultVo {
    private Integer code;//错误码
    private String msg;//提示信息
    private Object data;//返回的内容
    private static Integer SUCCESS_CODE = 2000;

    ResultVo(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static ResultVo success(String msg) {
        return new ResultVo(SUCCESS_CODE, msg, null);
    }

    public static ResultVo success(String msg, Object data) {
        return new ResultVo(SUCCESS_CODE, msg, data);
    }

}

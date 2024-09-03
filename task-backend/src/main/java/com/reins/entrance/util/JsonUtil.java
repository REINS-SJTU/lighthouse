package com.reins.entrance.util;

import com.alibaba.fastjson.JSONObject;

public class JsonUtil {
    public static String objectToJsonString(Object o){
        return  JSONObject.toJSONString(o);
    }

    public static Object jsonStringToObject(String jstring){
        return JSONObject.parseObject(jstring);
    }


}

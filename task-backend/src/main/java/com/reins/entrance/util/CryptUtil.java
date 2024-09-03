package com.reins.entrance.util;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public class CryptUtil {
    public static String encrypt(Map mp){
        String jsonString = JsonUtil.objectToJsonString(mp);
        return AesUtil.encrypt(jsonString);
    }

    public static Map decrypt(String encryptedString){
        String jsonString = AesUtil.decrypt(encryptedString);
        Map mp = null;
        try{
            mp = (Map) JsonUtil.jsonStringToObject(jsonString);
        }catch (Exception e){
            e.printStackTrace();
        }
        return mp;
    }

    // 验证加密串和对象在fieldNames这些字段上是否相同，相同则验证通过
    public static boolean validate(String encryptedString, Object o, String[] fieldNames){
        Map mp1 = null;
        Map mp2 = null;
        try {
            mp1= decrypt(encryptedString);
            String jsonString = JsonUtil.objectToJsonString(o);
            mp2 = (Map)JsonUtil.jsonStringToObject(jsonString);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }

        for(String fieldName:fieldNames){
            if(!Objects.equals(mp1.get(fieldName),mp2.get(fieldName))) return false;
        }
        return true;
    }
}

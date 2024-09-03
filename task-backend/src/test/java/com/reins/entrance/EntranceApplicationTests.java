package com.reins.entrance;

import com.reins.entrance.constant.ConstantValue;
import com.reins.entrance.service.TaskService;
import com.reins.entrance.util.JsonUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class EntranceApplicationTests {
    @Autowired
    private ConstantValue constantValue;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private TaskService taskService;

    @Test
    void contextLoads() {
        test2();
    }

    void test1(){
        String url = constantValue.navigateUrl+"/ValidCar";
        String jsonStr = restTemplate.getForObject(url,String.class);
        System.out.println(jsonStr);
        Map<String,Object> mp =(Map<String, Object>) JsonUtil.jsonStringToObject(jsonStr);
        Object o = mp.get("data");
        List list = (List) o;
        for(Object oo:list) {
            Map oo1 = (Map) oo;
            System.out.println(oo1.get("x"));
        }
    }

    void test2(){
        taskService.assignTaskToRobot(5,4.0,4.0);
    }

}

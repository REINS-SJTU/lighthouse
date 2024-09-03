package com.reins.entrance.config;

import com.reins.entrance.ws.WebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.redis.core.RedisTemplate;

/**
 * 启动时的配置
 */
@Configuration
@Import(RedisConfig.class)
public class StartupConfig {
    @Autowired
    private RedisTemplate<String,Object> redisTemplate;


    @Bean
    public ApplicationRunner startupRunner(){
        return args -> {
            // 清空Redis所有数据
            redisTemplate.getConnectionFactory().getConnection().flushAll();
        };
    }
}
package com.reins.entrance.dao.impl;

import com.reins.entrance.dao.RobotDao;
import com.reins.entrance.entity.Robot;
import com.reins.entrance.repository.RobotMapper;
import com.reins.entrance.util.DigitUtil;
import com.reins.entrance.util.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.BoundListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.*;

@Repository
public class RobotDaoImpl implements RobotDao {
    @Autowired
    private RobotMapper robotMapper;
    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public List<Robot> getAvailableRobots() {
        return robotMapper.getAvailableRobots();
    }

    @Override
    public Robot getRobotById(Integer robotId) {
        return robotMapper.selectById(robotId);
    }

    @Override
    public Integer updateRobot(Robot robot) {
        return robotMapper.updateById(robot);
    }

    @Override
    public void setRobotActiveInRedis(Integer robotId) {
        String activeStr="ACTIVE_ROBOTS";
        redisTemplate.boundSetOps(activeStr).add(robotId+"");
    }

    @Override
    public void addHistoricalPos(Integer robotId, Robot historicalRobot) {
        String activeStr="ACTIVE_ROBOTS";
        String key=robotId+"";
        System.out.println("redis "+key+","+Boolean.TRUE.equals(redisTemplate.hasKey(activeStr)));
        if(Boolean.TRUE.equals(redisTemplate.hasKey(activeStr))){
            BoundListOperations boundListOperations = redisTemplate.boundListOps(key);
            Long length = boundListOperations.size();
            if(length>0){
                Object lastOne = boundListOperations.index(length - 1);
                if(lastOne==null) boundListOperations.rightPush(JsonUtil.objectToJsonString(historicalRobot));
                else {
                    Object o = JsonUtil.jsonStringToObject((String) lastOne);
                    Map<String,Object> mp = (Map<String, Object>) o;
                    BigDecimal x= DigitUtil.toBigDecimal(mp.get("x"));
                    BigDecimal y= DigitUtil.toBigDecimal(mp.get("y"));
                    System.out.println("redis judge");
                    System.out.println(x+","+y);
                    System.out.println(historicalRobot);
                    if(!(DigitUtil.isEqualBigDecimal(x,historicalRobot.getX())&&DigitUtil.isEqualBigDecimal(y,historicalRobot.getY()))) {
                        boundListOperations.rightPush(JsonUtil.objectToJsonString(historicalRobot));
                    }
                }
            }else {
                boundListOperations.rightPush(JsonUtil.objectToJsonString(historicalRobot));
            }

        }
    }

    @Override
    public List<Robot> getHistoricalPos(Integer robotId) {
        String activeStr="ACTIVE_ROBOTS";
        List<Robot> list = new ArrayList<>();
        if(Boolean.TRUE.equals(redisTemplate.hasKey(activeStr))){
            List<String> robotStrings = redisTemplate.boundListOps(robotId + "").range(0, -1);
            for(String s:robotStrings){
                Map mp = (Map) JsonUtil.jsonStringToObject(s);
                Robot robot = new Robot() ;
                robot.setRobotId((Integer) mp.get("robotId"));
                robot.setCreateTime(new Timestamp((Long)mp.get("createTime")));
                robot.setUpdateTime(new Timestamp((Long)mp.get("updateTime")));
                robot.setStatus(0);
                robot.setState((Integer) mp.get("state"));
                BigDecimal x=DigitUtil.toBigDecimal(mp.get("x"));
                BigDecimal y=DigitUtil.toBigDecimal(mp.get("y"));
                robot.setX(x);
                robot.setY(y);
                list.add(robot);
            }
        }
        return list;
    }


    @Override
    public void deactivateRobot(Integer robotId) {
        String activeStr="ACTIVE_ROBOTS";
        if(Boolean.TRUE.equals(redisTemplate.hasKey(activeStr))){
            redisTemplate.boundSetOps(activeStr).remove(robotId+"");
            redisTemplate.delete(robotId+"");
        }
    }

    @Override
    public Boolean isActive(Integer robotId) {
        String activeStr="ACTIVE_ROBOTS";
        return redisTemplate.hasKey(activeStr)&&redisTemplate.boundSetOps(activeStr).isMember(robotId+"");
    }

    @Override
    public List<Robot> getAllRobots() {
        return robotMapper.selectList(null);
    }

    @Override
    public void refreshAll(List<Robot> robots) {
        robotMapper.truncate();
        Timestamp current = new Timestamp(new Date().getTime());
        for(Robot r: robots){
            r.setCreateTime(current);
            r.setUpdateTime(current);
            robotMapper.insert(r);
        }
    }
}

package com.reins.entrance.dao;

import com.reins.entrance.entity.Robot;

import java.util.List;

public interface RobotDao {
    List<Robot> getAvailableRobots();
    Robot getRobotById(Integer robotId);
    Integer updateRobot(Robot robot);
    void setRobotActiveInRedis(Integer robotId);
    void addHistoricalPos(Integer robotId,Robot historicalRobot);
    List<Robot> getHistoricalPos(Integer robotId);
    void deactivateRobot(Integer robotId);
    Boolean isActive(Integer robotId);
    List<Robot> getAllRobots();
    void refreshAll(List<Robot> robots);
}

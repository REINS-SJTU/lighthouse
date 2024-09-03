package com.reins.entrance.service;

import com.reins.entrance.entity.Task;
import com.reins.entrance.entity.dto.ObstacleDTO;
import com.reins.entrance.entity.dto.RobotDTO;
import com.reins.entrance.entity.dto.TaskDTO;

import java.util.List;
import java.util.Map;

public interface TaskService {
    /**
     * 定期拉取机器人位置信息
     * 暂存路经的点
     */
    void refreshRobotPositionData();

    /**
     * 接收机器人到达的信息，更新机器人状态
     */
    void robotArrives(Integer robotId);

    /**
     * 找到最近的招待机器人
     * @param x
     * @param y
     * @return robotId
     */
    Integer findNearestRobot(Double x,Double y);

    /**
     * 生成一个导航任务并通知机器人行动
     * @return task
     */
    Task assignTaskToRobot(Integer robotId,Double x,Double y);

    List<RobotDTO> getRobotDTOsOfAllState();

    List<TaskDTO> getAllTasks();

    List<ObstacleDTO> getAllObstacles();
}

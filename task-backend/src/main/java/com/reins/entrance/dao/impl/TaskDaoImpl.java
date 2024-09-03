package com.reins.entrance.dao.impl;

import com.reins.entrance.dao.TaskDao;
import com.reins.entrance.entity.Task;
import com.reins.entrance.repository.TaskMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;


import java.sql.Timestamp;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Repository
public class TaskDaoImpl implements TaskDao {
    @Autowired
    private TaskMapper taskMapper;
    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public Integer createNewTask(Task task) {
        Timestamp current = new Timestamp(new Date().getTime());
        task.setCreateTime(current);
        task.setUpdateTime(current);
        task.setStatus(0);
        taskMapper.insert(task);
        return 0;
    }

    @Override
    public Integer updateTaskState(Integer taskId, Integer state) {
        return taskMapper.updateTaskState(taskId, state);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskMapper.selectList(null);
    }
}

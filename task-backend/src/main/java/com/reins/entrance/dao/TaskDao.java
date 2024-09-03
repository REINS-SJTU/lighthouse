package com.reins.entrance.dao;

import com.reins.entrance.entity.Task;

import java.util.List;

public interface TaskDao {
    Integer createNewTask(Task task);
    Integer updateTaskState(Integer taskId,Integer state);
    List<Task> getAllTasks();
}

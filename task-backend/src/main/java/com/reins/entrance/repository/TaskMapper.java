package com.reins.entrance.repository;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Task;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface TaskMapper extends BaseMapper<Task> {

    @Update("UPDATE task SET state=#{state} " +
            "WHERE task_id=#{taskId} AND status=0")
    Integer updateTaskState(Integer taskId,Integer state);
}

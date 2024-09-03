package com.reins.entrance.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Robot;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RobotMapper extends BaseMapper<Robot> {

    @Select("SELECT * FROM robot WHERE status=0 AND state=0")
    List<Robot> getAvailableRobots();

    @Update("truncate table robot")
    void truncate();
}

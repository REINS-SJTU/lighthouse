package com.reins.entrance.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Residence;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ResidenceMapper extends BaseMapper<Residence> {
}

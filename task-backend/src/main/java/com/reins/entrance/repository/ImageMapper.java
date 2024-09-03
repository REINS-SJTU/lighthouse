package com.reins.entrance.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Image;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ImageMapper extends BaseMapper<Image> {
    @Select("SELECT * FROM `image` WHERE `id`=#{id}")
    Image getImageById(Integer id);
}

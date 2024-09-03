package com.reins.entrance.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Image;
import com.reins.entrance.entity.Visitor;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface VisitorMapper extends BaseMapper<Visitor> {
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER, id = true),
            @Result(
                    column = "photo_id", property = "photo",javaType = Image.class,
                    one = @One(select = "com.reins.entrance.repository.ImageMapper.getImageById", fetchType = FetchType.LAZY)
            )
    })
    @Select("SELECT * FROM `visitor` WHERE `telephone`=#{telephone}")
    Visitor getVisitorByTelephone(String telephone);

    @Update("UPDATE `visitor` SET photo_id=#{pid},`update_time`=NOW() WHERE `id`=#{vid}")
    void updatePhotoId(Integer vid,Integer pid);
}

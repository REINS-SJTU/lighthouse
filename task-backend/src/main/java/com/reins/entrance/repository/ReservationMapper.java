package com.reins.entrance.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.reins.entrance.entity.Reservation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ReservationMapper extends BaseMapper<Reservation> {
    @Select("SELECT * FROM `reservation` " +
            "WHERE residence_id=#{residenceId} AND  visitor_id=#{visitorId} " +
            "AND is_visited=0 AND end_time>NOW() " +
            "ORDER BY end_time ASC ")
    List<Reservation> getReservationByResidenceAndVisitor(Integer residenceId,Integer visitorId);

    @Select("SELECT * FROM `reservation` " +
            "WHERE end_time>=NOW() AND is_visited=0 " +
            "AND visitor_id=#{visitorId} AND residence_id=#{residenceId} ")
    List<Reservation> getReservedInfo(Integer residenceId,Integer  visitorId);

    @Update("UPDATE `reservation` SET invite_code=#{inviteCode},update_time=NOW() " +
            "WHERE `id`=#{reservationId} ")
    Integer updateInviteCode(Integer reservationId,String inviteCode);
}

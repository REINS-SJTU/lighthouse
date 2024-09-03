package com.reins.entrance.dao.impl;

import com.reins.entrance.dao.ReservationDao;
import com.reins.entrance.entity.Reservation;
import com.reins.entrance.repository.ReservationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Repository
public class ReservationDaoImpl implements ReservationDao {
    @Autowired
    private ReservationMapper reservationMapper;
    @Override
    public List<Reservation> getReservationByResidenceAndVisitor(Integer residenceId, Integer visitorId) {
        return reservationMapper.getReservationByResidenceAndVisitor(residenceId, visitorId);
    }

    @Override
    public Integer updateVisited(Integer reservationId) {
        Reservation reservation = reservationMapper.selectById(reservationId);
        reservation.setIsVisited(1);
        Timestamp current = new Timestamp(new Date().getTime());
        reservation.setUpdateTime(current);
        return reservationMapper.updateById(reservation);
    }

    @Override
    public Integer insertNewReservation(Reservation reservation) {
        Timestamp current = new Timestamp(new Date().getTime());
        System.out.println("This time : "+new Date(current.getTime()));
        reservation.setCreateTime(current);
        reservation.setUpdateTime(current);
        reservation.setStatus(0);
        return reservationMapper.insert(reservation);
    }

    @Override
    public List<Reservation> getReservedInfo(Integer residenceId, Integer visitorId) {
        return reservationMapper.getReservedInfo(residenceId, visitorId);
    }

    @Override
    public Integer updateInviteCode(Integer reservationId,String inviteCode) {
        return reservationMapper.updateInviteCode(reservationId,inviteCode);
    }

    @Override
    public Reservation getReservationById(Integer reservationId) {
        return reservationMapper.selectById(reservationId);
    }
}

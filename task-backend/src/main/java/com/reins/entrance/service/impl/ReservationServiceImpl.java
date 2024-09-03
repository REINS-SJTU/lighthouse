package com.reins.entrance.service.impl;

import com.reins.entrance.dao.ReservationDao;
import com.reins.entrance.entity.Reservation;
import com.reins.entrance.service.ReservationService;
import com.reins.entrance.util.CryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class ReservationServiceImpl implements ReservationService {
    @Autowired
    private ReservationDao reservationDao;
    @Override
    public Reservation matchReservation(Integer residenceId, Integer visitorId) {
        List<Reservation> reservations = reservationDao.getReservationByResidenceAndVisitor(residenceId, visitorId);
        if(reservations==null|| reservations.isEmpty()) return null;
        return reservations.get(0);
    }

    @Override
    public boolean updateVisited(Integer reservationId) {
        Integer i = reservationDao.updateVisited(reservationId);
        return i>0;
    }

    @Override
    public Reservation insertNewReservation(Integer visitorId, Integer residenceId, Timestamp startTime, Timestamp endTime) {
        Reservation reservation = new Reservation();
        reservation.setResidenceId(residenceId);
        reservation.setVisitorId(visitorId);
        reservation.setStartTime(startTime);
        reservation.setEndTime(endTime);
        reservation.setIsVisited(0);
        boolean b= reservationDao.insertNewReservation(reservation)>0;
        Integer i = reservationDao.updateInviteCode(reservation.getId(), reservation.generateInviteCode());
        if(!(b&&i>0)) return null;
        return reservationDao.getReservationById(reservation.getId());
    }

    @Override
    public List<Reservation> getReservedInfo( Integer residenceId,Integer visitorId) {
        return reservationDao.getReservedInfo(residenceId,visitorId);
    }

    @Override
    public Reservation getReservationById(Integer id) {
        return reservationDao.getReservationById(id);
    }


}

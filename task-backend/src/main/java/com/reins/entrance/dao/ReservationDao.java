package com.reins.entrance.dao;

import com.reins.entrance.entity.Reservation;

import java.util.List;

public interface ReservationDao {
    List<Reservation> getReservationByResidenceAndVisitor(Integer residenceId, Integer visitorId);
    Integer updateVisited(Integer reservationId);
    Integer insertNewReservation(Reservation reservation);
    List<Reservation> getReservedInfo(Integer residenceId,Integer visitorId);
    Integer updateInviteCode(Integer reservationId,String inviteCode);

    Reservation getReservationById(Integer reservationId);

}

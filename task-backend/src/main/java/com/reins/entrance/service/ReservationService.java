package com.reins.entrance.service;

import com.reins.entrance.entity.Reservation;

import java.sql.Timestamp;
import java.util.List;

public interface ReservationService {
    Reservation matchReservation(Integer residenceId, Integer visitorId);
    boolean updateVisited(Integer reservationId);

    Reservation insertNewReservation(Integer visitorId, Integer residenceId,
                                 Timestamp startTime, Timestamp endTime);
    List<Reservation> getReservedInfo(Integer residenceId,Integer visitorId);

    Reservation getReservationById(Integer id);
}

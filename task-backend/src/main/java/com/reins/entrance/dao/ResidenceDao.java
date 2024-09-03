package com.reins.entrance.dao;

import com.reins.entrance.entity.Residence;

import java.util.List;

public interface ResidenceDao {
    List<Residence> getAllResidences();
    Residence getResidenceById(Integer residenceId);
}

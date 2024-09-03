package com.reins.entrance.dao.impl;

import com.reins.entrance.dao.ResidenceDao;
import com.reins.entrance.entity.Residence;
import com.reins.entrance.repository.ResidenceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ResidenceDaoImpl implements ResidenceDao {
    @Autowired
    private ResidenceMapper residenceMapper;
    @Override
    public List<Residence> getAllResidences() {
        return residenceMapper.selectList(null);
    }

    @Override
    public Residence getResidenceById(Integer residenceId) {
        return residenceMapper.selectById(residenceId);
    }
}

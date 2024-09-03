package com.reins.entrance.service.impl;

import com.reins.entrance.dao.ResidenceDao;
import com.reins.entrance.entity.Reservation;
import com.reins.entrance.entity.Residence;
import com.reins.entrance.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentServiceImpl implements ResidentService {
    @Autowired
    private ResidenceDao residenceDao;
    @Override
    public List<Residence> getAllResidences() {
        return residenceDao.getAllResidences();
    }
}

// 夏：SQL子查询匹配
// 齐：数据校验与纠错/数据库学习
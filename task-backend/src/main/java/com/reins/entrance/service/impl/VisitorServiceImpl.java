package com.reins.entrance.service.impl;

import com.reins.entrance.dao.VisitorDao;
import com.reins.entrance.entity.Visitor;
import com.reins.entrance.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VisitorServiceImpl implements VisitorService {
    @Autowired
    private VisitorDao visitorDao;

    @Override
    public Visitor getVisitorByTelephone(String telephone) {
        return visitorDao.getVisitorByTelephone(telephone);
    }

    @Override
    public Boolean uploadPhoto(Integer vid, String photo) {
        return visitorDao.uploadPhoto(vid, photo);
    }

    @Override
    public Boolean insertNewVisitor(String telephone) {
        return visitorDao.insertNewVisitor(telephone);
    }
}

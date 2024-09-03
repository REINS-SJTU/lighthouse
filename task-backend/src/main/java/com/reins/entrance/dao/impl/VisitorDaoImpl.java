package com.reins.entrance.dao.impl;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.reins.entrance.dao.VisitorDao;
import com.reins.entrance.entity.Image;
import com.reins.entrance.entity.Visitor;
import com.reins.entrance.repository.ImageMapper;
import com.reins.entrance.repository.VisitorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;

@Repository
public class VisitorDaoImpl implements VisitorDao {
    @Autowired
    private VisitorMapper visitorMapper;
    @Autowired
    private ImageMapper imageMapper;

    @Override
    public Visitor getVisitorByTelephone(String telephone) {
        return visitorMapper.getVisitorByTelephone(telephone);
    }

    @Override
    public Boolean uploadPhoto(Integer vid, String photo) {
        Image image = new Image();
        image.setImageStr(photo);
        int i = imageMapper.insert(image);
        System.out.println(vid+", "+image);
        visitorMapper.updatePhotoId(vid,image.getId());
        return i>0;
    }

    @Override
    public Boolean insertNewVisitor(String telephone) {
        Visitor visitor = new Visitor();
        Timestamp current = new Timestamp(new Date().getTime());
        visitor.setCreateTime(current);
        visitor.setUpdateTime(current);
        visitor.setTelephone(telephone);
        visitor.setStatus(0);
        return visitorMapper.insert(visitor)>0;
    }
}

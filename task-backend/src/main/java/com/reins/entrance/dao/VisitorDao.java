package com.reins.entrance.dao;

import com.reins.entrance.entity.Visitor;

public interface VisitorDao {
    Visitor getVisitorByTelephone(String telephone);
    Boolean uploadPhoto(Integer vid,String photo);
    Boolean insertNewVisitor(String telephone);
}

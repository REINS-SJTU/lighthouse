package com.reins.entrance.service;

import com.reins.entrance.entity.Visitor;

public interface VisitorService {
    Visitor getVisitorByTelephone(String telephone);
    Boolean uploadPhoto(Integer vid, String photo);
    Boolean insertNewVisitor(String telephone);
}

package com.reins.entrance.constant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ConstantValue {
    @Value("${navigate.url}")
    public String navigateUrl;
}

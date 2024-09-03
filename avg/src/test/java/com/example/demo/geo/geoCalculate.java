package com.example.demo.geo;

import com.example.demo.util.GeoUtil;
import org.junit.jupiter.api.Test;

public class geoCalculate {

    //计算两点间距离
    @Test
    void LenWithPoints(){
        double longitude1 = 100;
        double latitude1 = 30;
        double longitude2 = 100;
        double latitude2 = 30.0002;
        Double result = GeoUtil.getLenWithPoints(longitude1,latitude1,longitude2,latitude2);
        System.out.println(result);
    }


}
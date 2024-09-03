package com.example.demo.util;

import org.springframework.stereotype.Component;

//地理距离和角度有关的测算
@Component
public class GeoUtil {
    private final static double EARTH_RADIUS = 6378137.0;

    //计算两船间的角度 从东开始逆时针，lon经度lat纬度，1是自己的位置
    public static double bearing( double lon1,double lat1, double lon2, double lat2){
        return Math.toDegrees(Math.atan2(lat2-lat1,lon2-lon1));
    }

    //计算两点间距离，输入经纬度
    public static Double getLenWithPoints(double longitude1, double latitude1, double longitude2, double latitude2) {
        // 纬度
        double lat1 = Math.toRadians(latitude1);
        double lat2 = Math.toRadians(latitude2);
        // 经度
        double lng1 = Math.toRadians(longitude1);
        double lng2 = Math.toRadians(longitude2);
        // 纬度之差
        double a = lat1 - lat2;
        // 经度之差
        double b = lng1 - lng2;
        // 计算两点距离的公式
        double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
                Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(b / 2), 2)));
        // 弧长乘地球半径, 返回单位: 米
        s =  s * EARTH_RADIUS;
        s = Math.round(s *10000) *0.0001d;
        return s;
    }

    //计算点到直线的距离 (x位置为经度，y位置为纬度，先是直线上两点坐标，再是船只坐标)
    public static Double getLength(double lx1, double ly1, double lx2, double ly2, double px, double py) {
        double length;
        double b = getLenWithPoints(lx1, ly1, px, py);
//        System.out.println("b:"+b);
        double c = getLenWithPoints(lx2, ly2, px, py);
//        System.out.println("c:"+c);
        double a = getLenWithPoints(lx1, ly1, lx2, ly2);
//        System.out.println("a:"+a);

        // 组成锐角三角形，则求三角形的高
        if(b+c<=a)
            return 0.0;

        double p = (a + b + c) / 2;// 半周长
//        System.out.println("p:"+p);
        double s = Math.sqrt(p * (p - a) * (p - b) * (p - c));// 海伦公式求面积
//        System.out.println("s:"+s);
        length = 2 * s / a;// 返回点到线的距离（利用三角形面积公式求高）
        return length;
    }

    //坐标转换
    /**
     * 常用地图转换工具类（各个地图API采用的坐标系(WGS84坐标系：即地球坐标系，国际上通用的坐标系。谷歌地图用此坐标
     * 百度地图API                 百度坐标 (BD09坐标系：即百度坐标系，GCJ02坐标系经加密后的坐标系。
     * 腾讯搜搜地图API            火星坐标 (GCJ02坐标系：即火星坐标系，WGS84坐标系经加密后的坐标系。
     * 阿里云地图API             火星坐标 (GCJ02坐标系：即火星坐标系，WGS84坐标系经加密后的坐标系。
     * 高德MapABC地图API        火星坐标 (GCJ02坐标系：即火星坐标系，WGS84坐标系经加密后的坐标系。
     */
        /**
         * 坐标转换，腾讯地图转换成百度地图坐标
         * @param latitude 腾讯纬度
         * @param longitude 腾讯经度
         * @return 返回结果：经度,纬度
         */
        public static String map_tx2bd(double longitude, double latitude){
            double bd_lat;
            double bd_lon;
            double x_pi=3.14159265358979324;
            double x = longitude, y = latitude;
            double z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
            double theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
            bd_lon = z * Math.cos(theta) + 0.0065;
            bd_lat = z * Math.sin(theta) + 0.006;

            System.out.println("bd_lat:"+bd_lat);
            System.out.println("bd_lon:"+bd_lon);
            return bd_lon+","+bd_lat;
        }


        /**
         * 坐标转换，百度地图坐标转换成腾讯地图坐标
         * @param latitude  百度坐标纬度
         * @param longitude  百度坐标经度
         * @return 返回结果：纬度,经度
         */
        public static String map_bd2tx(double longitude, double latitude){
            double tx_lat;
            double tx_lon;
            double x_pi=3.14159265358979324;
            double x = longitude - 0.0065, y = latitude - 0.006;
            double z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
            double theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
            tx_lon = z * Math.cos(theta);
            tx_lat = z * Math.sin(theta);
            return tx_lat+","+tx_lon;
        }

}

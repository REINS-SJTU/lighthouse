package com.example.demo.dao;

import com.example.demo.dto.AISInfo;
import com.example.demo.dto.CarState;
import com.example.demo.dto.CarState2;
import com.example.demo.entity.AIS;
import com.example.demo.entity.Car;
import com.example.demo.repository.AISRepository;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.RoadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AISDao {

    @Autowired
    AISRepository aisRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    RoadRepository roadRepository;

    @Autowired
    CarRepository carRepository;


    //获取旧的AIS信息，并进行更新和包装，插入新数据
    //这里做出改变，aisinfo初始的x为正，y为负，进行转换将y转化为正值
    public AIS getAIS(AISInfo aisinfo) {
        AIS ais = new AIS();
        ais.setAisInfo(aisinfo);
        double[] loc = {aisinfo.getX(), aisinfo.getY()};
        ais.setLocation(loc);
        int carID = aisinfo.getCarId();
        //查看carName是否存在，存在更新其他属性
        if (aisRepository.existsByCarName(carID)) {
            AIS oldAis = findLatestAIS(carID);
            ais.setCarName(aisinfo.getCarId());
            System.out.println("oldAIS "+oldAis);
            if (oldAis.getSpeed() != null) {
                ais.setSpeed(oldAis.getSpeed());
            }
        }
        return ais;
    }

    //将AIS信息存入数据库，只存新信息
    public void addAISRecords(AIS ais) {
//        System.out.println("加入数据库船只名："+ais.getAisInfo().getVesselName());
        aisRepository.insert(ais);
    }

    public AIS findLatestAIS(Integer carName) {

        List<AIS> results = aisRepository.findFirstByCarNameOrderByInsertionTimeDesc(carName, PageRequest.of(0, 1));

        //System.out.println("LatestAIS"+results);
        return results.isEmpty() ? null : results.get(0);
    }


//    public void setAisTime(Integer carID, Integer time) {
//        AIS tmp = findLatestAIS(carID);
//        tmp.setTime(time);
//        aisRepository.save(tmp);
//    }
//
//    public int getAisTime(Integer carID) {
//        AIS tmp =  findLatestAIS(carID);
//        return tmp.getTime();
//    }
//
//    public void setAisPosition(Integer carID, Integer position) {
//        AIS tmp =  findLatestAIS(carID);
//        tmp.setPosition(position);
//        aisRepository.save(tmp);
//    }
//
//    public int getAisPosition(Integer carID) {
//        AIS tmp =  findLatestAIS(carID);
//        return tmp.getPosition();
//    }

//    public AIS findShipByID(Integer ShipID) {
//        return aisRepository.findById(ShipID).get();
//    }

//    public List<AIS> findShipsByID(Integer shipIDFrom, Integer shipIDTo) {
//        return aisRepository.findByIdBetween(shipIDFrom, shipIDTo);
//    }


//    public void SetRoadID(Integer carId, Integer roadId) {
//        AIS oldAis = aisRepository.findById(carId).get();
//        oldAis.setRoadID(roadId);
//        aisRepository.save(oldAis);
//    }

    public List<CarState2> getValidCar(List<Integer> carIDS) {
        List<CarState2> ans = new ArrayList<>();
        for (Integer id : carIDS) {
            AIS ais = findLatestAIS(id);
            Car tmp_car = carRepository.findById(id).get();
            boolean valid = tmp_car.getRoadID() == 0? true:false;
            ans.add(new CarState2(id, ais.getLocation()[0], ais.getLocation()[1],valid));
        }
        return ans;
    }

}
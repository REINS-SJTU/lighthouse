package com.example.demo.dataImport;

import com.csvreader.CsvReader;
import com.example.demo.entity.Road;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class csvImport {

    @Autowired
    MongoTemplate mongoTemplate;

//    @Test
//    public void RoadImport() throws IOException {
//        String fileDir = "src/main/resources/RoadInfo.csv";
//        CsvReader csvReader = new CsvReader(fileDir);
//        csvReader.readHeaders();//读取表头
//
//        // 读取每行的内容
//        while (csvReader.readRecord()) {
//            Road road=new Road();
//            if(!csvReader.get("_id").isEmpty()){
//                Integer _id = Integer.valueOf(csvReader.get("_id"));
//                road.setRoadID(_id);
//            }
//            if(!csvReader.get("Longitude").isEmpty() && !csvReader.get("Latitude").isEmpty()){
//                double Longitude = Double.parseDouble(csvReader.get("Longitude"));
//                double Latitude = Double.parseDouble(csvReader.get("Latitude"));
//                double[] loc={Longitude,Latitude};
//                road.setLocation(loc);
//            }
//            if(!csvReader.get("accessID").isEmpty()){
//                Integer accessID = Integer.valueOf(csvReader.get("accessID"));
//                road.setAccessID(accessID);
//            }
//            if(!csvReader.get("accessType").isEmpty()){
//                Integer accessType = Integer.valueOf(csvReader.get("accessType"));
//                road.setAccessType(accessType);
//            }
//            if(!csvReader.get("angle").isEmpty()){
//                Double angle = Double.valueOf(csvReader.get("angle"));
//                road.setAngle(angle);
//            }
//            if(!csvReader.get("location").isEmpty()){
//                String str = csvReader.get("location").replace("[","").replace("]","");
//                String[] strArray = str.split(",");
//                double[] location = new double[2];
//                for(int i=0;i<strArray.length;i++){
//                    location[i]= Double.parseDouble((strArray[i]));
//                }
//                road.setLocation(location);
//            }
//            if(!csvReader.get("nearAccess").isEmpty()){
//                String str = csvReader.get("nearAccess").replace("[","").replace("]","");
//                String[] strArray = str.split(",");
//                List<Integer> nearAccess=new ArrayList<>();
//                for(String i:strArray){
//                    nearAccess.add(Integer.valueOf(i));
//                }
//                road.setNearAccess(nearAccess);
//            }
//            if(!csvReader.get("nearRoad").isEmpty()){
//                String str = csvReader.get("nearRoad").replace("[","").replace("]","");
//                String[] strArray = str.split(",");
//                List<Integer> nearRoad=new ArrayList<>();
//                for(String i:strArray){
//                    nearRoad.add(Integer.valueOf(i));
//                }
//                road.setNearRoad(nearRoad);
//            }
//            if(!csvReader.get("serialNumber").isEmpty()){
//                String str = csvReader.get("serialNumber").replace("[","").replace("]","");
//                String[] strArray = str.split(",");
//                Integer[] serialNumber = new Integer[2];
//                for(int i=0;i<strArray.length;i++){
//                    serialNumber[i]= Integer.valueOf((strArray[i]));
//                }
//                road.setSerialNumber(serialNumber);
//            }
//
//            mongoTemplate.save(road,"Road");
//
//        }
//
//    }
}

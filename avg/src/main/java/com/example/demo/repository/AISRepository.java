package com.example.demo.repository;

import com.example.demo.entity.AIS;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface AISRepository extends MongoRepository<AIS, Integer> {
    @Query("{ '_id' : {$gte : ?0, $lte: ?1 }}")
    ArrayList<AIS> findByIdBetween(Integer from, Integer to);

    Boolean existsByCarName(int carName);

    @Query(value = "{ 'carName': ?0 }", sort = "{ '_id': -1 }")
    List<AIS> findTopByCarNameOrderByInsertionTimeDesc(Integer carName);

    @Query(value = "{ 'carName': ?0 }", sort = "{ '_id': -1 }")
    List<AIS> findFirstByCarNameOrderByInsertionTimeDesc(Integer carName,Pageable pageable);

//    @Query(value = "{ 'carName': { $gt: ?0, $lt: ?1 } }", sort = "{ '_id': -1 }")
//    Optional<AIS> findTopByCarNameRangeOrderByInsertionTimeDesc(Integer lowerBound, Integer upperBound);


}

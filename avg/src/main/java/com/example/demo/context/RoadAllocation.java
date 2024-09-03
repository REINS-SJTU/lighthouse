package com.example.demo.context;

import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

//路口处的道路块分配表
@Component
public class RoadAllocation {
    //<shipID,List<roadID>>
    private static final ConcurrentHashMap<Integer, List<Integer>> map = new ConcurrentHashMap<>();
    //道路块的占用情况
    private final Set<Integer> RoadsSet = Collections.synchronizedSet(new HashSet<>());

    private static final ConcurrentHashMap<Integer, Deque<int[]>> navigation = new ConcurrentHashMap<>();


    //给某艘船分配道路块（多个）自己的位置加后续道路位置
    public void mapPut(Integer shipID, List<Integer> roads){
//        System.out.println("mapPut "+shipID+" "+roads);
        map.put(shipID,roads);
//        mapPrint();
    }


    //移除某艘船分配的道路块
    public void mapRemove(Integer shipID){
        System.out.println("mapRemove "+shipID);
        map.remove(shipID);
//        mapPrint();
    }


    //判断某个道路块是否被分配
    public boolean obstacleInMap(Integer roadID, Integer shipID){
        for(Integer i:map.keySet()){
            if(i==shipID){
                continue;
            }
            List<Integer> tmp = map.get(i);
            if (tmp != null&& tmp.contains(roadID)) {
                return true;
            }
        }
//        System.out.println("roadIds Inmap:"+roadIds);
        return false;
    }

    public void mapPrint(){
        for(Integer key:map.keySet()){
            System.out.println("map"+key+" : "+map.get(key));
        }
    }

    public void navigationPut(int carID,int[] points)
    {
        Deque<int[]> tmp = navigation.getOrDefault(carID,new LinkedList<>());
        if(tmp.size()<4)
        {
            tmp.add(points);
        }else {
            tmp.poll();
            tmp.add(points);
        }
        navigation.put(carID,tmp);
    }

    public int[] navigationGetFirst(int carID)
    {
        Deque<int[]> tmp = navigation.getOrDefault(carID,new LinkedList<>());
        if(tmp.isEmpty())
        {
            return new int[]{0,0};

        }else {
            return tmp.peek();
        }
    }

    public int[] navigationGetLast(int carID)
    {
        Deque<int[]> tmp = navigation.getOrDefault(carID,new LinkedList<>());
        if(tmp.isEmpty())
        {
            return new int[]{0,0};

        }else {
            return tmp.peekLast();
        }
    }

    //是否在之前规划的道路中
    public boolean navigationCheck(int carID,int[] ans)
    {
        Deque<int[]> tmp = navigation.getOrDefault(carID,new LinkedList<>());
        if(tmp.isEmpty())
        {
            return false;

        }else {
            for(int[] t:tmp)
            {
                if(t[0] == ans[0] && t[1] == ans[1])
                {
                    return true;
                }
            }
        }
        return false;
    }


    public List<Integer> mapGet(Integer shipID){
            return map.getOrDefault(shipID,new ArrayList<>());
    }

    
}

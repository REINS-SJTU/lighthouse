package com.example.demo.service.Astar;

import com.example.demo.dao.RoadDao;
import com.example.demo.entity.Road;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class AStarService {

    @Autowired
    RoadDao roadDao;

//    @Autowired
//    SubAreaDao subAreaDao;

    public List<Road> searchWay(Road startRoad, Road endRoad)
    {
        //判断起始点和终点是否有障碍物
//        if(subAreaDao.isObstacle(startRoad.getRoadID()) || subAreaDao.isObstacle(endRoad.getRoadID())) {
//            return new ArrayList<>();
//        }
        System.out.println("开始寻路");
        Node start=new Node(startRoad);
        start.setGH(0.0, distance(startRoad, endRoad));
        Node end= new Node(endRoad);

        Queue<Node> openList=new PriorityQueue<Node>();
        List<Node> closeList= new ArrayList<>();
        openList.add(start);
//        System.out.println("end_road"+end.road.getRoadID());
        return moveNodes(end,openList,closeList);
    }


    private List<Road> moveNodes(Node end, Queue<Node> openList, List<Node> closeList)
    {
        List<Road> path=new ArrayList<>();
        while (!openList.isEmpty())
        {
            Node current=openList.poll();
            closeList.add(current);
         //   System.out.println("AStar: closeNode "+current.road.getRoadID());

            if(isInCloseList(end,closeList))
            {
                //回溯法找到路径
                path=draw(end,closeList);
                StringBuilder str= new StringBuilder("AStar find path: ");
                for(Road r:path){
                    str.append(r.getRoadID());
                    str.append(" ");
                }
                System.out.println(str);
                break;
            }

            addNeighbourToOpen(end,current,openList,closeList);
   //         printList(openList,closeList);
        }

        return path;
    }



    private void addNeighbourToOpen(Node end,Node current, Queue<Node> openList, List<Node> closeList)
    {
        List<Integer> roadIDs=new ArrayList<>();
        roadIDs.add(current.road.getUp());
        roadIDs.add(current.road.getDown());
        roadIDs.add(current.road.getLeft());
        roadIDs.add(current.road.getRight());
  //      System.out.println("roadIDs"+roadIDs);

        List<Road> roads=new ArrayList<>();
        for(Integer rID:roadIDs)
        {
            //去掉为0，不存在的情况
            if(rID != 0) roads.add(roadDao.findRoadById(rID));
        }

        for(Road r:roads)
        {
            addNeighbourToOpen2(end,r,current,openList,closeList);
        }
    }

    private void addNeighbourToOpen2(Node end,Road r, Node current, Queue<Node> openList, List<Node> closeList)
    {
        if(canAddToOpen(r,closeList))
        {
            //计算权重
            Double g=current.g + distance(current.road,r);

            Node node=findNodeInOpen(r,openList);
            if(node == null)
            {
                Node n=new Node(r,current,g,distance(r,end.road));
                openList.add(n);
//                System.out.println("AStar: openNode "+n.road.getRoadID()+" g="+n.g+" h="+n.h+" f="+n.f);
//                System.out.println(n.road.getRoadID()+" parent is "+n.parent.road.getRoadID());
//                printList(openList,closeList);
            }else if(node.g > g)
            {
                node.setGH(g, node.h);
                node.parent=current;
//                System.out.println("AStar: updateNode "+node.road.getRoadID()+" g="+node.g+" h="+node.h+" f="+node.f);
//                System.out.println(node.road.getRoadID()+" parent is "+node.parent.road.getRoadID());
//                printList(openList,closeList);

            }
        }
    }


    private Node findNodeInOpen(Road r, Queue<Node> openList) {
        for(Node n:openList) {
            if(n.road.getRoadID().intValue() ==r.getRoadID().intValue()) {
                return n;
            }
        }
        return null;
    }

    private boolean canAddToOpen(Road r, List<Node> closeList) {
        //为障碍物 Todo:设置road属性被占用
        Node n=new Node(r);
        if(r.getValid() == 0) {
            return false;
        }
        //在closelist中
        if(isInCloseList(n,closeList)) {
            return false;
        }
        return true;
    }

    private boolean isInCloseList(Node node, List<Node> closeList) {
//        for(Node n:closeList){
//            System.out.println("clostlist node"+n.road.getRoadID());
//            if( n.road.getRoadID().intValue() == node.road.getRoadID().intValue()){
//                return true;
//            }
//        }
//        return false;

        return closeList.stream().anyMatch(n -> n.road.getRoadID() == node.road.getRoadID());
    }

    private List<Road> draw(Node end, List<Node> closeList) {
        for(Node n:closeList) {
            if(n.road.getRoadID().intValue() == end.road.getRoadID().intValue()) {
                end=n;
                break;
            }
        }
        List<Road> nodeList=new ArrayList<>();
        while (end!=null) {
            nodeList.add(0,end.road);
            end=end.parent;
        }
        return nodeList;
    }


    private void printList(Queue<Node> openList, List<Node> closeList){
        System.out.println("openList:");
        for(Node n:openList){
            System.out.println(n.road.getRoadID()+" g="+n.g+" h="+n.h+" f="+n.f+" parent="+n.parent.road.getRoadID());
        }

        System.out.println("closeList:");
        for(Node n:closeList){
            if(n.parent!=null){
                System.out.println(n.road.getRoadID()+" parent="+n.parent.road.getRoadID());
            }else {
                System.out.println(n.road.getRoadID()+" parent=null");
            }
        }

    }

    private double distance(Road r1,Road r2)
    {
        //距离为横竖之差的绝对值
        double dis = Math.abs(r1.getLocation()[0]-r2.getLocation()[0])+
                Math.abs(r1.getLocation()[1]-r2.getLocation()[1]);

        return dis;
    }

}

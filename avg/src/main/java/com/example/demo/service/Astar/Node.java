package com.example.demo.service.Astar;

import com.example.demo.entity.Road;

public class Node implements Comparable<Node>{
    Road road;
    Double g; //起始格子到当前格子的实际代价
    Double h; //当前格子到终点格子的估计代价
    Double f; //总代价,g+h
    Node parent;

    public Node(Road road)
    {
        this.road=road;
    }

    public Node(Road road,Node parent,Double g,Double h)
    {
        this.road=road;
        this.parent=parent;
        this.g=g;
        this.h=h;
        this.f=g+h;
    }

    public void setGH(Double g,Double h){
        this.g=g;
        this.h=h;
        this.f=g+h;
    }

    @Override
    public int compareTo(Node node) {
        if (node == null) {
            return -1;
        }
        if (this.f > node.f) {
            return 1;
        } else if (this.f < node.f) {
            return -1;
        }
        return 0;
    }
}

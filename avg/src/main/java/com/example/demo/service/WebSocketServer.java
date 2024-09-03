package com.example.demo.service;

import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint("/websocket/{carId}")
@Component
public class WebSocketServer {

    public WebSocketServer() {
        //每当有一个连接，都会执行一次构造方法
        System.out.println("新的连接已经开启");
    }

    private static final ConcurrentHashMap<Integer, Session> sessionPools = new ConcurrentHashMap<>();

    public void sendMessageByUserId(Integer carId, String message) {
        Session session = sessionPools.get(carId);
        try {
            sendMessage(session, message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendMessage(Session session, String message) throws IOException {

        if (session != null) {
            synchronized (session) {
                System.out.println("发送数据：" + message);
                session.getBasicRemote().sendText(message);
            }
        } else {
            System.out.println("小车不在线");
        }
    }

        @OnMessage
        public void onMessage(String message, Session session) {
            System.out.println("服务器收到消息：" + message);
        }

        @OnOpen
        public void onOpen(@PathParam("carId") Integer carIdStr, Session session) {
            Integer carId = Integer.valueOf(carIdStr);
            sessionPools.put(carId, session);
            System.out.println("小车" + carId + "加入链接");
            sendMessageByUserId(carId, "收到消息了");
        }

        @OnClose
        public void onClose(Session session, @PathParam("carId") String carIdStr) {
            Integer carId = Integer.valueOf(carIdStr);
            sessionPools.remove(carId);
            System.out.println(carId + "退出websocket");
        }

        @OnError
        public void onError(Session session, Throwable throwable) {
            System.out.println("发生错误");
            throwable.printStackTrace();
        }
    }

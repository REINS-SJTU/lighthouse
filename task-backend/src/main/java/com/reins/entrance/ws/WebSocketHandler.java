package com.reins.entrance.ws;

import org.springframework.stereotype.Component;

import javax.websocket.OnClose;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@ServerEndpoint("/ws/{token}")
public class WebSocketHandler {
    private static final Map<String, Session> sessions = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("token")String token){
        sessions.put(token,session);
        System.out.println("=== ws open ===");
    }


    @OnClose
    public void onClose(Session session,@PathParam("token")String token){
        System.out.println("=== ws close ===");
        sessions.remove(token,session);
    }

    public  void sendMessageToUser(String token,String message){
        Session session = sessions.get(token);
        if (session != null && session.isOpen()) {
            try {
                session.getBasicRemote().sendText(message);
            } catch (IOException e) {
                // 处理发送异常
                e.printStackTrace();
            }
        }
    }

}

package com.reins.entrance.schedule;


import com.reins.entrance.entity.dto.RobotDTO;
import com.reins.entrance.entity.dto.TaskDTO;
import com.reins.entrance.entity.dto.WebSocketDTO;
import com.reins.entrance.service.TaskService;
import com.reins.entrance.util.JsonUtil;
import com.reins.entrance.ws.WebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class RobotTaskScheduler {
    @Autowired
    private TaskService taskService;
    @Autowired
    private WebSocketHandler webSocketHandler;

    @Scheduled(cron ="0/5 * * * * ?")
    public void refreshData() {
        taskService.refreshRobotPositionData();

        Map<String,Object> mp = new HashMap<>();
        List<TaskDTO> allTasks = taskService.getAllTasks();
        List<RobotDTO> allRobots = taskService.getRobotDTOsOfAllState();
        WebSocketDTO webSocketDTO = new WebSocketDTO();
        webSocketDTO.setTask(allTasks);
        webSocketDTO.setRobot(allRobots);
        //  "function","all tasks and robots"
        webSocketHandler.sendMessageToUser("1",JsonUtil.objectToJsonString(webSocketDTO));

//        System.out.println("Refreshing Data Finished");
        // TODO 向前端发送小车路径信息
//        List<RobotRouteDTO> routes = taskService.getRoutes();
//        webSocketHandler.sendMessageToUser("1", JsonUtil.objectToJsonString(routes));
    }
}

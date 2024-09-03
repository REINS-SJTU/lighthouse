package com.reins.entrance.controller;

import com.reins.entrance.entity.Task;
import com.reins.entrance.entity.dto.ResultDTO;
import com.reins.entrance.service.ReservationService;
import com.reins.entrance.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/task")
@RestController
@CrossOrigin(origins = "*")
public class TaskController {
    @Autowired
    private ReservationService reservationService;
    @Autowired
    private TaskService taskService;


    /**
     * 访客入园后引导至(x,y)
     * @return list of tasks
     */
    @PostMapping("/guide")
    public ResultDTO generateTask(@RequestParam("srcX")Double srcX,
                                  @RequestParam("srcY")Double srcY,
                                  @RequestParam("destX")Double destX,
                                  @RequestParam("destY")Double destY){
        System.out.println("===1. generate task====");
        System.out.println(srcX+","+srcY+","+destX+","+destY);
        Integer nearestRobotId = taskService.findNearestRobot(srcX,srcY);
        System.out.println("Find nearest robot:"+nearestRobotId);
        Task task1 = taskService.assignTaskToRobot(nearestRobotId, srcX,srcY);
        Task task2 = taskService.assignTaskToRobot(nearestRobotId, destX, destY);
        List<Task> list = new ArrayList<>();
        list.add(task1);
        list.add(task2);
        // TODO 任务执行顺序的问题： 任务调度由本服务来执行，设置一个任务链
        return ResultDTO.success(list);
    }

    @PostMapping("/guideForTest")
    public ResultDTO generateTask(@RequestParam("robotId")Integer robotId,
                                    @RequestParam("destX")Double destX,
                                  @RequestParam("destY")Double destY){
        System.out.println("===1. Generate task====");
        System.out.println(robotId+","+destX+","+destY);
        Task task1 = taskService.assignTaskToRobot(robotId,destX,destY);
        return ResultDTO.success(task1);
    }


    /**
     * 机器人到达目的地
     * @param robotId 机器人ID
     * @return
     */
    @PostMapping("/arrive")
    public ResultDTO robotArrive(@RequestParam("robot_id")Integer robotId){
        System.out.println("=====2. Arrive ===="+robotId);
        taskService.robotArrives(robotId);
        return ResultDTO.success(null);
    }

    @GetMapping("/obstacles")
    public ResultDTO getObstacles(){
        return ResultDTO.success(taskService.getAllObstacles());
    }
}

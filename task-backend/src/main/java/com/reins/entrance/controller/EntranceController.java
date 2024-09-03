package com.reins.entrance.controller;

import com.reins.entrance.entity.Reservation;
import com.reins.entrance.entity.Residence;
import com.reins.entrance.entity.Visitor;
import com.reins.entrance.entity.dto.ResultDTO;
import com.reins.entrance.service.ReservationService;
import com.reins.entrance.service.ResidentService;
import com.reins.entrance.service.VisitorService;
import com.reins.entrance.util.CryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/entrance")
@RestController
@CrossOrigin(origins = "*")
public class EntranceController {
    @Autowired
    private ResidentService residentService;
    @Autowired
    private VisitorService visitorService;
    @Autowired
    private ReservationService reservationService;

    /**
     * 验证来自手机的手机号和邀请码以及来自机器人的园区ID，与数据中心的预约记录是否匹配
     * 预约是否有效
     * @param residentId
     * @param telephone
     * @param inviteCode
     * @return
     */
    @PostMapping("/validate")
    public ResultDTO validate(@RequestParam("resident_id")Integer residentId,
                              @RequestParam("telephone")String telephone,
                              @RequestParam("invite_code")String inviteCode){
        Visitor visitor = visitorService.getVisitorByTelephone(telephone);
        if(visitor==null) return ResultDTO.error("用户未申请");
        Map mp = null;
        try{
            mp=(Map)CryptUtil.decrypt(inviteCode);
        }catch (Exception e){
            e.printStackTrace();
            return ResultDTO.error("邀请码不合法");
        }

        if(mp==null||!mp.containsKey("residenceId")||!mp.containsKey("id"))
            return ResultDTO.error("邀请码不合法");

        int residentId2 = (Integer) mp.get("residenceId");
        if(residentId2!=residentId)
            return ResultDTO.error("非当前园区");

        int reservationId = (Integer)mp.get("id");
        Reservation reservation = reservationService.getReservationById(reservationId);
        if(reservation==null)
            return ResultDTO.error("无预约记录");
        if(!Reservation.validateInviteCode(inviteCode, reservation))
            return ResultDTO.error("邀请码验证不通过");
        if(reservation.getIsVisited()==1)
            return ResultDTO.error("访客在该时间段已入园");
        Timestamp current = new Timestamp(new Date().getTime());
        if(!(current.before(reservation.getEndTime())&&current.after(reservation.getStartTime())))
            return ResultDTO.error("在预约时间段外");

        Map<String,Object> rt = new HashMap<>();
        rt.put("reservation_id",reservation.getId());
        rt.put("photo",visitor.getPhoto());
        return ResultDTO.success(rt);
    }

    @PostMapping("permit")
    public ResultDTO hasPermitted(@RequestParam("reservation_id") Integer reservationId){
        if(reservationService.updateVisited(reservationId)){
            return ResultDTO.success(null);
        }

        return ResultDTO.error("Reservation Update Error.");
    }



    @PutMapping("apply")
    public ResultDTO applyNewReservation(@RequestParam("telephone") String telephone,
                                    @RequestParam("residence_id") Integer residenceId,
                                    @RequestParam("start_time")Timestamp startTime,
                                    @RequestParam("end_time")Timestamp endTime,
                                    @RequestParam("photo")String photoStr
                                    ){
        Visitor visitor = visitorService.getVisitorByTelephone(telephone);
        if(visitor==null) {
            visitorService.insertNewVisitor(telephone);
            visitor = visitorService.getVisitorByTelephone(telephone);
        }
        Boolean b1 = visitorService.uploadPhoto(visitor.getId(), photoStr);
        if(!b1) return  ResultDTO.error("图像上传失败.");
        Reservation reservation = reservationService.insertNewReservation(visitor.getId(), residenceId, startTime, endTime);
        if(b1&&reservation!=null) return ResultDTO.success(reservation.getInviteCode());
        return ResultDTO.error("数据插入失败.");

    }

    @GetMapping("/residences")
    public ResultDTO getAllResidences(){
        return ResultDTO.success(residentService.getAllResidences());
    }

    @GetMapping("/reserveTimeIntervals")
    public ResultDTO getTimeIntervals(@RequestParam("telephone")String telephone,
                                                  @RequestParam("residence_id")Integer residenceId){
        Visitor visitor = visitorService.getVisitorByTelephone(telephone);
        if(visitor==null) return ResultDTO.error("用户未申请");
        List<Reservation> reservedInfo = reservationService.getReservedInfo(residenceId,visitor.getId());
        return ResultDTO.success(reservedInfo);
    }

}

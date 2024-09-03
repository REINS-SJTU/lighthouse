package com.reins.entrance.constant;

public enum RobotState {
    IDLE("空闲"),
    CURRENT("当前"),
    HISTORY("历史"),
    PREDICTION("预测"),
    EXCEPTION("异常");

    private String description;

    RobotState(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}

<script>

import BasicScene from '@/utils/three/BasicScene.js';
import RobotPositionManager from '@/utils/three/RobotPositionManager.js';

let basicScene;
let rpm = new RobotPositionManager();

function transformRobotData(robots){
  let result = [];
  for(let i=0;i<robots.length;i++){
    let r=robots[i];
    if(r.state==="CURRENT"||r.state==="IDLE")
      result.push({
        "robotId": r.robotId,
        "x":r.x,
        "y":r.y,
        "state": r.state,
        "timestamp": r.timestamp
      })
  }
  return result;
}

function getRobotIdSet(robots){
  let st = new Set();
  for(let i=0;i<robots.length;i++){
    let r=robots[i];
    st.add(r.robotId);
  }
  return st;
}

export default{
  data(){
    return {
      webSocket: null,
      webSocket2: null,
      allRobotData: null,
      obstacles: [],
      obstacleColumns:[
        {
          title: 'roadId',
          dataIndex: 'roadId'
        },
        {
          title: 'x',
          dataIndex: 'x'
        },
        {
          title: 'y',
          dataIndex: 'y'
        }
      ],
      guideForm:{
        robotId: 0,
        destX: 0,
        destY: 0
      },
      robotColumns:[
        {
        title: '小车Id',
        dataIndex: 'robotId',
      },
      {
        title: 'x',
        dataIndex: 'x'
      },
      {
        title: 'y',
        dataIndex: 'y'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: 'timestamp',
        dataIndex: 'timestamp'
      }
    ],
      robotData:[],
      robotIdSet: null,
      taskColumns:[
        {
          title: '任务Id',
          dataIndex: "taskId"
        },
        {
        title: '小车Id',
        dataIndex: 'robotId',
      },
      {
        title: 'x',
        dataIndex: 'x'
      },
      {
        title: 'y',
        dataIndex: 'y'
      },
      {
        title: '任务状态',
        dataIndex: 'state'
      },
      {
        title: '是否删除',
        dataIndex: 'status'
      },
      ],
      taskData:[],
      tracedTaskData:[],
      traceInfo:{
        mode: 2,   // 1单车历史，2全部小车当前
        robotId: null,
      },
      displayRobotData: [],
      predicatedPoints: [],
    }
  },
  methods:{
    guideForTest(){
      this.$axios({
                method: 'POST',
                url: "/task/guideForTest",
                data:this.guideForm
            })
                .then(resp => {
                    console.log(resp);
                    this.$message.info("任务设置成功")
                })
                .catch(err=>{
                    console.log(err);
                    this.$message.error("任务设置失败")
                })
    },

    refreshScene(){
      let display = [];
      if(this.traceInfo.mode===1){
        for(let i=0;i<this.predicatedPoints.length;i++){
        let p=this.predicatedPoints[i];
        display.push({
          robotId: this.traceInfo.robotId,
          x: p[0],
          y:p[1],
          state:"PREDICTION"
        })
      }
      }
      display=display.concat(this.displayRobotData);
      
      rpm.update(basicScene,display);
    },

    init(){
      basicScene=new BasicScene("webgl");
      basicScene.initThree([])
      basicScene.bindDom();
      this.$axios({
            method: 'GET',
            url: "/task/obstacles",
        })
            .then(resp => {
              if(resp.data.code===20000){
                this.obstacles = resp.data.data;
              }});
    },
    queryHistory(){
      this.traceInfo.mode=1;
      this.webSocket2 = new WebSocket(this.$Ws2UriPrefix+"/websocket/"+this.traceInfo.robotId);
      this.webSocket2.onmessage=(event)=>{
        console.log("ws2",event.data);
        try{
          const data = JSON.parse(event.data);
          this.predicatedPoints=data.points;
          this.tracedTaskData=this.taskData.filter(robot=>robot.robotId+""===this.traceInfo.robotId);
        }catch(e){
          this.predicatedPoints=[];
          return ;
        }
        
      };
    },
    queryAllRobots(){
      this.traceInfo.mode=2;
      this.predicatedPoints=[];
      this.tracedTaskData=[];
      if(this.webSocket2){
        this.webSocket2.close();
      }
    }
  },
  mounted(){
    this.init();
    this.webSocket = new WebSocket(this.$WsUriPrefix+"/ws/1");
    // this.webSocket.onopen=(event)=>{
    //   console.log("WebSocket connection opened");
    // }
    // this.webSocket.onclose=(event)=>{
    //   console.log("WebSocket connection closed");
    // }
    // this.webSocket.onerror=(event)=>{
    //   console.log("WebSocket error");
    // }
    this.webSocket.onmessage=(event)=>{
      // console.log("WebSocket message receive",event.data);
      const data = JSON.parse(event.data);
      const msg = data['msg'];
      console.log(msg,data);
      if(msg==='arrive'){
        this.$message.info("小车到达目标位置，任务完成");
        return ;
      }
      this.allRobotData=data['robot'];
      this.robotData=transformRobotData(this.allRobotData);
      this.robotIdSet=getRobotIdSet(this.allRobotData);
      this.taskData=data['task'];
      if(this.traceInfo.mode===2){
        this.displayRobotData=this.allRobotData;
      }else if(this.traceInfo.mode===1){
        this.displayRobotData=this.allRobotData.filter(item=>{
          return item.robotId+""===this.traceInfo.robotId;
        }).sort((d1,d2)=>d2.timestamp-d1.timestamp);
        
        this.tracedTaskData=this.taskData.filter(task=>task.robotId+""===this.traceInfo.robotId);
        console.log("task",this.traceInfo,this.taskData,this.tracedTaskData);
      }
      this.refreshScene();
    }
  }
}

</script>

<template>
<a-row>
  <a-col :span="14">
    <div id="webgl"></div>
  </a-col>
  <a-col :span="10">
    <a-tabs>
      <a-tab-pane key="1" title="Set Mission">
        <a-form :model="guideForm" layout="horizontal" style="width:350px">
      <a-form-item field="robotId" label="小车ID">
        <a-input v-model="guideForm.robotId" placeholder="输入小车id" />
      </a-form-item>
      <a-form-item field="destX" label="目的地X">
        <a-input v-model="guideForm.destX" placeholder="输入x" />
      </a-form-item>
      <a-form-item field="destY" label="目的地Y">
        <a-input v-model="guideForm.destY" placeholder="输入y" />
      </a-form-item>
      <a-form-item>
        <a-button @click="guideForTest">Guide</a-button>
      </a-form-item>
    </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" title="Robots">
        <a-table :columns="robotColumns" :data="robotData" />
      </a-tab-pane>
      <a-tab-pane key="3" title="Tasks">
        <a-table :columns="taskColumns" :data="taskData" />
      </a-tab-pane>
      <a-tab-pane key="4" title="Roads">
        <a-table :columns="obstacleColumns" :data="obstacles" />
      </a-tab-pane>
      <a-tab-pane key="5" title="Trace">
        <a-form :model="traceInfo" layout="inline">
          <a-form-item label="选择需要跟踪的小车id" field="robotId">
            <a-select v-model="traceInfo.robotId" >
              <a-option v-for="rid in robotIdSet">{{ rid }}</a-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button @click="queryHistory">跟踪小车</a-button>
          </a-form-item>
          <a-form-item>
            <a-button @click="queryAllRobots">全部小车</a-button>
          </a-form-item>
        </a-form>
        <a-collapse :default-active-key="['1','2']">
          <a-collapse-item header="预测位置" key="2">
            <a-list >
              <a-list-item v-for="p in predicatedPoints">{{ '('+p[0]+","+p[1]+')' }}</a-list-item>
            </a-list>
          </a-collapse-item>
          <a-collapse-item header="历史轨迹" key="1">
            <a-table :columns="robotColumns" :data="displayRobotData" />
          </a-collapse-item>
          <a-collapse-item header="小车任务" key="3">
            <a-table :columns="taskColumns" :data="tracedTaskData" />
          </a-collapse-item>
        </a-collapse>
      </a-tab-pane>
    </a-tabs>
  
  </a-col>
</a-row>




</template>

<style>

html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden; /* 防止出现滚动条 */
    }

.pannel{
  margin:20px;
}

</style>

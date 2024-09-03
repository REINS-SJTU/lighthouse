# 灯塔系统



## 代码仓库说明

各代码仓库代码用途如下

- avg:  导航系统源码，用来接收车辆系统的位置信息并为小车导航规划路径
- task-backend: 任务系统源码，用于任务规划并交由导航系统执行各个子任务，此外还包含原来门禁系统的代码
- task-frontend: 任务系统的前端，用3D场景展示当前小车的运行情况以及小车历史轨迹和预测位置
- task-deploy: avg/task-backend/task-frontend三个项目打包并用docker-compose部署，分为windows本地版本和linux远程部署版本
- document: 项目需求以及接口文档等



## 运行

直接看到运行后的效果可以按照如下步骤

windows系统

1. 安装docker
2. 本地运行，进入task-deploy-windows
3. 按照`===readme===`里的说明

其他系统

1. 开一个linux虚拟机或者云主机
2. 远程运行，进入task-deploy-linux
3. 按照`===readme===`里的说明



## 开发

1. 安装mysql, redis, mongodb并在默认端口启动

2. 安装java环境以及intellij idea

3. 先启动avg，再启动task-backend

4. 安装nodejs

5. 进入`task-frontend/city_guidence_ui`，执行下面命令启动前端

   ```
   npm install
   npm run dev
   ```

6. 使用postman向 `http://localhost:8090/AvgMessage`发送下面json格式的数据模拟小车向avg系统发送位置信息

   ```json
   {
    "carId": 3,
    "speed": 0,
    "heading":0,
    "x": 2,
    "y": 3
   }
   ```

   


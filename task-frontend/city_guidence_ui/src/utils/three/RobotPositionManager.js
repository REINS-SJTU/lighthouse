import * as THREE from 'three';


export default class RobotPositionManager{
    constructor(){
        this.carSize=20;
        this.blockSize=20;
        this.z = 1;
        const geometry = new THREE.BoxGeometry(this.carSize,this.carSize,this.carSize);
        this.historicalCar = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial(
            {
                color: 0xFFFF00,
                transparent:true,
                opacity:0.5, 
            }
        )) // 历史轨迹上的小车形态
        this.car = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color: 0x336699})); // 当前位置的小车形态
        this.predictedCar = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial(
            {
                color: 0x00FF00,
                transparent:true,
                opacity:0.8
            }
        )) // 预测轨迹上的小车形态
        this.idleCar = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial(
            {
                color: 0x000000,
                transparent:true,
                opacity:0.8
            }
        )) // 空闲的小车形态
        // 障碍物形态
        this.obstacle = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial(
            {
                color: 0xFF0000,
                transparent:true,
                opacity:0.5
            }
        ))

        this.tsAndCarId2RobotMesh = new Map(); // ts-carid: {'robot':{},mesh:xxx}

        this.meshes = [];
    }

    setObstacles(basicScene,ob){
        if(!ob) return ;
        for(let i=0;i<ob.length;i++){
            const o = ob[i];
            let om = this.obstacle.clone();
            om.position.set(o.x*this.blockSize,o.y*this.blockSize,this.z*this.blockSize)
            basicScene.scene.add(om);
        }
    }

    update(basicScene,robots){
        if(!robots) return ;

        let refreshMeshes=()=>{
            for(let i=0;i<this.meshes.length;i++){
                const mesh = this.meshes[i];
                basicScene.scene.remove(mesh);
            }
            let newMeshes = [];
    
            for(let i=0;i<robots.length;i++){
                const robot = robots[i];
                let car;
                switch(robot.state){
                    case "IDLE":
                        car=this.idleCar.clone();
                        break;
                    case "CURRENT":
                        car=this.car.clone();
                        break;
                    case "HISTORY":
                        car=this.historicalCar.clone();
                        break;
                    case "PREDICTION":
                        car=this.predictedCar.clone();
                        break;
                }
                car.position.set(robot.x*this.blockSize,robot.y*this.blockSize,this.z*this.blockSize);
                newMeshes.push(car);
                basicScene.scene.add(car);
                const key=robot.timestamp+"-"+robot.robotId;
                const value={
                    "robot":robot,
                    "mesh":car
                }
                this.tsAndCarId2RobotMesh.set(key,value);
            }
            
            this.meshes=newMeshes;
        }
        
        let animate=()=>{
            requestAnimationFrame(animate);
            refreshMeshes();
            basicScene.render();
        }
        
        animate();
    }

    getItems(currentPosition,historicalPositions,predictedPositions){
        let cars = [];
        // 当前车位置
        var c0=this.car.clone();
        c0.position.set(currentPosition[0]*this.blockSize,currentPosition[1]*this.blockSize,this.z*this.blockSize);
        cars.push(c0);
        // 历史车位置
        for(let i=0;i<historicalPositions.length;i++){
            var pos=historicalPositions[i];
            var c1=this.historicalCar.clone();
            c1.position.set(pos[0]*this.blockSize,pos[1]*this.blockSize,this.z*this.blockSize);
            cars.push(c1);
        }
        // 预测车位置
        for(let i=0;i<predictedPositions.length;i++){
            var pos=predictedPositions[i];
            var c2=this.predictedCar.clone();
            c2.position.set(pos[0]*this.blockSize,pos[1]*this.blockSize,this.z*this.blockSize);
            cars.push(c2);
        }
        return cars;
    }
}
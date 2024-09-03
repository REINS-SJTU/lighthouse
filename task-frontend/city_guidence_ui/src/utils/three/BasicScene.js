import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer,CSS3DObject,CSS3DSprite  } from 'three/addons/renderers/CSS3DRenderer.js';
import axios from "axios";

export default class BasicScene{
    constructor(id){
        this.id=id;
        this.height=1000;
        this.width=1000;
        this.dom=document.getElementById(id);
        this.blockSize=20;   // 棋盘块大小
        this.groundSize=30; // 地面大小
        this.center=this.blockSize*this.groundSize/2;  // 中心位置
        this.cameraHeight=600;
        this.cameraX=250;
        this.cameraY=100;
        this.blockColors=[
            //  灰色1
            {
                color: 0xffffff,
                transparent:true,
                opacity:0.5, 
            },
            //  灰色2
            {
                color: 0xffffff,
                transparent:true,
                opacity:0.3, 
            },
            //  红色1
            {
                color: 0xff1111,
                transparent:true,
                opacity:0.5, 
            },
            //  红色2
            {
                color: 0xff1111,
                transparent:true,
                opacity:0.3, 
            },
        ]
    }
    // 所有的初始化
    initThree(items){
        this.initScene();

        this.initGround();
        for(let i=0;i<items.length;i++){
            const item=items[i];
            this.scene.add(item);
        }

        this.initLight();
        this.initCamera();
        this.initRender();
        this.initControl();
    }
    bindDom(){
        this.dom.appendChild(this.renderer.domElement);
        this.dom.appendChild(this.css3Renderer.domElement);
    }
    debindDom(){
        this.dom.removeChild(this.renderer.domElement);
        this.dom.removeChild(this.css3Renderer.domElement);
    }
    // 场景初始化
    initScene(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(255,255,255);  // 背景颜色
        // AxesHelper：辅助观察的坐标系
        this.axesHelper = new THREE.AxesHelper(150);
        this.scene.add(this.axesHelper);
        
    }
    // 光源初始化
    initLight(){
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // 白色平行光
        this.directionalLight.decay = 0.0;//设置光源不随距离衰减
        this.directionalLight.position.set(this.center, this.center, 800);
        this.scene.add(this.directionalLight); // 光源添加到场景中
        // DirectionalLightHelper：可视化平行光
        // this.dirLightHelper = new THREE.DirectionalLightHelper(this.directionalLight, 5,0xff0000);
        // this.scene.add(this.dirLightHelper);
    }
    // 相机初始化
    initCamera(){
        this.camera = new THREE.PerspectiveCamera();
        this.camera.position.set(this.cameraX, this.cameraY, this.cameraHeight); 
        this.camera.lookAt(this.cameraX, this.cameraY, 0); 
    }
    // 渲染器初始化
    initRender(){
        this.css3Renderer = new CSS3DRenderer();
        this.css3Renderer.setSize(this.width, this.height);
        this.css3Renderer.domElement.style.position = 'absolute';
        this.css3Renderer.domElement.style.top = '0px';
        this.css3Renderer.domElement.style.pointerEvents = 'none';


        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height); //设置three.js渲染区域的尺寸(像素px)
        
        this.render();
        
    }
    // 控制器初始化
    initControl(){
        const center=this.blockSize*this.groundSize/2;
        // 设置相机控件轨道控制器OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enablePan = false;
        this.controls.target.set( this.cameraX, this.cameraY, 0 );  // 旋转中心
        // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
        this.controls.addEventListener('change', ()=> {
            this.render();
        });//监听鼠标事件
        document.addEventListener('keydown', (event)=> {
            const key = event.keyCode;
            const delta = new THREE.Vector3(0, 0, 1); // Z轴方向作为移动参考
            const moveSpeed = 10; // 移动速度
        
            switch (key) {
                case 37: // 左键
                    delta.set( -moveSpeed,0, 0); // X轴负方向移动
                    break;
                case 38: // 上键
                    delta.set(0, moveSpeed, 0); // Y轴正方向移动
                    break;
                case 39: // 右键
                    delta.set( moveSpeed,0, 0); // X轴正方向移动
                    break;
                case 40: // 下键
                    delta.set(0, -moveSpeed, 0); // Y轴负方向移动
                    break;
            }
            this.camera.position.add(delta);
            this.controls.target.add(delta);
        
            // 更新OrbitControls的目标位置
            this.controls.update();
        }, false);
    }
    // 地面初始化
    initGround(){
        
        axios({
            method: 'GET',
            url: "/task/obstacles",
        })
            .then(resp => {
              if(resp.data.code===20000){
                const obstacles = resp.data.data;
                const MOD =100007;
                var st = new Set();
                for(let i=0;i<obstacles.length;i++){
                    st.add(MOD*obstacles[i].x+obstacles[i].y);
                }
                for(let i=0;i<this.groundSize;i++){
                    for(let j=0;j<this.groundSize;j++){
                        const geometry = new THREE.BoxGeometry(this.blockSize,this.blockSize,0.5);
                        var isRoad=st.has(i*MOD+j)?1:0;
                        const material = new THREE.MeshLambertMaterial(this.blockColors[((i+j)&1)+isRoad*2]); 
                        const mesh = new THREE.Mesh(geometry, material); 
                        mesh.position.set(i*this.blockSize,j*this.blockSize,-0.5); 
                        
                        const ele=document.createElement("div");
                        ele.textContent="("+i+","+j+")";
                        ele.style.fontSize="5px";
                        const div=new CSS3DObject(ele);
                        div.position.set(i*this.blockSize,j*this.blockSize,-0.5);
                    
                        this.scene.add(mesh,div);
                    }
                }
              }
            })
            .catch(err=>{
                console.log(err);
                this.$message.error("加载障碍物失败")
            })
        
    }
    render(){
        this.renderer.render(this.scene,this.camera);
        this.css3Renderer.render(this.scene,this.camera);
    }
}
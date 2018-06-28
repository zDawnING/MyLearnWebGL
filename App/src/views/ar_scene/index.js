var THREE = require('three');
var Stats = require('vendor_threejs/utils/stats.min');
var dat = require('vendor_threejs/utils/dat.gui.min');
var TWEEN = require('@tweenjs/tween.js');

require('vendor_threejs/controls/DeviceOrientationControls');

require('vendor_threejs/controls/OrbitControls');

var VConsole  = require('com_gl/utils/vconsole.min')

import * as Toast from 'com_gl/utils/toast';
import { 
	createCircle, 
	createEllipse,
	createSphere
} from 'ar_scene/mesh'
import {
	moveSpherePointToPoint
} from 'ar_scene/animate'
import {
	createVideoElement,
	createShotBtn,
	initWebRTC
} from 'ar_scene/webrtc'

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

let sphere, line, ellipseLine;
let videoSource;

let worldAxes;

let deviceOriControls, orbitControls;

let vrFrameData;
let vrDisplay;
let arView;
let vrControls;

let pcDebug = true;

/**
 * 渲染
 * @return {[type]} [description]
 */
const render = () => {
	stats.update(); // 即时更新FPS

	if(pcDebug){
		orbitControls.update();
	}else{
		deviceOriControls.update();
	}
	
	TWEEN.update();

	// 使用帧动画函数
	requestAnimationFrame(render);
	renderer.render( scene, camera );
}

let currPointIndex = 0
let isLoop = true
const animateSphere = () => {
	let positions = ellipseLine.geometry.clone().getAttribute('position')
	let pointsLen = positions.count
	
	if(currPointIndex < pointsLen){
		let vec3 = new THREE.Vector3( 
			positions.getX(currPointIndex), 
			positions.getY(currPointIndex), 
			positions.getZ(currPointIndex) );
		moveSpherePointToPoint(sphere, vec3)
		setTimeout(animateSphere, 1000)
	}else{
		if(isLoop){
			if(currPointIndex == pointsLen){
				currPointIndex = 0
				setTimeout(animateSphere, 0)
			}
		}
	}
	currPointIndex++
}

/**
 * 初始化性能检测器
 * @return {[type]} [description]
 */
const initStats = () => {
	stats = new Stats();
	stats.setMode(0); // 0: fps, 1: ms
	stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);
}

/**
 * 窗口大小被重置
 * @return {[type]} [description]
 */
function onResizeWindow(){
	// 相机宽高比
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
}

const initScene = async () => {

	var vConsole = new VConsole()

	// 开启加载提示
	Toast.load('scene is loading');

	createVideoElement()
	createShotBtn()

	initWebRTC(document.getElementById('video-output'), videoSource)

	// 初始化组件
	let stats = initStats();
	// 创建场景
	scene = new THREE.Scene();
	// 创建相机
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 2000 );
	camera.position.x = -20;
	camera.position.y = 40;
	camera.position.z = 20;
	camera.lookAt(scene.position); // 视线指向场景中心
	// 创建渲染器
	renderer = new THREE.WebGLRenderer( {alpha: true} )
	renderer.setPixelRatio( window.devicePixelRatio )

	// 擦除背景色
	renderer.setClearColor(new THREE.Color( 0x000000 ), 0.0)
	// renderer.setClearAlpha(0.5)
	renderer.setSize(window.innerWidth, window.innerHeight); // 设置视口大小
	// renderer.shadowMap.enabled = true;
	// 
	
	if(pcDebug){
		orbitControls = new THREE.OrbitControls( camera, renderer.domElement )
	
		orbitControls.enableDamping = true
		// orbitControls.enableZoom = false;
		// orbitControls.enablePan = false;
	}else{
		// 使用陀螺仪
		deviceOriControls = new THREE.DeviceOrientationControls( camera )
	}

	// 展示辅助观察的世界坐标系
  worldAxes = new THREE.AxesHelper(20);
  // worldAxes.visible = false;
  scene.add(worldAxes);

  let group = new THREE.Group()
  scene.add(group)

  line = createCircle()
  line.position.set( 0, 0,  0 );
	line.rotation.set( 0, Math.PI * 0.25, 0 );
	// line.scale.set( 1, 1, 1 );
	group.add( line );



	ellipseLine = createEllipse()
	group.add(ellipseLine)

	// console.log(ellipseLine.geometry.clone().getAttribute('position').count)

	sphere = createSphere()
	sphere.position.set(
		ellipseLine.geometry.clone().getAttribute('position').getX(0),
		ellipseLine.geometry.clone().getAttribute('position').getY(0),
		ellipseLine.geometry.clone().getAttribute('position').getZ(0)
		)
	group.add(sphere);

	animateSphere()

  // 关闭加载提示
	Toast.closeAll();

	// 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	return renderer
};

export default initScene;
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
	createSphere,
	createCube,
	createLabel,
	createTipPlane,
	createCustomTexture,
	createWater
} from 'ar_scene/mesh'
import {
	curveMove
} from 'ar_scene/animate'
import {
	createVideoElement,
	createShotBtn,
	initWebRTC
} from 'ar_scene/webrtc'
import {
	createDirectionLight, 
	createSky, 
	changeSkyEffect, 
	createLensflare
} from 'lm_scene/light';

import waterNormalImg from "res_gl/img/waternormals.jpg"

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

let group1, group2, sphere, line, ellipseLine, cube, sky, directionalLight, water;
let cubeLabel, sphereLabel;
let videoSource;

let worldAxes;

let deviceOriControls, orbitControls;

const skyDistance = 1000;
let skyEffectContr = {
	turbidity: 10,
	rayleigh: 2,
	mieCoefficient: 0.005,
	mieDirectionalG: 0.8,
	luminance: 1,
	inclination: 0.49, // elevation / inclination
	azimuth: 0.25, // Facing front,
	updateSkyEffect: function(){
		changeSkyEffect(sky, skyDistance, skyEffectContr);
  }
};

let pcDebug = true;

const eventNames = [
		'touchstart', 'click', 'mousedown'
	];
let raycaster;
let mouseVec2 = new THREE.Vector2();

// const onMouseClick = (event) => {
// 	mouseVec2.x = (event.clientX / window.innerWidth) * 2 - 1
// 	mouseVec2.y = (event.clientY / window.innerHeight) * 2 + 1
// 	setTimeout(intersectObj, 0)
// }

// const intersectObj = () => {
// 	console.log(raycaster)
// 	var intersects = raycaster.intersectObjects(group1.children, true);
// 	console.log(intersects)
// 	if(intersects.length > 0){
// 		// 判断最前面的一个相交对象是否是卫星
// 		if(intersects[0].object.name.indexOf("satellite") >= 0){
// 			alert(1)
// 		}
// 	}
// }

const addClickEvent = () => {
	// 绑定PC和移动端的点击事件, 这里会同时触发
	// eventNames.forEach((eventName) => {
	// 	window.addEventListener(eventName, function(event){
	// 		console.log(eventName)
	// 		mouseVec2.x = (event.clientX / window.innerWidth) * 2 - 1
	// 		mouseVec2.y = (event.clientY / window.innerHeight) * 2 + 1
	// 	}, true)
	// })

	if(pcDebug) {
		window.addEventListener('click', function(e){
			selectObjectMouseDown(e)
		}, false)
	}else{
		window.addEventListener('touchstart', function(e){
			console.log('touchstart')
			let touch = e.changedTouches[0]
			console.log(touch)
			selectObjectMouseDown(touch)
		}, false)
	}

}

/**
 * 鼠标点下选中对象
 * @return {[type]} [description]
 */
const selectObjectMouseDown = (event)  => {
	var vector = getWorldCoordinateFromScreen(event);
	console.log(vector)
	// 创建射线追踪对象，参数：起始点，方向向量(指向)，最近距离(0)，最远距离(infinity)
	raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
	// 射线与场景中的网格对象相交性检测, 开启深层对象检测
	var intersects = raycaster.intersectObjects(scene.children, true);
	console.log(intersects)
	if(intersects.length > 0){
		// 判断最前面的一个相交对象是否是卫星
		if(intersects[0].object.name.indexOf("satellite") >= 0){
			console.log(intersects[0].object.name)
			if(intersects[0].object.name == 'satellite1'){
				cubeLabel.visible = true
			}
			if(intersects[0].object.name == 'satellite2'){
				sphereLabel.visible = true
			}
		}
	}	
	
}



/**
 * 获取当前鼠标所在的世界坐标系
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
const getWorldCoordinateFromScreen  = (e) => {
	// 获取当前鼠标的屏幕标准化坐标(NDC)
	var ndcVector = new THREE.Vector3( (e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5);

	// 屏幕坐标系转换成世界坐标系
	var worldVector = ndcVector.unproject(camera);
	return worldVector;
}

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

	if(cubeLabel || sphereLabel){
		updateLabelPosition(cubeLabel, cube)
		updateLabelPosition(sphereLabel, sphere)
	}

	if(directionalLight.position.y <= -1 ){
		directionalLight.visible = false
	}else{
		directionalLight.visible = true
	}
	skyEffectContr.inclination -= 0.0001
	skyEffectContr.updateSkyEffect()

	directionalLight.position.copy(sky.material.uniforms.sunPosition.value)

	if(water){
		water.material.uniforms.time.value += 1.0 / 60.0
		// water.material.needsUpdate = true
	}
	

	// 使用帧动画函数
	requestAnimationFrame(render)
	renderer.render( scene, camera )
}


const updateLabelPosition = (objLabel, obj) => {
	objLabel.position.set(obj.position.x, obj.position.y  + 8, obj.position.z)
	objLabel.lookAt(camera.position)
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

	if(!pcDebug){
		initWebRTC(document.getElementById('video-output'), videoSource)
	}

	// 初始化组件
	let stats = initStats();
	// 创建场景
	scene = new THREE.Scene();
	
	if(pcDebug){
		// 创建相机
		camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 2000 );
		camera.position.x = -20;
		camera.position.y = 40;
		camera.position.z = 20;
		camera.lookAt(scene.position); // 视线指向场景中心
	}else{
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 2000 );
		camera.position.y = 20
	}

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
  worldAxes.visible = false;
  scene.add(worldAxes);

  group1 = new THREE.Group()
  scene.add(group1)

  line = createCircle()
  
	// line.scale.set( 1, 1, 1 );
	group1.add( line );
	group1.position.set( 0, 0, 0 );
	group1.rotation.set( 0, Math.PI * 0.25, 0 );

	cube = createCube()
	cube.position.set(
		line.geometry.clone().getAttribute('position').getX(0),
		line.geometry.clone().getAttribute('position').getY(0),
		line.geometry.clone().getAttribute('position').getZ(0)
		)
	cube.name = 'satellite1'
	cube.scale.set(10, 10, 10)
	cubeLabel = createTipPlane()
	cubeLabel.scale.set(10, 10, 10)
	// cubeLabel.position.copy(cube.position)
	cubeLabel.visible = false
	line.add(cube)
	group1.add(cubeLabel)
	createCustomTexture(cubeLabel, cube.name)

	group2 = new THREE.Group()
  scene.add(group2)

	ellipseLine = createEllipse()
	group2.add(ellipseLine)

	// console.log(ellipseLine.geometry.clone().getAttribute('position').count)

	sphere = createSphere()
	sphere.position.set(
		ellipseLine.geometry.clone().getAttribute('position').getX(0),
		ellipseLine.geometry.clone().getAttribute('position').getY(0),
		ellipseLine.geometry.clone().getAttribute('position').getZ(0)
		)
	sphere.name = 'satellite2'
	cube.scale.set(5, 5, 5)
	sphereLabel = createTipPlane(sphere.name)
	sphereLabel.scale.set(5, 5, 5)
	// sphereLabel.position.copy(sphere.position)
	sphereLabel.visible = false
	ellipseLine.add(sphere)
	group2.add(sphereLabel)
	createCustomTexture(sphereLabel, sphere.name)

	curveMove(ellipseLine, sphere, 1000)

	curveMove(line, cube, 700)

	// 添加平行光
	directionalLight = createDirectionLight();
	// 添加光晕
  scene.add(directionalLight);

	// 添加天空
  sky = createSky(skyDistance, skyEffectContr)
	scene.add(sky)

	// 添加水面
	water = createWater(directionalLight)
	water.rotation.x = - Math.PI * 0.5
	scene.add( water )

  // 关闭加载提示
	Toast.closeAll();

	// 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	addClickEvent()

	return renderer
};

export default initScene;
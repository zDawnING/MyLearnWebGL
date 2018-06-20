var THREE = require('three');
var Stats = require('vendor_threejs/utils/stats.min');
var dat = require('vendor_threejs/utils/dat.gui.min');
var TWEEN = require('@tweenjs/tween.js');

require('vendor_threejs/controls/OrbitControls');

import * as Toast from 'com_gl/utils/toast';

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

let worldAxes;

let orbitControls;

let vrFrameData;
let vrDisplay;
let arView;
let vrControls;

/**
 * 渲染
 * @return {[type]} [description]
 */
const render = () => {
	stats.update(); // 即时更新FPS

	orbitControls.update();

	// 使用帧动画函数
	requestAnimationFrame(render);
	renderer.render( scene, camera );
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

	// 开启加载提示
	Toast.load('scene is loading');

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
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );

	// 擦除背景色
	renderer.setClearColor(new THREE.Color( 0xEEEEEE ), 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight); // 设置视口大小
	renderer.shadowMap.enabled = true;

	orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
	orbitControls.enableDamping = true
	// orbitControls.enableZoom = false;
	// orbitControls.enablePan = false;

	// 展示辅助观察的世界坐标系
  worldAxes = new THREE.AxesHelper(20);
  // worldAxes.visible = false;
  scene.add(worldAxes);

  // 关闭加载提示
	Toast.closeAll();

	// 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	return renderer
};

export default initScene;
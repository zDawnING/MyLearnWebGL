var THREE = require('three');
var Stats = require('vendor_threejs/utils/stats.min');
var dat = require('vendor_threejs/utils/dat.gui.min');
var TWEEN = require('@tweenjs/tween.js');

require('vendor_threejs/controls/OrbitControls');

require('vendor_threejs/effects/OutlineEffect');
require('vendor_threejs/animation/CCDIKSolver')
require('vendor_threejs/animation/MMDPhysics');
require('vendor_threejs/loaders/TGALoader');
// 以上插件都是MMDLoader需要依赖的
require('vendor_threejs/loaders/MMDLoader');

import { createSpotLight } from 'mmd/light';
import { createStageBox } from 'mmd/mesh';

import * as Toast from 'com_gl/utils/toast';

import { randomPosSpotLights } from 'mmd/animate';

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

let miku, stageBox;

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

let controls;

let worldAxes, pgHelper, mmdHelper, ikHelper, physicsHelper;

let spotLight1, spotLight2, spotLight3;
let slHelper1, slHelper2, slHelper3;

let orbitControls;

var clock = new THREE.Clock();

let mikuFile = 'http://ovwfvn3zo.bkt.clouddn.com/miku_v2.pmd';
let vmdFiles = [ 'http://ovwfvn3zo.bkt.clouddn.com/wavefile_v2.vmd' ];
let cameraFiles = [ 'http://ovwfvn3zo.bkt.clouddn.com/wavefile_camera.vmd' ];
let audioFile = 'http://ovwfvn3zo.bkt.clouddn.com/wavefile_short.mp3';
let audioParams = { delayTime: 160 * 1 / 30 };

let mmdReady = false;


/**
 * 添加移动的聚光灯
 * @return {[type]} [description]
 */
const addMoveSpotLight = () => {
	// 添加多个聚光灯
  spotLight1 = createSpotLight( 0xFF7F00 );
  spotLight2 = createSpotLight( 0x00FF7F );
  spotLight3 = createSpotLight( 0x7F00FF );
  spotLight1.position.set( 0, 30, -20 );
	spotLight2.position.set( -25, 30, 10 );
	spotLight3.position.set( 25, 30, 10 );  
	slHelper1 = new THREE.SpotLightHelper( spotLight1 );
	slHelper2 = new THREE.SpotLightHelper( spotLight2 );
	slHelper3 = new THREE.SpotLightHelper( spotLight3 );
	// spotLight1.visible = false; spotLight2.visible = false; spotLight3.visible = false; 
	slHelper1.visible = false; slHelper2.visible = false; slHelper3.visible = false;
	// 批量添加对象可以这样
	scene.add(spotLight1, spotLight2, spotLight3);
	scene.add(slHelper1, slHelper2, slHelper3);
	
	// 设置每隔5秒执行一次缓动聚光灯
	let animateSpotLight = () => {
		randomPosSpotLights( spotLight1 );
		randomPosSpotLights( spotLight2 );
		randomPosSpotLights( spotLight3 );
		setTimeout( animateSpotLight, 1000 );
	}
	animateSpotLight();
}


/**
 * 初始化控制器
 * @return {[type]} [description]
 */
const initControler = () => {
	controls = {
		animation: true,
		showPhysicsHelper: false,
		showIkBones: false,
		showSpotLight: true,
		slDebug: false,
	}

	gui = new dat.GUI();
	gui.add(controls, 'showPhysicsHelper').onChange(function(e){
		physicsHelper.visible = e;
	})
	gui.add(controls, 'showIkBones').onChange(function(e){
		ikHelper.visible = e;
	});
	gui.add(controls, 'slDebug').onChange(function(e){
		slHelper1.visible = e; slHelper2.visible = e; slHelper3.visible = e;
	});
	gui.add(controls, 'showSpotLight').onChange(function(e){
		// renderer.physicallyCorrectLights = !e;
		spotLight1.visible = e; spotLight2.visible = e; spotLight3.visible = e;
	});
}

const loadModel = () => {
	// 返回加载进度
	let onProgress = (xhr) => {
		if ( xhr.lengthComputable ) {
			let percentComplete = xhr.loaded / xhr.total * 100;
			// console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	let onError = (xhr) => {
		Toast.netError();
	};
	// 更换模型的材质
	let changeModelMaterial = (materials) => {
		// console.log(materials);
		let tempMaterials = [];
		for ( let i = 0, l = materials.length; i < l; i ++ ) {
			let material = new THREE.MeshPhongMaterial();
			// 获取原来的材质参数并覆盖成phong着色，原来的是Tont(卡通着色)
			material.copy( materials[i] );
			material.needsUpdate = true;
			tempMaterials.push( material );
		}
		return tempMaterials;
	}

	mmdHelper = new THREE.MMDHelper();

	let loader = new THREE.MMDLoader();

	

	loader.load( mikuFile, vmdFiles, function ( object ) {

		miku = object;
		
		miku.material = changeModelMaterial(miku.material);
		
		// console.log(miku.material);

		mmdHelper.add( miku );
		mmdHelper.setAnimation( miku );

		/*
		 * Note: create CCDIKHelper after calling helper.setAnimation()
		 */
		ikHelper = new THREE.CCDIKHelper( miku );
		ikHelper.visible = false;
		scene.add( ikHelper );

		/*
		 * Note: You're recommended to call helper.setPhysics()
		 *       after calling helper.setAnimation().
 		 */
		mmdHelper.setPhysics( miku );
		physicsHelper = new THREE.MMDPhysicsHelper( miku );
		physicsHelper.visible = false;
		scene.add( physicsHelper );

		loader.loadVmds( cameraFiles, function ( vmd ) {
			mmdHelper.setCamera( camera );

			loader.pourVmdIntoCamera( camera, vmd );
			mmdHelper.setCameraAnimation( camera );

			loader.loadAudio( audioFile, function ( audio, listener ) {
				listener.position.z = 1;

				mmdHelper.setAudio( audio, listener, audioParams );

				/*
				 * Note: call this method after you set all animations
				 *       including camera and audio.
				 */
				mmdHelper.unifyAnimationDuration();

				scene.add( audio );
				scene.add( listener );
				scene.add( miku );

				// 关闭加载提示
				Toast.closeAll();
				mmdReady = true;
			})
		})
		// 静态
		// mmdHelper.unifyAnimationDuration( { afterglow: 2.0 } );
		// mmdHelper.doAnimation = true;
	}, onProgress, onError );
}


const controlPlayAnimation = (code) => {
	if(code.keyCode === 32 || code.code == 'Space'){
		if(controls.animation){
			controls.animation = false;
			mmdHelper.audioManager.audio.pause();
			mmdHelper.doAnimation = false;
			mmdHelper.doCameraAnimation = false;
			Toast.show("pause");
		}else{
			controls.animation = true;
			mmdHelper.audioManager.audio.play()
			mmdHelper.doAnimation = true;
			mmdHelper.doCameraAnimation = true;
		}
	}
}


/**
 * 渲染
 * @return {[type]} [description]
 */
const render = () => {
	stats.update(); // 即时更新FPS
	orbitControls.update();

	if(controls.showSpotLight){
		TWEEN.update();
		if(controls.slDebug){
			if ( slHelper1 ) slHelper1.update();
			if ( slHelper2 ) slHelper2.update();
			if ( slHelper3 ) slHelper3.update();
		}
	}

	if(mmdHelper && controls.animation && mmdReady) mmdHelper.animate( clock.getDelta() );
	
	if(physicsHelper && controls.showPhysicsHelper) physicsHelper.update();
	if(ikHelper && controls.showIkBones) ikHelper.update();

	if(stageBox){
		stageBox.material.map.rotation += 0.005;
	}

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

const initScene = (resolve, reject) => {

	// 开启加载提示
	Toast.load('scene is loading');

	// 初始化组件
	let stats = initStats();
	// 创建场景
	scene = new THREE.Scene();
	// 创建相机
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 2000 );
	// camera.position.x = 0;
	// camera.position.y = 10;
	// camera.position.z = 35;
	camera.lookAt(new THREE.Vector3( 0, 10, 0 )); // 视线指向场景中心
	// 创建渲染器
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );

	// 擦除背景色
	renderer.setClearColor(new THREE.Color( 0xa0adaf ), 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight); // 设置视口大小
	renderer.shadowMap.enabled = true;
	// 自然一些的纹理，默认值是PCFShadowMap
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	initControler();

	orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
	orbitControls.enableZoom = false;
	orbitControls.enablePan = false;

	pgHelper = new THREE.PolarGridHelper( 30, 10 );
	pgHelper.visible = false;
	scene.add(pgHelper);

	// 展示辅助观察的世界坐标系
  worldAxes = new THREE.AxesHelper(20);
  worldAxes.visible = false;
  scene.add(worldAxes);

  stageBox = createStageBox();
  stageBox.position.y = 25;
  stageBox.rotation.x = - Math.PI * 0.5;
  // 设置旋转中心
  stageBox.material.map.center.set( 0.5, 0.5 );
  scene.add(stageBox);

  var ambient = new THREE.AmbientLight( 0x666666 );
	scene.add( ambient );

	addMoveSpotLight();

	loadModel();

  // 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	window.addEventListener('keydown', controlPlayAnimation, false);

	resolve(renderer);
};

export default initScene;
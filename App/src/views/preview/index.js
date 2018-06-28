var THREE = require('three');
var Stats = require('vendor_threejs/utils/stats.min');
var dat = require('vendor_threejs/utils/dat.gui.min');
var TWEEN = require('@tweenjs/tween.js');

require('vendor_threejs/controls/OrbitControls');

import * as Toast from 'com_gl/utils/toast';

import { 
	createSphereByPlanes,
	createCubeByLines,
	loadCtmModel,
	loadBumpSkinModel
} from 'preview/mesh';
import { createDirectLight } from 'preview/light';

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

let sphereByPlanes, cubeByLines, faceCtmModel, faceBumpModel;

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

let controls,
		sphereByPlanesContr,
		cubeByLinesContr,
		ctmContr,
		bumpSkinContr,
		blendContr;

let worldAxes;

let orbitControls;

const BLEND_TYPE = [ "NoBlending", "NormalBlending", "AdditiveBlending", "SubtractiveBlending", "MultiplyBlending" ];

/**
 * 初始化控制器
 * @return {[type]} [description]
 */
const initControler = () => {
	controls = {
		bgType: 'day',
		worldAxes: false,

	}
	sphereByPlanesContr = {
		radius: 5,
		count: 80,
		planeSize: 1,
		loadMesh () {
			removeAllMesh();
			sphereByPlanes = createSphereByPlanes(
				sphereByPlanesContr.radius, 
				sphereByPlanesContr.count, 
				sphereByPlanesContr.planeSize
			);
			scene.add(sphereByPlanes);
		}
	}
	cubeByLinesContr = {
		radius: 15,
		pointNum: 1000,
		loadMesh () {
			removeAllMesh();
			cubeByLines = createCubeByLines( cubeByLinesContr.radius, cubeByLinesContr.pointNum );
			scene.add(cubeByLines)
		}
	}
	ctmContr = {
		color: 0xff4400,
		specular: 0x333333, 
		shininess: 100,
		updateMaterial () {
			faceCtmModel.material.color = new THREE.Color(ctmContr.color);
			faceCtmModel.material.specular = new THREE.Color(ctmContr.specular);
			faceCtmModel.material.shininess = ctmContr.shininess;
			faceCtmModel.material.needsUpdate = true;
		},
		loadFaceModel () {
			removeAllMesh()
			new Promise(function(resolve, reject){
				Toast.load('model is loading', true);
				loadCtmModel( "http://ovwfvn3zo.bkt.clouddn.com/WaltHead.ctm", {
					color: ctmContr.color,
					specular: ctmContr.specular,
					shininess: ctmContr.shininess
				}, resolve, reject);
			}).then(function(mesh){
				faceCtmModel = mesh;
				faceCtmModel.scale.set( 0.5, 0.5, 0.5 );
				scene.add(faceCtmModel);
				// 关闭加载提示
				Toast.closeAll();
			})
		},
	}
	bumpSkinContr = {
		color: 0x552811,
		specular: 0x222222,
		shininess: 25,
		bumpScale: 1,
		updateMaterial () {
			faceBumpModel.material.color = new THREE.Color(bumpSkinContr.color);
			faceBumpModel.material.specular = new THREE.Color(bumpSkinContr.specular);
			faceBumpModel.material.shininess = bumpSkinContr.shininess;
			faceBumpModel.material.bumpScale = bumpSkinContr.bumpScale;
			faceBumpModel.material.needsUpdate = true;
		},
		loadFaceBumpModel () {
			removeAllMesh()
			new Promise(function(resolve, reject){
				Toast.load('model is loading', true);
				loadBumpSkinModel( "http://ovwfvn3zo.bkt.clouddn.com/LeePerrySmith.json", {
					texturePath: 'http://ovwfvn3zo.bkt.clouddn.com/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg',
					color: bumpSkinContr.color,
					specular: bumpSkinContr.specular,
					shininess: bumpSkinContr.shininess,
					bumpScale: bumpSkinContr.bumpScale
				}, resolve, reject);
			}).then(function(mesh){
				faceBumpModel = mesh;
				faceBumpModel.scale.set( 5, 5, 5 );
				scene.add(faceBumpModel);
				// 关闭加载提示
				Toast.closeAll();
			})
		}
	}
	blendContr = {
		textureType: 'NoBlending',
		switchBlending () {
			
		},
		loadTexture () {
			
		}
	}

	gui = new dat.GUI();
	gui.add(controls, 'bgType', ['day', 'night']).onChange(function(e){
		if (e === 'day') renderer.setClearColor(new THREE.Color( 0xEEEEEE ), 1.0);
		if (e === 'night') renderer.setClearColor(new THREE.Color( 0x000000), 1.0);
	})
	gui.add(controls, 'worldAxes').onChange(function(e){
		
	})

	let sphereByPlanesFolder = gui.addFolder("Custom Geometry By Geometry")
	sphereByPlanesFolder.add(sphereByPlanesContr, 'loadMesh');
	sphereByPlanesFolder.add(sphereByPlanesContr, 'radius', 5, 10).onChange(sphereByPlanesContr.loadMesh);
	sphereByPlanesFolder.add(sphereByPlanesContr, 'count', 30, 120).step(1).onChange(sphereByPlanesContr.loadMesh);
	sphereByPlanesFolder.add(sphereByPlanesContr, 'planeSize', 0.5, 2).onChange(sphereByPlanesContr.loadMesh);

	let cubeByLinesFolder = gui.addFolder("Lines Link In Cube");
	cubeByLinesFolder.add(cubeByLinesContr, 'loadMesh');
	cubeByLinesFolder.add(cubeByLinesContr, 'radius', 10, 30).onChange(cubeByLinesContr.loadMesh);
	cubeByLinesFolder.add(cubeByLinesContr, 'pointNum', 100, 4000).step(10).onChange(cubeByLinesContr.loadMesh);

	let ctmModelFolder = gui.addFolder("CTM Model");
	ctmModelFolder.add(ctmContr, 'loadFaceModel');
	ctmModelFolder.addColor(ctmContr, 'color').onChange(ctmContr.updateMaterial);
	ctmModelFolder.addColor(ctmContr, 'specular').onChange(ctmContr.updateMaterial);
	ctmModelFolder.add(ctmContr, 'shininess', 30, 200).onChange(ctmContr.updateMaterial);

	let bumpSkinFolder = gui.addFolder("Bump Skin Model");
	bumpSkinFolder.add(bumpSkinContr, 'loadFaceBumpModel');
	bumpSkinFolder.addColor(bumpSkinContr, 'color').onChange(bumpSkinContr.updateMaterial);
	bumpSkinFolder.addColor(bumpSkinContr, 'specular').onChange(bumpSkinContr.updateMaterial);
	bumpSkinFolder.add(bumpSkinContr, 'shininess', 1, 100).onChange(bumpSkinContr.updateMaterial);
	bumpSkinFolder.add(bumpSkinContr, 'bumpScale', 0, 60).onChange(bumpSkinContr.updateMaterial);

	let blendFolder = gui.addFolder("Blending");
	blendFolder.add(blendContr, 'loadTexture');

}

const removeAllMesh = () => {
	scene.remove(sphereByPlanes)
	scene.remove(cubeByLines)
	scene.remove(faceCtmModel)
	scene.remove(faceBumpModel)
}

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

const initScene = (resolve, reject) => {

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

	initControler();

	orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
	orbitControls.enableZoom = false;
	orbitControls.enablePan = false;

	// 展示辅助观察的世界坐标系
  worldAxes = new THREE.AxesHelper(20);
  worldAxes.visible = false;
  scene.add(worldAxes);

 	let light1 = createDirectLight(new THREE.Vector3( -50, 50, 50 ));
 	let light2 = createDirectLight(new THREE.Vector3( 50, 50, -50 ));
 	scene.add(light1);
 	scene.add(light2);

  // 关闭加载提示
	Toast.closeAll();

	// 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	resolve(renderer);
};

export default initScene;
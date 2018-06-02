var THREE = require('three');
var Stats = require('vendor_threejs/utils/stats.min');
var dat = require('vendor_threejs/utils/dat.gui.min');
var TWEEN = require('@tweenjs/tween.js');

require('vendor_threejs/controls/OrbitControls');

import { 
	createGround,
	createHdrSphere,
	createEnvMapSphere,
	createMultiTextureSphere,
	createFresnelSphere,
	createLabel
} from 'lm_scene/mesh';
import { 
	createDirectionLight, 
	createSky, 
	changeSkyEffect, 
	createLensflare,
	createSpotLight
} from 'lm_scene/light';
import { randomPosSpotLights } from 'lm_scene/animate';
import * as Toast from 'com_gl/utils/toast';

let renderer; // 渲染器

// 定义变量
let camera; // 相机
let scene; // 场景对象

// 辅助组件
let stats; // 检测动画运行帧频
let gui; // 控制界面变量的组件

// 场景对象(放置全局方便特殊处理)
let plane, sky, sun, hdrSphere, envMapSphere, multiSphere, fresnelSphere;
let hdrLabel, envMapLabel, multiLabel, fresnelLabel;
let cubeCamera;
// 场景相关控制变量
let hdrRate = 0, hdrSign = 1; // 记录弹跳的增量
let controls,
		skyEffectContr,
		materialContr;

const skyDistance = 1000;

let worldAxes, dlHelper, slHelper1, slHelper2, slHelper3;

let directionalLight, spotLight1, spotLight2, spotLight3;

let orbitControls;

let clock = new THREE.Clock();

let testMesh;

/**
 * 初始化控制器
 * @return {[type]} [description]
 */
const initControler = () => {
	controls = {
    sumMoveSpeed: 0.0001,
    worldAxes: false,
    dlDebug: false,
    stopSkyMove: false,
    showSpotLight: false,
    slDebug: false,
    showSpheres: false,
  };
  skyEffectContr = {
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
	materialContr = {
		showSphere: false,
		variationHDR: false,
		openCubeCamera: false,
		switchEnvMapType: 'reflection'
	};

  gui = new dat.GUI();
	gui.add(controls, 'dlDebug').onChange(function(e){
		dlHelper.visible = e;
	});
	gui.add(controls, 'slDebug').onChange(function(e){
		slHelper1.visible = e; slHelper2.visible = e; slHelper3.visible = e;
	});
	gui.add(controls, 'showSpotLight').onChange(function(e){
		renderer.physicallyCorrectLights = !e;
		spotLight1.visible = e; spotLight2.visible = e; spotLight3.visible = e;
	});
	gui.add(controls, 'worldAxes').onChange(function(e){
		worldAxes.visible = e;

	})
	gui.add(controls, 'stopSkyMove').listen();
	gui.add(controls, 'sumMoveSpeed', 0.00005, 0.0003).listen();

	// let skyFolder = gui.addFolder("sky effect controls");
	// skyFolder.add( skyEffectContr, "inclination", -1, 1, 0.0001 ).onChange( skyEffectContr.updateSkyEffect );
	// skyFolder.add( skyEffectContr, "azimuth", 0, 1, 0.0001 ).onChange( skyEffectContr.updateSkyEffect );
	 
	let materialFolder = gui.addFolder("Sphere Material Controls");
	materialFolder.add(materialContr, 'showSphere').onChange(function(e){
		hdrSphere.visible = e; multiSphere.visible = e; envMapSphere.visible = e; fresnelSphere.visible = e;
		hdrLabel.visible = e; multiLabel.visible = e; envMapLabel.visible = e; fresnelLabel.visible = e;
	});

	let hdrMaterial = materialFolder.addFolder("HDR Material");
	hdrMaterial.add(materialContr, 'variationHDR').listen();
	materialFolder.add(materialContr, 'openCubeCamera').listen();
	materialFolder.add(materialContr, 'switchEnvMapType', ['reflection', 'refraction']).onChange(function(type){
		if(type == 'reflection'){
			envMapSphere.material.envMap.mapping = THREE.CubeReflectionMapping;
		}
		if(type == 'refraction'){
			envMapSphere.material.envMap.mapping = THREE.CubeRefractionMapping;
		}
		envMapSphere.material.needsUpdate = true;
	})
	// let fresnalMaterial = materialFolder.addFolder("Fresnel Material");
	// fresnalMaterial.add(materialContr, 'variationFresnel').listen();
}

/**
 * 添加移动的聚光灯
 * @return {[type]} [description]
 */
const addMoveSpotLight = () => {
	// 添加多个聚光灯
  spotLight1 = createSpotLight( 0xFF7F00 );
  spotLight2 = createSpotLight( 0x00FF7F );
  spotLight3 = createSpotLight( 0x7F00FF );
  spotLight1.position.set( 0, 50, -60 );
	spotLight2.position.set( -45, 50, 30 );
	spotLight3.position.set( 45, 50, 30 );  
	slHelper1 = new THREE.SpotLightHelper( spotLight1 );
	slHelper2 = new THREE.SpotLightHelper( spotLight2 );
	slHelper3 = new THREE.SpotLightHelper( spotLight3 );
	spotLight1.visible = false; spotLight2.visible = false; spotLight3.visible = false; 
	slHelper1.visible = false; slHelper2.visible = false; slHelper3.visible = false;
	// 批量添加对象可以这样
	scene.add(spotLight1, spotLight2, spotLight3);
	scene.add(slHelper1, slHelper2, slHelper3);
	
	// 设置每隔5秒执行一次缓动聚光灯
	let animateSpotLight = () => {
		randomPosSpotLights( spotLight1 );
		randomPosSpotLights( spotLight2 );
		randomPosSpotLights( spotLight3 );
		setTimeout( animateSpotLight, 5000 );
	}
	animateSpotLight();
}

/**
 * 初始化球
 * @return {[type]} [description]
 */
const initSpheres = () => {
	hdrSphere = createHdrSphere();
	hdrSphere.castShadow = true;
	hdrSphere.position.set(15, 5, 15);
	hdrLabel = createLabel('HDR Sphere', new THREE.Vector3( 15, 13, 15 ));
	hdrLabel.visible = false;
	hdrSphere.visible = false;
	scene.add(hdrLabel);
	scene.add(hdrSphere);

	envMapSphere = createEnvMapSphere(cubeCamera);
	envMapSphere.castShadow = true;
	envMapSphere.position.set(-15, 5, -15);
	envMapLabel = createLabel('EnviromentMapping Sphere', new THREE.Vector3( -15, 13, -15 ));
	envMapLabel.visible = false;
	envMapSphere.visible = false;
	scene.add(envMapLabel);
	scene.add(envMapSphere);

	multiSphere = createMultiTextureSphere();
	multiSphere.castShadow = true;
	multiSphere.position.set(15, 5, -15);
	multiLabel = createLabel('MultiMaterial Sphere', new THREE.Vector3( 15, 13, -15 ));
	multiLabel.visible = false;
	multiSphere.visible = false;
	scene.add(multiLabel);
	scene.add(multiSphere);

	fresnelSphere = createFresnelSphere(cubeCamera);
	fresnelSphere.castShadow = true;
	fresnelSphere.position.set(-15, 5, 15);
	fresnelLabel = createLabel('Fresnel Sphere', new THREE.Vector3( -15, 13, 15 ));
	fresnelLabel.visible = false;
	fresnelSphere.visible = false;
	scene.add(fresnelLabel);
	scene.add(fresnelSphere);
}

const createCubeCamera = () => {
	cubeCamera = new THREE.CubeCamera( 0.1, 2000, 256 );
	scene.add(cubeCamera);
}

/**
 * 渲染
 * @return {[type]} [description]
 */
const render = () => {
	stats.update(); // 即时更新FPS

	let delta = clock.getDelta();

	orbitControls.update();

	if(!controls.stopSkyMove){
		if(directionalLight.position.y <= -1 ){
			directionalLight.visible = false;
		}else{
			directionalLight.visible = true;
		}
		skyEffectContr.inclination -= controls.sumMoveSpeed;
		skyEffectContr.updateSkyEffect();

		directionalLight.position.copy(sky.material.uniforms.sunPosition.value);
	}

	if(controls.showSpotLight){
		TWEEN.update();
		if(controls.slDebug){
			if ( slHelper1 ) slHelper1.update();
			if ( slHelper2 ) slHelper2.update();
			if ( slHelper3 ) slHelper3.update();
		}
	}

	if(materialContr.variationHDR){
		let deltaTime = delta * 5;
		// 控制不同范围的变化率
		if ( hdrSphere.material.uniforms.exposure.value > 0 || hdrSphere.material.uniforms.exposure.value < 1 ) {
			hdrRate = 0.25;
		} else {
			hdrRate = 1;
		}
		// 使曝光率从0至5不断循环增大或减小
		if ( hdrSphere.material.uniforms.exposure.value > 5 || hdrSphere.material.uniforms.exposure.value <= 0 ) {
			hdrSign *= -1;
		}
		hdrSphere.material.uniforms.exposure.value += hdrSign * hdrRate * deltaTime;
		hdrSphere.material.needsUpdate = true;
	}

	if(materialContr.openCubeCamera){
		fresnelSphere.visible = false;
		envMapSphere.visible = false;
		cubeCamera.update(renderer, scene);
		envMapSphere.visible = true;
		fresnelSphere.visible = true;
	}

	if(materialContr.showSphere){
		hdrLabel.lookAt(camera.position);
		envMapLabel.lookAt(camera.position);
		multiLabel.lookAt(camera.position);
		fresnelLabel.lookAt(camera.position);
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
	camera.position.x = -20;
	camera.position.y = 40;
	camera.position.z = 20;
	camera.lookAt(scene.position); // 视线指向场景中心
	// 创建渲染器
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	// 开启物理光照
	renderer.physicallyCorrectLights = true;
	// 所有的颜色和纹理都会与伽马值相乘
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// 擦除背景色
	renderer.setClearColor(new THREE.Color( 0xEEEEEE ), 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight); // 设置视口大小
	renderer.shadowMap.enabled = true;
	// 自然一些的纹理，默认值是PCFShadowMap
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
	//controls.maxPolarAngle = Math.PI / 2;
	orbitControls.enableZoom = false;
	orbitControls.enablePan = false;

	// 配置控制器
	initControler();

	// 展示辅助观察的世界坐标系
  worldAxes = new THREE.AxesHelper(20);
  worldAxes.visible = false;
  scene.add(worldAxes);

  // 添加天空
  sky = createSky(skyDistance, skyEffectContr);
	scene.add(sky);

	// 添加地面
	plane = createGround();
	plane.receiveShadow = true; // 接收阴影
	// 旋转并设置位置
	plane.rotation.x = -0.5 * Math.PI; // x轴旋转-90
	// 加入至场景
	scene.add(plane);

	// 添加环境光
	let ambientLight = new THREE.AmbientLight( 0x0C0C0C );
	scene.add(ambientLight);

	// 添加平行光
	directionalLight = createDirectionLight();
	// 添加光晕
  createLensflare(directionalLight);
  // 添加debug辅助模型
	dlHelper = new THREE.CameraHelper( directionalLight.shadow.camera );
	dlHelper.visible = false;
	scene.add(dlHelper);
  scene.add(directionalLight);

  addMoveSpotLight();

  createCubeCamera();

  initSpheres();

  // 关闭加载提示
	Toast.closeAll();

	// 开始渲染
	render();

	window.addEventListener('resize', onResizeWindow, false);

	resolve(renderer);
};

export default initScene;
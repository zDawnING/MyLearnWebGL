var THREE = require('three');


// import grasslight from "res_gl/img/terrain/grasslight-big.jpg";
// import grasslightNormal from "res_gl/img/terrain/grasslight-big-nm.jpg";
// 纹理贴图
import floorDiffuse from "res_gl/img/floor/hardwood2_diffuse.jpg";
import floorBump from "res_gl/img/floor/hardwood2_bump.jpg";
import floorRoughness from "res_gl/img/floor/hardwood2_roughness.jpg";
import hdrImg from "res_gl/img/memorial.png";

import CustomHdrShader from 'shader_gl/lm_scene/HdrShader.js';
import FresnelShader from 'shader_gl/lm_scene/FresnelShader';

let fontData = require('style_gl/fonts/gentilis_regular.typeface.json');

/**
 * 创建地面
 * @return {[type]} [description]
 */
export const createGround = () => {
	let geometry = new THREE.PlaneBufferGeometry(70, 70, 20, 20);
	let material = new THREE.MeshStandardMaterial( {
		color: 0xFFFFFF,
		side: THREE.FrontSide,
		roughness: 0.8, // 粗糙度，0则光滑镜面反射，1则完全漫反射
		metalness: 0.2,  // 金属质，0一般是木头或石头，1则是金属
		bumpScale: 0.005,
		// wireframe: true
	} );
	let textureLoader = new THREE.TextureLoader();
	textureLoader.load( floorDiffuse, function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4; // 使用更多的纹理采样点，默认为1
		map.repeat.set( 5, 12 );
		material.map = map;
		material.needsUpdate = true;
	} );
	textureLoader.load( floorBump, function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 5, 12 );
		material.bumpMap = map;
		material.needsUpdate = true;
	} );
	textureLoader.load( floorRoughness, function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 5, 12 );
		material.roughnessMap = map;
		material.needsUpdate = true;
	} );
	return new THREE.Mesh(geometry, material);
}

/**
 * 创建指定材质球
 * @return {[type]} [description]
 */
const createSphere = (material) => {
	let geometry = new THREE.SphereBufferGeometry( 5, 50, 50 );
	return new THREE.Mesh(geometry, material);
}
/**
 * 创建指定材质立方体
 * @return {[type]} [description]
 */
const createCube = (material) => {
	let geometry = new THREE.BoxBufferGeometry( 5, 5, 5 );
	return new THREE.Mesh(geometry, material);
}

/**
 * 创建高光纹理球
 * @return {[type]} [description]
 */
export const createHdrSphere = () => {
	let texture = new THREE.TextureLoader().load( hdrImg );
	// 设置纹理缩小过滤
	texture.minFilter = THREE.LinearFilter; // 线性过滤，最接近纹理坐标的4个纹素颜色的加权平均
	// 设置纹理放大过滤
	texture.magFilter = THREE.NearestFilter; // 最接近当前纹素的颜色
	let material = new THREE.ShaderMaterial( {
		uniforms: {
			tDiffuse:  { value: texture }, // 纹理采样
			exposure:  { value: 0.125 }, // 曝光度
			brightMax: { value: 0.5 } // 最大明亮度
		},
		vertexShader: CustomHdrShader.vertexShader,
		fragmentShader: CustomHdrShader.fragmentShader
	} );
	
	return createSphere(material);
}

/**
 * 创建环境贴图球
 * @param  {[type]} cubeCamera [6个方位的立方体相机]
 * @return {[type]}            [description]
 */
export const createEnvMapSphere = (cubeCamera) => {
	let material = new THREE.MeshBasicMaterial( {
		envMap: cubeCamera.renderTarget.texture, // 生成的立方体纹理
		side: THREE.FrontSide 
	} );
	return createSphere(material);
}

export const createRefractionSphere = (cubeCamera) => {
	// cubeCamera.mapping = THREE
	let material = new THREE.MeshBasicMaterial( {
		envMap: cubeCamera.renderTarget.texture, // 生成的立方体纹理

		side: THREE.FrontSide 
	} );
}

/**
 * 创建自定义canvas贴图球
 * @return {[type]} [description]
 */
export const createMultiTextureSphere = () =>{
	let materials = [];
	materials.push( new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending} ) ); // 黄色加透明光亮
	materials.push( new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } ) );
	materials.push( new THREE.MeshNormalMaterial( { flatShading: true } ) );
	materials.push( new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true } ) );
	// 这里由于使用多材质，应采取API提供的对材质排序的方法进行性能优化，因此对几何对象中的面进行处理
	// 这里要实现的是多种材质在几何体中随机分布，因此给每个面进行配置材质索引并根据索引排序可以减少绘制调用和提升性能
	// 配置材质索引
	let geometry = new THREE.SphereGeometry( 5, 50, 50 );
	for(let i = 0, l = geometry.faces.length; i < l; i++){
		geometry.faces[i].materialIndex = Math.floor(Math.random() * materials.length);
	}
	// 根据材质索引给每个面进行排序
	geometry.sortFacesByMaterialIndex();

	return new THREE.Mesh(geometry, materials);
}

/**
 * 创建菲涅尔衍射球，即肥皂泡泡球
 * @param  {[type]} cubeCamera [description]
 * @return {[type]}            [description]
 */
export const createFresnelSphere = (cubeCamera) => {
	let shader = THREE.FresnelShader;
	let uniforms = THREE.UniformsUtils.clone( shader.uniforms );
	uniforms[ "tCube" ].value = cubeCamera.renderTarget.texture;
	let material = new THREE.ShaderMaterial( {
		uniforms: uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader
	} );
	let geometry = new THREE.SphereGeometry( 5, 50, 50 );
	return new THREE.Mesh(geometry, material);
}

/**
 * 创建提示字
 * @param  {[type]} text     [description]
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
export const createLabel = (text, position) => {
	// 暂时不用loader,因为地址本地不好弄
	// var loader = new THREE.FontLoader();
	// 这里模拟loader后的数据
	let font = new THREE.Font(fontData, true);
	let geometry = new THREE.TextBufferGeometry(text, {
		font: font,
		size: 0.5,
		height: 0.01,
		curveSegments: 1
	})
	let material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	let mesh = new THREE.Mesh( geometry, material );
	mesh.position.copy(position);
	return mesh;
}

var THREE = require('three');
require('shader_gl/lm_scene/Sky');
require('shader_gl/lm_scene/Lensflare');

import lensflare0 from "res_gl/img/lensflare/lensflare0.png";
import lensflare3 from "res_gl/img/lensflare/lensflare3.png";

export const createDirectionLight = () => {
	let light = new THREE.DirectionalLight( 0xFFFFFF );
	light.castShadow = true;
	light.shadow.camera.near = 2;
	light.shadow.camera.far = 2000;
	// 定义平行光的照射范围
	light.shadow.camera.left = -150;
  light.shadow.camera.right = 150;
  light.shadow.camera.top = 150;
  light.shadow.camera.bottom = -150;
  // 定义平行光强度
  light.intensity = 2;
  // 设置平行光产生的阴影贴图的大小
  light.shadow.mapSize.height = 2048;
  light.shadow.mapSize.width = 2048;

  return light;
}

/**
 * 创建天空
 * @return {[type]} [description]
 */
export const createSky = (skyDistance, skyEffectContr) => {
	// Add Sky
	let sky = new THREE.Sky();
	sky.scale.setScalar( 1000 );

	// 这里是
	changeSkyEffect(sky, skyDistance, skyEffectContr);

	return sky;
}
/**
 * 改变天空效果
 * @param  {[type]} sky            [description]
 * @param  {[type]} skyDistance    [description]
 * @param  {[type]} skyEffectContr [description]
 * @return {[type]}                [description]
 */
export const changeSkyEffect = (sky, skyDistance, skyEffectContr) => {
	let uniforms = sky.material.uniforms;
	uniforms.turbidity.value = skyEffectContr.turbidity;
	uniforms.rayleigh.value = skyEffectContr.rayleigh;
	uniforms.luminance.value = skyEffectContr.luminance;
	uniforms.mieCoefficient.value = skyEffectContr.mieCoefficient;
	uniforms.mieDirectionalG.value = skyEffectContr.mieDirectionalG;
	sky.material.uniforms = uniforms;

	let theta = Math.PI * ( skyEffectContr.inclination - 0.5 );
	let phi = 2 * Math.PI * ( skyEffectContr.azimuth - 0.5 );

	uniforms.sunPosition.value.x = skyDistance * Math.cos( phi );
	uniforms.sunPosition.value.y = skyDistance * Math.sin( phi ) * Math.sin( theta );
	uniforms.sunPosition.value.z = skyDistance * Math.sin( phi ) * Math.cos( theta );
}

/**
 * 添加太阳光晕
 * @param  {[type]} light [description]
 * @return {[type]}       [description]
 */
export const createLensflare = (light) => {
	let textureLoader = new THREE.TextureLoader();
	let textureFlare0 = textureLoader.load( lensflare0 );
	let textureFlare3 = textureLoader.load( lensflare3 );
	let lensflare = new THREE.Lensflare();
	lensflare.addElement( new THREE.LensflareElement( textureFlare0, 150, 0, light.color ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 60, 0.6 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 70, 0.7 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 120, 0.9 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 70, 1 ) );
	light.add( lensflare );
}

/**
 * 创建聚光灯
 * @param  {[type]} color [description]
 * @return {[type]}       [description]
 */
export const createSpotLight = (color) => {
	let light = new THREE.SpotLight( color );
	light.castShadow = true;
	light.angle = 0.3; // 散射角度（弧度）
	light.penumbra = 0.2; // 边缘衰减幅度，默认为0
	light.decay = 2; // 根据距离的光的衰减幅度
	light.distance = 100;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	return light;
}

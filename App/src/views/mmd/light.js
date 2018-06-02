var THREE = require('three');

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
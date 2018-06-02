var THREE = require('three');

export const createDirectLight = (position) => {
	let light = new THREE.DirectionalLight( 0xFFFFFF );
 	light.distance = 200;
 	light.intensity = 1.2;
 	light.position.copy(position);
 	return light;
}
var THREE = require('three');

import bg1 from "res_gl/img/play_icon.jpg";

export const createStageBox = () => {
	var geometry = new THREE.BoxGeometry( 50, 50, 50 );
	var texture = new THREE.TextureLoader().load( bg1 );
	var material = new THREE.MeshPhongMaterial( {
		color: 0xa0adaf,
		shininess: 10,
		specular: 0x111111,
		side: THREE.BackSide,
		map: texture,
		// blending: THREE.AdditiveBlending
	} );
	return new THREE.Mesh(geometry, material);
}
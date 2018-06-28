var THREE = require('three');

export const createCircle = () => {
	// 创建圆
	var circleShape = new THREE.Shape();
	circleShape.absarc( 0, 0, 10, 0, Math.PI * 2, false );

	circleShape.autoClose = true;

	var points = circleShape.getPoints(30);
	console.log(points)

	var geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
	console.log(geometryPoints)

	return new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: 0xf08000, linewidth: 3 } ) );
}

export const createSphere = () => {
	let geometry = new THREE.SphereBufferGeometry( 2, 20, 20 );
	let material = new THREE.MeshLambertMaterial( {color: 0xFF0000} );
	return new THREE.Mesh(geometry, material);
}

export const createEllipse = () => {
	var curve = new THREE.EllipseCurve(
		0, 0,
		5, 10,
		0, Math.PI * 2,
		false,
		0
		);
	var points = curve.getPoints(30)
	var geometry = new THREE.BufferGeometry().setFromPoints(points)
	var material = new THREE.LineBasicMaterial( {color: 0xFF0000} )
	return new THREE.Line( geometry, material )
}




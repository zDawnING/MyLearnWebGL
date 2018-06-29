var THREE = require('three');

let fontData = require('style_gl/fonts/gentilis_regular.typeface.json');

export const createCircle = () => {
	// 创建圆
	let circleShape = new THREE.Shape();
	circleShape.absarc( 0, 0, 100, 0, Math.PI * 2, false );

	circleShape.autoClose = true;

	let points = circleShape.getPoints(300);
	// console.log(points)

	let geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
	// console.log(geometryPoints)

	return new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: 0xf08000, linewidth: 3 } ) );
}

export const createSphere = () => {
	let geometry = new THREE.SphereBufferGeometry( 4, 20, 20 );
	let material = new THREE.MeshNormalMaterial();
	return new THREE.Mesh(geometry, material);
}

export const createEllipse = () => {
	let curve = new THREE.EllipseCurve(
		0, 0,
		50, 100,
		0, Math.PI * 2,
		false,
		0
		);
	let points = curve.getPoints(300)
	let geometry = new THREE.BufferGeometry().setFromPoints(points)
	let material = new THREE.LineBasicMaterial( {color: 0xFF0000} )
	return new THREE.Line( geometry, material )
}

export const createCube = () => {
	let geometry = new THREE.CubeGeometry( 8, 2, 4 )
	let material = new THREE.MeshNormalMaterial()
	return new THREE.Mesh(geometry, material)
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
	let material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	let mesh = new THREE.Mesh( geometry, material );
	mesh.position.copy(position);
	return mesh;
}


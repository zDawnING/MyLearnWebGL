var THREE = require('three');

require('shader_gl/ar_scene/Water')

let fontData = require('style_gl/fonts/gentilis_regular.typeface.json');

import dialogImg from "res_gl/img/dialog.png";
import waterNormalImg from "res_gl/img/waternormals.jpg"

export const createCircle = () => {
	// 创建圆
	let circleShape = new THREE.Shape();
	circleShape.absarc( 0, 0, 300, 0, Math.PI * 2, false );

	circleShape.autoClose = true;

	let points = circleShape.getPoints(600);
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
		150, 300,
		0, Math.PI * 2,
		false,
		0
		);
	let points = curve.getPoints(600)
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


export const createTipPlane = () => {
	let geometry = new THREE.PlaneGeometry( 10, 10 , 1, 1 );
	let material = new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 1
	})
	return new THREE.Mesh(geometry, material)
}

export const createCustomTexture = (mesh, name) => {
	// 创建画布
	let canvas = document.createElement('canvas')
	canvas.width = 100
	canvas.height = 100
	// 获取上下文
	let context = canvas.getContext('2d')

	context.font = "18px serif";
	context.fillText(name, 10, 50);
	

	// let imgLoader = new THREE.ImageLoader();
	// imgLoader.load(dialogImg, (image) => {
	// 		console.log(image)
	// 		let pattern = context.createPattern(image, 'no-repeat')
	// 		context.fillStyle = pattern
	// 	  context.fillRect(0,0,100,100)

	//    	let texture = new THREE.Texture(canvas)
	// 		texture.needsUpdate = true
			
	// 		console.log(texture)
	// 		mesh.material.map = texture
	// 		mesh.material.map.wrapT = THREE.RepeatWrapping
	// 		mesh.material.map.wrapS = THREE.RepeatWrapping
	// 		mesh.material.map.needsUpdate = true
	// 	},
	// 	undefined, // 当前不支持success callback
	// 	() => { // error callback
	// 		console.error( 'image loading error' );
	// 	}
	// )
	
	// var img = new Image()
	// img.src = dialogImg
	// var pattern = context.createPattern(img, 'no-repeat')
 //  context.fillStyle = pattern;
 //  context.fillRect(0,0,64,64);

 //  // 创建纹理对象
  let texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
	mesh.material.map = texture
	mesh.material.map.wrapT = THREE.RepeatWrapping
	mesh.material.map.wrapS = THREE.RepeatWrapping
  // return texture
}

export const createWater = (light) => {
	let geometry = new THREE.PlaneBufferGeometry(1000, 1000)
	return new THREE.Water(geometry, {
		textureWidth: 512,
		textureHeight: 512,
		waterNormals: new THREE.TextureLoader().load( 
			waterNormalImg,
			texture => {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping
			}
		),
		sunDirection: light.position.clone().normalize(),
		sunColor: 0xffffff,
		waterColor: 0x001e0f,
		distortionScale:  3.7
	})
}


var THREE = require('three');
require('vendor_threejs/loaders/ctm/CTMLoader');

/**
 * 定义的几何体以球形坐标系进行球形排布
 * 重点是理解球极坐标系
 * @param  {[type]} radius [半径]
 * @param  {[type]} count  [使用的子几何体数目]
 * @param  {[type]} planeSize  [子平面大小]
 * @return {[type]}        [description]
 */
export const createSphereByPlanes = (radius, count, planeSize) => {
	let bufferGeometry = new THREE.BufferGeometry();
	// 设置子几何体的位置，法向量，颜色
	let positions = [], normals = [], colors = [];
	// 创建一个球形坐标几何对象
	let spherical = new THREE.Spherical();
	let vec3 = new THREE.Vector3();

	for(let i=1, l = count; i <= l; i++){
		// 球形极坐标方程：φ 和 θ 的计算
		let phi = Math.acos( -1 + ( 2 * i ) / l );
		let theta = Math.sqrt( l * Math.PI ) * phi;
		spherical.set( radius, phi, theta );
		// 获取球形极坐标系下的笛卡尔坐标系
		vec3.setFromSpherical( spherical );
		// 创建多个小球
		var smallBall = new THREE.PlaneGeometry( planeSize, planeSize );
		smallBall.castShadow = true;
		// 设置小球
		smallBall.lookAt( vec3 );
		smallBall.translate( vec3.x, vec3.y, vec3.z );
		// 创建一种颜色
		let color = new THREE.Color( 0xffffff );
		color.setHSL( ( i / l ), 1.0, 0.7 );

		smallBall.faces.forEach( function ( face, index ) {

			positions.push( smallBall.vertices[ face.a ].x );
			positions.push( smallBall.vertices[ face.a ].y );
			positions.push( smallBall.vertices[ face.a ].z );
			positions.push( smallBall.vertices[ face.b ].x );
			positions.push( smallBall.vertices[ face.b ].y );
			positions.push( smallBall.vertices[ face.b ].z );
			positions.push( smallBall.vertices[ face.c ].x );
			positions.push( smallBall.vertices[ face.c ].y );
			positions.push( smallBall.vertices[ face.c ].z );

			normals.push( face.normal.x );
			normals.push( face.normal.y );
			normals.push( face.normal.z );
			normals.push( face.normal.x );
			normals.push( face.normal.y );
			normals.push( face.normal.z );
			normals.push( face.normal.x );
			normals.push( face.normal.y );
			normals.push( face.normal.z );

			colors.push( color.r );
			colors.push( color.g );
			colors.push( color.b );
			colors.push( color.r );
			colors.push( color.g );
			colors.push( color.b );
			colors.push( color.r );
			colors.push( color.g );
			colors.push( color.b );

		} );
	}
	bufferGeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
	bufferGeometry.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
	bufferGeometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

	var material = new THREE.MeshPhongMaterial( {
		shininess: 80,
		vertexColors: THREE.VertexColors
	} );

	return new THREE.Mesh( bufferGeometry, material );
}

/**
 * 创建由线组成的立方体
 * 重点是控制生成线的点的位置在立方体的坐标范围中，点要较多才明显
 * @param  {[type]} radius   [立方体中心离最远点的距离]
 * @param  {[type]} pointNum [点的数目]
 * @return {[type]}          [description]
 */
export const createCubeByLines = (radius, pointNum) => {
	let bufferGeometry = new THREE.BufferGeometry();
	let material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
	let positions = [];
	let colors = [];
	for(let i=0, l = pointNum; i < l; i++){
		// 范围在(-0.5r, 0.5r)
		let x = Math.random() * radius - radius * 0.5;
		let y = Math.random() * radius - radius * 0.5;
		let z = Math.random() * radius - radius * 0.5;
		// 设置点
		positions.push(x, y, z);
		// 随机颜色时，将顶点数据范围控制在(0,1)
		colors.push((x / radius) + 0.5);
		colors.push((y / radius) + 0.5);
		colors.push((z / radius) + 0.5);
	}
	bufferGeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
	bufferGeometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
	// 默认是不进行计算包围盒，需要显式计算
	bufferGeometry.computeBoundingBox();

	return new THREE.Line( bufferGeometry, material );
}


/**
 * 加载CTM模型
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
export const loadCtmModel = (path, { color, specular, shininess } = {}, resolve, reject) => {
	let loader = new THREE.CTMLoader();
	loader.load( path,  function( geometry ) {

		let material = new THREE.MeshPhongMaterial( { color, specular, shininess } );

		resolve(new THREE.Mesh(geometry, material));

	}, { useWorker: false } );
}

/**
 * 加载bump皮肤模型
 * @param  {[type]} path                [description]
 * @param  {[type]} options.texturePath [description]
 * @param  {[type]} options.color       [description]
 * @param  {[type]} options.specular    [description]
 * @param  {Object} options.shininess   }            [description]
 * @param  {[type]} resolve             [description]
 * @param  {[type]} reject              [description]
 * @return {[type]}                     [description]
 */
export const loadBumpSkinModel = (path, { texturePath, color, specular, shininess, bumpScale } = {}, resolve, reject) => {
	let bumpTexture = new THREE.TextureLoader().load( texturePath );
	let material = new THREE.MeshPhongMaterial( {
		color,
		specular,
		shininess,
		bumpScale,
		bumpMap: bumpTexture,
	} );
	let loader = new THREE.JSONLoader();
	loader.load( path, function( geometry ) { 
		resolve(new THREE.Mesh(geometry, material));
	})
}



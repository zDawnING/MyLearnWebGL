
const initArrayBuffer = (gl, data, num, type, attribute) => {
	let buffer = gl.createBuffer();
	if(!buffer){
		console.log("not create buffer");
		return false;
	}
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

	let a_attribute = gl.getAttribLocation(gl.program, attribute);
	if(a_attribute < 0){
		console.log("not find attribute");
		return false;
	}

	gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
	gl.enableVertexAttribArray(a_attribute);

	return true;
}


/**
 * 初始化vertexBuffer对象
 * @param  {[type]} gl [description]
 * @return {[type]}    [description]
 */
const initVertexBuffers = (gl, data) => {
	// 创建缓冲区对象
	var indexBuffer = gl.createBuffer();
	if(!indexBuffer) {
		console.log('not create buffer object');
		return false;
	}
	
	if(!initArrayBuffer(gl, data.vertices, 3, gl.FLOAT, 'a_Position')) return -1;
	if(!initArrayBuffer(gl, data.texCoords, 2, gl.FLOAT, 'a_TexCoord')) return -1;

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data.indices, gl.STATIC_DRAW);

	return true;
}

export default initVertexBuffers;
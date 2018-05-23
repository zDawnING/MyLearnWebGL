import { getWebGLContext, initShaders } from "vendor_gl/cuon-utils";
import { Matrix4, Vector3 } from "vendor_gl/cuon-matrix";
import TestShader from "shader_gl/fpviewer/TestShader";

const fpviewer = (resolve, reject) => {

	const canvas = document.createElement("canvas");

	if(!canvas){
		console.log("no read element");
		reject();
	}
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('no read rendering context for webgl');
		reject();
	}

	if(!initShaders(gl, TestShader.vertexShader, TestShader.fragmentShader)){
		console.log('Failed to intialize shaders.');
		return;
	}

	let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
	let a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
	if (a_Position < 0 || a_PointSize < 0) {
		console.log('Failed to get the storage location');
		return;
	}

	gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
	gl.vertexAttrib1f(a_PointSize, 10.0);

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);

	resolve(canvas);
}

export default fpviewer;
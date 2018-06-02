import { getWebGLContext, initShaders } from "vendor_gl/cuon-utils";
import { Matrix4, Vector3 } from "vendor_gl/cuon-matrix";
import TestShader from "shader_gl/fpviewer/TestShader";
import initVertexBuffers from "fpviewer/buffer";
import { initCubeData, initNiuModelData}  from "fpviewer/data";
import initTextures from "fpviewer/texture";
import initEventHandlers from "fpviewer/click_rotate_obj";

// 记录立方体的变换矩阵
let g_MVPMatrix = new Matrix4();
// camera view point
let cameraPos = new Vector3([3.0, 3.0, 7.0]);
let distance = Math.pow(cameraPos.elements[0],2) 
	+ Math.pow(cameraPos.elements[1],2) + Math.pow(cameraPos.elements[2],2);

// 自定义视场宽度
let customViewWidth = 56;

let gl, canvas, viewMatrix;

const fpviewer = (resolve, reject) => {

	canvas = document.createElement("canvas");

	if(!canvas){
		console.log("no read element");
		reject();
	}
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('no read rendering context for webgl');
		reject();
	}

	if(!initShaders(gl, TestShader.vertexShader, TestShader.fragmentShader)){
		console.log('Failed to intialize shaders.');
		reject();
	}

	let modelData = initCubeData();
	let dataNum = modelData.indices.length;

	if(!initVertexBuffers(gl, modelData)){
		console.log("failed to set vertices");
		reject();
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);

	let u_MVPMatrix = gl.getUniformLocation(gl.program, 'u_MVPMatrix');

	viewMatrix = new Matrix4();
	// 适配多种屏幕
	let fov = calcFov(distance, customViewWidth, canvas.width / canvas.height);
	viewMatrix.setPerspective(fov, canvas.width / canvas.height, 0.1, 1000.0);
	viewMatrix.lookAt(cameraPos.elements[0], cameraPos.elements[1], cameraPos.elements[2], 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

	let currentAngle = [0.0, 0.0]; // [绕x轴旋转角度，绕y轴旋转角度]
	initEventHandlers(canvas, currentAngle);

	if(!initTextures(gl, dataNum)){
		console.log("not intialize texture");
		reject();
	}

	// 加载牛头模型
	// initNiuModelData();

	const tick = function(){
		draw(gl, dataNum, viewMatrix, u_MVPMatrix, currentAngle);
		requestAnimationFrame(tick);
	}
	tick();

	window.addEventListener('resize', resizeWindows, false);

	resolve(canvas);
}

const draw = (gl, n, viewMatrix, u_MVPMatrix, currentAngle) => {
	g_MVPMatrix.set(viewMatrix);
	g_MVPMatrix.rotate(currentAngle[0], 1.0, 0.0, 0.0);
	g_MVPMatrix.rotate(currentAngle[1], 0.0, 1.0, 0.0);

	gl.uniformMatrix4fv(u_MVPMatrix, false, g_MVPMatrix.elements);

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
}

/**
 * 计算相机 fov 的函数
 * @param d : 在相机前方 d 距离
 * @param w : 想要看到最大正方形区域边长为 w
 * @param r : 屏幕宽高比
 */
function calcFov(d, w, r) {
  var f;
  var vertical = w;
  if (r < 1) {
      vertical = vertical/r;
  }
  f = Math.atan(vertical/d/2)*2 * (180 / Math.PI);
  return f;
}

const resizeWindows = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// 适配多种屏幕
	let fov = calcFov(distance, customViewWidth, canvas.width / canvas.height);
	viewMatrix.setPerspective(fov, canvas.width / canvas.height, 0.1, 1000.0);
	viewMatrix.lookAt(3.0, 3.0, 7.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
	gl.viewport( 0, 0, canvas.width, canvas.height );
	
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
}


export default fpviewer;
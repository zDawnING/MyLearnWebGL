import textureImg from 'res_gl/img/sky.jpg';


const loadTexture = (gl, n, texture, u_Sampler, image) => {
	// y轴翻转图片
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	// 激活0号纹理
	gl.activeTexture(gl.TEXTURE0);
	// 绑定成2D纹理
	gl.bindTexture(gl.TEXTURE_2D, texture);

	// 设置纹理参数
	gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

	// 测试其他的纹理填充模式
	// 垂直方向镜像重复填充
	// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	// // 水平方向去取边缘值作为填充值
// 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);

	// 设置纹理图像参数
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

	// 将纹理单元设置到采样器对象
	gl.uniform1i(u_Sampler, 0);
}

const initTexture = (gl, num) => {
	// 创建纹理对象
	let texture = gl.createTexture();
	if(!texture){
		console.log("not create texture object");
		return false;
	}

	let u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');

	let image = new Image();
	image.onload = function(){
		loadTexture(gl, num, texture, u_Sampler, image);
	}
	image.src = textureImg;

	return true;
}

export default initTexture;
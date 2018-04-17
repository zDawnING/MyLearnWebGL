#ifdef GL_ES
precision mediump float;
#endif

// 提高精度
vec4 upPrecision(const in float z){
	const vec4 bitShift = vec4(1.0, 256.0, 256.0*256.0, 256.0*256.0*256.0);
	const vec4 bitMask = vec4(1.0/256.0, 1.0/256.0, 1.0/256.0, 0.0);

	vec4 rgbaDepth = fract(gl_FragCoord.z * bitShift);
	rgbaDepth -= rgbaDepth.gbaa * bitMask;

	return rgbaDepth;
}

void main(){
	// 低精度版：仅适用于光源距离物体很近的情况，当光源调节得太远则阴影会消失
	// 原因是：随着光源与照射物体间的距离变远，gl_FragCoord.z的值也会增大，当光源足够远时, z就大到无法存储在只有8位的R分量中。
	// 简单的解决办法是使用阴影贴图的R,G,B,A这四个分量中，用4字节共32位来存储z值。
	// 把z值写入片元颜色值的R值中，后面读取比较
	// gl_FragColor = vec4(gl_FragCoord.z, 0.0, 0.0, 0.0);
	
	// 提高精度版：将gl_FragCoord.z拆为4个字节R,G,B,A. 因为1个字节的精度是1/256, 将大于1/256的部分存储在R分量中，将1/256到1/(256*256)的部分存储在G分量中，将1/(256*256)到1/(256*256*256)存储在B分量中，并将小于1/(256*256*256)的部分存储在A分量中。使用内置函数fract()来计算上述分量的值，该函数舍弃参数的整数部分，返回小数部分。使用vec4类型存储上述数据，精度高于8位，则还需要将多余的部分砍掉。最后将该vec4赋值给gl_FragColor.这样一来就将z值保存在阴影贴图的4个分量中，获得了更高的精度
	gl_FragColor = upPrecision(gl_FragCoord.z);
}
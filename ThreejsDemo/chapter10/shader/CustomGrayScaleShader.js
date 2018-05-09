/**
 * 自定义的灰度图着色器
 *
 * 这里解析一下uniforms参数的使用：
 * 类型 t 代表 纹理，该纹理包含的是EffectComposer中前一个通道的渲染结果
 * 类型 f 代表 浮点数
 * 类型 i 代表 整型
 * 类型 v1/2/3 代表 1/2/3维向量
 * 类型 c 代表 颜色(THREE.Color) 对应vec3
 * 类型 fv1/2 代表 数组1/2维
 * @type {Object}
 */
THREE.CustomGrayScaleShader = {
	uniforms: {
		"tDiffuse": {type: "t", value: null}, 
		"rPower": {type: "f", value: 0.2126},
		"gPower": {type: "f", value: 0.7152},
		"bPower": {type: "f", value: 0.0722}
	},
	// 顶点着色器
	vertexShader: [
		"varying vec2 vUv;",

		"void main() {",

		"vUv = uv;",
		"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",

		"}"
	].join("\n"), // 这里直接数组组合成完整的字符串
	// 片元着色器
	fragmentShader: [
		"uniform float rPower;",
		"uniform float gPower;",
		"uniform float bPower;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main(){",

		"vec4 texel = texture2D( tDiffuse, vUv );", // 获取到的纹理颜色
		"float gray = texel.r * rPower + texel.g * gPower + texel.b * bPower;",
		"gl_FragColor = vec4(vec3(gray), texel.a);",

		"}"
	].join("\n")
};
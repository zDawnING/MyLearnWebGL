/**
 * 自定义位着色器
 * 
 * 这里通过调高或降低位数，然后将位数与原颜色相乘出尾数再相除，在低位数通过去尾降低了颜色的精度（即位数降低）
 * @type {Object}
 */
THREE.CustomBitShader = {
	uniforms: {
		"tDiffuse": {type: "t", value: null},
		"bitSize": {type: "i", value: 4}
	},
	vertexShader: [
		"varying vec2 vUv;",

		"void main(){",
			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		"}"
	].join("\n"),
	fragmentShader: [
		"uniform int bitSize;",
		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main(){",
			"vec4 texel = texture2D(tDiffuse, vUv);",
			"float n = pow(float(bitSize), 2.0);", 
			"float newR = floor(texel.r * n) / n;",
			"float newG = floor(texel.g * n) / n;",
			"float newB = floor(texel.b * n) / n;",
			"gl_FragColor = vec4(newR, newG, newB, texel.a);",
		"}"
	].join("\n")
}
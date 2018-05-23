/**
 * 测试shader
 * @type {Object}
 */
const TestShader = {
	// 顶点着色器
	vertexShader: [

		"attribute vec4 a_Position;",
		"attribute float a_PointSize;",

		"void main(){",
			"gl_Position = a_Position;",
			"gl_PointSize = a_PointSize;",
		"}"

	].join("\n"),
	// 片元着色器
	fragmentShader: [

		"#ifdef GL_ES",
		"precision mediump float;",
		"#endif",

		"void main() {",
			"gl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );",
		"}"

	].join("\n")
}

export default TestShader;
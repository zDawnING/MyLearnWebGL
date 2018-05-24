/**
 * 测试shader
 * @type {Object}
 */
const TestShader = {
	// 顶点着色器
	vertexShader: [

		"attribute vec4 a_Position;",
		"attribute vec2 a_TexCoord;",

		"uniform mat4 u_MVPMatrix;",

		"varying vec2 v_TexCoord;",

		"void main(){",
			"gl_Position = u_MVPMatrix * a_Position;",
			"v_TexCoord = a_TexCoord;",
		"}"

	].join("\n"),
	// 片元着色器
	fragmentShader: [

		"#ifdef GL_ES",
		"precision mediump float;",
		"#endif",

		"uniform sampler2D u_Sampler;",

		"varying vec2 v_TexCoord;",

		"void main(){",
			"gl_FragColor = texture2D(u_Sampler, v_TexCoord);",
		"}"

	].join("\n")
}

export default TestShader;
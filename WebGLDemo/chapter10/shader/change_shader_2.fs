#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_Sampler;

varying vec2 v_TexCoord;
varying float v_DiffuseIntensity;

void main(){
	vec4 color = texture2D(u_Sampler, v_TexCoord);
	// 漫反射系数计算在每个片元中计算
	gl_FragColor = vec4(color.rgb * v_DiffuseIntensity, color.a);
}
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_Sampler;
uniform vec3 u_FogColor; // 雾的颜色
uniform vec2 u_FogDist; // 雾的起点和终点

varying float v_Dist;
varying vec2 v_TexCoord;

void main(){
	// 计算雾化因子
	float fogFactor = clamp( (u_FogDist.y - v_Dist) / (u_FogDist.y - u_FogDist.x), 0.0, 1.0);
	// 纹理颜色
	vec4 texture = texture2D(u_Sampler, v_TexCoord);
	// 混合后的颜色
	vec3 mixColor = mix(u_FogColor, vec3(texture.rgb), fogFactor);
	vec4 color = vec4(mixColor, 1.0);
	gl_FragColor = color;
}
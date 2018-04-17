#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_Sampler;
uniform float u_Alpha;

varying vec2 v_TexCoord;

void main(){
	vec3 color = texture2D(u_Sampler, v_TexCoord).rgb;
	gl_FragColor = vec4(color, u_Alpha); 
}

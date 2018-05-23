attribute vec4 a_Position;
attribute vec4 a_Normal;
attribute vec2 a_TexCoord;

uniform mat4 u_MVPMatrix;
uniform mat4 u_NormalMatrix;
uniform vec3 u_LightDirection;

varying vec2 v_TexCoord;
varying float v_DiffuseIntensity;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
	v_DiffuseIntensity = max(dot(u_LightDirection, normal), 0.0);
	v_TexCoord = a_TexCoord;
}
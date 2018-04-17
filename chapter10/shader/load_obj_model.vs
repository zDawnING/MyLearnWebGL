attribute vec4 a_Position;
attribute vec4 a_Normal;
attribute vec4 a_Color;

uniform mat4 u_MVPMatrix;
uniform mat4 u_NormalMatrix;
uniform vec3 u_LightDirection;

varying vec4 v_Color;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	vec3 lightDirection = vec3(-0.35, 0.35, 0.87);
	vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
	float diffuseIntensity = max(dot(normal, u_LightDirection), 0.0);
	v_Color = vec4(a_Color.rgb * diffuseIntensity, a_Color.a);
}
attribute vec4 a_Position;
attribute vec4 a_Normal;

uniform vec3 u_LightDirection;

uniform mat4 u_MVPMatrix;
uniform mat4 u_NormalMatrix;

varying vec4 v_Color;

void main(){
	// 这里直接定义颜色
	vec4 cubeColor = vec4(0.0, 1.0, 1.0, 1.0);
	gl_Position = u_MVPMatrix * a_Position;
	vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
	float diffuseIntensity = max(dot(u_LightDirection, normal), 0.0);
	vec3 color = cubeColor.rgb * diffuseIntensity;
	v_Color = vec4(color, cubeColor.a);
}
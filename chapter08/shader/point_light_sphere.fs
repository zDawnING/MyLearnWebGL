#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 u_LightPosition; // 点光源位置
uniform vec3 u_LightColor;
uniform vec3 u_AmbientLight; // 环境光

varying vec3 v_Normal;
varying vec3 v_Position;
varying vec4 v_Color;

void main(){
	vec3 normal = normalize(v_Normal);
	// 计算光线方向并归一化
	vec3 lightDirection = normalize(u_LightPosition - v_Position);
	// 环境光
	vec3 ambient = u_AmbientLight * v_Color.rgb;
	// 漫反射强度
	float diffuseIntensity = max(dot(lightDirection, normal), 0.0);
	// 漫反射
	vec3 diffuse = u_LightColor * v_Color.rgb * diffuseIntensity;
	// 拆开物体材质颜色中的a, 是为了避开物体透明度对反射光照的影响，这里直接选择物体本身的透明度
	gl_FragColor = vec4(diffuse + ambient, v_Color.a);
}
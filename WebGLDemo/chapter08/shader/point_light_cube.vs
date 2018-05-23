attribute vec4 a_Position;
attribute vec4 a_Color;
attribute vec4 a_Normal;

uniform mat4 u_MVPMatrix;
uniform mat4 u_NormalMatrix; // 用于变换法向量的矩阵（逆转置矩阵）
uniform mat4 u_ModelMatrix; // 

uniform vec3 u_LightPosition; // 点光源位置
uniform vec3 u_LightColor;
uniform vec3 u_LightDirection; // 平行光方向
uniform vec3 u_AmbientLight; // 环境光

varying vec4 v_Color;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	// 计算顶点的世界坐标系
	vec4 vertexPosition = u_ModelMatrix * a_Position;
	// 计算光线方向并归一化
	vec3 lightDirection = normalize(u_LightPosition - vertexPosition.xyz);
	// 环境光
	vec3 ambient = u_AmbientLight * a_Color.rgb;
	// 计算变换后的法向量
	vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
	// 漫反射强度
	float diffuseIntensity = max(dot(lightDirection, normal), 0.0);
	// 漫反射
	vec3 diffuse = u_LightColor * a_Color.rgb * diffuseIntensity;
	// 拆开物体材质颜色中的a, 是为了避开物体透明度对反射光照的影响，这里直接选择物体本身的透明度
	v_Color = vec4(diffuse + ambient, a_Color.a);
}


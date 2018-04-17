attribute vec4 a_Position;
attribute vec4 a_Normal;

uniform mat4 u_MVPMatrix;
uniform mat4 u_ModelMatrix; 
uniform mat4 u_NormalMatrix; // 用于变换法向量的矩阵（逆转置矩阵）

varying vec3 v_Normal;
varying vec3 v_Position;
varying vec4 v_Color;

void main(){
	// 球体定义成白色
	vec4 color = vec4(1.0, 1.0, 1.0, 1.0);
	// 计算顶点的世界坐标系
	v_Position = vec3(u_ModelMatrix * a_Position);
	// 计算变换后的法向量
	v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
	gl_Position = u_MVPMatrix * a_Position;
	v_Color = color;
}


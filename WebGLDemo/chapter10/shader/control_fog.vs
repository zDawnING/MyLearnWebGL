attribute vec4 a_Position;
attribute vec2 a_TexCoord;

uniform mat4 u_MVPMatrix;

uniform mat4 u_ModelMatrix;
uniform vec4 u_Eye;

varying float v_Dist;
varying vec2 v_TexCoord;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	v_TexCoord = a_TexCoord;
	// 计算顶点与视点之间的距离, 这样计算对性能消耗太大
	// v_Dist = distance(u_ModelMatrix * a_Position, u_Eye);
	v_Dist = gl_Position.w;
}

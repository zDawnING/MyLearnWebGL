attribute vec4 a_Position;
attribute vec4 a_Color;

uniform mat4 u_MVPMatrix;
uniform mat4 u_MVPMatrixFromLight; //以灯光为视角的MVP矩阵

varying vec4 v_PositionFromLight;
varying vec4 v_Color;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	v_PositionFromLight = u_MVPMatrixFromLight * a_Position;
	v_Color = a_Color;
}
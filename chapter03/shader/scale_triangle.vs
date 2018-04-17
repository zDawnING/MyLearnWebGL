
attribute vec4 a_Position;
uniform mat4 u_changeMatrix;

void main(){
	gl_Position = u_changeMatrix * a_Position;
}
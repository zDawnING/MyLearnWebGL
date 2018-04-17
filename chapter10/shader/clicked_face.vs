attribute vec4 a_Position;
attribute vec4 a_Color;
attribute float a_Face; // 立方体各个面的编号(attr 不能传 int)

uniform mat4 u_MVPMatrix;
uniform int u_PickedFace; // 选中的面编号

varying vec4 v_Color;

void main(){
	gl_Position = u_MVPMatrix * a_Position;
	int face = int(a_Face);
	// 选中则设置为白色, 没选中则使用物体原来的颜色
	vec3 color = (face == u_PickedFace) ? vec3(1.0) : a_Color.rgb;
	if(u_PickedFace == 0){ // 初始化点击时,将表面编号写入a分量，用于选中某像素后读取面编号
		v_Color = vec4(color, a_Face / 255.0); // 面编号这里重新做了小于1.0的处理
	}else{
		v_Color = vec4(color, a_Color.a);
	}
}

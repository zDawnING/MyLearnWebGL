#ifdef GL_ES
precision mediump float;
#endif

void main(){
	// 获取当前绘制片元的距离中心点位置
	float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
	if(dist < 0.5){ // 控制距离0.5的范围内绘制片元，即半径为0.5的圆
		gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	}else{
		discard;
	}
}
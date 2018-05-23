#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_ShadowMap;

varying vec4 v_PositionFromLight;
varying vec4 v_Color;

// 从RBGA四个分量中重新计算出Z值
float unpackDepth(const in vec4 rgbaDepth){
	const vec4 bitShift = vec4(1.0, 1.0/256.0, 1.0/(256.0*256.0), 1.0/(256.0*256.0*256.0));

	// 还原高精度的原始Z值公式为：depth = rgbaDepth * 1.0 + rgbaDepth.g/256.0 + rgbaDepth.b/256.0*256.0 + rgbaDepth.a/(256.0*256.0*256.0)
	// 由于上面公式与点乘公式一致，则直接使用点乘即可
	float depth = dot(rgbaDepth, bitShift);
	return depth;
}

void main(){
	// 这里求出的z值是光源坐标系下的z值用于与阴影贴图相比较，x、y分别对应当前片元在阴影贴图中对应纹素的纹理坐标
	// 分别都进行归一化，即[0.0,1.0]区间
	vec3 shadowCoord = (v_PositionFromLight.xyz / v_PositionFromLight.w)/2.0 + 0.5;
	// 根据坐标抽取阴影贴图中的纹理像素（含内插过程）
	vec4 rgbaDepth = texture2D(u_ShadowMap, shadowCoord.xy);

	//低精度：从R分量中提取Z值
	// float depth = rgbaDepth.r;
	// 高精度处理：从RBGA四个分量中重新计算出Z值
	float depth = unpackDepth(rgbaDepth);

	// 比较光源坐标系下的Z值和贴图深度值，设置片元的阴影程度（这里贴图的z值为了避免精度的不合而导致的马赫带，加上略大于精度的偏移量）
	// 低精度：8位浮点数精度为1/256, 则是0.00390625
	// float visibility = (shadowCoord.z > depth + 0.005) ? 0.7 : 1.0; 
	// 高精度：此时z值精度提高至float, 在mediump精度下，精度为2^-10 = 0.000976563 
	float visibility = (shadowCoord.z > depth + 0.0015) ? 0.7 : 1.0;
	gl_FragColor = vec4(v_Color.rgb * visibility, v_Color.a);
}
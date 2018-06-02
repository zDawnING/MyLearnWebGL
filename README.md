## Welcome to My WebGL Learning

### OpenGL学习文档指引：
> 传送门：[OpenGL Learning](https://github.com/zDawnING/MyLearnOpenGL)

### WebGL学习文档指引：
> 传送门：[WebGL Learning](/MyLearnWebGL/WebGLDemo)

> 目录：
1. WebGL开发的基本流程
2. WebGL的坐标系统
3. 使用WebGL中的缓冲区对象
4. 几何形状的装配和光栅化
5. 纹理映射
6. GLSL ES的一些常见运用
7. 视点与视线
8. 可视空间
9. 隐藏面消除（开启深度测试）
10. 光照
11. 层次模型
12. 雾化
13. alpha混合
14. 帧缓冲
15. 阴影
16. 3D模型解析
17. WebGL上下文丢失

### Threejs学习文档指引：
> 传送门：[Threejs Learning](/MyLearnWebGL/ThreejsDemo)

> 目录：
1. Threejs开发的基本流程
2. 网格对象的创建
3. 网格对象的变换
4. 基础光照
5. 场景反射
6. 基础材质
7. 多种材质合并
8. 线条材质
9. 自定义(shader)材质
10. 基础几何体
11. 高级几何体
12. 操作合并网格
13. 基础粒子
14. 基础模型加载
15. 基础动画
16. 相机控制
17. 鼠标选择对象
18. 骨骼动画
19. 变形动画
20. 基础映射贴图
21. 基础纹理贴图
22. 环境贴图
23. UV映射
24. 视频纹理
25. 基础后期特效
26. 掩膜特效
27. 基础shaderpass组件
28. 高级shaderpass组件
29. 自定义shaderpass组件
30. 基础物理引擎应用

### 项目中的App 
这个App项目是本人使用`webpack4`自行搭建的，用于WebGL框架设计实验，包括Threejs最新版的使用
目前该项目还处于初步搭建阶段，已有4个demo。(下一步则会更新移动端的交互Demo和测试GUI插件，应该会引入vue2)
> 其中有两个暂时仅支持本地发布运行，原因是我这边采用的是远程加载模型，但是模型地址是http协议的，与github的https不符，后面我申请https的SSL后再开放线上版

线上传输门：
* [webgl demo pc&mobile](https://zdawning.github.io/MyLearnWebGL/App/dist/fpviewer_index.html)
* [threejs demo sky&light&material](https://zdawning.github.io/MyLearnWebGL/App/dist/lm_scene_index.html)

本地运行：
1. `cd App`
2. `npm init`
3. `npm install`
4. `npm run start`

### 后记

这些文档是让自己对知识点的回顾，在图形学的道路上只有不断地拓宽视野并逐一思考，将消化过的知识以文字的形式沉淀下来，才有更深层次的认识。其次，分享知识其实也是一大乐事233333

后面我会根据自身情况持续更新文档内容，希望对大家的图形学之旅有所帮助。

Demo中可能存在个别不能跑的情况，可提交Issue提醒更正，谢谢。

以上文档禁止转载，如有需要请联系本人。邮箱：384864323@qq.com


## Threejs Learning

### 概述

> Threejs的应用层学习主要是提高对它的API和它所提供的Demo的熟悉度，根据它现有的每个API来创造出我们想要的业务场景。从框架的角度来看，Threejs算是一个开放度高，入门门槛较低的一款WebGL应用框架，适合不懂图形学的前端人员的简单开发，同样也适合webgl开发人员(含图形学学者)将作为一款合适的webgl开发框架来使用在商业项目当中。

> 如果要深入学习WebGL, Threejs同样是一个非常合适的学习模板。如果想要深入了解WebGL的某个方面，可以直接从Threejs的API中找到对应的功能，一步步解析其内部的构建步骤，图形算法，生产模式等。

> 本文档主要是展示自己作为初学者跟随[《Learning-Three-js 2nd》]()学习的原书demo整合，demo代码由本人自己组建并重新整合同一模块的多个类似的demo，另外也修复了原demo中存在的各种问题。文档目的跟之前的webgl学习文档一样是为了方便自己反复查阅自己的代码和知识点回顾，并为后面的进阶改造做好铺垫。书中的Threejs版本是69, 虽然现在的已经是92，新版新增了很多新特性同时也删除或替换了旧API，但这并不影响对Threejs的整体的学习，我认为学习一个框架的过程应该是从它主体内容开始，然后是扩展至特性，最后则是解析内部原理。

> 文档中的demo代码经过整合模块并全面地做了注释说明，方便整体阅读和功能点查阅。如果有侵权问题，请提交Issue提醒我删除或更改。（If there is any infringement, please submit it to issue. I will delete or change it.）

> 本人阅读的是英文版，因此会摘录书中的一些图文内容用于参考，其内容不会做详细翻译解释。

### Threejs开发的基本流程

1. 初始化基础场景对象，如相机，渲染器，物体模型，光源等。
2. 执行渲染方法，使用`requestAnimationFrame`来按照浏览器定义的时间间隔的递归调用渲染方法
3. 添加辅助性能检测组件state, 辅助控制场景对象的界面组件dat.GUI
4. 可选添加窗口尺寸发生变化后的重新执行绘图的方法

> 以上前2步实际已经完成Threejs的基本流程，所以说这个框架使用起来非常简单便捷，可以快速投入业务开发。

示例代码：
```javascript

// 初始化所有配置
init(){
  // 创建场景
  scene = new THREE.Scene();
  //...
  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  //...
  // 创建相机（例透视投影相机）
  camera = new THREE.PerspectiveCamera( fov, width/height, near, far );
  //...
  // 初始化性能检测组件state
  stats = initStats();
  //...
  // 初始化控制器界面UI
  control = initControl();
  //...
  // 期间创建相机，物体模型，光源等
  //...
  // 将渲染器的输出载入指定的div元素中
  document.getElementById("webgl-output").appendChild(renderer.domElement);
  // 执行渲染
  render();
}

// 渲染方法
render(){
  // 更新state的检测数据
  state.update();
  //...
  // 执行场景中某些对象的绘制时的动作
  //...
  // 利用帧动画根据浏览器时间间隔递归调用渲染方法，
  requestAnimationFrame(render);
  // 让渲染器使用定义的相机进行渲染场景
  renderer.render( scene, camera );
}

// 配置state
initStats() { ... };
// 配置控制界面UI
initControl() { ... };
```

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter01/basic_scene.html)


### 功能示例Demo

> 下面展示每个Demo的截图,功能点目录,要点等，知识点查阅均以注释的形式写在对应功能代码附近，每块功能均划分好模块，阅读难度很低。

#### 网格对象的创建

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_geo_control.png)

功能点：
1. 添加网格对象至场景
2. 遍历场景并删除网格对象
3. 覆盖场景中所有网格对象的材质
5. 创建自定义网格对象
6. 创建雾

要点：
1. 场景中有需要经常移除或添加的网格对象，在物体繁多的场景中，不管是独立的或者是批量生成的网格对象，应该给这些网格设置合适的名字，方便在操作时准确地查找和处理，避免因找错对象而浪费大量的时间排查。
2. 自定义网格对象时，顶点数据与索引数据的使用，实质跟WebGL的中的[使用顶点索引绘制]的使用基本上是类似的，只不过加上了一些数据的封装；另外每个面的法向量也不需要我们自行逐面进行向量叉乘求得，THhreejs内部已经提供方法进行计算获取。
3. 不管使用新版的Threejs还是旧版的，都要注意控制台上的信息打印，除了错误信息之外，控制台也会给出一些使用旧API的更新提示，这个要加以留意，说不定可以提高渲染速度或减少开销等。

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter02/basic_geo_control.html)

#### 网格对象的变换

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/trans_geo.png)

功能点：
1. 控制立方体进行沿坐标轴缩放、平移、旋转和按对应轴分量位移变换

要点：
1. 在使用变换前，可看官方API中的`Object3D`对象中提供了多少跟变换相关的方法，有一个大致的了解，方便以后在运用一些复杂的变换时有一定的思路或检索目标
2. 应用变换时，特别注意叠加变换的顺序，并且要在自己的大脑中有明确的变换目标，而不是通过瞎调试来达到想要的效果

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter02/trans_geo.html)

#### 基础光照

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_light.png)

功能点：
1. 平行光，点光源，聚光灯
2. 多种基础光源同时使用，亦可通过关闭开关来测试单独光源
3. 测试观察阴影生成和光源在不同参数下的实际效果，另外可开启debug模式来进一步观察

要点：
1. 查看API中的`Light`, `DirectionLight`, `PointLight`, `SpotLight`中提供的方法，了解最新的光照demo并模仿学习
2. 如果是运动的光源，可以添加实体网格与光源同步位置

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter03/basic_light.html)

#### 场景反射

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/outdoor_light.png)

功能点：
1. 了解半球光的特性和可配置项

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter03/outdoor_light.html)

#### 基础材质

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_material.png)

功能点：
1. 基础材质：`BasicMaterial`, `NormalMaterial`, `LambertMaterial`, `PhongMaterial`
2. 观察webGL渲染器与canvas渲染器的区别
3. 观察不同材质在不同几何体上的展示效果

要点：
1. 重点查看API中的`Material`，了解所有材质中的共有的属性，和一些定义好的常量控制，如`Side`,`Colors`,`Blending Mode`,`Depth Mode`这些模块上的常量控制对进阶开发非常有帮助。
2. `Material`所衍生出来的如basic、normal、lambert等材质，其内部属性的不同也表明了材质本身的用途也各异。下面展示当前版本下的材质说明：
![material](/docs/img/threejs/QQ20180519-215924@2x.png)
![material](/docs/img/threejs/QQ20180519-220151@2x.png)
3. 材质的属性分为3类：
* 基础属性，一般的有命名，透明度控制，应用面，是否更新材质等
* 混合属性，一般用于与物体颜色与背景颜色的融合，类似于WebGL中的混合，亦可指定混合公式
* 高级属性，一般用于开启深度测试、alpha测试，是否关闭深度写入，解决深度冲突等
详细看API和示例demo中的使用

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/basic_material.html)

#### 多种材质合并

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/combinded_material.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/combinded_material.html)

#### 线条材质

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/line_material.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/line_material.html)

#### 自定义(shader)材质

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/shader_material.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/shader_material.html)

#### 基础几何体

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_geometry.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/basic_geometry.html)

#### 高级几何体

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/advanced_geometry.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/advanced_geometry.html)

#### 操作合并网格

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/operate_combine_mesh.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/operate_combine_mesh.html)

#### 基础粒子

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_particle.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter06/basic_particle.html)

#### 基础模型加载

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_load_model.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter07/basic_load_model.html)

#### 基础动画

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_animate.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter08/basic_animate.html)

#### 相机控制

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_camera_control.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter08/basic_camera_control.html)

#### 鼠标选择对象

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_select_object.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter08/basic_select_object.html)

#### 骨骼动画

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/bone_animate.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter08/bone_animate.html)

#### 变形动画

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/morph_animate.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter08/morph_animate.html)

#### 基础映射贴图

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_map.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/basic_map.html)

#### 基础纹理贴图

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_texture.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/basic_texture.html)

#### 环境贴图

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/enviroment_map.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/enviroment_map.html)

#### UV映射

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/uv_mapping.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/uv_mapping.html)

#### 视频纹理

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/video_texture.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/video_texture.html)

#### 基础后期特效

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_effect.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter10/basic_effect.html)

#### 掩膜特效

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/marks_effect.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter10/marks_effect.html)

#### 基础shaderpass组件

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_shaderpass.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter10/basic_shaderpass.html)

#### 高级shaderpass组件

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/advanced_shaderpass.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter10/advanced_shaderpass.html)

#### 自定义shaderpass组件

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/custom_shaderpass.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter10/custom_shaderpass.html)

#### 基础物理引擎应用

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_physics.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter11/basic_physics.html)

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
1. 使用`SceneUtils.createMultiMaterialObject`方法进行多种类型的材质合并

要点：
1. 创建多材质对象网格时，几何体会被复制，返回一个网格组，两个网格完全相同，这样一来就很容易产生Z-fighting(深度冲突)，这种冲突可以手动给网格做缩小偏移，或者直接给在材质属性polygon offset(多边形偏移)，偏移量的值有物体表面相对于观察者视线角度决定

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/combinded_material.html)

#### 线条材质

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/line_material.png)

功能点：
1. 构建线图顶点集
2. 设置不同顶点的颜色

要点：
1. 使用线条材质的重要一点是：如何构建自己整体线条的顶点分布，一般来说线条特性是可以通过配置材质属性实现
2. demo中的例子在给几何体对象赋予颜色数据时，可以控制颜色的色调，饱和度，亮度(HSL)，来让色彩更加合适

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/line_material.html)

#### 自定义(shader)材质

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/shader_material.png)

功能点：
1. 给立方体的不同面设置不同的shader材质

要点：
1. 注意shader代码的的存储形式，存储方式多样，可自行选择。
2. 关于uniform数据的设置要注意新版API与旧版的区别，具体在新版API中有较好的指引说明

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter04/shader_material.html)

#### 基础几何体

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_geometry.png)

功能点：
1. 2D几何体：平面、圆形、自定义线框、圆环
2. 3D几何体：立方体、球体、圆柱体、圆环体、扭结体、多面体

要点：
1. 这里要注意，新版API中的BufferGeometry几何对象与普通差别在于将各种顶点，颜色，法线，索引，纹理坐标，attribute属性等一次提交至GPU, 降低了CPU端数据传递成本。
2. 提供的几何体比较多，不必要每个都去记忆它们都有哪些参数或是特性，而且API变动较快，可以直接调整参考Demo中的参数来看实际效果，结合API进行设计即可（参数说明已经写在注释当中）。

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/basic_geometry.html)

#### 高级几何体

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/advanced_geometry.png)

功能点：
1. 凸面体（根据点集形成凸包）
2. 车床体、曲轴体（根据曲线点集包围）
3. 延展体（构建好二维对象将其拉伸至三维）
4. 延展管道（按点集中点的顺序来绘制管道）
5. SVG地址延展体（构建好二维对象将其拉伸至三维）
6. 自定义几何体（根据数学公式来生成）
7. 立体字

要点：
1. 创建曲轴体时，要注意控制样条曲线是以哪个轴为基准的（任意轴），控制的高度和振幅也是绘制合适曲线的重要条件
2. 创建自定义框自由度很高，但是要注意绘制顺序，下面举例绘制一个脸型的过程：
```javascript
/**
 * 绘制自定义框型几何
 * @return {[type]} [description]
 */
function drawShape(){
  var shape = new THREE.Shape();
  // 设置初始绘制位置
  shape.moveTo(10, 10);
  // 设置下一个点的位置并连接起点
  shape.lineTo(10, 40);
  // 紧接着绘制一条贝塞尔曲线(分三个点，两个定端点和终点，具体参考实际绘制方式)
  shape.bezierCurveTo(15,25, 25,25, 30,40);
  // 接下来根据提供的点集绘制一条光滑的曲线, 参数数组类型为vec2
  shape.splineThru([new THREE.Vector2( 32, 30 ), new THREE.Vector2( 28, 20 ), new THREE.Vector2( 30, 10 )]);
  // 最后用二次曲线封闭这个图形(起始点，定端点，具体参考实际绘制方式)
  shape.quadraticCurveTo(20,15, 10,10);
  // 另外给这个图形添加内部轨迹, 图案中的其中一只眼睛
  var hole1 = new THREE.Path();
  // 设置椭圆（椭圆中心，x、y轴的半径，开始、结束角度，是否顺时针(默认false,即逆时针）
  hole1.absellipse(16,24, 2,3, 0,2*Math.PI, true);
  // 将轨迹设置为之前的线框的内部线框
  shape.holes.push(hole1);
  // 创建另一只眼睛
  var hole2 = new THREE.Path();
  hole2.absellipse(23,24, 2,3, 0,2*Math.PI, true);
  shape.holes.push(hole2);
  // 创建嘴
  var hole3 = new THREE.Path();
  // 设置圆弧（圆弧中心，半径，开始、结束角度，是否顺时针默认false）
  hole3.absarc(20,16, 2, 0,Math.PI, true);
  shape.holes.push(hole3);
  return shape;
}
```

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/advanced_geometry.html)

#### 操作合并网格

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/operate_combine_mesh.png)

功能点：
1. 使用多种基础网格进行合并成各种有趣的网格对象。(因为可以直接导出对象，可以存储成对象直接使用)
2. subtract：几何体交叠
3. intersect：几何体的交集
4. union：几何体联合

要点：
1. 执行网格组合，有一个重要步骤是：这三个函数在计算时使用的是网格的绝对位置，应用网格组合时应确保：当前各个网格是没有经过多种材质组合的。这样才能确保组合出来的结果是正确的
2. union方法并不好用，因为Threejs本身就有提供这个功能，THREE.GeometryUtils.merge,且性能更好

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter05/operate_combine_mesh.html)

#### 基础粒子

截图：
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/basic_particle.png)

功能点：
1. 点云
2. 多重点云
2. 点精灵
3. 根据几何对象绘制点云

要点：
1. 使用画布创建自定义纹理中，这里有canvas的渐变对象使用：
```javascript
/**
 * 使用画布生成自定义纹理对象
 * @return {[type]} [description]
 */
function generateCustomTexture(){
  // 创建画布
  var canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  // 获取上下文
  var context = canvas.getContext('2d');
  // 获取渐变处理对象
  // 参数：
  // x0	渐变的开始圆的 x 坐标
  // y0	渐变的开始圆的 y 坐标
  // r0	开始圆的半径
  // x1	渐变的结束圆的 x 坐标
  // y1	渐变的结束圆的 y 坐标
  // r1	结束圆的半径
  var gradient = context.createRadialGradient(
    canvas.width / 2, 
    canvas.height / 2, 
    0, 
    canvas.width / 2, 
    canvas.height / 2, 
    canvas.width / 2
  );
  // 参数：
  // stop 介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
  // color 在结束位置显示的 CSS 颜色值
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
  gradient.addColorStop(1, 'rgba(0,0,0,1)');
  // 设置填充绘画的模式 context.fillStyle=color|gradient|pattern;
  context.fillStyle = gradient;
  // 绘制已填充绘画的矩形，x,y(矩形左上角)  width,height
  context.fillRect(0, 0, canvas.width, canvas.height);
  // 创建纹理对象
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}
```
2. 创建点精灵/多个点云系统时，要注意一些处理上的细节问题：
```javascript
/**
 * 创建精灵
 * @return {[type]} [description]
 */
function createSprite(options, spriteNum){
  // 补充配置
  options.map = getTexture(); //填充纹理，这里每次都要重新获取纹理对象
  // 创建精灵材质
  var material = new THREE.SpriteMaterial(options);
  // 纹理对象中提供的是精灵图，根据spriteNum来选取正确的显示位置
  material.map.offset = new THREE.Vector2(0.2 * spriteNum, 0); // offset决定纹理在x、y轴上的偏移量
  // 仅设置偏移是不够的，图片会因默认填充方式而压缩在一起
  material.map.repeat = new THREE.Vector2(1/5, 1); // 纹理填充方式，即放大x轴纹理，让其只显示1/5
  material.depthTest = false; // 不受深度测试的影响
  material.blending = THREE.AdditiveBlending; // 启用混合

  var sprite = new THREE.Sprite( material );
  sprite.scale.set(spriteGroupContr.size, spriteGroupContr.size, spriteGroupContr.size);
  sprite.position.set(
    Math.random() * spriteGroupContr.range - spriteGroupContr.range / 2,
    Math.random() * spriteGroupContr.range - spriteGroupContr.range / 2,
    Math.random() * spriteGroupContr.range - spriteGroupContr.range / 2
  );
  return sprite;
}

/**
 * 创建多个点云系统
 * @param  {[type]} options [description]
 * @param  {[type]} name    [description]
 * @param  {[type]} texture [description]
 * @return {[type]}         [description]
 */
function createMultiPointCloud(options, name, texture){
  var geometry = new THREE.Geometry();
  var color = new THREE.Color(0xFF0000);
  // 尝试广域的颜色
  color.setHSL(Math.random() * color.getHSL().h, Math.random() * color.getHSL().s, Math.random() * color.getHSL().l);
  // 补充新的材质配置
  options.map = texture; // 填充纹理
  options.blending = THREE.AdditiveBlending; // 配置融合模式
  options.depthWrite = false; // 点云是否影响深度缓冲，这样就可以防止点云中的点对象相互干预
  // 创建材质
  var material = new THREE.PointCloudMaterial(options);
  for (var i = 0; i < 1500; i++) {
    var point = new THREE.Vector3(
        Math.random() * multiPointCloudContr.range - multiPointCloudContr.range / 2,
        Math.random() * multiPointCloudContr.range - multiPointCloudContr.range / 2,
        Math.random() * multiPointCloudContr.range - multiPointCloudContr.range / 2,
      );
    // 设置各个方向运动点的运动速率
    point.velocityY = 0.1 + Math.random() / 5;
    point.velocityX = (Math.random() - 0.5) / 3;
    point.velocityZ = (Math.random() - 0.5) / 3;
    geometry.vertices.push(point);
  }
  // 创建点云系统
  var pointSys = new THREE.PointCloud( geometry, material );
  pointSys.name = name; // 设置名字
  pointSys.sortParticles = true; // 重新排序点对象可以较好地防止对象叠加的深度冲突问题
  return pointSys;
}
```

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
![screenshot](http://ovwfvn3zo.bkt.clouddn.com/threejs_screenshot/environment_map.png)

功能点：

要点：

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter09/environment_map.html)

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

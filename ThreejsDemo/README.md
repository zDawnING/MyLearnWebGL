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

<b>网格对象的创建</b>

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

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/ThreejsDemo/chapter01/basic_scene.html)











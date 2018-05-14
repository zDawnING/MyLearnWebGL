## Welcome to My WebGL Learning

> 本文档主要用于`自我知识点检测`和`查阅`的，非教学向，亦可当做是《WebGL Programming Guide》的读书笔记, 并且由于篇幅有限，内容根据我自身情况进行概括总结。

> 由于本人是WebGL初学者，项目中的章节例子基本上的都参照[WebGL Programming Guide](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920?tag=realtimerenderin&pldnSite=1) 上面的例子进行模仿练习的，主体框架代码则是本人自己组织。如果有侵权问题，请提交Issue提醒我删除或更改。（If there is any infringement, please submit it to issue. I will delete or change it.）

> 如果有图形学学者想了解WebGL, 强烈推荐看WebGL Programming Guide一书；如果是前端开发者，建议先了解图形学的相关基本知识，再看这边书会有更深一层的认识。本人在看这边书之前有学过过OpenGL，因此该书可以带领我快速入门WebGL, 毕竟万变不离其宗。但是如果是想深入了解WebGL, 个人并不推荐，该书的内容深度不够，
推荐看[Professional WebGL Programming](https://www.amazon.com/Professional-WebGL-Programming-Developing-Graphics/dp/1119968860)

> 本人阅读的是英文版，因此会摘录书中的一些图文内容用于参考，其内容不会做详细翻译解释。若文档中有哪些错误，欢迎大家提交Issue指正。

### WebGL开发的基本流程

* 获取DOM中的canvas元素，向该元素获取WebGL绘图上下文(开发时可开启调试模式)

* 如有应用shader，则需要加载vertexShader和fragmentShader(本项目的示例中采用加载文件中的字符串的形式)

> 虽然有效分离了代码，但是留下了需要加载文件的弊端（页面加载时间长），经过Threejs框架的参考，可仿照该框架放置shader的方式，【待引用】


shader初始化流程（基本上与OpenGL一致）：
    
```javascript
  // 根据shader类型创建shader对象
  var shader = gl.createShader(type);
  //...
  // 将源码设置至shader对象中
  gl.shaderSource(shader, source);
  //...
  // 让显卡对shader进行编译
  gl.compileShader(shader);
  // 可以监听shader的编译结果，shader的编写很容易出错，必须要有这一步才方便查错
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log('Failed to compile shader: ' + error);
    gl.deleteShader(shader); // 没有编译完成则删除内存中的shader对象
  }
  //...
  // 创建程序对象
  var program = gl.createProgram();
  // 将编译好的vs对象和fs对象绑定至程序上
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  // 链接程序
  gl.linkProgram(program);
  // 同样也要监听链接结果
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log('Failed to link program: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
  }
  // 最后则直接使用当前程序
  gl.useProgram(program);
  gl.program = program; // 这里是方便外部调用
```
  
接下来是获取程序当中的变量(如attribute，uniform),其变量会对应上显卡中核中的插槽，插槽的排列是从0开始的，opengl会把变量与插槽对应上
例如：attribute会与对应该种变量的0号插槽，uniform就会对应uniform变量中的0~2号插槽，因此要设置这些变量即是告诉GPU哪个插槽放哪个数据。

示例:

```javascript
  // attribute
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
  // uniform
  var u_MVPMatrix = gl.getUniformLocation(gl.program, 'u_MVPMatrix');
  var mvpMatrix = new Matrix4();
  gl.uniformMatrix4fv(u_MVPMatrix, false, mvpMatrix.elements);
```
  
* 设置canvas背景色 `gl.clearColor(r, g, b, a)`, 方法继承自OpenGL

* 清除canvas `gl.clear(buffer)`, 实质清空各种缓冲区, 方法继承自OpenGL, 顶替多种的基本缓冲区; 若没有指定背景色，则参考：
![gl.clear() func](/docs/img/QQ20180514-102405@2x.png)

* 绘制操作 `gl.drawArray(mode, first, count)`, 该方法非常强大，可根据不同的模式和顶点数来指定绘制各种各样的图形

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/chapter02/point.html)

### WebGL的坐标系统

与OpenGL相同，使用的都是笛卡尔坐标系，默认情况下都是使用右手坐标系
我们屏幕前的webgl绘图区的可见的所有顶点都称作标准化设备坐标(NDC)，顶点范围在（-1, 1）的区间内，其外的范围都为不可见
当NDC坐标传入光栅器中时，则转变成屏幕上的二维坐标所对应的像素

这里顺便理清重要的5个坐标系统，是图形开发中基础的重要知识点。
* 物体坐标系（local coordinate）
* 世界坐标系 (world coordinate)
* 观察坐标系 (view coordinate)
* 裁剪坐标系（clip coordinate）
* 屏幕坐标系（screen coordinate）

他们之间是通过变换矩阵进行转换的，其流程是：

1. 物体坐标系是物体局部的坐标系，例如一个人的模型，它的衣服是相对于人这个模型来定位的，一般来说，当我们把模型导入到webgl中，物体都会被挤在原点处，因此我们需要将物体们分别放在世界坐标系中的合适位置，此时可以用`模型矩阵(ModelMatrix)`把物体转换至世界坐标系，模型矩阵是通过一系列的位移，旋转或缩放来确定物体在世界坐标系的摆放状态。

2. 观察坐标系是指从相机当中所观察到的空间，这通常是由一系列的位移和旋转的组合的`观察矩阵(viewMatrix)`矩阵对场景平移/旋转，从而使得特定的对象被变换到相机的前方。

3. 裁剪坐标系是指当我们定义好一个裁剪空间后，在这个空间范围外的顶点都应该被裁剪掉，因此需要一个`投影矩阵(ProjectionMatrix)`把当前的观察空间转换至裁剪空间。构造出来的空间有两种类型，一种是正投影，一种是透视投影，而所对应的矩阵则定义了这些空间的范围，在这些范围外的都会被裁剪。将特定范围内的坐标转化到标准化设备坐标系的过程，称之为投影。当所有顶点变换到裁剪空间后，最终的执行透视除法(Perspective Division)，即将位置向量的x,y,z分别除以齐次分量w,是4D裁剪空间坐标变换为3D标准化设备坐标的过程，会在每一个顶点着色器运行的最后被自动执行。

> 如果某个三角形只是超出了一部分的话，webgl会重新构造这个三角形，使用三角分解的方式构造出多个三角形与裁剪空间的边缘匹配。

4. 通过设定视口，将最后的坐标映射至屏幕对应坐标的像素，即转换至屏幕坐标系。

完整的坐标转换流程图：
![coordinate systems](/docs/img/coordinate_systems.png)

把上面的坐标转换组合在一起，则形成了图形学里面经常提到的MVP矩阵

`gl_Position = ProjectionMatrix * ViewMatrix * ModelMatrix * a_Position; (顶点着色器中)`

> 运算顺序是从右往左的，顶点着色器在最后会自动进行透视除法和裁剪。

这里顺便介绍一下比较有用的坐标转换 

<b>页面canvas的坐标与webgl坐标的转换</b>，下面是一个在canvas中相应鼠标点击然后在webgl坐标系统上绘制相应的点的例子

示例代码：
```javascript
canvas.onmousedown = function(e){
    mouseClick(e, gl, a_Position, u_Color);
}

var g_points = []; // 鼠标点击位置数组
var g_colors = []; // 点颜色数组
function mouseClick(e, gl, a_Position, u_Color){
    var x = e.clientX;
    var y = e.clientY;
    // 获取当前选中元素的位置数据集合
    var rect = e.target.getBoundingClientRect();
    
    // 求出x、y在webgl坐标系统中的坐标
    x = ((x - rect.left) - canvas.width/2) / (canvas.width/2);
    y = (canvas.height/2 - (y - rect.top)) / (canvas.height/2);
    
    // 由此可得数组中一个点的坐标步距为2
    // 创建为2维数组，提供可读性
    g_points.push([x, y]);
    g_colors.push([Math.abs(x), Math.abs(y), 0.0, 1.0]);

    gl.clear(gl.COLOR_BUFFER_BIT); // 如果不清空canvas，颜色缓冲区则会重置颜色值为(0.0,0.0,0.0,0.0),即透明

    var len = g_points.length;
    for (var i = 0; i < len; i++) {
        // gl.vertexAttrib3f(a_Position, g_points[i], g_points[i+1], 0.0);
        var xy = g_points[i]; 
        gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
        var rgba = g_colors[i];
        gl.uniform4f(u_Color, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
}

```
完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/chapter02/click_point_c.html)

### 使用WebGL中的缓冲区对象

WebGL跟OpenGL一样，在整个工作流程中大部分工作就是大量的3d坐标转换成屏幕上显示的2d像素，
3d坐标转2d坐标这个过程称为`图形渲染管线（Graphics Pipeline）`，实质是将一堆原始图形数据途径管线，然后经过各种各样的处理最后展示至屏幕。
图形管线主要分为两部分工作：1.将3d坐标转换2d坐标；2.把2d坐标转换成实际有颜色的像素

> 2D坐标和像素也是不同的，2D坐标精确表示一个点在2D空间中的位置，而2D像素是这个点的近似值，2D像素受到你的屏幕/窗口分辨率的限制。

而缓冲区对象则是WebGL系统中的的一块存储区，可以在缓冲区对象中保存想要绘制的所有顶点数据，它会在显存中储存大量顶点。使用这些缓冲对象的好处是我们可以一次性的发送一大批数据到显卡上，而不是每个顶点发送一次。从CPU把数据发送到显卡相对较慢，所以只要可能我们都要尝试尽量一次性发送尽可能多的数据。当数据发送至显卡的内存中后，顶点着色器几乎能立即访问顶点，这是个非常快的过程。

使用缓冲区对象给顶点着色器传入顶点数据，一般遵循以下步骤（与纹理对象，帧缓冲对象类似）：
* 创建缓冲区对象 - gl.createBuffer()
* 绑定缓冲区对象 - gl.bindBuffer()
* 将顶点数据传入缓冲区对象 - gl.bufferData()
* 分配attribute变量给缓冲区对象 - gl.vertexAttribPointer()
* 启用attribute变量 - gl.enableVertexAttribArray()

过程图：
![buffers send to vs](/docs/img/QQ20180514-164711@2x.png)

为了优化webgl同时处理大量同类型数据（如顶点和颜色数据）的性能，则引入了一种特殊数组`类型化数组（Typed Array）`, 因为这种数组的类型是预先已知的，因此可以进行高效处理。与普通js数组不同，不支持push和pop方法，并不能使用`[]`, 创建新的N个元素的空数组`new Float32Array(N)`,使用前请参考下图。
![typed array](/docs/img/QQ20180514-171224@2x.png)
![typed array func](/docs/img/QQ20180514-171315@2x.png)

上面步骤中的每个方法的细则这里就不一一叙述，具体请参考原书。
这里直接放一张顶点着色器执行过程中的缓冲区数据是如何传输的
![buffer pass vs](/docs/img/QQ20180514-172628@2x.png)

完整的参考Demo: [example](https://zdawning.github.io/MyLearnWebGL/chapter03/quad.html)

当存在多种种类的顶点数据时，可以采取为每种数据都建立一个缓冲区，因此则是多个缓冲区对象向着色器传递多种数据，这样从代码上来看比较易于理解，但是这种只能适合数据量不大的情况。当程序中需要载入上万个甚至更多个顶点时，这种做法就会导致顶点数据维护困难，则更加消耗CPU向显卡传递数据的性能和时间。因此与OpenGL一样，WebGL同样允许将多种数据打包在同一个对象中，使用`交错组织(interleaving)`数据来存储，然后步进和偏移参数来调整获取不同种类的数据。

> 这里的步进和偏移都要注意数组元素中每个元素的字节数问题，因为参数都是以字节为单位的。获取数据元素的字节数:`var FSIZE = verticesSize.BYTES_PER_ELEMENT`

### 几何形状的装配和光栅化

在顶点着色器和片元着色器之间，有两个进程：
1.图形装配；将顶点坐标装配成几何图形，又称图元(primitives)，图形类别由gl.drawArray的参数mode决定
2.光栅化；将装配好的几何图形转换成片元块

大概流程是：当顶点着色器获取到缓冲区中的坐标时，坐标数据经过处理后赋值给gl_Position, 此时已放入图形装配区；接下来继续执行顶点着色器，直至将所有的顶点数据传完，则开始根据mode参数类型来装配图形，然后通过光栅化把图形转变成图元，即可得到想要的像素块。

> 这个过程中如果有多余的顶点出现，则会在装配过程中舍弃

光栅化结束后，程序则开始逐片元调用片元着色器，每调用一次则处理一个片元，直至最后一个片元被处理。

> 片元着色其中有一个坐标变量：gl_FragCoord, 这个变量的1、2分量表示片元在窗口坐标系统中的坐标值，在编写shader的时候可以适当应用。

在顶点着色器和片元着色器之间，还有特别注意一种变量：varying
虽然说是varying变量是用于将顶点着色器的数据传递给片元着色器的，但这并不是简单的传递，而是经过内插过程(interpolation process), 一般采用的都是线性插值，其基本问题是内插值不可能大于较大的顶点值，编写复杂shader的时候这里要注意。

### 纹理映射

将图片贴到几何体表面的图片则称之为纹理图像或纹理(texture)，根据纹理图像，为之前光栅化好的每个片元添加上对应的图像颜色则称为纹素(texel)

使用纹理映射的主要步骤有：
* 准备好图像以映射至几何图形
* 为几何图形指定映射方式
* 加载纹理图像，加以配置方便在webgl中使用
* 在片元着色器中提取纹理中的纹素，对应设置给片元

> 上面所说的映射方式则是使用纹理坐标，在webgl系统中纹理坐标是二维的，为了区分x,y坐标，webgl使用s,t坐标(st坐标系统),如下图; 另外这个坐标系统还有另外一个名称：uv坐标。针对GLSL中的语法，st分量可以访问纹理，这里使用st更加合适。
![texture coordinate](/docs/img/QQ20180514-220749@2x.png)

给几何体添加纹理的流程如下：
* 缓冲区数据上设置好纹理坐标
* 创建纹理对象 - gl.createTexture()
* 获取片元着色器中的取样器插槽
* 纹理图片加载完成后，开始配置纹理，一般的将纹理图像进行y轴反转
* 激活纹理单元(先从0号开始，webgl至少支持8个纹理单元)
* 绑定纹理对象
* 配置纹理参数
* 配置纹理图像
* 将纹理单元传递给片元着色器


> 取样器的作用实质是输入纹理坐标，返回纹理颜色。但是由于纹理像素是有大小的，取样器的纹理坐标很可能并不落在某个像素中心，则取样通常不是直接取纹理图像中的某个像素颜色，而是通过附近的若干个像素计算而得。

> 需要对纹理图像进行反转，原因是webgl中的纹理坐标的t轴方向与png,bmp,jpg等格式的图片坐标系统y轴方向是相反的，另外一种方法也可以在着色器中手动反转t轴坐标，但这样维护性较差，有时出错时很难判别是手误或是其他原因。

示例代码：
```javascript
// 创建纹理对象
var texture = gl.createTexture();
//...
// 获取片元着色器中的取样器插槽
var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
//...
var image = new Image();
image.onload = function(){
    loadTexture(gl, n, texture, u_Sampler, image);
}
image.src = "xxx.jpg";

function loadTexture(gl, n, texture, u_Sampler, image){
    // y轴翻转图片
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    // 激活0号纹理
    gl.activeTexture(gl.TEXTURE0);
    // 绑定成2D纹理
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // 设置纹理参数
    gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    // 测试其他的纹理填充模式
    // 垂直方向镜像重复填充
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
    // // 水平方向去取边缘值作为填充值
    // 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);

    // 设置纹理图像参数
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

    // 将纹理单元设置到采样器对象
    gl.uniform1i(u_Sampler, 0);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
}

```



















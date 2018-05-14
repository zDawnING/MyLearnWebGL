## Welcome to My WebGL Learning

> 本文档主要用于`自我知识点检测`和`查阅`的，非教学向，并且由于篇幅有限，内容根据我自身情况进行概括总结。

> 由于本人是WebGL初学者，项目中的章节例子基本上的都参照[WebGL Programming Guide](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920?tag=realtimerenderin&pldnSite=1) 上面的例子进行模仿练习的，主体框架代码则是本人自己组织。如果有侵权问题，请提交Issue提醒我删除或更改。（If there is any infringement, please submit it to issue. I will delete or change it.）

> 如果有图形学学者想了解WebGL, 强烈推荐看WebGL Programming Guide一书；如果是前端开发者，建议先了解图形学的相关基本知识，再看这边书会有更深一层的认识。本人在看这边书之前有学过过OpenGL，因此该书可以带领我快速入门WebGL, 毕竟万变不离其宗。但是如果是想深入了解WebGL, 个人并不推荐，该书的内容深度不够，
推荐看[Professional WebGL Programming](https://www.amazon.com/Professional-WebGL-Programming-Developing-Graphics/dp/1119968860)

> 本人阅读的是英文版，因此会摘录书中的一些图文内容用于参考，有引用的地方都会加以标注，另其内容不会做详细翻译解释。若文档中有哪些错误，欢迎大家提交Issue指正。

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


  
















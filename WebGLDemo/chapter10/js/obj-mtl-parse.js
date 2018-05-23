/**
 * 定义obj对象
 * @param {[type]} name [obj名字]
 */
var Object = function(name) {
  this.name = name;
  this.faces = new Array(0);
  this.numIndices = 0;
}

/**
 * 添加obj的面相关数据
 * @param {[type]} face [description]
 */
Object.prototype.addFace = function(face) {
  this.faces.push(face);
  this.numIndices += face.numIndices;
}

/**
 * 定义一些必要对象
 */
//------------------------------------------------------------------------------
// 材质
//------------------------------------------------------------------------------
var Material = function(name, r, g, b, a) {
  this.name = name;
  this.color = new Color(r, g, b, a);
}

//------------------------------------------------------------------------------
// 顶点
//------------------------------------------------------------------------------
var Vertex = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

//------------------------------------------------------------------------------
// 法线
//------------------------------------------------------------------------------
var Normal = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

//------------------------------------------------------------------------------
// 颜色
//------------------------------------------------------------------------------
var Color = function(r, g, b, a) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}

//------------------------------------------------------------------------------
// 面
//------------------------------------------------------------------------------
var Face = function(materialName) {
  this.materialName = materialName;
  if(materialName == null)  this.materialName = "";
  this.vIndices = new Array(0);
  this.nIndices = new Array(0);
}

//------------------------------------------------------------------------------
// 绘制数据对象
//------------------------------------------------------------------------------
var DrawingInfo = function(vertices, normals, colors, indices) {
  this.vertices = vertices;
  this.normals = normals;
  this.colors = colors;
  this.indices = indices;
}

//------------------------------------------------------------------------------
// 模型文件解析处理
//------------------------------------------------------------------------------

/**
 * 定义obj文件解析API对象
 * @param  {[String]} fileName [文件名]
 * @return {[type]}          [description]
 */
var ObjDoc = function(fileName){
	this.fileName = fileName;
	this.mtls = new Array(0); // 材质MTL列表
	this.objects = new Array(0); // 对象Object列表
	this.vertices = new Array(0); // 顶点Vertex列表
	this.normals = new Array(0); // 法线Normal列表
}

/**
 * 解析obj中的文本信息
 * @param  {[type]} fileString    [obj中的文本数据]
 * @param  {[type]} scale         [缩放]
 * @param  {[type]} reverseNormal [description]
 * @return {[type]}               [description]
 */
ObjDoc.prototype.parse = function(fileString, scale, reverse){
	var lines = fileString.split('\n'); // 拆成逐行的
	lines.push(null); // 添加末尾行以作标识
	var index = 0; // 初始化当前索引

	var currentObject = null;
	var currentMaterialName = "";

	// 逐行解析
	var line; // 接收当前行文本
	var sp = new StringParse(); // 创建自定义的字符串解析对象
	while ((line = lines[index++]) != null){ // 如果下一行不为null, 则继续
		sp.init(line); // 初始化sp
		var command = sp.getWord(); // 获取指令名（某行的第一个单词）,即数据类型
		if(command == null) continue;

		switch(command){
			case '#':
				continue; // 跳过注释
			case 'mtllib': // 读取材质块
				var path = this.parseMtllib(sp, this.fileName);
				var mtl = new MtlDoc();
				this.mtls.push(mtl);
				// 请求获取mtl文件
				var request = new XMLHttpRequest();
				var that = this;
				request.onreadystatechange = function() {
	        if (request.readyState == 4) {
	          if (request.status != 404) {
	            that.onReadMtlFile(request.responseText, mtl);
	          }else{
	            mtl.complete = true;
	          }
	        }
	      }
	      request.open('GET', path, true);
	      request.send();
			case 'o':
			case 'g': // 读取对象名称
				var object = this.parseObjectName(sp);
				this.objects.push(object);
				currentObject = object;
				continue; // 继续下一行
			case 'v': // 读取顶点
				var vertex = this.parseVertex(sp, scale);
				this.vertices.push(vertex);
				continue;
			case 'vn': // 读取法线
				var normal = this.parseNormal(sp);
				this.normals.push(normal);
				continue;
			case 'usemtl': // 读取材质名
				currentMaterialName = this.parseUseMtl(sp);
				continue;
			case 'f':
				var face = this.parseFace(sp, currentMaterialName, this.vertices, reverse)
				currentObject.addFace(face);
				continue;		
		}
	}

	return true;
}

/**
 * 解析MTL材质文件
 * @param  {[type]} sp       [description]
 * @param  {[type]} fileName [description]
 * @return {[type]}          [description]
 */
ObjDoc.prototype.parseMtllib = function(sp, fileName){
	// 获取文件夹地址
	var index = fileName.lastIndexOf('/'); // 末端位置搜索索引
	var dirPath = "";
	if(index > 0) dirPath = fileName.substr(0, index+1);
	return dirPath + sp.getWord();
}

/**
 * 解析obj名称
 * @param  {[type]} sp       [description]
 * @return {[type]} [description]
 */
ObjDoc.prototype.parseObjectName = function(sp){
	var name = sp.getWord();
	return (new Object(name));
}

/**
 * 解析顶点
 * @param  {[type]} sp    [description]
 * @param  {[type]} scale [description]
 * @return {[type]}       [description]
 */
ObjDoc.prototype.parseVertex = function(sp, scale){
	var x = sp.getFloat() * scale;
	var y = sp.getFloat() * scale;
	var z = sp.getFloat() * scale;
	return (new Vertex(x, y, z));
}

/**
 * 解析法向量
 * @param  {[type]} sp [description]
 * @return {[type]}    [description]
 */
ObjDoc.prototype.parseNormal = function(sp){
	var x = sp.getFloat();
	var y = sp.getFloat();
	var z = sp.getFloat();
	return (new Normal(x, y, z));
}

/**
 * 解析使用的mtl名
 * @param  {[type]} sp [description]
 * @return {[type]}    [description]
 */
ObjDoc.prototype.parseUseMtl = function(sp){
	return sp.getWord();
}

/**
 * 解析obj中面的数据，f数据格式一般为 v/t/n
 * @param  {[type]} sp           [description]
 * @param  {[type]} materialName [description]
 * @param  {[type]} vertices     [description]
 * @param  {[type]} reverse      [description]
 * @return {[type]}              [description]
 */
ObjDoc.prototype.parseFace = function(sp, materialName, vertices, reverse){
	// 定义face对象并设置材质名
	var face = new Face(materialName);
	// 循环获取各个数据类型索引号
	for(;;){
		var word = sp.getWord();
		if(word == null) break;
		// f类型数据中以/分隔类型数据
		var subWords = word.split('/');
		// 第一项为v顶点索引
		if(subWords.length >= 1){
			var vi = parseInt(subWords[0]) - 1;
			face.vIndices.push(vi);
		}
		// 大于3则存在v/t/n,这里获取n法线索引,如果小于3则没有法线数据
		if(subWords.length >= 3){
			var ni = parseInt(subWords[2]) - 1;
			face.nIndices.push(ni);
		}else{
			face.nIndices.push(-1);
		}
	}
	// 计算法向量
	// 获取面的顶点数据
	var v0 = [
		vertices[face.vIndices[0]].x,
		vertices[face.vIndices[0]].y,
		vertices[face.vIndices[0]].z
	];
	var v1 = [
		vertices[face.vIndices[1]].x,
		vertices[face.vIndices[1]].y,
		vertices[face.vIndices[1]].z
	];
	var v2 = [
		vertices[face.vIndices[2]].x,
		vertices[face.vIndices[2]].y,
		vertices[face.vIndices[2]].z
	];
	var normal = calcNormal(v0, v1, v2);
	// 如果法向量没有正确求取
	if(normal == null){
		// 如果面是四边形的话，则用后3的顶点求出即可
		if(face.vIndices.length >= 4){
			var v3 = [
        vertices[face.vIndices[3]].x,
        vertices[face.vIndices[3]].y,
        vertices[face.vIndices[3]].z
      ];
    	normal = calcNormal(v1, v2, v3);
		}
		// 如果是法线还是无法求出，则直接指向Y轴正方向
		if(normal == null){
			normal = [0.0, 1.0, 0.0];
		}
	}
	// 如果是要反向
	if(reverse){
		normal[0] = -normal[0];
		normal[1] = -normal[1];
		normal[2] = -normal[2];
	}
	face.normal = new Normal(normal[0], normal[1], normal[2]);

	// 如果面的顶点数超过3个，则分割成多个三角形
	if(face.vIndices.length > 3){
		var n = face.vIndices.length - 2;
		var newVIndices = new Array(n * 3);
		var newNIndices = new Array(n * 3);
		for (var i = 0; i < n; i++) {
			newVIndices[i * 3 + 0] = face.vIndices[0];
      newVIndices[i * 3 + 1] = face.vIndices[i + 1];
      newVIndices[i * 3 + 2] = face.vIndices[i + 2];
      newNIndices[i * 3 + 0] = face.nIndices[0];
      newNIndices[i * 3 + 1] = face.nIndices[i + 1];
      newNIndices[i * 3 + 2] = face.nIndices[i + 2];
		}
		// 设置新的顶点索引和法向量索引
		face.vIndices = newVIndices;
  	face.nIndices = newNIndices;
	}
	// 设置索引数目
	face.numIndices = face.vIndices.length;
	
	return face;
}

/**
 * 解析读取MTL文件
 * @param  {[type]} fileString [文本对象]
 * @param  {[type]} mtl        [MtlDoc对象]
 * @return {[type]}            [description]
 */
ObjDoc.prototype.onReadMtlFile = function(fileString, mtl){
	var line = fileString.split("\n");
	line.push(null); //添加末尾行以作标识
	var index = 0;

	var line;
	var name = "";
	var sp = new StringParse();
	while((line = line[index++]) != null){
		sp.init(line);
		var command = sp.getWord();
		if(command == null) continue;
		switch(command){
			case '#':
				continue;
			case 'newmtl': // 读取材质块
				name = mtl.parseNewMtl(sp);
				continue;
			case 'Kd': // 读取法向量
				if(name == '') continue;
				var material = mtl.parseRGB(sp, name);
				mtl.materials.push(material);
				name =  "";
				continue;
		}
	}
	// 设置完成标识
	mtl.complete = true;
}

/**
 * 检查材质时间配置完成
 */
ObjDoc.prototype.isMtlComplete = function(){
	// 如果没有设置材质则直接完成
	if(this.mtls.length == 0) return true;
	for (var i = 0; i < this.mtls.length; i++) {
		// 如果存在一种材质没有配置完成则没有完成
		if (!this.mtls[i].complete) return false;
	}
	return true;
}

/**
 * 用材质名找到对应颜色
 * @param  {[type]} name [材质名]
 * @return {[type]}      [description]
 */
ObjDoc.prototype.findColor = function(name){
	for (var i = 0; i < this.mtls.length; i++) {
		for (var i = 0; i < this.mtls[i].materials.length; i++) {
			if(this.mtls[i].materials[j].name == name){
			  return(this.mtls[i].materials[j].color)
			}
		}
	}
	// 没有找到则固定输出一种颜色
	return(new Color(0.8, 0.8, 0.8, 1));
}

/**
 * 获取绘制信息, 构建绘制数据
 * @return {[type]} [description]
 */
ObjDoc.prototype.getDrawInfo = function(){
	// 获取索引数目
	var numIndices = 0;
	for (var i = 0; i < this.objects.length; i++) {
		numIndices += this.objects[i].numIndices;
	}
	// 获取顶点数目
	var numVertices = numIndices;
	// 创建顶点数据、法线、颜色、索引数组
	var vertices = new Float32Array(numVertices * 3);
	var normals = new Float32Array(numVertices * 3);
	var colors = new Float32Array(numVertices * 4);
	var indices = new Uint16Array(numIndices);

	// 填充数据
	var index = 0;
	for (var i = 0; i < this.objects.length; i++) {
		var object = this.objects[i];
		for (var j = 0; j < object.faces.length; j++) {
			var face = object.faces[j];
			var color = this.findColor(face.materialName);
			var faceNormal = face.normal;
			for (var k = 0; k < face.vIndices.length; k++) {
				// 设置索引
				indices[index] = index;
				// 拷贝顶点数据
				var vIdx = face.vIndices[k];
				var vertex = this.vertices[vIdx];
				vertices[index * 3 + 0] = vertex.x;
				vertices[index * 3 + 1] = vertex.y;
				vertices[index * 3 + 2] = vertex.z;
				// 拷贝颜色
				colors[index * 4 + 0] = color.r;
				colors[index * 4 + 1] = color.g;
				colors[index * 4 + 2] = color.b;
				colors[index * 4 + 3] = color.a;
				// 拷贝法向量
				var nIds = face.nIndices[k];
				if(nIds > 0){
					var normal = this.normals[nIds];
					normals[index * 3 + 0] = normal.x;
					normals[index * 3 + 1] = normal.y;
					normals[index * 3 + 2] = normal.z;	
				}else{
					normals[index * 3 + 0] = faceNormal.x;
          normals[index * 3 + 1] = faceNormal.y;
          normals[index * 3 + 2] = faceNormal.z;
				}
				index++;
			}
		}
	}

	return (new DrawingInfo(vertices, normals, colors, indices));
}

//------------------------------------------------------------------------------
// 材质文件解析处理
//------------------------------------------------------------------------------

/**
 * 定义MTL文件解析API对象
 */
var MtlDoc = function(){
	this.complete = false; // 标识Mtl配置是否加载完成
	this.materials = new Array(0);
}

/**
 * 获取mtl名称
 * @return {[type]} [description]
 */
MtlDoc.prototype.parseNewMtl = function(sp){
	return sp.getWord();
}

/**
 * 解析颜色值
 * @param  {[type]} sp [description]
 * @return {[type]}    [description]
 */
MtlDoc.prototype.parseRGB = function(sp){
	var r = sp.getFloat();
	var g = sp.getFloat();
	var b = sp.getFloat();
	return (new Material(name, r, g, b, 1));
}


//------------------------------------------------------------------------------
// 字符串解析处理
//------------------------------------------------------------------------------

/**
 * 字符串处理函数
 * @param {[type]} str [description]
 */
var StringParse = function(str){
	this.str; // 将参数字符串保存下来
	this.index; // 当前处理位置
	this.init(str);
}

/**
 * 初始化字符处理对象，开始解析str
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
StringParse.prototype.init = function(str){
	this.str = str;
	this.index = 0;
}

/**
 * 获取单词
 * @return {[type]} [description]
 */
StringParse.prototype.getWord = function(){
	this.skipDelimiters();
	var n = this.getWordLength(this.str, this.index);
	if(n == 0) return null;
	var word = this.str.substr(this.index, n);
	this.index += (n + 1);
	return word;
}

/**
 * 将获取的数据转换成int
 * @return {[type]} [description]
 */
StringParse.prototype.getInt = function(){
	return parseInt(this.getWord());
}

/**
 * 将获取的数据转换成float
 * @return {[type]} [description]
 */
StringParse.prototype.getFloat = function(){
	return parseFloat(this.getWord());
}

/**
 * 获取当前字符串中的第一个单词长度
 * @param  {[type]} str   [description]
 * @param  {[type]} start [description]
 * @return {[type]}       [description]
 */
StringParse.prototype.getWordLength = function(str, start){
	for (var i = start, len = str.length; i < len; i++) {
		var c = str.charAt(i);
		if(c == '\t' || c == ' ' || c == '(' || c == ')' || c == '"') break;
	}
	return i - start;
}

/**
 * 跳过分隔符，将当前index位置设置至str中下一个可用字符位置
 * @return {[type]} [description]
 */
StringParse.prototype.skipDelimiters = function(){
	for (var i = this.index, len = this.str.length; i < len; i++) {
		var c = this.str.charAt(i);
		// 跳过tab,空格，括号和双引号
		if(c == '\t' || c == ' ' || c == '(' || c == ')' || c == '"') continue;
		break;
	}
	this.index = i;
}

/**
 * 跳至下一个单词
 * @return {[type]} [description]
 */
StringParse.prototype.skipToNextWord = function(){
	this.skipDelimiters();
	var n = this.getWordLength(this.str, this.index);
	this.index += (n + 1);
}

//------------------------------------------------------------------------------
// Common function
//------------------------------------------------------------------------------

/**
 * 根据顶点数据计算法向量
 * @param  {[type]} p0 [description]
 * @param  {[type]} p1 [description]
 * @param  {[type]} p2 [description]
 * @return {[type]}    [description]
 */
function calcNormal(p0, p1, p2) {
  // v0: p1 -> p0, 
  // v1; p1 -> p2
  var v0 = new Float32Array(3);
  var v1 = new Float32Array(3);
  for (var i = 0; i < 3; i++){
    v0[i] = p0[i] - p1[i];
    v1[i] = p2[i] - p1[i];
  }

  // v0 与 v1 的叉乘计算
  var c = new Float32Array(3);
  c[0] = v0[1] * v1[2] - v0[2] * v1[1];
  c[1] = v0[2] * v1[0] - v0[0] * v1[2];
  c[2] = v0[0] * v1[1] - v0[1] * v1[0];

  // 单位化向量
  var v = new Vector3(c);
  v.normalize();
  return v.elements;
}
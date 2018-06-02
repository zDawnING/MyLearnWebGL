import preview from "preview/index";

require("./style/common/commom.css");
require("./style/common/layer.css");

new Promise(preview).then(function(renderer){
	// 把渲染内容输出至dom中
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
	document.body.appendChild( renderer.domElement );
});
import mmd from "mmd/index";
// import * as Toast from 'com_gl/utils/toast';

require("./style/common/commom.css");
require("./style/common/layer.css");

new Promise(mmd).then(function(renderer){
	// 把渲染内容输出至dom中
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
	document.body.appendChild( renderer.domElement );
})

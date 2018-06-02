import fpviewer from "fpviewer/index";

require("./style/common/commom.css");

new Promise(fpviewer).then(function(canvas){
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
	document.getElementById("app").appendChild(canvas);
});
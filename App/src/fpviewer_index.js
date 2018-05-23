import fpviewer from "fpviewer/index";

require("./style/common/commom.css");

new Promise(fpviewer).then(function(canvas){
	document.getElementById("app").appendChild(canvas);
});
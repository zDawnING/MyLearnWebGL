
function loadShader(gl, fileName, shaderType, source, callback){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState === 4 && request.status !== 404){
			source = request.responseText;
			callback();
		}else{
			if(shaderType == gl.VERTEX_SHADER) console.log('not find vs_shader file');
			if(shaderType == gl.FRAGMNET_SHADER) console.log('not find fs_shader file');
		}
	}
	request.open('GET', fileName, true);
	request.send();
}
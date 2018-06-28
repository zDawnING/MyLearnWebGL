
export const createVideoElement = () => {
	let videoElement = document.createElement('video')
	videoElement.setAttribute('id', 'video-output')
	videoElement.setAttribute('autoplay', '')
	videoElement.setAttribute('playsinline', '')
	videoElement.style.position = 'absolute'
	videoElement.style.top = 0
	videoElement.style.zIndex = -1000

	document.body.appendChild( videoElement );
}

export const createShotBtn = () => {
	let shotDiv = document.createElement('div')
	shotDiv.setAttribute('id', 'video_shot')
	shotDiv.style.position = 'fixed'
	shotDiv.style.bottom = '2%'
	shotDiv.style.left = '45%'
	shotDiv.style.width = 50 + 'px'
	shotDiv.style.height = 50 + 'px'
	shotDiv.style.borderRadius = 50 + 'px'
	shotDiv.style.background = '#FF0000'
	shotDiv.style.zIndex = 1000

	document.body.appendChild(shotDiv)
}

export const initWebRTC = (element, videoSource) => {
	element.width = window.innerWidth;
	element.height = window.innerHeight;
	let aspectRatio = window.innerWidth/window.innerHeight;
  let constraints = {
		width: window.screen.width * window.devicePixelRatio,
		height: window.screen.height * window.devicePixelRatio,
    video: {
    	deviceId: videoSource ? {exact: videoSource} : undefined, // 移动端要deviceId和facingMode同时存在
    	// facingMode: { exact: 'environment' }, // 这个参数在PC端会报错
    }
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(handleError);
}

const gotStream = (stream) => {
	let element = document.getElementById('video-output')
	element.srcObject = stream;
	element.onloadeddata = dealVideoEvent;
}

const dealVideoEvent = () => {
	// document.getElementById('video_shot').addEventListener('click', getScreenShot);
 	var video = document.getElementById('video-output')
 	if((video.videoWidth/video.videoHeight) > (window.innerWidth/window.innerHeight)){
		var aspectRatio = video.videoWidth/video.videoHeight
		// 重新计算video
		var newH = window.innerHeight;
		var newW = aspectRatio * newH;

		var offsetLeft = (newW -window.innerWidth) * 0.5
		video.style.marginLeft = -offsetLeft + 'px'
		video.style.height = newH + 'px'
		video.style.width = newW + 'px'
	}
}

const handleError = (error) => {
  console.log('navigator.getUserMedia error: ', error);
}
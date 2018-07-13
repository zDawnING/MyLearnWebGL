require('com_gl/utils/webrtc_adpter')

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

export const createShotBtn = (renderer) => {
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

	shotDiv.onclick = (ev) => {
		getScreenShot(ev, renderer)
	}
}

export const getScreenShot = (ev, renderer) => {
	let video = document.getElementById('video-output')
	if(video.videoWidth > 0 && video.videoHeight){
		let canvas = document.createElement('canvas')
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let canvasContext = canvas.getContext('2d')
		console.log(window.innerWidth, window.innerHeight)
		console.log(video.videoWidth, video.videoHeight)
		// console.log(video.style.marginLeft.split('px'))
		// 获取真实捕获到的视频流分辨率
		
		// 获取当前窗口宽高比
		let aspectRatio = window.innerWidth/window.innerHeight
		console.log(aspectRatio)
		// 获取视频图像中的偏移量
		let offsetLeft = (aspectRatio * video.videoHeight - video.videoWidth) / -2
		console.log(offsetLeft)
		// 绘制视频截取后的图像
		canvasContext.drawImage(video, offsetLeft, 0, video.videoWidth - 2 * offsetLeft, video.videoHeight, 0, 0, window.innerWidth, window.innerHeight);
		// console.log(document.querySelector('a-scene').components.screenshot)
		// let sceneCanvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
		console.log(renderer.domElement)
		// let image2 = new Image()
		// image2.src = renderer.domElement.toDataURL('image/jpeg', 1)
		// let threeCanvas = document.querySelector('canvas')
		// console.log(threeCanvas)
		canvasContext.drawImage(renderer.domElement, 0, 0, window.innerWidth, window.innerHeight);

		let image = new Image();
		image.src = canvas.toDataURL('image/jpeg', 1)
		console.log(canvas.toDataURL('image/jpeg'))
		let url = canvas.toDataURL('image/jpeg', 1)
		let name = 'test.png'
		// location.href = image.src
		let imageElement = document.createElement('img')
		imageElement.setAttribute('id', 'show_pic')
		imageElement.setAttribute('src', image.src)
		imageElement.style.position = 'fixed'
		imageElement.style.top = 0
		imageElement.style.left = 0
		imageElement.style.zIndex = 3000
		imageElement.style.width = window.innerWidth + 'px'
		imageElement.style.height = window.innerHeight + 'px'
		document.body.appendChild(imageElement)
		let closeBtn = document.createElement('button')
		closeBtn.innerHTML = '关闭'
		closeBtn.onclick = e => {
			let child = document.getElementById('show_pic')
			document.body.removeChild(child)
		}
		// const aLink = document.createElement('a')
		// aLink.download = name
		// aLink.href = url
		// aLink.dispatchEvent(ev)
	}
}

const downloadImg = (ev, url, name) => {

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
    	facingMode: { exact: 'environment' }, // 这个参数在PC端会报错
    }
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(handleError);
}

const gotStream = (stream) => {
	let element = document.getElementById('video-output')
	// const track = stream.getVideoTracks()[0];
 //  let imageCapture = new ImageCapture(track);
 //  imageCapture.getPhotoSettings().then(photoSettings => {
	//   console.log('capture image size:', photoSettings.imageWidth, photoSettings.imageHeight)
	//   element.setAttribute('data-image_width', photoSettings.imageWidth)
	//   element.setAttribute('data-image_height', photoSettings.imageHeight)
	// })
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
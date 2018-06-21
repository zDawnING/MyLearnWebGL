/**
 * 初始化webRTC组件
 */
const initWebRTC = (width, height, isBackCamera) => {

	let video = document.createElement('video')
	video.width = width
	video.height = height

	let readyToPlay = false;

	const eventNames = [
		'touchstart', 'touchend', 'touchmove', 'touchcancel',
		'click', 'mousedown', 'mouseup', 'mousemove',
		'keydown', 'keyup', 'keypress', 'scroll'
	];
	// 播放video
	const play = (ev) => {
		if (readyToPlay) {
			video.play();
			if (!video.paused) {
				eventNames.forEach((eventName) => {
					window.removeEventListener(eventName, play, true)
				});
			}
		}
	};
	// 将各个端的控制事件捕获并均触发播放video
	eventNames.forEach((eventName) => {
		window.addEventListener(eventName, play, true)
	})

	// 成功执行webRTC初始化
	const success = (stream) => {
		// 加载完成后执行
		video.addEventListener('loadedmetadata', initProgress, false)
		video.src = window.URL.createObjectURL(stream)
		readyToPlay = true
		play() // 主动播放，兼容有其他行为的浏览器
	}
	// 错误打印
	const error = (err) => {
		console.log('Not getUserMedia', err)
	}

	navigator.getUserMedia = 
		navigator.getUserMedia || 
		navigator.webkitGetUserMedia || 
		navigator.mozGetUserMedia || 
		navigator.msGetUserMedia

	let deviceIds = []; //存储设备源ID  
  MediaStreamTrack.getSources((sourceInfos) => {  
    for (let i = 0, len = sourceInfos.length; i < len ; i++) {  
      let sourceInfo = sourceInfos[i];  
      if (sourceInfo.kind === 'video') {  
        deviceIds.push(sourceInfo.id); 
      }  
    }  
  });  

	let videoConfig = {
		audio: false,
		optional: [{'sourceId': deviceIds[isBackCamera].id}]
	}

	if (navigator.getUserMedia) {
		navigator.getUserMedia(hdConstraints, success, error)
	} else {
		console.log('navigator.getUserMedia is not supported on your browser');
	}

	return video;
}
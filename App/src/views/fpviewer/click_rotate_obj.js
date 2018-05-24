/**
 * 适配pc与移动端的鼠标事件
 * @param  {[type]} element [description]
 * @param  {[type]} type    [description]
 * @param  {[type]} handler [description]
 * @return {[type]}         [description]
 */
const addHandler = (element, type, handler) => {  
  if (element.addEventListener){
    element.addEventListener(type, handler, true);
  } else if (element.attachEvent){  
    element.attachEvent("on" + type, handler);  
  } else {  
    element["on" + type] = handler;  
  }
}

/**
 * 初始化鼠标拖拽事件
 * @param  {[type]} canvas       [description]
 * @param  {[type]} currentAngle [description]
 * @return {[type]}              [description]
 */
const initEventHandlers = (canvas, currentAngle) => {
	// 默认不拖拽
	let dragging = false;
	// 初始化鼠标最终移动位置坐标
	let lastX = -1, lastY = -1;

	let down = 'ontouchstart' in canvas ? 'touchstart' : 'mousedown';
  addHandler(canvas,down,function(e){
    let ev = 'ontouchstart' in canvas ? e.touches[0] : e ;
    let x = ev.clientX, y = ev.clientY;
		// 鼠标在canvas内拖动, 获取canvas当前坐标数据
		let rect = ev.target.getBoundingClientRect();
		// 锁定canvas范围内
		if(rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom){
			lastX = x; lastY = y;
			dragging = true;
		}
  });

  let move = 'ontouchmove' in canvas ? 'touchmove' : 'mousemove';  
  addHandler(canvas,move,function(e){
    let ev = 'ontouchmove' in canvas ? e.touches[0] : e ;
    let x = ev.clientX, y = ev.clientY;
		if(dragging){
			let factor = 100 / canvas.height; // 旋转因子 
			let dx = factor * (x - lastX);
			let dy = factor * (y - lastY);
			// 控制Y轴旋转角度在-90至90度之间，防止万向锁问题
			currentAngle[0] = Math.max(Math.min(currentAngle[0] + dy, 90.0), -90.0);
			currentAngle[1] = currentAngle[1] + dx;
		}
		lastX = x, lastY = y;
  });

  let up = 'ontouchend' in canvas ? 'touchend' : 'mouseup';  
  addHandler(canvas,up,function(e){
    dragging = false;
  });
}

export default initEventHandlers;
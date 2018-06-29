var THREE = require('three');
var TWEEN = require('@tweenjs/tween.js');

const moveSpherePointToPoint = (sphere, newPoint, interval) => {
	new TWEEN.Tween( sphere.position ).to( {
		x: newPoint.x,
		y: newPoint.y,
		z: newPoint.z
	}, interval )
	.start();
}

export const curveMove = (curve, moveObj, interval) => {
	let positions = curve.geometry.clone().getAttribute('position')
	let pointsLen = positions.count

	let currPointIndex = 0
	let isLoop = true
	const updateMove = () => {

		if(currPointIndex < pointsLen){
			let vec3 = new THREE.Vector3( 
				positions.getX(currPointIndex), 
				positions.getY(currPointIndex), 
				positions.getZ(currPointIndex) );
			moveSpherePointToPoint(moveObj, vec3)
			setTimeout(updateMove, interval)
		}else{
			if(isLoop){
				if(currPointIndex == pointsLen){
					currPointIndex = 0
					setTimeout(updateMove, 0)
				}
			}
		}
		currPointIndex++
	}
	updateMove()
}
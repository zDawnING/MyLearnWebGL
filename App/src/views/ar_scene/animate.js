var THREE = require('three');
var TWEEN = require('@tweenjs/tween.js');

export const moveSpherePointToPoint = (sphere, newPoint) => {
	new TWEEN.Tween( sphere.position ).to( {
		x: newPoint.x,
		y: newPoint.y,
		z: newPoint.z
	}, 1000 )
	.onUpdate( obj => {
		console.log(obj)
	})
	.start();
}
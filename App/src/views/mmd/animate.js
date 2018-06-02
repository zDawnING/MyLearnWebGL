var THREE = require('three');
var TWEEN = require('@tweenjs/tween.js');


export const randomPosSpotLights = (light) => {
	new TWEEN.Tween( light ).to( {
		angle: ( Math.random() * 0.7 ) + 0.1,
		penumbra: Math.random() + 1
	}, Math.random() * 3000 + 2000 )
	.easing( TWEEN.Easing.Quadratic.Out ).start();

	new TWEEN.Tween( light.position ).to( {
		x: ( Math.random() * 120 ) - 60, // (-60,60)
		y: ( Math.random() * 20 ) + 30, // (30,50)
		z: ( Math.random() * 120 ) - 60 // (-60,60)
	}, Math.random() * 3000 + 2000 )
	.easing( TWEEN.Easing.Quadratic.Out ).start();
}


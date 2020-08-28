/******/!function(e){// webpackBootstrap
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function n(i){
/******/
/******/ // Check if module is in cache
/******/if(t[i])
/******/return t[i].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=t[i]={
/******/i,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[i].call(r.exports,r,r.exports,n),
/******/
/******/ // Flag the module as loaded
/******/r.l=!0,r.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/
/******/
/******/
/******/ // Load entry module and return exports
/******/n.m=e,
/******/
/******/ // expose the module cache
/******/n.c=t,
/******/
/******/ // define getter function for harmony exports
/******/n.d=function(e,t,i){
/******/n.o(e,t)||
/******/Object.defineProperty(e,t,{
/******/configurable:!1,
/******/enumerable:!0,
/******/get:i
/******/})
/******/},
/******/
/******/ // define __esModule on exports
/******/n.r=function(e){
/******/Object.defineProperty(e,"__esModule",{value:!0});
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){
/******/var t=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/
/******/return n.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/n.p="./",n(n.s="./src/lm_scene_index.js");
/******/}
/************************************************************************/
/******/({
/***/"./node_modules/@tweenjs/tween.js/src/Tween.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/* WEBPACK VAR INJECTION */
/* WEBPACK VAR INJECTION */(function(n){"function"==typeof Symbol&&Symbol.iterator;var i,r=function(){this._tweens={},this._tweensAddedDuringUpdate={}};r.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(0===n.length)return!1;
// Tweens are updated in "batches". If you add a new tween during an update, then the
// new tween will be updated in the next batch.
// If you remove a tween during an update, it may or may not be updated. However,
// if the removed tween was added during the current batch, then it will not be updated.
for(e=void 0!==e?e:q.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]];r&&!1===r.update(e)&&(r._isPlaying=!1,t||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var q=new r;q.Group=r,q._nextId=0,q.nextId=function(){return q._nextId++},
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
"undefined"==typeof window&&void 0!==n?q.now=function(){var e=n.hrtime();
// Convert [seconds, nanoseconds] to milliseconds.
return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?
// This must be bound, because directly assigning this function
// leads to an invocation exception in Chrome.
q.now=window.performance.now.bind(window.performance):void 0!==Date.now?q.now=Date.now:q.now=function(){return(new Date).getTime()},q.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=q.Easing.Linear.None,this._interpolationFunction=q.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||q,this._id=q.nextId()},q.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=e,void 0!==t&&(this._duration=t),this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==e?"string"==typeof e?q.now()+parseFloat(e):e:q.now(),this._startTime+=this._delayTime,this._valuesEnd){
// Check if an Array was provided as property value
if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;
// Create a local copy of the Array with the start value at the front
this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}
// If `to()` specifies a property that doesn't exist in the source object,
// we should not set that property in the object
void 0!==this._object[t]&&(
// Save the starting value.
this._valuesStart[t]=this._object[t],this._valuesStart[t]instanceof Array==!1&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,i;if(e<this._startTime)return!0;for(t in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n),this._valuesEnd)
// Don't update properties that do not exist in the source object
if(void 0!==this._valuesStart[t]){var r=this._valuesStart[t]||0,q=this._valuesEnd[t];q instanceof Array?this._object[t]=this._interpolationFunction(q,i):(
// Parses relative end values with start as base (e.g.: +10, -3)
"string"==typeof q&&(q="+"===q.charAt(0)||"-"===q.charAt(0)?r+parseFloat(q):parseFloat(q)),
// Protect against non numeric properties.
"number"==typeof q&&(this._object[t]=r+(q-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===n){if(this._repeat>0){
// Reassign starting values, restart by making startTime = now
for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var a=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=a}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,s=this._chainedTweens.length;o<s;o++)
// Make the chained tweens start exactly at the time they should,
// even if the `update()` method was called way past the duration of the tween
this._chainedTweens[o].start(this._startTime+this._duration);return!1}return!0}},q.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-q.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*q.Easing.Bounce.In(2*e):.5*q.Easing.Bounce.Out(2*e-1)+.5}}},q.Interpolation={Linear:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),a=q.Interpolation.Utils.Linear;return t<0?a(e[0],e[1],i):t>1?a(e[n],e[n-1],n-i):a(e[r],e[r+1>n?n:r+1],i-r)},Bezier:function(e,t){for(var n=0,i=e.length-1,r=Math.pow,a=q.Interpolation.Utils.Bernstein,o=0;o<=i;o++)n+=r(1-t,i-o)*r(t,o)*e[o]*a(i,o);return n},CatmullRom:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),a=q.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(r=Math.floor(i=n*(1+t))),a(e[(r-1+n)%n],e[r],e[(r+1)%n],e[(r+2)%n],i-r)):t<0?e[0]-(a(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(a(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):a(e[r?r-1:0],e[r],e[n<r+1?n:r+1],e[n<r+2?n:r+2],i-r)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=q.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var i=t;i>1;i--)n*=i;return e[t]=n,n}}(),CatmullRom:function(e,t,n,i,r){var q=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+q+a)*(r*o)+(-3*t+3*n-2*q-a)*o+q*r+t}}},void 0===(i=function(){return q}.apply(t,[]))||(e.exports=i)}).call(this,n(/*! ./../../../process/browser.js */"./node_modules/process/browser.js"))
/***/},
/***/"./node_modules/css-loader/index.js!./src/style/common/commom.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/common/commom.css ***!
  \***************************************************************/
/*! no static exports found */
/***/function(e,t,n){
// imports
// module
(e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"body{\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n.blue_btn {\n\tdisplay: block;\n    position: fixed;\n    right: .76923077em;\n    bottom: .76923077em;\n    color: #fff;\n    background-color: #347be6;\n    line-height: 1;\n    font-size: 1.07692308em;\n    padding: .61538462em 1.23076923em;\n    z-index: 10000;\n    border-radius: .30769231em;\n    box-shadow: 0 0 0.61538462em rgba(0,0,0,.4);\n}",""])},
/***/"./node_modules/css-loader/index.js!./src/style/common/layer.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/common/layer.css ***!
  \**************************************************************/
/*! no static exports found */
/***/function(e,t,n){
// imports
// module
(e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".layui-m-layer{position:relative;z-index:19891014}.layui-m-layer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.layui-m-layermain,.layui-m-layershade{position:fixed;left:0;top:0;width:100%;height:100%}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;text-align:left;background-color:#fff;font-size:14px;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.1);pointer-events:auto;-webkit-overflow-scrolling:touch;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.2s;animation-duration:.2s}@-webkit-keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}@-webkit-keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.layui-m-anim-up{-webkit-animation-name:layui-m-anim-up;animation-name:layui-m-anim-up}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:640px}.layui-m-layer1 .layui-m-layerchild{border:none;border-radius:0}.layui-m-layer2 .layui-m-layerchild{width:auto;max-width:260px;min-width:40px;border:none;background:0 0;box-shadow:none;color:#fff}.layui-m-layerchild h3{padding:0 10px;height:60px;line-height:60px;font-size:16px;font-weight:400;border-radius:5px 5px 0 0;text-align:center}.layui-m-layerbtn span,.layui-m-layerchild h3{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.layui-m-layercont{padding:50px 30px;line-height:22px;text-align:center}.layui-m-layer1 .layui-m-layercont{padding:0;text-align:left}.layui-m-layer2 .layui-m-layercont{text-align:center;padding:0;line-height:0}.layui-m-layer2 .layui-m-layercont i{width:25px;height:25px;margin-left:8px;display:inline-block;background-color:#fff;border-radius:100%;-webkit-animation:layui-m-anim-loading 1.4s infinite ease-in-out;animation:layui-m-anim-loading 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;text-align:center;border-radius:0 0 5px 5px}.layui-m-layer2 .layui-m-layercont p{margin-top:20px}@-webkit-keyframes layui-m-anim-loading{0%,100%,80%{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes layui-m-anim-loading{0%,100%,80%{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.layui-m-layer2 .layui-m-layercont i:first-child{margin-left:0;-webkit-animation-delay:-.32s;animation-delay:-.32s}.layui-m-layer2 .layui-m-layercont i.layui-m-layerload{-webkit-animation-delay:-.16s;animation-delay:-.16s}.layui-m-layer2 .layui-m-layercont>div{line-height:22px;padding-top:7px;margin-bottom:20px;font-size:14px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;line-height:50px;font-size:0;border-top:1px solid #D0D0D0;background-color:#F2F2F2}.layui-m-layerbtn span{display:block;-moz-box-flex:1;box-flex:1;-webkit-box-flex:1;font-size:14px;cursor:pointer}.layui-m-layerbtn span[yes]{color:#40AFFE}.layui-m-layerbtn span[no]{border-right:1px solid #D0D0D0;border-radius:0 0 0 5px}.layui-m-layerbtn span:active{background-color:#F6F6F6}.layui-m-layerend{position:absolute;right:7px;top:10px;width:30px;height:30px;border:0;font-weight:400;background:0 0;cursor:pointer;-webkit-appearance:none;font-size:30px}.layui-m-layerend::after,.layui-m-layerend::before{position:absolute;left:5px;top:15px;content:'';width:18px;height:1px;background-color:#999;transform:rotate(45deg);-webkit-transform:rotate(45deg);border-radius:3px}.layui-m-layerend::after{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}body .layui-m-layer .layui-m-layer-footer{position:fixed;width:95%;max-width:100%;margin:0 auto;left:0;right:0;bottom:10px;background:0 0}.layui-m-layer-footer .layui-m-layercont{padding:20px;border-radius:5px 5px 0 0;background-color:rgba(255,255,255,.8)}.layui-m-layer-footer .layui-m-layerbtn{display:block;height:auto;background:0 0;border-top:none}.layui-m-layer-footer .layui-m-layerbtn span{background-color:rgba(255,255,255,.8)}.layui-m-layer-footer .layui-m-layerbtn span[no]{color:#FD482C;border-top:1px solid #c2c2c2;border-radius:0 0 5px 5px}.layui-m-layer-footer .layui-m-layerbtn span[yes]{margin-top:10px;border-radius:5px}body .layui-m-layer .layui-m-layer-msg{width:auto;max-width:90%;margin:0 auto;bottom:-150px;background-color:rgba(0,0,0,.7);color:#fff}.layui-m-layer-msg .layui-m-layercont{padding:10px 20px}",""])},
/***/"./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
e.exports=function(e){var t=[];
// return the list of modules as css string
return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=
// Adapted from convert-source-map (MIT)
function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}
/***/(i),q=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(q).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},
// import a list of modules into the list
t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var q=this[r][0];"number"==typeof q&&(i[q]=!0)}for(r=0;r<e.length;r++){var a=e[r];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},
/***/"./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
// shim for using process in browser
var i,r,q=e.exports={};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(i===setTimeout)
//normal enviroments in sane situations
return setTimeout(e,0);
// if setTimeout wasn't available but was latter defined
if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return i(e,0)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return i.call(null,e,0)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:a}catch(e){i=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],h=!1,u=-1;function d(){h&&l&&(h=!1,l.length?c=l.concat(c):u=-1,c.length&&m())}function m(){if(!h){var e=s(d);h=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,h=!1,function(e){if(r===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(e);
// if clearTimeout wasn't available but was latter defined
if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
r(e)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,e)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,e)}}}(e)}}
// v8 likes predictible objects
function p(e,t){this.fun=e,this.array=t}function f(){}q.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||h||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},q.title="browser",q.browser=!0,q.env={},q.argv=[],q.version="",// empty string to avoid regexp issues
q.versions={},q.on=f,q.addListener=f,q.once=f,q.off=f,q.removeListener=f,q.removeAllListeners=f,q.emit=f,q.prependListener=f,q.prependOnceListener=f,q.listeners=function(e){return[]},q.binding=function(e){throw new Error("process.binding is not supported")},q.cwd=function(){return"/"},q.chdir=function(e){throw new Error("process.chdir is not supported")},q.umask=function(){return 0}},
/***/"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/function(e,t,n){
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var i={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){
// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
return window&&document&&document.all&&!window.atob}),q=function(e){var t={};return function(e){
// If passing function in options, then use it for resolve "head" element.
// Useful for Shadow Root style i.e
// {
//   insertInto: function () { return document.querySelector("#foo").shadowRoot }
// }
if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);
// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,o=0,s=[],l=n(/*! ./urls */"./node_modules/style-loader/lib/urls.js");function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],q=i[r.id];if(q){q.refs++;for(var a=0;a<q.parts.length;a++)q.parts[a](r.parts[a]);for(;a<r.parts.length;a++)q.parts.push(f(r.parts[a],t))}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(f(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:o}}}}function h(e,t){for(var n=[],i={},r=0;r<e.length;r++){var q=e[r],a=t.base?q[0]+t.base:q[0],o={css:q[1],media:q[2],sourceMap:q[3]};i[a]?i[a].parts.push(o):n.push(i[a]={id:a,parts:[o]})}return n}function u(e,t){var n=q(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=s[s.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=q(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),p(t,e.attrs),u(e,t),t}function p(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,i,r,q;
// If a transform function was defined, run it on the css
if(t.transform&&e.css){if(!(q=t.transform(e.css)))
// If the transform function returns a falsy value, don't add this css.
// This allows conditional loading of css
return function(){
// noop
};
// If transform returns a value, use that instead of the original css.
// This allows running runtime transformations on the css.
e.css=q}if(t.singleton){var s=o++;n=a||(a=m(t)),i=v.bind(null,n,s,!1),r=v.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",p(t,e.attrs),u(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,q=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||q)&&(i=l(i));r&&(
// http://stackoverflow.com/a/26603875
i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}
/***/.bind(null,n,t),r=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){d(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},
// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),
// By default, add <style> tags to the <head> element
t.insertInto||(t.insertInto="head"),
// By default, add <style> tags to the bottom of the target
t.insertAt||(t.insertAt="bottom");var n=h(e,t);return c(n,t),function(e){for(var r=[],q=0;q<n.length;q++){var a=n[q];(o=i[a.id]).refs--,r.push(o)}e&&c(h(e,t),t);for(q=0;q<r.length;q++){var o;if(0===(o=r[q]).refs){for(var s=0;s<o.parts.length;s++)o.parts[s]();delete i[o.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var q=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(q,a[t]):e.appendChild(q)}}},
/***/"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */e.exports=function(e){
// get current location
var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");
// blank or null?
if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");
// send back the fixed css
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){
// strip quotes (if they exist)
var r,q=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});
// already a full url? no change
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(q)?e:(
//TODO: should we add protocol?
r=0===q.indexOf("//")?q:0===q.indexOf("/")?n+q:i+q.replace(/^\.\//,""),"url("+JSON.stringify(r)+")");
// convert the url to a full url
})}},
/***/"./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};// Polyfills
/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */
function r(){}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(// Missing in IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}),//
void 0===Math.sign&&(// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
Math.sign=function(e){return e<0?-1:e>0?1:+e}),"name"in Function.prototype==!1&&// Missing in IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),void 0===Object.assign&&(Object.assign=function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(void 0!==i&&null!==i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}),Object.assign(r.prototype,{addEventListener:function(e,t){void 0===this._listeners&&(this._listeners={});var n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)},hasEventListener:function(e,t){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)},removeEventListener:function(e,t){if(void 0!==this._listeners){var n=this._listeners[e];if(void 0!==n){var i=n.indexOf(t);-1!==i&&n.splice(i,1)}}},dispatchEvent:function(e){if(void 0!==this._listeners){var t=this._listeners[e.type];if(void 0!==t){e.target=this;for(var n=t.slice(0),i=0,r=n.length;i<r;i++)n[i].call(this,e)}}}});var q="92",a=0,o=1,s=2,l=1,c=2,h=0,u=1,d=2,m=0,p=1,f=2,g=0,v=1,x=2,y=3,_=4,b=5,w=100,E=101,M=102,S=103,T=104,A=200,R=201,L=202,C=203,P=204,O=205,I=206,N=207,D=208,U=209,B=210,F=0,z=1,H=2,k=3,G=4,j=5,V=6,W=7,X=0,Y=1,Z=2,J=0,Q=1,K=2,$=3,ee=4,te=301,ne=302,ie=303,re=304,qe=305,ae=306,oe=307,se=1e3,le=1001,ce=1002,he=1003,ue=1004,de=1005,me=1006,pe=1007,fe=1008,ge=1009,ve=1010,xe=1011,ye=1012,_e=1013,be=1014,we=1015,Ee=1016,Me=1017,Se=1018,Te=1019,Ae=1020,Re=1021,Le=1022,Ce=1023,Pe=1024,Oe=1025,Ie=Ce,Ne=1026,De=1027,Ue=33776,Be=33777,Fe=33778,ze=33779,He=35840,ke=35841,Ge=35842,je=35843,Ve=36196,We=37808,Xe=37809,Ye=37810,Ze=37811,Je=37812,Qe=37813,Ke=37814,$e=37815,et=37816,tt=37817,nt=37818,it=37819,rt=37820,qt=37821,at=2201,ot=2400,st=0,lt=1,ct=2,ht=3e3,ut=3001,dt=3007,mt=3002,pt=3004,ft=3005,gt=3006,vt=3200,xt=3201,yt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);return function(){var t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;// .toUpperCase() here flattens concatenated strings to save heap memory space.
return(e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+"-"+e[255&n]+e[n>>8&255]+"-"+e[n>>16&15|64]+e[n>>24&255]+"-"+e[63&i|128]+e[i>>8&255]+"-"+e[i>>16&255]+e[i>>24&255]+e[255&r]+e[r>>8&255]+e[r>>16&255]+e[r>>24&255]).toUpperCase()}}(),clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
euclideanModulo:function(e,t){return(e%t+t)%t},// Linear mapping from range <a1, a2> to range <b1, b2>
mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},// https://en.wikipedia.org/wiki/Linear_interpolation
lerp:function(e,t,n){return(1-n)*e+n*t},// http://en.wikipedia.org/wiki/Smoothstep
smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t))*e*(3-2*e)},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t))*e*e*(e*(6*e-15)+10)},// Random integer from <low, high> interval
randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},// Random float from <low, high> interval
randFloat:function(e,t){return e+Math.random()*(t-e)},// Random float from <-range/2, range/2> interval
randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*yt.DEG2RAD},radToDeg:function(e){return e*yt.RAD2DEG},isPowerOfTwo:function(e){return 0==(e&e-1)&&0!==e},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
function _t(e,t){this.x=e||0,this.y=t||0}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
function bt(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
function wt(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._w=void 0!==i?i:1}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function Et(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 * @author tschw
 */
function Mt(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.defineProperties(_t.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}}),Object.assign(_t.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return void 0!==t?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return void 0!==t?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){var t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){// assumes min < max, componentwise
return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(){var e=new _t,t=new _t;return function(n,i){return e.set(n,n),t.set(i,i),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){// computes the angle in radians with respect to the positive x-axis
var e=Math.atan2(this.y,this.x);return e<0&&(e+=2*Math.PI),e},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y;return t*t+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,n){return void 0!==n&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,q=this.y-e.y;return this.x=r*n-q*i+e.x,this.y=r*i+q*n+e.y,this}}),Object.assign(bt.prototype,{isMatrix4:!0,set:function(e,t,n,i,r,q,a,o,s,l,c,h,u,d,m,p){var f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=q,f[9]=a,f[13]=o,f[2]=s,f[6]=l,f[10]=c,f[14]=h,f[3]=u,f[7]=d,f[11]=m,f[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new bt).fromArray(this.elements)},copy:function(e){var t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this},copyPosition:function(e){var t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(){var e=new Et;return function(t){var n=this.elements,i=t.elements,r=1/e.setFromMatrixColumn(t,0).length(),q=1/e.setFromMatrixColumn(t,1).length(),a=1/e.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[4]=i[4]*q,n[5]=i[5]*q,n[6]=i[6]*q,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,this}}(),makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t=this.elements,n=e.x,i=e.y,r=e.z,q=Math.cos(n),a=Math.sin(n),o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r);if("XYZ"===e.order){var h=q*l,u=q*c,d=a*l,m=a*c;t[0]=o*l,t[4]=-o*c,t[8]=s,t[1]=u+d*s,t[5]=h-m*s,t[9]=-a*o,t[2]=m-h*s,t[6]=d+u*s,t[10]=q*o}else if("YXZ"===e.order){var p=o*l,f=o*c,g=s*l,v=s*c;t[0]=p+v*a,t[4]=g*a-f,t[8]=q*s,t[1]=q*c,t[5]=q*l,t[9]=-a,t[2]=f*a-g,t[6]=v+p*a,t[10]=q*o}else if("ZXY"===e.order){p=o*l,f=o*c,g=s*l,v=s*c;t[0]=p-v*a,t[4]=-q*c,t[8]=g+f*a,t[1]=f+g*a,t[5]=q*l,t[9]=v-p*a,t[2]=-q*s,t[6]=a,t[10]=q*o}else if("ZYX"===e.order){h=q*l,u=q*c,d=a*l,m=a*c;t[0]=o*l,t[4]=d*s-u,t[8]=h*s+m,t[1]=o*c,t[5]=m*s+h,t[9]=u*s-d,t[2]=-s,t[6]=a*o,t[10]=q*o}else if("YZX"===e.order){var x=q*o,y=q*s,_=a*o,b=a*s;t[0]=o*l,t[4]=b-x*c,t[8]=_*c+y,t[1]=c,t[5]=q*l,t[9]=-a*l,t[2]=-s*l,t[6]=y*c+_,t[10]=x-b*c}else if("XZY"===e.order){x=q*o,y=q*s,_=a*o,b=a*s;t[0]=o*l,t[4]=-c,t[8]=s*l,t[1]=x*c+b,t[5]=q*l,t[9]=y*c-_,t[2]=_*c-y,t[6]=a*l,t[10]=b*c+x}// last column
return t[3]=0,t[7]=0,t[11]=0,// bottom row
t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){var t=this.elements,n=e._x,i=e._y,r=e._z,q=e._w,a=n+n,o=i+i,s=r+r,l=n*a,c=n*o,h=n*s,u=i*o,d=i*s,m=r*s,p=q*a,f=q*o,g=q*s;return t[0]=1-(u+m),t[4]=c-g,t[8]=h+f,t[1]=c+g,t[5]=1-(l+m),t[9]=d-p,t[2]=h-f,t[6]=d+p,t[10]=1-(l+u),// last column
t[3]=0,t[7]=0,t[11]=0,// bottom row
t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},lookAt:function(){var e=new Et,t=new Et,n=new Et;return function(i,r,q){var a=this.elements;return n.subVectors(i,r),0===n.lengthSq()&&(// eye and target are in the same position
n.z=1),n.normalize(),e.crossVectors(q,n),0===e.lengthSq()&&(// up and z are parallel
1===Math.abs(q.z)?n.x+=1e-4:n.z+=1e-4,n.normalize(),e.crossVectors(q,n)),e.normalize(),t.crossVectors(n,e),a[0]=e.x,a[4]=t.x,a[8]=n.x,a[1]=e.y,a[5]=t.y,a[9]=n.y,a[2]=e.z,a[6]=t.z,a[10]=n.z,this}}(),multiply:function(e,t){return void 0!==t?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var n=e.elements,i=t.elements,r=this.elements,q=n[0],a=n[4],o=n[8],s=n[12],l=n[1],c=n[5],h=n[9],u=n[13],d=n[2],m=n[6],p=n[10],f=n[14],g=n[3],v=n[7],x=n[11],y=n[15],_=i[0],b=i[4],w=i[8],E=i[12],M=i[1],S=i[5],T=i[9],A=i[13],R=i[2],L=i[6],C=i[10],P=i[14],O=i[3],I=i[7],N=i[11],D=i[15];return r[0]=q*_+a*M+o*R+s*O,r[4]=q*b+a*S+o*L+s*I,r[8]=q*w+a*T+o*C+s*N,r[12]=q*E+a*A+o*P+s*D,r[1]=l*_+c*M+h*R+u*O,r[5]=l*b+c*S+h*L+u*I,r[9]=l*w+c*T+h*C+u*N,r[13]=l*E+c*A+h*P+u*D,r[2]=d*_+m*M+p*R+f*O,r[6]=d*b+m*S+p*L+f*I,r[10]=d*w+m*T+p*C+f*N,r[14]=d*E+m*A+p*P+f*D,r[3]=g*_+v*M+x*R+y*O,r[7]=g*b+v*S+x*L+y*I,r[11]=g*w+v*T+x*C+y*N,r[15]=g*E+v*A+x*P+y*D,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToBufferAttribute:function(){var e=new Et;return function(t){for(var n=0,i=t.count;n<i;n++)e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.applyMatrix4(this),t.setXYZ(n,e.x,e.y,e.z);return t}}(),determinant:function(){var e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],q=e[1],a=e[5],o=e[9],s=e[13],l=e[2],c=e[6],h=e[10],u=e[14];//TODO: make this more efficient
//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
return e[3]*(+r*o*c-i*s*c-r*a*h+n*s*h+i*a*u-n*o*u)+e[7]*(+t*o*u-t*s*h+r*q*h-i*q*u+i*s*l-r*o*l)+e[11]*(+t*s*c-t*a*u-r*q*c+n*q*u+r*a*l-n*s*l)+e[15]*(-i*a*l-t*o*c+t*a*h+i*q*c-n*q*h+n*o*l)},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
var n=this.elements,i=e.elements,r=i[0],q=i[1],a=i[2],o=i[3],s=i[4],l=i[5],c=i[6],h=i[7],u=i[8],d=i[9],m=i[10],p=i[11],f=i[12],g=i[13],v=i[14],x=i[15],y=d*v*h-g*m*h+g*c*p-l*v*p-d*c*x+l*m*x,_=f*m*h-u*v*h-f*c*p+s*v*p+u*c*x-s*m*x,b=u*g*h-f*d*h+f*l*p-s*g*p-u*l*x+s*d*x,w=f*d*c-u*g*c-f*l*m+s*g*m+u*l*v-s*d*v,E=r*y+q*_+a*b+o*w;if(0===E){var M="THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if(!0===t)throw new Error(M);return console.warn(M),this.identity()}var S=1/E;return n[0]=y*S,n[1]=(g*m*o-d*v*o-g*a*p+q*v*p+d*a*x-q*m*x)*S,n[2]=(l*v*o-g*c*o+g*a*h-q*v*h-l*a*x+q*c*x)*S,n[3]=(d*c*o-l*m*o-d*a*h+q*m*h+l*a*p-q*c*p)*S,n[4]=_*S,n[5]=(u*v*o-f*m*o+f*a*p-r*v*p-u*a*x+r*m*x)*S,n[6]=(f*c*o-s*v*o-f*a*h+r*v*h+s*a*x-r*c*x)*S,n[7]=(s*m*o-u*c*o+u*a*h-r*m*h-s*a*p+r*c*p)*S,n[8]=b*S,n[9]=(f*d*o-u*g*o-f*q*p+r*g*p+u*q*x-r*d*x)*S,n[10]=(s*g*o-f*l*o+f*q*h-r*g*h-s*q*x+r*l*x)*S,n[11]=(u*l*o-s*d*o-u*q*h+r*d*h+s*q*p-r*l*p)*S,n[12]=w*S,n[13]=(u*g*a-f*d*a+f*q*m-r*g*m-u*q*v+r*d*v)*S,n[14]=(f*l*a-s*g*a-f*q*c+r*g*c+s*q*v-r*l*v)*S,n[15]=(s*d*a-u*l*a+u*q*c-r*d*c-s*q*m+r*l*m)*S,this},scale:function(e){var t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){// Based on http://www.gamedev.net/reference/articles/article1199.asp
var n=Math.cos(t),i=Math.sin(t),r=1-n,q=e.x,a=e.y,o=e.z,s=r*q,l=r*a;return this.set(s*q+n,s*a-i*o,s*o+i*a,0,s*a+i*o,l*a+n,l*o-i*q,0,s*o-i*a,l*o+i*q,r*o*o+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){return this.makeRotationFromQuaternion(t),this.scale(n),this.setPosition(e),this},decompose:function(){var e=new Et,t=new bt;return function(n,i,r){var q=this.elements,a=e.set(q[0],q[1],q[2]).length(),o=e.set(q[4],q[5],q[6]).length(),s=e.set(q[8],q[9],q[10]).length();this.determinant()<0&&(a=-a),n.x=q[12],n.y=q[13],n.z=q[14],// scale the rotation part
t.copy(this);var l=1/a,c=1/o,h=1/s;return t.elements[0]*=l,t.elements[1]*=l,t.elements[2]*=l,t.elements[4]*=c,t.elements[5]*=c,t.elements[6]*=c,t.elements[8]*=h,t.elements[9]*=h,t.elements[10]*=h,i.setFromRotationMatrix(t),r.x=a,r.y=o,r.z=s,this}}(),makePerspective:function(e,t,n,i,r,q){void 0===q&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var a=this.elements,o=2*r/(t-e),s=2*r/(n-i),l=(t+e)/(t-e),c=(n+i)/(n-i),h=-(q+r)/(q-r),u=-2*q*r/(q-r);return a[0]=o,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=s,a[9]=c,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makeOrthographic:function(e,t,n,i,r,q){var a=this.elements,o=1/(t-e),s=1/(n-i),l=1/(q-r),c=(t+e)*o,h=(n+i)*s,u=(q+r)*l;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-c,a[1]=0,a[5]=2*s,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},equals:function(e){for(var t=this.elements,n=e.elements,i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){void 0===t&&(t=0);for(var n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}),Object.assign(wt,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,q,a){// fuzz-free, array-based Quaternion SLERP operation
var o=n[i+0],s=n[i+1],l=n[i+2],c=n[i+3],h=r[q+0],u=r[q+1],d=r[q+2],m=r[q+3];if(c!==m||o!==h||s!==u||l!==d){var p=1-a,f=o*h+s*u+l*d+c*m,g=f>=0?1:-1,v=1-f*f;// Skip the Slerp for tiny steps to avoid numeric problems:
if(v>Number.EPSILON){var x=Math.sqrt(v),y=Math.atan2(x,f*g);p=Math.sin(p*y)/x,a=Math.sin(a*y)/x}var _=a*g;// Normalize in case we just did a lerp:
if(o=o*p+h*_,s=s*p+u*_,l=l*p+d*_,c=c*p+m*_,p===1-a){var b=1/Math.sqrt(o*o+s*s+l*l+c*c);o*=b,s*=b,l*=b,c*=b}}e[t]=o,e[t+1]=s,e[t+2]=l,e[t+3]=c}}),Object.defineProperties(wt.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this.onChangeCallback()}}}),Object.assign(wt.prototype,{set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this.onChangeCallback(),this},setFromEuler:function(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=e._x,i=e._y,r=e._z,q=e.order,a=Math.cos,o=Math.sin,s=a(n/2),l=a(i/2),c=a(r/2),h=o(n/2),u=o(i/2),d=o(r/2);// http://www.mathworks.com/matlabcentral/fileexchange/
// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
//	content/SpinCalc.m
return"XYZ"===q?(this._x=h*l*c+s*u*d,this._y=s*u*c-h*l*d,this._z=s*l*d+h*u*c,this._w=s*l*c-h*u*d):"YXZ"===q?(this._x=h*l*c+s*u*d,this._y=s*u*c-h*l*d,this._z=s*l*d-h*u*c,this._w=s*l*c+h*u*d):"ZXY"===q?(this._x=h*l*c-s*u*d,this._y=s*u*c+h*l*d,this._z=s*l*d+h*u*c,this._w=s*l*c-h*u*d):"ZYX"===q?(this._x=h*l*c-s*u*d,this._y=s*u*c+h*l*d,this._z=s*l*d-h*u*c,this._w=s*l*c+h*u*d):"YZX"===q?(this._x=h*l*c+s*u*d,this._y=s*u*c+h*l*d,this._z=s*l*d-h*u*c,this._w=s*l*c-h*u*d):"XZY"===q&&(this._x=h*l*c-s*u*d,this._y=s*u*c-h*l*d,this._z=s*l*d+h*u*c,this._w=s*l*c+h*u*d),!1!==t&&this.onChangeCallback(),this},setFromAxisAngle:function(e,t){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
// assumes axis is normalized
var n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(e){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var t,n=e.elements,i=n[0],r=n[4],q=n[8],a=n[1],o=n[5],s=n[9],l=n[2],c=n[6],h=n[10],u=i+o+h;return u>0?(t=.5/Math.sqrt(u+1),this._w=.25/t,this._x=(c-s)*t,this._y=(q-l)*t,this._z=(a-r)*t):i>o&&i>h?(t=2*Math.sqrt(1+i-o-h),this._w=(c-s)/t,this._x=.25*t,this._y=(r+a)/t,this._z=(q+l)/t):o>h?(t=2*Math.sqrt(1+o-i-h),this._w=(q-l)/t,this._x=(r+a)/t,this._y=.25*t,this._z=(s+c)/t):(t=2*Math.sqrt(1+h-i-o),this._w=(a-r)/t,this._x=(q+l)/t,this._y=(s+c)/t,this._z=.25*t),this.onChangeCallback(),this},setFromUnitVectors:function(){// assumes direction vectors vFrom and vTo are normalized
var e,t=new Et;return function(n,i){return void 0===t&&(t=new Et),(e=n.dot(i)+1)<1e-6?(e=0,Math.abs(n.x)>Math.abs(n.z)?t.set(-n.y,n.x,0):t.set(0,-n.z,n.y)):t.crossVectors(n,i),this._x=t.x,this._y=t.y,this._z=t.z,this._w=e,this.normalize()}}(),inverse:function(){// quaternion is assumed to have unit length
return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this},multiply:function(e,t){return void 0!==t?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
var n=e._x,i=e._y,r=e._z,q=e._w,a=t._x,o=t._y,s=t._z,l=t._w;return this._x=n*l+q*a+i*s-r*o,this._y=i*l+q*o+r*a-n*s,this._z=r*l+q*s+n*o-i*a,this._w=q*l-n*a-i*o-r*s,this.onChangeCallback(),this},slerp:function(e,t){if(0===t)return this;if(1===t)return this.copy(e);var n=this._x,i=this._y,r=this._z,q=this._w,a=q*e._w+n*e._x+i*e._y+r*e._z;// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=q,this._x=n,this._y=i,this._z=r,this;var o=Math.sqrt(1-a*a);if(Math.abs(o)<.001)return this._w=.5*(q+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var s=Math.atan2(o,a),l=Math.sin((1-t)*s)/o,c=Math.sin(t*s)/o;return this._w=q*l+this._w*c,this._x=n*l+this._x*c,this._y=i*l+this._y*c,this._z=r*l+this._z*c,this.onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return void 0===t&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}}),Object.assign(Et.prototype,{isVector3:!0,set:function(e,t,n){return this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return void 0!==t?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return void 0!==t?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return void 0!==t?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(){var e=new wt;return function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(e.setFromEuler(t))}}(),applyAxisAngle:function(){var e=new wt;return function(t,n){return this.applyQuaternion(e.setFromAxisAngle(t,n))}}(),applyMatrix3:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements,q=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*q,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*q,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*q,this},applyQuaternion:function(e){var t=this.x,n=this.y,i=this.z,r=e.x,q=e.y,a=e.z,o=e.w,s=o*t+q*i-a*n,l=o*n+a*t-r*i,c=o*i+r*n-q*t,h=-r*t-q*n-a*i;// calculate result * inverse quat
return this.x=s*o+h*-r+l*-a-c*-q,this.y=l*o+h*-q+c*-r-s*-a,this.z=c*o+h*-a+s*-q-l*-r,this},project:function(){var e=new bt;return function(t){return e.multiplyMatrices(t.projectionMatrix,e.getInverse(t.matrixWorld)),this.applyMatrix4(e)}}(),unproject:function(){var e=new bt;return function(t){return e.multiplyMatrices(t.matrixWorld,e.getInverse(t.projectionMatrix)),this.applyMatrix4(e)}}(),transformDirection:function(e){// input: THREE.Matrix4 affine matrix
// vector interpreted as a direction
var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){// assumes min < max, componentwise
return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(){var e=new Et,t=new Et;return function(n,i){return e.set(n,n,n),t.set(i,i,i),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},// TODO lengthSquared?
lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},cross:function(e,t){return void 0!==t?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){var n=e.x,i=e.y,r=e.z,q=t.x,a=t.y,o=t.z;return this.x=i*o-r*a,this.y=r*q-n*o,this.z=n*a-i*q,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(){var e=new Et;return function(t){return e.copy(this).projectOnVector(t),this.sub(e)}}(),reflect:function(){// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length
var e=new Et;return function(t){return this.sub(e.copy(t).multiplyScalar(2*this.dot(t)))}}(),angleTo:function(e){var t=this.dot(e)/Math.sqrt(this.lengthSq()*e.lengthSq());// clamp, to handle numerical problems
return Math.acos(yt.clamp(t,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){var t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this},setFromCylindrical:function(e){return this.x=e.radius*Math.sin(e.theta),this.y=e.y,this.z=e.radius*Math.cos(e.theta),this},setFromMatrixPosition:function(e){var t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,4*t)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,n){return void 0!==n&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}}),Object.assign(Mt.prototype,{isMatrix3:!0,set:function(e,t,n,i,r,q,a,o,s){var l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=r,l[5]=o,l[6]=n,l[7]=q,l[8]=s,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(e){var t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToBufferAttribute:function(){var e=new Et;return function(t){for(var n=0,i=t.count;n<i;n++)e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.applyMatrix3(this),t.setXYZ(n,e.x,e.y,e.z);return t}}(),multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var n=e.elements,i=t.elements,r=this.elements,q=n[0],a=n[3],o=n[6],s=n[1],l=n[4],c=n[7],h=n[2],u=n[5],d=n[8],m=i[0],p=i[3],f=i[6],g=i[1],v=i[4],x=i[7],y=i[2],_=i[5],b=i[8];return r[0]=q*m+a*g+o*y,r[3]=q*p+a*v+o*_,r[6]=q*f+a*x+o*b,r[1]=s*m+l*g+c*y,r[4]=s*p+l*v+c*_,r[7]=s*f+l*x+c*b,r[2]=h*m+u*g+d*y,r[5]=h*p+u*v+d*_,r[8]=h*f+u*x+d*b,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],q=e[4],a=e[5],o=e[6],s=e[7],l=e[8];return t*q*l-t*a*s-n*r*l+n*a*o+i*r*s-i*q*o},getInverse:function(e,t){e&&e.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var n=e.elements,i=this.elements,r=n[0],q=n[1],a=n[2],o=n[3],s=n[4],l=n[5],c=n[6],h=n[7],u=n[8],d=u*s-l*h,m=l*c-u*o,p=h*o-s*c,f=r*d+q*m+a*p;if(0===f){var g="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(!0===t)throw new Error(g);return console.warn(g),this.identity()}var v=1/f;return i[0]=d*v,i[1]=(a*h-u*q)*v,i[2]=(l*q-a*s)*v,i[3]=m*v,i[4]=(u*r-a*c)*v,i[5]=(a*o-l*r)*v,i[6]=p*v,i[7]=(q*c-h*r)*v,i[8]=(s*r-q*o)*v,this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,n,i,r,q,a){var o=Math.cos(r),s=Math.sin(r);this.set(n*o,n*s,-n*(o*q+s*a)+q+e,-i*s,i*o,-i*(-s*q+o*a)+a+t,0,0,1)},scale:function(e,t){var n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this},rotate:function(e){var t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],q=i[3],a=i[6],o=i[1],s=i[4],l=i[7];return i[0]=t*r+n*o,i[3]=t*q+n*s,i[6]=t*a+n*l,i[1]=-n*r+t*o,i[4]=-n*q+t*s,i[7]=-n*a+t*l,this},translate:function(e,t){var n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this},equals:function(e){for(var t=this.elements,n=e.elements,i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){void 0===t&&(t=0);for(var n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}});
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */
var St=0;function Tt(e,t,n,i,r,q,a,o,s,l){Object.defineProperty(this,"id",{value:St++}),this.uuid=yt.generateUUID(),this.name="",this.image=void 0!==e?e:Tt.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==t?t:Tt.DEFAULT_MAPPING,this.wrapS=void 0!==n?n:le,this.wrapT=void 0!==i?i:le,this.magFilter=void 0!==r?r:me,this.minFilter=void 0!==q?q:fe,this.anisotropy=void 0!==s?s:1,this.format=void 0!==a?a:Ce,this.type=void 0!==o?o:ge,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
//
// Also changing the encoding after already used by a Material will not automatically make the Material
// update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
this.encoding=void 0!==l?l:ht,this.version=0,this.onUpdate=null}
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function At(e,t,n,i){this.x=e||0,this.y=t||0,this.z=n||0,this.w=void 0!==i?i:1}
/**
 * @author szimek / https://github.com/szimek/
 * @author alteredq / http://alteredqualia.com/
 * @author Marius Kintel / https://github.com/kintel
 */
/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
function Rt(e,t,n){this.width=e,this.height=t,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),void 0===(n=n||{}).minFilter&&(n.minFilter=me),this.texture=new Tt(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0===n.stencilBuffer||n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null}
/**
 * @author alteredq / http://alteredqualia.com
 */
function Lt(e,t,n){Rt.call(this,e,t,n),this.activeCubeFace=0,// PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
this.activeMipMapLevel=0}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function Ct(e,t,n,i,r,q,a,o,s,l,c,h){Tt.call(this,null,q,a,o,s,l,i,r,c,h),this.image={data:e,width:t,height:n},this.magFilter=void 0!==s?s:he,this.minFilter=void 0!==l?l:he,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}
/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
function Pt(e,t){this.min=void 0!==e?e:new Et(1/0,1/0,1/0),this.max=void 0!==t?t:new Et(-1/0,-1/0,-1/0)}
/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
function Ot(e,t){this.center=void 0!==e?e:new Et,this.radius=void 0!==t?t:0}
/**
 * @author bhouston / http://clara.io
 */
function It(e,t){// normal is assumed to be normalized
this.normal=void 0!==e?e:new Et(1,0,0),this.constant=void 0!==t?t:0}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / http://clara.io
 */
function Nt(e,t,n,i,r,q){this.planes=[void 0!==e?e:new It,void 0!==t?t:new It,void 0!==n?n:new It,void 0!==i?i:new It,void 0!==r?r:new It,void 0!==q?q:new It]}Tt.DEFAULT_IMAGE=void 0,Tt.DEFAULT_MAPPING=300,Tt.prototype=Object.assign(Object.create(r.prototype),{constructor:Tt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];var n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){// TODO: Move to THREE.Image
var i=this.image;void 0===i.uuid&&(i.uuid=yt.generateUUID()),t||void 0!==e.images[i.uuid]||(e.images[i.uuid]={uuid:i.uuid,url:function(e){var t;if(e instanceof HTMLCanvasElement)t=e;else{(t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")).width=e.width,t.height=e.height;var n=t.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height)}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}(i)}),n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(300===this.mapping){if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case se:e.x=e.x-Math.floor(e.x);break;case le:e.x=e.x<0?0:1;break;case ce:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case se:e.y=e.y-Math.floor(e.y);break;case le:e.y=e.y<0?0:1;break;case ce:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}this.flipY&&(e.y=1-e.y)}}}),Object.defineProperty(Tt.prototype,"needsUpdate",{set:function(e){!0===e&&this.version++}}),Object.assign(At.prototype,{isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this},add:function(e,t){return void 0!==t?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return void 0!==t?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=this.w,q=e.elements;return this.x=q[0]*t+q[4]*n+q[8]*i+q[12]*r,this.y=q[1]*t+q[5]*n+q[9]*i+q[13]*r,this.z=q[2]*t+q[6]*n+q[10]*i+q[14]*r,this.w=q[3]*t+q[7]*n+q[11]*i+q[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
// q is assumed to be normalized
this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var t,n,i,r,// margin to distinguish between 0 and 180 degrees
q=e.elements,a=q[0],o=q[4],s=q[8],l=q[1],c=q[5],h=q[9],u=q[2],d=q[6],m=q[10];if(Math.abs(o-l)<.01&&Math.abs(s-u)<.01&&Math.abs(h-d)<.01){// singularity found
// first check for identity matrix which must have +1 for all terms
// in leading diagonal and zero in other terms
if(Math.abs(o+l)<.1&&Math.abs(s+u)<.1&&Math.abs(h+d)<.1&&Math.abs(a+c+m-3)<.1)// this singularity is identity matrix so angle = 0
return this.set(1,0,0,0),this;// zero angle, arbitrary axis
// otherwise this singularity is angle = 180
t=Math.PI;var p=(a+1)/2,f=(c+1)/2,g=(m+1)/2,v=(o+l)/4,x=(s+u)/4,y=(h+d)/4;return p>f&&p>g?// m11 is the largest diagonal term
p<.01?(n=0,i=.707106781,r=.707106781):(i=v/(n=Math.sqrt(p)),r=x/n):f>g?// m22 is the largest diagonal term
f<.01?(n=.707106781,i=0,r=.707106781):(n=v/(i=Math.sqrt(f)),r=y/i):// m33 is the largest diagonal term so base result on this
g<.01?(n=.707106781,i=.707106781,r=0):(n=x/(r=Math.sqrt(g)),i=y/r),this.set(n,i,r,t),this;// return 180 deg rotation
}// as we have reached here there are no singularities so we can handle normally
var _=Math.sqrt((d-h)*(d-h)+(s-u)*(s-u)+(l-o)*(l-o));// used to normalize
return Math.abs(_)<.001&&(_=1),// prevent divide by zero, should not happen if matrix is orthogonal and should be
// caught by singularity test above, but I've left it in just in case
this.x=(d-h)/_,this.y=(s-u)/_,this.z=(l-o)/_,this.w=Math.acos((a+c+m-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){// assumes min < max, componentwise
return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(){var e,t;return function(n,i){return void 0===e&&(e=new At,t=new At),e.set(n,n,n,n),t.set(i,i,i,i),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,n){return void 0!==n&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}}),Rt.prototype=Object.assign(Object.create(r.prototype),{constructor:Rt,isWebGLRenderTarget:!0,setSize:function(e,t){this.width===e&&this.height===t||(this.width=e,this.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Lt.prototype=Object.create(Rt.prototype),Lt.prototype.constructor=Lt,Lt.prototype.isWebGLRenderTargetCube=!0,Ct.prototype=Object.create(Tt.prototype),Ct.prototype.constructor=Ct,Ct.prototype.isDataTexture=!0,Object.assign(Pt.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,q=-1/0,a=-1/0,o=0,s=e.length;o<s;o+=3){var l=e[o],c=e[o+1],h=e[o+2];l<t&&(t=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>q&&(q=c),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,q,a),this},setFromBufferAttribute:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,q=-1/0,a=-1/0,o=0,s=e.count;o<s;o++){var l=e.getX(o),c=e.getY(o),h=e.getZ(o);l<t&&(t=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>q&&(q=c),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,q,a),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new Et;return function(t,n){var i=e.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}}(),setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return void 0===e&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new Et),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return void 0===e&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new Et),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(){// Computes the world-axis-aligned bounding box of an object (including its children),
// accounting for both the object's, and children's, world transforms
var e,t,n,i=new Et;function r(r){var q=r.geometry;if(void 0!==q)if(q.isGeometry){var a=q.vertices;for(t=0,n=a.length;t<n;t++)i.copy(a[t]),i.applyMatrix4(r.matrixWorld),e.expandByPoint(i)}else if(q.isBufferGeometry){var o=q.attributes.position;if(void 0!==o)for(t=0,n=o.count;t<n;t++)i.fromBufferAttribute(o,t).applyMatrix4(r.matrixWorld),e.expandByPoint(i)}}return function(t){return e=this,t.updateMatrixWorld(!0),t.traverse(r),this}}(),containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){// This can potentially have a divide by zero if the box
// has a size dimension of 0.
return void 0===t&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new Et),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){// using 6 splitting planes to rule out intersections.
return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(){var e=new Et;return function(t){// If that point is inside the sphere, the AABB and sphere intersect.
// Find the point on the AABB closest to the sphere center.
return this.clampPoint(t.center,e),e.distanceToSquared(t.center)<=t.radius*t.radius}}(),intersectsPlane:function(e){// We compute the minimum and maximum dot product values. If those values
// are on the same side (back or front) of the plane, then there is no intersection.
var t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=e.constant&&n>=e.constant},intersectsTriangle:function(){// triangle centered vertices
var e=new Et,t=new Et,n=new Et,i=new Et,r=new Et,q=new Et,a=new Et,o=new Et,s=new Et,l=new Et;function c(i){var r,q;for(r=0,q=i.length-3;r<=q;r+=3){a.fromArray(i,r);// project the aabb onto the seperating axis
var o=s.x*Math.abs(a.x)+s.y*Math.abs(a.y)+s.z*Math.abs(a.z),l=e.dot(a),c=t.dot(a),h=n.dot(a);// project all 3 vertices of the triangle onto the seperating axis
// actual test, basically see if either of the most extreme of the triangle points intersects r
if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)// points of the projected triangle are outside the projected half-length of the aabb
// the axis is seperating and we can exit
return!1}return!0}return function(a){if(this.isEmpty())return!1;// compute box center and extents
this.getCenter(o),s.subVectors(this.max,o),// translate triangle to aabb origin
e.subVectors(a.a,o),t.subVectors(a.b,o),n.subVectors(a.c,o),// compute edge vectors for triangle
i.subVectors(t,e),r.subVectors(n,t),q.subVectors(e,n);// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
var h=[0,-i.z,i.y,0,-r.z,r.y,0,-q.z,q.y,i.z,0,-i.x,r.z,0,-r.x,q.z,0,-q.x,-i.y,i.x,0,-r.y,r.x,0,-q.y,q.x,0];return!!c(h)&&(!!c(// test 3 face normals from the aabb
h=[1,0,0,0,1,0,0,0,1])&&(// finally testing the face normal of the triangle
// use already existing triangle edge vectors here
l.crossVectors(i,r),c(h=[l.x,l.y,l.z])))}}(),clampPoint:function(e,t){return void 0===t&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new Et),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new Et;return function(t){return e.copy(t).clamp(this.min,this.max).sub(t).length()}}(),getBoundingSphere:function(){var e=new Et;return function(t){return void 0===t&&(console.warn("THREE.Box3: .getBoundingSphere() target is now required"),t=new Ot),this.getCenter(t.center),t.radius=.5*this.getSize(e).length(),t}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(){var e=[new Et,new Et,new Et,new Et,new Et,new Et,new Et,new Et];return function(t){// transform of empty box is an empty box.
return this.isEmpty()?this:(// NOTE: I am using a binary pattern to specify all 2^3 combinations below
e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),// 000
e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),// 001
e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),// 010
e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),// 011
e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),// 100
e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),// 101
e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),// 110
e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),// 111
this.setFromPoints(e),this)}}(),translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}),Object.assign(Ot.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(){var e=new Pt;return function(t,n){var i=this.center;void 0!==n?i.copy(n):e.setFromPoints(t).getCenter(i);for(var r=0,q=0,a=t.length;q<a;q++)r=Math.max(r,i.distanceToSquared(t[q]));return this.radius=Math.sqrt(r),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return this.radius<=0},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){var n=this.center.distanceToSquared(e);return void 0===t&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new Et),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return void 0===e&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Pt),e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}}),Object.assign(It.prototype,{set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(){var e=new Et,t=new Et;return function(n,i,r){var q=e.subVectors(r,i).cross(t.subVectors(n,i)).normalize();// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?
return this.setFromNormalAndCoplanarPoint(q,n),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){// Note: will lead to a divide by zero if the plane is invalid.
var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return void 0===t&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new Et),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(){var e=new Et;return function(t,n){void 0===n&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new Et);var i=t.delta(e),r=this.normal.dot(i);if(0===r)// line is coplanar, return origin
return 0===this.distanceToPoint(t.start)?n.copy(t.start):// Unsure if this is the correct method to handle this case.
void 0;var q=-(t.start.dot(this.normal)+this.constant)/r;return q<0||q>1?void 0:n.copy(i).multiplyScalar(q).add(t.start)}}(),intersectsLine:function(e){// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
var t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return void 0===e&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new Et),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var e=new Et,t=new Mt;return function(n,i){var r=i||t.getNormalMatrix(n),q=this.coplanarPoint(e).applyMatrix4(n),a=this.normal.applyMatrix3(r).normalize();return this.constant=-q.dot(a),this}}(),translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}),Object.assign(Nt.prototype,{set:function(e,t,n,i,r,q){var a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(q),this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){for(var t=this.planes,n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromMatrix:function(e){var t=this.planes,n=e.elements,i=n[0],r=n[1],q=n[2],a=n[3],o=n[4],s=n[5],l=n[6],c=n[7],h=n[8],u=n[9],d=n[10],m=n[11],p=n[12],f=n[13],g=n[14],v=n[15];return t[0].setComponents(a-i,c-o,m-h,v-p).normalize(),t[1].setComponents(a+i,c+o,m+h,v+p).normalize(),t[2].setComponents(a+r,c+s,m+u,v+f).normalize(),t[3].setComponents(a-r,c-s,m-u,v-f).normalize(),t[4].setComponents(a-q,c-l,m-d,v-g).normalize(),t[5].setComponents(a+q,c+l,m+d,v+g).normalize(),this},intersectsObject:function(){var e=new Ot;return function(t){var n=t.geometry;return null===n.boundingSphere&&n.computeBoundingSphere(),e.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(e)}}(),intersectsSprite:function(){var e=new Ot;return function(t){return e.center.set(0,0,0),e.radius=.7071067811865476,e.applyMatrix4(t.matrixWorld),this.intersectsSphere(e)}}(),intersectsSphere:function(e){for(var t=this.planes,n=e.center,i=-e.radius,r=0;r<6;r++){if(t[r].distanceToPoint(n)<i)return!1}return!0},intersectsBox:function(){var e=new Et,t=new Et;return function(n){for(var i=this.planes,r=0;r<6;r++){var q=i[r];e.x=q.normal.x>0?n.min.x:n.max.x,t.x=q.normal.x>0?n.max.x:n.min.x,e.y=q.normal.y>0?n.min.y:n.max.y,t.y=q.normal.y>0?n.max.y:n.min.y,e.z=q.normal.z>0?n.min.z:n.max.z,t.z=q.normal.z>0?n.max.z:n.min.z;var a=q.distanceToPoint(e),o=q.distanceToPoint(t);// if both outside plane, no intersection
if(a<0&&o<0)return!1}return!0}}(),containsPoint:function(e){for(var t=this.planes,n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}});var Dt={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",lights_pars_begin:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",lights_pars_maps:"#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",normal_fragment_maps:"#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\t\tscale *= float( gl_FrontFacing ) * 2.0 - 1.0;\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"},Ut={merge:function(e){for(var t={},n=0;n<e.length;n++){var i=this.clone(e[n]);for(var r in i)t[r]=i[r]}return t},clone:function(e){var t={};for(var n in e)for(var i in t[n]={},e[n]){var r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}return t}},Bt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Ft(e,t,n){return void 0===t&&void 0===n?this.set(e):this.setRGB(e,t,n)}Object.assign(Ft.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(){function e(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}return function(t,n,i){if(// h,s,l ranges are in 0.0 - 1.0
t=yt.euclideanModulo(t,1),n=yt.clamp(n,0,1),i=yt.clamp(i,0,1),0===n)this.r=this.g=this.b=i;else{var r=i<=.5?i*(1+n):i+n-i*n,q=2*i-r;this.r=e(q,r,t+1/3),this.g=e(q,r,t),this.b=e(q,r,t-1/3)}return this}}(),setStyle:function(e){function t(t){void 0!==t&&parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}var n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){// rgb / hsl
var i,r=n[1],q=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(q))// rgb(255,0,0) rgba(255,0,0,0.5)
return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(q))// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(q)){// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
var a=parseFloat(i[1])/360,o=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(a,o,s)}}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){// hex color
var l,c=(l=n[1]).length;if(3===c)// #ff0
return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===c)// #ff0000
return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}e&&e.length>0&&(void 0!==(l=Bt[e])?// red
this.setHex(l):// unknown color
console.warn("THREE.Color: Unknown color "+e));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return void 0===t&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){void 0===t&&(t=2);var n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(){var e=this.r,t=this.g,n=this.b;return this.r=e*e,this.g=t*t,this.b=n*n,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){// h,s,l ranges are in 0.0 - 1.0
void 0===e&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});var t,n,i=this.r,r=this.g,q=this.b,a=Math.max(i,r,q),o=Math.min(i,r,q),s=(o+a)/2;if(o===a)t=0,n=0;else{var l=a-o;switch(n=s<=.5?l/(a+o):l/(2-a-o),a){case i:t=(r-q)/l+(r<q?6:0);break;case r:t=(q-i)/l+2;break;case q:t=(i-r)/l+4}t/=6}return e.h=t,e.s=n,e.l=s,e},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(){var e={};return function(t,n,i){return this.getHSL(e),e.h+=t,e.s+=n,e.l+=i,this.setHSL(e.h,e.s,e.l),this}}(),add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return void 0===t&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}});
/**
 * Uniforms library for shared webgl shaders
 */
var zt={common:{diffuse:{value:new Ft(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new Ft(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new Mt}}},Ht={basic:{uniforms:Ut.merge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ut.merge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.fog,zt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ut.merge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ut.merge([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Ft(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},points:{uniforms:Ut.merge([zt.points,zt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ut.merge([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ut.merge([zt.common,zt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ut.merge([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.normal_vert,fragmentShader:Dt.normal_frag},
/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */
cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ut.merge([zt.common,zt.displacementmap,{referencePosition:{value:new Et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ut.merge([zt.lights,zt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */
/**
 * @author mrdoob / http://mrdoob.com/
 */
function kt(e){var t=new WeakMap;return{get://
function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);var i=t.get(n);i&&(e.deleteBuffer(i.buffer),t.delete(n))},update:function(n,i){n.isInterleavedBufferAttribute&&(n=n.data);var r=t.get(n);void 0===r?t.set(n,function(t,n){var i=t.array,r=t.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW,q=e.createBuffer();e.bindBuffer(n,q),e.bufferData(n,i,r),t.onUploadCallback();var a=e.FLOAT;return i instanceof Float32Array?a=e.FLOAT:i instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):i instanceof Uint16Array?a=e.UNSIGNED_SHORT:i instanceof Int16Array?a=e.SHORT:i instanceof Uint32Array?a=e.UNSIGNED_INT:i instanceof Int32Array?a=e.INT:i instanceof Int8Array?a=e.BYTE:i instanceof Uint8Array&&(a=e.UNSIGNED_BYTE),{buffer:q,type:a,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version}}(n,i)):r.version<n.version&&(function(t,n,i){var r=n.array,q=n.updateRange;e.bindBuffer(i,t),!1===n.dynamic?e.bufferData(i,r,e.STATIC_DRAW):-1===q.count?// Not using update ranges
e.bufferSubData(i,0,r):0===q.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(e.bufferSubData(i,q.offset*r.BYTES_PER_ELEMENT,r.subarray(q.offset,q.offset+q.count)),q.count=-1)}(r.buffer,n,i),r.version=n.version)}}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */function Gt(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._order=i||Gt.DefaultOrder}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function jt(){this.mask=1}Ht.physical={uniforms:Ut.merge([Ht.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},Gt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],Gt.DefaultOrder="XYZ",Object.defineProperties(Gt.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this.onChangeCallback()}}}),Object.assign(Gt.prototype,{isEuler:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){var i=yt.clamp,r=e.elements,q=r[0],a=r[4],o=r[8],s=r[1],l=r[5],c=r[9],h=r[2],u=r[6],d=r[10];// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
return"XYZ"===(t=t||this._order)?(this._y=Math.asin(i(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,q)):(this._x=Math.atan2(u,l),this._z=0)):"YXZ"===t?(this._x=Math.asin(-i(c,-1,1)),Math.abs(c)<.99999?(this._y=Math.atan2(o,d),this._z=Math.atan2(s,l)):(this._y=Math.atan2(-h,q),this._z=0)):"ZXY"===t?(this._x=Math.asin(i(u,-1,1)),Math.abs(u)<.99999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(s,q))):"ZYX"===t?(this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(u,d),this._z=Math.atan2(s,q)):(this._x=0,this._z=Math.atan2(-a,l))):"YZX"===t?(this._z=Math.asin(i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,q)):(this._x=0,this._y=Math.atan2(o,d))):"XZY"===t?(this._z=Math.asin(-i(a,-1,1)),Math.abs(a)<.99999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,q)):(this._x=Math.atan2(-c,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+t),this._order=t,!1!==n&&this.onChangeCallback(),this},setFromQuaternion:function(){var e=new bt;return function(t,n,i){return e.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e,n,i)}}(),setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(){// WARNING: this discards revolution information -bhouston
var e=new wt;return function(t){return e.setFromEuler(this),this.setFromQuaternion(e,t)}}(),equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this.onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new Et(this._x,this._y,this._z)},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}}),Object.assign(jt.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},test:function(e){return 0!=(this.mask&e.mask)}});
/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author elephantatwork / www.elephantatwork.ch
 */
var Vt=0;function Wt(){Object.defineProperty(this,"id",{value:Vt++}),this.uuid=yt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DefaultUp.clone();var e=new Et,t=new Gt,n=new wt,i=new Et(1,1,1);t.onChange(function(){n.setFromEuler(t,!1)}),n.onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{enumerable:!0,value:e},rotation:{enumerable:!0,value:t},quaternion:{enumerable:!0,value:n},scale:{enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new Mt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/
function Xt(){Wt.call(this),this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author arose / http://github.com/arose
 */
function Yt(e,t,n,i,r,q){Xt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=void 0!==r?r:.1,this.far=void 0!==q?q:2e3,this.updateProjectionMatrix()}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function Zt(e,t,n,i,r,q){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new Et,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new Ft,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=void 0!==q?q:0}Wt.DefaultUp=new Et(0,1,0),Wt.DefaultMatrixAutoUpdate=!0,Wt.prototype=Object.assign(Object.create(r.prototype),{constructor:Wt,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(e){this.matrix.multiplyMatrices(e,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){// assumes axis is normalized
this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){// assumes q is normalized
this.quaternion.copy(e)},rotateOnAxis:function(){// rotate object on axis in object space
// axis is assumed to be normalized
var e=new wt;return function(t,n){return e.setFromAxisAngle(t,n),this.quaternion.multiply(e),this}}(),rotateOnWorldAxis:function(){// rotate object on axis in world space
// axis is assumed to be normalized
// method assumes no rotated parent
var e=new wt;return function(t,n){return e.setFromAxisAngle(t,n),this.quaternion.premultiply(e),this}}(),rotateX:function(){var e=new Et(1,0,0);return function(t){return this.rotateOnAxis(e,t)}}(),rotateY:function(){var e=new Et(0,1,0);return function(t){return this.rotateOnAxis(e,t)}}(),rotateZ:function(){var e=new Et(0,0,1);return function(t){return this.rotateOnAxis(e,t)}}(),translateOnAxis:function(){// translate object by distance along axis in object space
// axis is assumed to be normalized
var e=new Et;return function(t,n){return e.copy(t).applyQuaternion(this.quaternion),this.position.add(e.multiplyScalar(n)),this}}(),translateX:function(){var e=new Et(1,0,0);return function(t){return this.translateOnAxis(e,t)}}(),translateY:function(){var e=new Et(0,1,0);return function(t){return this.translateOnAxis(e,t)}}(),translateZ:function(){var e=new Et(0,0,1);return function(t){return this.translateOnAxis(e,t)}}(),localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var e=new bt;return function(t){return t.applyMatrix4(e.getInverse(this.matrixWorld))}}(),lookAt:function(){// This method does not support objects with rotated and/or translated parent(s)
var e=new bt,t=new Et;return function(n,i,r){n.isVector3?t.copy(n):t.set(n,i,r),this.isCamera?e.lookAt(this.position,t,this.up):e.lookAt(t,this.position,this.up),this.quaternion.setFromRotationMatrix(e)}}(),add:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,e.dispatchEvent({type:"added"}),this.children.push(e)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}var n=this.children.indexOf(e);return-1!==n&&(e.parent=null,e.dispatchEvent({type:"removed"}),this.children.splice(n,1)),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n].getObjectByProperty(e,t);if(void 0!==r)return r}},getWorldPosition:function(e){return void 0===e&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new Et),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var e=new Et,t=new Et;return function(n){return void 0===n&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new wt),this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,n,t),n}}(),getWorldScale:function(){var e=new Et,t=new wt;return function(n){return void 0===n&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new Et),this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,t,n),n}}(),getWorldDirection:function(){var e=new wt;return function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new Et),this.getWorldQuaternion(e),t.set(0,0,1).applyQuaternion(e)}}(),raycast:function(){},traverse:function(e){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(!1!==this.visible){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(// update children
var t=this.children,n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},toJSON:function(e){// meta is a string when called from JSON.stringify
var t=void 0===e||"string"==typeof e,n={};// meta is a hash used to collect geometries, materials.
// not providing it implies that this is the root object
// being serialized.
t&&(// initialize meta obj
e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});// standard Object3D serialization
var i={};//
function r(t,n){return void 0===t[n.uuid]&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),i.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),void 0!==this.geometry){i.geometry=r(e.geometries,this.geometry);var q=this.geometry.parameters;if(void 0!==q&&void 0!==q.shapes){var a=q.shapes;if(Array.isArray(a))for(var o=0,s=a.length;o<s;o++){var l=a[o];r(e.shapes,l)}else r(e.shapes,a)}}if(void 0!==this.material)if(Array.isArray(this.material)){var c=[];for(o=0,s=this.material.length;o<s;o++)c.push(r(e.materials,this.material[o]));i.material=c}else i.material=r(e.materials,this.material);//
if(this.children.length>0){i.children=[];for(o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(t){var h=p(e.geometries),u=p(e.materials),d=p(e.textures),m=p(e.images);a=p(e.shapes);h.length>0&&(n.geometries=h),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),a.length>0&&(n.shapes=a)}return n.object=i,n;// extract data from the cache hash
// remove metadata on each item
// and return as array
function p(e){var t=[];for(var n in e){var i=e[n];delete i.metadata,t.push(i)}return t}},clone:function(e){return(new this.constructor).copy(this,e)},copy:function(e,t){if(void 0===t&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(var n=0;n<e.children.length;n++){var i=e.children[n];this.add(i.clone())}return this}}),Xt.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Xt,isCamera:!0,copy:function(e,t){return Wt.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this},getWorldDirection:function(){var e=new wt;return function(t){return void 0===t&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new Et),this.getWorldQuaternion(e),t.set(0,0,-1).applyQuaternion(e)}}(),updateMatrixWorld:function(e){Wt.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}}),Yt.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Yt,isOrthographicCamera:!0,copy:function(e,t){return Xt.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,q){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=q,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,q=n+e,a=i+t,o=i-t;if(null!==this.view&&this.view.enabled){var s=this.zoom/(this.view.width/this.view.fullWidth),l=this.zoom/(this.view.height/this.view.fullHeight),c=(this.right-this.left)/this.view.width,h=(this.top-this.bottom)/this.view.height;q=(r+=c*(this.view.offsetX/s))+c*(this.view.width/s),o=(a-=h*(this.view.offsetY/l))-h*(this.view.height/l)}this.projectionMatrix.makeOrthographic(r,q,a,o,this.near,this.far)},toJSON:function(e){var t=Wt.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}),Object.assign(Zt.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});
/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author bhouston / http://clara.io
 */
var Jt=0;// Geometry uses even numbers as Id
function Qt(){Object.defineProperty(this,"id",{value:Jt+=2}),this.uuid=yt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,// update flags
this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Kt(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=!0===n,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}//
function $t(e,t,n){Kt.call(this,new Int8Array(e),t,n)}function en(e,t,n){Kt.call(this,new Uint8Array(e),t,n)}function tn(e,t,n){Kt.call(this,new Uint8ClampedArray(e),t,n)}function nn(e,t,n){Kt.call(this,new Int16Array(e),t,n)}function rn(e,t,n){Kt.call(this,new Uint16Array(e),t,n)}function qn(e,t,n){Kt.call(this,new Int32Array(e),t,n)}function an(e,t,n){Kt.call(this,new Uint32Array(e),t,n)}function on(e,t,n){Kt.call(this,new Float32Array(e),t,n)}function sn(e,t,n){Kt.call(this,new Float64Array(e),t,n)}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function ln(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],// this.lineDistances = [];
this.boundingBox=null,this.boundingSphere=null,// update flags
this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function cn(e){if(0===e.length)return-1/0;for(var t=e[0],n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */Qt.prototype=Object.assign(Object.create(r.prototype),{constructor:Qt,isGeometry:!0,applyMatrix:function(e){for(var t=(new Mt).getNormalMatrix(e),n=0,i=this.vertices.length;n<i;n++){this.vertices[n].applyMatrix4(e)}for(n=0,i=this.faces.length;n<i;n++){var r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(var q=0,a=r.vertexNormals.length;q<a;q++)r.vertexNormals[q].applyMatrix3(t).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){// rotate geometry around world x-axis
var e=new bt;return function(t){return e.makeRotationX(t),this.applyMatrix(e),this}}(),rotateY:function(){// rotate geometry around world y-axis
var e=new bt;return function(t){return e.makeRotationY(t),this.applyMatrix(e),this}}(),rotateZ:function(){// rotate geometry around world z-axis
var e=new bt;return function(t){return e.makeRotationZ(t),this.applyMatrix(e),this}}(),translate:function(){// translate geometry
var e=new bt;return function(t,n,i){return e.makeTranslation(t,n,i),this.applyMatrix(e),this}}(),scale:function(){// scale geometry
var e=new bt;return function(t,n,i){return e.makeScale(t,n,i),this.applyMatrix(e),this}}(),lookAt:function(){var e=new Wt;return function(t){e.lookAt(t),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),fromBufferGeometry:function(e){var t=this,n=null!==e.index?e.index.array:void 0,i=e.attributes,r=i.position.array,q=void 0!==i.normal?i.normal.array:void 0,a=void 0!==i.color?i.color.array:void 0,o=void 0!==i.uv?i.uv.array:void 0,s=void 0!==i.uv2?i.uv2.array:void 0;void 0!==s&&(this.faceVertexUvs[1]=[]);for(var l=[],c=[],h=[],u=0,d=0;u<r.length;u+=3,d+=2)t.vertices.push(new Et(r[u],r[u+1],r[u+2])),void 0!==q&&l.push(new Et(q[u],q[u+1],q[u+2])),void 0!==a&&t.colors.push(new Ft(a[u],a[u+1],a[u+2])),void 0!==o&&c.push(new _t(o[d],o[d+1])),void 0!==s&&h.push(new _t(s[d],s[d+1]));function m(e,n,i,r){var u=new Zt(e,n,i,void 0!==q?[l[e].clone(),l[n].clone(),l[i].clone()]:[],void 0!==a?[t.colors[e].clone(),t.colors[n].clone(),t.colors[i].clone()]:[],r);t.faces.push(u),void 0!==o&&t.faceVertexUvs[0].push([c[e].clone(),c[n].clone(),c[i].clone()]),void 0!==s&&t.faceVertexUvs[1].push([h[e].clone(),h[n].clone(),h[i].clone()])}var p=e.groups;if(p.length>0)for(u=0;u<p.length;u++)for(var f=p[u],g=f.start,v=(d=g,g+f.count);d<v;d+=3)void 0!==n?m(n[d],n[d+1],n[d+2],f.materialIndex):m(d,d+1,d+2,f.materialIndex);else if(void 0!==n)for(u=0;u<n.length;u+=3)m(n[u],n[u+1],n[u+2]);else for(u=0;u<r.length/3;u+=3)m(u,u+1,u+2);return this.computeFaceNormals(),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){var e=new Et;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(e).negate(),this.translate(e.x,e.y,e.z),this}}(),normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,n=0===t?1:1/t,i=new bt;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var e=new Et,t=new Et,n=0,i=this.faces.length;n<i;n++){var r=this.faces[n],q=this.vertices[r.a],a=this.vertices[r.b],o=this.vertices[r.c];e.subVectors(o,a),t.subVectors(q,a),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){var t,n,i,r,q,a;for(void 0===e&&(e=!0),a=new Array(this.vertices.length),t=0,n=this.vertices.length;t<n;t++)a[t]=new Et;if(e){// vertex normals weighted by triangle areas
// http://www.iquilezles.org/www/articles/normals/normals.htm
var o,s,l,c=new Et,h=new Et;for(i=0,r=this.faces.length;i<r;i++)q=this.faces[i],o=this.vertices[q.a],s=this.vertices[q.b],l=this.vertices[q.c],c.subVectors(l,s),h.subVectors(o,s),c.cross(h),a[q.a].add(c),a[q.b].add(c),a[q.c].add(c)}else for(this.computeFaceNormals(),i=0,r=this.faces.length;i<r;i++)a[(q=this.faces[i]).a].add(q.normal),a[q.b].add(q.normal),a[q.c].add(q.normal);for(t=0,n=this.vertices.length;t<n;t++)a[t].normalize();for(i=0,r=this.faces.length;i<r;i++){var u=(q=this.faces[i]).vertexNormals;3===u.length?(u[0].copy(a[q.a]),u[1].copy(a[q.b]),u[2].copy(a[q.c])):(u[0]=a[q.a].clone(),u[1]=a[q.b].clone(),u[2]=a[q.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,n;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){var i=(n=this.faces[e]).vertexNormals;3===i.length?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,n,i,r;// save original normals
// - create temp variables on first access
//   otherwise just copy (for faster repeated calls)
for(n=0,i=this.faces.length;n<i;n++)for((r=this.faces[n]).__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]),e=0,t=r.vertexNormals.length;e<t;e++)r.__originalVertexNormals[e]?r.__originalVertexNormals[e].copy(r.vertexNormals[e]):r.__originalVertexNormals[e]=r.vertexNormals[e].clone();// use temp geometry to compute face and vertex normals for each morph
var q=new Qt;for(q.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){// create on first access
if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var a=this.morphNormals[e].faceNormals,o=this.morphNormals[e].vertexNormals;for(n=0,i=this.faces.length;n<i;n++)s=new Et,l={a:new Et,b:new Et,c:new Et},a.push(s),o.push(l)}var s,l,c=this.morphNormals[e];// set vertices to morph target
for(q.vertices=this.morphTargets[e].vertices,// compute morph normals
q.computeFaceNormals(),q.computeVertexNormals(),n=0,i=this.faces.length;n<i;n++)r=this.faces[n],s=c.faceNormals[n],l=c.vertexNormals[n],s.copy(r.normal),l.a.copy(r.vertexNormals[0]),l.b.copy(r.vertexNormals[1]),l.c.copy(r.vertexNormals[2])}// restore original normals
for(n=0,i=this.faces.length;n<i;n++)(r=this.faces[n]).normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Ot),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(e&&e.isGeometry){var i,r=this.vertices.length,q=this.vertices,a=e.vertices,o=this.faces,s=e.faces,l=this.faceVertexUvs[0],c=e.faceVertexUvs[0],h=this.colors,u=e.colors;void 0===n&&(n=0),void 0!==t&&(i=(new Mt).getNormalMatrix(t));// vertices
for(var d=0,m=a.length;d<m;d++){var p=a[d].clone();void 0!==t&&p.applyMatrix4(t),q.push(p)}// colors
for(d=0,m=u.length;d<m;d++)h.push(u[d].clone());// faces
for(d=0,m=s.length;d<m;d++){var f,g,v,x=s[d],y=x.vertexNormals,_=x.vertexColors;(f=new Zt(x.a+r,x.b+r,x.c+r)).normal.copy(x.normal),void 0!==i&&f.normal.applyMatrix3(i).normalize();for(var b=0,w=y.length;b<w;b++)g=y[b].clone(),void 0!==i&&g.applyMatrix3(i).normalize(),f.vertexNormals.push(g);f.color.copy(x.color);for(b=0,w=_.length;b<w;b++)v=_[b],f.vertexColors.push(v.clone());f.materialIndex=x.materialIndex+n,o.push(f)}// uvs
for(d=0,m=c.length;d<m;d++){var E=c[d],M=[];if(void 0!==E){for(b=0,w=E.length;b<w;b++)M.push(E[b].clone());l.push(M)}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e)},mergeMesh:function(e){e&&e.isMesh?(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e)},
/*
	 * Checks for duplicate vertices with hashmap.
	 * Duplicated vertices are removed
	 * and faces' vertices are updated.
	 */
mergeVertices:function(){var e,t,n,i,r,q,a,o,s={},l=[],c=[],h=Math.pow(10,4);// Hashmap for looking up vertices by position coordinates (and making sure they are unique)
for(n=0,i=this.vertices.length;n<i;n++)e=this.vertices[n],void 0===s[t=Math.round(e.x*h)+"_"+Math.round(e.y*h)+"_"+Math.round(e.z*h)]?(s[t]=n,l.push(this.vertices[n]),c[n]=l.length-1)://console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
c[n]=c[s[t]];// if faces are completely degenerate after merging vertices, we
// have to remove them from the geometry.
var u=[];for(n=0,i=this.faces.length;n<i;n++){(r=this.faces[n]).a=c[r.a],r.b=c[r.b],r.c=c[r.c],q=[r.a,r.b,r.c];// if any duplicate vertices are found in a Face3
// we have to remove the face as nothing can be saved
for(var d=0;d<3;d++)if(q[d]===q[(d+1)%3]){u.push(n);break}}for(n=u.length-1;n>=0;n--){var m=u[n];for(this.faces.splice(m,1),a=0,o=this.faceVertexUvs.length;a<o;a++)this.faceVertexUvs[a].splice(m,1)}// Use unique set of vertices
var p=this.vertices.length-l.length;return this.vertices=l,p},setFromPoints:function(e){this.vertices=[];for(var t=0,n=e.length;t<n;t++){var i=e[t];this.vertices.push(new Et(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){// tag faces
for(var e=this.faces,t=e.length,n=0;n<t;n++)e[n]._id=n;// sort faces
e.sort(function(e,t){return e.materialIndex-t.materialIndex});// sort uvs
var i,r,q=this.faceVertexUvs[0],a=this.faceVertexUvs[1];q&&q.length===t&&(i=[]),a&&a.length===t&&(r=[]);for(n=0;n<t;n++){var o=e[n]._id;i&&i.push(q[o]),r&&r.push(a[o])}i&&(this.faceVertexUvs[0]=i),r&&(this.faceVertexUvs[1]=r)},toJSON:function(){var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};// standard Geometry serialization
if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),void 0!==this.parameters){var t=this.parameters;for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}for(var i=[],r=0;r<this.vertices.length;r++){var q=this.vertices[r];i.push(q.x,q.y,q.z)}var a=[],o=[],s={},l=[],c={},h=[],u={};for(r=0;r<this.faces.length;r++){var d=this.faces[r],m=void 0!==this.faceVertexUvs[0][r],p=d.normal.length()>0,f=d.vertexNormals.length>0,g=1!==d.color.r||1!==d.color.g||1!==d.color.b,v=d.vertexColors.length>0,x=0;if(x=w(x=w(x=w(x=w(x=w(x=w(// isQuad
x=w(x=w(x,0,0),1,!0),2,!1),3,m),4,p),5,f),6,g),7,v),a.push(x),a.push(d.a,d.b,d.c),a.push(d.materialIndex),m){var y=this.faceVertexUvs[0][r];a.push(S(y[0]),S(y[1]),S(y[2]))}if(p&&a.push(E(d.normal)),f){var _=d.vertexNormals;a.push(E(_[0]),E(_[1]),E(_[2]))}if(g&&a.push(M(d.color)),v){var b=d.vertexColors;a.push(M(b[0]),M(b[1]),M(b[2]))}}function w(e,t,n){return n?e|1<<t:e&~(1<<t)}function E(e){var t=e.x.toString()+e.y.toString()+e.z.toString();return void 0!==s[t]?s[t]:(s[t]=o.length/3,o.push(e.x,e.y,e.z),s[t])}function M(e){var t=e.r.toString()+e.g.toString()+e.b.toString();return void 0!==c[t]?c[t]:(c[t]=l.length,l.push(e.getHex()),c[t])}function S(e){var t=e.x.toString()+e.y.toString();return void 0!==u[t]?u[t]:(u[t]=h.length/2,h.push(e.x,e.y),u[t])}return e.data={},e.data.vertices=i,e.data.normals=o,l.length>0&&(e.data.colors=l),h.length>0&&(e.data.uvs=[h]),// temporal backward compatibility
e.data.faces=a,e},clone:function(){
/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */
return(new Qt).copy(this)},copy:function(e){var t,n,i,r,q,a;// reset
this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,// name
this.name=e.name;// vertices
var o=e.vertices;for(t=0,n=o.length;t<n;t++)this.vertices.push(o[t].clone());// colors
var s=e.colors;for(t=0,n=s.length;t<n;t++)this.colors.push(s[t].clone());// faces
var l=e.faces;for(t=0,n=l.length;t<n;t++)this.faces.push(l[t].clone());// face vertex uvs
for(t=0,n=e.faceVertexUvs.length;t<n;t++){var c=e.faceVertexUvs[t];for(void 0===this.faceVertexUvs[t]&&(this.faceVertexUvs[t]=[]),i=0,r=c.length;i<r;i++){var h=c[i],u=[];for(q=0,a=h.length;q<a;q++){var d=h[q];u.push(d.clone())}this.faceVertexUvs[t].push(u)}}// morph targets
var m=e.morphTargets;for(t=0,n=m.length;t<n;t++){var p={};// vertices
if(p.name=m[t].name,void 0!==m[t].vertices)for(p.vertices=[],i=0,r=m[t].vertices.length;i<r;i++)p.vertices.push(m[t].vertices[i].clone());// normals
if(void 0!==m[t].normals)for(p.normals=[],i=0,r=m[t].normals.length;i<r;i++)p.normals.push(m[t].normals[i].clone());this.morphTargets.push(p)}// morph normals
var f=e.morphNormals;for(t=0,n=f.length;t<n;t++){var g={};// vertex normals
if(void 0!==f[t].vertexNormals)for(g.vertexNormals=[],i=0,r=f[t].vertexNormals.length;i<r;i++){var v=f[t].vertexNormals[i],x={};x.a=v.a.clone(),x.b=v.b.clone(),x.c=v.c.clone(),g.vertexNormals.push(x)}// face normals
if(void 0!==f[t].faceNormals)for(g.faceNormals=[],i=0,r=f[t].faceNormals.length;i<r;i++)g.faceNormals.push(f[t].faceNormals[i].clone());this.morphNormals.push(g)}// skin weights
var y=e.skinWeights;for(t=0,n=y.length;t<n;t++)this.skinWeights.push(y[t].clone());// skin indices
var _=e.skinIndices;for(t=0,n=_.length;t<n;t++)this.skinIndices.push(_[t].clone());// line distances
var b=e.lineDistances;for(t=0,n=b.length;t<n;t++)this.lineDistances.push(b[t]);// bounding box
var w=e.boundingBox;null!==w&&(this.boundingBox=w.clone());// bounding sphere
var E=e.boundingSphere;return null!==E&&(this.boundingSphere=E.clone()),// update flags
this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(Kt.prototype,"needsUpdate",{set:function(e){!0===e&&this.version++}}),Object.assign(Kt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=void 0!==e?e.length/this.itemSize:0,this.array=e,this},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var q=e[i];void 0===q&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),q=new Ft),t[n++]=q.r,t[n++]=q.g,t[n++]=q.b}return this},copyVector2sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var q=e[i];void 0===q&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),q=new _t),t[n++]=q.x,t[n++]=q.y}return this},copyVector3sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var q=e[i];void 0===q&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),q=new Et),t[n++]=q.x,t[n++]=q.y,t[n++]=q.z}return this},copyVector4sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var q=e[i];void 0===q&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),q=new At),t[n++]=q.x,t[n++]=q.y,t[n++]=q.z,t[n++]=q.w}return this},set:function(e,t){return void 0===t&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}}),$t.prototype=Object.create(Kt.prototype),$t.prototype.constructor=$t,en.prototype=Object.create(Kt.prototype),en.prototype.constructor=en,tn.prototype=Object.create(Kt.prototype),tn.prototype.constructor=tn,nn.prototype=Object.create(Kt.prototype),nn.prototype.constructor=nn,rn.prototype=Object.create(Kt.prototype),rn.prototype.constructor=rn,qn.prototype=Object.create(Kt.prototype),qn.prototype.constructor=qn,an.prototype=Object.create(Kt.prototype),an.prototype.constructor=an,on.prototype=Object.create(Kt.prototype),on.prototype.constructor=on,sn.prototype=Object.create(Kt.prototype),sn.prototype.constructor=sn,Object.assign(ln.prototype,{computeGroups:function(e){for(var t,n=[],i=void 0,r=e.faces,q=0;q<r.length;q++){var a=r[q];// materials
a.materialIndex!==i&&(i=a.materialIndex,void 0!==t&&(t.count=3*q-t.start,n.push(t)),t={start:3*q,materialIndex:i})}void 0!==t&&(t.count=3*q-t.start,n.push(t)),this.groups=n},fromGeometry:function(e){var t,n=e.faces,i=e.vertices,r=e.faceVertexUvs,q=r[0]&&r[0].length>0,a=r[1]&&r[1].length>0,o=e.morphTargets,s=o.length;if(s>0){t=[];for(var l=0;l<s;l++)t[l]=[];this.morphTargets.position=t}var c,h=e.morphNormals,u=h.length;if(u>0){c=[];for(l=0;l<u;l++)c[l]=[];this.morphTargets.normal=c}// skins
var d=e.skinIndices,m=e.skinWeights,p=d.length===i.length,f=m.length===i.length;//
for(l=0;l<n.length;l++){var g=n[l];this.vertices.push(i[g.a],i[g.b],i[g.c]);var v=g.vertexNormals;if(3===v.length)this.normals.push(v[0],v[1],v[2]);else{var x=g.normal;this.normals.push(x,x,x)}var y,_=g.vertexColors;if(3===_.length)this.colors.push(_[0],_[1],_[2]);else{var b=g.color;this.colors.push(b,b,b)}if(!0===q)void 0!==(y=r[0][l])?this.uvs.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",l),this.uvs.push(new _t,new _t,new _t));if(!0===a)void 0!==(y=r[1][l])?this.uvs2.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new _t,new _t,new _t));// morphs
for(var w=0;w<s;w++){var E=o[w].vertices;t[w].push(E[g.a],E[g.b],E[g.c])}for(w=0;w<u;w++){var M=h[w].vertexNormals[l];c[w].push(M.a,M.b,M.c)}// skins
p&&this.skinIndices.push(d[g.a],d[g.b],d[g.c]),f&&this.skinWeights.push(m[g.a],m[g.b],m[g.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this}});var hn=1;// BufferGeometry uses odd numbers as Id
function un(){Object.defineProperty(this,"id",{value:hn+=2}),this.uuid=yt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// BoxGeometry
function dn(e,t,n,i,r,q){Qt.call(this),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:q},this.fromBufferGeometry(new mn(e,t,n,i,r,q)),this.mergeVertices()}// BoxBufferGeometry
function mn(e,t,n,i,r,q){un.call(this),this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:q};var a=this;e=e||1,t=t||1,n=n||1,// segments
i=Math.floor(i)||1,r=Math.floor(r)||1;// buffers
var o=[],s=[],l=[],c=[],h=0,u=0;function d(e,t,n,i,r,q,d,m,p,f,g){var v,x,y=q/p,_=d/f,b=q/2,w=d/2,E=m/2,M=p+1,S=f+1,T=0,A=0,R=new Et;// generate vertices, normals and uvs
for(x=0;x<S;x++){var L=x*_-w;for(v=0;v<M;v++){var C=v*y-b;// set values to correct vector component
R[e]=C*i,R[t]=L*r,R[n]=E,// now apply vector to vertex buffer
s.push(R.x,R.y,R.z),// set values to correct vector component
R[e]=0,R[t]=0,R[n]=m>0?1:-1,// now apply vector to normal buffer
l.push(R.x,R.y,R.z),// uvs
c.push(v/p),c.push(1-x/f),// counters
T+=1}}// indices
// 1. you need three indices to draw a single face
// 2. a single segment consists of two faces
// 3. so we need to generate six (2*3) indices per segment
for(x=0;x<f;x++)for(v=0;v<p;v++){var P=h+v+M*x,O=h+v+M*(x+1),I=h+(v+1)+M*(x+1),N=h+(v+1)+M*x;// faces
o.push(P,O,N),o.push(O,I,N),// increase counter
A+=6}// add a group to the geometry. this will ensure multi material support
a.addGroup(u,A,g),// calculate new start value for groups
u+=A,// update total number of vertices
h+=T}// build each side of the box geometry
d("z","y","x",-1,-1,n,t,e,q=Math.floor(q)||1,r,0),// px
d("z","y","x",1,-1,n,t,-e,q,r,1),// nx
d("x","z","y",1,1,e,n,t,i,q,2),// py
d("x","z","y",1,-1,e,n,-t,i,q,3),// ny
d("x","y","z",1,-1,e,t,n,i,r,4),// pz
d("x","y","z",-1,-1,e,t,-n,i,r,5),// nz
// build geometry
this.setIndex(o),this.addAttribute("position",new on(s,3)),this.addAttribute("normal",new on(l,3)),this.addAttribute("uv",new on(c,2))}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// PlaneGeometry
function pn(e,t,n,i){Qt.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new fn(e,t,n,i)),this.mergeVertices()}// PlaneBufferGeometry
function fn(e,t,n,i){un.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};var r,q,a=(e=e||1)/2,o=(t=t||1)/2,s=Math.floor(n)||1,l=Math.floor(i)||1,c=s+1,h=l+1,u=e/s,d=t/l,m=[],p=[],f=[],g=[];// generate vertices, normals and uvs
for(q=0;q<h;q++){var v=q*d-o;for(r=0;r<c;r++){var x=r*u-a;p.push(x,-v,0),f.push(0,0,1),g.push(r/s),g.push(1-q/l)}}// indices
for(q=0;q<l;q++)for(r=0;r<s;r++){var y=r+c*q,_=r+c*(q+1),b=r+1+c*(q+1),w=r+1+c*q;// faces
m.push(y,_,w),m.push(_,b,w)}// build geometry
this.setIndex(m),this.addAttribute("position",new on(p,3)),this.addAttribute("normal",new on(f,3)),this.addAttribute("uv",new on(g,2))}un.prototype=Object.assign(Object.create(r.prototype),{constructor:un,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(cn(e)>65535?an:rn)(e,1):this.index=e},addAttribute:function(e,t){return t&&t.isBufferAttribute||t&&t.isInterleavedBufferAttribute?"index"===e?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),void this.setIndex(t)):(this.attributes[e]=t,this):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),void this.addAttribute(e,new Kt(arguments[1],arguments[2])))},getAttribute:function(e){return this.attributes[e]},removeAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:void 0!==n?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;void 0!==t&&(e.applyToBufferAttribute(t),t.needsUpdate=!0);var n=this.attributes.normal;void 0!==n&&((new Mt).getNormalMatrix(e).applyToBufferAttribute(n),n.needsUpdate=!0);return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(){// rotate geometry around world x-axis
var e=new bt;return function(t){return e.makeRotationX(t),this.applyMatrix(e),this}}(),rotateY:function(){// rotate geometry around world y-axis
var e=new bt;return function(t){return e.makeRotationY(t),this.applyMatrix(e),this}}(),rotateZ:function(){// rotate geometry around world z-axis
var e=new bt;return function(t){return e.makeRotationZ(t),this.applyMatrix(e),this}}(),translate:function(){// translate geometry
var e=new bt;return function(t,n,i){return e.makeTranslation(t,n,i),this.applyMatrix(e),this}}(),scale:function(){// scale geometry
var e=new bt;return function(t,n,i){return e.makeScale(t,n,i),this.applyMatrix(e),this}}(),lookAt:function(){var e=new Wt;return function(t){e.lookAt(t),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),center:function(){var e=new Et;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(e).negate(),this.translate(e.x,e.y,e.z),this}}(),setFromObject:function(e){// console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );
var t=e.geometry;if(e.isPoints||e.isLine){var n=new on(3*t.vertices.length,3),i=new on(3*t.colors.length,3);if(this.addAttribute("position",n.copyVector3sArray(t.vertices)),this.addAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var r=new on(t.lineDistances.length,1);this.addAttribute("lineDistance",r.copyArray(t.lineDistances))}null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){for(var t=[],n=0,i=e.length;n<i;n++){var r=e[n];t.push(r.x,r.y,r.z||0)}return this.addAttribute("position",new on(t,3)),this},updateFromObject:function(e){var t,n=e.geometry;if(e.isMesh){var i=n.__directGeometry;if(!0===n.elementsNeedUpdate&&(i=void 0,n.elementsNeedUpdate=!1),void 0===i)return this.fromGeometry(n);i.verticesNeedUpdate=n.verticesNeedUpdate,i.normalsNeedUpdate=n.normalsNeedUpdate,i.colorsNeedUpdate=n.colorsNeedUpdate,i.uvsNeedUpdate=n.uvsNeedUpdate,i.groupsNeedUpdate=n.groupsNeedUpdate,n.verticesNeedUpdate=!1,n.normalsNeedUpdate=!1,n.colorsNeedUpdate=!1,n.uvsNeedUpdate=!1,n.groupsNeedUpdate=!1,n=i}return!0===n.verticesNeedUpdate&&(void 0!==(t=this.attributes.position)&&(t.copyVector3sArray(n.vertices),t.needsUpdate=!0),n.verticesNeedUpdate=!1),!0===n.normalsNeedUpdate&&(void 0!==(t=this.attributes.normal)&&(t.copyVector3sArray(n.normals),t.needsUpdate=!0),n.normalsNeedUpdate=!1),!0===n.colorsNeedUpdate&&(void 0!==(t=this.attributes.color)&&(t.copyColorsArray(n.colors),t.needsUpdate=!0),n.colorsNeedUpdate=!1),n.uvsNeedUpdate&&(void 0!==(t=this.attributes.uv)&&(t.copyVector2sArray(n.uvs),t.needsUpdate=!0),n.uvsNeedUpdate=!1),n.lineDistancesNeedUpdate&&(void 0!==(t=this.attributes.lineDistance)&&(t.copyArray(n.lineDistances),t.needsUpdate=!0),n.lineDistancesNeedUpdate=!1),n.groupsNeedUpdate&&(n.computeGroups(e.geometry),this.groups=n.groups,n.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=(new ln).fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(3*e.vertices.length);if(this.addAttribute("position",new Kt(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){var n=new Float32Array(3*e.normals.length);this.addAttribute("normal",new Kt(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var i=new Float32Array(3*e.colors.length);this.addAttribute("color",new Kt(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var r=new Float32Array(2*e.uvs.length);this.addAttribute("uv",new Kt(r,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var q=new Float32Array(2*e.uvs2.length);this.addAttribute("uv2",new Kt(q,2).copyVector2sArray(e.uvs2))}// groups
// morphs
for(var a in this.groups=e.groups,e.morphTargets){for(var o=[],s=e.morphTargets[a],l=0,c=s.length;l<c;l++){var h=s[l],u=new on(3*h.length,3);o.push(u.copyVector3sArray(h))}this.morphAttributes[a]=o}// skinning
if(e.skinIndices.length>0){var d=new on(4*e.skinIndices.length,4);this.addAttribute("skinIndex",d.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var m=new on(4*e.skinWeights.length,4);this.addAttribute("skinWeight",m.copyVector4sArray(e.skinWeights))}//
return null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pt);var e=this.attributes.position;void 0!==e?this.boundingBox.setFromBufferAttribute(e):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var e=new Pt,t=new Et;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ot);var n=this.attributes.position;if(n){var i=this.boundingSphere.center;e.setFromBufferAttribute(n),e.getCenter(i);for(// hoping to find a boundingSphere with a radius smaller than the
// boundingSphere of the boundingBox: sqrt(3) smaller in the best case
var r=0,q=0,a=n.count;q<a;q++)t.x=n.getX(q),t.y=n.getY(q),t.z=n.getZ(q),r=Math.max(r,i.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){// backwards compatibility
},computeVertexNormals:function(){var e=this.index,t=this.attributes,n=this.groups;if(t.position){var i=t.position.array;if(void 0===t.normal)this.addAttribute("normal",new Kt(new Float32Array(i.length),3));else for(// reset existing normals to zero
var r=t.normal.array,q=0,a=r.length;q<a;q++)r[q]=0;var o,s,l,c=t.normal.array,h=new Et,u=new Et,d=new Et,m=new Et,p=new Et;// indexed elements
if(e){var f=e.array;0===n.length&&this.addGroup(0,f.length);for(var g=0,v=n.length;g<v;++g){var x=n[g],y=x.start;for(q=y,a=y+x.count;q<a;q+=3)o=3*f[q+0],s=3*f[q+1],l=3*f[q+2],h.fromArray(i,o),u.fromArray(i,s),d.fromArray(i,l),m.subVectors(d,u),p.subVectors(h,u),m.cross(p),c[o]+=m.x,c[o+1]+=m.y,c[o+2]+=m.z,c[s]+=m.x,c[s+1]+=m.y,c[s+2]+=m.z,c[l]+=m.x,c[l+1]+=m.y,c[l+2]+=m.z}}else// non-indexed elements (unconnected triangle soup)
for(q=0,a=i.length;q<a;q+=9)h.fromArray(i,q),u.fromArray(i,q+3),d.fromArray(i,q+6),m.subVectors(d,u),p.subVectors(h,u),m.cross(p),c[q]=m.x,c[q+1]=m.y,c[q+2]=m.z,c[q+3]=m.x,c[q+4]=m.y,c[q+5]=m.z,c[q+6]=m.x,c[q+7]=m.y,c[q+8]=m.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if(e&&e.isBufferGeometry){void 0===t&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var n=this.attributes;for(var i in n)if(void 0!==e.attributes[i])for(var r=n[i].array,q=e.attributes[i],a=q.array,o=0,s=q.itemSize*t;o<a.length;o++,s++)r[s]=a[o];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e)},normalizeNormals:function(){var e=new Et;return function(){for(var t=this.attributes.normal,n=0,i=t.count;n<i;n++)e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.normalize(),t.setXYZ(n,e.x,e.y,e.z)}}(),toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var e=new un,t=this.index.array,n=this.attributes;for(var i in n){for(var r=n[i],q=r.array,a=r.itemSize,o=new q.constructor(t.length*a),s=0,l=0,c=0,h=t.length;c<h;c++){s=t[c]*a;for(var u=0;u<a;u++)o[l++]=q[s++]}e.addAttribute(i,new Kt(o,a))}var d=this.groups;for(c=0,h=d.length;c<h;c++){var m=d[c];e.addGroup(m.start,m.count,m.materialIndex)}return e},toJSON:function(){var e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};// standard BufferGeometry serialization
if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),void 0!==this.parameters){var t=this.parameters;for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}e.data={attributes:{}};var i=this.index;if(null!==i){var r=Array.prototype.slice.call(i.array);e.data.index={type:i.array.constructor.name,array:r}}var q=this.attributes;for(var n in q){var a=q[n];r=Array.prototype.slice.call(a.array);e.data.attributes[n]={itemSize:a.itemSize,type:a.array.constructor.name,array:r,normalized:a.normalized}}var o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));var s=this.boundingSphere;return null!==s&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e},clone:function(){
/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */
return(new un).copy(this)},copy:function(e){var t,n,i;// reset
this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,// name
this.name=e.name;// index
var r=e.index;null!==r&&this.setIndex(r.clone());// attributes
var q=e.attributes;for(t in q){var a=q[t];this.addAttribute(t,a.clone())}// morph attributes
var o=e.morphAttributes;for(t in o){var s=[],l=o[t];// morphAttribute: array of Float32BufferAttributes
for(n=0,i=l.length;n<i;n++)s.push(l[n].clone());this.morphAttributes[t]=s}// groups
var c=e.groups;for(n=0,i=c.length;n<i;n++){var h=c[n];this.addGroup(h.start,h.count,h.materialIndex)}// bounding box
var u=e.boundingBox;null!==u&&(this.boundingBox=u.clone());// bounding sphere
var d=e.boundingSphere;return null!==d&&(this.boundingSphere=d.clone()),// draw range
this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),dn.prototype=Object.create(Qt.prototype),dn.prototype.constructor=dn,mn.prototype=Object.create(un.prototype),mn.prototype.constructor=mn,pn.prototype=Object.create(Qt.prototype),pn.prototype.constructor=pn,fn.prototype=Object.create(un.prototype),fn.prototype.constructor=fn;
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
var gn=0;function vn(){Object.defineProperty(this,"id",{value:gn++}),this.uuid=yt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=v,this.side=h,this.flatShading=!1,this.vertexColors=m,// THREE.NoColors, THREE.VertexColors, THREE.FaceColors
this.opacity=1,this.transparent=!1,this.blendSrc=P,this.blendDst=O,this.blendEquation=w,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=k,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,// override the renderer's default precision for this material
this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,// Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer
this.visible=!0,this.userData={},this.needsUpdate=!0}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>
 * }
 */
function xn(e){vn.call(this),this.type="MeshBasicMaterial",this.color=new Ft(16777215),// emissive
this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(e)}
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function yn(e){vn.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,// set to use scene fog
this.lights=!1,// set to use scene lights
this.clipping=!1,// set to use user-defined clipping planes
this.skinning=!1,// set to use skinning attribute streams
this.morphTargets=!1,// set to use morph targets
this.morphNormals=!1,// set to use morph normals
this.extensions={derivatives:!1,// set to use derivatives
fragDepth:!1,// set to use fragment depth values
drawBuffers:!1,// set to use draw buffers
shaderTextureLOD:!1},// When rendered geometry doesn't include these attributes but the material does,
// use these default values in WebGL. This avoids errors when buffer data is missing.
this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,void 0!==e&&(void 0!==e.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}
/**
 * @author bhouston / http://clara.io
 */
function _n(e,t){this.origin=void 0!==e?e:new Et,this.direction=void 0!==t?t:new Et}
/**
 * @author bhouston / http://clara.io
 */
function bn(e,t){this.start=void 0!==e?e:new Et,this.end=void 0!==t?t:new Et}
/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
function wn(e,t,n){this.a=void 0!==e?e:new Et,this.b=void 0!==t?t:new Et,this.c=void 0!==n?n:new Et}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 */
function En(e,t){Wt.call(this),this.type="Mesh",this.geometry=void 0!==e?e:new un,this.material=void 0!==t?t:new xn({color:16777215*Math.random()}),this.drawMode=st,this.updateMorphTargets()}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Mn(e,t){return Math.abs(t[1])-Math.abs(e[1])}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Sn(e,t,n,i,r,q,a,o,s,l){e=void 0!==e?e:[],t=void 0!==t?t:te,Tt.call(this,e,t,n,i,r,q,a,o,s,l),this.flipY=!1}vn.prototype=Object.assign(Object.create(r.prototype),{constructor:vn,isMaterial:!0,onBeforeCompile:function(){},setValues:function(e){if(void 0!==e)for(var t in e){var n=e[t];if(void 0!==n)// for backward compatability if shading is set in the constructor
if("shading"!==t){var i=this[t];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):// ensure overdraw is backwards-compatible with legacy boolean type
this[t]="overdraw"===t?Number(n):n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===n;else console.warn("THREE.Material: '"+t+"' parameter is undefined.")}},toJSON:function(e){var t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});var n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};// standard Material serialization
// TODO: Copied from Object3D.toJSON
function i(e){var t=[];for(var n in e){var i=e[n];delete i.metadata,t.push(i)}return t}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearCoat&&(n.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.size&&(n.size=this.size),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==v&&(n.blending=this.blending),!0===this.flatShading&&(n.flatShading=this.flatShading),this.side!==h&&(n.side=this.side),this.vertexColors!==m&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,// rotation (SpriteMaterial)
0!==this.rotation&&(n.rotation=this.rotation),1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(n.morphTargets=!0),!0===this.skinning&&(n.skinning=!0),!1===this.visible&&(n.visible=!1),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),t){var r=i(e.textures),q=i(e.images);r.length>0&&(n.textures=r),q.length>0&&(n.images=q)}return n},clone:function(){return(new this.constructor).copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.lights=e.lights,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.overdraw=e.overdraw,this.visible=e.visible,this.userData=JSON.parse(JSON.stringify(e.userData)),this.clipShadows=e.clipShadows,this.clipIntersection=e.clipIntersection;var t=e.clippingPlanes,n=null;if(null!==t){var i=t.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.shadowSide=e.shadowSide,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),xn.prototype=Object.create(vn.prototype),xn.prototype.constructor=xn,xn.prototype.isMeshBasicMaterial=!0,xn.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this},yn.prototype=Object.create(vn.prototype),yn.prototype.constructor=yn,yn.prototype.isShaderMaterial=!0,yn.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ut.clone(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this},yn.prototype.toJSON=function(e){var t=vn.prototype.toJSON.call(this,e);return t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t},Object.assign(_n.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return void 0===t&&(console.warn("THREE.Ray: .at() target is now required"),t=new Et),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(){var e=new Et;return function(t){return this.origin.copy(this.at(t,e)),this}}(),closestPointToPoint:function(e,t){void 0===t&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new Et),t.subVectors(e,this.origin);var n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(){var e=new Et;return function(t){var n=e.subVectors(t,this.origin).dot(this.direction);// point behind the ray
return n<0?this.origin.distanceToSquared(t):(e.copy(this.direction).multiplyScalar(n).add(this.origin),e.distanceToSquared(t))}}(),distanceSqToSegment:function(){var e=new Et,t=new Et,n=new Et;return function(i,r,q,a){// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h
// It returns the min distance between the ray and the segment
// defined by v0 and v1
// It can also set two optional targets :
// - The closest point on the ray
// - The closest point on the segment
e.copy(i).add(r).multiplyScalar(.5),t.copy(r).sub(i).normalize(),n.copy(this.origin).sub(e);var o,s,l,c,h=.5*i.distanceTo(r),u=-this.direction.dot(t),d=n.dot(this.direction),m=-n.dot(t),p=n.lengthSq(),f=Math.abs(1-u*u);if(f>0)if(// The ray and segment are not parallel.
s=u*d-m,c=h*f,(o=u*m-d)>=0)if(s>=-c)if(s<=c){// region 0
// Minimum at interior points of ray and segment.
var g=1/f;l=(o*=g)*(o+u*(s*=g)+2*d)+s*(u*o+s+2*m)+p}else// region 1
s=h,l=-(o=Math.max(0,-(u*s+d)))*o+s*(s+2*m)+p;else// region 5
s=-h,l=-(o=Math.max(0,-(u*s+d)))*o+s*(s+2*m)+p;else s<=-c?l=-(// region 4
o=Math.max(0,-(-u*h+d)))*o+(s=o>0?-h:Math.min(Math.max(-h,-m),h))*(s+2*m)+p:s<=c?(// region 3
o=0,l=(s=Math.min(Math.max(-h,-m),h))*(s+2*m)+p):l=-(// region 2
o=Math.max(0,-(u*h+d)))*o+(s=o>0?h:Math.min(Math.max(-h,-m),h))*(s+2*m)+p;else// Ray and segment are parallel.
s=u>0?-h:h,l=-(o=Math.max(0,-(u*s+d)))*o+s*(s+2*m)+p;return q&&q.copy(this.direction).multiplyScalar(o).add(this.origin),a&&a.copy(t).multiplyScalar(s).add(e),l}}(),intersectSphere:function(){var e=new Et;return function(t,n){e.subVectors(t.center,this.origin);var i=e.dot(this.direction),r=e.dot(e)-i*i,q=t.radius*t.radius;if(r>q)return null;var a=Math.sqrt(q-r),o=i-a,s=i+a;// t0 = first intersect point - entrance on front of sphere
// test to see if both t0 and t1 are behind the ray - if so, return null
return o<0&&s<0?null:// test to see if t0 is behind the ray:
// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
// in order to always return an intersect point that is in front of the ray.
o<0?this.at(s,n):this.at(o,n)}}(),intersectsSphere:function(e){return this.distanceToPoint(e.center)<=e.radius},distanceToPlane:function(e){var t=e.normal.dot(this.direction);if(0===t)// line is coplanar, return origin
return 0===e.distanceToPoint(this.origin)?0:null;// Null is preferable to undefined since undefined means.... it is undefined
var n=-(this.origin.dot(e.normal)+e.constant)/t;// Return if the ray never intersects the plane
return n>=0?n:null},intersectPlane:function(e,t){var n=this.distanceToPlane(e);return null===n?null:this.at(n,t)},intersectsPlane:function(e){// check if the ray lies on the plane first
var t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){var n,i,r,q,a,o,s=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,h=this.origin;return s>=0?(n=(e.min.x-h.x)*s,i=(e.max.x-h.x)*s):(n=(e.max.x-h.x)*s,i=(e.min.x-h.x)*s),l>=0?(r=(e.min.y-h.y)*l,q=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,q=(e.min.y-h.y)*l),n>q||r>i?null:(// These lines also handle the case where tmin or tmax is NaN
// (result of 0 * Infinity). x !== x returns true if x is NaN
(r>n||n!=n)&&(n=r),(q<i||i!=i)&&(i=q),c>=0?(a=(e.min.z-h.z)*c,o=(e.max.z-h.z)*c):(a=(e.max.z-h.z)*c,o=(e.min.z-h.z)*c),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),//return point closest to the ray (positive side)
i<0?null:this.at(n>=0?n:i,t)))},intersectsBox:function(){var e=new Et;return function(t){return null!==this.intersectBox(t,e)}}(),intersectTriangle:function(){// Compute the offset origin, edges, and normal.
var e=new Et,t=new Et,n=new Et,i=new Et;return function(r,q,a,o,s){// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
t.subVectors(q,r),n.subVectors(a,r),i.crossVectors(t,n);// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
var l,c=this.direction.dot(i);if(c>0){if(o)return null;l=1}else{if(!(c<0))return null;l=-1,c=-c}e.subVectors(this.origin,r);var h=l*this.direction.dot(n.crossVectors(e,n));// b1 < 0, no intersection
if(h<0)return null;var u=l*this.direction.dot(t.cross(e));// b2 < 0, no intersection
if(u<0)return null;// b1+b2 > 1, no intersection
if(h+u>c)return null;// Line intersects triangle, check if ray does.
var d=-l*e.dot(i);// t < 0, no intersection
return d<0?null:this.at(d/c,s);// Ray intersects triangle.
}}(),applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}),Object.assign(bn.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return void 0===e&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new Et),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return void 0===e&&(console.warn("THREE.Line3: .delta() target is now required"),e=new Et),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return void 0===t&&(console.warn("THREE.Line3: .at() target is now required"),t=new Et),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(){var e=new Et,t=new Et;return function(n,i){e.subVectors(n,this.start),t.subVectors(this.end,this.start);var r=t.dot(t),q=t.dot(e)/r;return i&&(q=yt.clamp(q,0,1)),q}}(),closestPointToPoint:function(e,t,n){var i=this.closestPointToPointParameter(e,t);return void 0===n&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new Et),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}}),Object.assign(wn,{getNormal:function(){var e=new Et;return function(t,n,i,r){void 0===r&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new Et),r.subVectors(i,n),e.subVectors(t,n),r.cross(e);var q=r.lengthSq();return q>0?r.multiplyScalar(1/Math.sqrt(q)):r.set(0,0,0)}}(),// static/instance method to calculate barycentric coordinates
// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
getBarycoord:function(){var e=new Et,t=new Et,n=new Et;return function(i,r,q,a,o){e.subVectors(a,r),t.subVectors(q,r),n.subVectors(i,r);var s=e.dot(e),l=e.dot(t),c=e.dot(n),h=t.dot(t),u=t.dot(n),d=s*h-l*l;// collinear or singular triangle
if(void 0===o&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),o=new Et),0===d)// arbitrary location outside of triangle?
// not sure if this is the best idea, maybe should be returning undefined
return o.set(-2,-1,-1);var m=1/d,p=(h*c-l*u)*m,f=(s*u-l*c)*m;// barycentric coordinates must always sum to 1
return o.set(1-p-f,f,p)}}(),containsPoint:function(){var e=new Et;return function(t,n,i,r){return wn.getBarycoord(t,n,i,r,e),e.x>=0&&e.y>=0&&e.x+e.y<=1}}()}),Object.assign(wn.prototype,{set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){var e=new Et,t=new Et;return function(){return e.subVectors(this.c,this.b),t.subVectors(this.a,this.b),.5*e.cross(t).length()}}(),getMidpoint:function(e){return void 0===e&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new Et),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return wn.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return void 0===e&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Et),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)},containsPoint:function(e){return wn.containsPoint(e,this.a,this.b,this.c)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(){var e=new It,t=[new bn,new bn,new bn],n=new Et,i=new Et;return function(r,q){void 0===q&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),q=new Et);var a=1/0;// project the point onto the plane of the triangle
// check if the projection lies within the triangle
if(e.setFromCoplanarPoints(this.a,this.b,this.c),e.projectPoint(r,n),!0===this.containsPoint(n))// if so, this is the closest point
q.copy(n);else{// if not, the point falls outside the triangle. the target is the closest point to the triangle's edges or vertices
t[0].set(this.a,this.b),t[1].set(this.b,this.c),t[2].set(this.c,this.a);for(var o=0;o<t.length;o++){t[o].closestPointToPoint(n,!0,i);var s=n.distanceToSquared(i);s<a&&(a=s,q.copy(i))}}return q}}(),equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}),En.prototype=Object.assign(Object.create(Wt.prototype),{constructor:En,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return Wt.prototype.copy.call(this,e),this.drawMode=e.drawMode,void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this},updateMorphTargets:function(){var e,t,n,i=this.geometry;if(i.isBufferGeometry){var r=i.morphAttributes,q=Object.keys(r);if(q.length>0){var a=r[q[0]];if(void 0!==a)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},e=0,t=a.length;e<t;e++)n=a[e].name||String(e),this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e}}else{var o=i.morphTargets;if(void 0!==o&&o.length>0)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},e=0,t=o.length;e<t;e++)n=o[e].name||String(e),this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e}},raycast:function(){var e=new bt,t=new _n,n=new Ot,i=new Et,r=new Et,q=new Et,a=new Et,o=new Et,s=new Et,l=new _t,c=new _t,h=new _t,m=new Et,p=new Et,f=new Et;function g(e,t,n,i,r,q,a){return wn.getBarycoord(e,t,n,i,m),r.multiplyScalar(m.x),q.multiplyScalar(m.y),a.multiplyScalar(m.z),r.add(q).add(a),r.clone()}function v(e,t,n,i,r,q,a,o){if(null===(t.side===u?i.intersectTriangle(a,q,r,!0,o):i.intersectTriangle(r,q,a,t.side!==d,o)))return null;f.copy(o),f.applyMatrix4(e.matrixWorld);var s=n.ray.origin.distanceTo(f);return s<n.near||s>n.far?null:{distance:s,point:f.clone(),object:e}}function x(e,t,n,a,o,s,u,d){i.fromBufferAttribute(a,s),r.fromBufferAttribute(a,u),q.fromBufferAttribute(a,d);var m=v(e,e.material,t,n,i,r,q,p);if(m){o&&(l.fromBufferAttribute(o,s),c.fromBufferAttribute(o,u),h.fromBufferAttribute(o,d),m.uv=g(p,i,r,q,l,c,h));var f=new Zt(s,u,d);wn.getNormal(i,r,q,f.normal),m.face=f,m.faceIndex=s}return m}return function(u,d){var m,f=this.geometry,y=this.material,_=this.matrixWorld;if(void 0!==y&&(// Checking boundingSphere distance to ray
null===f.boundingSphere&&f.computeBoundingSphere(),n.copy(f.boundingSphere),n.applyMatrix4(_),!1!==u.ray.intersectsSphere(n)&&(//
e.getInverse(_),t.copy(u.ray).applyMatrix4(e),null===f.boundingBox||!1!==t.intersectsBox(f.boundingBox))))if(f.isBufferGeometry){var b,w,E,M,S,T=f.index,A=f.attributes.position,R=f.attributes.uv;if(null!==T)// indexed buffer geometry
for(M=0,S=T.count;M<S;M+=3)b=T.getX(M),w=T.getX(M+1),E=T.getX(M+2),(m=x(this,u,t,A,R,b,w,E))&&(m.faceIndex=Math.floor(M/3),// triangle number in indices buffer semantics
d.push(m));else if(void 0!==A)// non-indexed buffer geometry
for(M=0,S=A.count;M<S;M+=3)(m=x(this,u,t,A,R,b=M,w=M+1,E=M+2))&&d.push(m)}else if(f.isGeometry){var L,C,P,O,I=Array.isArray(y),N=f.vertices,D=f.faces,U=f.faceVertexUvs[0];U.length>0&&(O=U);for(var B=0,F=D.length;B<F;B++){var z=D[B],H=I?y[z.materialIndex]:y;if(void 0!==H){if(L=N[z.a],C=N[z.b],P=N[z.c],!0===H.morphTargets){var k=f.morphTargets,G=this.morphTargetInfluences;i.set(0,0,0),r.set(0,0,0),q.set(0,0,0);for(var j=0,V=k.length;j<V;j++){var W=G[j];if(0!==W){var X=k[j].vertices;i.addScaledVector(a.subVectors(X[z.a],L),W),r.addScaledVector(o.subVectors(X[z.b],C),W),q.addScaledVector(s.subVectors(X[z.c],P),W)}}i.add(L),r.add(C),q.add(P),L=i,C=r,P=q}if(m=v(this,H,u,t,L,C,P,p)){if(O&&O[B]){var Y=O[B];l.copy(Y[0]),c.copy(Y[1]),h.copy(Y[2]),m.uv=g(p,L,C,P,l,c,h)}m.face=z,m.faceIndex=B,d.push(m)}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Sn.prototype=Object.create(Tt.prototype),Sn.prototype.constructor=Sn,Sn.prototype.isCubeTexture=!0,Object.defineProperty(Sn.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});
/**
 * @author tschw
 *
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program, renderer )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [renderer] )
 *
 * 		uploads a uniform value(s)
 *  	the 'renderer' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (renderer factorizations):
 *
 * .upload( gl, seq, values, renderer )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 *
 * Methods of the top-level container (renderer factorizations):
 *
 * .setValue( gl, name, value )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .set( gl, obj, prop )
 *
 * 		sets uniform from object and property with same name than uniform
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 */
var Tn=new Tt,An=new Sn;// --- Base for inner nodes (including the root) ---
function Rn(){this.seq=[],this.map={}}// --- Utilities ---
// Array Caches (provide typed arrays for temporary by size)
var Ln=[],Cn=[],Pn=new Float32Array(16),On=new Float32Array(9);// Flattening for arrays of vectors and matrices
function In(e,t,n){var i=e[0];if(i<=0||i>0)return e;// unoptimized: ! isNaN( firstElem )
// see http://jacksondunstan.com/articles/983
var r=t*n,q=Ln[r];if(void 0===q&&(q=new Float32Array(r),Ln[r]=q),0!==t){i.toArray(q,0);for(var a=1,o=0;a!==t;++a)o+=n,e[a].toArray(q,o)}return q}// Texture unit allocation
function Nn(e,t){var n=Cn[t];void 0===n&&(n=new Int32Array(t),Cn[t]=n);for(var i=0;i!==t;++i)n[i]=e.allocTextureUnit();return n}// --- Setters ---
// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.
// Single scalar
function Dn(e,t){e.uniform1f(this.addr,t)}function Un(e,t){e.uniform1i(this.addr,t)}// Single float vector (from flat array or THREE.VectorN)
function Bn(e,t){void 0===t.x?e.uniform2fv(this.addr,t):e.uniform2f(this.addr,t.x,t.y)}function Fn(e,t){void 0!==t.x?e.uniform3f(this.addr,t.x,t.y,t.z):void 0!==t.r?e.uniform3f(this.addr,t.r,t.g,t.b):e.uniform3fv(this.addr,t)}function zn(e,t){void 0===t.x?e.uniform4fv(this.addr,t):e.uniform4f(this.addr,t.x,t.y,t.z,t.w)}// Single matrix (from flat array or MatrixN)
function Hn(e,t){e.uniformMatrix2fv(this.addr,!1,t.elements||t)}function kn(e,t){void 0===t.elements?e.uniformMatrix3fv(this.addr,!1,t):(On.set(t.elements),e.uniformMatrix3fv(this.addr,!1,On))}function Gn(e,t){void 0===t.elements?e.uniformMatrix4fv(this.addr,!1,t):(Pn.set(t.elements),e.uniformMatrix4fv(this.addr,!1,Pn))}// Single texture (2D / Cube)
function jn(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTexture2D(t||Tn,i)}function Vn(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTextureCube(t||An,i)}// Integer / Boolean vectors or arrays thereof (always flat arrays)
function Wn(e,t){e.uniform2iv(this.addr,t)}function Xn(e,t){e.uniform3iv(this.addr,t)}function Yn(e,t){e.uniform4iv(this.addr,t)}// Helper to pick the right setter for the singular case
// Array of scalars
function Zn(e,t){e.uniform1fv(this.addr,t)}function Jn(e,t){e.uniform1iv(this.addr,t)}// Array of vectors (flat or from THREE classes)
function Qn(e,t){e.uniform2fv(this.addr,In(t,this.size,2))}function Kn(e,t){e.uniform3fv(this.addr,In(t,this.size,3))}function $n(e,t){e.uniform4fv(this.addr,In(t,this.size,4))}// Array of matrices (flat or from THREE clases)
function ei(e,t){e.uniformMatrix2fv(this.addr,!1,In(t,this.size,4))}function ti(e,t){e.uniformMatrix3fv(this.addr,!1,In(t,this.size,9))}function ni(e,t){e.uniformMatrix4fv(this.addr,!1,In(t,this.size,16))}// Array of textures (2D / Cube)
function ii(e,t,n){var i=t.length,r=Nn(n,i);e.uniform1iv(this.addr,r);for(var q=0;q!==i;++q)n.setTexture2D(t[q]||Tn,r[q])}function ri(e,t,n){var i=t.length,r=Nn(n,i);e.uniform1iv(this.addr,r);for(var q=0;q!==i;++q)n.setTextureCube(t[q]||An,r[q])}// Helper to pick the right setter for a pure (bottom-level) array
// --- Uniform Classes ---
function qi(e,t,n){this.id=e,this.addr=n,this.setValue=function(e){switch(e){case 5126:return Dn;// FLOAT
case 35664:return Bn;// _VEC2
case 35665:return Fn;// _VEC3
case 35666:return zn;// _VEC4
case 35674:return Hn;// _MAT2
case 35675:return kn;// _MAT3
case 35676:return Gn;// _MAT4
case 35678:case 36198:return jn;// SAMPLER_2D, SAMPLER_EXTERNAL_OES
case 35680:return Vn;// SAMPLER_CUBE
case 5124:case 35670:return Un;// INT, BOOL
case 35667:case 35671:return Wn;// _VEC2
case 35668:case 35672:return Xn;// _VEC3
case 35669:case 35673:return Yn;// _VEC4
}}(t.type)}function ai(e,t,n){this.id=e,this.addr=n,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return Zn;// FLOAT
case 35664:return Qn;// _VEC2
case 35665:return Kn;// _VEC3
case 35666:return $n;// _VEC4
case 35674:return ei;// _MAT2
case 35675:return ti;// _MAT3
case 35676:return ni;// _MAT4
case 35678:return ii;// SAMPLER_2D
case 35680:return ri;// SAMPLER_CUBE
case 5124:case 35670:return Jn;// INT, BOOL
case 35667:case 35671:return Wn;// _VEC2
case 35668:case 35672:return Xn;// _VEC3
case 35669:case 35673:return Yn;// _VEC4
}}(t.type)}function oi(e){this.id=e,Rn.call(this)}oi.prototype.setValue=function(e,t){for(// Note: Don't need an extra 'renderer' parameter, since samplers
// are not allowed in structured uniforms.
var n=this.seq,i=0,r=n.length;i!==r;++i){var q=n[i];q.setValue(e,t[q.id])}};// --- Top-level ---
// Parser - builds up the property tree from the path strings
var si=/([\w\d_]+)(\])?(\[|\.)?/g;// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.
function li(e,t){e.seq.push(t),e.map[t.id]=t}function ci(e,t,n){var i=e.name,r=i.length;// reset RegExp object, because of the early exit of a previous run
for(si.lastIndex=0;;){var q=si.exec(i),a=si.lastIndex,o=q[1],s="]"===q[2],l=q[3];// convert to integer
if(s&&(o|=0),void 0===l||"["===l&&a+2===r){// bare name or "pure" bottom-level array "[0]" suffix
li(n,void 0===l?new qi(o,e,t):new ai(o,e,t));break}// step into inner node / create it in case it doesn't exist
var c=n.map[o];void 0===c&&li(n,c=new oi(o)),n=c}}// Root Container
function hi(e,t,n){Rn.call(this),this.renderer=n;for(var i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),r=0;r<i;++r){var q=e.getActiveUniform(t,r);ci(q,e.getUniformLocation(t,q.name),this)}}function ui(e,t,n){var i=e.createShader(t);// --enable-privileged-webgl-extension
// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );
return e.shaderSource(i,n),e.compileShader(i),!1===e.getShaderParameter(i,e.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile."),""!==e.getShaderInfoLog(i)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",t===e.VERTEX_SHADER?"vertex":"fragment",e.getShaderInfoLog(i),
/**
 * @author mrdoob / http://mrdoob.com/
 */
function(e){for(var t=e.split("\n"),n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join("\n")}(n)),i}
/**
 * @author mrdoob / http://mrdoob.com/
 */hi.prototype.setValue=function(e,t,n){var i=this.map[t];void 0!==i&&i.setValue(e,n,this.renderer)},hi.prototype.setOptional=function(e,t,n){var i=t[n];void 0!==i&&this.setValue(e,n,i)},// Static interface
hi.upload=function(e,t,n,i){for(var r=0,q=t.length;r!==q;++r){var a=t[r],o=n[a.id];!1!==o.needsUpdate&&// note: always updating when .needsUpdate is undefined
a.setValue(e,o.value,i)}},hi.seqWithValue=function(e,t){for(var n=[],i=0,r=e.length;i!==r;++i){var q=e[i];q.id in t&&n.push(q)}return n};var di=0;function mi(e){switch(e){case ht:return["Linear","( value )"];case ut:return["sRGB","( value )"];case mt:return["RGBE","( value )"];case pt:return["RGBM","( value, 7.0 )"];case ft:return["RGBM","( value, 16.0 )"];case gt:return["RGBD","( value, 256.0 )"];case dt:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+e)}}function pi(e,t){var n=mi(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function fi(e){return""!==e}function gi(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights)}function vi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function xi(e){return e.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,function(e,t){var n=Dt[t];if(void 0===n)throw new Error("Can not resolve #include <"+t+">");return xi(n)})}function yi(e){return e.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(e,t,n,i){for(var r="",q=parseInt(t);q<parseInt(n);q++)r+=i.replace(/\[ i \]/g,"[ "+q+" ]");return r})}function _i(e,t,n,i,r,q){var a=e.context,o=i.defines,s=r.vertexShader,h=r.fragmentShader,u="SHADOWMAP_TYPE_BASIC";q.shadowMapType===l?u="SHADOWMAP_TYPE_PCF":q.shadowMapType===c&&(u="SHADOWMAP_TYPE_PCF_SOFT");var d="ENVMAP_TYPE_CUBE",m="ENVMAP_MODE_REFLECTION",p="ENVMAP_BLENDING_MULTIPLY";if(q.envMap){switch(i.envMap.mapping){case te:case ne:d="ENVMAP_TYPE_CUBE";break;case ae:case oe:d="ENVMAP_TYPE_CUBE_UV";break;case ie:case re:d="ENVMAP_TYPE_EQUIREC";break;case qe:d="ENVMAP_TYPE_SPHERE"}switch(i.envMap.mapping){case ne:case re:m="ENVMAP_MODE_REFRACTION"}switch(i.combine){case X:p="ENVMAP_BLENDING_MULTIPLY";break;case Y:p="ENVMAP_BLENDING_MIX";break;case Z:p="ENVMAP_BLENDING_ADD"}}var f,g,v=e.gammaFactor>0?e.gammaFactor:1,x=function(e,t,n){return[(e=e||{}).derivatives||t.envMapCubeUV||t.bumpMap||t.normalMap||t.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(e.fragDepth||t.logarithmicDepthBuffer)&&n.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",e.drawBuffers&&n.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(e.shaderTextureLOD||t.envMap)&&n.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join("\n")}(i.extensions,q,t),y=function(e){var t=[];for(var n in e){var i=e[n];!1!==i&&t.push("#define "+n+" "+i)}return t.join("\n")}(o),_=a.createProgram();// console.log( 'building new program ' );
//
i.isRawShaderMaterial?((f=[y].filter(fi).join("\n")).length>0&&(f+="\n"),(g=[x,y].filter(fi).join("\n")).length>0&&(g+="\n")):(f=["precision "+q.precision+" float;","precision "+q.precision+" int;","#define SHADER_NAME "+r.name,y,q.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+v,"#define MAX_BONES "+q.maxBones,q.useFog&&q.fog?"#define USE_FOG":"",q.useFog&&q.fogExp?"#define FOG_EXP2":"",q.map?"#define USE_MAP":"",q.envMap?"#define USE_ENVMAP":"",q.envMap?"#define "+m:"",q.lightMap?"#define USE_LIGHTMAP":"",q.aoMap?"#define USE_AOMAP":"",q.emissiveMap?"#define USE_EMISSIVEMAP":"",q.bumpMap?"#define USE_BUMPMAP":"",q.normalMap?"#define USE_NORMALMAP":"",q.displacementMap&&q.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",q.specularMap?"#define USE_SPECULARMAP":"",q.roughnessMap?"#define USE_ROUGHNESSMAP":"",q.metalnessMap?"#define USE_METALNESSMAP":"",q.alphaMap?"#define USE_ALPHAMAP":"",q.vertexColors?"#define USE_COLOR":"",q.flatShading?"#define FLAT_SHADED":"",q.skinning?"#define USE_SKINNING":"",q.useVertexTexture?"#define BONE_TEXTURE":"",q.morphTargets?"#define USE_MORPHTARGETS":"",q.morphNormals&&!1===q.flatShading?"#define USE_MORPHNORMALS":"",q.doubleSided?"#define DOUBLE_SIDED":"",q.flipSided?"#define FLIP_SIDED":"",q.shadowMapEnabled?"#define USE_SHADOWMAP":"",q.shadowMapEnabled?"#define "+u:"",q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",q.logarithmicDepthBuffer&&t.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(fi).join("\n"),g=[x,"precision "+q.precision+" float;","precision "+q.precision+" int;","#define SHADER_NAME "+r.name,y,q.alphaTest?"#define ALPHATEST "+q.alphaTest:"","#define GAMMA_FACTOR "+v,q.useFog&&q.fog?"#define USE_FOG":"",q.useFog&&q.fogExp?"#define FOG_EXP2":"",q.map?"#define USE_MAP":"",q.envMap?"#define USE_ENVMAP":"",q.envMap?"#define "+d:"",q.envMap?"#define "+m:"",q.envMap?"#define "+p:"",q.lightMap?"#define USE_LIGHTMAP":"",q.aoMap?"#define USE_AOMAP":"",q.emissiveMap?"#define USE_EMISSIVEMAP":"",q.bumpMap?"#define USE_BUMPMAP":"",q.normalMap?"#define USE_NORMALMAP":"",q.specularMap?"#define USE_SPECULARMAP":"",q.roughnessMap?"#define USE_ROUGHNESSMAP":"",q.metalnessMap?"#define USE_METALNESSMAP":"",q.alphaMap?"#define USE_ALPHAMAP":"",q.vertexColors?"#define USE_COLOR":"",q.gradientMap?"#define USE_GRADIENTMAP":"",q.flatShading?"#define FLAT_SHADED":"",q.doubleSided?"#define DOUBLE_SIDED":"",q.flipSided?"#define FLIP_SIDED":"",q.shadowMapEnabled?"#define USE_SHADOWMAP":"",q.shadowMapEnabled?"#define "+u:"",q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",q.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",q.logarithmicDepthBuffer&&t.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",q.envMap&&t.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",q.toneMapping!==J?"#define TONE_MAPPING":"",q.toneMapping!==J?Dt.tonemapping_pars_fragment:"",// this code is required here because it is used by the toneMapping() function defined below
q.toneMapping!==J?function(e,t){var n;switch(t){case Q:n="Linear";break;case K:n="Reinhard";break;case $:n="Uncharted2";break;case ee:n="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+t)}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}("toneMapping",q.toneMapping):"",q.dithering?"#define DITHERING":"",q.outputEncoding||q.mapEncoding||q.envMapEncoding||q.emissiveMapEncoding?Dt.encodings_pars_fragment:"",// this code is required here because it is used by the various encoding/decoding function defined below
q.mapEncoding?pi("mapTexelToLinear",q.mapEncoding):"",q.envMapEncoding?pi("envMapTexelToLinear",q.envMapEncoding):"",q.emissiveMapEncoding?pi("emissiveMapTexelToLinear",q.emissiveMapEncoding):"",q.outputEncoding?function(e,t){var n=mi(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}("linearToOutputTexel",q.outputEncoding):"",q.depthPacking?"#define DEPTH_PACKING "+i.depthPacking:"","\n"].filter(fi).join("\n")),s=vi(s=gi(s=xi(s),q),q),h=vi(h=gi(h=xi(h),q),q);var b=f+(s=yi(s)),w=g+(h=yi(h)),E=ui(a,a.VERTEX_SHADER,b),M=ui(a,a.FRAGMENT_SHADER,w);a.attachShader(_,E),a.attachShader(_,M),// Force a particular attribute to index 0.
void 0!==i.index0AttributeName?a.bindAttribLocation(_,0,i.index0AttributeName):!0===q.morphTargets&&// programs with morphTargets displace position out of attribute 0
a.bindAttribLocation(_,0,"position"),a.linkProgram(_);var S,T,A=a.getProgramInfoLog(_).trim(),R=a.getShaderInfoLog(E).trim(),L=a.getShaderInfoLog(M).trim(),C=!0,P=!0;// console.log( '**VERTEX**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
// console.log( '**FRAGMENT**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );
return!1===a.getProgramParameter(_,a.LINK_STATUS)?(C=!1,console.error("THREE.WebGLProgram: shader error: ",a.getError(),"gl.VALIDATE_STATUS",a.getProgramParameter(_,a.VALIDATE_STATUS),"gl.getProgramInfoLog",A,R,L)):""!==A?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",A):""!==R&&""!==L||(P=!1),P&&(this.diagnostics={runnable:C,material:i,programLog:A,vertexShader:{log:R,prefix:f},fragmentShader:{log:L,prefix:g}}),// clean up
a.deleteShader(E),a.deleteShader(M),this.getUniforms=function(){return void 0===S&&(S=new hi(a,_,e)),S},this.getAttributes=function(){return void 0===T&&(T=function(e,t){for(var n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),r=0;r<i;r++){var q=e.getActiveAttrib(t,r).name;// console.log( 'THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:', name, i );
n[q]=e.getAttribLocation(t,q)}return n}(a,_)),T},// free resource
this.destroy=function(){a.deleteProgram(_),this.program=void 0},// DEPRECATED
Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),//
this.name=r.name,this.id=di++,this.code=n,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}
/**
 * @author mrdoob / http://mrdoob.com/
 */function bi(e,t,n){var i=[],r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow"},q=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering"];function a(e,t){var n;return e?e.isTexture?n=e.encoding:e.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),n=e.texture.encoding):n=ht,// add backwards compatibility for WebGLRenderer.gammaInput/gammaOutput parameter, should probably be removed at some point.
n===ht&&t&&(n=dt),n}this.getParameters=function(t,i,q,o,s,l,c){var h=r[t.type],m=c.isSkinnedMesh?function(e){var t=e.skeleton.bones;if(n.floatVertexTextures)return 1024;// default for when object is not specified
// ( for example when prebuilding shader to be used with multiple objects )
//
//  - leave some extra space for other uniforms
//  - limit here is ANGLE's 254 max uniform vectors
//    (up to 54 should be safe)
var i=n.maxVertexUniforms,r=Math.floor((i-20)/4),q=Math.min(r,t.length);return q<t.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+t.length+" bones. This GPU supports "+q+"."),0):q}(c):0,p=n.precision;// heuristics to create shader parameters according to lights in the scene
// (not to blow over maxLights budget)
null!==t.precision&&(p=n.getMaxPrecision(t.precision))!==t.precision&&console.warn("THREE.WebGLProgram.getParameters:",t.precision,"not supported, using",p,"instead.");var f=e.getRenderTarget();return{shaderID:h,precision:p,supportsVertexTextures:n.vertexTextures,outputEncoding:a(f?f.texture:null,e.gammaOutput),map:!!t.map,mapEncoding:a(t.map,e.gammaInput),envMap:!!t.envMap,envMapMode:t.envMap&&t.envMap.mapping,envMapEncoding:a(t.envMap,e.gammaInput),envMapCubeUV:!!t.envMap&&(t.envMap.mapping===ae||t.envMap.mapping===oe),lightMap:!!t.lightMap,aoMap:!!t.aoMap,emissiveMap:!!t.emissiveMap,emissiveMapEncoding:a(t.emissiveMap,e.gammaInput),bumpMap:!!t.bumpMap,normalMap:!!t.normalMap,displacementMap:!!t.displacementMap,roughnessMap:!!t.roughnessMap,metalnessMap:!!t.metalnessMap,specularMap:!!t.specularMap,alphaMap:!!t.alphaMap,gradientMap:!!t.gradientMap,combine:t.combine,vertexColors:t.vertexColors,fog:!!o,useFog:t.fog,fogExp:o&&o.isFogExp2,flatShading:t.flatShading,sizeAttenuation:t.sizeAttenuation,logarithmicDepthBuffer:n.logarithmicDepthBuffer,skinning:t.skinning&&m>0,maxBones:m,useVertexTexture:n.floatVertexTextures,morphTargets:t.morphTargets,morphNormals:t.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:i.directional.length,numPointLights:i.point.length,numSpotLights:i.spot.length,numRectAreaLights:i.rectArea.length,numHemiLights:i.hemi.length,numClippingPlanes:s,numClipIntersection:l,dithering:t.dithering,shadowMapEnabled:e.shadowMap.enabled&&c.receiveShadow&&q.length>0,shadowMapType:e.shadowMap.type,toneMapping:e.toneMapping,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:t.premultipliedAlpha,alphaTest:t.alphaTest,doubleSided:t.side===d,flipSided:t.side===u,depthPacking:void 0!==t.depthPacking&&t.depthPacking}},this.getProgramCode=function(t,n){var i=[];if(n.shaderID?i.push(n.shaderID):(i.push(t.fragmentShader),i.push(t.vertexShader)),void 0!==t.defines)for(var r in t.defines)i.push(r),i.push(t.defines[r]);for(var a=0;a<q.length;a++)i.push(n[q[a]]);return i.push(t.onBeforeCompile.toString()),i.push(e.gammaOutput),i.join()},this.acquireProgram=function(n,r,q,a){// Check if code has been already compiled
for(var o,s=0,l=i.length;s<l;s++){var c=i[s];if(c.code===a){++(o=c).usedTimes;break}}return void 0===o&&(o=new _i(e,t,a,n,r,q),i.push(o)),o},this.releaseProgram=function(e){if(0==--e.usedTimes){// Remove from unordered set
var t=i.indexOf(e);i[t]=i[i.length-1],i.pop(),// Free WebGL resources
e.destroy()}},// Exposed for resource monitoring & error feedback via renderer.info:
this.programs=i}
/**
 * @author fordacious / fordacious.github.io
 */
/**
 * @author mrdoob / http://mrdoob.com/
 */
function wi(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program&&t.program&&e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ei(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Mi(){var e={};return{get:function(t,n){var i=t.id+","+n.id,r=e[i];return void 0===r&&(// console.log( 'THREE.WebGLRenderLists:', hash );
r=new function(){var e=[],t=0,n=[],i=[];return{opaque:n,transparent:i,init:function(){t=0,n.length=0,i.length=0},push:function(r,q,a,o,s){var l=e[t];void 0===l?(l={id:r.id,object:r,geometry:q,material:a,program:a.program,renderOrder:r.renderOrder,z:o,group:s},e[t]=l):(l.id=r.id,l.object=r,l.geometry=q,l.material=a,l.program=a.program,l.renderOrder=r.renderOrder,l.z=o,l.group=s),(!0===a.transparent?i:n).push(l),t++},sort:function(){n.length>1&&n.sort(wi),i.length>1&&i.sort(Ei)}}},e[i]=r),r},dispose:function(){e={}}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */var Si=0;function Ti(){var e=new function(){var e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];var n;switch(t.type){case"DirectionalLight":n={direction:new Et,color:new Ft,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={position:new Et,direction:new Et,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={position:new Et,color:new Ft,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break;case"HemisphereLight":n={direction:new Et,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new Et,halfWidth:new Et,halfHeight:new Et}}return e[t.id]=n,n}}},t={id:Si++,hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},n=new Et,i=new bt,r=new bt;return{setup:function(q,a,o){for(var s=0,l=0,c=0,h=0,u=0,d=0,m=0,p=0,f=o.matrixWorldInverse,g=0,v=q.length;g<v;g++){var x=q[g],y=x.color,_=x.intensity,b=x.distance,w=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)s+=y.r*_,l+=y.g*_,c+=y.b*_;else if(x.isDirectionalLight){if((M=e.get(x)).color.copy(x.color).multiplyScalar(x.intensity),M.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),M.shadow=x.castShadow,x.castShadow){var E=x.shadow;M.shadowBias=E.bias,M.shadowRadius=E.radius,M.shadowMapSize=E.mapSize}t.directionalShadowMap[h]=w,t.directionalShadowMatrix[h]=x.shadow.matrix,t.directional[h]=M,h++}else if(x.isSpotLight)(M=e.get(x)).position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.color.copy(y).multiplyScalar(_),M.distance=b,M.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),M.coneCos=Math.cos(x.angle),M.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),M.decay=0===x.distance?0:x.decay,M.shadow=x.castShadow,x.castShadow&&(E=x.shadow,M.shadowBias=E.bias,M.shadowRadius=E.radius,M.shadowMapSize=E.mapSize),t.spotShadowMap[d]=w,t.spotShadowMatrix[d]=x.shadow.matrix,t.spot[d]=M,d++;else if(x.isRectAreaLight)// (a) intensity is the total visible light emitted
//uniforms.color.copy( color ).multiplyScalar( intensity / ( light.width * light.height * Math.PI ) );
// (b) intensity is the brightness of the light
(M=e.get(x)).color.copy(y).multiplyScalar(_),M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),// extract local rotation of light to derive width/height half vectors
r.identity(),i.copy(x.matrixWorld),i.premultiply(f),r.extractRotation(i),M.halfWidth.set(.5*x.width,0,0),M.halfHeight.set(0,.5*x.height,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),// TODO (abelnation): RectAreaLight distance?
// uniforms.distance = distance;
t.rectArea[m]=M,m++;else if(x.isPointLight)(M=e.get(x)).position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.color.copy(x.color).multiplyScalar(x.intensity),M.distance=x.distance,M.decay=0===x.distance?0:x.decay,M.shadow=x.castShadow,x.castShadow&&(E=x.shadow,M.shadowBias=E.bias,M.shadowRadius=E.radius,M.shadowMapSize=E.mapSize,M.shadowCameraNear=E.camera.near,M.shadowCameraFar=E.camera.far),t.pointShadowMap[u]=w,t.pointShadowMatrix[u]=x.shadow.matrix,t.point[u]=M,u++;else if(x.isHemisphereLight){var M;(M=e.get(x)).direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(f),M.direction.normalize(),M.skyColor.copy(x.color).multiplyScalar(_),M.groundColor.copy(x.groundColor).multiplyScalar(_),t.hemi[p]=M,p++}}t.ambient[0]=s,t.ambient[1]=l,t.ambient[2]=c,t.directional.length=h,t.spot.length=d,t.rectArea.length=m,t.point.length=u,t.hemi.length=p,t.hash=t.id+","+h+","+u+","+d+","+m+","+p+","+a.length},state:t}}
/**
 * @author Mugen87 / https://github.com/Mugen87
 */function Ai(){var e={};return{get:function(t,n){var i=t.id+","+n.id,r=e[i];return void 0===r&&(r=new function(){var e=new Ti,t=[],n=[],i=[];return{init:function(){t.length=0,n.length=0,i.length=0},state:{lightsArray:t,shadowsArray:n,spritesArray:i,lights:e},setupLights:function(i){e.setup(t,n,i)},pushLight:function(e){t.push(e)},pushShadow:function(e){n.push(e)},pushSprite:function(e){i.push(e)}}},e[i]=r),r},dispose:function(){e={}}}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / https://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */function Ri(e){vn.call(this),this.type="MeshDepthMaterial",this.depthPacking=vt,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(e)}
/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *
 *  referencePosition: <float>,
 *  nearDistance: <float>,
 *  farDistance: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>
 *
 * }
 */
function Li(e){vn.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new Et,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.lights=!1,this.setValues(e)}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function Ci(e,t,n){// init
for(var i=new Nt,r=new bt,q=new _t,a=new _t(n,n),o=new Et,s=new Et,c=1,m=2,p=1+(c|m),f=new Array(p),g=new Array(p),v={},x={0:u,1:h,2:d},y=[new Et(1,0,0),new Et(-1,0,0),new Et(0,0,1),new Et(0,0,-1),new Et(0,1,0),new Et(0,-1,0)],_=[new Et(0,1,0),new Et(0,1,0),new Et(0,1,0),new Et(0,1,0),new Et(0,0,1),new Et(0,0,-1)],b=[new At,new At,new At,new At,new At,new At],w=0;w!==p;++w){var E=0!=(w&c),M=0!=(w&m),S=new Ri({depthPacking:xt,morphTargets:E,skinning:M});f[w]=S;//
var T=new Li({morphTargets:E,skinning:M});g[w]=T}//
var A=this;function R(t,n,i,r,q,a){var o=t.geometry,s=null,l=f,h=t.customDepthMaterial;if(i&&(l=g,h=t.customDistanceMaterial),h)s=h;else{var u=!1;n.morphTargets&&(o&&o.isBufferGeometry?u=o.morphAttributes&&o.morphAttributes.position&&o.morphAttributes.position.length>0:o&&o.isGeometry&&(u=o.morphTargets&&o.morphTargets.length>0)),t.isSkinnedMesh&&!1===n.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",t);var d=t.isSkinnedMesh&&n.skinning,p=0;u&&(p|=c),d&&(p|=m),s=l[p]}if(e.localClippingEnabled&&!0===n.clipShadows&&0!==n.clippingPlanes.length){// in this case we need a unique material instance reflecting the
// appropriate state
var y=s.uuid,_=n.uuid,b=v[y];void 0===b&&(b={},v[y]=b);var w=b[_];void 0===w&&(w=s.clone(),b[_]=w),s=w}return s.visible=n.visible,s.wireframe=n.wireframe,s.side=null!=n.shadowSide?n.shadowSide:x[n.side],s.clipShadows=n.clipShadows,s.clippingPlanes=n.clippingPlanes,s.clipIntersection=n.clipIntersection,s.wireframeLinewidth=n.wireframeLinewidth,s.linewidth=n.linewidth,i&&s.isMeshDistanceMaterial&&(s.referencePosition.copy(r),s.nearDistance=q,s.farDistance=a),s}function L(n,r,q,a){if(!1!==n.visible){if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&n.castShadow&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,n.matrixWorld);var o=t.update(n),l=n.material;if(Array.isArray(l))for(var c=o.groups,h=0,u=c.length;h<u;h++){var d=c[h],m=l[d.materialIndex];if(m&&m.visible){var p=R(n,m,a,s,q.near,q.far);e.renderBufferDirect(q,null,o,p,n,d)}}else if(l.visible){p=R(n,l,a,s,q.near,q.far);e.renderBufferDirect(q,null,o,p,n,null)}}for(var f=n.children,g=0,v=f.length;g<v;g++)L(f[g],r,q,a)}}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l,this.render=function(t,n,l){if(!1!==A.enabled&&(!1!==A.autoUpdate||!1!==A.needsUpdate)&&0!==t.length){// TODO Clean up (needed in case of contextlost)
var c,h=e.context,u=e.state;// Set GL state for depth map.
u.disable(h.BLEND),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);for(var d=0,m=t.length;d<m;d++){var p=t[d],f=p.shadow,g=p&&p.isPointLight;if(void 0!==f){var v=f.camera;if(q.copy(f.mapSize),q.min(a),g){var x=q.x,w=q.y;// These viewports map a cube-map onto a 2D texture with the
// following orientation:
//
//  xzXZ
//   y Y
//
// X - Positive x direction
// x - Negative x direction
// Y - Positive y direction
// y - Negative y direction
// Z - Positive z direction
// z - Negative z direction
// positive X
b[0].set(2*x,w,x,w),// negative X
b[1].set(0,w,x,w),// positive Z
b[2].set(3*x,w,x,w),// negative Z
b[3].set(x,w,x,w),// positive Y
b[4].set(3*x,0,x,w),// negative Y
b[5].set(x,0,x,w),q.x*=4,q.y*=2}if(null===f.map){var E={minFilter:he,magFilter:he,format:Ce};f.map=new Rt(q.x,q.y,E),f.map.texture.name=p.name+".shadowMap",v.updateProjectionMatrix()}f.isSpotLightShadow&&f.update(p);var M=f.map,S=f.matrix;s.setFromMatrixPosition(p.matrixWorld),v.position.copy(s),g?(c=6,// for point lights we set the shadow matrix to be a translation-only matrix
// equal to inverse of the light's position
S.makeTranslation(-s.x,-s.y,-s.z)):(c=1,o.setFromMatrixPosition(p.target.matrixWorld),v.lookAt(o),v.updateMatrixWorld(),// compute shadow matrix
S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(v.projectionMatrix),S.multiply(v.matrixWorldInverse)),e.setRenderTarget(M),e.clear();// render shadow map for each cube face (if omni-directional) or
// run a single pass if not
for(var T=0;T<c;T++){if(g){o.copy(v.position),o.add(y[T]),v.up.copy(_[T]),v.lookAt(o),v.updateMatrixWorld();var R=b[T];u.viewport(R)}// update camera matrices and frustum
r.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),i.setFromMatrix(r),// set object matrices & frustum culling
L(n,l,v,g)}}else console.warn("THREE.WebGLShadowMap:",p,"has no shadow.")}A.needsUpdate=!1}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */function Pi(e,t,n,i,r,q,a,o,s){Tt.call(this,e,t,n,i,r,q,a,o,s),this.needsUpdate=!0}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function Oi(e,t,n,i,r){var q,a,o,s,l,c,h=new Et,u=new wt,d=new Et;function m(){var e=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),n=new Uint16Array([0,1,2,0,2,3]);q=t.createBuffer(),a=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,a),t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW),o=function(){var e=t.createProgram(),n=t.createShader(t.VERTEX_SHADER),i=t.createShader(t.FRAGMENT_SHADER);return t.shaderSource(n,["precision "+r.precision+" float;","#define SHADER_NAME SpriteMaterial","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 center;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float fogDepth;","void main() {","\tvUV = uvOffset + uv * uvScale;","\tvec2 alignedPosition = ( position - center ) * scale;","\tvec2 rotatedPosition;","\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","\tvec4 mvPosition;","\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","\tmvPosition.xy += rotatedPosition;","\tgl_Position = projectionMatrix * mvPosition;","\tfogDepth = - mvPosition.z;","}"].join("\n")),t.shaderSource(i,["precision "+r.precision+" float;","#define SHADER_NAME SpriteMaterial","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","varying float fogDepth;","void main() {","\tvec4 texture = texture2D( map, vUV );","\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","\tif ( gl_FragColor.a < alphaTest ) discard;","\tif ( fogType > 0 ) {","\t\tfloat fogFactor = 0.0;","\t\tif ( fogType == 1 ) {","\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );","\t\t} else {","\t\t\tconst float LOG2 = 1.442695;","\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );","\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","\t\t}","\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );","\t}","}"].join("\n")),t.compileShader(n),t.compileShader(i),t.attachShader(e,n),t.attachShader(e,i),t.linkProgram(e),e}(),s={position:t.getAttribLocation(o,"position"),uv:t.getAttribLocation(o,"uv")},l={uvOffset:t.getUniformLocation(o,"uvOffset"),uvScale:t.getUniformLocation(o,"uvScale"),rotation:t.getUniformLocation(o,"rotation"),center:t.getUniformLocation(o,"center"),scale:t.getUniformLocation(o,"scale"),color:t.getUniformLocation(o,"color"),map:t.getUniformLocation(o,"map"),opacity:t.getUniformLocation(o,"opacity"),modelViewMatrix:t.getUniformLocation(o,"modelViewMatrix"),projectionMatrix:t.getUniformLocation(o,"projectionMatrix"),fogType:t.getUniformLocation(o,"fogType"),fogDensity:t.getUniformLocation(o,"fogDensity"),fogNear:t.getUniformLocation(o,"fogNear"),fogFar:t.getUniformLocation(o,"fogFar"),fogColor:t.getUniformLocation(o,"fogColor"),fogDepth:t.getUniformLocation(o,"fogDepth"),alphaTest:t.getUniformLocation(o,"alphaTest")};var i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");i.width=8,i.height=8;var h=i.getContext("2d");h.fillStyle="white",h.fillRect(0,0,8,8),c=new Pi(i)}function p(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:t.id-e.id}this.render=function(r,f,g){if(0!==r.length){// setup gl
void 0===o&&m(),n.useProgram(o),n.initAttributes(),n.enableAttribute(s.position),n.enableAttribute(s.uv),n.disableUnusedAttributes(),n.disable(t.CULL_FACE),n.enable(t.BLEND),t.bindBuffer(t.ARRAY_BUFFER,q),t.vertexAttribPointer(s.position,2,t.FLOAT,!1,16,0),t.vertexAttribPointer(s.uv,2,t.FLOAT,!1,16,8),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,a),t.uniformMatrix4fv(l.projectionMatrix,!1,g.projectionMatrix.elements),n.activeTexture(t.TEXTURE0),t.uniform1i(l.map,0);var v=0,x=0,y=f.fog;y?(t.uniform3f(l.fogColor,y.color.r,y.color.g,y.color.b),y.isFog?(t.uniform1f(l.fogNear,y.near),t.uniform1f(l.fogFar,y.far),t.uniform1i(l.fogType,1),v=1,x=1):y.isFogExp2&&(t.uniform1f(l.fogDensity,y.density),t.uniform1i(l.fogType,2),v=2,x=2)):(t.uniform1i(l.fogType,0),v=0,x=0);// update positions and sort
for(var _=0,b=r.length;_<b;_++){(M=r[_]).modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld),M.z=-M.modelViewMatrix.elements[14]}r.sort(p);// render all sprites
var w=[],E=[];for(_=0,b=r.length;_<b;_++){var M,S=(M=r[_]).material;if(!1!==S.visible){M.onBeforeRender(e,f,g,void 0,S,void 0),t.uniform1f(l.alphaTest,S.alphaTest),t.uniformMatrix4fv(l.modelViewMatrix,!1,M.modelViewMatrix.elements),M.matrixWorld.decompose(h,u,d),w[0]=d.x,w[1]=d.y,E[0]=M.center.x-.5,E[1]=M.center.y-.5;var T=0;f.fog&&S.fog&&(T=x),v!==T&&(t.uniform1i(l.fogType,T),v=T),null!==S.map?(t.uniform2f(l.uvOffset,S.map.offset.x,S.map.offset.y),t.uniform2f(l.uvScale,S.map.repeat.x,S.map.repeat.y)):(t.uniform2f(l.uvOffset,0,0),t.uniform2f(l.uvScale,1,1)),t.uniform1f(l.opacity,S.opacity),t.uniform3f(l.color,S.color.r,S.color.g,S.color.b),t.uniform1f(l.rotation,S.rotation),t.uniform2fv(l.center,E),t.uniform2fv(l.scale,w),n.setBlending(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),n.buffers.depth.setTest(S.depthTest),n.buffers.depth.setMask(S.depthWrite),n.buffers.color.setMask(S.colorWrite),i.setTexture2D(S.map||c,0),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0),M.onAfterRender(e,f,g,void 0,S,void 0)}}// restore gl
n.enable(t.CULL_FACE),n.reset()}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ii(e,t,n,i,r,q,a){var o,s="undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext,l={};/* global WebGL2RenderingContext */ //
function c(e,t){if(e.width>t||e.height>t){if("data"in e)return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big ("+e.width+"x"+e.height+").");// Warning: Scaling through the canvas will only work with images that use
// premultiplied alpha.
var n=t/Math.max(e.width,e.height),i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return i.width=Math.floor(e.width*n),i.height=Math.floor(e.height*n),i.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,i.width,i.height),console.warn("THREE.WebGLRenderer: image is too big ("+e.width+"x"+e.height+"). Resized to "+i.width+"x"+i.height,e),i}return e}function h(e){return yt.isPowerOfTwo(e.width)&&yt.isPowerOfTwo(e.height)}function u(e,t){return e.generateMipmaps&&t&&e.minFilter!==he&&e.minFilter!==me}function d(t,n,r,q){e.generateMipmap(t),// Note: Math.log( x ) * Math.LOG2E used instead of Math.log2( x ) which is not supported by IE11
i.get(n).__maxMipLevel=Math.log(Math.max(r,q))*Math.LOG2E}// Fallback filters for non-power-of-2 textures
function m(t){return t===he||t===ue||t===de?e.NEAREST:e.LINEAR}//
function p(t){var n=t.target;n.removeEventListener("dispose",p),//
function(t){var n=i.get(t);if(t.image&&n.__image__webglTextureCube)// cube texture
e.deleteTexture(n.__image__webglTextureCube);else{// 2D texture
if(void 0===n.__webglInit)return;e.deleteTexture(n.__webglTexture)}// remove all webgl properties
i.remove(t)}(n),n.isVideoTexture&&delete l[n.id],a.memory.textures--}function f(t){var n=t.target;n.removeEventListener("dispose",f),function(t){var n=i.get(t),r=i.get(t.texture);if(!t)return;void 0!==r.__webglTexture&&e.deleteTexture(r.__webglTexture);t.depthTexture&&t.depthTexture.dispose();if(t.isWebGLRenderTargetCube)for(var q=0;q<6;q++)e.deleteFramebuffer(n.__webglFramebuffer[q]),n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[q]);else e.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer);i.remove(t.texture),i.remove(t)}//
(n),a.memory.textures--}function g(t,m){var f=i.get(t);if(t.isVideoTexture&&function(e){var t=e.id,n=a.render.frame;// Check the last frame we updated the VideoTexture
l[t]!==n&&(l[t]=n,e.update())}(t),t.version>0&&f.__version!==t.version){var g=t.image;if(void 0===g)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",t);else{if(!1!==g.complete)return void function(t,i,l){void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",p),t.__webglTexture=e.createTexture(),a.memory.textures++);n.activeTexture(e.TEXTURE0+l),n.bindTexture(e.TEXTURE_2D,t.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);var m=c(i.image,r.maxTextureSize);(function(e){return e.wrapS!==le||e.wrapT!==le||e.minFilter!==he&&e.minFilter!==me})(i)&&!1===h(m)&&(m=function(e){return e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageBitmap?(void 0===o&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),o.width=yt.floorPowerOfTwo(e.width),o.height=yt.floorPowerOfTwo(e.height),o.getContext("2d").drawImage(e,0,0,o.width,o.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+e.width+"x"+e.height+"). Resized to "+o.width+"x"+o.height,e),o):e}(m));var f=h(m),g=q.convert(i.format),x=q.convert(i.type);v(e.TEXTURE_2D,i,f);var y,_=i.mipmaps;if(i.isDepthTexture){// populate depth texture with dummy data
var b=e.DEPTH_COMPONENT;if(i.type===we){if(!s)throw new Error("Float Depth Texture only supported in WebGL2.0");b=e.DEPTH_COMPONENT32F}else s&&(// WebGL 2.0 requires signed internalformat for glTexImage2D
b=e.DEPTH_COMPONENT16);i.format===Ne&&b===e.DEPTH_COMPONENT&&i.type!==ye&&i.type!==be&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),i.type=ye,x=q.convert(i.type)),// Depth stencil textures need the DEPTH_STENCIL internal format
// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
i.format===De&&(b=e.DEPTH_STENCIL,// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
// DEPTH_STENCIL and type is not UNSIGNED_INT_24_8_WEBGL.
// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
i.type!==Ae&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),i.type=Ae,x=q.convert(i.type))),n.texImage2D(e.TEXTURE_2D,0,b,m.width,m.height,0,g,x,null)}else if(i.isDataTexture)// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(_.length>0&&f){for(var w=0,E=_.length;w<E;w++)y=_[w],n.texImage2D(e.TEXTURE_2D,w,g,y.width,y.height,0,g,x,y.data);i.generateMipmaps=!1,t.__maxMipLevel=_.length-1}else n.texImage2D(e.TEXTURE_2D,0,g,m.width,m.height,0,g,x,m.data),t.__maxMipLevel=0;else if(i.isCompressedTexture){for(var w=0,E=_.length;w<E;w++)y=_[w],i.format!==Ce&&i.format!==Le?n.getCompressedTextureFormats().indexOf(g)>-1?n.compressedTexImage2D(e.TEXTURE_2D,w,g,y.width,y.height,0,y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(e.TEXTURE_2D,w,g,y.width,y.height,0,g,x,y.data);t.__maxMipLevel=_.length-1}else// regular Texture (image, video, canvas)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(_.length>0&&f){for(var w=0,E=_.length;w<E;w++)y=_[w],n.texImage2D(e.TEXTURE_2D,w,g,g,x,y);i.generateMipmaps=!1,t.__maxMipLevel=_.length-1}else n.texImage2D(e.TEXTURE_2D,0,g,g,x,m),t.__maxMipLevel=0;u(i,f)&&d(e.TEXTURE_2D,i,m.width,m.height);t.__version=i.version,i.onUpdate&&i.onUpdate(i)}// Render targets
// Setup storage for target texture and bind it to correct framebuffer
(f,t,m);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",t)}}n.activeTexture(e.TEXTURE0+m),n.bindTexture(e.TEXTURE_2D,f.__webglTexture)}function v(n,a,o){var s;if(o?(e.texParameteri(n,e.TEXTURE_WRAP_S,q.convert(a.wrapS)),e.texParameteri(n,e.TEXTURE_WRAP_T,q.convert(a.wrapT)),e.texParameteri(n,e.TEXTURE_MAG_FILTER,q.convert(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,q.convert(a.minFilter))):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a.wrapS===le&&a.wrapT===le||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",a),e.texParameteri(n,e.TEXTURE_MAG_FILTER,m(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,m(a.minFilter)),a.minFilter!==he&&a.minFilter!==me&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",a)),s=t.get("EXT_texture_filter_anisotropic")){if(a.type===we&&null===t.get("OES_texture_float_linear"))return;if(a.type===Ee&&null===t.get("OES_texture_half_float_linear"))return;(a.anisotropy>1||i.get(a).__currentAnisotropy)&&(e.texParameterf(n,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,r.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy)}}function x(t,r,a,o){var s=q.convert(r.texture.format),l=q.convert(r.texture.type);n.texImage2D(o,0,s,r.width,r.height,0,s,l,null),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,a,o,i.get(r.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
function y(t,n){e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)):n.depthBuffer&&n.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)):// FIXME: We don't support !depth !stencil
e.renderbufferStorage(e.RENDERBUFFER,e.RGBA4,n.width,n.height),e.bindRenderbuffer(e.RENDERBUFFER,null)}// Setup resources for a Depth Texture for a FBO (needs an extension)
// Setup GL resources for a non-texture depth buffer
function _(t){var n=i.get(t),r=!0===t.isWebGLRenderTargetCube;if(t.depthTexture){if(r)throw new Error("target.depthTexture not supported in Cube render targets");!function(t,n){if(n&&n.isWebGLRenderTargetCube)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(e.FRAMEBUFFER,t),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");// upload an empty depth texture with framebuffer size
i.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),g(n.depthTexture,0);var r=i.get(n.depthTexture).__webglTexture;if(n.depthTexture.format===Ne)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else{if(n.depthTexture.format!==De)throw new Error("Unknown depthTexture format");e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0)}}(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(var q=0;q<6;q++)e.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[q]),n.__webglDepthbuffer[q]=e.createRenderbuffer(),y(n.__webglDepthbuffer[q],t)}else e.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),y(n.__webglDepthbuffer,t);e.bindFramebuffer(e.FRAMEBUFFER,null)}// Set up GL resources for the render target
this.setTexture2D=g,this.setTextureCube=function(t,o){var s=i.get(t);if(6===t.image.length)if(t.version>0&&s.__version!==t.version){s.__image__webglTextureCube||(t.addEventListener("dispose",p),s.__image__webglTextureCube=e.createTexture(),a.memory.textures++),n.activeTexture(e.TEXTURE0+o),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__image__webglTextureCube),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t.flipY);for(var l=t&&t.isCompressedTexture,m=t.image[0]&&t.image[0].isDataTexture,f=[],g=0;g<6;g++)f[g]=l||m?m?t.image[g].image:t.image[g]:c(t.image[g],r.maxCubemapSize);var x=f[0],y=h(x),_=q.convert(t.format),b=q.convert(t.type);for(v(e.TEXTURE_CUBE_MAP,t,y),g=0;g<6;g++)if(l)for(var w,E=f[g].mipmaps,M=0,S=E.length;M<S;M++)w=E[M],t.format!==Ce&&t.format!==Le?n.getCompressedTextureFormats().indexOf(_)>-1?n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+g,M,_,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+g,M,_,w.width,w.height,0,_,b,w.data);else m?n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,_,f[g].width,f[g].height,0,_,b,f[g].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,_,_,b,f[g]);s.__maxMipLevel=l?E.length-1:0,u(t,y)&&// We assume images for cube map have the same size.
d(e.TEXTURE_CUBE_MAP,t,x.width,x.height),s.__version=t.version,t.onUpdate&&t.onUpdate(t)}else n.activeTexture(e.TEXTURE0+o),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__image__webglTextureCube)},this.setTextureCubeDynamic=function(t,r){n.activeTexture(e.TEXTURE0+r),n.bindTexture(e.TEXTURE_CUBE_MAP,i.get(t).__webglTexture)},this.setupRenderTarget=function(t){var r=i.get(t),q=i.get(t.texture);t.addEventListener("dispose",f),q.__webglTexture=e.createTexture(),a.memory.textures++;var o=!0===t.isWebGLRenderTargetCube,s=h(t);// Setup framebuffer
if(o){r.__webglFramebuffer=[];for(var l=0;l<6;l++)r.__webglFramebuffer[l]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();// Setup color buffer
if(o){for(n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),v(e.TEXTURE_CUBE_MAP,t.texture,s),l=0;l<6;l++)x(r.__webglFramebuffer[l],t,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+l);u(t.texture,s)&&d(e.TEXTURE_CUBE_MAP,t.texture,t.width,t.height),n.bindTexture(e.TEXTURE_CUBE_MAP,null)}else n.bindTexture(e.TEXTURE_2D,q.__webglTexture),v(e.TEXTURE_2D,t.texture,s),x(r.__webglFramebuffer,t,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),u(t.texture,s)&&d(e.TEXTURE_2D,t.texture,t.width,t.height),n.bindTexture(e.TEXTURE_2D,null);// Setup depth and stencil buffers
t.depthBuffer&&_(t)},this.updateRenderTargetMipmap=function(t){var r=t.texture;if(u(r,h(t))){var q=t.isWebGLRenderTargetCube?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=i.get(r).__webglTexture;n.bindTexture(q,a),d(q,r,t.width,t.height),n.bindTexture(q,null)}}}
/**
 * @author thespite / http://www.twitter.com/thespite
 */function Ni(e,t){return{convert:function(n){var i;if(n===se)return e.REPEAT;if(n===le)return e.CLAMP_TO_EDGE;if(n===ce)return e.MIRRORED_REPEAT;if(n===he)return e.NEAREST;if(n===ue)return e.NEAREST_MIPMAP_NEAREST;if(n===de)return e.NEAREST_MIPMAP_LINEAR;if(n===me)return e.LINEAR;if(n===pe)return e.LINEAR_MIPMAP_NEAREST;if(n===fe)return e.LINEAR_MIPMAP_LINEAR;if(n===ge)return e.UNSIGNED_BYTE;if(n===Me)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Se)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Te)return e.UNSIGNED_SHORT_5_6_5;if(n===ve)return e.BYTE;if(n===xe)return e.SHORT;if(n===ye)return e.UNSIGNED_SHORT;if(n===_e)return e.INT;if(n===be)return e.UNSIGNED_INT;if(n===we)return e.FLOAT;if(n===Ee&&null!==(i=t.get("OES_texture_half_float")))return i.HALF_FLOAT_OES;if(n===Re)return e.ALPHA;if(n===Le)return e.RGB;if(n===Ce)return e.RGBA;if(n===Pe)return e.LUMINANCE;if(n===Oe)return e.LUMINANCE_ALPHA;if(n===Ne)return e.DEPTH_COMPONENT;if(n===De)return e.DEPTH_STENCIL;if(n===w)return e.FUNC_ADD;if(n===E)return e.FUNC_SUBTRACT;if(n===M)return e.FUNC_REVERSE_SUBTRACT;if(n===A)return e.ZERO;if(n===R)return e.ONE;if(n===L)return e.SRC_COLOR;if(n===C)return e.ONE_MINUS_SRC_COLOR;if(n===P)return e.SRC_ALPHA;if(n===O)return e.ONE_MINUS_SRC_ALPHA;if(n===I)return e.DST_ALPHA;if(n===N)return e.ONE_MINUS_DST_ALPHA;if(n===D)return e.DST_COLOR;if(n===U)return e.ONE_MINUS_DST_COLOR;if(n===B)return e.SRC_ALPHA_SATURATE;if((n===Ue||n===Be||n===Fe||n===ze)&&null!==(i=t.get("WEBGL_compressed_texture_s3tc"))){if(n===Ue)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Be)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fe)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ze)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((n===He||n===ke||n===Ge||n===je)&&null!==(i=t.get("WEBGL_compressed_texture_pvrtc"))){if(n===He)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ke)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ge)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===je)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Ve&&null!==(i=t.get("WEBGL_compressed_texture_etc1")))return i.COMPRESSED_RGB_ETC1_WEBGL;if((n===We||n===Xe||n===Ye||n===Ze||n===Je||n===Qe||n===Ke||n===$e||n===et||n===tt||n===nt||n===it||n===rt||n===qt)&&null!==(i=t.get("WEBGL_compressed_texture_astc")))return n;if((n===S||n===T)&&null!==(i=t.get("EXT_blend_minmax"))){if(n===S)return i.MIN_EXT;if(n===T)return i.MAX_EXT}return n===Ae&&null!==(i=t.get("WEBGL_depth_texture"))?i.UNSIGNED_INT_24_8_WEBGL:0}}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author greggman / http://games.greggman.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author tschw
 */function Di(e,t,n,i){Xt.call(this),this.type="PerspectiveCamera",this.fov=void 0!==e?e:50,this.zoom=1,this.near=void 0!==n?n:.1,this.far=void 0!==i?i:2e3,this.focus=10,this.aspect=void 0!==t?t:1,this.view=null,this.filmGauge=35,// width of the film (default in millimeters)
this.filmOffset=0,// horizontal film offset (same unit as gauge)
this.updateProjectionMatrix()}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ui(e){Di.call(this),this.cameras=e||[]}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Bi(e){var t=this,n=null,i=null,r=null,q=new bt,a=new bt;"undefined"!=typeof window&&"VRFrameData"in window&&(i=new window.VRFrameData,window.addEventListener("vrdisplaypresentchange",f,!1));var o=new bt,s=new wt,l=new Et,c=new Di;c.bounds=new At(0,0,.5,1),c.layers.enable(1);var h=new Di;h.bounds=new At(.5,0,.5,1),h.layers.enable(2);var u,d,m=new Ui([c,h]);//
function p(){return null!==n&&!0===n.isPresenting}function f(){if(p()){var i=n.getEyeParameters("left"),r=i.renderWidth,q=i.renderHeight;d=e.getPixelRatio(),u=e.getSize(),e.setDrawingBufferSize(2*r,q,1)}else t.enabled&&e.setDrawingBufferSize(u.width,u.height,d)}//
m.layers.enable(1),m.layers.enable(2),this.enabled=!1,this.userHeight=1.6,this.getDevice=function(){return n},this.setDevice=function(e){void 0!==e&&(n=e)},this.setPoseTarget=function(e){void 0!==e&&(r=e)},this.getCamera=function(e){if(null===n)return e;n.depthNear=e.near,n.depthFar=e.far,n.getFrameData(i);//
var u=n.stageParameters;u?q.fromArray(u.sittingToStandingTransform):q.makeTranslation(0,t.userHeight,0);var d=i.pose,p=null!==r?r:e;if(// We want to manipulate poseObject by its position and quaternion components since users may rely on them.
p.matrix.copy(q),p.matrix.decompose(p.position,p.quaternion,p.scale),null!==d.orientation&&(s.fromArray(d.orientation),p.quaternion.multiply(s)),null!==d.position&&(s.setFromRotationMatrix(q),l.fromArray(d.position),l.applyQuaternion(s),p.position.add(l)),p.updateMatrixWorld(),!1===n.isPresenting)return e;//
c.near=e.near,h.near=e.near,c.far=e.far,h.far=e.far,m.matrixWorld.copy(e.matrixWorld),m.matrixWorldInverse.copy(e.matrixWorldInverse),c.matrixWorldInverse.fromArray(i.leftViewMatrix),h.matrixWorldInverse.fromArray(i.rightViewMatrix),// TODO (mrdoob) Double check this code
a.getInverse(q),c.matrixWorldInverse.multiply(a),h.matrixWorldInverse.multiply(a);var f=p.parent;null!==f&&(o.getInverse(f.matrixWorld),c.matrixWorldInverse.multiply(o),h.matrixWorldInverse.multiply(o)),// envMap and Mirror needs camera.matrixWorld
c.matrixWorld.getInverse(c.matrixWorldInverse),h.matrixWorld.getInverse(h.matrixWorldInverse),c.projectionMatrix.fromArray(i.leftProjectionMatrix),h.projectionMatrix.fromArray(i.rightProjectionMatrix),// HACK (mrdoob)
// https://github.com/w3c/webvr/issues/203
m.projectionMatrix.copy(c.projectionMatrix);//
var g=n.getLayers();if(g.length){var v=g[0];null!==v.leftBounds&&4===v.leftBounds.length&&c.bounds.fromArray(v.leftBounds),null!==v.rightBounds&&4===v.rightBounds.length&&h.bounds.fromArray(v.rightBounds)}return m},this.getStandingMatrix=function(){return q},this.submitFrame=function(){p()&&n.submitFrame()},this.dispose=function(){"undefined"!=typeof window&&window.removeEventListener("vrdisplaypresentchange",f)}}
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 * @author tschw
 */function Fi(e){console.log("THREE.WebGLRenderer",q);var t=void 0!==(e=e||{}).canvas?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=void 0!==e.context?e.context:null,i=void 0!==e.alpha&&e.alpha,r=void 0===e.depth||e.depth,l=void 0===e.stencil||e.stencil,c=void 0!==e.antialias&&e.antialias,h=void 0===e.premultipliedAlpha||e.premultipliedAlpha,p=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,f=void 0!==e.powerPreference?e.powerPreference:"default",w=null,E=null;// public properties
this.domElement=t,this.context=null,// clearing
this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,// scene graph
this.sortObjects=!0,// user-defined clipping
this.clippingPlanes=[],this.localClippingEnabled=!1,// physically based shading
this.gammaFactor=2,// for backwards compatibility
this.gammaInput=!1,this.gammaOutput=!1,// physical lights
this.physicallyCorrectLights=!1,// tone mapping
this.toneMapping=Q,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,// morphs
this.maxMorphTargets=8,this.maxMorphNormals=4;// internal properties
var M,S,T,A,R,L,C,P,O,I,N,D,U,B,X,Y,Z,J,K,$=this,ee=!1,// internal state cache
te=null,ne=null,ie=-1,re="",qe=null,ae=null,oe=new At,se=new At,le=null,//
ce=0,//
he=t.width,ue=t.height,de=1,me=new At(0,0,he,ue),pe=new At(0,0,he,ue),fe=!1,// frustum
ve=new Nt,// clipping
xe=new
/**
 * @author tschw
 */
function(){var e=this,t=null,n=0,i=!1,r=!1,q=new It,a=new Mt,o={value:null,needsUpdate:!1};function s(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(t,n,i,r){var s=null!==t?t.length:0,l=null;if(0!==s){if(l=o.value,!0!==r||null===l){var c=i+4*s,h=n.matrixWorldInverse;a.getNormalMatrix(h),(null===l||l.length<c)&&(l=new Float32Array(c));for(var u=0,d=i;u!==s;++u,d+=4)q.copy(t[u]).applyMatrix4(h,a),q.normal.toArray(l,d),l[d+3]=q.constant}o.value=l,o.needsUpdate=!0}return e.numPlanes=s,l}this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(e,r,q){var a=0!==e.length||r||// enable state of previous frame - the clipping code has to
// run another frame in order to reset the state:
0!==n||i;return i=r,t=l(e,q,0),n=e.length,a},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,s()},this.setState=function(e,q,a,c,h,u){if(!i||null===e||0===e.length||r&&!a)// there's no local clipping
r?// there's no global clipping
l(null):s();else{var d=r?0:n,m=4*d,p=h.clippingState||null;o.value=p,// ensure unique state
p=l(e,c,m,u);for(var f=0;f!==m;++f)p[f]=t[f];h.clippingState=p,this.numIntersection=q?this.numPlanes:0,this.numPlanes+=d}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */,ye=!1,_e=!1,// camera matrices cache
be=new bt,Me=new Et;function Se(){return null===te?de:1}// initialize
try{var Te={alpha:i,depth:r,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:f};// event listeners must be registered before WebGL context is created, see #12753
if(t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Oe,!1),null===(M=n||t.getContext("webgl",Te)||t.getContext("experimental-webgl",Te)))throw null!==t.getContext("webgl")?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.");// Some experimental-webgl implementations do not have getShaderPrecisionFormat
void 0===M.getShaderPrecisionFormat&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){console.error("THREE.WebGLRenderer: "+e.message)}function Ae(){(S=new function(e){var t={};return{get:function(n){if(void 0!==t[n])return t[n];var i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return null===i&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]=i,i}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */(M)).get("WEBGL_depth_texture"),S.get("OES_texture_float"),S.get("OES_texture_float_linear"),S.get("OES_texture_half_float"),S.get("OES_texture_half_float_linear"),S.get("OES_standard_derivatives"),S.get("OES_element_index_uint"),S.get("ANGLE_instanced_arrays"),K=new Ni(M,S),T=new
/**
 * @author mrdoob / http://mrdoob.com/
 */
function(e,t,n){var i;function r(t){if("highp"===t){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var q=void 0!==n.precision?n.precision:"highp",a=r(q);a!==q&&(console.warn("THREE.WebGLRenderer:",q,"not supported, using",a,"instead."),q=a);var o=!0===n.logarithmicDepthBuffer,s=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),l=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),d=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),p=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),f=l>0,g=!!t.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==i)return i;var n=t.get("EXT_texture_filter_anisotropic");return i=null!==n?e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:r,precision:q,logarithmicDepthBuffer:o,maxTextures:s,maxVertexTextures:l,maxTextureSize:c,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:f,floatFragmentTextures:g,floatVertexTextures:f&&g}}(M,S,e),(A=new function(e,t,n){//
var i=new function(){var t=!1,n=new At,i=null,r=new At(0,0,0,0);return{setMask:function(n){i===n||t||(e.colorMask(n,n,n,n),i=n)},setLocked:function(e){t=e},setClear:function(t,i,q,a,o){!0===o&&(t*=a,i*=a,q*=a),n.set(t,i,q,a),!1===r.equals(n)&&(e.clearColor(t,i,q,a),r.copy(n))},reset:function(){t=!1,i=null,r.set(-1,0,0,0)}}},r=new function(){var t=!1,n=null,i=null,r=null;return{setTest:function(t){t?te(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(i){n===i||t||(e.depthMask(i),n=i)},setFunc:function(t){if(i!==t){if(t)switch(t){case F:e.depthFunc(e.NEVER);break;case z:e.depthFunc(e.ALWAYS);break;case H:e.depthFunc(e.LESS);break;case k:e.depthFunc(e.LEQUAL);break;case G:e.depthFunc(e.EQUAL);break;case j:e.depthFunc(e.GEQUAL);break;case V:e.depthFunc(e.GREATER);break;case W:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);i=t}},setLocked:function(e){t=e},setClear:function(t){r!==t&&(e.clearDepth(t),r=t)},reset:function(){t=!1,n=null,i=null,r=null}}},q=new function(){var t=!1,n=null,i=null,r=null,q=null,a=null,o=null,s=null,l=null;return{setTest:function(t){t?te(e.STENCIL_TEST):ne(e.STENCIL_TEST)},setMask:function(i){n===i||t||(e.stencilMask(i),n=i)},setFunc:function(t,n,a){i===t&&r===n&&q===a||(e.stencilFunc(t,n,a),i=t,r=n,q=a)},setOp:function(t,n,i){a===t&&o===n&&s===i||(e.stencilOp(t,n,i),a=t,o=n,s=i)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,i=null,r=null,q=null,a=null,o=null,s=null,l=null}}},l=e.getParameter(e.MAX_VERTEX_ATTRIBS),c=new Uint8Array(l),h=new Uint8Array(l),m=new Uint8Array(l),p={},f=null,w=null,E=null,M=null,S=null,T=null,A=null,R=null,L=null,C=!1,P=null,O=null,I=null,N=null,D=null,U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,Y=e.getParameter(e.VERSION);-1!==Y.indexOf("WebGL")?(X=parseFloat(/^WebGL\ ([0-9])/.exec(Y)[1]),B=X>=1):-1!==Y.indexOf("OpenGL ES")&&(X=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(Y)[1]),B=X>=2);var Z=null,J={},Q=new At,K=new At;function $(t,n,i){var r=new Uint8Array(4),q=e.createTexture();// 4 is required to match default unpack alignment of 4.
e.bindTexture(t,q),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var a=0;a<i;a++)e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,r);return q}var ee={};function te(t){!0!==p[t]&&(e.enable(t),p[t]=!0)}function ne(t){!1!==p[t]&&(e.disable(t),p[t]=!1)}function ie(t,i,r,q,a,o,s,l){if(t!==g?te(e.BLEND):ne(e.BLEND),t!==b){if(t!==E||l!==C)switch(t){case x:l?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE));break;case y:l?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR));break;case _:l?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.SRC_COLOR));break;default:l?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}M=null,S=null,T=null,A=null,R=null,L=null}else a=a||i,o=o||r,s=s||q,i===M&&a===A||(e.blendEquationSeparate(n.convert(i),n.convert(a)),M=i,A=a),r===S&&q===T&&o===R&&s===L||(e.blendFuncSeparate(n.convert(r),n.convert(q),n.convert(o),n.convert(s)),S=r,T=q,R=o,L=s);E=t,C=l}//
function re(t){P!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),P=t)}function qe(t){t!==a?(te(e.CULL_FACE),t!==O&&(t===o?e.cullFace(e.BACK):t===s?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ne(e.CULL_FACE),O=t}function ae(t,n,i){t?(te(e.POLYGON_OFFSET_FILL),N===n&&D===i||(e.polygonOffset(n,i),N=n,D=i)):ne(e.POLYGON_OFFSET_FILL)}// texture
function oe(t){void 0===t&&(t=e.TEXTURE0+U-1),Z!==t&&(e.activeTexture(t),Z=t)}return ee[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),// init
i.setClear(0,0,0,1),r.setClear(1),q.setClear(0),te(e.DEPTH_TEST),r.setFunc(k),re(!1),qe(o),te(e.CULL_FACE),te(e.BLEND),ie(v),{buffers:{color:i,depth:r,stencil:q},initAttributes://
function(){for(var e=0,t=c.length;e<t;e++)c[e]=0},enableAttribute:function(n){c[n]=1,0===h[n]&&(e.enableVertexAttribArray(n),h[n]=1),0!==m[n]&&(t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n,0),m[n]=0)},enableAttributeAndDivisor:function(n,i){c[n]=1,0===h[n]&&(e.enableVertexAttribArray(n),h[n]=1),m[n]!==i&&(t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n,i),m[n]=i)},disableUnusedAttributes:function(){for(var t=0,n=h.length;t!==n;++t)h[t]!==c[t]&&(e.disableVertexAttribArray(t),h[t]=0)},enable:te,disable:ne,getCompressedTextureFormats:function(){if(null===f&&(f=[],t.get("WEBGL_compressed_texture_pvrtc")||t.get("WEBGL_compressed_texture_s3tc")||t.get("WEBGL_compressed_texture_etc1")||t.get("WEBGL_compressed_texture_astc")))for(var n=e.getParameter(e.COMPRESSED_TEXTURE_FORMATS),i=0;i<n.length;i++)f.push(n[i]);return f},useProgram:function(t){return w!==t&&(e.useProgram(t),w=t,!0)},setBlending:ie,setMaterial:function(t,n){t.side===d?ne(e.CULL_FACE):te(e.CULL_FACE);var q=t.side===u;n&&(q=!q),re(q),!0===t.transparent?ie(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha):ie(g),r.setFunc(t.depthFunc),r.setTest(t.depthTest),r.setMask(t.depthWrite),i.setMask(t.colorWrite),ae(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)},setFlipSided:re,setCullFace:qe,setLineWidth:function(t){t!==I&&(B&&e.lineWidth(t),I=t)},setPolygonOffset:ae,setScissorTest:function(t){t?te(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)},activeTexture:oe,bindTexture:function(t,n){null===Z&&oe();var i=J[Z];void 0===i&&(i={type:void 0,texture:void 0},J[Z]=i),i.type===t&&i.texture===n||(e.bindTexture(t,n||ee[t]),i.type=t,i.texture=n)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}}//
,scissor:function(t){!1===Q.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),Q.copy(t))},viewport:function(t){!1===K.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),K.copy(t))}//
,reset:function(){for(var t=0;t<h.length;t++)1===h[t]&&(e.disableVertexAttribArray(t),h[t]=0);p={},f=null,Z=null,J={},w=null,E=null,P=null,O=null,i.reset(),r.reset(),q.reset()}}}(M,S,K)).scissor(se.copy(pe).multiplyScalar(de)),A.viewport(oe.copy(me).multiplyScalar(de)),R=new
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
function(e){var t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,i,r){switch(r=r||1,t.calls++,i){case e.TRIANGLES:t.triangles+=r*(n/3);break;case e.TRIANGLE_STRIP:case e.TRIANGLE_FAN:t.triangles+=r*(n-2);break;case e.LINES:t.lines+=r*(n/2);break;case e.LINE_STRIP:t.lines+=r*(n-1);break;case e.LINE_LOOP:t.lines+=r*n;break;case e.POINTS:t.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}(M),L=new function(){var e=new WeakMap;return{get:function(t){var n=e.get(t);return void 0===n&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,i){e.get(t)[n]=i},dispose:function(){e=new WeakMap}}},C=new Ii(M,S,A,L,T,K,R),P=new kt(M),O=new function(e,t,n){var i={},r={};function q(e){var a=e.target,o=i[a.id];for(var s in null!==o.index&&t.remove(o.index),o.attributes)t.remove(o.attributes[s]);a.removeEventListener("dispose",q),delete i[a.id];// TODO Remove duplicate code
var l=r[a.id];l&&(t.remove(l),delete r[a.id]),(l=r[o.id])&&(t.remove(l),delete r[o.id]),//
n.memory.geometries--}return{get:function(e,t){var r=i[t.id];return r||(t.addEventListener("dispose",q),t.isBufferGeometry?r=t:t.isGeometry&&(void 0===t._bufferGeometry&&(t._bufferGeometry=(new un).setFromObject(e)),r=t._bufferGeometry),i[t.id]=r,n.memory.geometries++,r)},update:function(n){var i=n.index,r=n.attributes;for(var q in null!==i&&t.update(i,e.ELEMENT_ARRAY_BUFFER),r)t.update(r[q],e.ARRAY_BUFFER);// morph targets
var a=n.morphAttributes;for(var q in a)for(var o=a[q],s=0,l=o.length;s<l;s++)t.update(o[s],e.ARRAY_BUFFER)},getWireframeAttribute:function(n){var i=r[n.id];if(i)return i;var q,a=[],o=n.index,s=n.attributes;// console.time( 'wireframe' );
if(null!==o)for(var l=0,c=(q=o.array).length;l<c;l+=3){var h=q[l+0],u=q[l+1],d=q[l+2];a.push(h,u,u,d,d,h)}else for(l=0,c=(q=s.position.array).length/3-1;l<c;l+=3)h=l+0,u=l+1,d=l+2,a.push(h,u,u,d,d,h);// console.timeEnd( 'wireframe' );
return i=new(cn(a)>65535?an:rn)(a,1),t.update(i,e.ELEMENT_ARRAY_BUFFER),r[n.id]=i,i}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */(M,P,R),I=new
/**
 * @author mrdoob / http://mrdoob.com/
 */
function(e,t){var n={};return{update:function(i){var r=t.render.frame,q=i.geometry,a=e.get(i,q);// Update once per frame
return n[a.id]!==r&&(q.isGeometry&&a.updateFromObject(i),e.update(a),n[a.id]=r),a},dispose:function(){n={}}}}(O,R),X=new function(e){var t={},n=new Float32Array(8);return{update:function(i,r,q,a){var o=i.morphTargetInfluences,s=o.length,l=t[r.id];if(void 0===l){// initialise list
l=[];for(var c=0;c<s;c++)l[c]=[c,0];t[r.id]=l}var h=q.morphTargets&&r.morphAttributes.position,u=q.morphNormals&&r.morphAttributes.normal;// Remove current morphAttributes
for(c=0;c<s;c++)0!==(d=l[c])[1]&&(h&&r.removeAttribute("morphTarget"+c),u&&r.removeAttribute("morphNormal"+c));// Collect influences
for(c=0;c<s;c++)(d=l[c])[0]=c,d[1]=o[c];// Add morphAttributes
for(l.sort(Mn),c=0;c<8;c++){var d;if(d=l[c]){var m=d[0],p=d[1];if(p){h&&r.addAttribute("morphTarget"+c,h[m]),u&&r.addAttribute("morphNormal"+c,u[m]),n[c]=p;continue}}n[c]=0}a.getUniforms().setValue(e,"morphTargetInfluences",n)}}}(M),N=new bi($,S,T),D=new Mi,U=new Ai,B=new
/**
 * @author mrdoob / http://mrdoob.com/
 */
function(e,t,n,i){var r,q,a,o=new Ft(0),s=0;function l(e,n){t.buffers.color.setClear(e.r,e.g,e.b,n,i)}return{getClearColor:function(){return o},setClearColor:function(e,t){o.set(e),l(o,s=void 0!==t?t:1)},getClearAlpha:function(){return s},setClearAlpha:function(e){l(o,s=e)},render:function(t,i,c,h){var d=i.background;null===d?l(o,s):d&&d.isColor&&(l(d,1),h=!0),(e.autoClear||h)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),d&&d.isCubeTexture?(void 0===a&&((a=new En(new mn(1,1,1),new yn({uniforms:Ht.cube.uniforms,vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:u,depthTest:!0,depthWrite:!1,fog:!1}))).geometry.removeAttribute("normal"),a.geometry.removeAttribute("uv"),a.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},n.update(a.geometry)),a.material.uniforms.tCube.value=d,t.push(a,a.geometry,a.material,0,null)):d&&d.isTexture&&(void 0===r&&(r=new Yt(-1,1,1,-1,0,1),q=new En(new fn(2,2),new xn({depthTest:!1,depthWrite:!1,fog:!1})),n.update(q.geometry)),q.material.map=d,// TODO Push this to renderList
e.renderBufferDirect(r,null,q.geometry,q.material,q,null))}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */($,A,O,h),Y=new function(e,t,n){var i;//
this.setMode=function(e){i=e},this.render=function(t,r){e.drawArrays(i,t,r),n.update(r,i)},this.renderInstances=function(e,r,q){var a=t.get("ANGLE_instanced_arrays");if(null!==a){var o=e.attributes.position;o.isInterleavedBufferAttribute?(q=o.data.count,a.drawArraysInstancedANGLE(i,0,q,e.maxInstancedCount)):a.drawArraysInstancedANGLE(i,r,q,e.maxInstancedCount),n.update(q,i,e.maxInstancedCount)}else console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")}}(M,S,R),Z=new function(e,t,n){var i,r,q;//
this.setMode=function(e){i=e},this.setIndex=function(e){r=e.type,q=e.bytesPerElement},this.render=function(t,a){e.drawElements(i,a,r,t*q),n.update(a,i)},this.renderInstances=function(e,a,o){var s=t.get("ANGLE_instanced_arrays");null!==s?(s.drawElementsInstancedANGLE(i,o,r,a*q,e.maxInstancedCount),n.update(o,i,e.maxInstancedCount)):console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")}}(M,S,R),J=new Oi($,M,A,C,T),R.programs=N.programs,$.context=M,$.capabilities=T,$.extensions=S,$.properties=L,$.renderLists=D,$.state=A,$.info=R}Ae();// vr
var Re=new Bi($);this.vr=Re;// shadow map
var Le=new Ci($,I,T.maxTextureSize);// Events
function Pe(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ee=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),ee=!1,Ae()}function Ie(e){var t=e.target;t.removeEventListener("dispose",Ie),// Buffer deallocation
function(e){Ne(e),L.remove(e)}(t)}function Ne(e){var t=L.get(e).program;e.program=void 0,void 0!==t&&N.releaseProgram(t)}// Buffer rendering
this.shadowMap=Le,// API
this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){var e=S.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){var e=S.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){void 0!==e&&(de=e,this.setSize(he,ue,!1))},this.getSize=function(){return{width:he,height:ue}},this.setSize=function(e,n,i){var r=Re.getDevice();r&&r.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(he=e,ue=n,t.width=e*de,t.height=n*de,!1!==i&&(t.style.width=e+"px",t.style.height=n+"px"),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(){return{width:he*de,height:ue*de}},this.setDrawingBufferSize=function(e,n,i){he=e,ue=n,de=i,t.width=e*i,t.height=n*i,this.setViewport(0,0,e,n)},this.getCurrentViewport=function(){return oe},this.setViewport=function(e,t,n,i){me.set(e,ue-t-i,n,i),A.viewport(oe.copy(me).multiplyScalar(de))},this.setScissor=function(e,t,n,i){pe.set(e,ue-t-i,n,i),A.scissor(se.copy(pe).multiplyScalar(de))},this.setScissorTest=function(e){A.setScissorTest(fe=e)},// Clearing
this.getClearColor=function(){return B.getClearColor()},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(e,t,n){var i=0;(void 0===e||e)&&(i|=M.COLOR_BUFFER_BIT),(void 0===t||t)&&(i|=M.DEPTH_BUFFER_BIT),(void 0===n||n)&&(i|=M.STENCIL_BUFFER_BIT),M.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(e,t,n,i){this.setRenderTarget(e),this.clear(t,n,i)},//
this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Oe,!1),D.dispose(),U.dispose(),L.dispose(),I.dispose(),Re.dispose(),Be()},this.renderBufferImmediate=function(e,t,n){A.initAttributes();var i=L.get(e);e.hasPositions&&!i.position&&(i.position=M.createBuffer()),e.hasNormals&&!i.normal&&(i.normal=M.createBuffer()),e.hasUvs&&!i.uv&&(i.uv=M.createBuffer()),e.hasColors&&!i.color&&(i.color=M.createBuffer());var r=t.getAttributes();if(e.hasPositions&&(M.bindBuffer(M.ARRAY_BUFFER,i.position),M.bufferData(M.ARRAY_BUFFER,e.positionArray,M.DYNAMIC_DRAW),A.enableAttribute(r.position),M.vertexAttribPointer(r.position,3,M.FLOAT,!1,0,0)),e.hasNormals){if(M.bindBuffer(M.ARRAY_BUFFER,i.normal),!n.isMeshPhongMaterial&&!n.isMeshStandardMaterial&&!n.isMeshNormalMaterial&&!0===n.flatShading)for(var q=0,a=3*e.count;q<a;q+=9){var o=e.normalArray,s=(o[q+0]+o[q+3]+o[q+6])/3,l=(o[q+1]+o[q+4]+o[q+7])/3,c=(o[q+2]+o[q+5]+o[q+8])/3;o[q+0]=s,o[q+1]=l,o[q+2]=c,o[q+3]=s,o[q+4]=l,o[q+5]=c,o[q+6]=s,o[q+7]=l,o[q+8]=c}M.bufferData(M.ARRAY_BUFFER,e.normalArray,M.DYNAMIC_DRAW),A.enableAttribute(r.normal),M.vertexAttribPointer(r.normal,3,M.FLOAT,!1,0,0)}e.hasUvs&&n.map&&(M.bindBuffer(M.ARRAY_BUFFER,i.uv),M.bufferData(M.ARRAY_BUFFER,e.uvArray,M.DYNAMIC_DRAW),A.enableAttribute(r.uv),M.vertexAttribPointer(r.uv,2,M.FLOAT,!1,0,0)),e.hasColors&&n.vertexColors!==m&&(M.bindBuffer(M.ARRAY_BUFFER,i.color),M.bufferData(M.ARRAY_BUFFER,e.colorArray,M.DYNAMIC_DRAW),A.enableAttribute(r.color),M.vertexAttribPointer(r.color,3,M.FLOAT,!1,0,0)),A.disableUnusedAttributes(),M.drawArrays(M.TRIANGLES,0,e.count),e.count=0},this.renderBufferDirect=function(e,t,n,i,r,q){var a=r.isMesh&&r.matrixWorld.determinant()<0;A.setMaterial(i,a);var o=je(e,t,i,r),s=n.id+"_"+o.id+"_"+(!0===i.wireframe),l=!1;s!==re&&(re=s,l=!0),r.morphTargetInfluences&&(X.update(r,n,i,o),l=!0);//
var c,h=n.index,u=n.attributes.position,d=1;!0===i.wireframe&&(h=O.getWireframeAttribute(n),d=2);var m=Y;null!==h&&(c=P.get(h),(m=Z).setIndex(c)),l&&(!function(e,t,n){if(n&&n.isInstancedBufferGeometry&&null===S.get("ANGLE_instanced_arrays"))return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");A.initAttributes();var i=n.attributes,r=t.getAttributes(),q=e.defaultAttributeValues;for(var a in r){var o=r[a];if(o>=0){var s=i[a];if(void 0!==s){var l=s.normalized,c=s.itemSize,h=P.get(s);// TODO Attribute may not be available on context restore
if(void 0===h)continue;var u=h.buffer,d=h.type,m=h.bytesPerElement;if(s.isInterleavedBufferAttribute){var p=s.data,f=p.stride,g=s.offset;p&&p.isInstancedInterleavedBuffer?(A.enableAttributeAndDivisor(o,p.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=p.meshPerAttribute*p.count)):A.enableAttribute(o),M.bindBuffer(M.ARRAY_BUFFER,u),M.vertexAttribPointer(o,c,d,l,f*m,g*m)}else s.isInstancedBufferAttribute?(A.enableAttributeAndDivisor(o,s.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=s.meshPerAttribute*s.count)):A.enableAttribute(o),M.bindBuffer(M.ARRAY_BUFFER,u),M.vertexAttribPointer(o,c,d,l,0,0)}else if(void 0!==q){var v=q[a];if(void 0!==v)switch(v.length){case 2:M.vertexAttrib2fv(o,v);break;case 3:M.vertexAttrib3fv(o,v);break;case 4:M.vertexAttrib4fv(o,v);break;default:M.vertexAttrib1fv(o,v)}}}}A.disableUnusedAttributes()}// Compile
(i,o,n),null!==h&&M.bindBuffer(M.ELEMENT_ARRAY_BUFFER,c.buffer));//
var p=1/0;null!==h?p=h.count:void 0!==u&&(p=u.count);var f=n.drawRange.start*d,g=n.drawRange.count*d,v=null!==q?q.start*d:0,x=null!==q?q.count*d:1/0,y=Math.max(f,v),_=Math.min(p,f+g,v+x)-1,b=Math.max(0,_-y+1);if(0!==b){//
if(r.isMesh)if(!0===i.wireframe)A.setLineWidth(i.wireframeLinewidth*Se()),m.setMode(M.LINES);else switch(r.drawMode){case st:m.setMode(M.TRIANGLES);break;case lt:m.setMode(M.TRIANGLE_STRIP);break;case ct:m.setMode(M.TRIANGLE_FAN)}else if(r.isLine){var w=i.linewidth;void 0===w&&(w=1),// Not using Line*Material
A.setLineWidth(w*Se()),r.isLineSegments?m.setMode(M.LINES):r.isLineLoop?m.setMode(M.LINE_LOOP):m.setMode(M.LINE_STRIP)}else r.isPoints&&m.setMode(M.POINTS);n&&n.isInstancedBufferGeometry?n.maxInstancedCount>0&&m.renderInstances(n,y,b):m.render(y,b)}},this.compile=function(e,t){(E=U.get(e,t)).init(),e.traverse(function(e){e.isLight&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights(t),e.traverse(function(t){if(t.material)if(Array.isArray(t.material))for(var n=0;n<t.material.length;n++)Ge(t.material[n],e.fog,t);else Ge(t.material,e.fog,t)})};// Animation Loop
var De=!1,Ue=null;function Be(){De=!1}function Fe(){var e=Re.getDevice();e&&e.isPresenting?e.requestAnimationFrame(ze):window.requestAnimationFrame(ze)}function ze(e){!1!==De&&(Ue(e),Fe())}function He(e,t,n,i){for(var r=0,q=e.length;r<q;r++){var a=e[r],o=a.object,s=a.geometry,l=void 0===i?a.material:i,c=a.group;if(n.isArrayCamera){ae=n;for(var h=n.cameras,u=0,d=h.length;u<d;u++){var m=h[u];if(o.layers.test(m.layers)){var p=m.bounds,f=p.x*he,g=p.y*ue,v=p.z*he,x=p.w*ue;A.viewport(oe.set(f,g,v,x).multiplyScalar(de)),ke(o,t,m,s,l,c)}}}else ae=null,ke(o,t,n,s,l,c)}}function ke(e,t,n,i,r,q){if(e.onBeforeRender($,t,n,i,r,q),E=U.get(t,ae||n),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),e.isImmediateRenderObject){var a=e.isMesh&&e.matrixWorld.determinant()<0;A.setMaterial(r,a);var o=je(n,t.fog,r,e);re="",function(e,t,n){e.render(function(e){$.renderBufferImmediate(e,t,n)})}(e,o,r)}else $.renderBufferDirect(n,t.fog,i,r,e,q);e.onAfterRender($,t,n,i,r,q),E=U.get(t,ae||n)}function Ge(e,t,n){var i=L.get(e),r=E.state.lights,q=E.state.shadowsArray,a=N.getParameters(e,r.state,q,t,xe.numPlanes,xe.numIntersection,n),o=N.getProgramCode(e,a),s=i.program,l=!0;if(void 0===s)// new material
e.addEventListener("dispose",Ie);else if(s.code!==o)// changed glsl or parameters
Ne(e);else if(i.lightsHash!==r.state.hash)L.update(e,"lightsHash",r.state.hash),l=!1;else{if(void 0!==a.shaderID)// same glsl and uniform list
return;// only rebuild uniform list
l=!1}if(l){if(a.shaderID){var c=Ht[a.shaderID];i.shader={name:e.type,uniforms:Ut.clone(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}}else i.shader={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(i.shader,$),s=N.acquireProgram(e,i.shader,a,o),i.program=s,e.program=s}var h=s.getAttributes();if(e.morphTargets){e.numSupportedMorphTargets=0;for(var u=0;u<$.maxMorphTargets;u++)h["morphTarget"+u]>=0&&e.numSupportedMorphTargets++}if(e.morphNormals){e.numSupportedMorphNormals=0;for(u=0;u<$.maxMorphNormals;u++)h["morphNormal"+u]>=0&&e.numSupportedMorphNormals++}var d=i.shader.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(i.numClippingPlanes=xe.numPlanes,i.numIntersection=xe.numIntersection,d.clippingPlanes=xe.uniform),i.fog=t,// store the light setup it was created for
i.lightsHash=r.state.hash,e.lights&&(// wire up the material to this renderer's lighting state
d.ambientLightColor.value=r.state.ambient,d.directionalLights.value=r.state.directional,d.spotLights.value=r.state.spot,d.rectAreaLights.value=r.state.rectArea,d.pointLights.value=r.state.point,d.hemisphereLights.value=r.state.hemi,d.directionalShadowMap.value=r.state.directionalShadowMap,d.directionalShadowMatrix.value=r.state.directionalShadowMatrix,d.spotShadowMap.value=r.state.spotShadowMap,d.spotShadowMatrix.value=r.state.spotShadowMatrix,d.pointShadowMap.value=r.state.pointShadowMap,d.pointShadowMatrix.value=r.state.pointShadowMatrix);var m=i.program.getUniforms(),p=hi.seqWithValue(m.seq,d);i.uniformsList=p}function je(e,t,n,i){ce=0;var r=L.get(n),q=E.state.lights;if(ye&&(_e||e!==qe)){var a=e===qe&&n.id===ie;// we might want to call this function with some ClippingGroup
// object instead of the material, once it becomes feasible
// (#8465, #8379)
xe.setState(n.clippingPlanes,n.clipIntersection,n.clipShadows,e,r,a)}!1===n.needsUpdate&&(void 0===r.program?n.needsUpdate=!0:n.fog&&r.fog!==t?n.needsUpdate=!0:n.lights&&r.lightsHash!==q.state.hash?n.needsUpdate=!0:void 0===r.numClippingPlanes||r.numClippingPlanes===xe.numPlanes&&r.numIntersection===xe.numIntersection||(n.needsUpdate=!0)),n.needsUpdate&&(Ge(n,t,i),n.needsUpdate=!1);var o=!1,s=!1,l=!1,c=r.program,h=c.getUniforms(),u=r.shader.uniforms;if(A.useProgram(c.program)&&(o=!0,s=!0,l=!0),n.id!==ie&&(ie=n.id,s=!0),o||e!==qe){// load material specific uniforms
// (shader material also gets them for the sake of genericity)
if(h.setValue(M,"projectionMatrix",e.projectionMatrix),T.logarithmicDepthBuffer&&h.setValue(M,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),// Avoid unneeded uniform updates per ArrayCamera's sub-camera
qe!==(ae||e)&&(qe=ae||e,// lighting uniforms depend on the camera so enforce an update
// now, in case this material supports lights - or later, when
// the next material that does gets activated:
s=!0,// set to true on material change
l=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.envMap){var d=h.map.cameraPosition;void 0!==d&&d.setValue(M,Me.setFromMatrixPosition(e.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.skinning)&&h.setValue(M,"viewMatrix",e.matrixWorldInverse)}// skinning uniforms must be set even if material didn't change
// auto-setting of texture unit for bone texture must go before other textures
// not sure why, but otherwise weird things happen
if(n.skinning){h.setOptional(M,i,"bindMatrix"),h.setOptional(M,i,"bindMatrixInverse");var m=i.skeleton;if(m){var p=m.bones;if(T.floatVertexTextures){if(void 0===m.boneTexture){// layout (1 matrix = 4 pixels)
//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)
var f=Math.sqrt(4*p.length);// 4 pixels needed for 1 matrix
f=yt.ceilPowerOfTwo(f),f=Math.max(f,4);var g=new Float32Array(f*f*4);// 4 floats per RGBA pixel
g.set(m.boneMatrices);// copy current values
var v=new Ct(g,f,f,Ce,we);v.needsUpdate=!0,m.boneMatrices=g,m.boneTexture=v,m.boneTextureSize=f}h.setValue(M,"boneTexture",m.boneTexture),h.setValue(M,"boneTextureSize",m.boneTextureSize)}else h.setOptional(M,m,"boneMatrices")}}return s&&(h.setValue(M,"toneMappingExposure",$.toneMappingExposure),h.setValue(M,"toneMappingWhitePoint",$.toneMappingWhitePoint),n.lights&&// the current material requires lighting info
// note: all lighting uniforms are always set correctly
// they simply reference the renderer's state for their
// values
//
// use the current material's .needsUpdate flags to set
// the GL state when required
// If uniforms are marked as clean, they don't need to be loaded to the GPU.
function(e,t){e.ambientLightColor.needsUpdate=t,e.directionalLights.needsUpdate=t,e.pointLights.needsUpdate=t,e.spotLights.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}// Textures
(u,l),// refresh uniforms common to several materials
t&&n.fog&&function(e,t){e.fogColor.value=t.color,t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}(u,t),n.isMeshBasicMaterial?Ve(u,n):n.isMeshLambertMaterial?(Ve(u,n),function(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}(u,n)):n.isMeshPhongMaterial?(Ve(u,n),n.isMeshToonMaterial?function(e,t){We(e,t),t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(u,n):We(u,n)):n.isMeshStandardMaterial?(Ve(u,n),n.isMeshPhysicalMaterial?function(e,t){e.clearCoat.value=t.clearCoat,e.clearCoatRoughness.value=t.clearCoatRoughness,Xe(e,t)}(u,n):Xe(u,n)):n.isMeshDepthMaterial?(Ve(u,n),function(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}(u,n)):n.isMeshDistanceMaterial?(Ve(u,n),function(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias);e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}(u,n)):n.isMeshNormalMaterial?(Ve(u,n),function(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale);t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale));t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}(u,n)):n.isLineBasicMaterial?(function(e,t){e.diffuse.value=t.color,e.opacity.value=t.opacity}(u,n),n.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(u,n)):n.isPointsMaterial?function(e,t){e.diffuse.value=t.color,e.opacity.value=t.opacity,e.size.value=t.size*de,e.scale.value=.5*ue,e.map.value=t.map,null!==t.map&&(!0===t.map.matrixAutoUpdate&&t.map.updateMatrix(),e.uvTransform.value.copy(t.map.matrix))}(u,n):n.isShadowMaterial&&(u.color.value=n.color,u.opacity.value=n.opacity),// RectAreaLight Texture
// TODO (mrdoob): Find a nicer implementation
void 0!==u.ltc_1&&(u.ltc_1.value=zt.LTC_1),void 0!==u.ltc_2&&(u.ltc_2.value=zt.LTC_2),hi.upload(M,r.uniformsList,u,$)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(hi.upload(M,r.uniformsList,u,$),n.uniformsNeedUpdate=!1),// common matrices
h.setValue(M,"modelViewMatrix",i.modelViewMatrix),h.setValue(M,"normalMatrix",i.normalMatrix),h.setValue(M,"modelMatrix",i.matrixWorld),c}// Uniforms (refresh uniforms objects)
function Ve(e,t){// uv repeat and offset setting priorities
// 1. color map
// 2. specular map
// 3. normal map
// 4. bump map
// 5. alpha map
// 6. emissive map
var n;e.opacity.value=t.opacity,t.color&&(e.diffuse.value=t.color),t.emissive&&e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.specularMap&&(e.specularMap.value=t.specularMap),t.envMap&&(e.envMap.value=t.envMap,// don't flip CubeTexture envMaps, flip everything else:
//  WebGLRenderTargetCube will be flipped for backwards compatibility
//  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
// this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
e.flipEnvMap.value=t.envMap&&t.envMap.isCubeTexture?-1:1,e.reflectivity.value=t.reflectivity,e.refractionRatio.value=t.refractionRatio,e.maxMipLevel.value=L.get(t.envMap).__maxMipLevel),t.lightMap&&(e.lightMap.value=t.lightMap,e.lightMapIntensity.value=t.lightMapIntensity),t.aoMap&&(e.aoMap.value=t.aoMap,e.aoMapIntensity.value=t.aoMapIntensity),t.map?n=t.map:t.specularMap?n=t.specularMap:t.displacementMap?n=t.displacementMap:t.normalMap?n=t.normalMap:t.bumpMap?n=t.bumpMap:t.roughnessMap?n=t.roughnessMap:t.metalnessMap?n=t.metalnessMap:t.alphaMap?n=t.alphaMap:t.emissiveMap&&(n=t.emissiveMap),void 0!==n&&(// backwards compatibility
n.isWebGLRenderTarget&&(n=n.texture),!0===n.matrixAutoUpdate&&n.updateMatrix(),e.uvTransform.value.copy(n.matrix))}function We(e,t){e.specular.value=t.specular,e.shininess.value=Math.max(t.shininess,1e-4),// to prevent pow( 0.0, 0.0 )
t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale)),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function Xe(e,t){e.roughness.value=t.roughness,e.metalness.value=t.metalness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap),t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale)),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),t.envMap&&(//uniforms.envMap.value = material.envMap; // part of uniforms common
e.envMapIntensity.value=t.envMapIntensity)}this.animate=function(e){null!==(Ue=e)?De||(Fe(),De=!0):Be()},// Rendering
this.render=function(e,t,n,i){if(t&&t.isCamera){if(!ee){// reset caching for this frame
re="",ie=-1,qe=null,// update scene graph
!0===e.autoUpdate&&e.updateMatrixWorld(),// update camera matrices and frustum
null===t.parent&&t.updateMatrixWorld(),Re.enabled&&(t=Re.getCamera(t)),(//
E=U.get(e,t)).init(),e.onBeforeRender($,e,t,n),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromMatrix(be),_e=this.localClippingEnabled,ye=xe.init(this.clippingPlanes,_e,t),(w=D.get(e,t)).init(),
/*
	// TODO Duplicated code (Frustum)

	var _sphere = new Sphere();

	function isObjectViewable( object ) {

		var geometry = object.geometry;

		if ( geometry.boundingSphere === null )
			geometry.computeBoundingSphere();

		_sphere.copy( geometry.boundingSphere ).
		applyMatrix4( object.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSpriteViewable( sprite ) {

		_sphere.center.set( 0, 0, 0 );
		_sphere.radius = 0.7071067811865476;
		_sphere.applyMatrix4( sprite.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSphereViewable( sphere ) {

		if ( ! _frustum.intersectsSphere( sphere ) ) return false;

		var numPlanes = _clipping.numPlanes;

		if ( numPlanes === 0 ) return true;

		var planes = _this.clippingPlanes,

			center = sphere.center,
			negRad = - sphere.radius,
			i = 0;

		do {

			// out when deeper than radius in the negative halfspace
			if ( planes[ i ].distanceToPoint( center ) < negRad ) return false;

		} while ( ++ i !== numPlanes );

		return true;

	}
	*/
function e(t,n,i){if(!1===t.visible)return;var r=t.layers.test(n.layers);if(r)if(t.isLight)E.pushLight(t),t.castShadow&&E.pushShadow(t);else if(t.isSprite)t.frustumCulled&&!ve.intersectsSprite(t)||E.pushSprite(t);else if(t.isImmediateRenderObject)i&&Me.setFromMatrixPosition(t.matrixWorld).applyMatrix4(be),w.push(t,null,t.material,Me.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.update(),!t.frustumCulled||ve.intersectsObject(t))){i&&Me.setFromMatrixPosition(t.matrixWorld).applyMatrix4(be);var q=I.update(t),a=t.material;if(Array.isArray(a))for(var o=q.groups,s=0,l=o.length;s<l;s++){var c=o[s],h=a[c.materialIndex];h&&h.visible&&w.push(t,q,h,Me.z,c)}else a.visible&&w.push(t,q,a,Me.z,null)}var u=t.children;for(var s=0,l=u.length;s<l;s++)e(u[s],n,i)}(e,t,$.sortObjects),!0===$.sortObjects&&w.sort(),//
ye&&xe.beginShadows();var r=E.state.shadowsArray;Le.render(r,e,t),E.setupLights(t),ye&&xe.endShadows(),//
this.info.autoReset&&this.info.reset(),void 0===n&&(n=null),this.setRenderTarget(n),//
B.render(w,e,t,i);// render scene
var q=w.opaque,a=w.transparent;if(e.overrideMaterial){var o=e.overrideMaterial;q.length&&He(q,e,t,o),a.length&&He(a,e,t,o)}else// opaque pass (front-to-back order)
q.length&&He(q,e,t),// transparent pass (back-to-front order)
a.length&&He(a,e,t);// custom renderers
var s=E.state.spritesArray;J.render(s,e,t),// Generate mipmap if we're using any kind of mipmap filtering
n&&C.updateRenderTargetMipmap(n),// Ensure depth buffer writing is enabled so it can be cleared on next render
A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1),e.onAfterRender($,e,t),Re.enabled&&Re.submitFrame(),// _gl.finish();
w=null,E=null}}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")},this.allocTextureUnit=function(){var e=ce;return e>=T.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+e+" texture units while this GPU supports only "+T.maxTextures),ce+=1,e},// this.setTexture2D = setTexture2D;
this.setTexture2D=function(){var e=!1;// backwards compatibility: peel texture.texture
return function(t,n){t&&t.isWebGLRenderTarget&&(e||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),e=!0),t=t.texture),C.setTexture2D(t,n)}}(),this.setTexture=function(){var e=!1;return function(t,n){e||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),e=!0),C.setTexture2D(t,n)}}(),this.setTextureCube=function(){var e=!1;return function(t,n){// backwards compatibility: peel texture.texture
t&&t.isWebGLRenderTargetCube&&(e||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),e=!0),t=t.texture),// currently relying on the fact that WebGLRenderTargetCube.texture is a Texture and NOT a CubeTexture
// TODO: unify these code paths
t&&t.isCubeTexture||Array.isArray(t.image)&&6===t.image.length?// CompressedTexture can have Array in image :/
// this function alone should take care of cube textures
C.setTextureCube(t,n):// assumed: texture property of THREE.WebGLRenderTargetCube
C.setTextureCubeDynamic(t,n)}}(),this.getRenderTarget=function(){return te},this.setRenderTarget=function(e){te=e,e&&void 0===L.get(e).__webglFramebuffer&&C.setupRenderTarget(e);var t=null,n=!1;if(e){var i=L.get(e).__webglFramebuffer;e.isWebGLRenderTargetCube?(t=i[e.activeCubeFace],n=!0):t=i,oe.copy(e.viewport),se.copy(e.scissor),le=e.scissorTest}else oe.copy(me).multiplyScalar(de),se.copy(pe).multiplyScalar(de),le=fe;if(ne!==t&&(M.bindFramebuffer(M.FRAMEBUFFER,t),ne=t),A.viewport(oe),A.scissor(se),A.setScissorTest(le),n){var r=L.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+e.activeCubeFace,r.__webglTexture,e.activeMipMapLevel)}},this.readRenderTargetPixels=function(e,t,n,i,r,q){if(e&&e.isWebGLRenderTarget){var a=L.get(e).__webglFramebuffer;if(a){var o=!1;a!==ne&&(M.bindFramebuffer(M.FRAMEBUFFER,a),o=!0);try{var s=e.texture,l=s.format,c=s.type;if(l!==Ce&&K.convert(l)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(c===ge||K.convert(c)===M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)||c===we&&(S.get("OES_texture_float")||S.get("WEBGL_color_buffer_float"))||c===Ee&&S.get("EXT_color_buffer_half_float")))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE?// the following if statement ensures valid read requests (no out-of-bounds pixels, see #8604)
t>=0&&t<=e.width-i&&n>=0&&n<=e.height-r&&M.readPixels(t,n,i,r,K.convert(l),K.convert(c),q):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{o&&M.bindFramebuffer(M.FRAMEBUFFER,ne)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(e,t,n){var i=t.image.width,r=t.image.height,q=K.convert(t.format);this.setTexture2D(t,0),M.copyTexImage2D(M.TEXTURE_2D,n||0,q,e.x,e.y,i,r,0)},this.copyTextureToTexture=function(e,t,n,i){var r=t.image.width,q=t.image.height,a=K.convert(n.format),o=K.convert(n.type),s=t.isDataTexture?t.image.data:t.image;this.setTexture2D(n,0),M.texSubImage2D(M.TEXTURE_2D,i||0,e.x,e.y,r,q,a,o,s)}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */function zi(e,t){this.name="",this.color=new Ft(e),this.density=void 0!==t?t:25e-5}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function Hi(e,t,n){this.name="",this.color=new Ft(e),this.near=void 0!==t?t:1,this.far=void 0!==n?n:1e3}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function ki(){Wt.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *	uvOffset: new THREE.Vector2(),
 *	uvScale: new THREE.Vector2()
 * }
 */
function Gi(e){vn.call(this),this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(e)}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function ji(e){Wt.call(this),this.type="Sprite",this.material=void 0!==e?e:new Gi,this.center=new _t(.5,.5)}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function Vi(){Wt.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author michael guerrero / http://realitymeltdown.com
 * @author ikerr / http://verold.com
 */
function Wi(e,t){// use the supplied bone inverses or calculate the inverses
if(// copy the bone array
e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),void 0===t)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(var n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new bt)}}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
function Xi(){Wt.call(this),this.type="Bone"}
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
function Yi(e,t){En.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new bt,this.bindMatrixInverse=new bt;var n=new Wi(this.initBones());this.bind(n,this.matrixWorld),this.normalizeSkinWeights()}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round"
 * }
 */
function Zi(e){vn.call(this),this.type="LineBasicMaterial",this.color=new Ft(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(e)}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ji(e,t,n){if(1===n)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new Qi(e,t);Wt.call(this),this.type="Line",this.geometry=void 0!==e?e:new un,this.material=void 0!==t?t:new Zi({color:16777215*Math.random()})}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Qi(e,t){Ji.call(this,e,t),this.type="LineSegments"}
/**
 * @author mgreter / http://github.com/mgreter
 */
function Ki(e,t){Ji.call(this,e,t),this.type="LineLoop"}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>
 * }
 */
function $i(e){vn.call(this),this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.lights=!1,this.setValues(e)}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function er(e,t){Wt.call(this),this.type="Points",this.geometry=void 0!==e?e:new un,this.material=void 0!==t?t:new $i({color:16777215*Math.random()})}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function tr(){Wt.call(this),this.type="Group"}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function nr(e,t,n,i,r,q,a,o,s){Tt.call(this,e,t,n,i,r,q,a,o,s),this.generateMipmaps=!1}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function ir(e,t,n,i,r,q,a,o,s,l,c,h){Tt.call(this,null,q,a,o,s,l,i,r,c,h),this.image={width:t,height:n},this.mipmaps=e,// no flipping for cube textures
// (also flipping doesn't work for compressed textures )
this.flipY=!1,// can't generate mipmaps for compressed textures
// mips must be embedded in DDS files
this.generateMipmaps=!1}
/**
 * @author Matt DesLauriers / @mattdesl
 * @author atix / arthursilber.de
 */
function rr(e,t,n,i,r,q,a,o,s,l){if((l=void 0!==l?l:Ne)!==Ne&&l!==De)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&l===Ne&&(n=ye),void 0===n&&l===De&&(n=Ae),Tt.call(this,null,i,r,q,a,o,l,n,s),this.image={width:e,height:t},this.magFilter=void 0!==a?a:he,this.minFilter=void 0!==o?o:he,this.flipY=!1,this.generateMipmaps=!1}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
function qr(e){un.call(this),this.type="WireframeGeometry";// buffer
var t,n,i,r,q,a,o,s,l,c,h=[],u=[0,0],d={},m=["a","b","c"];// helper variables
// different logic for Geometry and BufferGeometry
if(e&&e.isGeometry){// create a data structure that contains all edges without duplicates
var p=e.faces;for(t=0,i=p.length;t<i;t++){var f=p[t];for(n=0;n<3;n++)o=f[m[n]],s=f[m[(n+1)%3]],u[0]=Math.min(o,s),// sorting prevents duplicates
u[1]=Math.max(o,s),void 0===d[l=u[0]+","+u[1]]&&(d[l]={index1:u[0],index2:u[1]})}// generate vertices
for(l in d)a=d[l],c=e.vertices[a.index1],h.push(c.x,c.y,c.z),c=e.vertices[a.index2],h.push(c.x,c.y,c.z)}else if(e&&e.isBufferGeometry){var g,v,x,y,_,b,w;if(c=new Et,null!==e.index){// create a data structure that contains all eges without duplicates
for(// indexed BufferGeometry
g=e.attributes.position,v=e.index,0===(x=e.groups).length&&(x=[{start:0,count:v.count,materialIndex:0}]),r=0,q=x.length;r<q;++r)for(t=_=(y=x[r]).start,i=_+y.count;t<i;t+=3)for(n=0;n<3;n++)o=v.getX(t+n),s=v.getX(t+(n+1)%3),u[0]=Math.min(o,s),// sorting prevents duplicates
u[1]=Math.max(o,s),void 0===d[l=u[0]+","+u[1]]&&(d[l]={index1:u[0],index2:u[1]});// generate vertices
for(l in d)a=d[l],c.fromBufferAttribute(g,a.index1),h.push(c.x,c.y,c.z),c.fromBufferAttribute(g,a.index2),h.push(c.x,c.y,c.z)}else for(// non-indexed BufferGeometry
t=0,i=(g=e.attributes.position).count/3;t<i;t++)for(n=0;n<3;n++)// three edges per triangle, an edge is represented as (index1, index2)
// e.g. the first triangle has the following edges: (0,1),(1,2),(2,0)
b=3*t+n,c.fromBufferAttribute(g,b),h.push(c.x,c.y,c.z),w=3*t+(n+1)%3,c.fromBufferAttribute(g,w),h.push(c.x,c.y,c.z)}// build geometry
this.addAttribute("position",new on(h,3))}
/**
 * @author zz85 / https://github.com/zz85
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Parametric Surfaces Geometry
 * based on the brilliant article by @prideout http://prideout.net/blog/?p=44
 */
// ParametricGeometry
function ar(e,t,n){Qt.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new or(e,t,n)),this.mergeVertices()}// ParametricBufferGeometry
function or(e,t,n){un.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};// buffers
var i,r,q=[],a=[],o=[],s=[],l=new Et,c=new Et,h=new Et,u=new Et,d=new Et,m=t+1;for(i=0;i<=n;i++){var p=i/n;for(r=0;r<=t;r++){var f=r/t;// vertex
e(f,p,c),a.push(c.x,c.y,c.z),// normal
// approximate tangent vectors via finite differences
f-1e-5>=0?(e(f-1e-5,p,h),u.subVectors(c,h)):(e(f+1e-5,p,h),u.subVectors(h,c)),p-1e-5>=0?(e(f,p-1e-5,h),d.subVectors(c,h)):(e(f,p+1e-5,h),d.subVectors(h,c)),// cross product of tangent vectors returns surface normal
l.crossVectors(u,d).normalize(),o.push(l.x,l.y,l.z),// uv
s.push(f,p)}}// generate indices
for(i=0;i<n;i++)for(r=0;r<t;r++){var g=i*m+r,v=i*m+r+1,x=(i+1)*m+r+1,y=(i+1)*m+r;// faces one and two
q.push(g,v,y),q.push(v,x,y)}// build geometry
this.setIndex(q),this.addAttribute("position",new on(a,3)),this.addAttribute("normal",new on(o,3)),this.addAttribute("uv",new on(s,2))}
/**
 * @author clockworkgeek / https://github.com/clockworkgeek
 * @author timothypratley / https://github.com/timothypratley
 * @author WestLangley / http://github.com/WestLangley
 * @author Mugen87 / https://github.com/Mugen87
 */
// PolyhedronGeometry
function sr(e,t,n,i){Qt.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new lr(e,t,n,i)),this.mergeVertices()}// PolyhedronBufferGeometry
function lr(e,t,n,i){un.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1;// default buffer data
var r=[],q=[];function a(e,t,n,i){var r,q,a=Math.pow(2,i),s=[];// we use this multidimensional array as a data structure for creating the subdivision
// construct all of the vertices for this subdivision
for(r=0;r<=a;r++){s[r]=[];var l=e.clone().lerp(n,r/a),c=t.clone().lerp(n,r/a),h=a-r;for(q=0;q<=h;q++)s[r][q]=0===q&&r===a?l:l.clone().lerp(c,q/h)}// construct all of the faces
for(r=0;r<a;r++)for(q=0;q<2*(a-r)-1;q++){var u=Math.floor(q/2);q%2==0?(o(s[r][u+1]),o(s[r+1][u]),o(s[r][u])):(o(s[r][u+1]),o(s[r+1][u+1]),o(s[r+1][u]))}}function o(e){r.push(e.x,e.y,e.z)}function s(t,n){var i=3*t;n.x=e[i+0],n.y=e[i+1],n.z=e[i+2]}function l(e,t,n,i){i<0&&1===e.x&&(q[t]=e.x-1),0===n.x&&0===n.z&&(q[t]=i/2/Math.PI+.5)}// Angle around the Y axis, counter-clockwise when looking from above.
function c(e){return Math.atan2(e.z,-e.x)}// Angle above the XZ plane.
function h(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}// the subdivision creates the vertex buffer data
!// helper functions
function(e){// iterate over all faces and apply a subdivison with the given detail value
for(var n=new Et,i=new Et,r=new Et,q=0;q<t.length;q+=3)// get the vertices of the face
s(t[q+0],n),s(t[q+1],i),s(t[q+2],r),// perform subdivision
a(n,i,r,e)}(i=i||0),// all vertices should lie on a conceptual sphere with a given radius
function(e){// iterate over the entire buffer and apply the radius to each vertex
for(var t=new Et,n=0;n<r.length;n+=3)t.x=r[n+0],t.y=r[n+1],t.z=r[n+2],t.normalize().multiplyScalar(e),r[n+0]=t.x,r[n+1]=t.y,r[n+2]=t.z}(n),// finally, create the uv data
function(){for(var e=new Et,t=0;t<r.length;t+=3){e.x=r[t+0],e.y=r[t+1],e.z=r[t+2];var n=c(e)/2/Math.PI+.5,i=h(e)/Math.PI+.5;q.push(n,1-i)}(function(){for(var e=new Et,t=new Et,n=new Et,i=new Et,a=new _t,o=new _t,s=new _t,h=0,u=0;h<r.length;h+=9,u+=6){e.set(r[h+0],r[h+1],r[h+2]),t.set(r[h+3],r[h+4],r[h+5]),n.set(r[h+6],r[h+7],r[h+8]),a.set(q[u+0],q[u+1]),o.set(q[u+2],q[u+3]),s.set(q[u+4],q[u+5]),i.copy(e).add(t).add(n).divideScalar(3);var d=c(i);l(a,u+0,e,d),l(o,u+2,t,d),l(s,u+4,n,d)}})(),function(){// handle case when face straddles the seam, see #3269
for(var e=0;e<q.length;e+=6){// uv data of a single face
var t=q[e+0],n=q[e+2],i=q[e+4],r=Math.max(t,n,i),a=Math.min(t,n,i);// 0.9 is somewhat arbitrary
r>.9&&a<.1&&(t<.2&&(q[e+0]+=1),n<.2&&(q[e+2]+=1),i<.2&&(q[e+4]+=1))}}()}(),// build non-indexed geometry
this.addAttribute("position",new on(r,3)),this.addAttribute("normal",new on(r.slice(),3)),this.addAttribute("uv",new on(q,2)),0===i?this.computeVertexNormals():this.normalizeNormals()}
/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// TetrahedronGeometry
function cr(e,t){Qt.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new hr(e,t)),this.mergeVertices()}// TetrahedronBufferGeometry
function hr(e,t){lr.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}
/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// OctahedronGeometry
function ur(e,t){Qt.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new dr(e,t)),this.mergeVertices()}// OctahedronBufferGeometry
function dr(e,t){lr.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}
/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// IcosahedronGeometry
function mr(e,t){Qt.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new pr(e,t)),this.mergeVertices()}// IcosahedronBufferGeometry
function pr(e,t){var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];lr.call(this,i,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}
/**
 * @author Abe Pazos / https://hamoid.com
 * @author Mugen87 / https://github.com/Mugen87
 */
// DodecahedronGeometry
function fr(e,t){Qt.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new gr(e,t)),this.mergeVertices()}// DodecahedronBufferGeometry
function gr(e,t){var n=(1+Math.sqrt(5))/2,i=1/n,r=[// (±1, ±1, ±1)
-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,// (0, ±1/φ, ±φ)
0,-i,-n,0,-i,n,0,i,-n,0,i,n,// (±1/φ, ±φ, 0)
-i,-n,0,-i,n,0,i,-n,0,i,n,0,// (±φ, 0, ±1/φ)
-n,0,-i,n,0,-i,-n,0,i,n,0,i];lr.call(this,r,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}
/**
 * @author oosmoxiecode / https://github.com/oosmoxiecode
 * @author WestLangley / https://github.com/WestLangley
 * @author zz85 / https://github.com/zz85
 * @author miningold / https://github.com/miningold
 * @author jonobr1 / https://github.com/jonobr1
 * @author Mugen87 / https://github.com/Mugen87
 *
 */
// TubeGeometry
function vr(e,t,n,i,r,q){Qt.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},void 0!==q&&console.warn("THREE.TubeGeometry: taper has been removed.");var a=new xr(e,t,n,i,r);// expose internals
this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,// create geometry
this.fromBufferGeometry(a),this.mergeVertices()}// TubeBufferGeometry
function xr(e,t,n,i,r){un.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;var q=e.computeFrenetFrames(t,r);// expose internals
this.tangents=q.tangents,this.normals=q.normals,this.binormals=q.binormals;// helper variables
var a,o,s=new Et,l=new Et,c=new _t,h=new Et,u=[],d=[],m=[],p=[];function f(r){// we use getPointAt to sample evenly distributed points from the given path
h=e.getPointAt(r/t,h);// retrieve corresponding normal and binormal
var a=q.normals[r],c=q.binormals[r];// generate normals and vertices for the current segment
for(o=0;o<=i;o++){var m=o/i*Math.PI*2,p=Math.sin(m),f=-Math.cos(m);// normal
l.x=f*a.x+p*c.x,l.y=f*a.y+p*c.y,l.z=f*a.z+p*c.z,l.normalize(),d.push(l.x,l.y,l.z),// vertex
s.x=h.x+n*l.x,s.y=h.y+n*l.y,s.z=h.z+n*l.z,u.push(s.x,s.y,s.z)}}// create buffer data
!// functions
function(){for(a=0;a<t;a++)f(a);// if the geometry is not closed, generate the last row of vertices and normals
// at the regular position on the given path
//
// if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
f(!1===r?t:0),// uvs are generated in a separate function.
// this makes it easy compute correct values for closed geometries
function(){for(a=0;a<=t;a++)for(o=0;o<=i;o++)c.x=a/t,c.y=o/i,m.push(c.x,c.y)}(),// finally create faces
function(){for(o=1;o<=t;o++)for(a=1;a<=i;a++){var e=(i+1)*(o-1)+(a-1),n=(i+1)*o+(a-1),r=(i+1)*o+a,q=(i+1)*(o-1)+a;// faces
p.push(e,n,q),p.push(n,r,q)}}()}(),// build geometry
this.setIndex(p),this.addAttribute("position",new on(u,3)),this.addAttribute("normal",new on(d,3)),this.addAttribute("uv",new on(m,2))}
/**
 * @author oosmoxiecode
 * @author Mugen87 / https://github.com/Mugen87
 *
 * based on http://www.blackpawn.com/texts/pqtorus/
 */
// TorusKnotGeometry
function yr(e,t,n,i,r,q,a){Qt.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q},void 0!==a&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new _r(e,t,n,i,r,q)),this.mergeVertices()}// TorusKnotBufferGeometry
function _r(e,t,n,i,r,q){un.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q},e=e||1,t=t||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,q=q||3;// buffers
var a,o,s=[],l=[],c=[],h=[],u=new Et,d=new Et,m=new Et,p=new Et,f=new Et,g=new Et,v=new Et;// generate vertices, normals and uvs
for(a=0;a<=n;++a){// the radian "u" is used to calculate the position on the torus curve of the current tubular segement
var x=a/n*r*Math.PI*2;// now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
// these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions
for(T(x,r,q,e,m),T(x+.01,r,q,e,p),// calculate orthonormal basis
g.subVectors(p,m),v.addVectors(p,m),f.crossVectors(g,v),v.crossVectors(f,g),// normalize B, N. T can be ignored, we don't use it
f.normalize(),v.normalize(),o=0;o<=i;++o){// now calculate the vertices. they are nothing more than an extrusion of the torus curve.
// because we extrude a shape in the xy-plane, there is no need to calculate a z-value.
var y=o/i*Math.PI*2,_=-t*Math.cos(y),b=t*Math.sin(y);// now calculate the final vertex position.
// first we orient the extrusion with our basis vectos, then we add it to the current position on the curve
u.x=m.x+(_*v.x+b*f.x),u.y=m.y+(_*v.y+b*f.y),u.z=m.z+(_*v.z+b*f.z),l.push(u.x,u.y,u.z),// normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
d.subVectors(u,m).normalize(),c.push(d.x,d.y,d.z),// uv
h.push(a/n),h.push(o/i)}}// generate indices
for(o=1;o<=n;o++)for(a=1;a<=i;a++){// indices
var w=(i+1)*(o-1)+(a-1),E=(i+1)*o+(a-1),M=(i+1)*o+a,S=(i+1)*(o-1)+a;// faces
s.push(w,E,S),s.push(E,M,S)}// build geometry
// this function calculates the current position on the torus curve
function T(e,t,n,i,r){var q=Math.cos(e),a=Math.sin(e),o=n/t*e,s=Math.cos(o);r.x=i*(2+s)*.5*q,r.y=i*(2+s)*a*.5,r.z=i*Math.sin(o)*.5}this.setIndex(s),this.addAttribute("position",new on(l,3)),this.addAttribute("normal",new on(c,3)),this.addAttribute("uv",new on(h,2))}
/**
 * @author oosmoxiecode
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// TorusGeometry
function br(e,t,n,i,r){Qt.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new wr(e,t,n,i,r)),this.mergeVertices()}// TorusBufferGeometry
function wr(e,t,n,i,r){un.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||1,t=t||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||2*Math.PI;// buffers
var q,a,o=[],s=[],l=[],c=[],h=new Et,u=new Et,d=new Et;// generate vertices, normals and uvs
for(q=0;q<=n;q++)for(a=0;a<=i;a++){var m=a/i*r,p=q/n*Math.PI*2;// vertex
u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),s.push(u.x,u.y,u.z),// normal
h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),// uv
c.push(a/i),c.push(q/n)}// generate indices
for(q=1;q<=n;q++)for(a=1;a<=i;a++){// indices
var f=(i+1)*q+a-1,g=(i+1)*(q-1)+a-1,v=(i+1)*(q-1)+a,x=(i+1)*q+a;// faces
o.push(f,g,x),o.push(g,v,x)}// build geometry
this.setIndex(o),this.addAttribute("position",new on(s,3)),this.addAttribute("normal",new on(l,3)),this.addAttribute("uv",new on(c,2))}Ri.prototype=Object.create(vn.prototype),Ri.prototype.constructor=Ri,Ri.prototype.isMeshDepthMaterial=!0,Ri.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this},Li.prototype=Object.create(vn.prototype),Li.prototype.constructor=Li,Li.prototype.isMeshDistanceMaterial=!0,Li.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this},Pi.prototype=Object.create(Tt.prototype),Pi.prototype.constructor=Pi,Di.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Di,isPerspectiveCamera:!0,copy:function(e,t){return Xt.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},
/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
setFocalLength:function(e){// see http://www.bobatkins.com/photography/technical/field_of_view.html
var t=.5*this.getFilmHeight()/e;this.fov=2*yt.RAD2DEG*Math.atan(t),this.updateProjectionMatrix()},
/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
getFocalLength:function(){var e=Math.tan(.5*yt.DEG2RAD*this.fov);return.5*this.getFilmHeight()/e},getEffectiveFOV:function(){return 2*yt.RAD2DEG*Math.atan(Math.tan(.5*yt.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){// film not completely covered in portrait format (aspect < 1)
return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){// film not completely covered in landscape format (aspect > 1)
return this.filmGauge/Math.max(this.aspect,1)},
/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   var w = 1920;
	 *   var h = 1080;
	 *   var fullWidth = w * 3;
	 *   var fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
setViewOffset:function(e,t,n,i,r,q){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=q,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*Math.tan(.5*yt.DEG2RAD*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,q=this.view;if(null!==this.view&&this.view.enabled){var a=q.fullWidth,o=q.fullHeight;r+=q.offsetX*i/a,t-=q.offsetY*n/o,i*=q.width/a,n*=q.height/o}var s=this.filmOffset;0!==s&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far)},toJSON:function(e){var t=Wt.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}),Ui.prototype=Object.assign(Object.create(Di.prototype),{constructor:Ui,isArrayCamera:!0}),zi.prototype.isFogExp2=!0,zi.prototype.clone=function(){return new zi(this.color.getHex(),this.density)},zi.prototype.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}},Hi.prototype.isFog=!0,Hi.prototype.clone=function(){return new Hi(this.color.getHex(),this.near,this.far)},Hi.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}},ki.prototype=Object.assign(Object.create(Wt.prototype),{constructor:ki,copy:function(e,t){return Wt.prototype.copy.call(this,e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.fog&&(this.fog=e.fog.clone()),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){var t=Wt.prototype.toJSON.call(this,e);return null!==this.background&&(t.object.background=this.background.toJSON(e)),null!==this.fog&&(t.object.fog=this.fog.toJSON()),t}}),Gi.prototype=Object.create(vn.prototype),Gi.prototype.constructor=Gi,Gi.prototype.isSpriteMaterial=!0,Gi.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.rotation=e.rotation,this},ji.prototype=Object.assign(Object.create(Wt.prototype),{constructor:ji,isSprite:!0,raycast:function(){var e=new Et,t=new Et,n=new Et;return function(i,r){t.setFromMatrixPosition(this.matrixWorld),i.ray.closestPointToPoint(t,e),n.setFromMatrixScale(this.matrixWorld);var q=n.x*n.y/4;if(!(t.distanceToSquared(e)>q)){var a=i.ray.origin.distanceTo(e);a<i.near||a>i.far||r.push({distance:a,point:e.clone(),face:null,object:this})}}}(),clone:function(){return new this.constructor(this.material).copy(this)},copy:function(e){return Wt.prototype.copy.call(this,e),void 0!==e.center&&this.center.copy(e.center),this}}),Vi.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Vi,copy:function(e){Wt.prototype.copy.call(this,e,!1);for(var t=e.levels,n=0,i=t.length;n<i;n++){var r=t[n];this.addLevel(r.object.clone(),r.distance)}return this},addLevel:function(e,t){void 0===t&&(t=0),t=Math.abs(t);for(var n=this.levels,i=0;i<n.length&&!(t<n[i].distance);i++);n.splice(i,0,{distance:t,object:e}),this.add(e)},getObjectForDistance:function(e){for(var t=this.levels,n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object},raycast:function(){var e=new Et;return function(t,n){e.setFromMatrixPosition(this.matrixWorld);var i=t.ray.origin.distanceTo(e);this.getObjectForDistance(i).raycast(t,n)}}(),update:function(){var e=new Et,t=new Et;return function(n){var i=this.levels;if(i.length>1){e.setFromMatrixPosition(n.matrixWorld),t.setFromMatrixPosition(this.matrixWorld);var r=e.distanceTo(t);i[0].object.visible=!0;for(var q=1,a=i.length;q<a&&r>=i[q].distance;q++)i[q-1].object.visible=!1,i[q].object.visible=!0;for(;q<a;q++)i[q].object.visible=!1}}}(),toJSON:function(e){var t=Wt.prototype.toJSON.call(this,e);t.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var q=n[i];t.object.levels.push({object:q.object.uuid,distance:q.distance})}return t}}),Object.assign(Wi.prototype,{calculateInverses:function(){this.boneInverses=[];for(var e=0,t=this.bones.length;e<t;e++){var n=new bt;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){var e,t,n;// recover the bind-time world matrices
for(t=0,n=this.bones.length;t<n;t++)(e=this.bones[t])&&e.matrixWorld.getInverse(this.boneInverses[t]);// compute the local matrices, positions, rotations and scales
for(t=0,n=this.bones.length;t<n;t++)(e=this.bones[t])&&(e.parent&&e.parent.isBone?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))},update:function(){var e=new bt,t=new bt;return function(){// flatten bone matrices to array
for(var n=this.bones,i=this.boneInverses,r=this.boneMatrices,q=this.boneTexture,a=0,o=n.length;a<o;a++){// compute the offset between the current and the original transform
var s=n[a]?n[a].matrixWorld:t;e.multiplyMatrices(s,i[a]),e.toArray(r,16*a)}void 0!==q&&(q.needsUpdate=!0)}}(),clone:function(){return new Wi(this.bones,this.boneInverses)},getBoneByName:function(e){for(var t=0,n=this.bones.length;t<n;t++){var i=this.bones[t];if(i.name===e)return i}}}),Xi.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Xi,isBone:!0}),Yi.prototype=Object.assign(Object.create(En.prototype),{constructor:Yi,isSkinnedMesh:!0,initBones:function(){var e,t,n,i,r=[];if(this.geometry&&void 0!==this.geometry.bones){// first, create array of 'Bone' objects from geometry data
for(n=0,i=this.geometry.bones.length;n<i;n++)t=this.geometry.bones[n],// create new 'Bone' object
e=new Xi,r.push(e),// apply values
e.name=t.name,e.position.fromArray(t.pos),e.quaternion.fromArray(t.rotq),void 0!==t.scl&&e.scale.fromArray(t.scl);// second, create bone hierarchy
for(n=0,i=this.geometry.bones.length;n<i;n++)-1!==(t=this.geometry.bones[n]).parent&&null!==t.parent&&void 0!==r[t.parent]?// subsequent bones in the hierarchy
r[t.parent].add(r[n]):// topmost bone, immediate child of the skinned mesh
this.add(r[n])}// now the bones are part of the scene graph and children of the skinned mesh.
// let's update the corresponding matrices
return this.updateMatrixWorld(!0),r},bind:function(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){var e,t;if(this.geometry&&this.geometry.isGeometry)for(t=0;t<this.geometry.skinWeights.length;t++){var n=this.geometry.skinWeights[t];(e=1/n.manhattanLength())!==1/0?n.multiplyScalar(e):n.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry){var i=new At,r=this.geometry.attributes.skinWeight;for(t=0;t<r.count;t++)i.x=r.getX(t),i.y=r.getY(t),i.z=r.getZ(t),i.w=r.getW(t),(e=1/i.manhattanLength())!==1/0?i.multiplyScalar(e):i.set(1,0,0,0),r.setXYZW(t,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(e){En.prototype.updateMatrixWorld.call(this,e),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Zi.prototype=Object.create(vn.prototype),Zi.prototype.constructor=Zi,Zi.prototype.isLineBasicMaterial=!0,Zi.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this},Ji.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Ji,isLine:!0,computeLineDistances:function(){var e=new Et,t=new Et;return function(){var n=this.geometry;if(n.isBufferGeometry)// we assume non-indexed geometry
if(null===n.index){for(var i=n.attributes.position,r=[0],q=1,a=i.count;q<a;q++)e.fromBufferAttribute(i,q-1),t.fromBufferAttribute(i,q),r[q]=r[q-1],r[q]+=e.distanceTo(t);n.addAttribute("lineDistance",new on(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(n.isGeometry){var o=n.vertices;(r=n.lineDistances)[0]=0;for(q=1,a=o.length;q<a;q++)r[q]=r[q-1],r[q]+=o[q-1].distanceTo(o[q])}return this}}(),raycast:function(){var e=new bt,t=new _n,n=new Ot;return function(i,r){var q=i.linePrecision,a=q*q,o=this.geometry,s=this.matrixWorld;if(// Checking boundingSphere distance to ray
null===o.boundingSphere&&o.computeBoundingSphere(),n.copy(o.boundingSphere),n.applyMatrix4(s),!1!==i.ray.intersectsSphere(n)){//
e.getInverse(s),t.copy(i.ray).applyMatrix4(e);var l=new Et,c=new Et,h=new Et,u=new Et,d=this&&this.isLineSegments?2:1;if(o.isBufferGeometry){var m=o.index,p=o.attributes.position.array;if(null!==m)for(var f=m.array,g=0,v=f.length-1;g<v;g+=d){var x=f[g],y=f[g+1];if(l.fromArray(p,3*x),c.fromArray(p,3*y),!(t.distanceSqToSegment(l,c,u,h)>a))u.applyMatrix4(this.matrixWorld),(w=i.ray.origin.distanceTo(u))<i.near||w>i.far||r.push({distance:w,// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}else for(g=0,v=p.length/3-1;g<v;g+=d){if(l.fromArray(p,3*g),c.fromArray(p,3*g+3),!(t.distanceSqToSegment(l,c,u,h)>a))u.applyMatrix4(this.matrixWorld),(w=i.ray.origin.distanceTo(u))<i.near||w>i.far||r.push({distance:w,// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else if(o.isGeometry){var _=o.vertices,b=_.length;for(g=0;g<b-1;g+=d){var w;if(!(t.distanceSqToSegment(_[g],_[g+1],u,h)>a))u.applyMatrix4(this.matrixWorld),(w=i.ray.origin.distanceTo(u))<i.near||w>i.far||r.push({distance:w,// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Qi.prototype=Object.assign(Object.create(Ji.prototype),{constructor:Qi,isLineSegments:!0,computeLineDistances:function(){var e=new Et,t=new Et;return function(){var n=this.geometry;if(n.isBufferGeometry)// we assume non-indexed geometry
if(null===n.index){for(var i=n.attributes.position,r=[],q=0,a=i.count;q<a;q+=2)e.fromBufferAttribute(i,q),t.fromBufferAttribute(i,q+1),r[q]=0===q?0:r[q-1],r[q+1]=r[q]+e.distanceTo(t);n.addAttribute("lineDistance",new on(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(n.isGeometry){var o=n.vertices;for(r=n.lineDistances,q=0,a=o.length;q<a;q+=2)e.copy(o[q]),t.copy(o[q+1]),r[q]=0===q?0:r[q-1],r[q+1]=r[q]+e.distanceTo(t)}return this}}()}),Ki.prototype=Object.assign(Object.create(Ji.prototype),{constructor:Ki,isLineLoop:!0}),$i.prototype=Object.create(vn.prototype),$i.prototype.constructor=$i,$i.prototype.isPointsMaterial=!0,$i.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this},er.prototype=Object.assign(Object.create(Wt.prototype),{constructor:er,isPoints:!0,raycast:function(){var e=new bt,t=new _n,n=new Ot;return function(i,r){var q=this,a=this.geometry,o=this.matrixWorld,s=i.params.Points.threshold;if(// Checking boundingSphere distance to ray
null===a.boundingSphere&&a.computeBoundingSphere(),n.copy(a.boundingSphere),n.applyMatrix4(o),n.radius+=s,!1!==i.ray.intersectsSphere(n)){//
e.getInverse(o),t.copy(i.ray).applyMatrix4(e);var l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=new Et,u=new Et;if(a.isBufferGeometry){var d=a.index,m=a.attributes.position.array;if(null!==d)for(var p=d.array,f=0,g=p.length;f<g;f++){var v=p[f];h.fromArray(m,3*v),_(h,v)}else{f=0;for(var x=m.length/3;f<x;f++)h.fromArray(m,3*f),_(h,f)}}else{var y=a.vertices;for(f=0,x=y.length;f<x;f++)_(y[f],f)}}function _(e,n){var a=t.distanceSqToPoint(e);if(a<c){t.closestPointToPoint(e,u),u.applyMatrix4(o);var s=i.ray.origin.distanceTo(u);if(s<i.near||s>i.far)return;r.push({distance:s,distanceToRay:Math.sqrt(a),point:u.clone(),index:n,face:null,object:q})}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),tr.prototype=Object.assign(Object.create(Wt.prototype),{constructor:tr,isGroup:!0}),nr.prototype=Object.assign(Object.create(Tt.prototype),{constructor:nr,isVideoTexture:!0,update:function(){var e=this.image;e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),ir.prototype=Object.create(Tt.prototype),ir.prototype.constructor=ir,ir.prototype.isCompressedTexture=!0,rr.prototype=Object.create(Tt.prototype),rr.prototype.constructor=rr,rr.prototype.isDepthTexture=!0,qr.prototype=Object.create(un.prototype),qr.prototype.constructor=qr,ar.prototype=Object.create(Qt.prototype),ar.prototype.constructor=ar,or.prototype=Object.create(un.prototype),or.prototype.constructor=or,sr.prototype=Object.create(Qt.prototype),sr.prototype.constructor=sr,lr.prototype=Object.create(un.prototype),lr.prototype.constructor=lr,cr.prototype=Object.create(Qt.prototype),cr.prototype.constructor=cr,hr.prototype=Object.create(lr.prototype),hr.prototype.constructor=hr,ur.prototype=Object.create(Qt.prototype),ur.prototype.constructor=ur,dr.prototype=Object.create(lr.prototype),dr.prototype.constructor=dr,mr.prototype=Object.create(Qt.prototype),mr.prototype.constructor=mr,pr.prototype=Object.create(lr.prototype),pr.prototype.constructor=pr,fr.prototype=Object.create(Qt.prototype),fr.prototype.constructor=fr,gr.prototype=Object.create(lr.prototype),gr.prototype.constructor=gr,vr.prototype=Object.create(Qt.prototype),vr.prototype.constructor=vr,xr.prototype=Object.create(un.prototype),xr.prototype.constructor=xr,yr.prototype=Object.create(Qt.prototype),yr.prototype.constructor=yr,_r.prototype=Object.create(un.prototype),_r.prototype.constructor=_r,br.prototype=Object.create(Qt.prototype),br.prototype.constructor=br,wr.prototype=Object.create(un.prototype),wr.prototype.constructor=wr;
/**
 * @author Mugen87 / https://github.com/Mugen87
 * Port from https://github.com/mapbox/earcut (v2.1.2)
 */
var Er=function(e,t,n){n=n||2;var i,r,q,a,o,s,l,c=t&&t.length,h=c?t[0]*n:e.length,u=Mr(e,0,h,n,!0),d=[];if(!u)return d;// if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
if(c&&(u=// link every hole into the outer loop, producing a single-ring polygon without holes
function(e,t,n,i){var r,q,a,o,s,l=[];for(r=0,q=t.length;r<q;r++)a=t[r]*i,o=r<q-1?t[r+1]*i:e.length,(s=Mr(e,a,o,i,!1))===s.next&&(s.steiner=!0),l.push(Nr(s));// process holes from left to right
for(l.sort(Pr),r=0;r<l.length;r++)Or(l[r],n),n=Sr(n,n.next);return n}(e,t,u,n)),e.length>80*n){i=q=e[0],r=a=e[1];for(var m=n;m<h;m+=n)o=e[m],s=e[m+1],o<i&&(i=o),s<r&&(r=s),o>q&&(q=o),s>a&&(a=s);// minX, minY and invSize are later used to transform coords into integers for z-order calculation
l=0!==(l=Math.max(q-i,a-r))?1/l:0}return Tr(u,d,n,i,r,l),d};// create a circular doubly linked list from polygon points in the specified winding order
function Mr(e,t,n,i,r){var q,a;if(r===function(e,t,n,i){for(var r=0,q=t,a=n-i;q<n;q+=i)r+=(e[a]-e[q])*(e[q+1]+e[a+1]),a=q;return r}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */(e,t,n,i)>0)for(q=t;q<n;q+=i)a=Gr(q,e[q],e[q+1],a);else for(q=n-i;q>=t;q-=i)a=Gr(q,e[q],e[q+1],a);return a&&Fr(a,a.next)&&(jr(a),a=a.next),a}// eliminate colinear or duplicate points
function Sr(e,t){if(!e)return e;t||(t=e);var n,i=e;do{if(n=!1,i.steiner||!Fr(i,i.next)&&0!==Br(i.prev,i,i.next))i=i.next;else{if(jr(i),(i=t=i.prev)===i.next)break;n=!0}}while(n||i!==t);return t}// main ear slicing loop which triangulates a polygon (given as a linked list)
function Tr(e,t,n,i,r,q,a){if(e){// interlink polygon nodes in z-order
!a&&q&&// interlink polygon nodes in z-order
function(e,t,n,i){var r=e;do{null===r.z&&(r.z=Ir(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function(e){var t,n,i,r,q,a,o,s,l=1;do{for(n=e,e=null,q=null,a=0;n;){for(a++,i=n,o=0,t=0;t<l&&(o++,i=i.nextZ);t++);for(s=l;o>0||s>0&&i;)0!==o&&(0===s||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,s--),q?q.nextZ=r:e=r,r.prevZ=q,q=r;n=i}q.nextZ=null,l*=2}while(a>1)}// z-order of a point given coords and inverse of the longer side of data bbox
(r)}(e,i,r,q);// iterate through ears, slicing them one by one
for(var o,s,l=e;e.prev!==e.next;)if(o=e.prev,s=e.next,q?Rr(e,i,r,q):Ar(e))// cut off the triangle
t.push(o.i/n),t.push(e.i/n),t.push(s.i/n),jr(e),// skipping the next vertice leads to less sliver triangles
e=s.next,l=s.next;else// if we looped through the whole remaining polygon and can't find any more ears
if((e=s)===l){// try filtering points and slicing again
a?1===a?Tr(e=Lr(e,t,n),t,n,i,r,q,2):2===a&&Cr(e,t,n,i,r,q):Tr(Sr(e),t,n,i,r,q,1);break}}}// check whether a polygon node forms a valid ear with adjacent nodes
function Ar(e){var t=e.prev,n=e,i=e.next;if(Br(t,n,i)>=0)return!1;// reflex, can't be an ear
// now make sure we don't have other points inside the potential ear
for(var r=e.next.next;r!==e.prev;){if(Dr(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Br(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Rr(e,t,n,i){var r=e.prev,q=e,a=e.next;if(Br(r,q,a)>=0)return!1;// reflex, can't be an ear
// triangle bbox; min & max are calculated like this for speed
for(var o=r.x<q.x?r.x<a.x?r.x:a.x:q.x<a.x?q.x:a.x,s=r.y<q.y?r.y<a.y?r.y:a.y:q.y<a.y?q.y:a.y,l=r.x>q.x?r.x>a.x?r.x:a.x:q.x>a.x?q.x:a.x,c=r.y>q.y?r.y>a.y?r.y:a.y:q.y>a.y?q.y:a.y,h=Ir(o,s,t,n,i),u=Ir(l,c,t,n,i),d=e.nextZ// z-order range for the current triangle bbox;
;d&&d.z<=u;){if(d!==e.prev&&d!==e.next&&Dr(r.x,r.y,q.x,q.y,a.x,a.y,d.x,d.y)&&Br(d.prev,d,d.next)>=0)return!1;d=d.nextZ}// then look for points in decreasing z-order
for(d=e.prevZ;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&Dr(r.x,r.y,q.x,q.y,a.x,a.y,d.x,d.y)&&Br(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}// go through all polygon nodes and cure small local self-intersections
function Lr(e,t,n){var i=e;do{var r=i.prev,q=i.next.next;!Fr(r,q)&&zr(r,i,i.next,q)&&Hr(r,q)&&Hr(q,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(q.i/n),// remove two nodes involved
jr(i),jr(i.next),i=e=q),i=i.next}while(i!==e);return i}// try splitting polygon into two and triangulate them independently
function Cr(e,t,n,i,r,q){// look for a valid diagonal that divides the polygon into two
var a=e;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Ur(a,o)){// split the polygon in two by the diagonal
var s=kr(a,o);// filter colinear points around the cuts
return a=Sr(a,a.next),s=Sr(s,s.next),// run earcut on each half
Tr(a,t,n,i,r,q),void Tr(s,t,n,i,r,q)}o=o.next}a=a.next}while(a!==e)}function Pr(e,t){return e.x-t.x}// find a bridge between vertices that connects hole with an outer ring and and link it
function Or(e,t){if(t=// David Eberly's algorithm for finding a bridge between hole and outer polygon
function(e,t){var n,i=t,r=e.x,q=e.y,a=-1/0;// find a segment intersected by a ray from the hole's leftmost point to the left;
// segment's endpoint with lesser x will be potential connection point
do{if(q<=i.y&&q>=i.next.y&&i.next.y!==i.y){var o=i.x+(q-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(o<=r&&o>a){if(a=o,o===r){if(q===i.y)return i;if(q===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!n)return null;if(r===a)return n.prev;// hole touches outer segment; pick lower endpoint
// look for points inside the triangle of hole point, segment intersection and endpoint;
// if there are no points found, we have a valid connection;
// otherwise choose the point of the minimum angle with the ray as connection point
var s,l=n,c=n.x,h=n.y,u=1/0;i=n.next;for(;i!==l;)r>=i.x&&i.x>=c&&r!==i.x&&Dr(q<h?r:a,q,c,h,q<h?a:r,q,i.x,i.y)&&((s=Math.abs(q-i.y)/(r-i.x))<u||s===u&&i.x>n.x)&&Hr(i,e)&&(n=i,u=s),i=i.next;return n}(e,t)){var n=kr(t,e);Sr(n,n.next)}}function Ir(e,t,n,i,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((// coords are transformed into non-negative 15-bit integer range
e=32767*(e-n)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}// find the leftmost node of a polygon ring
function Nr(e){var t=e,n=e;do{t.x<n.x&&(n=t),t=t.next}while(t!==e);return n}// check if a point lies within a convex triangle
function Dr(e,t,n,i,r,q,a,o){return(r-a)*(t-o)-(e-a)*(q-o)>=0&&(e-a)*(i-o)-(n-a)*(t-o)>=0&&(n-a)*(q-o)-(r-a)*(i-o)>=0}// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function Ur(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!// check if a polygon diagonal intersects any polygon segments
function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&zr(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}// check if a polygon diagonal is locally inside the polygon
(e,t)&&Hr(e,t)&&Hr(t,e)&&// check if the middle point of a polygon diagonal is inside the polygon
function(e,t){var n=e,i=!1,r=(e.x+t.x)/2,q=(e.y+t.y)/2;do{n.y>q!=n.next.y>q&&n.next.y!==n.y&&r<(n.next.x-n.x)*(q-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==e);return i}// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
(e,t)}// signed area of a triangle
function Br(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}// check if two points are equal
function Fr(e,t){return e.x===t.x&&e.y===t.y}// check if two segments intersect
function zr(e,t,n,i){return!!(Fr(e,t)&&Fr(n,i)||Fr(e,i)&&Fr(n,t))||Br(e,t,n)>0!=Br(e,t,i)>0&&Br(n,i,e)>0!=Br(n,i,t)>0}function Hr(e,t){return Br(e.prev,e,e.next)<0?Br(e,t,e.next)>=0&&Br(e,e.prev,t)>=0:Br(e,t,e.prev)<0||Br(e,e.next,t)<0}function kr(e,t){var n=new Vr(e.i,e.x,e.y),i=new Vr(t.i,t.x,t.y),r=e.next,q=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,q.next=i,i.prev=q,i}// create a node and optionally link it with previous one (in a circular doubly linked list)
function Gr(e,t,n,i){var r=new Vr(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vr(e,t,n){// vertice index in coordinates array
this.i=e,// vertex coordinates
this.x=t,this.y=n,// previous and next vertice nodes in a polygon ring
this.prev=null,this.next=null,// z-order curve value
this.z=null,// previous and next nodes in z-order
this.prevZ=null,this.nextZ=null,// indicates whether this is a steiner point
this.steiner=!1}var Wr={// calculate area of the contour polygon
area:function(e){for(var t=e.length,n=0,i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return.5*n},isClockWise:function(e){return Wr.area(e)<0},triangulateShape:function(e,t){var n=[],i=[],r=[];// flat array of vertices like [ x0,y0, x1,y1, x2,y2, ... ]
// final array of vertex indices like [ [ a,b,d ], [ b,c,d ] ]
Xr(e),Yr(n,e);//
var q=e.length;t.forEach(Xr);for(var a=0;a<t.length;a++)i.push(q),q+=t[a].length,Yr(n,t[a]);//
var o=Er(n,i);//
for(a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Xr(e){var t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Yr(e,t){for(var n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Creates extruded geometry from a path shape.
 *
 * parameters = {
 *
 *  curveSegments: <int>, // number of points on the curves
 *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
 *  amount: <int>, // Depth to extrude the shape
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into the original shape bevel goes
 *  bevelSize: <float>, // how far from shape outline is bevel
 *  bevelSegments: <int>, // number of bevel layers
 *
 *  extrudePath: <THREE.Curve> // curve to extrude shape along
 *
 *  UVGenerator: <Object> // object that provides UV generator functions
 *
 * }
 */
// ExtrudeGeometry
function Zr(e,t){Qt.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new Jr(e,t)),this.mergeVertices()}// ExtrudeBufferGeometry
function Jr(e,t){un.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t};for(var n=this,i=[],r=[],q=0,a=(e=Array.isArray(e)?e:[e]).length;q<a;q++){o(e[q])}// build geometry
// functions
function o(e){var q,a,o,s,l,c,h,u,d=[],m=void 0!==t.curveSegments?t.curveSegments:12,p=void 0!==t.steps?t.steps:1,f=void 0!==t.amount?t.amount:100,g=void 0===t.bevelEnabled||t.bevelEnabled,v=void 0!==t.bevelThickness?t.bevelThickness:6,x=void 0!==t.bevelSize?t.bevelSize:v-2,y=void 0!==t.bevelSegments?t.bevelSegments:3,_=t.extrudePath,b=void 0!==t.UVGenerator?t.UVGenerator:Qr,w=!1;// options
_&&(q=_.getSpacedPoints(p),w=!0,g=!1,// bevels not supported for path extrusion
// SETUP TNB variables
// TODO1 - have a .isClosed in spline?
a=_.computeFrenetFrames(p,!1),// console.log(splineTube, 'splineTube', splineTube.normals.length, 'steps', steps, 'extrudePts', extrudePts.length);
o=new Et,s=new Et,l=new Et),// Safeguards if bevels are not enabled
g||(y=0,v=0,x=0);// looping of holes
var E=e.extractPoints(m),M=E.shape,S=E.holes;if(!Wr.isClockWise(M))// Maybe we should also check if holes are in the opposite direction, just to be safe ...
for(M=M.reverse(),h=0,u=S.length;h<u;h++)c=S[h],Wr.isClockWise(c)&&(S[h]=c.reverse());var T=Wr.triangulateShape(M,S),A=M;/* Vertices */ // vertices has all points but contour has only points of circumference
for(h=0,u=S.length;h<u;h++)c=S[h],M=M.concat(c);function R(e,t,n){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),t.clone().multiplyScalar(n).add(e)}var L,C,P,O,I,N,D=M.length,U=T.length;// Find directions for point movement
function B(e,t,n){// computes for inPt the corresponding point inPt' on a new contour
//   shifted by 1 unit (length of normalized vector) to the left
// if we walk along contour clockwise, this new contour is outside the old one
//
// inPt' is the intersection of the two lines parallel to the two
//  adjacent edges of inPt at a distance of 1 unit on the left side.
var i,r,q,a=e.x-t.x,o=e.y-t.y,s=n.x-e.x,l=n.y-e.y,c=a*a+o*o,h=a*l-o*s;// resulting translation vector for inPt
// good reading for geometry algorithms (here: line-line intersection)
// http://geomalgorithms.com/a05-_intersect-1.html
if(Math.abs(h)>Number.EPSILON){// not collinear
// length of vectors for normalizing
var u=Math.sqrt(c),d=Math.sqrt(s*s+l*l),m=t.x-o/u,p=t.y+a/u,f=((n.x-l/d-m)*l-(n.y+s/d-p)*s)/(a*l-o*s),g=(// vector from inPt to intersection point
i=m+a*f-e.x)*i+(r=p+o*f-e.y)*r;if(g<=2)return new _t(i,r);q=Math.sqrt(g/2)}else{// handle special case of collinear edges
var v=!1;// assumes: opposite
a>Number.EPSILON?s>Number.EPSILON&&(v=!0):a<-Number.EPSILON?s<-Number.EPSILON&&(v=!0):Math.sign(o)===Math.sign(l)&&(v=!0),v?(// console.log("Warning: lines are a straight sequence");
i=-o,r=a,q=Math.sqrt(c)):(// console.log("Warning: lines are a straight spike");
i=a,r=o,q=Math.sqrt(c/2))}return new _t(i/q,r/q)}for(var F=[],z=0,H=A.length,k=H-1,G=z+1;z<H;z++,k++,G++)k===H&&(k=0),G===H&&(G=0),//  (j)---(i)---(k)
// console.log('i,j,k', i, j , k)
F[z]=B(A[z],A[k],A[G]);var j,V,W=[],X=F.concat();for(h=0,u=S.length;h<u;h++){for(c=S[h],j=[],z=0,k=(H=c.length)-1,G=z+1;z<H;z++,k++,G++)k===H&&(k=0),G===H&&(G=0),//  (j)---(i)---(k)
j[z]=B(c[z],c[k],c[G]);W.push(j),X=X.concat(j)}// Loop bevelSegments, 1 for the front, 1 for the back
for(L=0;L<y;L++){// contract shape
for(//for ( b = bevelSegments; b > 0; b -- ) {
P=L/y,O=v*Math.cos(P*Math.PI/2),C=x*Math.sin(P*Math.PI/2),z=0,H=A.length;z<H;z++)Z((I=R(A[z],F[z],C)).x,I.y,-O);// expand holes
for(h=0,u=S.length;h<u;h++)for(c=S[h],j=W[h],z=0,H=c.length;z<H;z++)Z((I=R(c[z],j[z],C)).x,I.y,-O)}// Back facing vertices
for(C=x,z=0;z<D;z++)I=g?R(M[z],X[z],C):M[z],w?(// v( vert.x, vert.y + extrudePts[ 0 ].y, extrudePts[ 0 ].x );
s.copy(a.normals[0]).multiplyScalar(I.x),o.copy(a.binormals[0]).multiplyScalar(I.y),l.copy(q[0]).add(s).add(o),Z(l.x,l.y,l.z)):Z(I.x,I.y,0);// Add stepped vertices...
// Including front facing vertices
for(V=1;V<=p;V++)for(z=0;z<D;z++)I=g?R(M[z],X[z],C):M[z],w?(// v( vert.x, vert.y + extrudePts[ s - 1 ].y, extrudePts[ s - 1 ].x );
s.copy(a.normals[V]).multiplyScalar(I.x),o.copy(a.binormals[V]).multiplyScalar(I.y),l.copy(q[V]).add(s).add(o),Z(l.x,l.y,l.z)):Z(I.x,I.y,f/p*V);// Add bevel segments planes
//for ( b = 1; b <= bevelSegments; b ++ ) {
for(L=y-1;L>=0;L--){// contract shape
for(P=L/y,O=v*Math.cos(P*Math.PI/2),C=x*Math.sin(P*Math.PI/2),z=0,H=A.length;z<H;z++)Z((I=R(A[z],F[z],C)).x,I.y,f+O);// expand holes
for(h=0,u=S.length;h<u;h++)for(c=S[h],j=W[h],z=0,H=c.length;z<H;z++)I=R(c[z],j[z],C),w?Z(I.x,I.y+q[p-1].y,q[p-1].x+O):Z(I.x,I.y,f+O)}/* Faces */ // Top and bottom faces
function Y(e,t){var n,i;for(z=e.length;--z>=0;){n=z,(i=z-1)<0&&(i=e.length-1);//console.log('b', i,j, i-1, k,vertices.length);
var r=0,q=p+2*y;for(r=0;r<q;r++){var a=D*r,o=D*(r+1);Q(t+n+a,t+i+a,t+i+o,t+n+o)}}}function Z(e,t,n){d.push(e),d.push(t),d.push(n)}function J(e,t,r){K(e),K(t),K(r);var q=i.length/3,a=b.generateTopUV(n,i,q-3,q-2,q-1);$(a[0]),$(a[1]),$(a[2])}function Q(e,t,r,q){K(e),K(t),K(q),K(t),K(r),K(q);var a=i.length/3,o=b.generateSideWallUV(n,i,a-6,a-3,a-2,a-1);$(o[0]),$(o[1]),$(o[3]),$(o[1]),$(o[2]),$(o[3])}function K(e){i.push(d[3*e+0]),i.push(d[3*e+1]),i.push(d[3*e+2])}function $(e){r.push(e.x),r.push(e.y)}!/////  Internal functions
function(){var e=i.length/3;if(g){var t=0,r=D*t;// steps + 1
// Bottom faces
for(z=0;z<U;z++)J((N=T[z])[2]+r,N[1]+r,N[0]+r);// Top faces
for(r=D*(t=p+2*y),z=0;z<U;z++)J((N=T[z])[0]+r,N[1]+r,N[2]+r)}else{// Bottom faces
for(z=0;z<U;z++)J((N=T[z])[2],N[1],N[0]);// Top faces
for(z=0;z<U;z++)J((N=T[z])[0]+D*p,N[1]+D*p,N[2]+D*p)}n.addGroup(e,i.length/3-e,0)}// Create faces for the z-sides of the shape
(),// Sides faces
function(){var e=i.length/3,t=0;for(Y(A,t),t+=A.length,h=0,u=S.length;h<u;h++)Y(c=S[h],t),//, true
t+=c.length;n.addGroup(e,i.length/3-e,1)}()}this.addAttribute("position",new on(i,3)),this.addAttribute("uv",new on(r,2)),this.computeVertexNormals()}Zr.prototype=Object.create(Qt.prototype),Zr.prototype.constructor=Zr,Jr.prototype=Object.create(un.prototype),Jr.prototype.constructor=Jr;var Qr={generateTopUV:function(e,t,n,i,r){var q=t[3*n],a=t[3*n+1],o=t[3*i],s=t[3*i+1],l=t[3*r],c=t[3*r+1];return[new _t(q,a),new _t(o,s),new _t(l,c)]},generateSideWallUV:function(e,t,n,i,r,q){var a=t[3*n],o=t[3*n+1],s=t[3*n+2],l=t[3*i],c=t[3*i+1],h=t[3*i+2],u=t[3*r],d=t[3*r+1],m=t[3*r+2],p=t[3*q],f=t[3*q+1],g=t[3*q+2];return Math.abs(o-c)<.01?[new _t(a,1-s),new _t(l,1-h),new _t(u,1-m),new _t(p,1-g)]:[new _t(o,1-s),new _t(c,1-h),new _t(d,1-m),new _t(f,1-g)]}};
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author alteredq / http://alteredqualia.com/
 *
 * Text = 3D Text
 *
 * parameters = {
 *  font: <THREE.Font>, // font
 *
 *  size: <float>, // size of the text
 *  height: <float>, // thickness to extrude text
 *  curveSegments: <int>, // number of points on the curves
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into text bevel goes
 *  bevelSize: <float> // how far from text outline is bevel
 * }
 */
// TextGeometry
function Kr(e,t){Qt.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new $r(e,t)),this.mergeVertices()}// TextBufferGeometry
function $r(e,t){var n=(t=t||{}).font;if(!n||!n.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Qt;var i=n.generateShapes(e,t.size,t.curveSegments);// translate parameters to ExtrudeGeometry API
t.amount=void 0!==t.height?t.height:50,// defaults
void 0===t.bevelThickness&&(t.bevelThickness=10),void 0===t.bevelSize&&(t.bevelSize=8),void 0===t.bevelEnabled&&(t.bevelEnabled=!1),Jr.call(this,i,t),this.type="TextBufferGeometry"}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author Mugen87 / https://github.com/Mugen87
 */
// SphereGeometry
function eq(e,t,n,i,r,q,a){Qt.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:q,thetaLength:a},this.fromBufferGeometry(new tq(e,t,n,i,r,q,a)),this.mergeVertices()}// SphereBufferGeometry
function tq(e,t,n,i,r,q,a){un.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:q,thetaLength:a},e=e||1,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=void 0!==i?i:0,r=void 0!==r?r:2*Math.PI;var o,s,l=(q=void 0!==q?q:0)+(a=void 0!==a?a:Math.PI),c=0,h=[],u=new Et,d=new Et,m=[],p=[],f=[],g=[];// generate vertices, normals and uvs
for(s=0;s<=n;s++){var v=[],x=s/n;for(o=0;o<=t;o++){var y=o/t;// vertex
u.x=-e*Math.cos(i+y*r)*Math.sin(q+x*a),u.y=e*Math.cos(q+x*a),u.z=e*Math.sin(i+y*r)*Math.sin(q+x*a),p.push(u.x,u.y,u.z),// normal
d.set(u.x,u.y,u.z).normalize(),f.push(d.x,d.y,d.z),// uv
g.push(y,1-x),v.push(c++)}h.push(v)}// indices
for(s=0;s<n;s++)for(o=0;o<t;o++){var _=h[s][o+1],b=h[s][o],w=h[s+1][o],E=h[s+1][o+1];(0!==s||q>0)&&m.push(_,b,E),(s!==n-1||l<Math.PI)&&m.push(b,w,E)}// build geometry
this.setIndex(m),this.addAttribute("position",new on(p,3)),this.addAttribute("normal",new on(f,3)),this.addAttribute("uv",new on(g,2))}
/**
 * @author Kaleb Murphy
 * @author Mugen87 / https://github.com/Mugen87
 */
// RingGeometry
function nq(e,t,n,i,r,q){Qt.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:q},this.fromBufferGeometry(new iq(e,t,n,i,r,q)),this.mergeVertices()}// RingBufferGeometry
function iq(e,t,n,i,r,q){un.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:q},e=e||.5,t=t||1,r=void 0!==r?r:0,q=void 0!==q?q:2*Math.PI,n=void 0!==n?Math.max(3,n):8;// buffers
var a,o,s,l=[],c=[],h=[],u=[],d=e,m=(t-e)/(i=void 0!==i?Math.max(1,i):1),p=new Et,f=new _t;// generate vertices, normals and uvs
for(o=0;o<=i;o++){for(s=0;s<=n;s++)// values are generate from the inside of the ring to the outside
a=r+s/n*q,// vertex
p.x=d*Math.cos(a),p.y=d*Math.sin(a),c.push(p.x,p.y,p.z),// normal
h.push(0,0,1),// uv
f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y);// increase the radius for next row of vertices
d+=m}// indices
for(o=0;o<i;o++){var g=o*(n+1);for(s=0;s<n;s++){var v=a=s+g,x=a+n+1,y=a+n+2,_=a+1;// faces
l.push(v,x,_),l.push(x,y,_)}}// build geometry
this.setIndex(l),this.addAttribute("position",new on(c,3)),this.addAttribute("normal",new on(h,3)),this.addAttribute("uv",new on(u,2))}
/**
 * @author astrodud / http://astrodud.isgreat.org/
 * @author zz85 / https://github.com/zz85
 * @author bhouston / http://clara.io
 * @author Mugen87 / https://github.com/Mugen87
 */
// LatheGeometry
function rq(e,t,n,i){Qt.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new qq(e,t,n,i)),this.mergeVertices()}// LatheBufferGeometry
function qq(e,t,n,i){un.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||2*Math.PI,// clamp phiLength so it's in range of [ 0, 2PI ]
i=yt.clamp(i,0,2*Math.PI);// buffers
var r,q,a,o=[],s=[],l=[],c=1/t,h=new Et,u=new _t;// generate vertices and uvs
for(q=0;q<=t;q++){var d=n+q*c*i,m=Math.sin(d),p=Math.cos(d);for(a=0;a<=e.length-1;a++)// vertex
h.x=e[a].x*m,h.y=e[a].y,h.z=e[a].x*p,s.push(h.x,h.y,h.z),// uv
u.x=q/t,u.y=a/(e.length-1),l.push(u.x,u.y)}// indices
for(q=0;q<t;q++)for(a=0;a<e.length-1;a++){var f=r=a+q*e.length,g=r+e.length,v=r+e.length+1,x=r+1;// faces
o.push(f,g,x),o.push(g,v,x)}// build geometry
// if the geometry is closed, we need to average the normals along the seam.
// because the corresponding vertices are identical (but still have different UVs).
if(this.setIndex(o),this.addAttribute("position",new on(s,3)),this.addAttribute("uv",new on(l,2)),// generate normals
this.computeVertexNormals(),i===2*Math.PI){var y=this.attributes.normal.array,_=new Et,b=new Et,w=new Et;for(// this is the buffer offset for the last line of vertices
r=t*e.length*3,q=0,a=0;q<e.length;q++,a+=3)// select the normal of the vertex in the first line
_.x=y[a+0],_.y=y[a+1],_.z=y[a+2],// select the normal of the vertex in the last line
b.x=y[r+a+0],b.y=y[r+a+1],b.z=y[r+a+2],// average normals
w.addVectors(_,b).normalize(),// assign the new values to both normals
y[a+0]=y[r+a+0]=w.x,y[a+1]=y[r+a+1]=w.y,y[a+2]=y[r+a+2]=w.z}}
/**
 * @author jonobr1 / http://jonobr1.com
 * @author Mugen87 / https://github.com/Mugen87
 */
// ShapeGeometry
function aq(e,t){Qt.call(this),this.type="ShapeGeometry","object"===(void 0===t?"undefined":i(t))&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new oq(e,t)),this.mergeVertices()}// ShapeBufferGeometry
function oq(e,t){un.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;// buffers
var n=[],i=[],r=[],q=[],a=0,o=0;// allow single and array values for "shapes" parameter
if(!1===Array.isArray(e))l(e);else for(var s=0;s<e.length;s++)l(e[s]),this.addGroup(a,o,s),// enables MultiMaterial support
a+=o,o=0;// build geometry
// helper functions
function l(e){var a,s,l,c=i.length/3,h=e.extractPoints(t),u=h.shape,d=h.holes;// check direction of vertices
if(!1===Wr.isClockWise(u))// also check if holes are in the opposite direction
for(u=u.reverse(),a=0,s=d.length;a<s;a++)l=d[a],!0===Wr.isClockWise(l)&&(d[a]=l.reverse());var m=Wr.triangulateShape(u,d);// join vertices of inner and outer paths to a single array
for(a=0,s=d.length;a<s;a++)l=d[a],u=u.concat(l);// vertices, normals, uvs
for(a=0,s=u.length;a<s;a++){var p=u[a];i.push(p.x,p.y,0),r.push(0,0,1),q.push(p.x,p.y)}// incides
for(a=0,s=m.length;a<s;a++){var f=m[a],g=f[0]+c,v=f[1]+c,x=f[2]+c;n.push(g,v,x),o+=3}}this.setIndex(n),this.addAttribute("position",new on(i,3)),this.addAttribute("normal",new on(r,3)),this.addAttribute("uv",new on(q,2))}//
function sq(e,t){if(t.shapes=[],Array.isArray(e))for(var n=0,i=e.length;n<i;n++){var r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}
/**
 * @author WestLangley / http://github.com/WestLangley
 * @author Mugen87 / https://github.com/Mugen87
 */function lq(e,t){un.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=void 0!==t?t:1;// buffer
var n,i,r,q,a=[],o=Math.cos(yt.DEG2RAD*t),s=[0,0],l={},c=["a","b","c"];// helper variables
e.isBufferGeometry?(q=new Qt).fromBufferGeometry(e):q=e.clone(),q.mergeVertices(),q.computeFaceNormals();// now create a data structure where each entry represents an edge with its adjoining faces
for(var h=q.vertices,u=q.faces,d=0,m=u.length;d<m;d++)for(var p=u[d],f=0;f<3;f++)n=p[c[f]],i=p[c[(f+1)%3]],s[0]=Math.min(n,i),s[1]=Math.max(n,i),void 0===l[r=s[0]+","+s[1]]?l[r]={index1:s[0],index2:s[1],face1:d,face2:void 0}:l[r].face2=d;// generate vertices
for(r in l){var g=l[r];// an edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. default = 1 degree.
if(void 0===g.face2||u[g.face1].normal.dot(u[g.face2].normal)<=o){var v=h[g.index1];a.push(v.x,v.y,v.z),v=h[g.index2],a.push(v.x,v.y,v.z)}}// build geometry
this.addAttribute("position",new on(a,3))}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// CylinderGeometry
function cq(e,t,n,i,r,q,a,o){Qt.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:q,thetaStart:a,thetaLength:o},this.fromBufferGeometry(new hq(e,t,n,i,r,q,a,o)),this.mergeVertices()}// CylinderBufferGeometry
function hq(e,t,n,i,r,q,a,o){un.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:q,thetaStart:a,thetaLength:o};var s=this;e=void 0!==e?e:1,t=void 0!==t?t:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,q=void 0!==q&&q,a=void 0!==a?a:0,o=void 0!==o?o:2*Math.PI;// buffers
var l=[],c=[],h=[],u=[],d=0,m=[],p=n/2,f=0;function g(n){var r,q,m,g=new _t,v=new Et,x=0,y=!0===n?e:t,_=!0===n?1:-1;// first we generate the center vertex data of the cap.
// because the geometry needs one set of uvs per face,
// we must generate a center vertex per face/segment
for(// save the index of the first center vertex
q=d,r=1;r<=i;r++)// vertex
c.push(0,p*_,0),// normal
h.push(0,_,0),// uv
u.push(.5,.5),// increase index
d++;// save the index of the last center vertex
// now we generate the surrounding vertices, normals and uvs
for(m=d,r=0;r<=i;r++){var b=r/i*o+a,w=Math.cos(b),E=Math.sin(b);// vertex
v.x=y*E,v.y=p*_,v.z=y*w,c.push(v.x,v.y,v.z),// normal
h.push(0,_,0),// uv
g.x=.5*w+.5,g.y=.5*E*_+.5,u.push(g.x,g.y),// increase index
d++}// generate indices
for(r=0;r<i;r++){var M=q+r,S=m+r;!0===n?// face top
l.push(S,S+1,M):// face bottom
l.push(S+1,S,M),x+=3}// add a group to the geometry. this will ensure multi material support
s.addGroup(f,x,!0===n?1:2),// calculate new start value for groups
f+=x}// generate geometry
!function(){var q,g,v=new Et,x=new Et,y=0,_=(t-e)/n;// generate vertices, normals and uvs
for(g=0;g<=r;g++){var b=[],w=g/r,E=w*(t-e)+e;for(q=0;q<=i;q++){var M=q/i,S=M*o+a,T=Math.sin(S),A=Math.cos(S);// vertex
x.x=E*T,x.y=-w*n+p,x.z=E*A,c.push(x.x,x.y,x.z),// normal
v.set(T,_,A).normalize(),h.push(v.x,v.y,v.z),// uv
u.push(M,1-w),// save index of vertex in respective row
b.push(d++)}// now save vertices of the row in our index array
m.push(b)}// generate indices
for(q=0;q<i;q++)for(g=0;g<r;g++){// we use the index array to access the correct indices
var R=m[g][q],L=m[g+1][q],C=m[g+1][q+1],P=m[g][q+1];// faces
l.push(R,L,P),l.push(L,C,P),// update group counter
y+=6}// add a group to the geometry. this will ensure multi material support
s.addGroup(f,y,0),// calculate new start value for groups
f+=y}(),!1===q&&(e>0&&g(!0),t>0&&g(!1)),// build geometry
this.setIndex(l),this.addAttribute("position",new on(c,3)),this.addAttribute("normal",new on(h,3)),this.addAttribute("uv",new on(u,2))}
/**
 * @author abelnation / http://github.com/abelnation
 */
// ConeGeometry
function uq(e,t,n,i,r,q,a){cq.call(this,0,e,t,n,i,r,q,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:q,thetaLength:a}}// ConeBufferGeometry
function dq(e,t,n,i,r,q,a){hq.call(this,0,e,t,n,i,r,q,a),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:q,thetaLength:a}}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author Mugen87 / https://github.com/Mugen87
 * @author hughes
 */
// CircleGeometry
function mq(e,t,n,i){Qt.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new pq(e,t,n,i)),this.mergeVertices()}// CircleBufferGeometry
function pq(e,t,n,i){un.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||1,t=void 0!==t?Math.max(3,t):8,n=void 0!==n?n:0,i=void 0!==i?i:2*Math.PI;// buffers
var r,q,a=[],o=[],s=[],l=[],c=new Et,h=new _t;for(// center point
o.push(0,0,0),s.push(0,0,1),l.push(.5,.5),q=0,r=3;q<=t;q++,r+=3){var u=n+q/t*i;// vertex
c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),// normal
s.push(0,0,1),// uvs
h.x=(o[r]/e+1)/2,h.y=(o[r+1]/e+1)/2,l.push(h.x,h.y)}// indices
for(r=1;r<=t;r++)a.push(r,r+1,0);// build geometry
this.setIndex(a),this.addAttribute("position",new on(o,3)),this.addAttribute("normal",new on(s,3)),this.addAttribute("uv",new on(l,2))}Kr.prototype=Object.create(Qt.prototype),Kr.prototype.constructor=Kr,$r.prototype=Object.create(Jr.prototype),$r.prototype.constructor=$r,eq.prototype=Object.create(Qt.prototype),eq.prototype.constructor=eq,tq.prototype=Object.create(un.prototype),tq.prototype.constructor=tq,nq.prototype=Object.create(Qt.prototype),nq.prototype.constructor=nq,iq.prototype=Object.create(un.prototype),iq.prototype.constructor=iq,rq.prototype=Object.create(Qt.prototype),rq.prototype.constructor=rq,qq.prototype=Object.create(un.prototype),qq.prototype.constructor=qq,aq.prototype=Object.create(Qt.prototype),aq.prototype.constructor=aq,aq.prototype.toJSON=function(){var e=Qt.prototype.toJSON.call(this);return sq(this.parameters.shapes,e)},oq.prototype=Object.create(un.prototype),oq.prototype.constructor=oq,oq.prototype.toJSON=function(){var e=un.prototype.toJSON.call(this);return sq(this.parameters.shapes,e)},lq.prototype=Object.create(un.prototype),lq.prototype.constructor=lq,cq.prototype=Object.create(Qt.prototype),cq.prototype.constructor=cq,hq.prototype=Object.create(un.prototype),hq.prototype.constructor=hq,uq.prototype=Object.create(cq.prototype),uq.prototype.constructor=uq,dq.prototype=Object.create(hq.prototype),dq.prototype.constructor=dq,mq.prototype=Object.create(Qt.prototype),mq.prototype.constructor=mq,pq.prototype=Object.create(un.prototype),pq.prototype.constructor=pq;var fq=Object.freeze({WireframeGeometry:qr,ParametricGeometry:ar,ParametricBufferGeometry:or,TetrahedronGeometry:cr,TetrahedronBufferGeometry:hr,OctahedronGeometry:ur,OctahedronBufferGeometry:dr,IcosahedronGeometry:mr,IcosahedronBufferGeometry:pr,DodecahedronGeometry:fr,DodecahedronBufferGeometry:gr,PolyhedronGeometry:sr,PolyhedronBufferGeometry:lr,TubeGeometry:vr,TubeBufferGeometry:xr,TorusKnotGeometry:yr,TorusKnotBufferGeometry:_r,TorusGeometry:br,TorusBufferGeometry:wr,TextGeometry:Kr,TextBufferGeometry:$r,SphereGeometry:eq,SphereBufferGeometry:tq,RingGeometry:nq,RingBufferGeometry:iq,PlaneGeometry:pn,PlaneBufferGeometry:fn,LatheGeometry:rq,LatheBufferGeometry:qq,ShapeGeometry:aq,ShapeBufferGeometry:oq,ExtrudeGeometry:Zr,ExtrudeBufferGeometry:Jr,EdgesGeometry:lq,ConeGeometry:uq,ConeBufferGeometry:dq,CylinderGeometry:cq,CylinderBufferGeometry:hq,CircleGeometry:mq,CircleBufferGeometry:pq,BoxGeometry:dn,BoxBufferGeometry:mn});
/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  color: <THREE.Color>
 * }
 */function gq(e){vn.call(this),this.type="ShadowMaterial",this.color=new Ft(0),this.transparent=!0,this.setValues(e)}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function vq(e){yn.call(this,e),this.type="RawShaderMaterial"}
/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  color: <hex>,
 *  roughness: <float>,
 *  metalness: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  roughnessMap: new THREE.Texture( <Image> ),
 *
 *  metalnessMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  envMapIntensity: <float>
 *
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function xq(e){vn.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),// diffuse
this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}
/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  reflectivity: <float>
 * }
 */
function yq(e){xq.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,// maps to F0 = 0.04
this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(e)}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  specular: <hex>,
 *  shininess: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function _q(e){vn.call(this),this.type="MeshPhongMaterial",this.color=new Ft(16777215),// diffuse
this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}
/**
 * @author takahirox / http://github.com/takahirox
 *
 * parameters = {
 *  gradientMap: new THREE.Texture( <Image> )
 * }
 */
function bq(e){_q.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(e)}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function wq(e){vn.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function Eq(e){vn.call(this),this.type="MeshLambertMaterial",this.color=new Ft(16777215),// diffuse
this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *
 *  scale: <float>,
 *  dashSize: <float>,
 *  gapSize: <float>
 * }
 */
function Mq(e){Zi.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}gq.prototype=Object.create(vn.prototype),gq.prototype.constructor=gq,gq.prototype.isShadowMaterial=!0,gq.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this},vq.prototype=Object.create(yn.prototype),vq.prototype.constructor=vq,vq.prototype.isRawShaderMaterial=!0,xq.prototype=Object.create(vn.prototype),xq.prototype.constructor=xq,xq.prototype.isMeshStandardMaterial=!0,xq.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},yq.prototype=Object.create(xq.prototype),yq.prototype.constructor=yq,yq.prototype.isMeshPhysicalMaterial=!0,yq.prototype.copy=function(e){return xq.prototype.copy.call(this,e),this.defines={PHYSICAL:""},this.reflectivity=e.reflectivity,this.clearCoat=e.clearCoat,this.clearCoatRoughness=e.clearCoatRoughness,this},_q.prototype=Object.create(vn.prototype),_q.prototype.constructor=_q,_q.prototype.isMeshPhongMaterial=!0,_q.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},bq.prototype=Object.create(_q.prototype),bq.prototype.constructor=bq,bq.prototype.isMeshToonMaterial=!0,bq.prototype.copy=function(e){return _q.prototype.copy.call(this,e),this.gradientMap=e.gradientMap,this},wq.prototype=Object.create(vn.prototype),wq.prototype.constructor=wq,wq.prototype.isMeshNormalMaterial=!0,wq.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},Eq.prototype=Object.create(vn.prototype),Eq.prototype.constructor=Eq,Eq.prototype.isMeshLambertMaterial=!0,Eq.prototype.copy=function(e){return vn.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},Mq.prototype=Object.create(Zi.prototype),Mq.prototype.constructor=Mq,Mq.prototype.isLineDashedMaterial=!0,Mq.prototype.copy=function(e){return Zi.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Sq=Object.freeze({ShadowMaterial:gq,SpriteMaterial:Gi,RawShaderMaterial:vq,ShaderMaterial:yn,PointsMaterial:$i,MeshPhysicalMaterial:yq,MeshStandardMaterial:xq,MeshPhongMaterial:_q,MeshToonMaterial:bq,MeshNormalMaterial:wq,MeshLambertMaterial:Eq,MeshDepthMaterial:Ri,MeshDistanceMaterial:Li,MeshBasicMaterial:xn,LineDashedMaterial:Mq,LineBasicMaterial:Zi,Material:vn}),Tq={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(// console.log( 'THREE.Cache', 'Adding key:', key );
this.files[e]=t)},get:function(e){if(!1!==this.enabled)// console.log( 'THREE.Cache', 'Checking key:', key );
return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};
/**
 * @author mrdoob / http://mrdoob.com/
 */
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Aq(e,t,n){var i=this,r=!1,q=0,a=0,o=void 0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){a++,!1===r&&void 0!==i.onStart&&i.onStart(e,q,a),r=!0},this.itemEnd=function(e){q++,void 0!==i.onProgress&&i.onProgress(e,q,a),q===a&&(r=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(e){void 0!==i.onError&&i.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this}}var Rq=new Aq,Lq={};
/**
 * @author mrdoob / http://mrdoob.com/
 */function Cq(e){this.manager=void 0!==e?e:Rq}
/**
 * @author mrdoob / http://mrdoob.com/
 *
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 */
function Pq(e){this.manager=void 0!==e?e:Rq,// override in sub classes
this._parser=null}
/**
 * @author Nikos M. / https://github.com/foo123/
 *
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 */
function Oq(e){this.manager=void 0!==e?e:Rq,// override in sub classes
this._parser=null}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Iq(e){this.manager=void 0!==e?e:Rq}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Nq(e){this.manager=void 0!==e?e:Rq}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Dq(e){this.manager=void 0!==e?e:Rq}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Extensible curve object
 *
 * Some common of curve methods:
 * .getPoint( t, optionalTarget ), .getTangent( t )
 * .getPointAt( u, optionalTarget ), .getTangentAt( u )
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/
/**************************************************************
 *	Abstract Curve base class
 **************************************************************/
function Uq(){this.type="Curve",this.arcLengthDivisions=200}function Bq(e,t,n,i,r,q,a,o){Uq.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=q||2*Math.PI,this.aClockwise=a||!1,this.aRotation=o||0}function Fq(e,t,n,i,r,q){Bq.call(this,e,t,n,n,i,r,q),this.type="ArcCurve"}
/**
 * @author zz85 https://github.com/zz85
 *
 * Centripetal CatmullRom Curve - which is useful for avoiding
 * cusps and self-intersections in non-uniform catmull rom curves.
 * http://www.cemyuksel.com/research/catmullrom_param/catmullrom.pdf
 *
 * curve.type accepts centripetal(default), chordal and catmullrom
 * curve.tension is used for catmullrom which defaults to 0.5
 */
/*
Based on an optimized c++ solution in
 - http://stackoverflow.com/questions/9489736/catmull-rom-curve-with-no-cusps-and-no-self-intersections/
 - http://ideone.com/NoEbVM

This CubicPoly class could be used for reusing some variables and calculations,
but for three.js curve use, it could be possible inlined and flatten into a single function call
which can be placed in CurveUtils.
*/
function zq(){var e=0,t=0,n=0,i=0;
/*
	 * Compute coefficients for a cubic polynomial
	 *   p(s) = c0 + c1*s + c2*s^2 + c3*s^3
	 * such that
	 *   p(0) = x0, p(1) = x1
	 *  and
	 *   p'(0) = t0, p'(1) = t1.
	 */function r(r,q,a,o){e=r,t=a,n=-3*r+3*q-2*a-o,i=2*r-2*q+a+o}return{initCatmullRom:function(e,t,n,i,q){r(t,n,q*(n-e),q*(i-t))},initNonuniformCatmullRom:function(e,t,n,i,q,a,o){// compute tangents when parameterized in [t1,t2]
var s=(t-e)/q-(n-e)/(q+a)+(n-t)/a,l=(n-t)/a-(i-t)/(a+o)+(i-n)/o;r(t,n,// rescale tangents for parametrization in [0,1]
s*=a,l*=a)},calc:function(r){var q=r*r;return e+t*r+n*q+i*(q*r)}}}//
Object.assign(Cq.prototype,{load:function(e,t,n,i){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var r=this,q=Tq.get(e);if(void 0!==q)return r.manager.itemStart(e),setTimeout(function(){t&&t(q),r.manager.itemEnd(e)},0),q;// Check if request is duplicate
if(void 0===Lq[e]){// Check for data: URI
var a=e.match(/^data:(.*?)(;base64)?,(.*)$/);// Safari can not handle Data URIs through XMLHttpRequest so process manually
if(a){var o=a[1],s=!!a[2],l=a[3];l=window.decodeURIComponent(l),s&&(l=window.atob(l));try{var c,h=(this.responseType||"").toLowerCase();switch(h){case"arraybuffer":case"blob":for(var u=new Uint8Array(l.length),d=0;d<l.length;d++)u[d]=l.charCodeAt(d);c="blob"===h?new Blob([u.buffer],{type:o}):u.buffer;break;case"document":var m=new DOMParser;c=m.parseFromString(l,o);break;case"json":c=JSON.parse(l);break;default:// 'text' or other
c=l}// Wait for next browser tick like standard XMLHttpRequest event dispatching does
window.setTimeout(function(){t&&t(c),r.manager.itemEnd(e)},0)}catch(t){// Wait for next browser tick like standard XMLHttpRequest event dispatching does
window.setTimeout(function(){i&&i(t),r.manager.itemEnd(e),r.manager.itemError(e)},0)}}else{// Initialise array for duplicate requests
Lq[e]=[],Lq[e].push({onLoad:t,onProgress:n,onError:i});var p=new XMLHttpRequest;for(var f in p.open("GET",e,!0),p.addEventListener("load",function(t){var n=this.response;Tq.add(e,n);var i=Lq[e];if(delete Lq[e],200===this.status){for(var q=0,a=i.length;q<a;q++){(o=i[q]).onLoad&&o.onLoad(n)}r.manager.itemEnd(e)}else if(0===this.status){// Some browsers return HTTP Status 0 when using non-http protocol
// e.g. 'file://' or 'data://'. Handle as success.
console.warn("THREE.FileLoader: HTTP Status 0 received.");for(q=0,a=i.length;q<a;q++){(o=i[q]).onLoad&&o.onLoad(n)}r.manager.itemEnd(e)}else{for(q=0,a=i.length;q<a;q++){var o;(o=i[q]).onError&&o.onError(t)}r.manager.itemEnd(e),r.manager.itemError(e)}},!1),p.addEventListener("progress",function(t){for(var n=Lq[e],i=0,r=n.length;i<r;i++){var q=n[i];q.onProgress&&q.onProgress(t)}},!1),p.addEventListener("error",function(t){var n=Lq[e];delete Lq[e];for(var i=0,q=n.length;i<q;i++){var a=n[i];a.onError&&a.onError(t)}r.manager.itemEnd(e),r.manager.itemError(e)},!1),void 0!==this.responseType&&(p.responseType=this.responseType),void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials),p.overrideMimeType&&p.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain"),this.requestHeader)p.setRequestHeader(f,this.requestHeader[f]);p.send(null)}return r.manager.itemStart(e),p}Lq[e].push({onLoad:t,onProgress:n,onError:i})},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}}),Object.assign(Pq.prototype,{load:function(e,t,n,i){var r=this,q=[],a=new ir;a.image=q;var o=new Cq(this.manager);function s(s){o.load(e[s],function(e){var n=r._parser(e,!0);q[s]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},6===(l+=1)&&(1===n.mipmapCount&&(a.minFilter=me),a.format=n.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(o.setPath(this.path),o.setResponseType("arraybuffer"),Array.isArray(e))for(var l=0,c=0,h=e.length;c<h;++c)s(c);else// compressed cubemap texture stored in a single DDS file
o.load(e,function(e){var n=r._parser(e,!0);if(n.isCubemap)for(var i=n.mipmaps.length/n.mipmapCount,o=0;o<i;o++){q[o]={mipmaps:[]};for(var s=0;s<n.mipmapCount;s++)q[o].mipmaps.push(n.mipmaps[o*n.mipmapCount+s]),q[o].format=n.format,q[o].width=n.width,q[o].height=n.height}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps;1===n.mipmapCount&&(a.minFilter=me),a.format=n.format,a.needsUpdate=!0,t&&t(a)},n,i);return a},setPath:function(e){return this.path=e,this}}),Object.assign(Oq.prototype,{load:function(e,t,n,i){var r=this,q=new Ct,a=new Cq(this.manager);return a.setResponseType("arraybuffer"),a.load(e,function(e){var n=r._parser(e);n&&(void 0!==n.image?q.image=n.image:void 0!==n.data&&(q.image.width=n.width,q.image.height=n.height,q.image.data=n.data),q.wrapS=void 0!==n.wrapS?n.wrapS:le,q.wrapT=void 0!==n.wrapT?n.wrapT:le,q.magFilter=void 0!==n.magFilter?n.magFilter:me,q.minFilter=void 0!==n.minFilter?n.minFilter:fe,q.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.format&&(q.format=n.format),void 0!==n.type&&(q.type=n.type),void 0!==n.mipmaps&&(q.mipmaps=n.mipmaps),1===n.mipmapCount&&(q.minFilter=me),q.needsUpdate=!0,t&&t(q,n))},n,i),q}}),Object.assign(Iq.prototype,{crossOrigin:"Anonymous",load:function(e,t,n,i){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var r=this,q=Tq.get(e);if(void 0!==q)return r.manager.itemStart(e),setTimeout(function(){t&&t(q),r.manager.itemEnd(e)},0),q;var a=document.createElementNS("http://www.w3.org/1999/xhtml","img");return a.addEventListener("load",function(){Tq.add(e,this),t&&t(this),r.manager.itemEnd(e)},!1),
/*
		image.addEventListener( 'progress', function ( event ) {

			if ( onProgress ) onProgress( event );

		}, false );
		*/
a.addEventListener("error",function(t){i&&i(t),r.manager.itemEnd(e),r.manager.itemError(e)},!1),"data:"!==e.substr(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}}),Object.assign(Nq.prototype,{crossOrigin:"Anonymous",load:function(e,t,n,i){var r=new Sn,q=new Iq(this.manager);q.setCrossOrigin(this.crossOrigin),q.setPath(this.path);var a=0;function o(n){q.load(e[n],function(e){r.images[n]=e,6===++a&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(var s=0;s<e.length;++s)o(s);return r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}}),Object.assign(Dq.prototype,{crossOrigin:"Anonymous",load:function(e,t,n,i){var r=new Tt,q=new Iq(this.manager);return q.setCrossOrigin(this.crossOrigin),q.setPath(this.path),q.load(e,function(n){r.image=n;// JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
var i=e.search(/\.(jpg|jpeg)$/)>0||0===e.search(/^data\:image\/jpeg/);r.format=i?Le:Ce,r.needsUpdate=!0,void 0!==t&&t(r)},n,i),r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}}),Object.assign(Uq.prototype,{// Virtual base class method to overwrite and implement in subclasses
//	- t [0 .. 1]
getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},// Get point at relative position in curve according to arc length
// - u [0 .. 1]
getPointAt:function(e,t){var n=this.getUtoTmapping(e);return this.getPoint(n,t)},// Get sequence of points using getPoint( t )
getPoints:function(e){void 0===e&&(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},// Get sequence of points using getPointAt( u )
getSpacedPoints:function(e){void 0===e&&(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},// Get total curve arc length
getLength:function(){var e=this.getLengths();return e[e.length-1]},// Get list of cumulative segment lengths
getLengths:function(e){if(void 0===e&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t,n,i=[],r=this.getPoint(0),q=0;for(i.push(0),n=1;n<=e;n++)q+=(t=this.getPoint(n/e)).distanceTo(r),i.push(q),r=t;return this.cacheArcLengths=i,i;// { sums: cache, sum: sum }; Sum is in the last element.
},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},// Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
getUtoTmapping:function(e,t){var n,i=this.getLengths(),r=0,q=i.length;// The targeted u distance value to get
n=t||e*i[q-1];// binary search for the index with largest value smaller than target u distance
for(var a,o=0,s=q-1;o<=s;)if((// less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats
a=i[r=Math.floor(o+(s-o)/2)]-n)<0)o=r+1;else{if(!(a>0)){s=r;break;// DONE
}s=r-1}if(i[r=s]===n)return r/(q-1);// we could get finer grain at lengths, or use simple interpolation between two points
var l=i[r];return(r+(n-l)/(i[r+1]-l))/(q-1)},// Returns a unit vector tangent at t
// In case any sub curve does not implement its tangent derivation,
// 2 points a small delta apart will be used to find its gradient
// which seems to give a reasonable approximation
getTangent:function(e){var t=e-1e-4,n=e+1e-4;// Capping in case of danger
t<0&&(t=0),n>1&&(n=1);var i=this.getPoint(t);return this.getPoint(n).clone().sub(i).normalize()},getTangentAt:function(e){var t=this.getUtoTmapping(e);return this.getTangent(t)},computeFrenetFrames:function(e,t){// see http://www.cs.indiana.edu/pub/techreports/TR425.pdf
var n,i,r,q=new Et,a=[],o=[],s=[],l=new Et,c=new bt;// compute the tangent vectors for each segment on the curve
for(n=0;n<=e;n++)i=n/e,a[n]=this.getTangentAt(i),a[n].normalize();// select an initial normal vector perpendicular to the first tangent vector,
// and in the direction of the minimum tangent xyz component
o[0]=new Et,s[0]=new Et;var h=Number.MAX_VALUE,u=Math.abs(a[0].x),d=Math.abs(a[0].y),m=Math.abs(a[0].z);// compute the slowly-varying normal and binormal vectors for each segment on the curve
for(u<=h&&(h=u,q.set(1,0,0)),d<=h&&(h=d,q.set(0,1,0)),m<=h&&q.set(0,0,1),l.crossVectors(a[0],q).normalize(),o[0].crossVectors(a[0],l),s[0].crossVectors(a[0],o[0]),n=1;n<=e;n++)o[n]=o[n-1].clone(),s[n]=s[n-1].clone(),l.crossVectors(a[n-1],a[n]),l.length()>Number.EPSILON&&(l.normalize(),r=Math.acos(yt.clamp(a[n-1].dot(a[n]),-1,1)),// clamp for floating pt errors
o[n].applyMatrix4(c.makeRotationAxis(l,r))),s[n].crossVectors(a[n],o[n]);// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same
if(!0===t)for(r=Math.acos(yt.clamp(o[0].dot(o[e]),-1,1)),r/=e,a[0].dot(l.crossVectors(o[0],o[e]))>0&&(r=-r),n=1;n<=e;n++)// twist a little...
o[n].applyMatrix4(c.makeRotationAxis(a[n],r*n)),s[n].crossVectors(a[n],o[n]);return{tangents:a,normals:o,binormals:s}},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){var e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}),Bq.prototype=Object.create(Uq.prototype),Bq.prototype.constructor=Bq,Bq.prototype.isEllipseCurve=!0,Bq.prototype.getPoint=function(e,t){// ensures that deltaAngle is 0 .. 2 PI
for(var n=t||new _t,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,q=Math.abs(r)<Number.EPSILON;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=q?0:i),!0!==this.aClockwise||q||(r===i?r=-i:r-=i);var a=this.aStartAngle+e*r,o=this.aX+this.xRadius*Math.cos(a),s=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){var l=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=o-this.aX,u=s-this.aY;// Rotate the point about the center of the ellipse.
o=h*l-u*c+this.aX,s=h*c+u*l+this.aY}return n.set(o,s)},Bq.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},Bq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e},Bq.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},Fq.prototype=Object.create(Bq.prototype),Fq.prototype.constructor=Fq,Fq.prototype.isArcCurve=!0;var Hq=new Et,kq=new zq,Gq=new zq,jq=new zq;function Vq(e,t,n,i){Uq.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i||.5}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Bezier Curves formulas obtained from
 * http://en.wikipedia.org/wiki/Bézier_curve
 */
function Wq(e,t,n,i,r){var q=.5*(i-t),a=.5*(r-n),o=e*e;return(2*n-2*i+q+a)*(e*o)+(-3*n+3*i-2*q-a)*o+q*e+n}//
function Xq(e,t,n,i){return function(e,t){var n=1-e;return n*n*t}(e,t)+function(e,t){return 2*(1-e)*e*t}(e,n)+function(e,t){return e*e*t}(e,i)}//
function Yq(e,t,n,i,r){return function(e,t){var n=1-e;return n*n*n*t}(e,t)+function(e,t){var n=1-e;return 3*n*n*e*t}(e,n)+function(e,t){return 3*(1-e)*e*e*t}(e,i)+function(e,t){return e*e*e*t}(e,r)}function Zq(e,t,n,i){Uq.call(this),this.type="CubicBezierCurve",this.v0=e||new _t,this.v1=t||new _t,this.v2=n||new _t,this.v3=i||new _t}function Jq(e,t,n,i){Uq.call(this),this.type="CubicBezierCurve3",this.v0=e||new Et,this.v1=t||new Et,this.v2=n||new Et,this.v3=i||new Et}function Qq(e,t){Uq.call(this),this.type="LineCurve",this.v1=e||new _t,this.v2=t||new _t}function Kq(e,t){Uq.call(this),this.type="LineCurve3",this.v1=e||new Et,this.v2=t||new Et}function $q(e,t,n){Uq.call(this),this.type="QuadraticBezierCurve",this.v0=e||new _t,this.v1=t||new _t,this.v2=n||new _t}function ea(e,t,n){Uq.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new Et,this.v1=t||new Et,this.v2=n||new Et}function ta(e/* array of Vector2 */){Uq.call(this),this.type="SplineCurve",this.points=e||[]}Vq.prototype=Object.create(Uq.prototype),Vq.prototype.constructor=Vq,Vq.prototype.isCatmullRomCurve3=!0,Vq.prototype.getPoint=function(e,t){var n,i,r,q,a=t||new Et,o=this.points,s=o.length,l=(s-(this.closed?0:1))*e,c=Math.floor(l),h=l-c;if(this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:0===h&&c===s-1&&(c=s-2,h=1),// 4 points
this.closed||c>0?n=o[(c-1)%s]:(// extrapolate first point
Hq.subVectors(o[0],o[1]).add(o[0]),n=Hq),i=o[c%s],r=o[(c+1)%s],this.closed||c+2<s?q=o[(c+2)%s]:(// extrapolate last point
Hq.subVectors(o[s-1],o[s-2]).add(o[s-1]),q=Hq),"centripetal"===this.curveType||"chordal"===this.curveType){// init Centripetal / Chordal Catmull-Rom
var u="chordal"===this.curveType?.5:.25,d=Math.pow(n.distanceToSquared(i),u),m=Math.pow(i.distanceToSquared(r),u),p=Math.pow(r.distanceToSquared(q),u);// safety check for repeated points
m<1e-4&&(m=1),d<1e-4&&(d=m),p<1e-4&&(p=m),kq.initNonuniformCatmullRom(n.x,i.x,r.x,q.x,d,m,p),Gq.initNonuniformCatmullRom(n.y,i.y,r.y,q.y,d,m,p),jq.initNonuniformCatmullRom(n.z,i.z,r.z,q.z,d,m,p)}else"catmullrom"===this.curveType&&(kq.initCatmullRom(n.x,i.x,r.x,q.x,this.tension),Gq.initCatmullRom(n.y,i.y,r.y,q.y,this.tension),jq.initCatmullRom(n.z,i.z,r.z,q.z,this.tension));return a.set(kq.calc(h),Gq.calc(h),jq.calc(h)),a},Vq.prototype.copy=function(e){Uq.prototype.copy.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Vq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);e.points=[];for(var t=0,n=this.points.length;t<n;t++){var i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e},Vq.prototype.fromJSON=function(e){Uq.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var i=e.points[t];this.points.push((new Et).fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Zq.prototype=Object.create(Uq.prototype),Zq.prototype.constructor=Zq,Zq.prototype.isCubicBezierCurve=!0,Zq.prototype.getPoint=function(e,t){var n=t||new _t,i=this.v0,r=this.v1,q=this.v2,a=this.v3;return n.set(Yq(e,i.x,r.x,q.x,a.x),Yq(e,i.y,r.y,q.y,a.y)),n},Zq.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Zq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Zq.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this},Jq.prototype=Object.create(Uq.prototype),Jq.prototype.constructor=Jq,Jq.prototype.isCubicBezierCurve3=!0,Jq.prototype.getPoint=function(e,t){var n=t||new Et,i=this.v0,r=this.v1,q=this.v2,a=this.v3;return n.set(Yq(e,i.x,r.x,q.x,a.x),Yq(e,i.y,r.y,q.y,a.y),Yq(e,i.z,r.z,q.z,a.z)),n},Jq.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Jq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Jq.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this},Qq.prototype=Object.create(Uq.prototype),Qq.prototype.constructor=Qq,Qq.prototype.isLineCurve=!0,Qq.prototype.getPoint=function(e,t){var n=t||new _t;return 1===e?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},// Line curve is linear, so we can overwrite default getPointAt
Qq.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},Qq.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()},Qq.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Qq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Qq.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},Kq.prototype=Object.create(Uq.prototype),Kq.prototype.constructor=Kq,Kq.prototype.isLineCurve3=!0,Kq.prototype.getPoint=function(e,t){var n=t||new Et;return 1===e?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},// Line curve is linear, so we can overwrite default getPointAt
Kq.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},Kq.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Kq.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Kq.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},$q.prototype=Object.create(Uq.prototype),$q.prototype.constructor=$q,$q.prototype.isQuadraticBezierCurve=!0,$q.prototype.getPoint=function(e,t){var n=t||new _t,i=this.v0,r=this.v1,q=this.v2;return n.set(Xq(e,i.x,r.x,q.x),Xq(e,i.y,r.y,q.y)),n},$q.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},$q.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},$q.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},ea.prototype=Object.create(Uq.prototype),ea.prototype.constructor=ea,ea.prototype.isQuadraticBezierCurve3=!0,ea.prototype.getPoint=function(e,t){var n=t||new Et,i=this.v0,r=this.v1,q=this.v2;return n.set(Xq(e,i.x,r.x,q.x),Xq(e,i.y,r.y,q.y),Xq(e,i.z,r.z,q.z)),n},ea.prototype.copy=function(e){return Uq.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},ea.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},ea.prototype.fromJSON=function(e){return Uq.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},ta.prototype=Object.create(Uq.prototype),ta.prototype.constructor=ta,ta.prototype.isSplineCurve=!0,ta.prototype.getPoint=function(e,t){var n=t||new _t,i=this.points,r=(i.length-1)*e,q=Math.floor(r),a=r-q,o=i[0===q?q:q-1],s=i[q],l=i[q>i.length-2?i.length-1:q+1],c=i[q>i.length-3?i.length-1:q+2];return n.set(Wq(a,o.x,s.x,l.x,c.x),Wq(a,o.y,s.y,l.y,c.y)),n},ta.prototype.copy=function(e){Uq.prototype.copy.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var i=e.points[t];this.points.push(i.clone())}return this},ta.prototype.toJSON=function(){var e=Uq.prototype.toJSON.call(this);e.points=[];for(var t=0,n=this.points.length;t<n;t++){var i=this.points[t];e.points.push(i.toArray())}return e},ta.prototype.fromJSON=function(e){Uq.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var i=e.points[t];this.points.push((new _t).fromArray(i))}return this};var na=Object.freeze({ArcCurve:Fq,CatmullRomCurve3:Vq,CubicBezierCurve:Zq,CubicBezierCurve3:Jq,EllipseCurve:Bq,LineCurve:Qq,LineCurve3:Kq,QuadraticBezierCurve:$q,QuadraticBezierCurve3:ea,SplineCurve:ta});
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 **/
/**************************************************************
 *	Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/function ia(){Uq.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Creates free form 2d path using series of points, lines or curves.
 **/
function ra(e){ia.call(this),this.type="Path",this.currentPoint=new _t,e&&this.setFromPoints(e)}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Defines a 2d shape plane using paths.
 **/
// STEP 1 Create a path.
// STEP 2 Turn path into shape.
// STEP 3 ExtrudeGeometry takes in Shape/Shapes
// STEP 3a - Extract points from each shape, turn to vertices
// STEP 3b - Triangulate each shape, add faces.
function qa(e){ra.call(this,e),this.uuid=yt.generateUUID(),this.type="Shape",this.holes=[]}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function aa(e,t){Wt.call(this),this.type="Light",this.color=new Ft(e),this.intensity=void 0!==t?t:1,this.receiveShadow=void 0}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function oa(e,t,n){aa.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(Wt.DefaultUp),this.updateMatrix(),this.groundColor=new Ft(t)}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function sa(e){this.camera=e,this.bias=0,this.radius=1,this.mapSize=new _t(512,512),this.map=null,this.matrix=new bt}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function la(){sa.call(this,new Di(50,1,.5,500))}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function ca(e,t,n,i,r,q){aa.call(this,e,t),this.type="SpotLight",this.position.copy(Wt.DefaultUp),this.updateMatrix(),this.target=new Wt,Object.defineProperty(this,"power",{get:function(){// intensity = power per solid angle.
// ref: equation (17) from https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
return this.intensity*Math.PI},set:function(e){// intensity = power per solid angle.
// ref: equation (17) from https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
this.intensity=e/Math.PI}}),this.distance=void 0!==n?n:0,this.angle=void 0!==i?i:Math.PI/3,this.penumbra=void 0!==r?r:0,this.decay=void 0!==q?q:1,// for physically correct lights, should be 2.
this.shadow=new la}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function ha(e,t,n,i){aa.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){// intensity = power per solid angle.
// ref: equation (15) from https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
return 4*this.intensity*Math.PI},set:function(e){// intensity = power per solid angle.
// ref: equation (15) from https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
this.intensity=e/(4*Math.PI)}}),this.distance=void 0!==n?n:0,this.decay=void 0!==i?i:1,// for physically correct lights, should be 2.
this.shadow=new sa(new Di(90,1,.5,500))}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function ua(){sa.call(this,new Yt(-5,5,5,-5,.5,500))}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function da(e,t){aa.call(this,e,t),this.type="DirectionalLight",this.position.copy(Wt.DefaultUp),this.updateMatrix(),this.target=new Wt,this.shadow=new ua}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function ma(e,t){aa.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}
/**
 * @author abelnation / http://github.com/abelnation
 */
function pa(e,t,n,i){aa.call(this,e,t),this.type="RectAreaLight",this.width=void 0!==n?n:10,this.height=void 0!==i?i:10}
/**
 *
 * A Track that interpolates Strings
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function fa(e,t,n,i){Ta.call(this,e,t,n,i)}
/**
 *
 * A Track of Boolean keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ga(e,t,n){Ta.call(this,e,t,n)}
/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 * @author tschw
 */
function va(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}
/**
 * Spherical linear unit quaternion interpolant.
 *
 * @author tschw
 */
function xa(e,t,n,i){va.call(this,e,t,n,i)}
/**
 *
 * A Track of quaternion keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ya(e,t,n,i){Ta.call(this,e,t,n,i)}
/**
 *
 * A Track of keyframe values that represent color.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function _a(e,t,n,i){Ta.call(this,e,t,n,i)}
/**
 *
 * A Track of numeric keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ba(e,t,n,i){Ta.call(this,e,t,n,i)}
/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 *
 * @author tschw
 */
function wa(e,t,n,i){va.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}
/**
 * @author tschw
 */
function Ea(e,t,n,i){va.call(this,e,t,n,i)}
/**
 *
 * Interpolant that evaluates to the sample value at the position preceeding
 * the parameter.
 *
 * @author tschw
 */
function Ma(e,t,n,i){va.call(this,e,t,n,i)}ia.prototype=Object.assign(Object.create(Uq.prototype),{constructor:ia,add:function(e){this.curves.push(e)},closePath:function(){// Add a line curve if start and end of lines are not connected
var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Qq(t,e))},// To get accurate point with reference to
// entire path distance at time t,
// following has to be done:
// 1. Length of each sub path have to be known
// 2. Locate and identify type of curve
// 3. Get t for the curve
// 4. Return curve.getPointAt(t')
getPoint:function(e){// To think about boundaries points.
for(var t=e*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=t){var r=n[i]-t,q=this.curves[i],a=q.getLength(),o=0===a?0:1-r/a;return q.getPointAt(o)}i++}return null;// loop where sum != 0, sum > d , sum+1 <d
},// We cannot use the default THREE.Curve getPoint() with getLength() because in
// THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
// getPoint() depends on getLength
getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},// cacheLengths must be recalculated.
updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},// Compute lengths and cache them
// We cannot overwrite getLengths() because UtoT mapping uses it.
getCurveLengths:function(){// We use cache values if curves and cache array are same length
if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;// Get length of sub-curve
// Push sums into cached array
for(var e=[],t=0,n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){void 0===e&&(e=40);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;for(var t,n=[],i=0,r=this.curves;i<r.length;i++)for(var q=r[i],a=q&&q.isEllipseCurve?2*e:q&&q.isLineCurve?1:q&&q.isSplineCurve?e*q.points.length:e,o=q.getPoints(a),s=0;s<o.length;s++){var l=o[s];t&&t.equals(l)||(// ensures no consecutive points are duplicates
n.push(l),t=l)}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n},copy:function(e){Uq.prototype.copy.call(this,e),this.curves=[];for(var t=0,n=e.curves.length;t<n;t++){var i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){var e=Uq.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(var t=0,n=this.curves.length;t<n;t++){var i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){Uq.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(var t=0,n=e.curves.length;t<n;t++){var i=e.curves[t];this.curves.push((new na[i.type]).fromJSON(i))}return this}}),ra.prototype=Object.assign(Object.create(ia.prototype),{constructor:ra,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y)},moveTo:function(e,t){this.currentPoint.set(e,t);// TODO consider referencing vectors instead of copying?
},lineTo:function(e,t){var n=new Qq(this.currentPoint.clone(),new _t(e,t));this.curves.push(n),this.currentPoint.set(e,t)},quadraticCurveTo:function(e,t,n,i){var r=new $q(this.currentPoint.clone(),new _t(e,t),new _t(n,i));this.curves.push(r),this.currentPoint.set(n,i)},bezierCurveTo:function(e,t,n,i,r,q){var a=new Zq(this.currentPoint.clone(),new _t(e,t),new _t(n,i),new _t(r,q));this.curves.push(a),this.currentPoint.set(r,q)},splineThru:function(e/*Array of Vector*/){var t=new ta([this.currentPoint.clone()].concat(e));this.curves.push(t),this.currentPoint.copy(e[e.length-1])},arc:function(e,t,n,i,r,q){var a=this.currentPoint.x,o=this.currentPoint.y;this.absarc(e+a,t+o,n,i,r,q)},absarc:function(e,t,n,i,r,q){this.absellipse(e,t,n,n,i,r,q)},ellipse:function(e,t,n,i,r,q,a,o){var s=this.currentPoint.x,l=this.currentPoint.y;this.absellipse(e+s,t+l,n,i,r,q,a,o)},absellipse:function(e,t,n,i,r,q,a,o){var s=new Bq(e,t,n,i,r,q,a,o);if(this.curves.length>0){// if a previous curve is present, attempt to join
var l=s.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(s);var c=s.getPoint(1);this.currentPoint.copy(c)},copy:function(e){return ia.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){var e=ia.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return ia.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}}),qa.prototype=Object.assign(Object.create(ra.prototype),{constructor:qa,getPointsHoles:function(e){for(var t=[],n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},// get points of shape and holes (keypoints based on segments parameter)
extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){ra.prototype.copy.call(this,e),this.holes=[];for(var t=0,n=e.holes.length;t<n;t++){var i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){var e=ra.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(var t=0,n=this.holes.length;t<n;t++){var i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){ra.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(var t=0,n=e.holes.length;t<n;t++){var i=e.holes[t];this.holes.push((new ra).fromJSON(i))}return this}}),aa.prototype=Object.assign(Object.create(Wt.prototype),{constructor:aa,isLight:!0,copy:function(e){return Wt.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var t=Wt.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}),oa.prototype=Object.assign(Object.create(aa.prototype),{constructor:oa,isHemisphereLight:!0,copy:function(e){return aa.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}),Object.assign(sa.prototype,{copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var e={};return 0!==this.bias&&(e.bias=this.bias),1!==this.radius&&(e.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}),la.prototype=Object.assign(Object.create(sa.prototype),{constructor:la,isSpotLightShadow:!0,update:function(e){var t=this.camera,n=2*yt.RAD2DEG*e.angle,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix())}}),ca.prototype=Object.assign(Object.create(aa.prototype),{constructor:ca,isSpotLight:!0,copy:function(e){return aa.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}),ha.prototype=Object.assign(Object.create(aa.prototype),{constructor:ha,isPointLight:!0,copy:function(e){return aa.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}),ua.prototype=Object.assign(Object.create(sa.prototype),{constructor:ua}),da.prototype=Object.assign(Object.create(aa.prototype),{constructor:da,isDirectionalLight:!0,copy:function(e){return aa.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}),ma.prototype=Object.assign(Object.create(aa.prototype),{constructor:ma,isAmbientLight:!0}),pa.prototype=Object.assign(Object.create(aa.prototype),{constructor:pa,isRectAreaLight:!0,copy:function(e){return aa.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){var t=aa.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}}),fa.prototype=Object.assign(Object.create(Ta.prototype),{constructor:fa,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),ga.prototype=Object.assign(Object.create(Ta.prototype),{constructor:ga,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Object.assign(va.prototype,{evaluate:function(e){var t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{var q;n:{//- See http://jsperf.com/comparison-to-undefined/3
//- slower code:
//-
//- 				if ( t >= t1 || t1 === undefined ) {
i:if(!(e<i)){for(var a=n+2;;){if(void 0===i){if(e<r)break i;// after end
return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;// this loop
if(r=i,e<(i=t[++n]))// we have arrived at the sought interval
break t}// prepare binary search on the right side of the index
q=t.length;break n}//- slower code:
//-					if ( t < t0 || t0 === undefined ) {
if(e>=r)// the interval is valid
break e;// looping?
var o=t[1];e<o&&(n=2,// + 1, using the scan for the details
r=o);// linear reverse scan
for(a=n-2;;){if(void 0===r)// before start
return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;// this loop
if(i=r,e>=(r=t[--n-1]))// we have arrived at the sought interval
break t}// prepare binary search on the left side of the index
q=n,n=0}// linear scan
// binary search
for(;n<q;){var s=n+q>>>1;e<t[s]?q=s:n=s+1}// check boundary cases, again
if(i=t[n],void 0===(r=t[n-1]))return this._cachedIndex=0,this.beforeStart_(0,e,i);if(void 0===i)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}// seek
this._cachedIndex=n,this.intervalChanged_(n,r,i)}// validate_interval
return this.interpolate_(n,r,e,i)},settings:null,// optional, subclass-specific settings structure
// Note: The indirection allows central control of many interpolants.
// --- Protected interface
DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(// copies a sample value to the result buffer
var t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i,q=0;q!==i;++q)t[q]=n[r+q];return t},// Template methods for derived classes:
interpolate_:function(){throw new Error("call to abstract method");// implementations shall return this.resultBuffer
},intervalChanged_:function(){// empty
}}),//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(va.prototype,{//( 0, t, t0 ), returns this.resultBuffer
beforeStart_:va.prototype.copySampleValue_,//( N-1, tN-1, t ), returns this.resultBuffer
afterEnd_:va.prototype.copySampleValue_}),xa.prototype=Object.assign(Object.create(va.prototype),{constructor:xa,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,q=this.sampleValues,a=this.valueSize,o=e*a,s=(n-t)/(i-t),l=o+a;o!==l;o+=4)wt.slerpFlat(r,0,q,o-a,q,o,s);return r}}),ya.prototype=Object.assign(Object.create(Ta.prototype),{constructor:ya,ValueTypeName:"quaternion",// ValueBufferType is inherited
DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(e){return new xa(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0}),_a.prototype=Object.assign(Object.create(Ta.prototype),{constructor:_a,ValueTypeName:"color"}),ba.prototype=Object.assign(Object.create(Ta.prototype),{constructor:ba,ValueTypeName:"number"}),wa.prototype=Object.assign(Object.create(va.prototype),{constructor:wa,DefaultSettings_:{endingStart:ot,endingEnd:ot},intervalChanged_:function(e,t,n){var i=this.parameterPositions,r=e-2,q=e+1,a=i[r],o=i[q];if(void 0===a)switch(this.getSettings_().endingStart){case 2401:// f'(t0) = 0
r=e,a=2*t-n;break;case 2402:a=t+i[// use the other end of the curve
r=i.length-2]-i[r+1];break;default:// ZeroCurvatureEnding
// f''(t0) = 0 a.k.a. Natural Spline
r=e,a=n}if(void 0===o)switch(this.getSettings_().endingEnd){case 2401:// f'(tN) = 0
q=e,o=2*n-t;break;case 2402:// use the other end of the curve
q=1,o=n+i[1]-i[0];break;default:// ZeroCurvatureEnding
// f''(tN) = 0, a.k.a. Natural Spline
q=e-1,o=t}var s=.5*(n-t),l=this.valueSize;this._weightPrev=s/(t-a),this._weightNext=s/(o-n),this._offsetPrev=r*l,this._offsetNext=q*l},interpolate_:function(e,t,n,i){// combine data linearly
for(var r=this.resultBuffer,q=this.sampleValues,a=this.valueSize,o=e*a,s=o-a,l=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,u=this._weightNext,d=(n-t)/(i-t),m=d*d,p=m*d,f=-h*p+2*h*m-h*d,g=(1+h)*p+(-1.5-2*h)*m+(-.5+h)*d+1,v=(-1-u)*p+(1.5+u)*m+.5*d,x=u*p-u*m,y=0// evaluate polynomials
;y!==a;++y)r[y]=f*q[l+y]+g*q[s+y]+v*q[o+y]+x*q[c+y];return r}}),Ea.prototype=Object.assign(Object.create(va.prototype),{constructor:Ea,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,q=this.sampleValues,a=this.valueSize,o=e*a,s=o-a,l=(n-t)/(i-t),c=1-l,h=0;h!==a;++h)r[h]=q[s+h]*c+q[o+h]*l;return r}}),Ma.prototype=Object.assign(Object.create(va.prototype),{constructor:Ma,interpolate_:function(e/*, t0, t, t1 */){return this.copySampleValue_(e-1)}});
/**
 * @author tschw
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
var Sa={// same as Array.prototype.slice, but also works on typed arrays
arraySlice:function(e,t,n){return Sa.isTypedArray(e)?new e.constructor(e.subarray(t,void 0!==n?n:e.length)):e.slice(t,n)},// converts an array to a specific type
convertArray:function(e,t,n){return!e||// let 'undefined' and 'null' pass
!n&&e.constructor===t?e:"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},// returns an array by which times and values can be sorted
getKeyframeOrder:function(e){for(var t=e.length,n=new Array(t),i=0;i!==t;++i)n[i]=i;return n.sort(function(t,n){return e[t]-e[n]}),n},// uses the array previously returned by 'getKeyframeOrder' to sort data
sortedArray:function(e,t,n){for(var i=e.length,r=new e.constructor(i),q=0,a=0;a!==i;++q)for(var o=n[q]*t,s=0;s!==t;++s)r[a++]=e[o+s];return r},// function for parsing AOS keyframe formats
flattenJSON:function(e,t,n,i){for(var r=1,q=e[0];void 0!==q&&void 0===q[i];)q=e[r++];if(void 0!==q){// no data
var a=q[i];if(void 0!==a)// no data
if(Array.isArray(a))do{void 0!==(a=q[i])&&(t.push(q.time),n.push.apply(n,a)),q=e[r++]}while(void 0!==q);else if(void 0!==a.toArray)// ...assume THREE.Math-ish
do{void 0!==(a=q[i])&&(t.push(q.time),a.toArray(n,n.length)),q=e[r++]}while(void 0!==q);else// otherwise push as-is
do{void 0!==(a=q[i])&&(t.push(q.time),n.push(a)),q=e[r++]}while(void 0!==q)}}};
/**
 *
 * A timed sequence of keyframes for a specific property.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */function Ta(e,t,n,i){if(void 0===e)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa.convertArray(t,this.TimeBufferType),this.values=Sa.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation),this.validate(),this.optimize()}// Static methods:
/**
 *
 * A Track of vectored keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function Aa(e,t,n,i){Ta.call(this,e,t,n,i)}
/**
 *
 * Reusable set of Tracks that represent an animation.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
function Ra(e,t,n){this.name=e,this.tracks=n,this.duration=void 0!==t?t:-1,this.uuid=yt.generateUUID(),// this means it should figure out its duration by scanning the tracks
this.duration<0&&this.resetDuration(),this.optimize()}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function La(e){this.manager=void 0!==e?e:Rq,this.textures={}}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ca(e){this.manager=void 0!==e?e:Rq}Object.assign(Ta,{// Serialization (in static context, because of constructor invocation
// and automatic invocation of .toJSON):
parse:function(e){if(void 0===e.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var t=Ta._getTrackTypeForValueTypeName(e.type);if(void 0===e.times){var n=[],i=[];Sa.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}// derived classes can define a static parse method
return void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)},toJSON:function(e){var t,n=e.constructor;// derived classes can define a static toJSON method
if(void 0!==n.toJSON)t=n.toJSON(e);else{// by default, we assume the data can be serialized as-is
t={name:e.name,times:Sa.convertArray(e.times,Array),values:Sa.convertArray(e.values,Array)};var i=e.getInterpolation();i!==e.DefaultInterpolation&&(t.interpolation=i)}// mandatory
return t.type=e.ValueTypeName,t},_getTrackTypeForValueTypeName:function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ba;case"vector":case"vector2":case"vector3":case"vector4":return Aa;case"color":return _a;case"quaternion":return ya;case"bool":case"boolean":return ga;case"string":return fa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}}),Object.assign(Ta.prototype,{constructor:Ta,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(e){return new Ma(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Ea(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new wa(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(void 0!==t)this.createInterpolant=t;else{var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){// fall back to default, unless the default itself is messed up
if(e===this.DefaultInterpolation)throw new Error(n);// fatal, in this case
this.setInterpolation(this.DefaultInterpolation)}console.warn("THREE.KeyframeTrack:",n)}},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},// move all keyframes either forwards or backwards in time
shift:function(e){if(0!==e)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]+=e;return this},// scale all keyframe times by a factor (useful for frame <-> seconds conversions)
scale:function(e){if(1!==e)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]*=e;return this},// removes keyframes before and after animation without changing any values within the range [startTime, endTime].
// IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
trim:function(e,t){for(var n=this.times,i=n.length,r=0,q=i-1;r!==i&&n[r]<e;)++r;for(;-1!==q&&n[q]>t;)--q;// inclusive -> exclusive bound
if(++q,0!==r||q!==i){// empty tracks are forbidden, so keep at least one keyframe
r>=q&&(r=(q=Math.max(q,1))-1);var a=this.getValueSize();this.times=Sa.arraySlice(n,r,q),this.values=Sa.arraySlice(this.values,r*a,q*a)}return this},// ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
validate:function(){var e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);var n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);for(var q=null,a=0;a!==r;a++){var o=n[a];if("number"==typeof o&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(null!==q&&q>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,q),e=!1;break}q=o}if(void 0!==i&&Sa.isTypedArray(i)){a=0;for(var s=i.length;a!==s;++a){var l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e},// removes equivalent sequential keys as common in morph target sequences
// (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
optimize:function(){for(var e=this.times,t=this.values,n=this.getValueSize(),i=2302===this.getInterpolation(),r=1,q=e.length-1,a=1;a<q;++a){var o=!1,s=e[a];// remove adjacent keyframes scheduled at the same time
if(s!==e[a+1]&&(1!==a||s!==s[0]))if(i)o=!0;else for(// remove unnecessary keyframes same as their neighbors
var l=a*n,c=l-n,h=l+n,u=0;u!==n;++u){var d=t[l+u];if(d!==t[c+u]||d!==t[h+u]){o=!0;break}}// in-place compaction
if(o){if(a!==r){e[r]=e[a];var m=a*n,p=r*n;for(u=0;u!==n;++u)t[p+u]=t[m+u]}++r}}// flush last keyframe (compaction looks ahead)
if(q>0){e[r]=e[q];for(m=q*n,p=r*n,u=0;u!==n;++u)t[p+u]=t[m+u];++r}return r!==e.length&&(this.times=Sa.arraySlice(e,0,r),this.values=Sa.arraySlice(t,0,r*n)),this}}),Aa.prototype=Object.assign(Object.create(Ta.prototype),{constructor:Aa,ValueTypeName:"vector"}),Object.assign(Ra,{parse:function(e){for(var t=[],n=e.tracks,i=1/(e.fps||1),r=0,q=n.length;r!==q;++r)t.push(Ta.parse(n[r]).scale(i));return new Ra(e.name,e.duration,t)},toJSON:function(e){for(var t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t},r=0,q=n.length;r!==q;++r)t.push(Ta.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){for(var r=t.length,q=[],a=0;a<r;a++){var o=[],s=[];o.push((a+r-1)%r,a,(a+1)%r),s.push(0,1,0);var l=Sa.getKeyframeOrder(o);o=Sa.sortedArray(o,1,l),s=Sa.sortedArray(s,1,l),// if there is a key at the first frame, duplicate it as the
// last frame as well for perfect loop.
i||0!==o[0]||(o.push(r),s.push(s[0])),q.push(new ba(".morphTargetInfluences["+t[a].name+"]",o,s).scale(1/n))}return new Ra(e,-1,q)},findByName:function(e,t){var n=e;if(!Array.isArray(e)){var i=e;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){// sort morph target names into animation groups based
// patterns like Walk_001, Walk_002, Run_001, Run_002
for(var i={},r=/^([\w-]*?)([\d]+)$/,q=0,a=e.length// tested with https://regex101.com/ on trick sequences
// such flamingo_flyA_003, flamingo_run1_003, crdeath0059
;q<a;q++){var o=e[q],s=o.name.match(r);if(s&&s.length>1){var l=i[h=s[1]];l||(i[h]=l=[]),l.push(o)}}var c=[];for(var h in i)c.push(Ra.CreateFromMorphTargetSequence(h,i[h],t,n));return c},// parse the animation.hierarchy format
parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var n=function(e,t,n,i,r){// only return track if there are actually keys.
if(0!==n.length){var q=[],a=[];Sa.flattenJSON(n,q,a,i),// empty keys are filtered out, so check again
0!==q.length&&r.push(new e(t,q,a))}},i=[],r=e.name||"default",q=e.length||-1,a=e.fps||30,o=e.hierarchy||[],s=0;s<o.length;s++){var l=o[s].keys;// skip empty tracks
if(l&&0!==l.length)// process morph targets
if(l[0].morphTargets){for(// figure out all morph targets used in this track
var c={},h=0;h<l.length;h++)if(l[h].morphTargets)for(var u=0;u<l[h].morphTargets.length;u++)c[l[h].morphTargets[u]]=-1;// create a track for each morph target with all zero
// morphTargetInfluences except for the keys in which
// the morphTarget is named.
for(var d in c){var m=[],p=[];for(u=0;u!==l[h].morphTargets.length;++u){var f=l[h];m.push(f.time),p.push(f.morphTarget===d?1:0)}i.push(new ba(".morphTargetInfluence["+d+"]",m,p))}q=c.length*(a||1)}else{// ...assume skeletal animation
var g=".bones["+t[s].name+"]";n(Aa,g+".position",l,"pos",i),n(ya,g+".quaternion",l,"rot",i),n(Aa,g+".scale",l,"scl",i)}}return 0===i.length?null:new Ra(r,q,i)}}),Object.assign(Ra.prototype,{resetDuration:function(){for(var e=0,t=0,n=this.tracks.length;t!==n;++t){var i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}this.duration=e},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}}),Object.assign(La.prototype,{load:function(e,t,n,i){var r=this;new Cq(r.manager).load(e,function(e){t(r.parse(JSON.parse(e)))},n,i)},setTextures:function(e){this.textures=e},parse:function(e){var t=this.textures;function n(e){return void 0===t[e]&&console.warn("THREE.MaterialLoader: Undefined texture",e),t[e]}var i=new Sq[e.type];if(void 0!==e.uuid&&(i.uuid=e.uuid),void 0!==e.name&&(i.name=e.name),void 0!==e.color&&i.color.setHex(e.color),void 0!==e.roughness&&(i.roughness=e.roughness),void 0!==e.metalness&&(i.metalness=e.metalness),void 0!==e.emissive&&i.emissive.setHex(e.emissive),void 0!==e.specular&&i.specular.setHex(e.specular),void 0!==e.shininess&&(i.shininess=e.shininess),void 0!==e.clearCoat&&(i.clearCoat=e.clearCoat),void 0!==e.clearCoatRoughness&&(i.clearCoatRoughness=e.clearCoatRoughness),void 0!==e.uniforms&&(i.uniforms=e.uniforms),void 0!==e.vertexShader&&(i.vertexShader=e.vertexShader),void 0!==e.fragmentShader&&(i.fragmentShader=e.fragmentShader),void 0!==e.vertexColors&&(i.vertexColors=e.vertexColors),void 0!==e.fog&&(i.fog=e.fog),void 0!==e.flatShading&&(i.flatShading=e.flatShading),void 0!==e.blending&&(i.blending=e.blending),void 0!==e.side&&(i.side=e.side),void 0!==e.opacity&&(i.opacity=e.opacity),void 0!==e.transparent&&(i.transparent=e.transparent),void 0!==e.alphaTest&&(i.alphaTest=e.alphaTest),void 0!==e.depthTest&&(i.depthTest=e.depthTest),void 0!==e.depthWrite&&(i.depthWrite=e.depthWrite),void 0!==e.colorWrite&&(i.colorWrite=e.colorWrite),void 0!==e.wireframe&&(i.wireframe=e.wireframe),void 0!==e.wireframeLinewidth&&(i.wireframeLinewidth=e.wireframeLinewidth),void 0!==e.wireframeLinecap&&(i.wireframeLinecap=e.wireframeLinecap),void 0!==e.wireframeLinejoin&&(i.wireframeLinejoin=e.wireframeLinejoin),void 0!==e.rotation&&(i.rotation=e.rotation),1!==e.linewidth&&(i.linewidth=e.linewidth),void 0!==e.dashSize&&(i.dashSize=e.dashSize),void 0!==e.gapSize&&(i.gapSize=e.gapSize),void 0!==e.scale&&(i.scale=e.scale),void 0!==e.polygonOffset&&(i.polygonOffset=e.polygonOffset),void 0!==e.polygonOffsetFactor&&(i.polygonOffsetFactor=e.polygonOffsetFactor),void 0!==e.polygonOffsetUnits&&(i.polygonOffsetUnits=e.polygonOffsetUnits),void 0!==e.skinning&&(i.skinning=e.skinning),void 0!==e.morphTargets&&(i.morphTargets=e.morphTargets),void 0!==e.dithering&&(i.dithering=e.dithering),void 0!==e.visible&&(i.visible=e.visible),void 0!==e.userData&&(i.userData=e.userData),// Deprecated
void 0!==e.shading&&(i.flatShading=1===e.shading),// THREE.FlatShading
// for PointsMaterial
void 0!==e.size&&(i.size=e.size),void 0!==e.sizeAttenuation&&(i.sizeAttenuation=e.sizeAttenuation),// maps
void 0!==e.map&&(i.map=n(e.map)),void 0!==e.alphaMap&&(i.alphaMap=n(e.alphaMap),i.transparent=!0),void 0!==e.bumpMap&&(i.bumpMap=n(e.bumpMap)),void 0!==e.bumpScale&&(i.bumpScale=e.bumpScale),void 0!==e.normalMap&&(i.normalMap=n(e.normalMap)),void 0!==e.normalScale){var r=e.normalScale;!1===Array.isArray(r)&&(// Blender exporter used to export a scalar. See #7459
r=[r,r]),i.normalScale=(new _t).fromArray(r)}return void 0!==e.displacementMap&&(i.displacementMap=n(e.displacementMap)),void 0!==e.displacementScale&&(i.displacementScale=e.displacementScale),void 0!==e.displacementBias&&(i.displacementBias=e.displacementBias),void 0!==e.roughnessMap&&(i.roughnessMap=n(e.roughnessMap)),void 0!==e.metalnessMap&&(i.metalnessMap=n(e.metalnessMap)),void 0!==e.emissiveMap&&(i.emissiveMap=n(e.emissiveMap)),void 0!==e.emissiveIntensity&&(i.emissiveIntensity=e.emissiveIntensity),void 0!==e.specularMap&&(i.specularMap=n(e.specularMap)),void 0!==e.envMap&&(i.envMap=n(e.envMap)),void 0!==e.reflectivity&&(i.reflectivity=e.reflectivity),void 0!==e.lightMap&&(i.lightMap=n(e.lightMap)),void 0!==e.lightMapIntensity&&(i.lightMapIntensity=e.lightMapIntensity),void 0!==e.aoMap&&(i.aoMap=n(e.aoMap)),void 0!==e.aoMapIntensity&&(i.aoMapIntensity=e.aoMapIntensity),void 0!==e.gradientMap&&(i.gradientMap=n(e.gradientMap)),i}}),Object.assign(Ca.prototype,{load:function(e,t,n,i){var r=this;new Cq(r.manager).load(e,function(e){t(r.parse(JSON.parse(e)))},n,i)},parse:function(e){var t=new un,n=e.data.index;if(void 0!==n){var i=new Pa[n.type](n.array);t.setIndex(new Kt(i,1))}var r=e.data.attributes;for(var q in r){var a=r[q];i=new Pa[a.type](a.array);t.addAttribute(q,new Kt(i,a.itemSize,a.normalized))}var o=e.data.groups||e.data.drawcalls||e.data.offsets;if(void 0!==o)for(var s=0,l=o.length;s!==l;++s){var c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}var h=e.data.boundingSphere;if(void 0!==h){var u=new Et;void 0!==h.center&&u.fromArray(h.center),t.boundingSphere=new Ot(u,h.radius)}return t}});var Pa={Int8Array,Uint8Array,// Workaround for IE11 pre KB2929437. See #11440
Uint8ClampedArray:"undefined"!=typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};
/**
 * @author alteredq / http://alteredqualia.com/
 */function Oa(){}Oa.Handlers={handlers:[],add:function(e,t){this.handlers.push(e,t)},get:function(e){for(var t=this.handlers,n=0,i=t.length;n<i;n+=2){var r=t[n],q=t[n+1];if(r.test(e))return q}return null}},Object.assign(Oa.prototype,{crossOrigin:void 0,onLoadStart:function(){},onLoadProgress:function(){},onLoadComplete:function(){},initMaterials:function(e,t,n){for(var i=[],r=0;r<e.length;++r)i[r]=this.createMaterial(e[r],t,n);return i},createMaterial:function(){var e={NoBlending:g,NormalBlending:v,AdditiveBlending:x,SubtractiveBlending:y,MultiplyBlending:_,CustomBlending:b},t=new Ft,n=new Dq,i=new La;return function(r,q,a){// convert from old material format
var o={};function s(e,t,i,r,s){var l,c=q+e,h=Oa.Handlers.get(c);null!==h?l=h.load(c):(n.setCrossOrigin(a),l=n.load(c)),void 0!==t&&(l.repeat.fromArray(t),1!==t[0]&&(l.wrapS=se),1!==t[1]&&(l.wrapT=se)),void 0!==i&&l.offset.fromArray(i),void 0!==r&&("repeat"===r[0]&&(l.wrapS=se),"mirror"===r[0]&&(l.wrapS=ce),"repeat"===r[1]&&(l.wrapT=se),"mirror"===r[1]&&(l.wrapT=ce)),void 0!==s&&(l.anisotropy=s);var u=yt.generateUUID();return o[u]=l,u}//
var l={uuid:yt.generateUUID(),type:"MeshLambertMaterial"};for(var c in r){var h=r[c];switch(c){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":l.name=h;break;case"blending":l.blending=e[h];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",c,"is no longer supported.");break;case"colorDiffuse":l.color=t.fromArray(h).getHex();break;case"colorSpecular":l.specular=t.fromArray(h).getHex();break;case"colorEmissive":l.emissive=t.fromArray(h).getHex();break;case"specularCoef":l.shininess=h;break;case"shading":"basic"===h.toLowerCase()&&(l.type="MeshBasicMaterial"),"phong"===h.toLowerCase()&&(l.type="MeshPhongMaterial"),"standard"===h.toLowerCase()&&(l.type="MeshStandardMaterial");break;case"mapDiffuse":l.map=s(h,r.mapDiffuseRepeat,r.mapDiffuseOffset,r.mapDiffuseWrap,r.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":l.emissiveMap=s(h,r.mapEmissiveRepeat,r.mapEmissiveOffset,r.mapEmissiveWrap,r.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":l.lightMap=s(h,r.mapLightRepeat,r.mapLightOffset,r.mapLightWrap,r.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":l.aoMap=s(h,r.mapAORepeat,r.mapAOOffset,r.mapAOWrap,r.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":l.bumpMap=s(h,r.mapBumpRepeat,r.mapBumpOffset,r.mapBumpWrap,r.mapBumpAnisotropy);break;case"mapBumpScale":l.bumpScale=h;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":l.normalMap=s(h,r.mapNormalRepeat,r.mapNormalOffset,r.mapNormalWrap,r.mapNormalAnisotropy);break;case"mapNormalFactor":l.normalScale=h;break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":l.specularMap=s(h,r.mapSpecularRepeat,r.mapSpecularOffset,r.mapSpecularWrap,r.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":l.metalnessMap=s(h,r.mapMetalnessRepeat,r.mapMetalnessOffset,r.mapMetalnessWrap,r.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":l.roughnessMap=s(h,r.mapRoughnessRepeat,r.mapRoughnessOffset,r.mapRoughnessWrap,r.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":l.alphaMap=s(h,r.mapAlphaRepeat,r.mapAlphaOffset,r.mapAlphaWrap,r.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":l.side=u;break;case"doubleSided":l.side=d;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),l.opacity=h;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":l[c]=h;break;case"vertexColors":!0===h&&(l.vertexColors=f),"face"===h&&(l.vertexColors=p);break;default:console.error("THREE.Loader.createMaterial: Unsupported",c,h)}}return"MeshBasicMaterial"===l.type&&delete l.emissive,"MeshPhongMaterial"!==l.type&&delete l.specular,l.opacity<1&&(l.transparent=!0),i.setTextures(o),i.parse(l)}}()});
/**
 * @author Don McCurdy / https://www.donmccurdy.com
 */
var Ia={decodeText:function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);// Avoid the String.fromCharCode.apply(null, array) shortcut, which
// throws a "maximum call stack size exceeded" error for large arrays.
for(var t="",n=0,i=e.length;n<i;n++)// Implicitly assumes little-endian.
t+=String.fromCharCode(e[n]);// Merges multi-byte utf-8 characters.
return decodeURIComponent(escape(t))},extractUrlBase:function(e){var t=e.lastIndexOf("/");return-1===t?"./":e.substr(0,t+1)}};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */function Na(e){"boolean"==typeof e&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),e=void 0),this.manager=void 0!==e?e:Rq,this.withCredentials=!1}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Da(e){this.manager=void 0!==e?e:Rq,this.texturePath=""}Object.assign(Na.prototype,{load:function(e,t,n,i){var r=this,q=this.texturePath&&"string"==typeof this.texturePath?this.texturePath:Ia.extractUrlBase(e),a=new Cq(this.manager);a.setWithCredentials(this.withCredentials),a.load(e,function(n){var i=JSON.parse(n),a=i.metadata;if(void 0!==a){var o=a.type;if(void 0!==o&&"object"===o.toLowerCase())return void console.error("THREE.JSONLoader: "+e+" should be loaded with THREE.ObjectLoader instead.")}var s=r.parse(i,q);t(s.geometry,s.materials)},n,i)},setTexturePath:function(e){this.texturePath=e},parse:function(){return function(e,t){void 0!==e.data&&(// Geometry 4.0 spec
e=e.data),void 0!==e.scale?e.scale=1/e.scale:e.scale=1;var n=new Qt;return function(e,t){function n(e,t){return e&1<<t}var i,r,q,a,o,s,l,c,h,u,d,m,p,f,g,v,x,y,_,b,w,E,M,S,T,A=e.faces,R=e.vertices,L=e.normals,C=e.colors,P=e.scale,O=0;if(void 0!==e.uvs){// disregard empty arrays
for(i=0;i<e.uvs.length;i++)e.uvs[i].length&&O++;for(i=0;i<O;i++)t.faceVertexUvs[i]=[]}for(a=0,o=R.length;a<o;)(y=new Et).x=R[a++]*P,y.y=R[a++]*P,y.z=R[a++]*P,t.vertices.push(y);for(a=0,o=A.length;a<o;)// console.log("type", type, "bits", isQuad, hasMaterial, hasFaceVertexUv, hasFaceNormal, hasFaceVertexNormal, hasFaceColor, hasFaceVertexColor);
if(d=n(u=A[a++],0),m=n(u,1),p=n(u,3),f=n(u,4),g=n(u,5),v=n(u,6),x=n(u,7),d){if((b=new Zt).a=A[a],b.b=A[a+1],b.c=A[a+3],(w=new Zt).a=A[a+1],w.b=A[a+2],w.c=A[a+3],a+=4,m&&(h=A[a++],b.materialIndex=h,w.materialIndex=h),// to get face <=> uv index correspondence
q=t.faces.length,p)for(i=0;i<O;i++)for(S=e.uvs[i],t.faceVertexUvs[i][q]=[],t.faceVertexUvs[i][q+1]=[],r=0;r<4;r++)T=new _t(S[2*(c=A[a++])],S[2*c+1]),2!==r&&t.faceVertexUvs[i][q].push(T),0!==r&&t.faceVertexUvs[i][q+1].push(T);if(f&&(l=3*A[a++],b.normal.set(L[l++],L[l++],L[l]),w.normal.copy(b.normal)),g)for(i=0;i<4;i++)l=3*A[a++],M=new Et(L[l++],L[l++],L[l]),2!==i&&b.vertexNormals.push(M),0!==i&&w.vertexNormals.push(M);if(v&&(E=C[s=A[a++]],b.color.setHex(E),w.color.setHex(E)),x)for(i=0;i<4;i++)E=C[s=A[a++]],2!==i&&b.vertexColors.push(new Ft(E)),0!==i&&w.vertexColors.push(new Ft(E));t.faces.push(b),t.faces.push(w)}else{if((_=new Zt).a=A[a++],_.b=A[a++],_.c=A[a++],m&&(h=A[a++],_.materialIndex=h),// to get face <=> uv index correspondence
q=t.faces.length,p)for(i=0;i<O;i++)for(S=e.uvs[i],t.faceVertexUvs[i][q]=[],r=0;r<3;r++)T=new _t(S[2*(c=A[a++])],S[2*c+1]),t.faceVertexUvs[i][q].push(T);if(f&&(l=3*A[a++],_.normal.set(L[l++],L[l++],L[l])),g)for(i=0;i<3;i++)l=3*A[a++],M=new Et(L[l++],L[l++],L[l]),_.vertexNormals.push(M);if(v&&(s=A[a++],_.color.setHex(C[s])),x)for(i=0;i<3;i++)s=A[a++],_.vertexColors.push(new Ft(C[s]));t.faces.push(_)}}(e,n),function(e,t){var n=void 0!==e.influencesPerVertex?e.influencesPerVertex:2;if(e.skinWeights)for(var i=0,r=e.skinWeights.length;i<r;i+=n){var q=e.skinWeights[i],a=n>1?e.skinWeights[i+1]:0,o=n>2?e.skinWeights[i+2]:0,s=n>3?e.skinWeights[i+3]:0;t.skinWeights.push(new At(q,a,o,s))}if(e.skinIndices)for(i=0,r=e.skinIndices.length;i<r;i+=n){var l=e.skinIndices[i],c=n>1?e.skinIndices[i+1]:0,h=n>2?e.skinIndices[i+2]:0,u=n>3?e.skinIndices[i+3]:0;t.skinIndices.push(new At(l,c,h,u))}t.bones=e.bones,t.bones&&t.bones.length>0&&(t.skinWeights.length!==t.skinIndices.length||t.skinIndices.length!==t.vertices.length)&&console.warn("When skinning, number of vertices ("+t.vertices.length+"), skinIndices ("+t.skinIndices.length+"), and skinWeights ("+t.skinWeights.length+") should match.")}(e,n),function(e,t){var n=e.scale;if(void 0!==e.morphTargets)for(var i=0,r=e.morphTargets.length;i<r;i++){t.morphTargets[i]={},t.morphTargets[i].name=e.morphTargets[i].name,t.morphTargets[i].vertices=[];for(var q=t.morphTargets[i].vertices,a=e.morphTargets[i].vertices,o=0,s=a.length;o<s;o+=3){var l=new Et;l.x=a[o]*n,l.y=a[o+1]*n,l.z=a[o+2]*n,q.push(l)}}if(void 0!==e.morphColors&&e.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');var c=t.faces,h=e.morphColors[0].colors;for(i=0,r=c.length;i<r;i++)c[i].color.fromArray(h,3*i)}}(e,n),function(e,t){var n=[],i=[];// parse old style Bone/Hierarchy animations
void 0!==e.animation&&i.push(e.animation),void 0!==e.animations&&(e.animations.length?i=i.concat(e.animations):i.push(e.animations));for(var r=0;r<i.length;r++){var q=Ra.parseAnimation(i[r],t.bones);q&&n.push(q)}// parse implicit morph animations
if(t.morphTargets){// TODO: Figure out what an appropraite FPS is for morph target animations -- defaulting to 10, but really it is completely arbitrary.
var a=Ra.CreateClipsFromMorphTargetSequences(t.morphTargets,10);n=n.concat(a)}n.length>0&&(t.animations=n)}(e,n),n.computeFaceNormals(),n.computeBoundingSphere(),void 0===e.materials||0===e.materials.length?{geometry:n}:{geometry:n,materials:Oa.prototype.initMaterials(e.materials,t,this.crossOrigin)}}}()}),Object.assign(Da.prototype,{load:function(e,t,n,i){""===this.texturePath&&(this.texturePath=e.substring(0,e.lastIndexOf("/")+1));var r=this;new Cq(r.manager).load(e,function(n){var q=null;try{q=JSON.parse(n)}catch(t){return void 0!==i&&i(t),void console.error("THREE:ObjectLoader: Can't parse "+e+".",t.message)}var a=q.metadata;void 0!==a&&void 0!==a.type&&"geometry"!==a.type.toLowerCase()?r.parse(q,t):console.error("THREE.ObjectLoader: Can't load "+e+". Use THREE.JSONLoader instead.")},n,i)},setTexturePath:function(e){this.texturePath=e},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e,t){var n=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,n),r=this.parseImages(e.images,function(){void 0!==t&&t(o)}),q=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,q),o=this.parseObject(e.object,i,a);return e.animations&&(o.animations=this.parseAnimations(e.animations)),void 0!==e.images&&0!==e.images.length||void 0!==t&&t(o),o},parseShape:function(e){var t={};if(void 0!==e)for(var n=0,i=e.length;n<i;n++){var r=(new qa).fromJSON(e[n]);t[r.uuid]=r}return t},parseGeometries:function(e,t){var n={};if(void 0!==e)for(var i=new Na,r=new Ca,q=0,a=e.length;q<a;q++){var o,s=e[q];switch(s.type){case"PlaneGeometry":case"PlaneBufferGeometry":o=new fq[s.type](s.width,s.height,s.widthSegments,s.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":// backwards compatible
o=new fq[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":o=new fq[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":o=new fq[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":o=new fq[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":o=new fq[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":o=new fq[s.type](s.radius,s.detail);break;case"RingGeometry":case"RingBufferGeometry":o=new fq[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":o=new fq[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":o=new fq[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);break;case"LatheGeometry":case"LatheBufferGeometry":o=new fq[s.type](s.points,s.segments,s.phiStart,s.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":o=new fq[s.type](s.vertices,s.indices,s.radius,s.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":for(var l=[],c=0,h=s.shapes.length;c<h;c++){var u=t[s.shapes[c]];l.push(u)}o=new fq[s.type](l,s.curveSegments);break;case"BufferGeometry":o=r.parse(s);break;case"Geometry":o=i.parse(s,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+s.type+'"');continue}o.uuid=s.uuid,void 0!==s.name&&(o.name=s.name),n[s.uuid]=o}return n},parseMaterials:function(e,t){var n={};if(void 0!==e){var i=new La;i.setTextures(t);for(var r=0,q=e.length;r<q;r++){var a=e[r];if("MultiMaterial"===a.type){for(// Deprecated
var o=[],s=0;s<a.materials.length;s++)o.push(i.parse(a.materials[s]));n[a.uuid]=o}else n[a.uuid]=i.parse(a)}}return n},parseAnimations:function(e){for(var t=[],n=0;n<e.length;n++){var i=Ra.parse(e[n]);t.push(i)}return t},parseImages:function(e,t){var n=this,i={};function r(e){return n.manager.itemStart(e),q.load(e,function(){n.manager.itemEnd(e)},void 0,function(){n.manager.itemEnd(e),n.manager.itemError(e)})}if(void 0!==e&&e.length>0){var q=new Iq(new Aq(t));q.setCrossOrigin(this.crossOrigin);for(var a=0,o=e.length;a<o;a++){var s=e[a],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url)?s.url:n.texturePath+s.url;i[s.uuid]=r(l)}}return i},parseTextures:function(e,t){function n(e,t){return"number"==typeof e?e:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",e),t[e])}var i={};if(void 0!==e)for(var r=0,q=e.length;r<q;r++){var a=e[r];void 0===a.image&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),void 0===t[a.image]&&console.warn("THREE.ObjectLoader: Undefined image",a.image);var o=new Tt(t[a.image]);o.needsUpdate=!0,o.uuid=a.uuid,void 0!==a.name&&(o.name=a.name),void 0!==a.mapping&&(o.mapping=n(a.mapping,Ba)),void 0!==a.offset&&o.offset.fromArray(a.offset),void 0!==a.repeat&&o.repeat.fromArray(a.repeat),void 0!==a.center&&o.center.fromArray(a.center),void 0!==a.rotation&&(o.rotation=a.rotation),void 0!==a.wrap&&(o.wrapS=n(a.wrap[0],Fa),o.wrapT=n(a.wrap[1],Fa)),void 0!==a.format&&(o.format=a.format),void 0!==a.minFilter&&(o.minFilter=n(a.minFilter,za)),void 0!==a.magFilter&&(o.magFilter=n(a.magFilter,za)),void 0!==a.anisotropy&&(o.anisotropy=a.anisotropy),void 0!==a.flipY&&(o.flipY=a.flipY),i[a.uuid]=o}return i},parseObject:function(e,t,n){var i;function r(e){return void 0===t[e]&&console.warn("THREE.ObjectLoader: Undefined geometry",e),t[e]}function q(e){if(void 0!==e){if(Array.isArray(e)){for(var t=[],i=0,r=e.length;i<r;i++){var q=e[i];void 0===n[q]&&console.warn("THREE.ObjectLoader: Undefined material",q),t.push(n[q])}return t}return void 0===n[e]&&console.warn("THREE.ObjectLoader: Undefined material",e),n[e]}}switch(e.type){case"Scene":i=new ki,void 0!==e.background&&Number.isInteger(e.background)&&(i.background=new Ft(e.background)),void 0!==e.fog&&("Fog"===e.fog.type?i.fog=new Hi(e.fog.color,e.fog.near,e.fog.far):"FogExp2"===e.fog.type&&(i.fog=new zi(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new Di(e.fov,e.aspect,e.near,e.far),void 0!==e.focus&&(i.focus=e.focus),void 0!==e.zoom&&(i.zoom=e.zoom),void 0!==e.filmGauge&&(i.filmGauge=e.filmGauge),void 0!==e.filmOffset&&(i.filmOffset=e.filmOffset),void 0!==e.view&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new Yt(e.left,e.right,e.top,e.bottom,e.near,e.far),void 0!==e.zoom&&(i.zoom=e.zoom),void 0!==e.view&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new ma(e.color,e.intensity);break;case"DirectionalLight":i=new da(e.color,e.intensity);break;case"PointLight":i=new ha(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new pa(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new ca(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new oa(e.color,e.groundColor,e.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":var a=r(e.geometry),o=q(e.material);i=a.bones&&a.bones.length>0?new Yi(a,o):new En(a,o);break;case"LOD":i=new Vi;break;case"Line":i=new Ji(r(e.geometry),q(e.material),e.mode);break;case"LineLoop":i=new Ki(r(e.geometry),q(e.material));break;case"LineSegments":i=new Qi(r(e.geometry),q(e.material));break;case"PointCloud":case"Points":i=new er(r(e.geometry),q(e.material));break;case"Sprite":i=new ji(q(e.material));break;case"Group":i=new tr;break;default:i=new Wt}if(i.uuid=e.uuid,void 0!==e.name&&(i.name=e.name),void 0!==e.matrix?(i.matrix.fromArray(e.matrix),void 0!==e.matrixAutoUpdate&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(void 0!==e.position&&i.position.fromArray(e.position),void 0!==e.rotation&&i.rotation.fromArray(e.rotation),void 0!==e.quaternion&&i.quaternion.fromArray(e.quaternion),void 0!==e.scale&&i.scale.fromArray(e.scale)),void 0!==e.castShadow&&(i.castShadow=e.castShadow),void 0!==e.receiveShadow&&(i.receiveShadow=e.receiveShadow),e.shadow&&(void 0!==e.shadow.bias&&(i.shadow.bias=e.shadow.bias),void 0!==e.shadow.radius&&(i.shadow.radius=e.shadow.radius),void 0!==e.shadow.mapSize&&i.shadow.mapSize.fromArray(e.shadow.mapSize),void 0!==e.shadow.camera&&(i.shadow.camera=this.parseObject(e.shadow.camera))),void 0!==e.visible&&(i.visible=e.visible),void 0!==e.frustumCulled&&(i.frustumCulled=e.frustumCulled),void 0!==e.renderOrder&&(i.renderOrder=e.renderOrder),void 0!==e.userData&&(i.userData=e.userData),void 0!==e.children)for(var s=e.children,l=0;l<s.length;l++)i.add(this.parseObject(s[l],t,n));if("LOD"===e.type)for(var c=e.levels,h=0;h<c.length;h++){var u=c[h],d=i.getObjectByProperty("uuid",u.object);void 0!==d&&i.addLevel(d,u.distance)}return i}});var Ua,Ba={UVMapping:300,CubeReflectionMapping:te,CubeRefractionMapping:ne,EquirectangularReflectionMapping:ie,EquirectangularRefractionMapping:re,SphericalReflectionMapping:qe,CubeUVReflectionMapping:ae,CubeUVRefractionMapping:oe},Fa={RepeatWrapping:se,ClampToEdgeWrapping:le,MirroredRepeatWrapping:ce},za={NearestFilter:he,NearestMipMapNearestFilter:ue,NearestMipMapLinearFilter:de,LinearFilter:me,LinearMipMapNearestFilter:pe,LinearMipMapLinearFilter:fe};
/**
 * @author thespite / http://clicktorelease.com/
 */
function Ha(e){"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.manager=void 0!==e?e:Rq,this.options=void 0}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * minimal class for proxing functions to Path. Replaces old "extractSubpaths()"
 **/
function ka(){this.type="ShapePath",this.color=new Ft,this.subPaths=[],this.currentPath=null}
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author mrdoob / http://mrdoob.com/
 */
function Ga(e){this.type="Font",this.data=e}function ja(e,t,n,i,r,q){var a=q.glyphs[e]||q.glyphs["?"];if(a){var o,s,l,c,h,u,d,m,p=new ka;if(a.o)for(var f=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),g=0,v=f.length;g<v;){switch(f[g++]){case"m":// moveTo
o=f[g++]*n+i,s=f[g++]*n+r,p.moveTo(o,s);break;case"l":// lineTo
o=f[g++]*n+i,s=f[g++]*n+r,p.lineTo(o,s);break;case"q":// quadraticCurveTo
l=f[g++]*n+i,c=f[g++]*n+r,h=f[g++]*n+i,u=f[g++]*n+r,p.quadraticCurveTo(h,u,l,c);break;case"b":// bezierCurveTo
l=f[g++]*n+i,c=f[g++]*n+r,h=f[g++]*n+i,u=f[g++]*n+r,d=f[g++]*n+i,m=f[g++]*n+r,p.bezierCurveTo(h,u,d,m,l,c)}}return{offsetX:a.ha*n,path:p}}}
/**
 * @author mrdoob / http://mrdoob.com/
 */function Va(e){this.manager=void 0!==e?e:Rq}Ha.prototype={constructor:Ha,setOptions:function(e){return this.options=e,this},load:function(e,t,n,i){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e);var r=this,q=Tq.get(e);if(void 0!==q)return r.manager.itemStart(e),setTimeout(function(){t&&t(q),r.manager.itemEnd(e)},0),q;fetch(e).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,r.options)}).then(function(n){Tq.add(e,n),t&&t(n),r.manager.itemEnd(e)}).catch(function(t){i&&i(t),r.manager.itemEnd(e),r.manager.itemError(e)})},setCrossOrigin:function(){return this},setPath:function(e){return this.path=e,this}},Object.assign(ka.prototype,{moveTo:function(e,t){this.currentPath=new ra,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t)},lineTo:function(e,t){this.currentPath.lineTo(e,t)},quadraticCurveTo:function(e,t,n,i){this.currentPath.quadraticCurveTo(e,t,n,i)},bezierCurveTo:function(e,t,n,i,r,q){this.currentPath.bezierCurveTo(e,t,n,i,r,q)},splineThru:function(e){this.currentPath.splineThru(e)},toShapes:function(e,t){function n(e){for(var t=[],n=0,i=e.length;n<i;n++){var r=e[n],q=new qa;q.curves=r.curves,t.push(q)}return t}function i(e,t){for(var n=t.length,i=!1,r=n-1,q=0// inPt on polygon contour => immediate success    or
// toggling of inside/outside at every single! intersection point of an edge
//  with the horizontal line through inPt, left of inPt
//  not counting lowerY endpoints of edges and whole edges on that line
;q<n;r=q++){var a=t[r],o=t[q],s=o.x-a.x,l=o.y-a.y;if(Math.abs(l)>Number.EPSILON){if(// not parallel
l<0&&(a=t[q],s=-s,o=t[r],l=-l),e.y<a.y||e.y>o.y)continue;if(e.y===a.y){if(e.x===a.x)return!0;// inPt is on contour ?
// continue;				// no intersection or edgeLowPt => doesn't count !!!
}else{var c=l*(e.x-a.x)-s*(e.y-a.y);if(0===c)return!0;// inPt is on contour ?
if(c<0)continue;i=!i}}else{// parallel or collinear
if(e.y!==a.y)continue;// parallel
// edge lies on the same horizontal line as inPt
if(o.x<=e.x&&e.x<=a.x||a.x<=e.x&&e.x<=o.x)return!0;// inPt: Point on contour !
// continue;
}}return i}var r=Wr.isClockWise,q=this.subPaths;if(0===q.length)return[];if(!0===t)return n(q);var a,o,s,l=[];if(1===q.length)return o=q[0],(s=new qa).curves=o.curves,l.push(s),l;var c=!r(q[0].getPoints());c=e?!c:c;// console.log("Holes first", holesFirst);
var h,u,d=[],m=[],p=[],f=0;m[f]=void 0,p[f]=[];for(var g=0,v=q.length;g<v;g++)a=r(h=(o=q[g]).getPoints()),(a=e?!a:a)?(!c&&m[f]&&f++,m[f]={s:new qa,p:h},m[f].s.curves=o.curves,c&&f++,p[f]=[]):p[f].push({h:o,p:h[0]});// only Holes? -> probably all Shapes with wrong orientation
if(!m[0])return n(q);if(m.length>1){for(var x=!1,y=[],_=0,b=m.length;_<b;_++)d[_]=[];for(_=0,b=m.length;_<b;_++)for(var w=p[_],E=0;E<w.length;E++){for(var M=w[E],S=!0,T=0;T<m.length;T++)i(M.p,m[T].p)&&(_!==T&&y.push({froms:_,tos:T,hole:E}),S?(S=!1,d[T].push(M)):x=!0);S&&d[_].push(M)}// console.log("ambiguous: ", ambiguous);
y.length>0&&(// console.log("to change: ", toChange);
x||(p=d))}g=0;for(var A=m.length;g<A;g++){s=m[g].s,l.push(s);for(var R=0,L=(u=p[g]).length;R<L;R++)s.holes.push(u[R].h)}//console.log("shape", shapes);
return l}}),Object.assign(Ga.prototype,{isFont:!0,generateShapes:function(e,t,n){void 0===t&&(t=100),void 0===n&&(n=4);for(var i=[],r=function(e,t,n,i){for(var r=String(e).split(""),q=t/i.resolution,a=(i.boundingBox.yMax-i.boundingBox.yMin+i.underlineThickness)*q,o=[],s=0,l=0,c=0;c<r.length;c++){var h=r[c];if("\n"===h)s=0,l-=a;else{var u=ja(h,n,q,s,l,i);s+=u.offsetX,o.push(u.path)}}return o}(e,t,n,this.data),q=0,a=r.length;q<a;q++)Array.prototype.push.apply(i,r[q].toShapes());return i}}),Object.assign(Va.prototype,{load:function(e,t,n,i){var r=this,q=new Cq(this.manager);q.setPath(this.path),q.load(e,function(e){var n;try{n=JSON.parse(e)}catch(t){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),n=JSON.parse(e.substring(65,e.length-2))}var i=r.parse(n);t&&t(i)},n,i)},parse:function(e){return new Ga(e)},setPath:function(e){return this.path=e,this}});var Wa={getContext:function(){return void 0===Ua&&(Ua=new(window.AudioContext||window.webkitAudioContext)),Ua},setContext:function(e){Ua=e}};
/**
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */function Xa(e){this.manager=void 0!==e?e:Rq}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ya(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Di,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Di,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}
/**
 * Camera for rendering cube maps
 *	- renders scene into axis-aligned cube
 *
 * @author alteredq / http://alteredqualia.com/
 */
function Za(e,t,n){Wt.call(this),this.type="CubeCamera";var i=new Di(90,1,e,t);i.up.set(0,-1,0),i.lookAt(new Et(1,0,0)),this.add(i);var r=new Di(90,1,e,t);r.up.set(0,-1,0),r.lookAt(new Et(-1,0,0)),this.add(r);var q=new Di(90,1,e,t);q.up.set(0,0,1),q.lookAt(new Et(0,1,0)),this.add(q);var a=new Di(90,1,e,t);a.up.set(0,0,-1),a.lookAt(new Et(0,-1,0)),this.add(a);var o=new Di(90,1,e,t);o.up.set(0,-1,0),o.lookAt(new Et(0,0,1)),this.add(o);var s=new Di(90,1,e,t);s.up.set(0,-1,0),s.lookAt(new Et(0,0,-1)),this.add(s);var l={format:Le,magFilter:me,minFilter:me};this.renderTarget=new Lt(n,n,l),this.renderTarget.texture.name="CubeCamera",this.update=function(e,t){null===this.parent&&this.updateMatrixWorld();var n=this.renderTarget,l=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,n.activeCubeFace=0,e.render(t,i,n),n.activeCubeFace=1,e.render(t,r,n),n.activeCubeFace=2,e.render(t,q,n),n.activeCubeFace=3,e.render(t,a,n),n.activeCubeFace=4,e.render(t,o,n),n.texture.generateMipmaps=l,n.activeCubeFace=5,e.render(t,s,n),e.setRenderTarget(null)},this.clear=function(e,t,n,i){for(var r=this.renderTarget,q=0;q<6;q++)r.activeCubeFace=q,e.setRenderTarget(r),e.clear(t,n,i);e.setRenderTarget(null)}}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ja(){Wt.call(this),this.type="AudioListener",this.context=Wa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */
function Qa(e){Wt.call(this),this.type="Audio",this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.offset=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ka(e){Qa.call(this,e),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function $a(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=void 0!==t?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}
/**
 *
 * Buffered scene graph property that allows weighted accumulation.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function eo(e,t,n){this.binding=e,this.valueSize=n;var i,r=Float64Array;switch(t){case"quaternion":i=this._slerp;break;case"string":case"bool":r=Array,i=this._select;break;default:i=this._lerp}this.buffer=new r(4*n),// layout: [ incoming | accu0 | accu1 | orig ]
//
// interpolators can use .buffer as their .result
// the data then goes to 'incoming'
//
// 'accu0' and 'accu1' are used frame-interleaved for
// the cumulative result and are compared to detect
// changes
//
// 'orig' stores the original state of the property
this._mixBufferRegion=i,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}Object.assign(Xa.prototype,{load:function(e,t,n,i){var r=new Cq(this.manager);r.setResponseType("arraybuffer"),r.load(e,function(e){Wa.getContext().decodeAudioData(e,function(e){t(e)})},n,i)}}),Object.assign(Ya.prototype,{update:function(){var e,t,n,i,r,q,a,o,s=new bt,l=new bt;return function(c){if(e!==this||t!==c.focus||n!==c.fov||i!==c.aspect*this.aspect||r!==c.near||q!==c.far||a!==c.zoom||o!==this.eyeSep){e=this,t=c.focus,n=c.fov,i=c.aspect*this.aspect,r=c.near,q=c.far,a=c.zoom;// Off-axis stereoscopic effect based on
// http://paulbourke.net/stereographics/stereorender/
var h,u,d=c.projectionMatrix.clone(),m=(o=this.eyeSep/2)*r/t,p=r*Math.tan(yt.DEG2RAD*n*.5)/a;// translate xOffset
l.elements[12]=-o,s.elements[12]=o,// for left eye
h=-p*i+m,u=p*i+m,d.elements[0]=2*r/(u-h),d.elements[8]=(u+h)/(u-h),this.cameraL.projectionMatrix.copy(d),// for right eye
h=-p*i-m,u=p*i-m,d.elements[0]=2*r/(u-h),d.elements[8]=(u+h)/(u-h),this.cameraR.projectionMatrix.copy(d)}this.cameraL.matrixWorld.copy(c.matrixWorld).multiply(l),this.cameraR.matrixWorld.copy(c.matrixWorld).multiply(s)}}()}),Za.prototype=Object.create(Wt.prototype),Za.prototype.constructor=Za,Ja.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Ja,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(e){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01)},updateMatrixWorld:function(){var e=new Et,t=new wt,n=new Et,i=new Et;return function(r){Wt.prototype.updateMatrixWorld.call(this,r);var q=this.context.listener,a=this.up;this.matrixWorld.decompose(e,t,n),i.set(0,0,-1).applyQuaternion(t),q.positionX?(q.positionX.setValueAtTime(e.x,this.context.currentTime),q.positionY.setValueAtTime(e.y,this.context.currentTime),q.positionZ.setValueAtTime(e.z,this.context.currentTime),q.forwardX.setValueAtTime(i.x,this.context.currentTime),q.forwardY.setValueAtTime(i.y,this.context.currentTime),q.forwardZ.setValueAtTime(i.z,this.context.currentTime),q.upX.setValueAtTime(a.x,this.context.currentTime),q.upY.setValueAtTime(a.y,this.context.currentTime),q.upZ.setValueAtTime(a.z,this.context.currentTime)):(q.setPosition(e.x,e.y,e.z),q.setOrientation(i.x,i.y,i.z,a.x,a.y,a.z))}}()}),Qa.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Qa,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(!0!==this.isPlaying){if(!1!==this.hasPlaybackControl){var e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.onended=this.onEnded.bind(this),e.playbackRate.setValueAtTime(this.playbackRate,this.startTime),this.startTime=this.context.currentTime,e.start(this.startTime,this.offset),this.isPlaying=!0,this.source=e,this.connect()}console.warn("THREE.Audio: this Audio has no playback control.")}else console.warn("THREE.Audio: Audio is already playing.")},pause:function(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this.source.stop(),this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")},stop:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.offset=0,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),!0===this.isPlaying?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(!1!==this.hasPlaybackControl)return this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this;console.warn("THREE.Audio: this Audio has no playback control.")},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(!1!==this.hasPlaybackControl)return this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}),Ka.prototype=Object.assign(Object.create(Qa.prototype),{constructor:Ka,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){this.panner.refDistance=e},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){this.panner.rolloffFactor=e},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){this.panner.distanceModel=e},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){this.panner.maxDistance=e},updateMatrixWorld:function(){var e=new Et;return function(t){Wt.prototype.updateMatrixWorld.call(this,t),e.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(e.x,e.y,e.z)}}()}),Object.assign($a.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var e=0,t=this.getFrequencyData(),n=0;n<t.length;n++)e+=t[n];return e/t.length}}),Object.assign(eo.prototype,{// accumulate data in the 'incoming' region into 'accu<i>'
accumulate:function(e,t){// note: happily accumulating nothing when weight = 0, the caller knows
// the weight and shouldn't have made the call in the first place
var n=this.buffer,i=this.valueSize,r=e*i+i,q=this.cumulativeWeight;if(0===q){// accuN := incoming * weight
for(var a=0;a!==i;++a)n[r+a]=n[a];q=t}else{var o=t/(// accuN := accuN + incoming * weight
q+=t);this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=q},// apply the state of 'accu<i>' to the binding when accus differ
apply:function(e){var t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,q=this.binding;if(this.cumulativeWeight=0,r<1){// accuN := accuN + original * ( 1 - cumulativeWeight )
var a=3*t;this._mixBufferRegion(n,i,a,1-r,t)}for(var o=t,s=t+t;o!==s;++o)if(n[o]!==n[o+t]){// value has changed -> update scene graph
q.setValue(n,i);break}},// remember the state of the bound property and copy it to both accus
saveOriginalState:function(){var e=this.binding,t=this.buffer,n=this.valueSize,i=3*n;e.getValue(t,i);// accu[0..1] := orig -- initially detect changes against the original
for(var r=n,q=i;r!==q;++r)t[r]=t[i+r%n];this.cumulativeWeight=0},// apply the state previously taken via 'saveOriginalState' to the binding
restoreOriginalState:function(){var e=3*this.valueSize;this.binding.setValue(this.buffer,e)},// mix functions
_select:function(e,t,n,i,r){if(i>=.5)for(var q=0;q!==r;++q)e[t+q]=e[n+q]},_slerp:function(e,t,n,i){wt.slerpFlat(e,t,e,t,e,n,i)},_lerp:function(e,t,n,i,r){for(var q=1-i,a=0;a!==r;++a){var o=t+a;e[o]=e[o]*q+e[n+a]*i}}});
/**
 *
 * A reference to a real property in the scene graph.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
// Characters [].:/ are reserved for track binding syntax.
var to,no;function io(e,t,n){var i=n||ro.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}function ro(e,t,n){this.path=t,this.parsedPath=n||ro.parseTrackName(t),this.node=ro.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}
/**
 *
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 * 	-	Add objects you would otherwise pass as 'root' to the
 * 		constructor or the .clipAction method of AnimationMixer.
 *
 * 	-	Instead pass this object as 'root'.
 *
 * 	-	You can also add and remove objects later when the mixer
 * 		is running.
 *
 * Note:
 *
 *  	Objects of this class appear as one object to the mixer,
 *  	so cache control of the individual objects must be done
 *  	on the group.
 *
 * Limitation:
 *
 * 	- 	The animated properties must be compatible among the
 * 		all objects in the group.
 *
 *  -	A single property can either be controlled through a
 *  	target group or directly, but not both.
 *
 * @author tschw
 */
function qo(){this.uuid=yt.generateUUID(),// cached objects followed by the active ones
this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;// threshold
// note: read by PropertyBinding.Composite
var e={};this._indicesByUUID=e;// for bookkeeping
for(var t=0,n=arguments.length;t!==n;++t)e[arguments[t].uuid]=t;this._paths=[],// inside: string
this._parsedPaths=[],// inside: { we don't care, here }
this._bindings=[],// inside: Array< PropertyBinding >
this._bindingsIndicesByPath={};// inside: indices in these arrays
var i=this;this.stats={objects:{get total(){return i._objects.length},get inUse(){return this.total-i.nCachedObjects_}},get bindingsPerObject(){return i._bindings.length}}}
/**
 *
 * Action provided by AnimationMixer for scheduling clip playback on specific
 * objects.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 *
 */
function ao(e,t,n){this._mixer=e,this._clip=t,this._localRoot=n||null;for(var i=t.tracks,r=i.length,q=new Array(r),a={endingStart:ot,endingEnd:ot},o=0;o!==r;++o){var s=i[o].createInterpolant(null);q[o]=s,s.settings=a}this._interpolantSettings=a,this._interpolants=q,// bound by the mixer
// inside: PropertyMixer (managed by the mixer)
this._propertyBindings=new Array(r),this._cacheIndex=null,// for the memory manager
this._byClipCacheIndex=null,// for the memory manager
this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=at,this._loopCount=-1,// global mixer time when the action is to be started
// it's set back to 'null' upon start of the action
this._startTime=null,// scaled local time of the action
// gets clamped or wrapped to 0..clip.duration according to loop
this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,// no. of repetitions when looping
this.paused=!1,// true -> zero effective time scale
this.enabled=!0,// false -> zero effective weight
this.clampWhenFinished=!1,// keep feeding the last frame?
this.zeroSlopeAtStart=!0,// for smooth interpolation w/o separate
this.zeroSlopeAtEnd=!0}
/**
 *
 * Player for AnimationClips.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function oo(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function so(e){"string"==typeof e&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function lo(){un.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function co(e,t,n,i){this.data=e,this.itemSize=t,this.offset=n,this.normalized=!0===i}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function ho(e,t){this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function uo(e,t,n){ho.call(this,e,t),this.meshPerAttribute=n||1}
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function mo(e,t,n){Kt.call(this,e,t),this.meshPerAttribute=n||1}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author bhouston / http://clara.io/
 * @author stephomi / http://stephaneginier.com/
 */
function po(e,t,n,i){this.ray=new _n(e,t),// direction is assumed to be normalized (for accurate distance calculations)
this.near=n||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function fo(e,t){return e.distance-t.distance}function go(e,t,n,i){if(!1!==e.visible&&(e.raycast(t,n),!0===i))for(var r=e.children,q=0,a=r.length;q<a;q++)go(r[q],t,n,!0)}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function vo(e){this.autoStart=void 0===e||e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}
/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.
 */
function xo(e,t,n){// around the equator of the sphere
return this.radius=void 0!==e?e:1,this.phi=void 0!==t?t:0,// up / down towards top and bottom pole
this.theta=void 0!==n?n:0,this}
/**
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 *
 */
function yo(e,t,n){// height above the x-z plane
return this.radius=void 0!==e?e:1,// distance from the origin to a point in the x-z plane
this.theta=void 0!==t?t:0,// counterclockwise angle in the x-z plane measured in radians from the positive z-axis
this.y=void 0!==n?n:0,this}
/**
 * @author bhouston / http://clara.io
 */
function _o(e,t){this.min=void 0!==e?e:new _t(1/0,1/0),this.max=void 0!==t?t:new _t(-1/0,-1/0)}
/**
 * @author alteredq / http://alteredqualia.com/
 */
function bo(e){Wt.call(this),this.material=e,this.render=function(){}}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function wo(e,t,n,i){this.object=e,this.size=void 0!==t?t:1;var r=void 0!==n?n:16711680,q=void 0!==i?i:1,a=0,o=this.object.geometry;o&&o.isGeometry?a=3*o.faces.length:o&&o.isBufferGeometry&&(a=o.attributes.normal.count);//
var s=new un,l=new on(2*a*3,3);s.addAttribute("position",l),Qi.call(this,s,new Zi({color:r,linewidth:q})),//
this.matrixAutoUpdate=!1,this.update()}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function Eo(e,t){Wt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;for(var n=new un,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],r=0,q=1;r<32;r++,q++){var a=r/32*Math.PI*2,o=q/32*Math.PI*2;i.push(Math.cos(a),Math.sin(a),1,Math.cos(o),Math.sin(o),1)}n.addAttribute("position",new on(i,3));var s=new Zi({fog:!1});this.cone=new Qi(n,s),this.add(this.cone),this.update()}function Mo(e){for(var t=
/**
 * @author Sean Griffin / http://twitter.com/sgrif
 * @author Michael Guerrero / http://realitymeltdown.com
 * @author mrdoob / http://mrdoob.com/
 * @author ikerr / http://verold.com
 * @author Mugen87 / https://github.com/Mugen87
 */
function e(t){var n=[];t&&t.isBone&&n.push(t);for(var i=0;i<t.children.length;i++)n.push.apply(n,e(t.children[i]));return n}(e),n=new un,i=[],r=[],q=new Ft(0,0,1),a=new Ft(0,1,0),o=0;o<t.length;o++){var s=t[o];s.parent&&s.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(q.r,q.g,q.b),r.push(a.r,a.g,a.b))}n.addAttribute("position",new on(i,3)),n.addAttribute("color",new on(r,3));var l=new Zi({vertexColors:f,depthTest:!1,depthWrite:!1,transparent:!0});Qi.call(this,n,l),this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function So(e,t,n){this.light=e,this.light.updateMatrixWorld(),this.color=n;var i=new tq(t,4,2),r=new xn({wireframe:!0,fog:!1});En.call(this,i,r),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}
/**
 * @author abelnation / http://github.com/abelnation
 * @author Mugen87 / http://github.com/Mugen87
 * @author WestLangley / http://github.com/WestLangley
 */
function To(e,t){Wt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;var n=new Zi({fog:!1}),i=new un;i.addAttribute("position",new Kt(new Float32Array(15),3)),this.line=new Ji(i,n),this.add(this.line),this.update()}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
function Ao(e,t,n){Wt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;var i=new dr(t);i.rotateY(.5*Math.PI),this.material=new xn({wireframe:!0,fog:!1}),void 0===this.color&&(this.material.vertexColors=f);var r=i.getAttribute("position"),q=new Float32Array(3*r.count);i.addAttribute("color",new Kt(q,3)),this.add(new En(i,this.material)),this.update()}
/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ro(e,t,n,i){e=e||10,t=t||10,n=new Ft(void 0!==n?n:4473924),i=new Ft(void 0!==i?i:8947848);for(var r=t/2,q=e/t,a=e/2,o=[],s=[],l=0,c=0,h=-a;l<=t;l++,h+=q){o.push(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);var u=l===r?n:i;u.toArray(s,c),c+=3,u.toArray(s,c),c+=3,u.toArray(s,c),c+=3,u.toArray(s,c),c+=3}var d=new un;d.addAttribute("position",new on(o,3)),d.addAttribute("color",new on(s,3));var m=new Zi({vertexColors:f});Qi.call(this,d,m)}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / http://github.com/Mugen87
 * @author Hectate / http://www.github.com/Hectate
 */
function Lo(e,t,n,i,r,q){e=e||10,t=t||16,n=n||8,i=i||64,r=new Ft(void 0!==r?r:4473924),q=new Ft(void 0!==q?q:8947848);var a,o,s,l,c,h,u,d=[],m=[];// create the radials
for(l=0;l<=t;l++)s=l/t*(2*Math.PI),a=Math.sin(s)*e,o=Math.cos(s)*e,d.push(0,0,0),d.push(a,0,o),u=1&l?r:q,m.push(u.r,u.g,u.b),m.push(u.r,u.g,u.b);// create the circles
for(l=0;l<=n;l++)for(u=1&l?r:q,h=e-e/n*l,c=0;c<i;c++)// first vertex
s=c/i*(2*Math.PI),a=Math.sin(s)*h,o=Math.cos(s)*h,d.push(a,0,o),m.push(u.r,u.g,u.b),// second vertex
s=(c+1)/i*(2*Math.PI),a=Math.sin(s)*h,o=Math.cos(s)*h,d.push(a,0,o),m.push(u.r,u.g,u.b);var p=new un;p.addAttribute("position",new on(d,3)),p.addAttribute("color",new on(m,3));var g=new Zi({vertexColors:f});Qi.call(this,p,g)}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function Co(e,t,n,i){// FaceNormalsHelper only supports THREE.Geometry
this.object=e,this.size=void 0!==t?t:1;var r=void 0!==n?n:16776960,q=void 0!==i?i:1,a=0,o=this.object.geometry;o&&o.isGeometry?a=o.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");//
var s=new un,l=new on(2*a*3,3);s.addAttribute("position",l),Qi.call(this,s,new Zi({color:r,linewidth:q})),//
this.matrixAutoUpdate=!1,this.update()}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function Po(e,t,n){Wt.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,void 0===t&&(t=1);var i=new un;i.addAttribute("position",new on([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));var r=new Zi({fog:!1});this.lightPlane=new Ji(i,r),this.add(this.lightPlane),(i=new un).addAttribute("position",new on([0,0,0,0,0,1],3)),this.targetLine=new Ji(i,r),this.add(this.targetLine),this.update()}
/**
 * @author alteredq / http://alteredqualia.com/
 * @author Mugen87 / https://github.com/Mugen87
 *
 *	- shows frustum, line of sight and up of the camera
 *	- suitable for fast updates
 * 	- based on frustum visualization in lightgl.js shadowmap example
 *		http://evanw.github.com/lightgl.js/tests/shadowmap.html
 */
function Oo(e){var t=new un,n=new Zi({color:16777215,vertexColors:p}),i=[],r=[],q={},a=new Ft(16755200),o=new Ft(16711680),s=new Ft(43775),l=new Ft(16777215),c=new Ft(3355443);function h(e,t,n){u(e,n),u(t,n)}function u(e,t){i.push(0,0,0),r.push(t.r,t.g,t.b),void 0===q[e]&&(q[e]=[]),q[e].push(i.length/3-1)}// near
h("n1","n2",a),h("n2","n4",a),h("n4","n3",a),h("n3","n1",a),// far
h("f1","f2",a),h("f2","f4",a),h("f4","f3",a),h("f3","f1",a),// sides
h("n1","f1",a),h("n2","f2",a),h("n3","f3",a),h("n4","f4",a),// cone
h("p","n1",o),h("p","n2",o),h("p","n3",o),h("p","n4",o),// up
h("u1","u2",s),h("u2","u3",s),h("u3","u1",s),// target
h("c","t",l),h("p","c",c),// cross
h("cn1","cn2",c),h("cn3","cn4",c),h("cf1","cf2",c),h("cf3","cf4",c),t.addAttribute("position",new on(i,3)),t.addAttribute("color",new on(r,3)),Qi.call(this,t,n),this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=q,this.update()}
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / http://github.com/Mugen87
 */
function Io(e,t){this.object=e,void 0===t&&(t=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new un;r.setIndex(new Kt(n,1)),r.addAttribute("position",new Kt(i,3)),Qi.call(this,r,new Zi({color:t})),this.matrixAutoUpdate=!1,this.update()}
/**
 * @author WestLangley / http://github.com/WestLangley
 */
function No(e,t){this.type="Box3Helper",this.box=e;var n=void 0!==t?t:16776960,i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new un;r.setIndex(new Kt(i,1)),r.addAttribute("position",new on([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),Qi.call(this,r,new Zi({color:n})),this.geometry.computeBoundingSphere()}
/**
 * @author WestLangley / http://github.com/WestLangley
 */
function Do(e,t,n){this.type="PlaneHelper",this.plane=e,this.size=void 0===t?1:t;var i=void 0!==n?n:16776960,r=new un;r.addAttribute("position",new on([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),r.computeBoundingSphere(),Ji.call(this,r,new Zi({color:i}));//
var q=new un;q.addAttribute("position",new on([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),q.computeBoundingSphere(),this.add(new En(q,new xn({color:i,opacity:.2,transparent:!0,depthWrite:!1})))}function Uo(e,t,n,i,r,q){// dir is assumed to be normalized
Wt.call(this),void 0===i&&(i=16776960),void 0===n&&(n=1),void 0===r&&(r=.2*n),void 0===q&&(q=.2*r),void 0===to&&((to=new un).addAttribute("position",new on([0,0,0,0,1,0],3)),(no=new hq(0,.5,1,5,1)).translate(0,-.5,0)),this.position.copy(t),this.line=new Ji(to,new Zi({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new En(no,new xn({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,q)}
/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */
function Bo(e){var t=[0,0,0,e=e||1,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=new un;n.addAttribute("position",new on(t,3)),n.addAttribute("color",new on([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var i=new Zi({vertexColors:f});Qi.call(this,n,i)}Object.assign(io.prototype,{getValue:function(e,t){this.bind();// bind all binding
var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];// and only call .getValue on the first
void 0!==i&&i.getValue(e,t)},setValue:function(e,t){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}),Object.assign(ro,{Composite:io,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new ro.Composite(e,t,n):new ro(e,t,n)},
/**
	 * Replaces spaces with underscores and removes unsupported characters from
	 * node names, to ensure compatibility with parseTrackName().
	 *
	 * @param  {string} name Node name to be sanitized.
	 * @return {string}
	 */
sanitizeNodeName:function(){var e=new RegExp("[\\[\\]\\.:\\/]","g");return function(t){return t.replace(/\s/g,"_").replace(e,"")}}(),parseTrackName:function(){// Attempts to allow node names from any language. ES5's `\w` regexp matches
// only latin characters, and the unicode \p{L} is not yet supported. So
// instead, we exclude reserved characters and match everything else.
var e="[^\\[\\]\\.:\\/]",t="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",n=/((?:WC+[\/:])*)/.source.replace("WC",e),i=/(WCOD+)?/.source.replace("WCOD",t),r=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e),q=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e),a=new RegExp("^"+n+i+r+q+"$"),o=["material","materials","bones"];return function(e){var t=a.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);var n={// directoryName: matches[ 1 ], // (tschw) currently unused
nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],// required
propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){var r=n.nodeName.substring(i+1);// Object names must be checked against a whitelist. Otherwise, there
// is no way to parse 'foo.bar.baz': 'baz' must be a property, but
// 'bar' could be the objectName, or part of a nodeName (which can
// include '.' characters).
-1!==o.indexOf(r)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}}(),findNode:function(e,t){if(!t||""===t||"root"===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;// search into skeleton bones.
if(e.skeleton){var n=e.skeleton.getBoneByName(t);if(void 0!==n)return n}// search into node subtree.
if(e.children){var i=function e(n){for(var i=0;i<n.length;i++){var r=n[i];if(r.name===t||r.uuid===t)return r;var q=e(r.children);if(q)return q}return null}(e.children);if(i)return i}return null}}),Object.assign(ro.prototype,{// prototype, continued
// these are used to "bind" a nonexistent property
_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)e[t++]=n[i]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[// Direct
function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[// EntireArray
function(e,t){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=e[t++]},function(e,t){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[// ArrayElement
function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[// HasToFromArray
function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},// create getter / setter pair for a property in the scene graph
bind:function(){var e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;// ensure there is a value node
if(e||(e=ro.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),// set fail state so we can just 'return' on error
this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,e){if(n){var q=t.objectIndex;// special cases were we need to reach deeper into the hierarchy to get the face materials....
switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);// potential future optimization: skip this if propertyIndex is already an integer
// and convert the integer string to a true integer.
e=e.skeleton.bones;// support resolving morphTarget names into indices.
for(var a=0;a<e.length;a++)if(e[a].name===q){q=a;break}break;default:if(void 0===e[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(void 0!==q){if(void 0===e[q])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[q]}}// resolve property
var o=e[i];if(void 0!==o){// determine versioning scheme
var s=this.Versioning.None;void 0!==e.needsUpdate?(// material
s=this.Versioning.NeedsUpdate,this.targetObject=e):void 0!==e.matrixWorldNeedsUpdate&&(// node transform
s=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=e);// determine how the property gets bound
var l=this.BindingType.Direct;if(void 0!==r){// access a sub element of the property array (only primitives are supported right now)
if("morphTargetInfluences"===i){// potential optimization, skip this if propertyIndex is already an integer, and convert the integer string to a true integer.
// support resolving morphTarget names into indices.
if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);for(a=0;a<this.node.geometry.morphAttributes.position.length;a++)if(e.geometry.morphAttributes.position[a].name===r){r=a;break}}else{if(!e.geometry.morphTargets)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);for(a=0;a<this.node.geometry.morphTargets.length;a++)if(e.geometry.morphTargets[a].name===r){r=a;break}}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else void 0!==o.fromArray&&void 0!==o.toArray?(// must use copy for Object3D.Euler/Quaternion
l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;// select getter / setter
this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}else{var c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null,// back to the prototype version of getValue / setValue
// note: avoiding to mutate the shape of 'this' via 'delete'
this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(ro.prototype,{// initial state of these methods that calls 'bind'
_getValue_unbound:ro.prototype.getValue,_setValue_unbound:ro.prototype.setValue}),Object.assign(qo.prototype,{isAnimationObjectGroup:!0,add:function(){for(var e=this._objects,t=e.length,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._paths,q=this._parsedPaths,a=this._bindings,o=a.length,s=void 0,l=0,c=arguments.length;l!==c;++l){var h=arguments[l],u=h.uuid,d=i[u];if(void 0===d){// unknown object -> add it to the ACTIVE region
d=t++,i[u]=d,e.push(h);// accounting is done, now do the same for all bindings
for(var m=0,p=o;m!==p;++m)a[m].push(new ro(h,r[m],q[m]))}else if(d<n){s=e[d];// move existing object to the ACTIVE region
var f=--n,g=e[f];i[g.uuid]=d,e[d]=g,i[u]=f,e[f]=h;// accounting is done, now do the same for all bindings
for(m=0,p=o;m!==p;++m){var v=a[m],x=v[f],y=v[d];v[d]=x,void 0===y&&(// since we do not bother to create new bindings
// for objects that are cached, the binding may
// or may not exist
y=new ro(h,r[m],q[m])),v[f]=y}}else e[d]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");// else the object is already where we want it to be
}// for arguments
this.nCachedObjects_=n},remove:function(){for(var e=this._objects,t=this.nCachedObjects_,n=this._indicesByUUID,i=this._bindings,r=i.length,q=0,a=arguments.length;q!==a;++q){var o=arguments[q],s=o.uuid,l=n[s];if(void 0!==l&&l>=t){// move existing object into the CACHED region
var c=t++,h=e[c];n[h.uuid]=l,e[l]=h,n[s]=c,e[c]=o;// accounting is done, now do the same for all bindings
for(var u=0,d=r;u!==d;++u){var m=i[u],p=m[c],f=m[l];m[l]=p,m[c]=f}}}// for arguments
this.nCachedObjects_=t},// remove & forget
uncache:function(){for(var e=this._objects,t=e.length,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._bindings,q=r.length,a=0,o=arguments.length;a!==o;++a){var s=arguments[a].uuid,l=i[s];if(void 0!==l)if(delete i[s],l<n){// object is cached, shrink the CACHED region
var c=--n,h=e[c],u=e[g=--t];// last cached object takes this object's place
i[h.uuid]=l,e[l]=h,// last object goes to the activated slot and pop
i[u.uuid]=c,e[c]=u,e.pop();// accounting is done, now do the same for all bindings
for(var d=0,m=q;d!==m;++d){var p=(v=r[d])[c],f=v[g];v[l]=p,v[c]=f,v.pop()}}else{// object is active, just swap with the last and pop
var g;i[(u=e[g=--t]).uuid]=l,e[l]=u,e.pop();// accounting is done, now do the same for all bindings
for(d=0,m=q;d!==m;++d){var v;(v=r[d])[l]=v[g],v.pop()}}// cached or active
// if object is known
}// for arguments
this.nCachedObjects_=n},// Internal interface used by befriended PropertyBinding.Composite:
subscribe_:function(e,t){// returns an array of bindings for the given path that is changed
// according to the contained objects in the group
var n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(void 0!==i)return r[i];var q=this._paths,a=this._parsedPaths,o=this._objects,s=o.length,l=this.nCachedObjects_,c=new Array(s);i=r.length,n[e]=i,q.push(e),a.push(t),r.push(c);for(var h=l,u=o.length;h!==u;++h){var d=o[h];c[h]=new ro(d,e,t)}return c},unsubscribe_:function(e){// tells the group to forget about a property path and no longer
// update the array previously obtained with 'subscribe_'
var t=this._bindingsIndicesByPath,n=t[e];if(void 0!==n){var i=this._paths,r=this._parsedPaths,q=this._bindings,a=q.length-1,o=q[a];t[e[a]]=n,q[n]=o,q.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}),Object.assign(ao.prototype,{// State & Scheduling
play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){// forget scheduling
return this.paused=!1,this.enabled=!0,this.time=0,// restart clip
this._loopCount=-1,// forget previous loops
this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},// return true when play has been called
isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},// Weight
// set the weight stopping any scheduled fading
// although .enabled = false yields an effective weight of zero, this
// method does *not* change .enabled, because it would be confusing
setEffectiveWeight:function(e){return this.weight=e,// note: same logic as when updated at runtime
this._effectiveWeight=this.enabled?e:0,this.stopFading()},// return the weight considering fading and .enabled
getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){var i=this._clip.duration,r=e._clip.duration,q=r/i,a=i/r;e.warp(1,q,t),this.warp(a,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){var e=this._weightInterpolant;return null!==e&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},// Time Scale Control
// set the time scale stopping any scheduled warping
// although .paused = true yields an effective time scale of zero, this
// method does *not* change .paused, because it would be confusing
setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},// return the time scale considering warping and .paused
getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){var i=this._mixer,r=i.time,q=this._timeScaleInterpolant,a=this.timeScale;null===q&&(q=i._lendControlInterpolant(),this._timeScaleInterpolant=q);var o=q.parameterPositions,s=q.sampleValues;return o[0]=r,o[1]=r+n,s[0]=e/a,s[1]=t/a,this},stopWarping:function(){var e=this._timeScaleInterpolant;return null!==e&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},// Object Accessors
getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},// Interna
_update:function(e,t,n,i){// called by the mixer
if(this.enabled){var r=this._startTime;if(null!==r){// check for scheduled start of action
var q=(e-r)*n;if(q<0||0===n)return;// yet to come / don't decide when delta = 0
// start
this._startTime=null,// unschedule
t=n*q}// apply time scale and advance time
t*=this._updateTimeScale(e);var a=this._updateTime(t),o=this._updateWeight(e);// note: _updateTime may disable the action resulting in
// an effective weight of 0
if(o>0)for(var s=this._interpolants,l=this._propertyBindings,c=0,h=s.length;c!==h;++c)s[c].evaluate(a),l[c].accumulate(i,o)}else// call ._updateWeight() to update ._effectiveWeight
this._updateWeight(e)},_updateWeight:function(e){var t=0;if(this.enabled){t=this.weight;var n=this._weightInterpolant;if(null!==n){var i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),0===i&&(// faded out, disable
this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){var t=0;if(!this.paused){t=this.timeScale;var n=this._timeScaleInterpolant;if(null!==n)t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),0===t?// motion has halted, pause
this.paused=!0:// warp done - apply final time scale
this.timeScale=t)}return this._effectiveTimeScale=t,t},_updateTime:function(e){var t=this.time+e;if(0===e)return t;var n=this._clip.duration,i=this.loop,r=this._loopCount;if(2200===i){-1===r&&(// just started
this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(t>=n)t=n;else{if(!(t<0))break e;t=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{// repetitive Repeat or PingPong
var q=2202===i;if(-1===r&&(// just started
e>=0?(r=0,this._setEndings(!0,0===this.repetitions,q)):// when looping in reverse direction, the initial
// transition through zero counts as a repetition,
// so leave loopCount at -1
this._setEndings(0===this.repetitions,!0,q)),t>=n||t<0){// wrap around
var a=Math.floor(t/n);// signed
t-=n*a,r+=Math.abs(a);var o=this.repetitions-r;if(o<=0)// have to stop (switch state, clamp time, fire event)
this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?n:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{// keep running
if(1===o){// entering the last round
var s=e<0;this._setEndings(s,!s,q)}else this._setEndings(!1,!1,q);this._loopCount=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}if(q&&1==(1&r))// invert time for the "pong round"
return this.time=t,n-t}return this.time=t,t},_setEndings:function(e,t,n){var i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(// assuming for LoopOnce atStart == atEnd == true
i.endingStart=e?this.zeroSlopeAtStart?2401:ot:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:ot:2402)},_scheduleFading:function(e,t,n){var i=this._mixer,r=i.time,q=this._weightInterpolant;null===q&&(q=i._lendControlInterpolant(),this._weightInterpolant=q);var a=q.parameterPositions,o=q.sampleValues;return a[0]=r,o[0]=t,a[1]=r+e,o[1]=n,this}}),oo.prototype=Object.assign(Object.create(r.prototype),{constructor:oo,_bindAction:function(e,t){var n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,q=e._propertyBindings,a=e._interpolants,o=n.uuid,s=this._bindingsByRootAndName,l=s[o];void 0===l&&(l={},s[o]=l);for(var c=0;c!==r;++c){var h=i[c],u=h.name,d=l[u];if(void 0!==d)q[c]=d;else{if(void 0!==(d=q[c])){// existing binding, make sure the cache knows
null===d._cacheIndex&&(++d.referenceCount,this._addInactiveBinding(d,o,u));continue}var m=t&&t._propertyBindings[c].binding.parsedPath;++(d=new eo(ro.create(n,u,m),h.ValueTypeName,h.getValueSize())).referenceCount,this._addInactiveBinding(d,o,u),q[c]=d}a[c].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(null===e._cacheIndex){// this action has been forgotten by the cache, but the user
// appears to be still using it -> rebind
var t=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,t)}// increment reference counts / sort out state
for(var r=e._propertyBindings,q=0,a=r.length;q!==a;++q){var o=r[q];0==o.useCount++&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){// decrement reference counts / sort out state
for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];0==--r.useCount&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},// Memory manager
_initMemoryManager:function(){this._actions=[],// 'nActiveActions' followed by inactive ones
this._nActiveActions=0,this._actionsByClip={},// inside:
// {
// 		knownActions: Array< AnimationAction >	- used as prototypes
// 		actionByRoot: AnimationAction			- lookup
// }
this._bindings=[],// 'nActiveBindings' followed by inactive ones
this._nActiveBindings=0,this._bindingsByRootAndName={},// inside: Map< name, PropertyMixer >
this._controlInterpolants=[],// same game as above
this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},// Memory management for AnimationAction objects
_isActiveAction:function(e){var t=e._cacheIndex;return null!==t&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){var i=this._actions,r=this._actionsByClip,q=r[t];if(void 0===q)q={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=q;else{var a=q.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),q.actionByRoot[n]=e},_removeInactiveAction:function(e){var t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;var r=e._clip.uuid,q=this._actionsByClip,a=q[r],o=a.knownActions,s=o[o.length-1],l=e._byClipCacheIndex;s._byClipCacheIndex=l,o[l]=s,o.pop(),e._byClipCacheIndex=null,delete a.actionByRoot[(e._localRoot||this._root).uuid],0===o.length&&delete q[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];0==--r.referenceCount&&this._removeInactiveBinding(r)}},_lendAction:function(e){// [ active actions |  inactive actions  ]
// [  active actions >| inactive actions ]
//                 s        a
//                  <-swap->
//                 a        s
var t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){// [  active actions  | inactive actions ]
// [ active actions |< inactive actions  ]
//        a        s
//         <-swap->
//        s        a
var t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},// Memory management for PropertyMixer objects
_addInactiveBinding:function(e,t,n){var i=this._bindingsByRootAndName,r=i[t],q=this._bindings;void 0===r&&(r={},i[t]=r),r[n]=e,e._cacheIndex=q.length,q.push(e)},_removeInactiveBinding:function(e){var t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,q=this._bindingsByRootAndName,a=q[i],o=t[t.length-1],s=e._cacheIndex;o._cacheIndex=s,t[s]=o,t.pop(),delete a[r];e:{for(var l in a)break e;// eslint-disable-line no-unused-vars
delete q[i]}},_lendBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},// Memory management of Interpolants for weight and time scale
_lendControlInterpolant:function(){var e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return void 0===n&&((n=new Ea(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){var t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),// return an action for a clip optionally using a custom root target
// object (this method allocates a lot of dynamic memory in case a
// previously unknown clip/root combination is specified)
clipAction:function(e,t){var n=t||this._root,i=n.uuid,r="string"==typeof e?Ra.findByName(n,e):e,q=null!==r?r.uuid:e,a=this._actionsByClip[q],o=null;if(void 0!==a){var s=a.actionByRoot[i];if(void 0!==s)return s;// we know the clip, so we don't have to parse all
// the bindings again but can just copy
o=a.knownActions[0],// also, take the clip from the prototype action
null===r&&(r=o._clip)}// clip must be known when specified via string
if(null===r)return null;// allocate all resources required to run it
var l=new ao(this,r,t);return this._bindAction(l,o),// and make the action known to the memory manager
this._addInactiveAction(l,q,i),l},// get an existing action
existingAction:function(e,t){var n=t||this._root,i=n.uuid,r="string"==typeof e?Ra.findByName(n,e):e,q=r?r.uuid:e,a=this._actionsByClip[q];return void 0!==a&&a.actionByRoot[i]||null},// deactivates all previously scheduled actions
stopAllAction:function(){var e=this._actions,t=this._nActiveActions,n=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var r=0;r!==t;++r)e[r].reset();for(r=0;r!==i;++r)n[r].useCount=0;return this},// advance the time and update apply the animation
update:function(e){e*=this.timeScale;// run active actions
for(var t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),q=this._accuIndex^=1,a=0;a!==n;++a){t[a]._update(i,e,r,q)}// update scene graph
var o=this._bindings,s=this._nActiveBindings;for(a=0;a!==s;++a)o[a].apply(q);return this},// return this mixer's root target object
getRoot:function(){return this._root},// free all resources specific to a particular clip
uncacheClip:function(e){var t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){for(// note: just calling _removeInactiveAction would mess up the
// iteration state and also require updating the state we can
// just throw away
var q=r.knownActions,a=0,o=q.length;a!==o;++a){var s=q[a];this._deactivateAction(s);var l=s._cacheIndex,c=t[t.length-1];s._cacheIndex=null,s._byClipCacheIndex=null,c._cacheIndex=l,t[l]=c,t.pop(),this._removeInactiveBindingsForAction(s)}delete i[n]}},// free all resources specific to a particular root target object
uncacheRoot:function(e){var t=e.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot[t];void 0!==r&&(this._deactivateAction(r),this._removeInactiveAction(r))}var q=this._bindingsByRootAndName[t];if(void 0!==q)for(var a in q){var o=q[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}},// remove a targeted clip from the cache
uncacheAction:function(e,t){var n=this.existingAction(e,t);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}}),so.prototype.clone=function(){return new so(void 0===this.value.clone?this.value:this.value.clone())},lo.prototype=Object.assign(Object.create(un.prototype),{constructor:lo,isInstancedBufferGeometry:!0,copy:function(e){return un.prototype.copy.call(this,e),this.maxInstancedCount=e.maxInstancedCount,this},clone:function(){return(new this.constructor).copy(this)}}),Object.defineProperties(co.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}}),Object.assign(co.prototype,{isInterleavedBufferAttribute:!0,setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}}),Object.defineProperty(ho.prototype,"needsUpdate",{set:function(e){!0===e&&this.version++}}),Object.assign(ho.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=void 0!==e?e.length/this.stride:0,this.array=e,this},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(var i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return void 0===t&&(t=0),this.array.set(e,t),this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(e){return this.onUploadCallback=e,this}}),uo.prototype=Object.assign(Object.create(ho.prototype),{constructor:uo,isInstancedInterleavedBuffer:!0,copy:function(e){return ho.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this}}),mo.prototype=Object.assign(Object.create(Kt.prototype),{constructor:mo,isInstancedBufferAttribute:!0,copy:function(e){return Kt.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this}}),Object.assign(po.prototype,{linePrecision:1,set:function(e,t){// direction is assumed to be normalized (for accurate distance calculations)
this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize()):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),// set origin in plane of camera
this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){var i=n||[];return go(e,this,i,t),i.sort(fo),i},intersectObjects:function(e,t,n){var i=n||[];if(!1===Array.isArray(e))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(var r=0,q=e.length;r<q;r++)go(e[r],this,i,t);return i.sort(fo),i}}),Object.assign(vo.prototype,{start:function(){this.startTime=("undefined"==typeof performance?Date:performance).now(),// see #10732
this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var t=("undefined"==typeof performance?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}),Object.assign(xo.prototype,{set:function(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},// restrict phi to be betwee EPS and PI-EPS
makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(e){return this.radius=e.length(),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),// equator angle around y-up axis
this.phi=Math.acos(yt.clamp(e.y/this.radius,-1,1))),this}}),Object.assign(yo.prototype,{set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.radius=Math.sqrt(e.x*e.x+e.z*e.z),this.theta=Math.atan2(e.x,e.z),this.y=e.y,this}}),Object.assign(_o.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new _t;return function(t,n){var i=e.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return void 0===e&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new _t),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return void 0===e&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new _t),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){// This can potentially have a divide by zero if the box
// has a size dimension of 0.
return void 0===t&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new _t),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){// using 4 splitting planes to rule out intersections
return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return void 0===t&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new _t),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new _t;return function(t){return e.copy(t).clamp(this.min,this.max).sub(t).length()}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}),bo.prototype=Object.create(Wt.prototype),bo.prototype.constructor=bo,bo.prototype.isImmediateRenderObject=!0,wo.prototype=Object.create(Qi.prototype),wo.prototype.constructor=wo,wo.prototype.update=function(){var e=new Et,t=new Et,n=new Mt;return function(){var i=["a","b","c"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var r=this.object.matrixWorld,q=this.geometry.attributes.position,a=this.object.geometry;if(a&&a.isGeometry)for(var o=a.vertices,s=a.faces,l=0,c=0,h=s.length;c<h;c++)for(var u=s[c],d=0,m=u.vertexNormals.length;d<m;d++){var p=o[u[i[d]]],f=u.vertexNormals[d];e.copy(p).applyMatrix4(r),t.copy(f).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),q.setXYZ(l,e.x,e.y,e.z),l+=1,q.setXYZ(l,t.x,t.y,t.z),l+=1}else if(a&&a.isBufferGeometry){var g=a.attributes.position,v=a.attributes.normal;// for simplicity, ignore index and drawcalls, and render every normal
for(l=0,d=0,m=g.count;d<m;d++)e.set(g.getX(d),g.getY(d),g.getZ(d)).applyMatrix4(r),t.set(v.getX(d),v.getY(d),v.getZ(d)),t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),q.setXYZ(l,e.x,e.y,e.z),l+=1,q.setXYZ(l,t.x,t.y,t.z),l+=1}q.needsUpdate=!0}}(),Eo.prototype=Object.create(Wt.prototype),Eo.prototype.constructor=Eo,Eo.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},Eo.prototype.update=function(){var e=new Et,t=new Et;return function(){this.light.updateMatrixWorld();var n=this.light.distance?this.light.distance:1e3,i=n*Math.tan(this.light.angle);this.cone.scale.set(i,i,n),e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(t.sub(e)),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}(),Mo.prototype=Object.create(Qi.prototype),Mo.prototype.constructor=Mo,Mo.prototype.updateMatrixWorld=function(){var e=new Et,t=new bt,n=new bt;return function(i){var r=this.bones,q=this.geometry,a=q.getAttribute("position");n.getInverse(this.root.matrixWorld);for(var o=0,s=0;o<r.length;o++){var l=r[o];l.parent&&l.parent.isBone&&(t.multiplyMatrices(n,l.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(s,e.x,e.y,e.z),t.multiplyMatrices(n,l.parent.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(s+1,e.x,e.y,e.z),s+=2)}q.getAttribute("position").needsUpdate=!0,Wt.prototype.updateMatrixWorld.call(this,i)}}(),So.prototype=Object.create(En.prototype),So.prototype.constructor=So,So.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},So.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)
/*
	var d = this.light.distance;

	if ( d === 0.0 ) {

		this.lightDistance.visible = false;

	} else {

		this.lightDistance.visible = true;
		this.lightDistance.scale.set( d, d, d );

	}
	*/},To.prototype=Object.create(Wt.prototype),To.prototype.constructor=To,To.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},To.prototype.update=function(){// calculate new dimensions of the helper
var e=.5*this.light.width,t=.5*this.light.height,n=this.line.geometry.attributes.position,i=n.array;// update vertices
i[0]=e,i[1]=-t,i[2]=0,i[3]=e,i[4]=t,i[5]=0,i[6]=-e,i[7]=t,i[8]=0,i[9]=-e,i[10]=-t,i[11]=0,i[12]=e,i[13]=-t,i[14]=0,n.needsUpdate=!0,void 0!==this.color?this.line.material.color.set(this.color):this.line.material.color.copy(this.light.color)},Ao.prototype=Object.create(Wt.prototype),Ao.prototype.constructor=Ao,Ao.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},Ao.prototype.update=function(){var e=new Et,t=new Ft,n=new Ft;return function(){var i=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var r=i.geometry.getAttribute("color");t.copy(this.light.color),n.copy(this.light.groundColor);for(var q=0,a=r.count;q<a;q++){var o=q<a/2?t:n;r.setXYZ(q,o.r,o.g,o.b)}r.needsUpdate=!0}i.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())}}(),Ro.prototype=Object.create(Qi.prototype),Ro.prototype.constructor=Ro,Lo.prototype=Object.create(Qi.prototype),Lo.prototype.constructor=Lo,Co.prototype=Object.create(Qi.prototype),Co.prototype.constructor=Co,Co.prototype.update=function(){var e=new Et,t=new Et,n=new Mt;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var i=this.object.matrixWorld,r=this.geometry.attributes.position,q=this.object.geometry,a=q.vertices,o=q.faces,s=0,l=0,c=o.length;l<c;l++){var h=o[l],u=h.normal;e.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(i),t.copy(u).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),r.setXYZ(s,e.x,e.y,e.z),s+=1,r.setXYZ(s,t.x,t.y,t.z),s+=1}r.needsUpdate=!0}}(),Po.prototype=Object.create(Wt.prototype),Po.prototype.constructor=Po,Po.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},Po.prototype.update=function(){var e=new Et,t=new Et,n=new Et;return function(){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(t,e),this.lightPlane.lookAt(n),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(n),this.targetLine.scale.z=n.length()}}(),Oo.prototype=Object.create(Qi.prototype),Oo.prototype.constructor=Oo,Oo.prototype.update=function(){var e,t,n=new Et,i=new Xt;function r(r,q,a,o){n.set(q,a,o).unproject(i);var s=t[r];if(void 0!==s)for(var l=e.getAttribute("position"),c=0,h=s.length;c<h;c++)l.setXYZ(s[c],n.x,n.y,n.z)}return function(){e=this.geometry,t=this.pointMap;// we need just camera projection matrix
// world matrix must be identity
i.projectionMatrix.copy(this.camera.projectionMatrix),// center / target
r("c",0,0,-1),r("t",0,0,1),// near
r("n1",-1,-1,-1),r("n2",1,-1,-1),r("n3",-1,1,-1),r("n4",1,1,-1),// far
r("f1",-1,-1,1),r("f2",1,-1,1),r("f3",-1,1,1),r("f4",1,1,1),// up
r("u1",.7,1.1,-1),r("u2",-.7,1.1,-1),r("u3",0,2,-1),// cross
r("cf1",-1,0,1),r("cf2",1,0,1),r("cf3",0,-1,1),r("cf4",0,1,1),r("cn1",-1,0,-1),r("cn2",1,0,-1),r("cn3",0,-1,-1),r("cn4",0,1,-1),e.getAttribute("position").needsUpdate=!0}}(),Io.prototype=Object.create(Qi.prototype),Io.prototype.constructor=Io,Io.prototype.update=function(){var e=new Pt;return function(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&e.setFromObject(this.object),!e.isEmpty()){var n=e.min,i=e.max,r=this.geometry.attributes.position,q=r.array;q[0]=i.x,q[1]=i.y,q[2]=i.z,q[3]=n.x,q[4]=i.y,q[5]=i.z,q[6]=n.x,q[7]=n.y,q[8]=i.z,q[9]=i.x,q[10]=n.y,q[11]=i.z,q[12]=i.x,q[13]=i.y,q[14]=n.z,q[15]=n.x,q[16]=i.y,q[17]=n.z,q[18]=n.x,q[19]=n.y,q[20]=n.z,q[21]=i.x,q[22]=n.y,q[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}(),Io.prototype.setFromObject=function(e){return this.object=e,this.update(),this},No.prototype=Object.create(Qi.prototype),No.prototype.constructor=No,No.prototype.updateMatrixWorld=function(e){var t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),Wt.prototype.updateMatrixWorld.call(this,e))},Do.prototype=Object.create(Ji.prototype),Do.prototype.constructor=Do,Do.prototype.updateMatrixWorld=function(e){var t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),// sign does not matter
this.scale.set(.5*this.size,.5*this.size,t),this.lookAt(this.plane.normal),Wt.prototype.updateMatrixWorld.call(this,e)},Uo.prototype=Object.create(Wt.prototype),Uo.prototype.constructor=Uo,Uo.prototype.setDirection=function(){var e,t=new Et;return function(n){// dir is assumed to be normalized
n.y>.99999?this.quaternion.set(0,0,0,1):n.y<-.99999?this.quaternion.set(1,0,0,0):(t.set(n.z,0,-n.x).normalize(),e=Math.acos(n.y),this.quaternion.setFromAxisAngle(t,e))}}(),Uo.prototype.setLength=function(e,t,n){void 0===t&&(t=.2*e),void 0===n&&(n=.2*t),this.line.scale.set(1,Math.max(0,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()},Uo.prototype.setColor=function(e){this.line.material.color.copy(e),this.cone.material.color.copy(e)},Bo.prototype=Object.create(Qi.prototype),Bo.prototype.constructor=Bo;//
function Fo(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Vq.call(this,e),this.type="catmullrom",this.closed=!0}//
function zo(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Vq.call(this,e),this.type="catmullrom"}//
function Ho(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Vq.call(this,e),this.type="catmullrom"}//
Uq.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(Uq.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},//
Object.assign(ia.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");// generate geometry from path points (for Line or Points objects)
var t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");// generate geometry from equidistant sampling along the path
var t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var t=new Qt,n=0,i=e.length;n<i;n++){var r=e[n];t.vertices.push(new Et(r.x,r.y,r.z||0))}return t}}),//
Object.assign(ra.prototype,{fromPoints:function(e){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}}),Fo.prototype=Object.create(Vq.prototype),zo.prototype=Object.create(Vq.prototype),Ho.prototype=Object.create(Vq.prototype),Object.assign(Ho.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),Ro.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Mo.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},//
Object.assign(Oa.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ia.extractUrlBase(e)}}),//
Object.assign(_o.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(Pt.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}}),bn.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)},Object.assign(yt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),yt.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),yt.ceilPowerOfTwo(e)}}),Object.assign(Mt.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(e/*, offset, length */){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}}),Object.assign(bt.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){var e;return function(){return void 0===e&&(e=new Et),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),e.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(e/*, offset, length */){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,q){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,q)}}),It.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)},wt.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},Object.assign(_n.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}}),Object.assign(wn.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}}),Object.assign(wn,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),wn.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),wn.getNormal(e,t,n,i)}}),Object.assign(qa.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Zr(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new aq(this,e)}}),Object.assign(_t.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Et.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(At.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),//
Object.assign(Qt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}}),Object.assign(Wt.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}}),Object.defineProperties(Wt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.defineProperties(Vi.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Wi.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),Object.defineProperty(Uq.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}}),//
Di.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==t&&(this.filmGauge=t),this.setFocalLength(e)},//
Object.defineProperties(aa.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}}),//
Object.defineProperties(Kt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")}}),Object.assign(un.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addDrawCall:function(e,t,n){void 0!==n&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}}),Object.defineProperties(un.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),//
Object.assign(Jr.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),//
Object.defineProperties(so.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),//
Object.defineProperties(vn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ft}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===e}}}),Object.defineProperties(_q.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(yn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}}),//
Object.assign(Fi.prototype,{getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")}}),Object.defineProperties(Fi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Ci.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),//
Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}}),//
Object.defineProperties(Bi.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}}}),//
Qa.prototype.load=function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var t=this;return(new Xa).load(e,function(e){t.setBuffer(e)}),this},$a.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},//
Za.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};//
var ko={merge:function(e,t,n){var i;console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),t.isMesh&&(t.matrixAutoUpdate&&t.updateMatrix(),i=t.matrix,t=t.geometry),e.merge(t,i,n)},center:function(e){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),e.center()}},Go={crossOrigin:void 0,loadTexture:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new Dq;r.setCrossOrigin(this.crossOrigin);var q=r.load(e,n,void 0,i);return t&&(q.mapping=t),q},loadTextureCube:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new Nq;r.setCrossOrigin(this.crossOrigin);var q=r.load(e,n,void 0,i);return t&&(q.mapping=t),q},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};//
var jo={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};//
t.WebGLRenderTargetCube=Lt,t.WebGLRenderTarget=Rt,t.WebGLRenderer=Fi,t.ShaderLib=Ht,t.UniformsLib=zt,t.UniformsUtils=Ut,t.ShaderChunk=Dt,t.FogExp2=zi,t.Fog=Hi,t.Scene=ki,t.Sprite=ji,t.LOD=Vi,t.SkinnedMesh=Yi,t.Skeleton=Wi,t.Bone=Xi,t.Mesh=En,t.LineSegments=Qi,t.LineLoop=Ki,t.Line=Ji,t.Points=er,t.Group=tr,t.VideoTexture=nr,t.DataTexture=Ct,t.CompressedTexture=ir,t.CubeTexture=Sn,t.CanvasTexture=Pi,t.DepthTexture=rr,t.Texture=Tt,t.CompressedTextureLoader=Pq,t.DataTextureLoader=Oq,t.CubeTextureLoader=Nq,t.TextureLoader=Dq,t.ObjectLoader=Da,t.MaterialLoader=La,t.BufferGeometryLoader=Ca,t.DefaultLoadingManager=Rq,t.LoadingManager=Aq,t.JSONLoader=Na,t.ImageLoader=Iq,t.ImageBitmapLoader=Ha,t.FontLoader=Va,t.FileLoader=Cq,t.Loader=Oa,t.LoaderUtils=Ia,t.Cache=Tq,t.AudioLoader=Xa,t.SpotLightShadow=la,t.SpotLight=ca,t.PointLight=ha,t.RectAreaLight=pa,t.HemisphereLight=oa,t.DirectionalLightShadow=ua,t.DirectionalLight=da,t.AmbientLight=ma,t.LightShadow=sa,t.Light=aa,t.StereoCamera=Ya,t.PerspectiveCamera=Di,t.OrthographicCamera=Yt,t.CubeCamera=Za,t.ArrayCamera=Ui,t.Camera=Xt,t.AudioListener=Ja,t.PositionalAudio=Ka,t.AudioContext=Wa,t.AudioAnalyser=$a,t.Audio=Qa,t.VectorKeyframeTrack=Aa,t.StringKeyframeTrack=fa,t.QuaternionKeyframeTrack=ya,t.NumberKeyframeTrack=ba,t.ColorKeyframeTrack=_a,t.BooleanKeyframeTrack=ga,t.PropertyMixer=eo,t.PropertyBinding=ro,t.KeyframeTrack=Ta,t.AnimationUtils=Sa,t.AnimationObjectGroup=qo,t.AnimationMixer=oo,t.AnimationClip=Ra,t.Uniform=so,t.InstancedBufferGeometry=lo,t.BufferGeometry=un,t.Geometry=Qt,t.InterleavedBufferAttribute=co,t.InstancedInterleavedBuffer=uo,t.InterleavedBuffer=ho,t.InstancedBufferAttribute=mo,t.Face3=Zt,t.Object3D=Wt,t.Raycaster=po,t.Layers=jt,t.EventDispatcher=r,t.Clock=vo,t.QuaternionLinearInterpolant=xa,t.LinearInterpolant=Ea,t.DiscreteInterpolant=Ma,t.CubicInterpolant=wa,t.Interpolant=va,t.Triangle=wn,t.Math=yt,t.Spherical=xo,t.Cylindrical=yo,t.Plane=It,t.Frustum=Nt,t.Sphere=Ot,t.Ray=_n,t.Matrix4=bt,t.Matrix3=Mt,t.Box3=Pt,t.Box2=_o,t.Line3=bn,t.Euler=Gt,t.Vector4=At,t.Vector3=Et,t.Vector2=_t,t.Quaternion=wt,t.Color=Ft,t.ImmediateRenderObject=bo,t.VertexNormalsHelper=wo,t.SpotLightHelper=Eo,t.SkeletonHelper=Mo,t.PointLightHelper=So,t.RectAreaLightHelper=To,t.HemisphereLightHelper=Ao,t.GridHelper=Ro,t.PolarGridHelper=Lo,t.FaceNormalsHelper=Co,t.DirectionalLightHelper=Po,t.CameraHelper=Oo,t.BoxHelper=Io,t.Box3Helper=No,t.PlaneHelper=Do,t.ArrowHelper=Uo,t.AxesHelper=Bo,t.Shape=qa,t.Path=ra,t.ShapePath=ka,t.Font=Ga,t.CurvePath=ia,t.Curve=Uq,t.ShapeUtils=Wr,t.WebGLUtils=Ni,t.WireframeGeometry=qr,t.ParametricGeometry=ar,t.ParametricBufferGeometry=or,t.TetrahedronGeometry=cr,t.TetrahedronBufferGeometry=hr,t.OctahedronGeometry=ur,t.OctahedronBufferGeometry=dr,t.IcosahedronGeometry=mr,t.IcosahedronBufferGeometry=pr,t.DodecahedronGeometry=fr,t.DodecahedronBufferGeometry=gr,t.PolyhedronGeometry=sr,t.PolyhedronBufferGeometry=lr,t.TubeGeometry=vr,t.TubeBufferGeometry=xr,t.TorusKnotGeometry=yr,t.TorusKnotBufferGeometry=_r,t.TorusGeometry=br,t.TorusBufferGeometry=wr,t.TextGeometry=Kr,t.TextBufferGeometry=$r,t.SphereGeometry=eq,t.SphereBufferGeometry=tq,t.RingGeometry=nq,t.RingBufferGeometry=iq,t.PlaneGeometry=pn,t.PlaneBufferGeometry=fn,t.LatheGeometry=rq,t.LatheBufferGeometry=qq,t.ShapeGeometry=aq,t.ShapeBufferGeometry=oq,t.ExtrudeGeometry=Zr,t.ExtrudeBufferGeometry=Jr,t.EdgesGeometry=lq,t.ConeGeometry=uq,t.ConeBufferGeometry=dq,t.CylinderGeometry=cq,t.CylinderBufferGeometry=hq,t.CircleGeometry=mq,t.CircleBufferGeometry=pq,t.BoxGeometry=dn,t.BoxBufferGeometry=mn,t.ShadowMaterial=gq,t.SpriteMaterial=Gi,t.RawShaderMaterial=vq,t.ShaderMaterial=yn,t.PointsMaterial=$i,t.MeshPhysicalMaterial=yq,t.MeshStandardMaterial=xq,t.MeshPhongMaterial=_q,t.MeshToonMaterial=bq,t.MeshNormalMaterial=wq,t.MeshLambertMaterial=Eq,t.MeshDepthMaterial=Ri,t.MeshDistanceMaterial=Li,t.MeshBasicMaterial=xn,t.LineDashedMaterial=Mq,t.LineBasicMaterial=Zi,t.Material=vn,t.Float64BufferAttribute=sn,t.Float32BufferAttribute=on,t.Uint32BufferAttribute=an,t.Int32BufferAttribute=qn,t.Uint16BufferAttribute=rn,t.Int16BufferAttribute=nn,t.Uint8ClampedBufferAttribute=tn,t.Uint8BufferAttribute=en,t.Int8BufferAttribute=$t,t.BufferAttribute=Kt,t.ArcCurve=Fq,t.CatmullRomCurve3=Vq,t.CubicBezierCurve=Zq,t.CubicBezierCurve3=Jq,t.EllipseCurve=Bq,t.LineCurve=Qq,t.LineCurve3=Kq,t.QuadraticBezierCurve=$q,t.QuadraticBezierCurve3=ea,t.SplineCurve=ta,t.REVISION=q,t.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2},t.CullFaceNone=a,t.CullFaceBack=o,t.CullFaceFront=s,t.CullFaceFrontBack=3,t.FrontFaceDirectionCW=0,t.FrontFaceDirectionCCW=1,t.BasicShadowMap=0,t.PCFShadowMap=l,t.PCFSoftShadowMap=c,t.FrontSide=h,t.BackSide=u,t.DoubleSide=d,t.FlatShading=1,t.SmoothShading=2,t.NoColors=m,t.FaceColors=p,t.VertexColors=f,t.NoBlending=g,t.NormalBlending=v,t.AdditiveBlending=x,t.SubtractiveBlending=y,t.MultiplyBlending=_,t.CustomBlending=b,t.AddEquation=w,t.SubtractEquation=E,t.ReverseSubtractEquation=M,t.MinEquation=S,t.MaxEquation=T,t.ZeroFactor=A,t.OneFactor=R,t.SrcColorFactor=L,t.OneMinusSrcColorFactor=C,t.SrcAlphaFactor=P,t.OneMinusSrcAlphaFactor=O,t.DstAlphaFactor=I,t.OneMinusDstAlphaFactor=N,t.DstColorFactor=D,t.OneMinusDstColorFactor=U,t.SrcAlphaSaturateFactor=B,t.NeverDepth=F,t.AlwaysDepth=z,t.LessDepth=H,t.LessEqualDepth=k,t.EqualDepth=G,t.GreaterEqualDepth=j,t.GreaterDepth=V,t.NotEqualDepth=W,t.MultiplyOperation=X,t.MixOperation=Y,t.AddOperation=Z,t.NoToneMapping=J,t.LinearToneMapping=Q,t.ReinhardToneMapping=K,t.Uncharted2ToneMapping=$,t.CineonToneMapping=ee,t.UVMapping=300,t.CubeReflectionMapping=te,t.CubeRefractionMapping=ne,t.EquirectangularReflectionMapping=ie,t.EquirectangularRefractionMapping=re,t.SphericalReflectionMapping=qe,t.CubeUVReflectionMapping=ae,t.CubeUVRefractionMapping=oe,t.RepeatWrapping=se,t.ClampToEdgeWrapping=le,t.MirroredRepeatWrapping=ce,t.NearestFilter=he,t.NearestMipMapNearestFilter=ue,t.NearestMipMapLinearFilter=de,t.LinearFilter=me,t.LinearMipMapNearestFilter=pe,t.LinearMipMapLinearFilter=fe,t.UnsignedByteType=ge,t.ByteType=ve,t.ShortType=xe,t.UnsignedShortType=ye,t.IntType=_e,t.UnsignedIntType=be,t.FloatType=we,t.HalfFloatType=Ee,t.UnsignedShort4444Type=Me,t.UnsignedShort5551Type=Se,t.UnsignedShort565Type=Te,t.UnsignedInt248Type=Ae,t.AlphaFormat=Re,t.RGBFormat=Le,t.RGBAFormat=Ce,t.LuminanceFormat=Pe,t.LuminanceAlphaFormat=Oe,t.RGBEFormat=Ie,t.DepthFormat=Ne,t.DepthStencilFormat=De,t.RGB_S3TC_DXT1_Format=Ue,t.RGBA_S3TC_DXT1_Format=Be,t.RGBA_S3TC_DXT3_Format=Fe,t.RGBA_S3TC_DXT5_Format=ze,t.RGB_PVRTC_4BPPV1_Format=He,t.RGB_PVRTC_2BPPV1_Format=ke,t.RGBA_PVRTC_4BPPV1_Format=Ge,t.RGBA_PVRTC_2BPPV1_Format=je,t.RGB_ETC1_Format=Ve,t.RGBA_ASTC_4x4_Format=We,t.RGBA_ASTC_5x4_Format=Xe,t.RGBA_ASTC_5x5_Format=Ye,t.RGBA_ASTC_6x5_Format=Ze,t.RGBA_ASTC_6x6_Format=Je,t.RGBA_ASTC_8x5_Format=Qe,t.RGBA_ASTC_8x6_Format=Ke,t.RGBA_ASTC_8x8_Format=$e,t.RGBA_ASTC_10x5_Format=et,t.RGBA_ASTC_10x6_Format=tt,t.RGBA_ASTC_10x8_Format=nt,t.RGBA_ASTC_10x10_Format=it,t.RGBA_ASTC_12x10_Format=rt,t.RGBA_ASTC_12x12_Format=qt,t.LoopOnce=2200,t.LoopRepeat=at,t.LoopPingPong=2202,t.InterpolateDiscrete=2300,t.InterpolateLinear=2301,t.InterpolateSmooth=2302,t.ZeroCurvatureEnding=ot,t.ZeroSlopeEnding=2401,t.WrapAroundEnding=2402,t.TrianglesDrawMode=st,t.TriangleStripDrawMode=lt,t.TriangleFanDrawMode=ct,t.LinearEncoding=ht,t.sRGBEncoding=ut,t.GammaEncoding=dt,t.RGBEEncoding=mt,t.LogLuvEncoding=3003,t.RGBM7Encoding=pt,t.RGBM16Encoding=ft,t.RGBDEncoding=gt,t.BasicDepthPacking=vt,t.RGBADepthPacking=xt,t.CubeGeometry=dn,t.Face4=
/**
 * @author mrdoob / http://mrdoob.com/
 */
function(e,t,n,i,r,q,a){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Zt(e,t,n,r,q,a)},t.LineStrip=0,t.LinePieces=1,t.MeshFaceMaterial=function(e){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),e},t.MultiMaterial=function(e){return void 0===e&&(e=[]),console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),e.isMultiMaterial=!0,e.materials=e,e.clone=function(){return e.slice()},e},t.PointCloud=function(e,t){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new er(e,t)},t.Particle=function(e){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new ji(e)},t.ParticleSystem=function(e,t){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new er(e,t)},t.PointCloudMaterial=function(e){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new $i(e)},t.ParticleBasicMaterial=function(e){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new $i(e)},t.ParticleSystemMaterial=function(e){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new $i(e)},t.Vertex=function(e,t,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new Et(e,t,n)}//
,t.DynamicBufferAttribute=function(e,t){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new Kt(e,t).setDynamic(!0)},t.Int8Attribute=function(e,t){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new $t(e,t)},t.Uint8Attribute=function(e,t){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new en(e,t)},t.Uint8ClampedAttribute=function(e,t){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new tn(e,t)},t.Int16Attribute=function(e,t){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new nn(e,t)},t.Uint16Attribute=function(e,t){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new rn(e,t)},t.Int32Attribute=function(e,t){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new qn(e,t)},t.Uint32Attribute=function(e,t){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new an(e,t)},t.Float32Attribute=function(e,t){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new on(e,t)},t.Float64Attribute=function(e,t){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new sn(e,t)},t.ClosedSplineCurve3=Fo,t.SplineCurve3=zo,t.Spline=Ho,t.AxisHelper=//
function(e){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Bo(e)},t.BoundingBoxHelper=function(e,t){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Io(e,t)},t.EdgesHelper=function(e,t){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Qi(new lq(e.geometry),new Zi({color:void 0!==t?t:16777215}))},t.WireframeHelper=function(e,t){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Qi(new qr(e.geometry),new Zi({color:void 0!==t?t:16777215}))},t.XHRLoader=function(e){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Cq(e)},t.BinaryTextureLoader=function(e){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Oq(e)},t.GeometryUtils=ko,t.ImageUtils=Go,t.Projector=//
function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}}//
,t.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}},t.SceneUtils=jo,t.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")}},
/***/"./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],
// module.parent = undefined by default
e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},
/***/"./src/assets/img/floor/hardwood2_bump.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/floor/hardwood2_bump.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/hardwood2_bump.bb09e96a.jpg";
/***/},
/***/"./src/assets/img/floor/hardwood2_diffuse.jpg":
/*!****************************************************!*\
  !*** ./src/assets/img/floor/hardwood2_diffuse.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/hardwood2_diffuse.94bed574.jpg";
/***/},
/***/"./src/assets/img/floor/hardwood2_roughness.jpg":
/*!******************************************************!*\
  !*** ./src/assets/img/floor/hardwood2_roughness.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/hardwood2_roughness.875c202a.jpg";
/***/},
/***/"./src/assets/img/lensflare/lensflare0.png":
/*!*************************************************!*\
  !*** ./src/assets/img/lensflare/lensflare0.png ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/lensflare0.28ecca63.png";
/***/},
/***/"./src/assets/img/lensflare/lensflare3.png":
/*!*************************************************!*\
  !*** ./src/assets/img/lensflare/lensflare3.png ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/lensflare3.20a2bd3c.png";
/***/},
/***/"./src/assets/img/memorial.png":
/*!*************************************!*\
  !*** ./src/assets/img/memorial.png ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n.p+"images/memorial.a1f92a1b.png";
/***/},
/***/"./src/components/shader/lm_scene/FresnelShader.js":
/*!*********************************************************!*\
  !*** ./src/components/shader/lm_scene/FresnelShader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Based on Nvidia Cg tutorial
 */
n(/*! three */"./node_modules/three/build/three.module.js").FresnelShader={uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:null}},vertexShader:["uniform float mRefractionRatio;","uniform float mFresnelBias;","uniform float mFresnelScale;","uniform float mFresnelPower;","varying vec3 vReflect;","varying vec3 vRefract[3];","varying float vReflectionFactor;","void main() {","vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","vec4 worldPosition = modelMatrix * vec4( position, 1.0 );","vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );","vec3 I = worldPosition.xyz - cameraPosition;","vReflect = reflect( I, worldNormal );","vRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );","vRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );","vRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );","vReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );","gl_Position = projectionMatrix * mvPosition;","}"].join("\n"),fragmentShader:["uniform samplerCube tCube;","varying vec3 vReflect;","varying vec3 vRefract[3];","varying float vReflectionFactor;","void main() {","vec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );","vec4 refractedColor = vec4( 1.0 );","refractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;","refractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;","refractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;","gl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );","}"].join("\n")}},
/***/"./src/components/shader/lm_scene/HdrShader.js":
/*!*****************************************************!*\
  !*** ./src/components/shader/lm_scene/HdrShader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={vertexShader:["varying vec2 vUv;","void main()\t{","vUv  = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D   tDiffuse;","uniform float       exposure;","uniform float       brightMax;","varying vec2  vUv;","vec3 decode_pnghdr( const in vec4 color ) {",
// remove gamma correction
"vec4 res = color * color;",
// decoded RI
"float ri = pow( 2.0, res.w * 32.0 - 16.0 );",
// decoded HDR pixel
"res.xyz = res.xyz * ri;","return res.xyz;","}","void main()\t{","vec4 color = texture2D( tDiffuse, vUv );","color.xyz  = decode_pnghdr( color );",
// apply gamma correction and exposure
//gl_FragColor = vec4( pow( exposure * color.xyz, vec3( 0.474 ) ), 1.0 );
// Perform tone-mapping
"float Y = dot(vec4(0.30, 0.59, 0.11, 0.0), color);","float YD = exposure * (exposure/brightMax + 1.0) / (exposure + 1.0);","color *= YD;","gl_FragColor = vec4( color.xyz, 1.0 );","}"].join("\n")};t.default=i},
/***/"./src/components/shader/lm_scene/Lensflare.js":
/*!*****************************************************!*\
  !*** ./src/components/shader/lm_scene/Lensflare.js ***!
  \*****************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";var i=n(/*! three */"./node_modules/three/build/three.module.js");
/**
 * @author Mugen87 / https://github.com/Mugen87
 * @author mrdoob / http://mrdoob.com/
 */i.Lensflare=function(){i.Mesh.call(this,i.Lensflare.Geometry,new i.MeshBasicMaterial({opacity:0,transparent:!0})),this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;
//
var e=new i.Vector3,t=new i.DataTexture(new Uint8Array(768),16,16,i.RGBFormat);
// textures
t.minFilter=i.NearestFilter,t.magFilter=i.NearestFilter,t.wrapS=i.ClampToEdgeWrapping,t.wrapT=i.ClampToEdgeWrapping,t.needsUpdate=!0;var n=new i.DataTexture(new Uint8Array(768),16,16,i.RGBFormat);n.minFilter=i.NearestFilter,n.magFilter=i.NearestFilter,n.wrapS=i.ClampToEdgeWrapping,n.wrapT=i.ClampToEdgeWrapping,n.needsUpdate=!0;
// material
var r=i.Lensflare.Geometry,q=new i.RawShaderMaterial({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:["precision highp float;","uniform vec3 screenPosition;","uniform vec2 scale;","attribute vec3 position;","void main() {","\tgl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["precision highp float;","void main() {","\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );","}"].join("\n"),depthTest:!0,depthWrite:!1,transparent:!1}),a=new i.RawShaderMaterial({uniforms:{map:{value:t},scale:{value:null},screenPosition:{value:null}},vertexShader:["precision highp float;","uniform vec3 screenPosition;","uniform vec2 scale;","attribute vec3 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","\tvUV = uv;","\tgl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["precision highp float;","uniform sampler2D map;","varying vec2 vUV;","void main() {","\tgl_FragColor = texture2D( map, vUV );","}"].join("\n"),depthTest:!1,depthWrite:!1,transparent:!1}),o=new i.Mesh(r,q),s=[],l=i.LensflareElement.Shader,c=new i.RawShaderMaterial({uniforms:{map:{value:null},occlusionMap:{value:n},color:{value:new i.Color(16777215)},scale:{value:new i.Vector2},screenPosition:{value:new i.Vector3}},vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:i.AdditiveBlending,transparent:!0,depthWrite:!1}),h=new i.Mesh(r,c);this.addElement=function(e){s.push(e)};
//
var u=new i.Vector2,d=new i.Vector2,m=new i.Box2,p=new i.Vector4;this.onBeforeRender=function(i,l,f){p.copy(i.getCurrentViewport());var g=p.w/p.z,v=p.z/2,x=p.w/2,y=16/p.w;
// screen cull
if(u.set(y*g,y),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),
// calculate position in screen space
e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(f.matrixWorldInverse),e.applyMatrix4(f.projectionMatrix),
// horizontal and vertical coordinate of the lower left corner of the pixels to copy
d.x=p.x+e.x*v+v-8,d.y=p.y+e.y*x+x-8,m.containsPoint(d)){
// save current RGB to temp texture
i.copyFramebufferToTexture(d,t),(M=q.uniforms).scale.value=u,M.screenPosition.value=e,i.renderBufferDirect(f,null,r,q,o,null),
// copy result to occlusionMap
i.copyFramebufferToTexture(d,n),(M=a.uniforms).scale.value=u,M.screenPosition.value=e,i.renderBufferDirect(f,null,r,a,o,null);for(
// render elements
var _=2*-e.x,b=2*-e.y,w=0,E=s.length;w<E;w++){var M,S=s[w];(M=c.uniforms).color.value.copy(S.color),M.map.value=S.texture,M.screenPosition.value.x=e.x+_*S.distance,M.screenPosition.value.y=e.y+b*S.distance;y=S.size/p.w,g=p.w/p.z;M.scale.value.set(y*g,y),c.uniformsNeedUpdate=!0,i.renderBufferDirect(f,null,r,c,h,null)}}},this.dispose=function(){q.dispose(),a.dispose(),c.dispose(),t.dispose(),n.dispose();for(var e=0,i=s.length;e<i;e++)s[e].texture.dispose()}},i.Lensflare.prototype=Object.create(i.Mesh.prototype),i.Lensflare.prototype.constructor=i.Lensflare,i.Lensflare.prototype.isLensflare=!0,
//
i.LensflareElement=function(e,t,n,r){this.texture=e,this.size=t||1,this.distance=n||0,this.color=r||new i.Color(16777215)},i.LensflareElement.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:["precision highp float;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform sampler2D occlusionMap;","attribute vec3 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","\tvUV = uv;","\tvec2 pos = position.xy;","\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","\tvVisibility =        visibility.r / 9.0;","\tvVisibility *= 1.0 - visibility.g / 9.0;","\tvVisibility *=       visibility.b / 9.0;","\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["precision highp float;","uniform sampler2D map;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","\tvec4 texture = texture2D( map, vUV );","\ttexture.a *= vVisibility;","\tgl_FragColor = texture;","\tgl_FragColor.rgb *= color;","}"].join("\n")},i.Lensflare.Geometry=function(){var e=new i.BufferGeometry,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),n=new i.InterleavedBuffer(t,5);return e.setIndex([0,1,2,0,2,3]),e.addAttribute("position",new i.InterleavedBufferAttribute(n,3,0,!1)),e.addAttribute("uv",new i.InterleavedBufferAttribute(n,2,3,!1)),e}()},
/***/"./src/components/shader/lm_scene/Sky.js":
/*!***********************************************!*\
  !*** ./src/components/shader/lm_scene/Sky.js ***!
  \***********************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";var i=n(/*! three */"./node_modules/three/build/three.module.js");
/**
 * @author zz85 / https://github.com/zz85
 *
 * Based on "A Practical Analytic Model for Daylight"
 * aka The Preetham Model, the de facto standard analytic skydome model
 * http://www.cs.utah.edu/~shirley/papers/sunsky/sunsky.pdf
 *
 * First implemented by Simon Wallner
 * http://www.simonwallner.at/projects/atmospheric-scattering
 *
 * Improved by Martin Upitis
 * http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR
 *
 * Three.js integration by zz85 http://twitter.com/blurspline
*/i.Sky=function(){var e=i.Sky.SkyShader,t=new i.ShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:i.UniformsUtils.clone(e.uniforms),side:i.BackSide});i.Mesh.call(this,new i.BoxBufferGeometry(1,1,1),t)},i.Sky.prototype=Object.create(i.Mesh.prototype),i.Sky.SkyShader={uniforms:{luminance:{value:1},turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new i.Vector3}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const vec3 up = vec3( 0.0, 1.0, 0.0 );",
// constants for atmospheric scattering
"const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;",
// wavelength of used primaries, according to preetham
"const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );",
// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
"const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );",
// mie stuff
// K coefficient for the primaries
"const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );",
// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
"const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );",
// earth shadow hack
// cutoffAngle = pi / 1.95;
"const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;",// set z to camera.far
"\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );",
// extinction (absorbtion + out scattering)
// rayleigh coefficients
"\tvBetaR = totalRayleigh * rayleighCoefficient;",
// mie coefficients
"\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float luminance;","uniform float mieDirectionalG;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );",
// constants for atmospheric scattering
"const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;",// refractive index of air
"const float N = 2.545E25;",// number of molecules per unit volume for air at
// 288.15K and 1013mb (sea level -45 celsius)
// optical length at zenith for molecules
"const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const vec3 up = vec3( 0.0, 1.0, 0.0 );",
// 66 arc seconds -> degrees, and the cosine of that
"const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;",
// 3.0 / ( 16.0 * pi )
"const float THREE_OVER_SIXTEENPI = 0.05968310365946075;",
// 1.0 / ( 4.0 * pi )
"const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}",
// Filmic ToneMapping http://filmicgames.com/archives/75
"const float A = 0.15;","const float B = 0.50;","const float C = 0.10;","const float D = 0.20;","const float E = 0.02;","const float F = 0.30;","const float whiteScale = 1.0748724675633854;",// 1.0 / Uncharted2Tonemap(1000.0)
"vec3 Uncharted2Tonemap( vec3 x ) {","\treturn ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;","}","void main() {",
// optical length
// cutoff angle at 90 to avoid singularity in next formula.
"\tfloat zenithAngle = acos( max( 0.0, dot( up, normalize( vWorldPosition - cameraPos ) ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;",
// combined extinction factor
"\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );",
// in scattering
"\tfloat cosTheta = dot( normalize( vWorldPosition - cameraPos ), vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );",
// nightsky
"\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;",
// composition + solar disc
"\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 curr = Uncharted2Tonemap( ( log2( 2.0 / pow( luminance, 4.0 ) ) ) * texColor );","\tvec3 color = curr * whiteScale;","\tvec3 retColor = pow( color, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","}"].join("\n")}},
/***/"./src/components/utils/toast.js":
/*!***************************************!*\
  !*** ./src/components/utils/toast.js ***!
  \***************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.show=o,t.response=
/**
 * [response description]
 * @param  {[type]}  data            [description]
 * @param  {Boolean} isShowOk        [description]
 * @param  {[type]}  successCallback [description]
 * @param  {Boolean} isShowError     [description]
 * @param  {[type]}  errorCallback   [description]
 * @return {[type]}                  [description]
 */
function(e,t,n,i,s){e||s&&s();var l=e.status,c=e.message;if(l===r)return t&&(c||(c=q),o(c)),void(n&&n());i&&(c||(c=a),o(c)),s&&s()}
/**
 * 获取layer对象
 * @return {[type]} [description]
 */,t.getLayer=function(){return i.default}
/**
 * 提示网络错误
 * @return {[type]} [description]
 */,t.netError=function(){o("网络错误")}
/**
 * 展示一个加载的信息
 * @param  {[type]} content 展示的提醒信息，如果没有传入就没有提醒信息
 * @return {[type]}         [description]
 */,t.load=function(e,t){return e?t?i.default.open({type:2,shadeClose:!1,content:e,shade:"background-color: rgba(0,0,0,.5)"}):i.default.open({type:2,shadeClose:!1,content:e,shade:"background-color: rgba(0,0,0,1)"}):i.default.open({type:2,shadeClose:!1})}
/**
 * 清除所有layer层
 * @return {[type]} [description]
 */,t.closeAll=function(){return i.default.closeAll()}
/**
 * 用于关闭特定层，index为该特定层的索引
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */,t.close=function(e){return i.default.close(e)}
/**
 * 调用layer的open
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */,t.open=function(e){return i.default.open(e)}
/***/;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(/*! ../../vendor/utils/layer.js */"./src/vendor/utils/layer.js"));var r=100,q="操作成功",a="操作失败";
// const LOGIN_ERROR = 300
// const NET_ERROR = -1
/**
 * 信息展示
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
function o(e){i.default.open({content:e,skin:"msg",time:2})}},
/***/"./src/lm_scene_index.js":
/*!*******************************!*\
  !*** ./src/lm_scene_index.js ***!
  \*******************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}
// import * as Toast from 'com_gl/utils/toast';
(n(/*! lm_scene/index */"./src/views/lm_scene/index.js"));n(/*! ./style/common/commom.css */"./src/style/common/commom.css"),n(/*! ./style/common/layer.css */"./src/style/common/layer.css"),new Promise(i.default).then(function(e){
// 把渲染内容输出至dom中
document.body.style.width=window.innerWidth+"px",document.body.style.height=window.innerHeight+"px",document.body.appendChild(e.domElement)})},
/***/"./src/style/common/commom.css":
/*!*************************************!*\
  !*** ./src/style/common/commom.css ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,n){var i=n(/*! !../../../node_modules/css-loader!./commom.css */"./node_modules/css-loader/index.js!./src/style/common/commom.css");"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(i,r);i.locals&&(e.exports=i.locals)},
/***/"./src/style/common/layer.css":
/*!************************************!*\
  !*** ./src/style/common/layer.css ***!
  \************************************/
/*! no static exports found */
/***/function(e,t,n){var i=n(/*! !../../../node_modules/css-loader!./layer.css */"./node_modules/css-loader/index.js!./src/style/common/layer.css");"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(i,r);i.locals&&(e.exports=i.locals)},
/***/"./src/style/fonts/gentilis_regular.typeface.json":
/*!********************************************************!*\
  !*** ./src/style/fonts/gentilis_regular.typeface.json ***!
  \********************************************************/
/*! exports provided: glyphs, cssFontWeight, ascender, underlinePosition, cssFontStyle, boundingBox, resolution, original_font_information, descender, familyName, lineHeight, underlineThickness, default */
/***/},
/***/"./src/vendor/threejs/controls/OrbitControls.js":
/*!******************************************************!*\
  !*** ./src/vendor/threejs/controls/OrbitControls.js ***!
  \******************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";var i=n(/*! three */"./node_modules/three/build/three.module.js");
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or arrow keys / touch: two-finger move
i.OrbitControls=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,
// Set to false to disable this control
this.enabled=!0,
// "target" sets the location of focus, where the object orbits around
this.target=new i.Vector3,
// How far you can dolly in and out ( PerspectiveCamera only )
this.minDistance=0,this.maxDistance=1/0,
// How far you can zoom in and out ( OrthographicCamera only )
this.minZoom=0,this.maxZoom=1/0,
// How far you can orbit vertically, upper and lower limits.
// Range is 0 to Math.PI radians.
this.minPolarAngle=0,// radians
this.maxPolarAngle=Math.PI,// radians
// How far you can orbit horizontally, upper and lower limits.
// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
this.minAzimuthAngle=-1/0,// radians
this.maxAzimuthAngle=1/0,// radians
// Set to true to enable damping (inertia)
// If damping is enabled, you must call controls.update() in your animation loop
this.enableDamping=!1,this.dampingFactor=.25,
// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
// Set to false to disable zooming
this.enableZoom=!0,this.zoomSpeed=1,
// Set to false to disable rotating
this.enableRotate=!0,this.rotateSpeed=1,
// Set to false to disable panning
this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,// if true, pan in screen-space
this.keyPanSpeed=7,// pixels moved per arrow key push
// Set to true to automatically rotate around the target
// If auto-rotate is enabled, you must call controls.update() in your animation loop
this.autoRotate=!1,this.autoRotateSpeed=2,// 30 seconds per round when fps is 60
// Set to false to disable use of the keys
this.enableKeys=!0,
// The four arrow keys
this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},
// Mouse buttons
this.mouseButtons={ORBIT:i.MOUSE.LEFT,ZOOM:i.MOUSE.MIDDLE,PAN:i.MOUSE.RIGHT},
// for reset
this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,
//
// public methods
//
this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),s=o.NONE},
// this method is exposed, but perhaps it would be better if we can make it private...
this.update=function(){var t=new i.Vector3,q=(new i.Quaternion).setFromUnitVectors(e.up,new i.Vector3(0,1,0)),a=q.clone().inverse(),p=new i.Vector3,f=new i.Quaternion;
// so camera.up is the orbit axis
return function(){var e=n.object.position;
// update condition is:
// min(camera displacement, camera rotation in radians)^2 > EPS
// using small-angle approximation cos(x/2) = 1 - x^2 / 8
return t.copy(e).sub(n.target),
// rotate offset to "y-axis-is-up" space
t.applyQuaternion(q),
// angle from z-axis around y-axis
c.setFromVector3(t),n.autoRotate&&s===o.NONE&&M(2*Math.PI/60/60*n.autoRotateSpeed),c.theta+=h.theta,c.phi+=h.phi,
// restrict theta to be between desired limits
c.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,c.theta)),
// restrict phi to be between desired limits
c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=u,
// restrict radius to be between desired limits
c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),
// move target to panned location
n.target.add(d),t.setFromSpherical(c),
// rotate offset back to "camera-up-vector-is-up" space
t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),u=1,!!(m||p.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l)&&(n.dispatchEvent(r),p.copy(n.object.position),f.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",z,!1),n.domElement.removeEventListener("mousedown",P,!1),n.domElement.removeEventListener("wheel",N,!1),n.domElement.removeEventListener("touchstart",U,!1),n.domElement.removeEventListener("touchend",F,!1),n.domElement.removeEventListener("touchmove",B,!1),document.removeEventListener("mousemove",O,!1),document.removeEventListener("mouseup",I,!1),window.removeEventListener("keydown",D,!1)};
//
// internals
//
var n=this,r={type:"change"},q={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},s=o.NONE,l=1e-6,c=new i.Spherical,h=new i.Spherical,u=1,d=new i.Vector3,m=!1,p=new i.Vector2,f=new i.Vector2,g=new i.Vector2,v=new i.Vector2,x=new i.Vector2,y=new i.Vector2,_=new i.Vector2,b=new i.Vector2,w=new i.Vector2;function E(){return Math.pow(.95,n.zoomSpeed)}function M(e){h.theta-=e}function S(e){h.phi-=e}var T=function(){var e=new i.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),// get X column of objectMatrix
e.multiplyScalar(-t),d.add(e)}}(),A=function(){var e=new i.Vector3;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),R=function(){var e=new i.Vector3;return function(t,i){var r=n.domElement===document?n.domElement.body:n.domElement;if(n.object.isPerspectiveCamera){
// perspective
var q=n.object.position;e.copy(q).sub(n.target);var a=e.length();
// half of the fov is center to top of screen
a*=Math.tan(n.object.fov/2*Math.PI/180),
// we use only clientHeight here so aspect ratio does not distort speed
T(2*t*a/r.clientHeight,n.object.matrix),A(2*i*a/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(
// orthographic
T(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),A(i*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(
// camera neither orthographic nor perspective
console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}
//
// event callbacks - update the object state
//
//console.log( 'handleTouchEnd' );
//
// event handlers - FSM: listen for events and reset state
//
function P(e){if(!1!==n.enabled){switch(e.preventDefault(),e.button){case n.mouseButtons.ORBIT:if(!1===n.enableRotate)return;!function(e){
//console.log( 'handleMouseDownRotate' );
p.set(e.clientX,e.clientY)}(e),s=o.ROTATE;break;case n.mouseButtons.ZOOM:if(!1===n.enableZoom)return;!function(e){
//console.log( 'handleMouseDownDolly' );
_.set(e.clientX,e.clientY)}(e),s=o.DOLLY;break;case n.mouseButtons.PAN:if(!1===n.enablePan)return;!function(e){
//console.log( 'handleMouseDownPan' );
v.set(e.clientX,e.clientY)}(e),s=o.PAN}s!==o.NONE&&(document.addEventListener("mousemove",O,!1),document.addEventListener("mouseup",I,!1),n.dispatchEvent(q))}}function O(e){if(!1!==n.enabled)switch(e.preventDefault(),s){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){
//console.log( 'handleMouseMoveRotate' );
f.set(e.clientX,e.clientY),g.subVectors(f,p).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;
// rotating across whole screen goes 360 degrees around
M(2*Math.PI*g.x/t.clientWidth),
// rotating up and down along whole screen attempts to go 360, but limited to 180
S(2*Math.PI*g.y/t.clientHeight),p.copy(f),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;!function(e){
//console.log( 'handleMouseMoveDolly' );
b.set(e.clientX,e.clientY),w.subVectors(b,_),w.y>0?L(E()):w.y<0&&C(E()),_.copy(b),n.update()}(e);break;case o.PAN:if(!1===n.enablePan)return;!function(e){
//console.log( 'handleMouseMovePan' );
x.set(e.clientX,e.clientY),y.subVectors(x,v).multiplyScalar(n.panSpeed),R(y.x,y.y),v.copy(x),n.update()}(e)}}function I(e){!1!==n.enabled&&(document.removeEventListener("mousemove",O,!1),document.removeEventListener("mouseup",I,!1),n.dispatchEvent(a),s=o.NONE)}function N(e){!1===n.enabled||!1===n.enableZoom||s!==o.NONE&&s!==o.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(q),function(e){
// console.log( 'handleMouseWheel' );
e.deltaY<0?C(E()):e.deltaY>0&&L(E()),n.update()}(e),n.dispatchEvent(a))}function D(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&function(e){
//console.log( 'handleKeyDown' );
switch(e.keyCode){case n.keys.UP:R(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:R(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:R(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:R(-n.keyPanSpeed,0),n.update()}}(e)}function U(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:
// one-fingered touch: rotate
if(!1===n.enableRotate)return;!function(e){
//console.log( 'handleTouchStartRotate' );
p.set(e.touches[0].pageX,e.touches[0].pageY)}(e),s=o.TOUCH_ROTATE;break;case 2:
// two-fingered touch: dolly-pan
if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){
//console.log( 'handleTouchStartDollyPan' );
if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+i*i);_.set(0,r)}if(n.enablePan){var q=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(q,a)}}(e),s=o.TOUCH_DOLLY_PAN;break;default:s=o.NONE}s!==o.NONE&&n.dispatchEvent(q)}}function B(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:
// one-fingered touch: rotate
if(!1===n.enableRotate)return;if(s!==o.TOUCH_ROTATE)return;// is this needed?
!function(e){
//console.log( 'handleTouchMoveRotate' );
f.set(e.touches[0].pageX,e.touches[0].pageY),g.subVectors(f,p).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;
// rotating across whole screen goes 360 degrees around
M(2*Math.PI*g.x/t.clientWidth),
// rotating up and down along whole screen attempts to go 360, but limited to 180
S(2*Math.PI*g.y/t.clientHeight),p.copy(f),n.update()}(e);break;case 2:
// two-fingered touch: dolly-pan
if(!1===n.enableZoom&&!1===n.enablePan)return;if(s!==o.TOUCH_DOLLY_PAN)return;// is this needed?
!function(e){
//console.log( 'handleTouchMoveDollyPan' );
if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+i*i);b.set(0,r),w.set(0,Math.pow(b.y/_.y,n.zoomSpeed)),L(w.y),_.copy(b)}if(n.enablePan){var q=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);x.set(q,a),y.subVectors(x,v).multiplyScalar(n.panSpeed),R(y.x,y.y),v.copy(x)}n.update()}(e);break;default:s=o.NONE}}function F(e){!1!==n.enabled&&(n.dispatchEvent(a),s=o.NONE)}function z(e){!1!==n.enabled&&e.preventDefault()}
//
n.domElement.addEventListener("contextmenu",z,!1),n.domElement.addEventListener("mousedown",P,!1),n.domElement.addEventListener("wheel",N,!1),n.domElement.addEventListener("touchstart",U,!1),n.domElement.addEventListener("touchend",F,!1),n.domElement.addEventListener("touchmove",B,!1),window.addEventListener("keydown",D,!1),
// force an update at start
this.update()},i.OrbitControls.prototype=Object.create(i.EventDispatcher.prototype),i.OrbitControls.prototype.constructor=i.OrbitControls,Object.defineProperties(i.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},
// backward compatibility
noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})},
/***/"./src/vendor/threejs/utils/dat.gui.min.js":
/*!*************************************************!*\
  !*** ./src/vendor/threejs/utils/dat.gui.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/* WEBPACK VAR INJECTION */
/* WEBPACK VAR INJECTION */(function(e){var n,i,r,q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,o){"object"==q(t)&&"object"==q(e)?e.exports=o():(i=[],void 0===(r="function"==typeof(n=o)?n.apply(t,i):n)||(e.exports=r))}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var i=function(e){return e&&e.__esModule?e:{default:e}}(n(1));e.exports=i.default},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(2)),q=i(n(6)),a=i(n(3)),o=i(n(7)),s=i(n(8)),l=i(n(10)),c=i(n(11)),h=i(n(12)),u=i(n(13)),d=i(n(14)),m=i(n(15)),p=i(n(16)),f=i(n(9)),g=i(n(17));t.default={color:{Color:r.default,math:q.default,interpret:a.default},controllers:{Controller:o.default,BooleanController:s.default,OptionController:l.default,StringController:c.default,NumberController:h.default,NumberControllerBox:u.default,NumberControllerSlider:d.default,FunctionController:m.default,ColorController:p.default},dom:{dom:f.default},gui:{GUI:g.default},GUI:g.default}},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(c.recalculateRGB(this,t,n),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(c.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=e}})}function q(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(c.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(c.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}t.__esModule=!0;var a=i(n(3)),o=i(n(6)),s=i(n(4)),l=i(n(5)),c=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.__state=a.default.apply(this,arguments),!1===this.__state)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return e.prototype.toString=function(){return(0,s.default)(this)},e.prototype.toHexString=function(){return(0,s.default)(this,!0)},e.prototype.toOriginal=function(){return this.__state.conversion.write(this)},e}();c.recalculateRGB=function(e,t,n){if("HEX"===e.__state.space)e.__state[t]=o.default.component_from_hex(e.__state.hex,n);else{if("HSV"!==e.__state.space)throw new Error("Corrupted color state");l.default.extend(e.__state,o.default.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},c.recalculateHSV=function(e){var t=o.default.rgb_to_hsv(e.r,e.g,e.b);l.default.extend(e.__state,{s:t.s,v:t.v}),l.default.isNaN(t.h)?l.default.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},c.COMPONENTS=["r","g","b","h","s","v","hex","a"],r(c.prototype,"r",2),r(c.prototype,"g",1),r(c.prototype,"b",0),q(c.prototype,"h"),q(c.prototype,"s"),q(c.prototype,"v"),Object.defineProperty(c.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(c.prototype,"hex",{get:function(){return"HEX"!==!this.__state.space&&(this.__state.hex=o.default.rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}}),t.default=c},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(4)),q=i(n(5)),a=[{litmus:q.default.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:r.default},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:r.default},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:r.default},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:r.default}}},{litmus:q.default.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:q.default.isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:q.default.isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(q.default.isNumber(e.r)&&q.default.isNumber(e.g)&&q.default.isNumber(e.b)&&q.default.isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(q.default.isNumber(e.r)&&q.default.isNumber(e.g)&&q.default.isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(q.default.isNumber(e.h)&&q.default.isNumber(e.s)&&q.default.isNumber(e.v)&&q.default.isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(q.default.isNumber(e.h)&&q.default.isNumber(e.s)&&q.default.isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],o=void 0,s=void 0;t.default=function(){s=!1;var e=arguments.length>1?q.default.toArray(arguments):arguments[0];return q.default.each(a,function(t){if(t.litmus(e))return q.default.each(t.conversions,function(t,n){if(o=t.read(e),!1===s&&!1!==o)return s=o,o.conversionName=n,o.conversion=t,q.default.BREAK}),q.default.BREAK}),s}},function(e,t){t.__esModule=!0,t.default=function(e,t){var n=e.__state.conversionName.toString(),i=Math.round(e.r),r=Math.round(e.g),q=Math.round(e.b),a=e.a,o=Math.round(e.h),s=e.s.toFixed(1),l=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===n||"SIX_CHAR_HEX"===n){for(var c=e.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}return"CSS_RGB"===n?"rgb("+i+","+r+","+q+")":"CSS_RGBA"===n?"rgba("+i+","+r+","+q+","+a+")":"HEX"===n?"0x"+e.hex.toString(16):"RGB_ARRAY"===n?"["+i+","+r+","+q+"]":"RGBA_ARRAY"===n?"["+i+","+r+","+q+","+a+"]":"RGB_OBJ"===n?"{r:"+i+",g:"+r+",b:"+q+"}":"RGBA_OBJ"===n?"{r:"+i+",g:"+r+",b:"+q+",a:"+a+"}":"HSV_OBJ"===n?"{h:"+o+",s:"+s+",v:"+l+"}":"HSVA_OBJ"===n?"{h:"+o+",s:"+s+",v:"+l+",a:"+a+"}":"unknown format"}},function(e,t){t.__esModule=!0;var n=Array.prototype.forEach,i=Array.prototype.slice,r={BREAK:{},extend:function(e){return this.each(i.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function(e){return this.each(i.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function(){var e=i.call(arguments);return function(){for(var t=i.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,i){if(e)if(n&&e.forEach&&e.forEach===n)e.forEach(t,i);else if(e.length===e.length+0){var r,q=void 0;for(q=0,r=e.length;q<r;q++)if(q in e&&t.call(i,e[q],q)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return},defer:function(e){setTimeout(e,0)},debounce:function(e,t){var n=void 0;return function(){var i=arguments,r=!n;clearTimeout(n),n=setTimeout(function(){n=null},t),r&&e.apply(this,i)}},toArray:function(e){return e.toArray?e.toArray():i.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return!1===e||!0===e},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}};t.default=r},function(e,t){t.__esModule=!0;var n=void 0,i={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),q=n*(1-t),a=n*(1-r*t),o=n*(1-(1-r)*t),s=[[n,o,q],[a,n,q],[q,n,o],[q,a,n],[o,q,n],[n,q,a]][i];return{r:255*s[0],g:255*s[1],b:255*s[2]}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),q=r-i,a=void 0;return 0===r?{h:NaN,s:0,v:0}:(a=e===r?(t-n)/q:t===r?2+(n-e)/q:4+(e-t)/q,(a/=6)<0&&(a+=1),{h:360*a,s:q/r,v:r/255})},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),this.hex_with_component(i,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,i){return i<<(n=8*t)|e&~(255<<n)}};t.default=i},function(e,t){t.__esModule=!0;var n=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return e.prototype.onChange=function(e){return this.__onChange=e,this},e.prototype.onFinishChange=function(e){return this.__onFinishChange=e,this},e.prototype.setValue=function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this},e.prototype.getValue=function(){return this.object[this.property]},e.prototype.updateDisplay=function(){return this},e.prototype.isModified=function(){return this.initialValue!==this.getValue()},e}();t.default=n},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(7)),a=i(n(9)),o=function(e){function t(n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i)),o=r;return r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox"),a.default.bind(r.__checkbox,"change",function(){o.setValue(!o.__prev)},!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n},t.prototype.updateDisplay=function(){return!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1,e.prototype.updateDisplay.call(this)},t}(r.default);t.default=o},function(e,t,n){function i(e){if("0"===e||r.default.isUndefined(e))return 0;var t=e.match(a);return r.default.isNull(t)?0:parseFloat(t[1])}t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),q={};r.default.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(e,t){r.default.each(e,function(e){q[e]=t})});var a=/(\d+(\.\d+)?)px/,o={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,q=t;r.default.isUndefined(q)&&(q=!0),r.default.isUndefined(i)&&(i=!0),e.style.position="absolute",q&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var a=n||{},o=q[t];if(!o)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(o);switch(o){case"MouseEvents":var l=a.x||a.clientX||0,c=a.y||a.clientY||0;s.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var h=s.initKeyboardEvent||s.initKeyEvent;r.default.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break;default:s.initEvent(t,a.bubbles||!1,a.cancelable||!0)}r.default.defaults(s,i),e.dispatchEvent(s)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),o},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),o},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return o},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);-1!==i&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return o},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return i(t["border-left-width"])+i(t["border-right-width"])+i(t["padding-left"])+i(t["padding-right"])+i(t.width)},getHeight:function(e){var t=getComputedStyle(e);return i(t["border-top-width"])+i(t["border-bottom-width"])+i(t["padding-top"])+i(t["padding-bottom"])+i(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do{n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent}while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}};t.default=o},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(7)),a=i(n(9)),o=i(n(5)),s=function(e){function t(n,i,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i)),l=r,c=s;return s.__select=document.createElement("select"),o.default.isArray(l)&&function(){var e={};o.default.each(l,function(t){e[t]=t}),l=e}(),o.default.each(l,function(e,t){var n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",e),c.__select.appendChild(n)}),s.updateDisplay(),a.default.bind(s.__select,"change",function(){var e=this.options[this.selectedIndex].value;c.setValue(e)}),s.domElement.appendChild(s.__select),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n},t.prototype.updateDisplay=function(){return a.default.isActive(this.__select)?this:(this.__select.value=this.getValue(),e.prototype.updateDisplay.call(this))},t}(r.default);t.default=s},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(7)),a=i(n(9)),o=function(e){function t(n,i){function r(){s.setValue(s.__input.value)}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i)),s=o;return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),a.default.bind(o.__input,"keyup",r),a.default.bind(o.__input,"change",r),a.default.bind(o.__input,"blur",function(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}),a.default.bind(o.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.updateDisplay=function(){return a.default.isActive(this.__input)||(this.__input.value=this.getValue()),e.prototype.updateDisplay.call(this)},t}(r.default);t.default=o},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}t.__esModule=!0;var a=i(n(7)),o=i(n(5)),s=function(e){function t(n,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i)),l=a||{};return s.__min=l.min,s.__max=l.max,s.__step=l.step,o.default.isUndefined(s.__step)?0===s.initialValue?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=r(s.__impliedStep),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.setValue=function(t){var n=t;return void 0!==this.__min&&n<this.__min?n=this.__min:void 0!==this.__max&&n>this.__max&&(n=this.__max),void 0!==this.__step&&n%this.__step!=0&&(n=Math.round(n/this.__step)*this.__step),e.prototype.setValue.call(this,n)},t.prototype.min=function(e){return this.__min=e,this},t.prototype.max=function(e){return this.__max=e,this},t.prototype.step=function(e){return this.__step=e,this.__impliedStep=e,this.__precision=r(e),this},t}(a.default);t.default=s},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(12)),a=i(n(9)),o=i(n(5)),s=function(e){function t(n,i,r){function s(){u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}function l(e){var t=d-e.clientY;u.setValue(u.getValue()+t*u.__impliedStep),d=e.clientY}function c(){a.default.unbind(window,"mousemove",l),a.default.unbind(window,"mouseup",c),s()}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i,r));h.__truncationSuspended=!1;var u=h,d=void 0;return h.__input=document.createElement("input"),h.__input.setAttribute("type","text"),a.default.bind(h.__input,"change",function(){var e=parseFloat(u.__input.value);o.default.isNaN(e)||u.setValue(e)}),a.default.bind(h.__input,"blur",function(){s()}),a.default.bind(h.__input,"mousedown",function(e){a.default.bind(window,"mousemove",l),a.default.bind(window,"mouseup",c),d=e.clientY}),a.default.bind(h.__input,"keydown",function(e){13===e.keyCode&&(u.__truncationSuspended=!0,this.blur(),u.__truncationSuspended=!1,s())}),h.updateDisplay(),h.domElement.appendChild(h.__input),h}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.updateDisplay=function(){return this.__input.value=this.__truncationSuspended?this.getValue():function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}(this.getValue(),this.__precision),e.prototype.updateDisplay.call(this)},t}(r.default);t.default=s},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(12)),a=i(n(9)),o=function(e){function t(n,i,r,o,s){function l(e){e.preventDefault();var t=u.__background.getBoundingClientRect();return u.setValue(function(e,t,n,i,r){return i+(e-t)/(n-t)*(r-i)}(e.clientX,t.left,t.right,u.__min,u.__max)),!1}function c(){a.default.unbind(window,"mousemove",l),a.default.unbind(window,"mouseup",c),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i,{min:r,max:o,step:s})),u=h;return h.__background=document.createElement("div"),h.__foreground=document.createElement("div"),a.default.bind(h.__background,"mousedown",function(e){document.activeElement.blur(),a.default.bind(window,"mousemove",l),a.default.bind(window,"mouseup",c),l(e)}),a.default.addClass(h.__background,"slider"),a.default.addClass(h.__foreground,"slider-fg"),h.updateDisplay(),h.__background.appendChild(h.__foreground),h.domElement.appendChild(h.__background),h}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.updateDisplay=function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*t+"%",e.prototype.updateDisplay.call(this)},t}(r.default);t.default=o},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(7)),a=i(n(9)),o=function(e){function t(n,i,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i)),s=o;return o.__button=document.createElement("div"),o.__button.innerHTML=void 0===r?"Fire":r,a.default.bind(o.__button,"click",function(e){return e.preventDefault(),s.fire(),!1}),a.default.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.fire=function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},t}(r.default);t.default=o},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i){e.style.background="",c.default.each(u,function(r){e.style.cssText+="background: "+r+"linear-gradient("+t+", "+n+" 0%, "+i+" 100%); "})}t.__esModule=!0;var a=i(n(7)),o=i(n(9)),s=i(n(2)),l=i(n(3)),c=i(n(5)),h=function(e){function t(n,i){function a(e){p(e),o.default.bind(window,"mousemove",p),o.default.bind(window,"mouseup",h)}function h(){o.default.unbind(window,"mousemove",p),o.default.unbind(window,"mouseup",h),m()}function u(){var e=(0,l.default)(this.value);!1!==e?(v.__color.__state=e,v.setValue(v.__color.toOriginal())):this.value=v.__color.toString()}function d(){o.default.unbind(window,"mousemove",f),o.default.unbind(window,"mouseup",d),m()}function m(){v.__onFinishChange&&v.__onFinishChange.call(v,v.__color.toOriginal())}function p(e){e.preventDefault();var t=v.__saturation_field.getBoundingClientRect(),n=(e.clientX-t.left)/(t.right-t.left),i=1-(e.clientY-t.top)/(t.bottom-t.top);return i>1?i=1:i<0&&(i=0),n>1?n=1:n<0&&(n=0),v.__color.v=i,v.__color.s=n,v.setValue(v.__color.toOriginal()),!1}function f(e){e.preventDefault();var t=v.__hue_field.getBoundingClientRect(),n=1-(e.clientY-t.top)/(t.bottom-t.top);return n>1?n=1:n<0&&(n=0),v.__color.h=360*n,v.setValue(v.__color.toOriginal()),!1}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var g=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":q(t))&&"function"!=typeof t?e:t}(this,e.call(this,n,i));g.__color=new s.default(g.getValue()),g.__temp=new s.default(0);var v=g;g.domElement=document.createElement("div"),o.default.makeSelectable(g.domElement,!1),g.__selector=document.createElement("div"),g.__selector.className="selector",g.__saturation_field=document.createElement("div"),g.__saturation_field.className="saturation-field",g.__field_knob=document.createElement("div"),g.__field_knob.className="field-knob",g.__field_knob_border="2px solid ",g.__hue_knob=document.createElement("div"),g.__hue_knob.className="hue-knob",g.__hue_field=document.createElement("div"),g.__hue_field.className="hue-field",g.__input=document.createElement("input"),g.__input.type="text",g.__input_textShadow="0 1px 1px ",o.default.bind(g.__input,"keydown",function(e){13===e.keyCode&&u.call(this)}),o.default.bind(g.__input,"blur",u),o.default.bind(g.__selector,"mousedown",function(){o.default.addClass(this,"drag").bind(window,"mouseup",function(){o.default.removeClass(v.__selector,"drag")})});var x=document.createElement("div");return c.default.extend(g.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),c.default.extend(g.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:g.__field_knob_border+(g.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),c.default.extend(g.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),c.default.extend(g.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),c.default.extend(x.style,{width:"100%",height:"100%",background:"none"}),r(x,"top","rgba(0,0,0,0)","#000"),c.default.extend(g.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),function(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}(g.__hue_field),c.default.extend(g.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:g.__input_textShadow+"rgba(0,0,0,0.7)"}),o.default.bind(g.__saturation_field,"mousedown",a),o.default.bind(g.__field_knob,"mousedown",a),o.default.bind(g.__hue_field,"mousedown",function(e){f(e),o.default.bind(window,"mousemove",f),o.default.bind(window,"mouseup",d)}),g.__saturation_field.appendChild(x),g.__selector.appendChild(g.__field_knob),g.__selector.appendChild(g.__saturation_field),g.__selector.appendChild(g.__hue_field),g.__hue_field.appendChild(g.__hue_knob),g.domElement.appendChild(g.__input),g.domElement.appendChild(g.__selector),g.updateDisplay(),g}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":q(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.updateDisplay=function(){var e=(0,l.default)(this.getValue());if(!1!==e){var t=!1;c.default.each(s.default.COMPONENTS,function(n){if(!c.default.isUndefined(e[n])&&!c.default.isUndefined(this.__color.__state[n])&&e[n]!==this.__color.__state[n])return t=!0,{}},this),t&&c.default.extend(this.__color.__state,e)}c.default.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,i=255-n;c.default.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,r(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),c.default.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+i+","+i+","+i+",.7)"})},t}(a.default),u=["-moz-","-o-","-webkit-","-ms-",""];t.default=h},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){var i=document.createElement("li");return t&&i.appendChild(t),n?e.__ul.insertBefore(i,n):e.__ul.appendChild(i),e.onResize(),i}function a(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];n.innerHTML=t?n.value+"*":n.value}function o(e,t,n){if(n.__li=t,n.__gui=e,A.default.extend(n,{options:function(t){if(arguments.length>1){var i=n.__li.nextElementSibling;return n.remove(),l(e,n.object,n.property,{before:i,factoryArgs:[A.default.toArray(arguments)]})}if(A.default.isArray(t)||A.default.isObject(t)){var r=n.__li.nextElementSibling;return n.remove(),l(e,n.object,n.property,{before:r,factoryArgs:[t]})}},name:function(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof w.default)!function(){var e=new b.default(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});A.default.each(["updateDisplay","onChange","onFinishChange","step"],function(t){var i=n[t],r=e[t];n[t]=e[t]=function(){var t=Array.prototype.slice.call(arguments);return r.apply(e,t),i.apply(n,t)}}),T.default.addClass(t,"has-slider"),n.domElement.insertBefore(e.domElement,n.domElement.firstElementChild)}();else if(n instanceof b.default){var i=function(t){if(A.default.isNumber(n.__min)&&A.default.isNumber(n.__max)){var i=n.__li.firstElementChild.firstElementChild.innerHTML,r=n.__gui.__listening.indexOf(n)>-1;n.remove();var q=l(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return q.name(i),r&&q.listen(),q}return t};n.min=A.default.compose(i,n.min),n.max=A.default.compose(i,n.max)}else n instanceof y.default?(T.default.bind(t,"click",function(){T.default.fakeEvent(n.__checkbox,"click")}),T.default.bind(n.__checkbox,"click",function(e){e.stopPropagation()})):n instanceof _.default?(T.default.bind(t,"click",function(){T.default.fakeEvent(n.__button,"click")}),T.default.bind(t,"mouseover",function(){T.default.addClass(n.__button,"hover")}),T.default.bind(t,"mouseout",function(){T.default.removeClass(n.__button,"hover")})):n instanceof E.default&&(T.default.addClass(t,"color"),n.updateDisplay=A.default.compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=A.default.compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&a(e.getRoot(),!0),t},n.setValue)}function s(e,t){var n=e.getRoot(),i=n.__rememberedObjects.indexOf(t.object);if(-1!==i){var r=n.__rememberedObjectIndecesToControllers[i];if(void 0===r&&(r={},n.__rememberedObjectIndecesToControllers[i]=r),r[t.property]=t,n.load&&n.load.remembered){var q=n.load.remembered,a=void 0;if(q[e.preset])a=q[e.preset];else{if(!q[L])return;a=q[L]}if(a[i]&&void 0!==a[i][t.property]){var o=a[i][t.property];t.initialValue=o,t.setValue(o)}}}}function l(e,t,n,i){if(void 0===t[n])throw new Error('Object "'+t+'" has no property "'+n+'"');var q=void 0;if(i.color)q=new E.default(t,n);else{var a=[t,n].concat(i.factoryArgs);q=v.default.apply(e,a)}i.before instanceof x.default&&(i.before=i.before.__li),s(e,q),T.default.addClass(q.domElement,"c");var l=document.createElement("span");T.default.addClass(l,"property-name"),l.innerHTML=q.property;var c=document.createElement("div");c.appendChild(l),c.appendChild(q.domElement);var h=r(e,c,i.before);return T.default.addClass(h,U.CLASS_CONTROLLER_ROW),q instanceof E.default?T.default.addClass(h,"color"):T.default.addClass(h,p(q.getValue())),o(e,h,q),e.__controllers.push(q),q}function c(e,t){return document.location.href+"."+t}function h(e,t,n){var i=document.createElement("option");i.innerHTML=t,i.value=t,e.__preset_select.appendChild(i),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function u(e,t){t.style.display=e.useLocalStorage?"block":"none"}function d(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function m(e,t){var n={};return A.default.each(e.__rememberedObjects,function(i,r){var q={},a=e.__rememberedObjectIndecesToControllers[r];A.default.each(a,function(e,n){q[n]=t?e.initialValue:e.getValue()}),n[r]=q}),n}var p="function"==typeof Symbol&&"symbol"==q(Symbol.iterator)?function(e){return void 0===e?"undefined":q(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":void 0===e?"undefined":q(e)},f=i(n(18)),g=i(n(19)),v=i(n(20)),x=i(n(7)),y=i(n(8)),_=i(n(15)),b=i(n(13)),w=i(n(14)),E=i(n(16)),M=i(n(21)),S=i(n(22)),T=i(n(9)),A=i(n(5)),R=i(n(23));f.default.inject(R.default);var L="Default",C=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}(),P=void 0,O=!0,I=void 0,N=!1,D=[],U=function e(t){var n=this,i=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),T.default.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=A.default.defaults(i,{autoPlace:!0,width:e.DEFAULT_WIDTH}),i=A.default.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),A.default.isUndefined(i.load)?i.load={preset:L}:i.preset&&(i.load.preset=i.preset),A.default.isUndefined(i.parent)&&i.hideable&&D.push(this),i.resizable=A.default.isUndefined(i.parent)&&i.resizable,i.autoPlace&&A.default.isUndefined(i.scrollable)&&(i.scrollable=!0);var q=C&&"true"===localStorage.getItem(c(0,"isLocal")),a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(e){n.parent?n.getRoot().preset=e:i.load.preset=e,function(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}(this),n.revert()}},width:{get:function(){return i.width},set:function(e){i.width=e,d(n,e)}},name:{get:function(){return i.name},set:function(e){i.name=e,titleRowName&&(titleRowName.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(t){i.closed=t,i.closed?T.default.addClass(n.__ul,e.CLASS_CLOSED):T.default.removeClass(n.__ul,e.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=t?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return q},set:function(e){C&&(q=e,e?T.default.bind(window,"unload",a):T.default.unbind(window,"unload",a),localStorage.setItem(c(0,"isLocal"),e))}}}),A.default.isUndefined(i.parent)){if(i.closed=!1,T.default.addClass(this.domElement,e.CLASS_MAIN),T.default.makeSelectable(this.domElement,!1),C&&q){n.useLocalStorage=!0;var o=localStorage.getItem(c(0,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,T.default.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),this.domElement.appendChild(this.__closeButton),T.default.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===i.closed&&(i.closed=!0);var s=document.createTextNode(i.name);T.default.addClass(s,"controller-name");var l=r(n,s);T.default.addClass(this.__ul,e.CLASS_CLOSED),T.default.addClass(l,"title"),T.default.bind(l,"click",function(e){return e.preventDefault(),n.closed=!n.closed,!1}),i.closed||(this.closed=!1)}i.autoPlace&&(A.default.isUndefined(i.parent)&&(O&&(I=document.createElement("div"),T.default.addClass(I,"dg"),T.default.addClass(I,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(I),O=!1),I.appendChild(this.domElement),T.default.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||d(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},T.default.bind(window,"resize",this.__resizeHandler),T.default.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),T.default.bind(this.__ul,"transitionend",this.__resizeHandler),T.default.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&function(e){function t(t){return t.preventDefault(),e.width+=r-t.clientX,e.onResize(),r=t.clientX,!1}function n(){T.default.removeClass(e.__closeButton,U.CLASS_DRAG),T.default.unbind(window,"mousemove",t),T.default.unbind(window,"mouseup",n)}function i(i){return i.preventDefault(),r=i.clientX,T.default.addClass(e.__closeButton,U.CLASS_DRAG),T.default.bind(window,"mousemove",t),T.default.bind(window,"mouseup",n),!1}var r=void 0;e.__resize_handle=document.createElement("div"),A.default.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),T.default.bind(e.__resize_handle,"mousedown",i),T.default.bind(e.__closeButton,"mousedown",i),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}(this),a=function(){C&&"true"===localStorage.getItem(c(0,"isLocal"))&&localStorage.setItem(c(0,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=a,i.parent||function(){var e=n.getRoot();e.width+=1,A.default.defer(function(){e.width-=1})}()};U.toggleHide=function(){N=!N,A.default.each(D,function(e){e.domElement.style.display=N?"none":""})},U.CLASS_AUTO_PLACE="a",U.CLASS_AUTO_PLACE_CONTAINER="ac",U.CLASS_MAIN="main",U.CLASS_CONTROLLER_ROW="cr",U.CLASS_TOO_TALL="taller-than-window",U.CLASS_CLOSED="closed",U.CLASS_CLOSE_BUTTON="close-button",U.CLASS_DRAG="drag",U.DEFAULT_WIDTH=245,U.TEXT_CLOSED="Close Controls",U.TEXT_OPEN="Open Controls",U._keydownHandler=function(e){"text"===document.activeElement.type||72!==e.which&&72!==e.keyCode||U.toggleHide()},T.default.bind(window,"keydown",U._keydownHandler,!1),A.default.extend(U.prototype,{add:function(e,t){return l(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return l(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;A.default.defer(function(){t.onResize()})},destroy:function(){this.autoPlace&&I.removeChild(this.domElement),T.default.unbind(window,"keydown",U._keydownHandler,!1),T.default.unbind(window,"resize",this.__resizeHandler),this.saveToLocalStorageIfPossible&&T.default.unbind(window,"unload",this.saveToLocalStorageIfPossible)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new U(t);this.__folders[e]=n;var i=r(this,n.domElement);return T.default.addClass(i,"folder"),n},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=T.default.getOffset(e.__ul).top,n=0;A.default.each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=T.default.getHeight(t))}),window.innerHeight-t-20<n?(T.default.addClass(e.domElement,U.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-20+"px"):(T.default.removeClass(e.domElement,U.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&A.default.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:A.default.debounce(function(){this.onResize()},200),remember:function(){if(A.default.isUndefined(P)&&((P=new S.default).domElement.innerHTML=g.default),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;A.default.each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&function(e){var t=e.__save_row=document.createElement("li");T.default.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),T.default.addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",T.default.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",T.default.addClass(i,"button"),T.default.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",T.default.addClass(r,"button"),T.default.addClass(r,"save-as");var q=document.createElement("span");q.innerHTML="Revert",T.default.addClass(q,"button"),T.default.addClass(q,"revert");var a=e.__preset_select=document.createElement("select");e.load&&e.load.remembered?A.default.each(e.load.remembered,function(t,n){h(e,n,n===e.preset)}):h(e,L,!1),T.default.bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(q),C&&function(){var t=document.getElementById("dg-local-explain"),n=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block","true"===localStorage.getItem(c(0,"isLocal"))&&n.setAttribute("checked","checked"),u(e,t),T.default.bind(n,"change",function(){e.useLocalStorage=!e.useLocalStorage,u(e,t)})}();var o=document.getElementById("dg-new-constructor");T.default.bind(o,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||P.hide()}),T.default.bind(n,"click",function(){o.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),P.show(),o.focus(),o.select()}),T.default.bind(i,"click",function(){e.save()}),T.default.bind(r,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),T.default.bind(q,"click",function(){e.revert()})}(e),-1===e.__rememberedObjects.indexOf(t)&&e.__rememberedObjects.push(t)}),this.autoPlace&&d(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=m(this)),e.folders={},A.default.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=m(this),a(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[L]=m(this,!0)),this.load.remembered[e]=m(this),this.preset=e,h(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){A.default.each(this.__controllers,function(t){this.getRoot().load.remembered?s(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),A.default.each(this.__folders,function(e){e.revert(e)}),e||a(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&function e(t){0!==t.length&&M.default.call(window,function(){e(t)}),A.default.each(t,function(e){e.updateDisplay()})}(this.__listening)},updateDisplay:function(){A.default.each(this.__controllers,function(e){e.updateDisplay()}),A.default.each(this.__folders,function(e){e.updateDisplay()})}}),e.exports=U},function(e,t){e.exports={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch(e){}}}},function(e,t){e.exports="<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>"},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(10)),q=i(n(13)),a=i(n(14)),o=i(n(11)),s=i(n(15)),l=i(n(8)),c=i(n(5));t.default=function(e,t){var n=e[t];return c.default.isArray(arguments[2])||c.default.isObject(arguments[2])?new r.default(e,t,arguments[2]):c.default.isNumber(n)?c.default.isNumber(arguments[2])&&c.default.isNumber(arguments[3])?c.default.isNumber(arguments[4])?new a.default(e,t,arguments[2],arguments[3],arguments[4]):new a.default(e,t,arguments[2],arguments[3]):c.default.isNumber(arguments[4])?new q.default(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new q.default(e,t,{min:arguments[2],max:arguments[3]}):c.default.isString(n)?new o.default(e,t):c.default.isFunction(n)?new s.default(e,t,""):c.default.isBoolean(n)?new l.default(e,t):null}},function(e,t){t.__esModule=!0,t.default=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=i(n(9)),q=i(n(5)),a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.backgroundElement=document.createElement("div"),q.default.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),r.default.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),q.default.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;r.default.bind(this.backgroundElement,"click",function(){t.hide()})}return e.prototype.show=function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),q.default.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})},e.prototype.hide=function(){var e=this,t=function t(){e.domElement.style.display="none",e.backgroundElement.style.display="none",r.default.unbind(e.domElement,"webkitTransitionEnd",t),r.default.unbind(e.domElement,"transitionend",t),r.default.unbind(e.domElement,"oTransitionEnd",t)};r.default.bind(this.domElement,"webkitTransitionEnd",t),r.default.bind(this.domElement,"transitionend",t),r.default.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},e.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-r.default.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-r.default.getHeight(this.domElement)/2+"px"},e}();t.default=a},function(e,t,n){(e.exports=n(24)()).push([e.id,".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var q=this[r][0];"number"==typeof q&&(i[q]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}])})}).call(this,n(/*! ./../../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))
/***/},
/***/"./src/vendor/threejs/utils/stats.min.js":
/*!***********************************************!*\
  !*** ./src/vendor/threejs/utils/stats.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";
/* WEBPACK VAR INJECTION */
/* WEBPACK VAR INJECTION */(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function e(){function t(e){return r.appendChild(e.dom),e}function n(e){for(var t=0;t<r.children.length;t++)r.children[t].style.display=t===e?"block":"none";i=e}var i=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(e){e.preventDefault(),n(++i%r.children.length)},!1);var q=(performance||Date).now(),a=q,o=0,s=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:r,addPanel:t,showPanel:n,begin:function(){q=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(l.update(e-q,200),e>a+1e3&&(s.update(1e3*o/(e-a),100),a=e,o=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){q=this.end()},domElement:r,setMode:n}};
// stats.js - http://github.com/mrdoob/stats.js
n.Panel=function(e,t,n){var i=1/0,r=0,q=Math.round,a=q(window.devicePixelRatio||1),o=80*a,s=48*a,l=3*a,c=2*a,h=3*a,u=15*a,d=74*a,m=30*a,p=document.createElement("canvas");p.width=o,p.height=s,p.style.cssText="width:80px;height:48px";var f=p.getContext("2d");return f.font="bold "+9*a+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=n,f.fillRect(0,0,o,s),f.fillStyle=t,f.fillText(e,l,c),f.fillRect(h,u,d,m),f.fillStyle=n,f.globalAlpha=.9,f.fillRect(h,u,d,m),{dom:p,update:function(s,g){i=Math.min(i,s),r=Math.max(r,s),f.fillStyle=n,f.globalAlpha=1,f.fillRect(0,0,o,u),f.fillStyle=t,f.fillText(q(s)+" "+e+" ("+q(i)+"-"+q(r)+")",l,c),f.drawImage(p,h+a,u,d-a,m,h,u,d-a,m),f.fillRect(h+d-a,u,a,m),f.fillStyle=n,f.globalAlpha=.9,f.fillRect(h+d-a,u,a,q((1-s/g)*m))}}},"object"===t(e)&&(e.exports=n)}).call(this,n(/*! ./../../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))
/***/},
/***/"./src/vendor/utils/layer.js":
/*!***********************************!*\
  !*** ./src/vendor/utils/layer.js ***!
  \***********************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(q){var a=document,o="getElementsByClassName",s=function(e){return a.querySelectorAll(e)},l={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},c={extend:function(e){var t=JSON.parse(JSON.stringify(l));for(var n in e)t[n]=e[n];return t},timer:{},end:{},touch:function(e,t){e.addEventListener("click",function(e){t.call(this,e)},!1)}},h=0,u=["layui-m-layer"],d=function(e){this.config=c.extend(e),this.view()};d.prototype.view=function(){var e=this,t=e.config,n=a.createElement("div");e.id=n.id=u[0]+h,n.setAttribute("class",u[0]+" "+u[0]+(t.type||0)),n.setAttribute("index",h);var i=function(){var e="object"==r(t.title);return t.title?'<h3 style="'+(e?t.title[1]:"")+'">'+(e?t.title[0]:t.title)+"</h3>":""}(),q=function(){"string"==typeof t.btn&&(t.btn=[t.btn]);var e,n=(t.btn||[]).length;return 0!==n&&t.btn?(e='<span yes type="1">'+t.btn[0]+"</span>",2===n&&(e='<span no type="0">'+t.btn[1]+"</span>"+e),'<div class="layui-m-layerbtn">'+e+"</div>"):""}();if(t.fixed||(t.top=t.hasOwnProperty("top")?t.top:100,t.style=t.style||"",t.style+=" top:"+(a.body.scrollTop+t.top)+"px"),2===t.type&&(t.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(t.content||"")+"</p>"),t.skin&&(t.anim="up"),"msg"===t.skin&&(t.shade=!1),n.innerHTML=(t.shade?"<div "+("string"==typeof t.shade?'style="'+t.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(t.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(t.skin?"layui-m-layer-"+t.skin+" ":"")+(t.className?t.className:"")+" "+(t.anim?"layui-m-anim-"+t.anim:"")+'" '+(t.style?'style="'+t.style+'"':"")+">"+i+'<div class="layui-m-layercont">'+t.content+"</div>"+q+"</div></div></div>",!t.type||2===t.type){var l=a[o](u[0]+t.type);l.length>=1&&layer.close(l[0].getAttribute("index"))}document.body.appendChild(n);var c=e.elem=s("#"+e.id)[0];t.success&&t.success(c),e.index=h++,e.action(t,c)},d.prototype.action=function(e,t){var n=this;e.time&&(c.timer[n.index]=setTimeout(function(){layer.close(n.index)},1e3*e.time));var i=function(){0==this.getAttribute("type")?(e.no&&e.no(),layer.close(n.index)):e.yes?e.yes(n.index):layer.close(n.index)};if(e.btn)for(var r=t[o]("layui-m-layerbtn")[0].children,q=r.length,a=0;q>a;a++)c.touch(r[a],i);if(e.shade&&e.shadeClose){var s=t[o]("layui-m-layershade")[0];c.touch(s,function(){layer.close(n.index,e.end)})}e.end&&(c.end[n.index]=e.end)},q.layer={v:"2.0",index:h,open:function(e){return new d(e||{}).index},close:function(e){var t=s("#"+u[0]+e)[0];t&&(t.innerHTML="",a.body.removeChild(t),clearTimeout(c.timer[e]),delete c.timer[e],"function"==typeof c.end[e]&&c.end[e](),delete c.end[e])},closeAll:function(){for(var e=a[o](u[0]),t=0,n=e.length;n>t;t++)layer.close(0|e[0].getAttribute("index"))}},void 0===(i=function(){return layer}.call(t,n,t,e))||(e.exports=i)}(window)},
/***/"./src/views/lm_scene/animate.js":
/*!***************************************!*\
  !*** ./src/views/lm_scene/animate.js ***!
  \***************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(/*! three */"./node_modules/three/build/three.module.js");var i=n(/*! @tweenjs/tween.js */"./node_modules/@tweenjs/tween.js/src/Tween.js");t.randomPosSpotLights=function(e){new i.Tween(e).to({angle:.7*Math.random()+.1,penumbra:Math.random()+1},3e3*Math.random()+2e3).easing(i.Easing.Quadratic.Out).start(),new i.Tween(e.position).to({x:120*Math.random()-60,// (-60,60)
y:20*Math.random()+30,// (30,50)
z:120*Math.random()-60},3e3*Math.random()+2e3).easing(i.Easing.Quadratic.Out).start()}},
/***/"./src/views/lm_scene/index.js":
/*!*************************************!*\
  !*** ./src/views/lm_scene/index.js ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! lm_scene/mesh */"./src/views/lm_scene/mesh.js"),r=n(/*! lm_scene/light */"./src/views/lm_scene/light.js"),q=n(/*! lm_scene/animate */"./src/views/lm_scene/animate.js"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(/*! com_gl/utils/toast */"./src/components/utils/toast.js"));var o=n(/*! three */"./node_modules/three/build/three.module.js"),s=n(/*! vendor_threejs/utils/stats.min */"./src/vendor/threejs/utils/stats.min.js"),l=n(/*! vendor_threejs/utils/dat.gui.min */"./src/vendor/threejs/utils/dat.gui.min.js"),c=n(/*! @tweenjs/tween.js */"./node_modules/@tweenjs/tween.js/src/Tween.js");n(/*! vendor_threejs/controls/OrbitControls */"./src/vendor/threejs/controls/OrbitControls.js");var h=void 0,u=void 0,d=void 0,m=void 0,p=void 0,f=void 0,g=void 0,v=void 0,x=void 0,y=void 0,_=void 0,b=void 0,w=void 0,E=void 0,M=void 0,S=void 0,T=0,A=1,R=void 0,L=void 0,C=void 0,P=void 0,O=void 0,I=void 0,N=void 0,D=void 0,U=void 0,B=void 0,F=void 0,z=void 0,H=void 0,k=new o.Clock,G=function e(){m.update();// 即时更新FPS
var t=k.getDelta();if(H.update(),R.stopSkyMove||(U.position.y<=-1?U.visible=!1:U.visible=!0,L.inclination-=R.sumMoveSpeed,L.updateSkyEffect(),U.position.copy(g.material.uniforms.sunPosition.value)),R.showSpotLight&&(c.update(),R.slDebug&&(I&&I.update(),N&&N.update(),D&&D.update())),C.variationHDR){var n=5*t;
// 控制不同范围的变化率
T=v.material.uniforms.exposure.value>0||v.material.uniforms.exposure.value<1?.25:1,
// 使曝光率从0至5不断循环增大或减小
(v.material.uniforms.exposure.value>5||v.material.uniforms.exposure.value<=0)&&(A*=-1),v.material.uniforms.exposure.value+=A*T*n,v.material.needsUpdate=!0}C.openCubeCamera&&(_.visible=!1,x.visible=!1,S.update(h,d),x.visible=!0,_.visible=!0),C.showSphere&&(b.lookAt(u.position),w.lookAt(u.position),E.lookAt(u.position),M.lookAt(u.position)),
// 使用帧动画函数
requestAnimationFrame(e),h.render(d,u)},j=function(){(m=new s).setMode(0),// 0: fps, 1: ms
m.domElement.style.position="absolute",m.domElement.style.left="0px",m.domElement.style.top="0px",document.body.appendChild(m.domElement)};// 渲染器
// 定义变量
/**
 * 窗口大小被重置
 * @return {[type]} [description]
 */
function V(){
// 相机宽高比
u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),document.body.style.width=window.innerWidth+"px",document.body.style.height=window.innerHeight+"px"}t.default=function(e,t){
// 开启加载提示
a.load("scene is loading");
// 初始化组件
j();
// 创建场景
d=new o.Scene,(
// 创建相机
u=new o.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,2e3)).position.x=-20,u.position.y=40,u.position.z=20,u.lookAt(d.position),(// 视线指向场景中心
// 创建渲染器
h=new o.WebGLRenderer).setPixelRatio(window.devicePixelRatio),
// 开启物理光照
h.physicallyCorrectLights=!0,
// 所有的颜色和纹理都会与伽马值相乘
h.gammaInput=!0,h.gammaOutput=!0,
// 擦除背景色
h.setClearColor(new o.Color(15658734),1),h.setSize(window.innerWidth,window.innerHeight),// 设置视口大小
h.shadowMap.enabled=!0,
// 自然一些的纹理，默认值是PCFShadowMap
h.shadowMap.type=o.PCFSoftShadowMap,
//controls.maxPolarAngle = Math.PI / 2;
(H=new o.OrbitControls(u,h.domElement)).enableZoom=!1,H.enablePan=!1,
// 配置控制器
function(){R={sumMoveSpeed:1e-4,worldAxes:!1,dlDebug:!1,stopSkyMove:!1,showSpotLight:!1,slDebug:!1,showSpheres:!1},L={turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8,luminance:1,inclination:.49,// elevation / inclination
azimuth:.25,// Facing front,
updateSkyEffect:function(){(0,r.changeSkyEffect)(g,1e3,L)}},C={showSphere:!1,variationHDR:!1,openCubeCamera:!1,switchEnvMapType:"reflection"},(p=new l.GUI).add(R,"dlDebug").onChange(function(e){O.visible=e}),p.add(R,"slDebug").onChange(function(e){I.visible=e,N.visible=e,D.visible=e}),p.add(R,"showSpotLight").onChange(function(e){h.physicallyCorrectLights=!e,B.visible=e,F.visible=e,z.visible=e}),p.add(R,"worldAxes").onChange(function(e){P.visible=e}),p.add(R,"stopSkyMove").listen(),p.add(R,"sumMoveSpeed",5e-5,3e-4).listen();
// let skyFolder = gui.addFolder("sky effect controls");
// skyFolder.add( skyEffectContr, "inclination", -1, 1, 0.0001 ).onChange( skyEffectContr.updateSkyEffect );
// skyFolder.add( skyEffectContr, "azimuth", 0, 1, 0.0001 ).onChange( skyEffectContr.updateSkyEffect );
var e=p.addFolder("Sphere Material Controls");e.add(C,"showSphere").onChange(function(e){v.visible=e,y.visible=e,x.visible=e,_.visible=e,b.visible=e,E.visible=e,w.visible=e,M.visible=e}),e.addFolder("HDR Material").add(C,"variationHDR").listen(),e.add(C,"openCubeCamera").listen(),e.add(C,"switchEnvMapType",["reflection","refraction"]).onChange(function(e){"reflection"==e&&(x.material.envMap.mapping=o.CubeReflectionMapping),"refraction"==e&&(x.material.envMap.mapping=o.CubeRefractionMapping),x.material.needsUpdate=!0})}(),(
// 展示辅助观察的世界坐标系
P=new o.AxesHelper(20)).visible=!1,d.add(P),
// 添加天空
g=(0,r.createSky)(1e3,L),d.add(g),(
// 添加地面
f=(0,i.createGround)()).receiveShadow=!0,// 接收阴影
// 旋转并设置位置
f.rotation.x=-.5*Math.PI,// x轴旋转-90
// 加入至场景
d.add(f);
// 添加环境光
var n=new o.AmbientLight(789516);d.add(n),
// 添加平行光
U=(0,r.createDirectionLight)(),
// 添加光晕
(0,r.createLensflare)(U),(
// 添加debug辅助模型
O=new o.CameraHelper(U.shadow.camera)).visible=!1,d.add(O),d.add(U),
// 添加多个聚光灯
B=(0,r.createSpotLight)(16744192),F=(0,r.createSpotLight)(65407),z=(0,r.createSpotLight)(8323327),B.position.set(0,50,-60),F.position.set(-45,50,30),z.position.set(45,50,30),I=new o.SpotLightHelper(B),N=new o.SpotLightHelper(F),D=new o.SpotLightHelper(z),B.visible=!1,F.visible=!1,z.visible=!1,I.visible=!1,N.visible=!1,D.visible=!1,
// 批量添加对象可以这样
d.add(B,F,z),d.add(I,N,D),function e(){(0,q.randomPosSpotLights)(B),(0,q.randomPosSpotLights)(F),(0,q.randomPosSpotLights)(z),setTimeout(e,5e3)}(),S=new o.CubeCamera(.1,2e3,256),d.add(S),(v=(0,i.createHdrSphere)()).castShadow=!0,v.position.set(15,5,15),(b=(0,i.createLabel)("HDR Sphere",new o.Vector3(15,13,15))).visible=!1,v.visible=!1,d.add(b),d.add(v),(x=(0,i.createEnvMapSphere)(S)).castShadow=!0,x.position.set(-15,5,-15),(w=(0,i.createLabel)("EnviromentMapping Sphere",new o.Vector3(-15,13,-15))).visible=!1,x.visible=!1,d.add(w),d.add(x),(y=(0,i.createMultiTextureSphere)()).castShadow=!0,y.position.set(15,5,-15),(E=(0,i.createLabel)("MultiMaterial Sphere",new o.Vector3(15,13,-15))).visible=!1,y.visible=!1,d.add(E),d.add(y),(_=(0,i.createFresnelSphere)(S)).castShadow=!0,_.position.set(-15,5,15),(M=(0,i.createLabel)("Fresnel Sphere",new o.Vector3(-15,13,15))).visible=!1,_.visible=!1,d.add(M),d.add(_),
// 关闭加载提示
a.closeAll(),
// 开始渲染
G(),window.addEventListener("resize",V,!1),e(h)}},
/***/"./src/views/lm_scene/light.js":
/*!*************************************!*\
  !*** ./src/views/lm_scene/light.js ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSpotLight=t.createLensflare=t.changeSkyEffect=t.createSky=t.createDirectionLight=void 0;var i=q(n(/*! res_gl/img/lensflare/lensflare0.png */"./src/assets/img/lensflare/lensflare0.png")),r=q(n(/*! res_gl/img/lensflare/lensflare3.png */"./src/assets/img/lensflare/lensflare3.png"));function q(e){return e&&e.__esModule?e:{default:e}}var a=n(/*! three */"./node_modules/three/build/three.module.js");n(/*! shader_gl/lm_scene/Sky */"./src/components/shader/lm_scene/Sky.js"),n(/*! shader_gl/lm_scene/Lensflare */"./src/components/shader/lm_scene/Lensflare.js");t.createDirectionLight=function(){var e=new a.DirectionalLight(16777215);return e.castShadow=!0,e.shadow.camera.near=2,e.shadow.camera.far=2e3,
// 定义平行光的照射范围
e.shadow.camera.left=-150,e.shadow.camera.right=150,e.shadow.camera.top=150,e.shadow.camera.bottom=-150,
// 定义平行光强度
e.intensity=2,
// 设置平行光产生的阴影贴图的大小
e.shadow.mapSize.height=2048,e.shadow.mapSize.width=2048,e},t.createSky=function(e,t){
// Add Sky
var n=new a.Sky;return n.scale.setScalar(1e3),
// 这里是
o(n,e,t),n}
/**
 * 创建天空
 * @return {[type]} [description]
 */;var o=t.changeSkyEffect=function(e,t,n){var i=e.material.uniforms;i.turbidity.value=n.turbidity,i.rayleigh.value=n.rayleigh,i.luminance.value=n.luminance,i.mieCoefficient.value=n.mieCoefficient,i.mieDirectionalG.value=n.mieDirectionalG,e.material.uniforms=i;var r=Math.PI*(n.inclination-.5),q=2*Math.PI*(n.azimuth-.5);i.sunPosition.value.x=t*Math.cos(q),i.sunPosition.value.y=t*Math.sin(q)*Math.sin(r),i.sunPosition.value.z=t*Math.sin(q)*Math.cos(r)};t.createLensflare=function(e){var t=new a.TextureLoader,n=t.load(i.default),q=t.load(r.default),o=new a.Lensflare;o.addElement(new a.LensflareElement(n,150,0,e.color)),o.addElement(new a.LensflareElement(q,60,.6)),o.addElement(new a.LensflareElement(q,70,.7)),o.addElement(new a.LensflareElement(q,120,.9)),o.addElement(new a.LensflareElement(q,70,1)),e.add(o)},t.createSpotLight=function(e){var t=new a.SpotLight(e);return t.castShadow=!0,t.angle=.3,// 散射角度（弧度）
t.penumbra=.2,// 边缘衰减幅度，默认为0
t.decay=2,// 根据距离的光的衰减幅度
t.distance=100,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t}},
/***/"./src/views/lm_scene/mesh.js":
/*!************************************!*\
  !*** ./src/views/lm_scene/mesh.js ***!
  \************************************/
/*! no static exports found */
/***/function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createLabel=t.createFresnelSphere=t.createMultiTextureSphere=t.createRefractionSphere=t.createEnvMapSphere=t.createHdrSphere=t.createGround=void 0;var i=s(n(/*! res_gl/img/floor/hardwood2_diffuse.jpg */"./src/assets/img/floor/hardwood2_diffuse.jpg")),r=s(n(/*! res_gl/img/floor/hardwood2_bump.jpg */"./src/assets/img/floor/hardwood2_bump.jpg")),q=s(n(/*! res_gl/img/floor/hardwood2_roughness.jpg */"./src/assets/img/floor/hardwood2_roughness.jpg")),a=s(n(/*! res_gl/img/memorial.png */"./src/assets/img/memorial.png")),o=s(n(/*! shader_gl/lm_scene/HdrShader.js */"./src/components/shader/lm_scene/HdrShader.js"));s(n(/*! shader_gl/lm_scene/FresnelShader */"./src/components/shader/lm_scene/FresnelShader.js"));function s(e){return e&&e.__esModule?e:{default:e}}var l=n(/*! three */"./node_modules/three/build/three.module.js"),c=n(/*! style_gl/fonts/gentilis_regular.typeface.json */"./src/style/fonts/gentilis_regular.typeface.json"),h=(t.createGround=function(){var e=new l.PlaneBufferGeometry(70,70,20,20),t=new l.MeshStandardMaterial({color:16777215,side:l.FrontSide,roughness:.8,// 粗糙度，0则光滑镜面反射，1则完全漫反射
metalness:.2,// 金属质，0一般是木头或石头，1则是金属
bumpScale:.005}),n=new l.TextureLoader;return n.load(i.default,function(e){e.wrapS=l.RepeatWrapping,e.wrapT=l.RepeatWrapping,e.anisotropy=4,// 使用更多的纹理采样点，默认为1
e.repeat.set(5,12),t.map=e,t.needsUpdate=!0}),n.load(r.default,function(e){e.wrapS=l.RepeatWrapping,e.wrapT=l.RepeatWrapping,e.anisotropy=4,e.repeat.set(5,12),t.bumpMap=e,t.needsUpdate=!0}),n.load(q.default,function(e){e.wrapS=l.RepeatWrapping,e.wrapT=l.RepeatWrapping,e.anisotropy=4,e.repeat.set(5,12),t.roughnessMap=e,t.needsUpdate=!0}),new l.Mesh(e,t)},function(e){var t=new l.SphereBufferGeometry(5,50,50);return new l.Mesh(t,e)});
// import grasslight from "res_gl/img/terrain/grasslight-big.jpg";
// import grasslightNormal from "res_gl/img/terrain/grasslight-big-nm.jpg";
// 纹理贴图
t.createHdrSphere=function(){var e=(new l.TextureLoader).load(a.default);
// 设置纹理缩小过滤
e.minFilter=l.LinearFilter,// 线性过滤，最接近纹理坐标的4个纹素颜色的加权平均
// 设置纹理放大过滤
e.magFilter=l.NearestFilter;// 最接近当前纹素的颜色
var t=new l.ShaderMaterial({uniforms:{tDiffuse:{value:e},// 纹理采样
exposure:{value:.125},// 曝光度
brightMax:{value:.5}},vertexShader:o.default.vertexShader,fragmentShader:o.default.fragmentShader});return h(t)},t.createEnvMapSphere=function(e){var t=new l.MeshBasicMaterial({envMap:e.renderTarget.texture,// 生成的立方体纹理
side:l.FrontSide});return h(t)},t.createRefractionSphere=function(e){
// cubeCamera.mapping = THREE
new l.MeshBasicMaterial({envMap:e.renderTarget.texture,// 生成的立方体纹理
side:l.FrontSide})},t.createMultiTextureSphere=function(){var e=[];e.push(new l.MeshBasicMaterial({color:16755200,transparent:!0,blending:l.AdditiveBlending})),// 黄色加透明光亮
e.push(new l.MeshBasicMaterial({color:16755200,wireframe:!0})),e.push(new l.MeshNormalMaterial({flatShading:!0})),e.push(new l.MeshPhongMaterial({color:0,specular:6710886,emissive:16711680,shininess:10,opacity:.9,transparent:!0}));for(
// 这里由于使用多材质，应采取API提供的对材质排序的方法进行性能优化，因此对几何对象中的面进行处理
// 这里要实现的是多种材质在几何体中随机分布，因此给每个面进行配置材质索引并根据索引排序可以减少绘制调用和提升性能
// 配置材质索引
var t=new l.SphereGeometry(5,50,50),n=0,i=t.faces.length;n<i;n++)t.faces[n].materialIndex=Math.floor(Math.random()*e.length);
// 根据材质索引给每个面进行排序
return t.sortFacesByMaterialIndex(),new l.Mesh(t,e)},t.createFresnelSphere=function(e){var t=l.FresnelShader,n=l.UniformsUtils.clone(t.uniforms);n.tCube.value=e.renderTarget.texture;var i=new l.ShaderMaterial({uniforms:n,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),r=new l.SphereGeometry(5,50,50);return new l.Mesh(r,i)},t.createLabel=function(e,t){
// 暂时不用loader,因为地址本地不好弄
// var loader = new THREE.FontLoader();
// 这里模拟loader后的数据
var n=new l.Font(c,!0),i=new l.TextBufferGeometry(e,{font:n,size:.5,height:.01,curveSegments:1}),r=new l.MeshBasicMaterial({color:16777215}),q=new l.Mesh(i,r);return q.position.copy(t),q}}
/******/});
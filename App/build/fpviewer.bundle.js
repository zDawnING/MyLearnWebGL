/******/!function(e){// webpackBootstrap
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function r(n){
/******/
/******/ // Check if module is in cache
/******/if(t[n])
/******/return t[n].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[n]={
/******/i:n,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n].call(o.exports,o,o.exports,r),
/******/
/******/ // Flag the module as loaded
/******/o.l=!0,o.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/
/******/
/******/
/******/ // Load entry module and return exports
/******/r.m=e,
/******/
/******/ // expose the module cache
/******/r.c=t,
/******/
/******/ // define getter function for harmony exports
/******/r.d=function(e,t,n){
/******/r.o(e,t)||
/******/Object.defineProperty(e,t,{
/******/configurable:!1,
/******/enumerable:!0,
/******/get:n
/******/})
/******/},
/******/
/******/ // define __esModule on exports
/******/r.r=function(e){
/******/Object.defineProperty(e,"__esModule",{value:!0});
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=function(e){
/******/var t=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/
/******/return r.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/r.p="./",r(r.s="./src/fpviewer_index.js");
/******/}
/************************************************************************/
/******/({
/***/"./node_modules/css-loader/index.js!./src/style/common/commom.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/common/commom.css ***!
  \***************************************************************/
/*! no static exports found */
/***/function(e,t,r){
// imports
// module
(e.exports=r(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"body{\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}",""])},
/***/"./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
e.exports=function(e){var t=[];
// return the list of modules as css string
return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=
// Adapted from convert-source-map (MIT)
function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}
/***/(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},
// import a list of modules into the list
t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},
/***/"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/function(e,t,r){
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){
// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){
// If passing function in options, then use it for resolve "head" element.
// Useful for Shadow Root style i.e
// {
//   insertInto: function () { return document.querySelector("#foo").shadowRoot }
// }
if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);
// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{
// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,u=[],c=r(/*! ./urls */"./node_modules/style-loader/lib/urls.js");function f(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function l(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function d(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function p(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,o,i;
// If a transform function was defined, run it on the css
if(t.transform&&e.css){if(!(i=t.transform(e.css)))
// If the transform function returns a falsy value, don't add this css.
// This allows conditional loading of css
return function(){
// noop
};
// If transform returns a value, use that instead of the original css.
// This allows running runtime transformations on the css.
e.css=i}if(t.singleton){var u=s++;r=a||(a=p(t)),n=g.bind(null,r,u,!1),o=g.bind(null,r,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=c(n));o&&(
// http://stackoverflow.com/a/26603875
n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}
/***/.bind(null,r,t),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=p(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},
// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),
// By default, add <style> tags to the <head> element
t.insertInto||(t.insertInto="head"),
// By default, add <style> tags to the bottom of the target
t.insertAt||(t.insertAt="bottom");var r=l(e,t);return f(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}e&&f(l(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete n[s.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function g(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},
/***/"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";
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
if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");
// send back the fixed css
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){
// strip quotes (if they exist)
var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});
// already a full url? no change
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(
//TODO: should we add protocol?
o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")");
// convert the url to a full url
})}},
/***/"./src/assets/img/sky.jpg":
/*!********************************!*\
  !*** ./src/assets/img/sky.jpg ***!
  \********************************/
/*! no static exports found */
/***/function(e,t,r){e.exports=r.p+"images/sky.2b11efd6.jpg";
/***/},
/***/"./src/components/shader/fpviewer/TestShader.js":
/*!******************************************************!*\
  !*** ./src/components/shader/fpviewer/TestShader.js ***!
  \******************************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * 测试shader
 * @type {Object}
 */
var n={
// 顶点着色器
vertexShader:["attribute vec4 a_Position;","attribute vec2 a_TexCoord;","uniform mat4 u_MVPMatrix;","varying vec2 v_TexCoord;","void main(){","gl_Position = u_MVPMatrix * a_Position;","v_TexCoord = a_TexCoord;","}"].join("\n"),
// 片元着色器
fragmentShader:["#ifdef GL_ES","precision mediump float;","#endif","uniform sampler2D u_Sampler;","varying vec2 v_TexCoord;","void main(){","gl_FragColor = texture2D(u_Sampler, v_TexCoord);","}"].join("\n")};t.default=n},
/***/"./src/fpviewer_index.js":
/*!*******************************!*\
  !*** ./src/fpviewer_index.js ***!
  \*******************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! fpviewer/index */"./src/views/fpviewer/index.js"));r(/*! ./style/common/commom.css */"./src/style/common/commom.css"),new Promise(n.default).then(function(e){document.body.style.width=window.innerWidth+"px",document.body.style.height=window.innerHeight+"px",document.getElementById("app").appendChild(e)})},
/***/"./src/style/common/commom.css":
/*!*************************************!*\
  !*** ./src/style/common/commom.css ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,r){var n=r(/*! !../../../node_modules/css-loader!./commom.css */"./node_modules/css-loader/index.js!./src/style/common/commom.css");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},
/***/"./src/vendor/webgl/cuon-matrix.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/cuon-matrix.js ***!
  \*****************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=t.Matrix4=function(e){var t,r,o;if(e&&"object"===(void 0===e?"undefined":n(e))&&e.hasOwnProperty("elements")){for(r=e.elements,o=new Float32Array(16),t=0;t<16;++t)o[t]=r[t];this.elements=o}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};
// cuon-matrix.js (c) 2012 kanda and matsuda
/** 
 * This is a class treating 4x4 matrix.
 * This class contains the function that is equivalent to OpenGL matrix stack.
 * The matrix after conversion is calculated by multiplying a conversion matrix from the right.
 * The matrix is replaced by the calculated result.
 */
/**
 * Constructor of Matrix4
 * If opt_src is specified, new matrix is initialized by opt_src.
 * Otherwise, new matrix is initialized by identity matrix.
 * @param opt_src source matrix(option)
 */
/**
 * Set the identity matrix.
 * @return this
 */
o.prototype.setIdentity=function(){var e=this.elements;return e[0]=1,e[4]=0,e[8]=0,e[12]=0,e[1]=0,e[5]=1,e[9]=0,e[13]=0,e[2]=0,e[6]=0,e[10]=1,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this},
/**
 * Copy matrix.
 * @param src source matrix
 * @return this
 */
o.prototype.set=function(e){var t,r,n;if((r=e.elements)!==(n=this.elements)){for(t=0;t<16;++t)n[t]=r[t];return this}},
/**
 * Multiply the matrix from the right.
 * @param other The multiply matrix
 * @return this
 */
o.prototype.concat=function(e){var t,r,n,o,i,a,s,u;
// Calculate e = a * b
// If e equals b, copy b to temporary matrix.
if(r=this.elements,n=this.elements,r===(o=e.elements))for(o=new Float32Array(16),t=0;t<16;++t)o[t]=r[t];for(t=0;t<4;t++)i=n[t],a=n[t+4],s=n[t+8],u=n[t+12],r[t]=i*o[0]+a*o[1]+s*o[2]+u*o[3],r[t+4]=i*o[4]+a*o[5]+s*o[6]+u*o[7],r[t+8]=i*o[8]+a*o[9]+s*o[10]+u*o[11],r[t+12]=i*o[12]+a*o[13]+s*o[14]+u*o[15];return this},o.prototype.multiply=o.prototype.concat,
/**
 * Multiply the three-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
o.prototype.multiplyVector3=function(e){var t=this.elements,r=e.elements,n=new i,o=n.elements;return o[0]=r[0]*t[0]+r[1]*t[4]+r[2]*t[8]+t[12],o[1]=r[0]*t[1]+r[1]*t[5]+r[2]*t[9]+t[13],o[2]=r[0]*t[2]+r[1]*t[6]+r[2]*t[10]+t[14],n},
/**
 * Multiply the four-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
o.prototype.multiplyVector4=function(e){var t=this.elements,r=e.elements,n=new a,o=n.elements;return o[0]=r[0]*t[0]+r[1]*t[4]+r[2]*t[8]+r[3]*t[12],o[1]=r[0]*t[1]+r[1]*t[5]+r[2]*t[9]+r[3]*t[13],o[2]=r[0]*t[2]+r[1]*t[6]+r[2]*t[10]+r[3]*t[14],o[3]=r[0]*t[3]+r[1]*t[7]+r[2]*t[11]+r[3]*t[15],n},
/**
 * Transpose the matrix.
 * @return this
 */
o.prototype.transpose=function(){var e,t;return t=(e=this.elements)[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},
/**
 * Calculate the inverse matrix of specified matrix, and set to this.
 * @param other The source matrix
 * @return this
 */
o.prototype.setInverseOf=function(e){var t,r,n,o,i;if(r=e.elements,n=this.elements,(o=new Float32Array(16))[0]=r[5]*r[10]*r[15]-r[5]*r[11]*r[14]-r[9]*r[6]*r[15]+r[9]*r[7]*r[14]+r[13]*r[6]*r[11]-r[13]*r[7]*r[10],o[4]=-r[4]*r[10]*r[15]+r[4]*r[11]*r[14]+r[8]*r[6]*r[15]-r[8]*r[7]*r[14]-r[12]*r[6]*r[11]+r[12]*r[7]*r[10],o[8]=r[4]*r[9]*r[15]-r[4]*r[11]*r[13]-r[8]*r[5]*r[15]+r[8]*r[7]*r[13]+r[12]*r[5]*r[11]-r[12]*r[7]*r[9],o[12]=-r[4]*r[9]*r[14]+r[4]*r[10]*r[13]+r[8]*r[5]*r[14]-r[8]*r[6]*r[13]-r[12]*r[5]*r[10]+r[12]*r[6]*r[9],o[1]=-r[1]*r[10]*r[15]+r[1]*r[11]*r[14]+r[9]*r[2]*r[15]-r[9]*r[3]*r[14]-r[13]*r[2]*r[11]+r[13]*r[3]*r[10],o[5]=r[0]*r[10]*r[15]-r[0]*r[11]*r[14]-r[8]*r[2]*r[15]+r[8]*r[3]*r[14]+r[12]*r[2]*r[11]-r[12]*r[3]*r[10],o[9]=-r[0]*r[9]*r[15]+r[0]*r[11]*r[13]+r[8]*r[1]*r[15]-r[8]*r[3]*r[13]-r[12]*r[1]*r[11]+r[12]*r[3]*r[9],o[13]=r[0]*r[9]*r[14]-r[0]*r[10]*r[13]-r[8]*r[1]*r[14]+r[8]*r[2]*r[13]+r[12]*r[1]*r[10]-r[12]*r[2]*r[9],o[2]=r[1]*r[6]*r[15]-r[1]*r[7]*r[14]-r[5]*r[2]*r[15]+r[5]*r[3]*r[14]+r[13]*r[2]*r[7]-r[13]*r[3]*r[6],o[6]=-r[0]*r[6]*r[15]+r[0]*r[7]*r[14]+r[4]*r[2]*r[15]-r[4]*r[3]*r[14]-r[12]*r[2]*r[7]+r[12]*r[3]*r[6],o[10]=r[0]*r[5]*r[15]-r[0]*r[7]*r[13]-r[4]*r[1]*r[15]+r[4]*r[3]*r[13]+r[12]*r[1]*r[7]-r[12]*r[3]*r[5],o[14]=-r[0]*r[5]*r[14]+r[0]*r[6]*r[13]+r[4]*r[1]*r[14]-r[4]*r[2]*r[13]-r[12]*r[1]*r[6]+r[12]*r[2]*r[5],o[3]=-r[1]*r[6]*r[11]+r[1]*r[7]*r[10]+r[5]*r[2]*r[11]-r[5]*r[3]*r[10]-r[9]*r[2]*r[7]+r[9]*r[3]*r[6],o[7]=r[0]*r[6]*r[11]-r[0]*r[7]*r[10]-r[4]*r[2]*r[11]+r[4]*r[3]*r[10]+r[8]*r[2]*r[7]-r[8]*r[3]*r[6],o[11]=-r[0]*r[5]*r[11]+r[0]*r[7]*r[9]+r[4]*r[1]*r[11]-r[4]*r[3]*r[9]-r[8]*r[1]*r[7]+r[8]*r[3]*r[5],o[15]=r[0]*r[5]*r[10]-r[0]*r[6]*r[9]-r[4]*r[1]*r[10]+r[4]*r[2]*r[9]+r[8]*r[1]*r[6]-r[8]*r[2]*r[5],0===(i=r[0]*o[0]+r[1]*o[4]+r[2]*o[8]+r[3]*o[12]))return this;for(i=1/i,t=0;t<16;t++)n[t]=o[t]*i;return this},
/**
 * Calculate the inverse matrix of this, and set to this.
 * @return this
 */
o.prototype.invert=function(){return this.setInverseOf(this)},
/**
 * Set the orthographic projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
o.prototype.setOrtho=function(e,t,r,n,o,i){var a,s,u,c;if(e===t||r===n||o===i)throw"null frustum";return s=1/(t-e),u=1/(n-r),c=1/(i-o),(a=this.elements)[0]=2*s,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2*c,a[11]=0,a[12]=-(t+e)*s,a[13]=-(n+r)*u,a[14]=-(i+o)*c,a[15]=1,this},
/**
 * Multiply the orthographic projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
o.prototype.ortho=function(e,t,r,n,i,a){return this.concat((new o).setOrtho(e,t,r,n,i,a))},
/**
 * Set the perspective projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
o.prototype.setFrustum=function(e,t,r,n,o,i){var a,s,u,c;if(e===t||n===r||o===i)throw"null frustum";if(o<=0)throw"near <= 0";if(i<=0)throw"far <= 0";return s=1/(t-e),u=1/(n-r),c=1/(i-o),(a=this.elements)[0]=2*o*s,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*o*u,a[6]=0,a[7]=0,a[8]=(t+e)*s,a[9]=(n+r)*u,a[10]=-(i+o)*c,a[11]=-1,a[12]=0,a[13]=0,a[14]=-2*o*i*c,a[15]=0,this},
/**
 * Multiply the perspective projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
o.prototype.frustum=function(e,t,r,n,i,a){return this.concat((new o).setFrustum(e,t,r,n,i,a))},
/**
 * Set the perspective projection matrix by fovy and aspect.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
o.prototype.setPerspective=function(e,t,r,n){var o,i,a,s;if(r===n||0===t)throw"null frustum";if(r<=0)throw"near <= 0";if(n<=0)throw"far <= 0";if(e=Math.PI*e/180/2,0===(a=Math.sin(e)))throw"null frustum";return i=1/(n-r),s=Math.cos(e)/a,(o=this.elements)[0]=s/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=-(n+r)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=-2*r*n*i,o[15]=0,this},
/**
 * Multiply the perspective projection matrix from the right.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
o.prototype.perspective=function(e,t,r,n){return this.concat((new o).setPerspective(e,t,r,n))},
/**
 * Set the matrix for scaling.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
o.prototype.setScale=function(e,t,r){var n=this.elements;return n[0]=e,n[4]=0,n[8]=0,n[12]=0,n[1]=0,n[5]=t,n[9]=0,n[13]=0,n[2]=0,n[6]=0,n[10]=r,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this},
/**
 * Multiply the matrix for scaling from the right.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
o.prototype.scale=function(e,t,r){var n=this.elements;return n[0]*=e,n[4]*=t,n[8]*=r,n[1]*=e,n[5]*=t,n[9]*=r,n[2]*=e,n[6]*=t,n[10]*=r,n[3]*=e,n[7]*=t,n[11]*=r,this},
/**
 * Set the matrix for translation.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
o.prototype.setTranslate=function(e,t,r){var n=this.elements;return n[0]=1,n[4]=0,n[8]=0,n[12]=e,n[1]=0,n[5]=1,n[9]=0,n[13]=t,n[2]=0,n[6]=0,n[10]=1,n[14]=r,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this},
/**
 * Multiply the matrix for translation from the right.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
o.prototype.translate=function(e,t,r){var n=this.elements;return n[12]+=n[0]*e+n[4]*t+n[8]*r,n[13]+=n[1]*e+n[5]*t+n[9]*r,n[14]+=n[2]*e+n[6]*t+n[10]*r,n[15]+=n[3]*e+n[7]*t+n[11]*r,this},
/**
 * Set the matrix for rotation.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
o.prototype.setRotate=function(e,t,r,n){var o,i,a,s,u,c,f,l,d,m,p,h;return e=Math.PI*e/180,o=this.elements,i=Math.sin(e),a=Math.cos(e),0!==t&&0===r&&0===n?(
// Rotation around X axis
t<0&&(i=-i),o[0]=1,o[4]=0,o[8]=0,o[12]=0,o[1]=0,o[5]=a,o[9]=-i,o[13]=0,o[2]=0,o[6]=i,o[10]=a,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1):0===t&&0!==r&&0===n?(
// Rotation around Y axis
r<0&&(i=-i),o[0]=a,o[4]=0,o[8]=i,o[12]=0,o[1]=0,o[5]=1,o[9]=0,o[13]=0,o[2]=-i,o[6]=0,o[10]=a,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1):0===t&&0===r&&0!==n?(
// Rotation around Z axis
n<0&&(i=-i),o[0]=a,o[4]=-i,o[8]=0,o[12]=0,o[1]=i,o[5]=a,o[9]=0,o[13]=0,o[2]=0,o[6]=0,o[10]=1,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1):(
// Rotation around another axis
1!==(s=Math.sqrt(t*t+r*r+n*n))&&(t*=u=1/s,r*=u,n*=u),c=1-a,f=t*r,l=r*n,d=n*t,m=t*i,p=r*i,h=n*i,o[0]=t*t*c+a,o[1]=f*c+h,o[2]=d*c-p,o[3]=0,o[4]=f*c-h,o[5]=r*r*c+a,o[6]=l*c+m,o[7]=0,o[8]=d*c+p,o[9]=l*c-m,o[10]=n*n*c+a,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1),this},
/**
 * Multiply the matrix for rotation from the right.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
o.prototype.rotate=function(e,t,r,n){return this.concat((new o).setRotate(e,t,r,n))},
/**
 * Set the viewing matrix.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
o.prototype.setLookAt=function(e,t,r,n,o,i,a,s,u){var c,f,l,d,m,p,h,v,b,g,w,y;
// Translate.
return f=n-e,l=o-t,d=i-r,
// Calculate cross product of f and up.
p=(l*=
// Normalize f.
m=1/Math.sqrt(f*f+l*l+d*d))*u-(d*=m)*s,h=d*a-(f*=m)*u,v=f*s-l*a,
// Calculate cross product of s and f.
g=(h*=
// Normalize s.
b=1/Math.sqrt(p*p+h*h+v*v))*d-(v*=b)*l,w=v*f-(p*=b)*d,y=p*l-h*f,(
// Set to this.
c=this.elements)[0]=p,c[1]=g,c[2]=-f,c[3]=0,c[4]=h,c[5]=w,c[6]=-l,c[7]=0,c[8]=v,c[9]=y,c[10]=-d,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,this.translate(-e,-t,-r)},
/**
 * Multiply the viewing matrix from the right.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
o.prototype.lookAt=function(e,t,r,n,i,a,s,u,c){return this.concat((new o).setLookAt(e,t,r,n,i,a,s,u,c))},
/**
 * Multiply the matrix for project vertex to plane from the right.
 * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
 * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
 * @return this
 */
o.prototype.dropShadow=function(e,t){var r=new o,n=r.elements,i=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3];return n[0]=i-t[0]*e[0],n[1]=-t[1]*e[0],n[2]=-t[2]*e[0],n[3]=-t[3]*e[0],n[4]=-t[0]*e[1],n[5]=i-t[1]*e[1],n[6]=-t[2]*e[1],n[7]=-t[3]*e[1],n[8]=-t[0]*e[2],n[9]=-t[1]*e[2],n[10]=i-t[2]*e[2],n[11]=-t[3]*e[2],n[12]=-t[0]*e[3],n[13]=-t[1]*e[3],n[14]=-t[2]*e[3],n[15]=i-t[3]*e[3],this.concat(r)},
/**
 * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
 * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
 * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
 * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
 * @return this
 */
o.prototype.dropShadowDirectionally=function(e,t,r,n,o,i,a,s,u){var c=n*e+o*t+i*r;return this.dropShadow([e,t,r,-c],[a,s,u,0])};
/**
 * Constructor of Vector3
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */
var i=t.Vector3=function(e){var t=new Float32Array(3);e&&"object"===(void 0===e?"undefined":n(e))&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),this.elements=t};
/**
  * Normalize.
  * @return this
  */i.prototype.normalize=function(){var e=this.elements,t=e[0],r=e[1],n=e[2],o=Math.sqrt(t*t+r*r+n*n);return o?1==o?this:(o=1/o,e[0]=t*o,e[1]=r*o,e[2]=n*o,this):(e[0]=0,e[1]=0,e[2]=0,this)};
/**
 * Constructor of Vector4
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */
var a=t.Vector4=function(e){var t=new Float32Array(4);e&&"object"===(void 0===e?"undefined":n(e))&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]),this.elements=t};
/***/},
/***/"./src/vendor/webgl/cuon-utils.js":
/*!****************************************!*\
  !*** ./src/vendor/webgl/cuon-utils.js ***!
  \****************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initShaders=
// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current 
 */
function(e,t,r){var n=a(e,t,r);if(!n)return console.log("Failed to create program"),!1;return e.useProgram(n),e.program=n,!0}
/**
 * Create the linked program object
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */,t.createProgram=a,t.loadShader=s,t.getWebGLContext=
/** 
 * Initialize and get the rendering for WebGL
 * @param canvas <cavnas> element
 * @param opt_debug flag to initialize the context for debugging
 * @return the rendering context for WebGL
 */
function(e,t){
// Get the rendering context for WebGL
var r=n.default.setupWebGL(e);if(!r)return null;
// if opt_debug is explicitly false, create the context for debugging
(arguments.length<2||t)&&(r=o.default.makeDebugContext(r));return r}
/***/;var n=i(r(/*! vendor_gl/webgl-utils */"./src/vendor/webgl/webgl-utils.js")),o=i(r(/*! vendor_gl/webgl-debug */"./src/vendor/webgl/webgl-debug.js"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){
// Create shader object
var n=s(e,e.VERTEX_SHADER,t),o=s(e,e.FRAGMENT_SHADER,r);if(!n||!o)return null;
// Create a program object
var i=e.createProgram();if(!i)return null;
// Attach the shader objects
if(e.attachShader(i,n),e.attachShader(i,o),
// Link the program object
e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){var a=e.getProgramInfoLog(i);return console.log("Failed to link program: "+a),e.deleteProgram(i),e.deleteShader(o),e.deleteShader(n),null}return i}
/**
 * Create a shader object
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */function s(e,t,r){
// Create shader object
var n=e.createShader(t);if(null==n)return console.log("unable to create shader"),null;
// Set the shader program
if(e.shaderSource(n,r),
// Compile the shader
e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var o=e.getShaderInfoLog(n);return console.log("Failed to compile shader: "+o),e.deleteShader(n),null}return n}},
/***/"./src/vendor/webgl/webgl-debug.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/webgl-debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){
/**
   * Wrapped logging function.
   * @param {string} msg Message to log.
   */
var e=function(e){window.console&&window.console.log&&window.console.log(e)},t={
// Generic setters and getters
enable:{0:!0},disable:{0:!0},getParameter:{0:!0},
// Rendering
drawArrays:{0:!0},drawElements:{0:!0,2:!0},
// Shaders
createShader:{0:!0},getShaderParameter:{1:!0},getProgramParameter:{1:!0},
// Vertex attributes
getVertexAttrib:{1:!0},vertexAttribPointer:{2:!0},
// Textures
bindTexture:{0:!0},activeTexture:{0:!0},getTexParameter:{0:!0,1:!0},texParameterf:{0:!0,1:!0},texParameteri:{0:!0,1:!0,2:!0},texImage2D:{0:!0,2:!0,6:!0,7:!0},texSubImage2D:{0:!0,6:!0,7:!0},copyTexImage2D:{0:!0,2:!0},copyTexSubImage2D:{0:!0},generateMipmap:{0:!0},
// Buffer objects
bindBuffer:{0:!0},bufferData:{0:!0,2:!0},bufferSubData:{0:!0},getBufferParameter:{0:!0,1:!0},
// Renderbuffers and framebuffers
pixelStorei:{0:!0,1:!0},readPixels:{4:!0,5:!0},bindRenderbuffer:{0:!0},bindFramebuffer:{0:!0},checkFramebufferStatus:{0:!0},framebufferRenderbuffer:{0:!0,1:!0,2:!0},framebufferTexture2D:{0:!0,1:!0,2:!0},getFramebufferAttachmentParameter:{0:!0,1:!0,2:!0},getRenderbufferParameter:{0:!0,1:!0},renderbufferStorage:{0:!0,1:!0},
// Frame buffer operations (clear, blend, depth test, stencil)
clear:{0:!0},depthFunc:{0:!0},blendFunc:{0:!0,1:!0},blendFuncSeparate:{0:!0,1:!0,2:!0,3:!0},blendEquation:{0:!0},blendEquationSeparate:{0:!0,1:!0},stencilFunc:{0:!0},stencilFuncSeparate:{0:!0,1:!0},stencilMaskSeparate:{0:!0},stencilOp:{0:!0,1:!0,2:!0},stencilOpSeparate:{0:!0,1:!0,2:!0,3:!0},
// Culling
cullFace:{0:!0},frontFace:{0:!0}},r=null;
/**
   * Which arguements are enums.
   * @type {!Object.<number, string>}
   */
/**
   * Initializes this module. Safe to call more than once.
   * @param {!WebGLRenderingContext} ctx A WebGL context. If
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */
function n(e){if(null==r)for(var t in r={},e)"number"==typeof e[t]&&(r[e[t]]=t)}
/**
   * Checks the utils have been initialized.
   */function o(){if(null==r)throw"WebGLDebugUtils.init(ctx) not called"}
/**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */
/**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */
function i(e){o();var t=r[e];return void 0!==t?t:"*UNKNOWN WebGL ENUM (0x"+e.toString(16)+")"}
/**
   * Returns the string version of a WebGL argument.
   * Attempts to convert enum arguments to strings.
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */function a(e,r,n){var o=t[e];return void 0!==o&&o[r]?i(n):n.toString()}
/**
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not gl.NO_ERROR.
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *        wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc
   *        The function to call when gl.getError returns an
   *        error. If not specified the default function calls
   *        console.log with a message.
   */function s(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var n=0;n<t;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(n=0;n<o;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);
// TODO: This should NOT be needed but Firefox fails with 'hint'
for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),
// TODO: Delete this IF.
e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.clientWidth,e.canvas.clientHeight),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{
/**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
     *    you have more than one context it doesn't matter which one
     *    you pass in, it is only used to pull out constants.
     */
init:n,
/**
     * Returns true or false if value matches any WebGL enum
     * @param {*} value Value to check if it might be an enum.
     * @return {boolean} True if value matches one of the WebGL defined enums
     */
mightBeEnum:function(e){return o(),void 0!==r[e]},
/**
     * Gets an string version of an WebGL enum.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
     *
     * @param {number} value Value to return an enum for
     * @return {string} The string version of the enum.
     */
glEnumToString:i,
/**
     * Converts the argument of a WebGL function to a string.
     * Attempts to convert enum arguments to strings.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glFunctionArgToString('bindTexture', 0, gl.TEXTURE_2D);
     *
     * would return 'TEXTURE_2D'
     *
     * @param {string} functionName the name of the WebGL function.
     * @param {number} argumentIndx the index of the argument.
     * @param {*} value The value of the argument.
     * @return {string} The value as a string.
     */
glFunctionArgToString:a,
/**
     * Given a WebGL context returns a wrapped context that calls
     * gl.getError after every command and calls a function if the
     * result is not NO_ERROR.
     *
     * You can supply your own function if you want. For example, if you'd like
     * an exception thrown on any GL error you could do this
     *
     *    function throwOnGLError(err, funcName, args) {
     *      throw WebGLDebugUtils.glEnumToString(err) + " was caused by call to" +
     *            funcName;
     *    };
     *
     *    ctx = WebGLDebugUtils.makeDebugContext(
     *        canvas.getContext("webgl"), throwOnGLError);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     * @param {!function(err, funcName, args): void} opt_onErrorFunc The function
     *     to call when gl.getError returns an error. If not specified the default
     *     function calls console.log with a message.
     */
makeDebugContext:function(t,r){n(t),r=r||function(t,r,n){for(
// apparently we can't do args.join(",");
var o="",s=0;s<n.length;++s)o+=(0==s?"":", ")+a(r,s,n[s]);e("WebGL error "+i(t)+" in "+r+"("+o+")")};
// Holds booleans for each GL error so after we get the error ourselves
// we can still return it to the client app.
var o={};
// Makes a function that calls a WebGL function and then calls getError.
function s(e,t){return function(){var n=e[t].apply(e,arguments),i=e.getError();return 0!=i&&(o[i]=!0,r(i,t,arguments)),n}}
// Make a an object that has a copy of every property of the WebGL context
// but wraps all functions.
var u={};for(var c in t)"function"==typeof t[c]?u[c]=s(t,c):u[c]=t[c];
// Override the getError function with one that returns our saved results.
return u.getError=function(){for(var e in o)if(o[e])return o[e]=!1,e;return t.NO_ERROR},u},
/**
     * Given a WebGL context returns a wrapped context that adds 4
     * functions.
     *
     * ctx.loseContext:
     *   simulates a lost context event.
     *
     * ctx.restoreContext:
     *   simulates the context being restored.
     *
     * ctx.registerOnContextLostListener(listener):
     *   lets you register a listener for context lost. Use instead
     *   of addEventListener('webglcontextlostevent', listener);
     *
     * ctx.registerOnContextRestoredListener(listener):
     *   lets you register a listener for context restored. Use
     *   instead of addEventListener('webglcontextrestored',
     *   listener);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     */
makeLostContextSimulatingContext:function(e){var t={},r=1,n=!1,o=[],i=void 0,a=void 0,u=void 0,c={};function f(e){
//return false;
return e instanceof WebGLBuffer||e instanceof WebGLFramebuffer||e instanceof WebGLProgram||e instanceof WebGLRenderbuffer||e instanceof WebGLShader||e instanceof WebGLTexture}
// Makes a function that simulates WebGL when out of context.
function l(e,t){var o=e[t];return function(){
// Only call the functions if the context is not lost.
if(!n)return function(e){for(var t=0;t<e.length;++t){var n=e[t];if(f(n))return n.__webglDebugContextLostId__==r}return!0}(arguments)?o.apply(e,arguments):void(c[e.INVALID_OPERATION]=!0)}}for(var d in e)"function"==typeof e[d]?t[d]=l(e,d):t[d]=e[d];function m(e){return{statusMessage:e}}t.loseContext=function(){if(!n){for(n=!0,++r;e.getError(););!function(){for(var e=Object.keys(c),t=0;t<e.length;++t)delete glErrorShdow_[e]}(),c[e.CONTEXT_LOST_WEBGL]=!0,setTimeout(function(){i&&i(m("context lost"))},0)}},t.restoreContext=function(){if(n){if(!a)throw"You can not restore the context without a listener";setTimeout(function(){if(function(){for(var t=0;t<o.length;++t){var r=o[t];r instanceof WebGLBuffer?e.deleteBuffer(r):r instanceof WebctxFramebuffer?e.deleteFramebuffer(r):r instanceof WebctxProgram?e.deleteProgram(r):r instanceof WebctxRenderbuffer?e.deleteRenderbuffer(r):r instanceof WebctxShader?e.deleteShader(r):r instanceof WebctxTexture&&e.deleteTexture(r)}}(),s(e),n=!1,a){var t=a;a=u,u=void 0,t(m("context restored"))}},0)}},
// Wrap a few functions specially.
t.getError=function(){if(!n)for(;t=e.getError();)c[t]=!0;for(var t in c)if(c[t])return delete c[t],t;return e.NO_ERROR};for(var p=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],h=0;h<p.length;++h)t[g=p[h]]=function(t){return function(){if(n)return null;var i=t.apply(e,arguments);return i.__webglDebugContextLostId__=r,o.push(i),i}}(e[g]);var v=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(h=0;h<v.length;++h)t[g=v[h]]=function(t){return function(){return n?null:t.apply(e,arguments)}}(t[g]);var b=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(h=0;h<b.length;++h){var g;t[g=b[h]]=function(t){return function(){return!n&&t.apply(e,arguments)}}(t[g])}function w(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}return t.checkFramebufferStatus=function(t){return function(){return n?e.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(t.checkFramebufferStatus),t.getAttribLocation=function(t){return function(){return n?-1:t.apply(e,arguments)}}(t.getAttribLocation),t.getVertexAttribOffset=function(t){return function(){return n?0:t.apply(e,arguments)}}(t.getVertexAttribOffset),t.isContextLost=function(){return n},t.registerOnContextLostListener=function(e){i=w(e)},t.registerOnContextRestoredListener=function(e){n?u=w(e):a=w(e)},t},
/**
     * Resets a context to the initial state.
     * @param {!WebGLRenderingContext} ctx The webgl context to
     *     reset.
     */
resetToInitialState:s}}()},
/***/"./src/vendor/webgl/webgl-utils.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/webgl-utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * Provides requestAnimationFrame in a cross browser
 * way.
 */
window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(/* function FrameRequestCallback */e,/* DOMElement Element */t){window.setTimeout(e,1e3/60)})
/** * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec. 
 * 
 * Cancels an animation frame request. 
 * Checks for cross-browser support, falls back to clearTimeout. 
 * @param {number}  Animation frame request. */,window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout),t.default=function(){
/**
   * Creates the HTLM for a failure message
   * @param {string} canvasContainerId id of container of th
   *        canvas.
   * @return {string} The html.
   */
var e=function(e){return'<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">'+e+"</div>"},t='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',r='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>',n=function(e,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],n=null,o=0;o<r.length;++o){try{n=e.getContext(r[o],t)}catch(e){}if(n)break}return n};
/**
   * Mesasge for getting a webgl browser
   * @type {string}
   */return{create3DContext:n,setupWebGL:function(o,i,a){a=a||function(n){var o=document.getElementsByTagName("body")[0];
//var container = canvas.parentNode;
if(o){var i=window.WebGLRenderingContext?r:t;n&&(i+="<br/><br/>Status: "+n),o.innerHTML=e(i)}},o.addEventListener&&o.addEventListener("webglcontextcreationerror",function(e){a(e.statusMessage)},!1);var s=n(o,i);return s||(window.WebGLRenderingContext,a("")),s}}}()},
/***/"./src/views/fpviewer/buffer.js":
/*!**************************************!*\
  !*** ./src/views/fpviewer/buffer.js ***!
  \**************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r,n,o){var i=e.createBuffer();if(!i)return console.log("not create buffer"),!1;e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);var a=e.getAttribLocation(e.program,o);return a<0?(console.log("not find attribute"),!1):(e.vertexAttribPointer(a,r,n,!1,0,0),e.enableVertexAttribArray(a),!0)};
/**
 * 初始化vertexBuffer对象
 * @param  {[type]} gl [description]
 * @return {[type]}    [description]
 */t.default=function(e,t){
// 创建缓冲区对象
var r=e.createBuffer();return r?n(e,t.vertices,3,e.FLOAT,"a_Position")&&n(e,t.texCoords,2,e.FLOAT,"a_TexCoord")?(e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t.indices,e.STATIC_DRAW),!0):-1:(console.log("not create buffer object"),!1)}},
/***/"./src/views/fpviewer/click_rotate_obj.js":
/*!************************************************!*\
  !*** ./src/views/fpviewer/click_rotate_obj.js ***!
  \************************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * 适配pc与移动端的鼠标事件
 * @param  {[type]} element [description]
 * @param  {[type]} type    [description]
 * @param  {[type]} handler [description]
 * @return {[type]}         [description]
 */
var n=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!0):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r};
/**
 * 初始化鼠标拖拽事件
 * @param  {[type]} canvas       [description]
 * @param  {[type]} currentAngle [description]
 * @return {[type]}              [description]
 */t.default=function(e,t){
// 默认不拖拽
var r=!1,o=-1,i=-1;
// 初始化鼠标最终移动位置坐标
n(e,"ontouchstart"in e?"touchstart":"mousedown",function(t){var n="ontouchstart"in e?t.touches[0]:t,a=n.clientX,s=n.clientY,u=n.target.getBoundingClientRect();
// 锁定canvas范围内
u.left<=a&&a<u.right&&u.top<=s&&s<u.bottom&&(o=a,i=s,r=!0)}),n(e,"ontouchmove"in e?"touchmove":"mousemove",function(n){var a="ontouchmove"in e?n.touches[0]:n,s=a.clientX,u=a.clientY;if(r){var c=100/e.height,f=c*(s-o),l=c*(u-i);// 旋转因子 
// 控制Y轴旋转角度在-90至90度之间，防止万向锁问题
t[0]=Math.max(Math.min(t[0]+l,90),-90),t[1]=t[1]+f}o=s,i=u}),n(e,"ontouchend"in e?"touchend":"mouseup",function(e){r=!1})}},
/***/"./src/views/fpviewer/data.js":
/*!************************************!*\
  !*** ./src/views/fpviewer/data.js ***!
  \************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// import niutouObj from "res_gl/model/niutou.obj.js";
// const OBJ = require('webgl-obj-loader');
t.initNiuModelData=function(){
// console.log(niutouObj);
// var mesh = new OBJ.Mesh(niutouObj);
// console.log(mesh);
},t.initCubeData=function(){return{vertices:new Float32Array([// Vertex coordinates
1,1,1,-1,1,1,-1,-1,1,1,-1,1,// v0-v1-v2-v3 front
1,1,1,1,-1,1,1,-1,-1,1,1,-1,// v0-v3-v4-v5 right
1,1,1,1,1,-1,-1,1,-1,-1,1,1,// v0-v5-v6-v1 up
-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,// v1-v6-v7-v2 left
-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,// v7-v4-v3-v2 down
1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),texCoords:new Float32Array([// Texture coordinates
1,1,0,1,0,0,1,0,// v0-v1-v2-v3 front
0,1,0,0,1,0,1,1,// v0-v3-v4-v5 right
1,0,1,1,0,1,0,0,// v0-v5-v6-v1 up
1,1,0,1,0,0,1,0,// v1-v6-v7-v2 left
0,0,1,0,1,1,0,1,// v7-v4-v3-v2 down
0,0,1,0,1,1,0,1]),indices:new Uint8Array([0,1,2,0,2,3,// front
4,5,6,4,6,7,// right
8,9,10,8,10,11,// up
12,13,14,12,14,15,// left
16,17,18,16,18,19,// down
20,21,22,20,22,23])}}},
/***/"./src/views/fpviewer/index.js":
/*!*************************************!*\
  !*** ./src/views/fpviewer/index.js ***!
  \*************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! vendor_gl/cuon-utils */"./src/vendor/webgl/cuon-utils.js"),o=r(/*! vendor_gl/cuon-matrix */"./src/vendor/webgl/cuon-matrix.js"),i=f(r(/*! shader_gl/fpviewer/TestShader */"./src/components/shader/fpviewer/TestShader.js")),a=f(r(/*! fpviewer/buffer */"./src/views/fpviewer/buffer.js")),s=r(/*! fpviewer/data */"./src/views/fpviewer/data.js"),u=f(r(/*! fpviewer/texture */"./src/views/fpviewer/texture.js")),c=f(r(/*! fpviewer/click_rotate_obj */"./src/views/fpviewer/click_rotate_obj.js"));function f(e){return e&&e.__esModule?e:{default:e}}
// 记录立方体的变换矩阵
var l=new o.Matrix4,d=new o.Vector3([3,3,7]),m=Math.pow(d.elements[0],2)+Math.pow(d.elements[1],2)+Math.pow(d.elements[2],2),p=void 0,h=void 0,v=void 0,b=function(e,t,r,n,o){l.set(r),l.rotate(o[0],1,0,0),l.rotate(o[1],0,1,0),e.uniformMatrix4fv(n,!1,l.elements),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawElements(e.TRIANGLES,t,e.UNSIGNED_BYTE,0)};
// camera view point
/**
 * 计算相机 fov 的函数
 * @param d : 在相机前方 d 距离
 * @param w : 想要看到最大正方形区域边长为 w
 * @param r : 屏幕宽高比
 */
function g(e,t,r){var n=t;return r<1&&(n/=r),2*Math.atan(n/e/2)*(180/Math.PI)}var w=function(){h.width=window.innerWidth,h.height=window.innerHeight;
// 适配多种屏幕
var e=g(m,56,h.width/h.height);v.setPerspective(e,h.width/h.height,.1,1e3),v.lookAt(3,3,7,0,0,0,0,1,0),p.viewport(0,0,h.width,h.height),document.body.style.width=window.innerWidth+"px",document.body.style.height=window.innerHeight+"px"};t.default=function(e,t){(h=document.createElement("canvas"))||(console.log("no read element"),t()),h.width=window.innerWidth,h.height=window.innerHeight,(p=(0,n.getWebGLContext)(h))||(console.log("no read rendering context for webgl"),t()),(0,n.initShaders)(p,i.default.vertexShader,i.default.fragmentShader)||(console.log("Failed to intialize shaders."),t());var r=(0,s.initCubeData)(),f=r.indices.length;(0,a.default)(p,r)||(console.log("failed to set vertices"),t()),p.clearColor(0,0,0,1),p.enable(p.DEPTH_TEST);var l=p.getUniformLocation(p.program,"u_MVPMatrix");v=new o.Matrix4;
// 适配多种屏幕
var y=g(m,56,h.width/h.height);v.setPerspective(y,h.width/h.height,.1,1e3),v.lookAt(d.elements[0],d.elements[1],d.elements[2],0,0,0,0,1,0);var E=[0,0];// [绕x轴旋转角度，绕y轴旋转角度]
(0,c.default)(h,E),(0,u.default)(p,f)||(console.log("not intialize texture"),t());!function e(){b(p,f,v,l,E),requestAnimationFrame(e)}(),window.addEventListener("resize",w,!1),e(h)}},
/***/"./src/views/fpviewer/texture.js":
/*!***************************************!*\
  !*** ./src/views/fpviewer/texture.js ***!
  \***************************************/
/*! no static exports found */
/***/function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! res_gl/img/sky.jpg */"./src/assets/img/sky.jpg"));t.default=function(e,t){
// 创建纹理对象
var r=e.createTexture();if(!r)return console.log("not create texture object"),!1;var o=e.getUniformLocation(e.program,"u_Sampler"),i=new Image;return i.onload=function(){!function(e,t,r,n,o){
// y轴翻转图片
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),
// 激活0号纹理
e.activeTexture(e.TEXTURE0),
// 绑定成2D纹理
e.bindTexture(e.TEXTURE_2D,r),
// 设置纹理参数
e.texParameterf(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),
// 测试其他的纹理填充模式
// 垂直方向镜像重复填充
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
// // 水平方向去取边缘值作为填充值
// 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// 设置纹理图像参数
e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,o),
// 将纹理单元设置到采样器对象
e.uniform1i(n,0)}(e,0,r,o,i)},i.src=n.default,!0}}
/******/});
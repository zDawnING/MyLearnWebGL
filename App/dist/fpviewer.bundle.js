/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fpviewer_index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style/common/commom.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/common/commom.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n.blue_btn {\n\tdisplay: block;\n    position: fixed;\n    right: .76923077em;\n    bottom: .76923077em;\n    color: #fff;\n    background-color: #347be6;\n    line-height: 1;\n    font-size: 1.07692308em;\n    padding: .61538462em 1.23076923em;\n    z-index: 10000;\n    border-radius: .30769231em;\n    box-shadow: 0 0 0.61538462em rgba(0,0,0,.4);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "./src/assets/img/sky.jpg":
/*!********************************!*\
  !*** ./src/assets/img/sky.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sky.2b11efd6.jpg";

/***/ }),

/***/ "./src/components/shader/fpviewer/TestShader.js":
/*!******************************************************!*\
  !*** ./src/components/shader/fpviewer/TestShader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 测试shader
 * @type {Object}
 */
var TestShader = {
	// 顶点着色器
	vertexShader: ["attribute vec4 a_Position;", "attribute vec2 a_TexCoord;", "uniform mat4 u_MVPMatrix;", "varying vec2 v_TexCoord;", "void main(){", "gl_Position = u_MVPMatrix * a_Position;", "v_TexCoord = a_TexCoord;", "}"].join("\n"),
	// 片元着色器
	fragmentShader: ["#ifdef GL_ES", "precision mediump float;", "#endif", "uniform sampler2D u_Sampler;", "varying vec2 v_TexCoord;", "void main(){", "gl_FragColor = texture2D(u_Sampler, v_TexCoord);", "}"].join("\n")
};

exports.default = TestShader;

/***/ }),

/***/ "./src/fpviewer_index.js":
/*!*******************************!*\
  !*** ./src/fpviewer_index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! fpviewer/index */ "./src/views/fpviewer/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ./style/common/commom.css */ "./src/style/common/commom.css");

new Promise(_index2.default).then(function (canvas) {
	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
	document.getElementById("app").appendChild(canvas);
});

/***/ }),

/***/ "./src/style/common/commom.css":
/*!*************************************!*\
  !*** ./src/style/common/commom.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./commom.css */ "./node_modules/css-loader/index.js!./src/style/common/commom.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/vendor/webgl/cuon-matrix.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/cuon-matrix.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var Matrix4 = exports.Matrix4 = function Matrix4(opt_src) {
  var i, s, d;
  if (opt_src && (typeof opt_src === 'undefined' ? 'undefined' : _typeof(opt_src)) === 'object' && opt_src.hasOwnProperty('elements')) {
    s = opt_src.elements;
    d = new Float32Array(16);
    for (i = 0; i < 16; ++i) {
      d[i] = s[i];
    }
    this.elements = d;
  } else {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
};

/**
 * Set the identity matrix.
 * @return this
 */
Matrix4.prototype.setIdentity = function () {
  var e = this.elements;
  e[0] = 1;e[4] = 0;e[8] = 0;e[12] = 0;
  e[1] = 0;e[5] = 1;e[9] = 0;e[13] = 0;
  e[2] = 0;e[6] = 0;e[10] = 1;e[14] = 0;
  e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  return this;
};

/**
 * Copy matrix.
 * @param src source matrix
 * @return this
 */
Matrix4.prototype.set = function (src) {
  var i, s, d;

  s = src.elements;
  d = this.elements;

  if (s === d) {
    return;
  }

  for (i = 0; i < 16; ++i) {
    d[i] = s[i];
  }

  return this;
};

/**
 * Multiply the matrix from the right.
 * @param other The multiply matrix
 * @return this
 */
Matrix4.prototype.concat = function (other) {
  var i, e, a, b, ai0, ai1, ai2, ai3;

  // Calculate e = a * b
  e = this.elements;
  a = this.elements;
  b = other.elements;

  // If e equals b, copy b to temporary matrix.
  if (e === b) {
    b = new Float32Array(16);
    for (i = 0; i < 16; ++i) {
      b[i] = e[i];
    }
  }

  for (i = 0; i < 4; i++) {
    ai0 = a[i];ai1 = a[i + 4];ai2 = a[i + 8];ai3 = a[i + 12];
    e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
    e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
    e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
    e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
  }

  return this;
};
Matrix4.prototype.multiply = Matrix4.prototype.concat;

/**
 * Multiply the three-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
Matrix4.prototype.multiplyVector3 = function (pos) {
  var e = this.elements;
  var p = pos.elements;
  var v = new Vector3();
  var result = v.elements;

  result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
  result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
  result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];

  return v;
};

/**
 * Multiply the four-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
Matrix4.prototype.multiplyVector4 = function (pos) {
  var e = this.elements;
  var p = pos.elements;
  var v = new Vector4();
  var result = v.elements;

  result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12];
  result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13];
  result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14];
  result[3] = p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15];

  return v;
};

/**
 * Transpose the matrix.
 * @return this
 */
Matrix4.prototype.transpose = function () {
  var e, t;

  e = this.elements;

  t = e[1];e[1] = e[4];e[4] = t;
  t = e[2];e[2] = e[8];e[8] = t;
  t = e[3];e[3] = e[12];e[12] = t;
  t = e[6];e[6] = e[9];e[9] = t;
  t = e[7];e[7] = e[13];e[13] = t;
  t = e[11];e[11] = e[14];e[14] = t;

  return this;
};

/**
 * Calculate the inverse matrix of specified matrix, and set to this.
 * @param other The source matrix
 * @return this
 */
Matrix4.prototype.setInverseOf = function (other) {
  var i, s, d, inv, det;

  s = other.elements;
  d = this.elements;
  inv = new Float32Array(16);

  inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
  inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
  inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
  inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];

  inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
  inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
  inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
  inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];

  inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
  inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
  inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
  inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];

  inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
  inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
  inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
  inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];

  det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
  if (det === 0) {
    return this;
  }

  det = 1 / det;
  for (i = 0; i < 16; i++) {
    d[i] = inv[i] * det;
  }

  return this;
};

/**
 * Calculate the inverse matrix of this, and set to this.
 * @return this
 */
Matrix4.prototype.invert = function () {
  return this.setInverseOf(this);
};

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
Matrix4.prototype.setOrtho = function (left, right, bottom, top, near, far) {
  var e, rw, rh, rd;

  if (left === right || bottom === top || near === far) {
    throw 'null frustum';
  }

  rw = 1 / (right - left);
  rh = 1 / (top - bottom);
  rd = 1 / (far - near);

  e = this.elements;

  e[0] = 2 * rw;
  e[1] = 0;
  e[2] = 0;
  e[3] = 0;

  e[4] = 0;
  e[5] = 2 * rh;
  e[6] = 0;
  e[7] = 0;

  e[8] = 0;
  e[9] = 0;
  e[10] = -2 * rd;
  e[11] = 0;

  e[12] = -(right + left) * rw;
  e[13] = -(top + bottom) * rh;
  e[14] = -(far + near) * rd;
  e[15] = 1;

  return this;
};

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
Matrix4.prototype.ortho = function (left, right, bottom, top, near, far) {
  return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
};

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
Matrix4.prototype.setFrustum = function (left, right, bottom, top, near, far) {
  var e, rw, rh, rd;

  if (left === right || top === bottom || near === far) {
    throw 'null frustum';
  }
  if (near <= 0) {
    throw 'near <= 0';
  }
  if (far <= 0) {
    throw 'far <= 0';
  }

  rw = 1 / (right - left);
  rh = 1 / (top - bottom);
  rd = 1 / (far - near);

  e = this.elements;

  e[0] = 2 * near * rw;
  e[1] = 0;
  e[2] = 0;
  e[3] = 0;

  e[4] = 0;
  e[5] = 2 * near * rh;
  e[6] = 0;
  e[7] = 0;

  e[8] = (right + left) * rw;
  e[9] = (top + bottom) * rh;
  e[10] = -(far + near) * rd;
  e[11] = -1;

  e[12] = 0;
  e[13] = 0;
  e[14] = -2 * near * far * rd;
  e[15] = 0;

  return this;
};

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
Matrix4.prototype.frustum = function (left, right, bottom, top, near, far) {
  return this.concat(new Matrix4().setFrustum(left, right, bottom, top, near, far));
};

/**
 * Set the perspective projection matrix by fovy and aspect.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.setPerspective = function (fovy, aspect, near, far) {
  var e, rd, s, ct;

  if (near === far || aspect === 0) {
    throw 'null frustum';
  }
  if (near <= 0) {
    throw 'near <= 0';
  }
  if (far <= 0) {
    throw 'far <= 0';
  }

  fovy = Math.PI * fovy / 180 / 2;
  s = Math.sin(fovy);
  if (s === 0) {
    throw 'null frustum';
  }

  rd = 1 / (far - near);
  ct = Math.cos(fovy) / s;

  e = this.elements;

  e[0] = ct / aspect;
  e[1] = 0;
  e[2] = 0;
  e[3] = 0;

  e[4] = 0;
  e[5] = ct;
  e[6] = 0;
  e[7] = 0;

  e[8] = 0;
  e[9] = 0;
  e[10] = -(far + near) * rd;
  e[11] = -1;

  e[12] = 0;
  e[13] = 0;
  e[14] = -2 * near * far * rd;
  e[15] = 0;

  return this;
};

/**
 * Multiply the perspective projection matrix from the right.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.perspective = function (fovy, aspect, near, far) {
  return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
};

/**
 * Set the matrix for scaling.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
Matrix4.prototype.setScale = function (x, y, z) {
  var e = this.elements;
  e[0] = x;e[4] = 0;e[8] = 0;e[12] = 0;
  e[1] = 0;e[5] = y;e[9] = 0;e[13] = 0;
  e[2] = 0;e[6] = 0;e[10] = z;e[14] = 0;
  e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  return this;
};

/**
 * Multiply the matrix for scaling from the right.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
Matrix4.prototype.scale = function (x, y, z) {
  var e = this.elements;
  e[0] *= x;e[4] *= y;e[8] *= z;
  e[1] *= x;e[5] *= y;e[9] *= z;
  e[2] *= x;e[6] *= y;e[10] *= z;
  e[3] *= x;e[7] *= y;e[11] *= z;
  return this;
};

/**
 * Set the matrix for translation.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
Matrix4.prototype.setTranslate = function (x, y, z) {
  var e = this.elements;
  e[0] = 1;e[4] = 0;e[8] = 0;e[12] = x;
  e[1] = 0;e[5] = 1;e[9] = 0;e[13] = y;
  e[2] = 0;e[6] = 0;e[10] = 1;e[14] = z;
  e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  return this;
};

/**
 * Multiply the matrix for translation from the right.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
Matrix4.prototype.translate = function (x, y, z) {
  var e = this.elements;
  e[12] += e[0] * x + e[4] * y + e[8] * z;
  e[13] += e[1] * x + e[5] * y + e[9] * z;
  e[14] += e[2] * x + e[6] * y + e[10] * z;
  e[15] += e[3] * x + e[7] * y + e[11] * z;
  return this;
};

/**
 * Set the matrix for rotation.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
Matrix4.prototype.setRotate = function (angle, x, y, z) {
  var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;

  angle = Math.PI * angle / 180;
  e = this.elements;

  s = Math.sin(angle);
  c = Math.cos(angle);

  if (0 !== x && 0 === y && 0 === z) {
    // Rotation around X axis
    if (x < 0) {
      s = -s;
    }
    e[0] = 1;e[4] = 0;e[8] = 0;e[12] = 0;
    e[1] = 0;e[5] = c;e[9] = -s;e[13] = 0;
    e[2] = 0;e[6] = s;e[10] = c;e[14] = 0;
    e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  } else if (0 === x && 0 !== y && 0 === z) {
    // Rotation around Y axis
    if (y < 0) {
      s = -s;
    }
    e[0] = c;e[4] = 0;e[8] = s;e[12] = 0;
    e[1] = 0;e[5] = 1;e[9] = 0;e[13] = 0;
    e[2] = -s;e[6] = 0;e[10] = c;e[14] = 0;
    e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  } else if (0 === x && 0 === y && 0 !== z) {
    // Rotation around Z axis
    if (z < 0) {
      s = -s;
    }
    e[0] = c;e[4] = -s;e[8] = 0;e[12] = 0;
    e[1] = s;e[5] = c;e[9] = 0;e[13] = 0;
    e[2] = 0;e[6] = 0;e[10] = 1;e[14] = 0;
    e[3] = 0;e[7] = 0;e[11] = 0;e[15] = 1;
  } else {
    // Rotation around another axis
    len = Math.sqrt(x * x + y * y + z * z);
    if (len !== 1) {
      rlen = 1 / len;
      x *= rlen;
      y *= rlen;
      z *= rlen;
    }
    nc = 1 - c;
    xy = x * y;
    yz = y * z;
    zx = z * x;
    xs = x * s;
    ys = y * s;
    zs = z * s;

    e[0] = x * x * nc + c;
    e[1] = xy * nc + zs;
    e[2] = zx * nc - ys;
    e[3] = 0;

    e[4] = xy * nc - zs;
    e[5] = y * y * nc + c;
    e[6] = yz * nc + xs;
    e[7] = 0;

    e[8] = zx * nc + ys;
    e[9] = yz * nc - xs;
    e[10] = z * z * nc + c;
    e[11] = 0;

    e[12] = 0;
    e[13] = 0;
    e[14] = 0;
    e[15] = 1;
  }

  return this;
};

/**
 * Multiply the matrix for rotation from the right.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
Matrix4.prototype.rotate = function (angle, x, y, z) {
  return this.concat(new Matrix4().setRotate(angle, x, y, z));
};

/**
 * Set the viewing matrix.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
Matrix4.prototype.setLookAt = function (eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;

  fx = centerX - eyeX;
  fy = centerY - eyeY;
  fz = centerZ - eyeZ;

  // Normalize f.
  rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
  fx *= rlf;
  fy *= rlf;
  fz *= rlf;

  // Calculate cross product of f and up.
  sx = fy * upZ - fz * upY;
  sy = fz * upX - fx * upZ;
  sz = fx * upY - fy * upX;

  // Normalize s.
  rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
  sx *= rls;
  sy *= rls;
  sz *= rls;

  // Calculate cross product of s and f.
  ux = sy * fz - sz * fy;
  uy = sz * fx - sx * fz;
  uz = sx * fy - sy * fx;

  // Set to this.
  e = this.elements;
  e[0] = sx;
  e[1] = ux;
  e[2] = -fx;
  e[3] = 0;

  e[4] = sy;
  e[5] = uy;
  e[6] = -fy;
  e[7] = 0;

  e[8] = sz;
  e[9] = uz;
  e[10] = -fz;
  e[11] = 0;

  e[12] = 0;
  e[13] = 0;
  e[14] = 0;
  e[15] = 1;

  // Translate.
  return this.translate(-eyeX, -eyeY, -eyeZ);
};

/**
 * Multiply the viewing matrix from the right.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
Matrix4.prototype.lookAt = function (eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  return this.concat(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
};

/**
 * Multiply the matrix for project vertex to plane from the right.
 * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
 * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
 * @return this
 */
Matrix4.prototype.dropShadow = function (plane, light) {
  var mat = new Matrix4();
  var e = mat.elements;

  var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];

  e[0] = dot - light[0] * plane[0];
  e[1] = -light[1] * plane[0];
  e[2] = -light[2] * plane[0];
  e[3] = -light[3] * plane[0];

  e[4] = -light[0] * plane[1];
  e[5] = dot - light[1] * plane[1];
  e[6] = -light[2] * plane[1];
  e[7] = -light[3] * plane[1];

  e[8] = -light[0] * plane[2];
  e[9] = -light[1] * plane[2];
  e[10] = dot - light[2] * plane[2];
  e[11] = -light[3] * plane[2];

  e[12] = -light[0] * plane[3];
  e[13] = -light[1] * plane[3];
  e[14] = -light[2] * plane[3];
  e[15] = dot - light[3] * plane[3];

  return this.concat(mat);
};

/**
 * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
 * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
 * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
 * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
 * @return this
 */
Matrix4.prototype.dropShadowDirectionally = function (normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
  var a = planeX * normX + planeY * normY + planeZ * normZ;
  return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
};

/**
 * Constructor of Vector3
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */
var Vector3 = exports.Vector3 = function Vector3(opt_src) {
  var v = new Float32Array(3);
  if (opt_src && (typeof opt_src === 'undefined' ? 'undefined' : _typeof(opt_src)) === 'object') {
    v[0] = opt_src[0];v[1] = opt_src[1];v[2] = opt_src[2];
  }
  this.elements = v;
};

/**
  * Normalize.
  * @return this
  */
Vector3.prototype.normalize = function () {
  var v = this.elements;
  var c = v[0],
      d = v[1],
      e = v[2],
      g = Math.sqrt(c * c + d * d + e * e);
  if (g) {
    if (g == 1) return this;
  } else {
    v[0] = 0;v[1] = 0;v[2] = 0;
    return this;
  }
  g = 1 / g;
  v[0] = c * g;v[1] = d * g;v[2] = e * g;
  return this;
};

/**
 * Constructor of Vector4
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */
var Vector4 = exports.Vector4 = function Vector4(opt_src) {
  var v = new Float32Array(4);
  if (opt_src && (typeof opt_src === 'undefined' ? 'undefined' : _typeof(opt_src)) === 'object') {
    v[0] = opt_src[0];v[1] = opt_src[1];v[2] = opt_src[2];v[3] = opt_src[3];
  }
  this.elements = v;
};

/***/ }),

/***/ "./src/vendor/webgl/cuon-utils.js":
/*!****************************************!*\
  !*** ./src/vendor/webgl/cuon-utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initShaders = initShaders;
exports.createProgram = createProgram;
exports.loadShader = loadShader;
exports.getWebGLContext = getWebGLContext;

var _webglUtils = __webpack_require__(/*! vendor_gl/webgl-utils */ "./src/vendor/webgl/webgl-utils.js");

var _webglUtils2 = _interopRequireDefault(_webglUtils);

var _webglDebug = __webpack_require__(/*! vendor_gl/webgl-debug */ "./src/vendor/webgl/webgl-debug.js");

var _webglDebug2 = _interopRequireDefault(_webglDebug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current 
 */
function initShaders(gl, vshader, fshader) {
  var program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.log('Failed to create program');
    return false;
  }

  gl.useProgram(program);
  gl.program = program;

  return true;
}

/**
 * Create the linked program object
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */
function createProgram(gl, vshader, fshader) {
  // Create shader object
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) {
    return null;
  }

  // Create a program object
  var program = gl.createProgram();
  if (!program) {
    return null;
  }

  // Attach the shader objects
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // Link the program object
  gl.linkProgram(program);

  // Check the result of linking
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log('Failed to link program: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
}

/**
 * Create a shader object
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
function loadShader(gl, type, source) {
  // Create shader object
  var shader = gl.createShader(type);
  if (shader == null) {
    console.log('unable to create shader');
    return null;
  }

  // Set the shader program
  gl.shaderSource(shader, source);

  // Compile the shader
  gl.compileShader(shader);

  // Check the result of compilation
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log('Failed to compile shader: ' + error);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

/** 
 * Initialize and get the rendering for WebGL
 * @param canvas <cavnas> element
 * @param opt_debug flag to initialize the context for debugging
 * @return the rendering context for WebGL
 */
function getWebGLContext(canvas, opt_debug) {
  // Get the rendering context for WebGL
  var gl = _webglUtils2.default.setupWebGL(canvas);
  if (!gl) return null;

  // if opt_debug is explicitly false, create the context for debugging
  if (arguments.length < 2 || opt_debug) {
    gl = _webglDebug2.default.makeDebugContext(gl);
  }

  return gl;
}

/***/ }),

/***/ "./src/vendor/webgl/webgl-debug.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/webgl-debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//Copyright (c) 2009 The Chromium Authors. All rights reserved.
//Use of this source code is governed by a BSD-style license that can be
//found in the LICENSE file.

// Various functions for helping debug WebGL apps.

var WebGLDebugUtils = function WebGLDebugUtils() {

  /**
   * Wrapped logging function.
   * @param {string} msg Message to log.
   */
  var log = function log(msg) {
    if (window.console && window.console.log) {
      window.console.log(msg);
    }
  };

  /**
   * Which arguements are enums.
   * @type {!Object.<number, string>}
   */
  var glValidEnumContexts = {

    // Generic setters and getters

    'enable': { 0: true },
    'disable': { 0: true },
    'getParameter': { 0: true },

    // Rendering

    'drawArrays': { 0: true },
    'drawElements': { 0: true, 2: true },

    // Shaders

    'createShader': { 0: true },
    'getShaderParameter': { 1: true },
    'getProgramParameter': { 1: true },

    // Vertex attributes

    'getVertexAttrib': { 1: true },
    'vertexAttribPointer': { 2: true },

    // Textures

    'bindTexture': { 0: true },
    'activeTexture': { 0: true },
    'getTexParameter': { 0: true, 1: true },
    'texParameterf': { 0: true, 1: true },
    'texParameteri': { 0: true, 1: true, 2: true },
    'texImage2D': { 0: true, 2: true, 6: true, 7: true },
    'texSubImage2D': { 0: true, 6: true, 7: true },
    'copyTexImage2D': { 0: true, 2: true },
    'copyTexSubImage2D': { 0: true },
    'generateMipmap': { 0: true },

    // Buffer objects

    'bindBuffer': { 0: true },
    'bufferData': { 0: true, 2: true },
    'bufferSubData': { 0: true },
    'getBufferParameter': { 0: true, 1: true },

    // Renderbuffers and framebuffers

    'pixelStorei': { 0: true, 1: true },
    'readPixels': { 4: true, 5: true },
    'bindRenderbuffer': { 0: true },
    'bindFramebuffer': { 0: true },
    'checkFramebufferStatus': { 0: true },
    'framebufferRenderbuffer': { 0: true, 1: true, 2: true },
    'framebufferTexture2D': { 0: true, 1: true, 2: true },
    'getFramebufferAttachmentParameter': { 0: true, 1: true, 2: true },
    'getRenderbufferParameter': { 0: true, 1: true },
    'renderbufferStorage': { 0: true, 1: true },

    // Frame buffer operations (clear, blend, depth test, stencil)

    'clear': { 0: true },
    'depthFunc': { 0: true },
    'blendFunc': { 0: true, 1: true },
    'blendFuncSeparate': { 0: true, 1: true, 2: true, 3: true },
    'blendEquation': { 0: true },
    'blendEquationSeparate': { 0: true, 1: true },
    'stencilFunc': { 0: true },
    'stencilFuncSeparate': { 0: true, 1: true },
    'stencilMaskSeparate': { 0: true },
    'stencilOp': { 0: true, 1: true, 2: true },
    'stencilOpSeparate': { 0: true, 1: true, 2: true, 3: true },

    // Culling

    'cullFace': { 0: true },
    'frontFace': { 0: true }
  };

  /**
   * Map of numbers to names.
   * @type {Object}
   */
  var glEnums = null;

  /**
   * Initializes this module. Safe to call more than once.
   * @param {!WebGLRenderingContext} ctx A WebGL context. If
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */
  function init(ctx) {
    if (glEnums == null) {
      glEnums = {};
      for (var propertyName in ctx) {
        if (typeof ctx[propertyName] == 'number') {
          glEnums[ctx[propertyName]] = propertyName;
        }
      }
    }
  }

  /**
   * Checks the utils have been initialized.
   */
  function checkInit() {
    if (glEnums == null) {
      throw 'WebGLDebugUtils.init(ctx) not called';
    }
  }

  /**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */
  function mightBeEnum(value) {
    checkInit();
    return glEnums[value] !== undefined;
  }

  /**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */
  function glEnumToString(value) {
    checkInit();
    var name = glEnums[value];
    return name !== undefined ? name : "*UNKNOWN WebGL ENUM (0x" + value.toString(16) + ")";
  }

  /**
   * Returns the string version of a WebGL argument.
   * Attempts to convert enum arguments to strings.
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */
  function glFunctionArgToString(functionName, argumentIndex, value) {
    var funcInfo = glValidEnumContexts[functionName];
    if (funcInfo !== undefined) {
      if (funcInfo[argumentIndex]) {
        return glEnumToString(value);
      }
    }
    return value.toString();
  }

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
   */
  function makeDebugContext(ctx, opt_onErrorFunc) {
    init(ctx);
    opt_onErrorFunc = opt_onErrorFunc || function (err, functionName, args) {
      // apparently we can't do args.join(",");
      var argStr = "";
      for (var ii = 0; ii < args.length; ++ii) {
        argStr += (ii == 0 ? '' : ', ') + glFunctionArgToString(functionName, ii, args[ii]);
      }
      log("WebGL error " + glEnumToString(err) + " in " + functionName + "(" + argStr + ")");
    };

    // Holds booleans for each GL error so after we get the error ourselves
    // we can still return it to the client app.
    var glErrorShadow = {};

    // Makes a function that calls a WebGL function and then calls getError.
    function makeErrorWrapper(ctx, functionName) {
      return function () {
        var result = ctx[functionName].apply(ctx, arguments);
        var err = ctx.getError();
        if (err != 0) {
          glErrorShadow[err] = true;
          opt_onErrorFunc(err, functionName, arguments);
        }
        return result;
      };
    }

    // Make a an object that has a copy of every property of the WebGL context
    // but wraps all functions.
    var wrapper = {};
    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'function') {
        wrapper[propertyName] = makeErrorWrapper(ctx, propertyName);
      } else {
        wrapper[propertyName] = ctx[propertyName];
      }
    }

    // Override the getError function with one that returns our saved results.
    wrapper.getError = function () {
      for (var err in glErrorShadow) {
        if (glErrorShadow[err]) {
          glErrorShadow[err] = false;
          return err;
        }
      }
      return ctx.NO_ERROR;
    };

    return wrapper;
  }

  function resetToInitialState(ctx) {
    var numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS);
    var tmp = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, tmp);
    for (var ii = 0; ii < numAttribs; ++ii) {
      ctx.disableVertexAttribArray(ii);
      ctx.vertexAttribPointer(ii, 4, ctx.FLOAT, false, 0, 0);
      ctx.vertexAttrib1f(ii, 0);
    }
    ctx.deleteBuffer(tmp);

    var numTextureUnits = ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS);
    for (var ii = 0; ii < numTextureUnits; ++ii) {
      ctx.activeTexture(ctx.TEXTURE0 + ii);
      ctx.bindTexture(ctx.TEXTURE_CUBE_MAP, null);
      ctx.bindTexture(ctx.TEXTURE_2D, null);
    }

    ctx.activeTexture(ctx.TEXTURE0);
    ctx.useProgram(null);
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null);
    ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, null);
    ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
    ctx.bindRenderbuffer(ctx.RENDERBUFFER, null);
    ctx.disable(ctx.BLEND);
    ctx.disable(ctx.CULL_FACE);
    ctx.disable(ctx.DEPTH_TEST);
    ctx.disable(ctx.DITHER);
    ctx.disable(ctx.SCISSOR_TEST);
    ctx.blendColor(0, 0, 0, 0);
    ctx.blendEquation(ctx.FUNC_ADD);
    ctx.blendFunc(ctx.ONE, ctx.ZERO);
    ctx.clearColor(0, 0, 0, 0);
    ctx.clearDepth(1);
    ctx.clearStencil(-1);
    ctx.colorMask(true, true, true, true);
    ctx.cullFace(ctx.BACK);
    ctx.depthFunc(ctx.LESS);
    ctx.depthMask(true);
    ctx.depthRange(0, 1);
    ctx.frontFace(ctx.CCW);
    ctx.hint(ctx.GENERATE_MIPMAP_HINT, ctx.DONT_CARE);
    ctx.lineWidth(1);
    ctx.pixelStorei(ctx.PACK_ALIGNMENT, 4);
    ctx.pixelStorei(ctx.UNPACK_ALIGNMENT, 4);
    ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
    ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    // TODO: Delete this IF.
    if (ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL) {
      ctx.pixelStorei(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL, ctx.BROWSER_DEFAULT_WEBGL);
    }
    ctx.polygonOffset(0, 0);
    ctx.sampleCoverage(1, false);
    ctx.scissor(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.stencilFunc(ctx.ALWAYS, 0, 0xFFFFFFFF);
    ctx.stencilMask(0xFFFFFFFF);
    ctx.stencilOp(ctx.KEEP, ctx.KEEP, ctx.KEEP);
    ctx.viewport(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);

    // TODO: This should NOT be needed but Firefox fails with 'hint'
    while (ctx.getError()) {}
  }

  function makeLostContextSimulatingContext(ctx) {
    var wrapper_ = {};
    var contextId_ = 1;
    var contextLost_ = false;
    var resourceId_ = 0;
    var resourceDb_ = [];
    var onLost_ = undefined;
    var onRestored_ = undefined;
    var nextOnRestored_ = undefined;

    // Holds booleans for each GL error so can simulate errors.
    var glErrorShadow_ = {};

    function isWebGLObject(obj) {
      //return false;
      return obj instanceof WebGLBuffer || obj instanceof WebGLFramebuffer || obj instanceof WebGLProgram || obj instanceof WebGLRenderbuffer || obj instanceof WebGLShader || obj instanceof WebGLTexture;
    }

    function checkResources(args) {
      for (var ii = 0; ii < args.length; ++ii) {
        var arg = args[ii];
        if (isWebGLObject(arg)) {
          return arg.__webglDebugContextLostId__ == contextId_;
        }
      }
      return true;
    }

    function clearErrors() {
      var k = Object.keys(glErrorShadow_);
      for (var ii = 0; ii < k.length; ++ii) {
        delete glErrorShdow_[k];
      }
    }

    // Makes a function that simulates WebGL when out of context.
    function makeLostContextWrapper(ctx, functionName) {
      var f = ctx[functionName];
      return function () {
        // Only call the functions if the context is not lost.
        if (!contextLost_) {
          if (!checkResources(arguments)) {
            glErrorShadow_[ctx.INVALID_OPERATION] = true;
            return;
          }
          var result = f.apply(ctx, arguments);
          return result;
        }
      };
    }

    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'function') {
        wrapper_[propertyName] = makeLostContextWrapper(ctx, propertyName);
      } else {
        wrapper_[propertyName] = ctx[propertyName];
      }
    }

    function makeWebGLContextEvent(statusMessage) {
      return { statusMessage: statusMessage };
    }

    function freeResources() {
      for (var ii = 0; ii < resourceDb_.length; ++ii) {
        var resource = resourceDb_[ii];
        if (resource instanceof WebGLBuffer) {
          ctx.deleteBuffer(resource);
        } else if (resource instanceof WebctxFramebuffer) {
          ctx.deleteFramebuffer(resource);
        } else if (resource instanceof WebctxProgram) {
          ctx.deleteProgram(resource);
        } else if (resource instanceof WebctxRenderbuffer) {
          ctx.deleteRenderbuffer(resource);
        } else if (resource instanceof WebctxShader) {
          ctx.deleteShader(resource);
        } else if (resource instanceof WebctxTexture) {
          ctx.deleteTexture(resource);
        }
      }
    }

    wrapper_.loseContext = function () {
      if (!contextLost_) {
        contextLost_ = true;
        ++contextId_;
        while (ctx.getError()) {}
        clearErrors();
        glErrorShadow_[ctx.CONTEXT_LOST_WEBGL] = true;
        setTimeout(function () {
          if (onLost_) {
            onLost_(makeWebGLContextEvent("context lost"));
          }
        }, 0);
      }
    };

    wrapper_.restoreContext = function () {
      if (contextLost_) {
        if (onRestored_) {
          setTimeout(function () {
            freeResources();
            resetToInitialState(ctx);
            contextLost_ = false;
            if (onRestored_) {
              var callback = onRestored_;
              onRestored_ = nextOnRestored_;
              nextOnRestored_ = undefined;
              callback(makeWebGLContextEvent("context restored"));
            }
          }, 0);
        } else {
          throw "You can not restore the context without a listener";
        }
      }
    };

    // Wrap a few functions specially.
    wrapper_.getError = function () {
      if (!contextLost_) {
        var err;
        while (err = ctx.getError()) {
          glErrorShadow_[err] = true;
        }
      }
      for (var err in glErrorShadow_) {
        if (glErrorShadow_[err]) {
          delete glErrorShadow_[err];
          return err;
        }
      }
      return ctx.NO_ERROR;
    };

    var creationFunctions = ["createBuffer", "createFramebuffer", "createProgram", "createRenderbuffer", "createShader", "createTexture"];
    for (var ii = 0; ii < creationFunctions.length; ++ii) {
      var functionName = creationFunctions[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return null;
          }
          var obj = f.apply(ctx, arguments);
          obj.__webglDebugContextLostId__ = contextId_;
          resourceDb_.push(obj);
          return obj;
        };
      }(ctx[functionName]);
    }

    var functionsThatShouldReturnNull = ["getActiveAttrib", "getActiveUniform", "getBufferParameter", "getContextAttributes", "getAttachedShaders", "getFramebufferAttachmentParameter", "getParameter", "getProgramParameter", "getProgramInfoLog", "getRenderbufferParameter", "getShaderParameter", "getShaderInfoLog", "getShaderSource", "getTexParameter", "getUniform", "getUniformLocation", "getVertexAttrib"];
    for (var ii = 0; ii < functionsThatShouldReturnNull.length; ++ii) {
      var functionName = functionsThatShouldReturnNull[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return null;
          }
          return f.apply(ctx, arguments);
        };
      }(wrapper_[functionName]);
    }

    var isFunctions = ["isBuffer", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"];
    for (var ii = 0; ii < isFunctions.length; ++ii) {
      var functionName = isFunctions[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return false;
          }
          return f.apply(ctx, arguments);
        };
      }(wrapper_[functionName]);
    }

    wrapper_.checkFramebufferStatus = function (f) {
      return function () {
        if (contextLost_) {
          return ctx.FRAMEBUFFER_UNSUPPORTED;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.checkFramebufferStatus);

    wrapper_.getAttribLocation = function (f) {
      return function () {
        if (contextLost_) {
          return -1;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.getAttribLocation);

    wrapper_.getVertexAttribOffset = function (f) {
      return function () {
        if (contextLost_) {
          return 0;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.getVertexAttribOffset);

    wrapper_.isContextLost = function () {
      return contextLost_;
    };

    function wrapEvent(listener) {
      if (typeof listener == "function") {
        return listener;
      } else {
        return function (info) {
          listener.handleEvent(info);
        };
      }
    }

    wrapper_.registerOnContextLostListener = function (listener) {
      onLost_ = wrapEvent(listener);
    };

    wrapper_.registerOnContextRestoredListener = function (listener) {
      if (contextLost_) {
        nextOnRestored_ = wrapEvent(listener);
      } else {
        onRestored_ = wrapEvent(listener);
      }
    };

    return wrapper_;
  }

  return {
    /**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
     *    you have more than one context it doesn't matter which one
     *    you pass in, it is only used to pull out constants.
     */
    'init': init,

    /**
     * Returns true or false if value matches any WebGL enum
     * @param {*} value Value to check if it might be an enum.
     * @return {boolean} True if value matches one of the WebGL defined enums
     */
    'mightBeEnum': mightBeEnum,

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
    'glEnumToString': glEnumToString,

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
    'glFunctionArgToString': glFunctionArgToString,

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
    'makeDebugContext': makeDebugContext,

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
    'makeLostContextSimulatingContext': makeLostContextSimulatingContext,

    /**
     * Resets a context to the initial state.
     * @param {!WebGLRenderingContext} ctx The webgl context to
     *     reset.
     */
    'resetToInitialState': resetToInitialState
  };
};

exports.default = WebGLDebugUtils();

/***/ }),

/***/ "./src/vendor/webgl/webgl-utils.js":
/*!*****************************************!*\
  !*** ./src/vendor/webgl/webgl-utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimationFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */

var WebGLUtils = function WebGLUtils() {

  /**
   * Creates the HTLM for a failure message
   * @param {string} canvasContainerId id of container of th
   *        canvas.
   * @return {string} The html.
   */
  var makeFailHTML = function makeFailHTML(msg) {
    return '' + '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + '</div>';
    return '' + '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' + '<td align="center">' + '<div style="display: table-cell; vertical-align: middle;">' + '<div style="">' + msg + '</div>' + '</div>' + '</td></tr></table>';
  };

  /**
   * Mesasge for getting a webgl browser
   * @type {string}
   */
  var GET_A_WEBGL_BROWSER = '' + 'This page requires a browser that supports WebGL.<br/>' + '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';

  /**
   * Mesasge for need better hardware
   * @type {string}
   */
  var OTHER_PROBLEM = '' + "It doesn't appear your computer can support WebGL.<br/>" + '<a href="http://get.webgl.org">Click here for more information.</a>';

  /**
   * Creates a webgl context. If creation fails it will
   * change the contents of the container of the <canvas>
   * tag to an error message with the correct links for WebGL.
   * @param {Element} canvas. The canvas element to create a
   *     context from.
   * @param {WebGLContextCreationAttirbutes} opt_attribs Any
   *     creation attributes you want to pass in.
   * @param {function:(msg)} opt_onError An function to call
   *     if there is an error during creation.
   * @return {WebGLRenderingContext} The created context.
   */
  var setupWebGL = function setupWebGL(canvas, opt_attribs, opt_onError) {
    function handleCreationError(msg) {
      var container = document.getElementsByTagName("body")[0];
      //var container = canvas.parentNode;
      if (container) {
        var str = window.WebGLRenderingContext ? OTHER_PROBLEM : GET_A_WEBGL_BROWSER;
        if (msg) {
          str += "<br/><br/>Status: " + msg;
        }
        container.innerHTML = makeFailHTML(str);
      }
    };

    opt_onError = opt_onError || handleCreationError;

    if (canvas.addEventListener) {
      canvas.addEventListener("webglcontextcreationerror", function (event) {
        opt_onError(event.statusMessage);
      }, false);
    }
    var context = create3DContext(canvas, opt_attribs);
    if (!context) {
      if (!window.WebGLRenderingContext) {
        opt_onError("");
      } else {
        opt_onError("");
      }
    }

    return context;
  };

  /**
   * Creates a webgl context.
   * @param {!Canvas} canvas The canvas tag to get context
   *     from. If one is not passed in one will be created.
   * @return {!WebGLContext} The created context.
   */
  var create3DContext = function create3DContext(canvas, opt_attribs) {
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var context = null;
    for (var ii = 0; ii < names.length; ++ii) {
      try {
        context = canvas.getContext(names[ii], opt_attribs);
      } catch (e) {}
      if (context) {
        break;
      }
    }
    return context;
  };

  return {
    create3DContext: create3DContext,
    setupWebGL: setupWebGL
  };
};

/**
 * Provides requestAnimationFrame in a cross browser
 * way.
 */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();
}

/** * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec. 
 * 
 * Cancels an animation frame request. 
 * Checks for cross-browser support, falls back to clearTimeout. 
 * @param {number}  Animation frame request. */
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearTimeout;
}

exports.default = WebGLUtils();

/***/ }),

/***/ "./src/views/fpviewer/buffer.js":
/*!**************************************!*\
  !*** ./src/views/fpviewer/buffer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var initArrayBuffer = function initArrayBuffer(gl, data, num, type, attribute) {
	var buffer = gl.createBuffer();
	if (!buffer) {
		console.log("not create buffer");
		return false;
	}
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

	var a_attribute = gl.getAttribLocation(gl.program, attribute);
	if (a_attribute < 0) {
		console.log("not find attribute");
		return false;
	}

	gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
	gl.enableVertexAttribArray(a_attribute);

	return true;
};

/**
 * 初始化vertexBuffer对象
 * @param  {[type]} gl [description]
 * @return {[type]}    [description]
 */
var initVertexBuffers = function initVertexBuffers(gl, data) {
	// 创建缓冲区对象
	var indexBuffer = gl.createBuffer();
	if (!indexBuffer) {
		console.log('not create buffer object');
		return false;
	}

	if (!initArrayBuffer(gl, data.vertices, 3, gl.FLOAT, 'a_Position')) return -1;
	if (!initArrayBuffer(gl, data.texCoords, 2, gl.FLOAT, 'a_TexCoord')) return -1;

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data.indices, gl.STATIC_DRAW);

	return true;
};

exports.default = initVertexBuffers;

/***/ }),

/***/ "./src/views/fpviewer/click_rotate_obj.js":
/*!************************************************!*\
  !*** ./src/views/fpviewer/click_rotate_obj.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 适配pc与移动端的鼠标事件
 * @param  {[type]} element [description]
 * @param  {[type]} type    [description]
 * @param  {[type]} handler [description]
 * @return {[type]}         [description]
 */
var addHandler = function addHandler(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, true);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
};

/**
 * 初始化鼠标拖拽事件
 * @param  {[type]} canvas       [description]
 * @param  {[type]} currentAngle [description]
 * @return {[type]}              [description]
 */
var initEventHandlers = function initEventHandlers(canvas, currentAngle) {
  // 默认不拖拽
  var dragging = false;
  // 初始化鼠标最终移动位置坐标
  var lastX = -1,
      lastY = -1;

  var down = 'ontouchstart' in canvas ? 'touchstart' : 'mousedown';
  addHandler(canvas, down, function (e) {
    var ev = 'ontouchstart' in canvas ? e.touches[0] : e;
    var x = ev.clientX,
        y = ev.clientY;
    // 鼠标在canvas内拖动, 获取canvas当前坐标数据
    var rect = ev.target.getBoundingClientRect();
    // 锁定canvas范围内
    if (rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
      lastX = x;lastY = y;
      dragging = true;
    }
  });

  var move = 'ontouchmove' in canvas ? 'touchmove' : 'mousemove';
  addHandler(canvas, move, function (e) {
    var ev = 'ontouchmove' in canvas ? e.touches[0] : e;
    var x = ev.clientX,
        y = ev.clientY;
    if (dragging) {
      var factor = 100 / canvas.height; // 旋转因子 
      var dx = factor * (x - lastX);
      var dy = factor * (y - lastY);
      // 控制Y轴旋转角度在-90至90度之间，防止万向锁问题
      currentAngle[0] = Math.max(Math.min(currentAngle[0] + dy, 90.0), -90.0);
      currentAngle[1] = currentAngle[1] + dx;
    }
    lastX = x, lastY = y;
  });

  var up = 'ontouchend' in canvas ? 'touchend' : 'mouseup';
  addHandler(canvas, up, function (e) {
    dragging = false;
  });
};

exports.default = initEventHandlers;

/***/ }),

/***/ "./src/views/fpviewer/data.js":
/*!************************************!*\
  !*** ./src/views/fpviewer/data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// import niutouObj from "res_gl/model/niutou.obj.js";
// const OBJ = require('webgl-obj-loader');

var initNiuModelData = exports.initNiuModelData = function initNiuModelData() {
  // console.log(niutouObj);
  // var mesh = new OBJ.Mesh(niutouObj);
  // console.log(mesh);
};

var initCubeData = exports.initCubeData = function initCubeData() {
  // Create a cube
  //    v6----- v5
  //   /|      /|
  //  v1------v0|
  //  | |     | |
  //  | |v7---|-|v4
  //  |/      |/
  //  v2------v3
  var vertices = new Float32Array([// Vertex coordinates
  1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, // v0-v1-v2-v3 front
  1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, // v0-v3-v4-v5 right
  1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, // v0-v5-v6-v1 up
  -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, // v1-v6-v7-v2 left
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // v7-v4-v3-v2 down
  1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0 // v4-v7-v6-v5 back
  ]);

  var texCoords = new Float32Array([// Texture coordinates
  1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // v0-v1-v2-v3 front
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, // v0-v3-v4-v5 right
  1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, // v0-v5-v6-v1 up
  1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // v1-v6-v7-v2 left
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // v7-v4-v3-v2 down
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0 // v4-v7-v6-v5 back
  ]);

  // Indices of the vertices
  var indices = new Uint8Array([0, 1, 2, 0, 2, 3, // front
  4, 5, 6, 4, 6, 7, // right
  8, 9, 10, 8, 10, 11, // up
  12, 13, 14, 12, 14, 15, // left
  16, 17, 18, 16, 18, 19, // down
  20, 21, 22, 20, 22, 23 // back
  ]);

  return { vertices: vertices, texCoords: texCoords, indices: indices };
};

/***/ }),

/***/ "./src/views/fpviewer/index.js":
/*!*************************************!*\
  !*** ./src/views/fpviewer/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cuonUtils = __webpack_require__(/*! vendor_gl/cuon-utils */ "./src/vendor/webgl/cuon-utils.js");

var _cuonMatrix = __webpack_require__(/*! vendor_gl/cuon-matrix */ "./src/vendor/webgl/cuon-matrix.js");

var _TestShader = __webpack_require__(/*! shader_gl/fpviewer/TestShader */ "./src/components/shader/fpviewer/TestShader.js");

var _TestShader2 = _interopRequireDefault(_TestShader);

var _buffer = __webpack_require__(/*! fpviewer/buffer */ "./src/views/fpviewer/buffer.js");

var _buffer2 = _interopRequireDefault(_buffer);

var _data = __webpack_require__(/*! fpviewer/data */ "./src/views/fpviewer/data.js");

var _texture = __webpack_require__(/*! fpviewer/texture */ "./src/views/fpviewer/texture.js");

var _texture2 = _interopRequireDefault(_texture);

var _click_rotate_obj = __webpack_require__(/*! fpviewer/click_rotate_obj */ "./src/views/fpviewer/click_rotate_obj.js");

var _click_rotate_obj2 = _interopRequireDefault(_click_rotate_obj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 记录立方体的变换矩阵
var g_MVPMatrix = new _cuonMatrix.Matrix4();
// camera view point
var cameraPos = new _cuonMatrix.Vector3([3.0, 3.0, 7.0]);
var distance = Math.pow(cameraPos.elements[0], 2) + Math.pow(cameraPos.elements[1], 2) + Math.pow(cameraPos.elements[2], 2);

// 自定义视场宽度
var customViewWidth = 56;

var gl = void 0,
    canvas = void 0,
    viewMatrix = void 0;

var fpviewer = function fpviewer(resolve, reject) {

	canvas = document.createElement("canvas");

	if (!canvas) {
		console.log("no read element");
		reject();
	}
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	gl = (0, _cuonUtils.getWebGLContext)(canvas);
	if (!gl) {
		console.log('no read rendering context for webgl');
		reject();
	}

	if (!(0, _cuonUtils.initShaders)(gl, _TestShader2.default.vertexShader, _TestShader2.default.fragmentShader)) {
		console.log('Failed to intialize shaders.');
		reject();
	}

	var modelData = (0, _data.initCubeData)();
	var dataNum = modelData.indices.length;

	if (!(0, _buffer2.default)(gl, modelData)) {
		console.log("failed to set vertices");
		reject();
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);

	var u_MVPMatrix = gl.getUniformLocation(gl.program, 'u_MVPMatrix');

	viewMatrix = new _cuonMatrix.Matrix4();
	// 适配多种屏幕
	var fov = calcFov(distance, customViewWidth, canvas.width / canvas.height);
	viewMatrix.setPerspective(fov, canvas.width / canvas.height, 0.1, 1000.0);
	viewMatrix.lookAt(cameraPos.elements[0], cameraPos.elements[1], cameraPos.elements[2], 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

	var currentAngle = [0.0, 0.0]; // [绕x轴旋转角度，绕y轴旋转角度]
	(0, _click_rotate_obj2.default)(canvas, currentAngle);

	if (!(0, _texture2.default)(gl, dataNum)) {
		console.log("not intialize texture");
		reject();
	}

	// 加载牛头模型
	// initNiuModelData();

	var tick = function tick() {
		draw(gl, dataNum, viewMatrix, u_MVPMatrix, currentAngle);
		requestAnimationFrame(tick);
	};
	tick();

	window.addEventListener('resize', resizeWindows, false);

	resolve(canvas);
};

var draw = function draw(gl, n, viewMatrix, u_MVPMatrix, currentAngle) {
	g_MVPMatrix.set(viewMatrix);
	g_MVPMatrix.rotate(currentAngle[0], 1.0, 0.0, 0.0);
	g_MVPMatrix.rotate(currentAngle[1], 0.0, 1.0, 0.0);

	gl.uniformMatrix4fv(u_MVPMatrix, false, g_MVPMatrix.elements);

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
};

/**
 * 计算相机 fov 的函数
 * @param d : 在相机前方 d 距离
 * @param w : 想要看到最大正方形区域边长为 w
 * @param r : 屏幕宽高比
 */
function calcFov(d, w, r) {
	var f;
	var vertical = w;
	if (r < 1) {
		vertical = vertical / r;
	}
	f = Math.atan(vertical / d / 2) * 2 * (180 / Math.PI);
	return f;
}

var resizeWindows = function resizeWindows() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// 适配多种屏幕
	var fov = calcFov(distance, customViewWidth, canvas.width / canvas.height);
	viewMatrix.setPerspective(fov, canvas.width / canvas.height, 0.1, 1000.0);
	viewMatrix.lookAt(3.0, 3.0, 7.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
	gl.viewport(0, 0, canvas.width, canvas.height);

	document.body.style.width = window.innerWidth + 'px';
	document.body.style.height = window.innerHeight + 'px';
};

exports.default = fpviewer;

/***/ }),

/***/ "./src/views/fpviewer/texture.js":
/*!***************************************!*\
  !*** ./src/views/fpviewer/texture.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sky = __webpack_require__(/*! res_gl/img/sky.jpg */ "./src/assets/img/sky.jpg");

var _sky2 = _interopRequireDefault(_sky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadTexture = function loadTexture(gl, n, texture, u_Sampler, image) {
	// y轴翻转图片
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	// 激活0号纹理
	gl.activeTexture(gl.TEXTURE0);
	// 绑定成2D纹理
	gl.bindTexture(gl.TEXTURE_2D, texture);

	// 设置纹理参数
	gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

	// 测试其他的纹理填充模式
	// 垂直方向镜像重复填充
	// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	// // 水平方向去取边缘值作为填充值
	// 	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);

	// 设置纹理图像参数
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

	// 将纹理单元设置到采样器对象
	gl.uniform1i(u_Sampler, 0);
};

var initTexture = function initTexture(gl, num) {
	// 创建纹理对象
	var texture = gl.createTexture();
	if (!texture) {
		console.log("not create texture object");
		return false;
	}

	var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');

	var image = new Image();
	image.onload = function () {
		loadTexture(gl, num, texture, u_Sampler, image);
	};
	image.src = _sky2.default;

	return true;
};

exports.default = initTexture;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2NvbW1vbi9jb21tb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9za3kuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYWRlci9mcHZpZXdlci9UZXN0U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcHZpZXdlcl9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvY29tbW9uL2NvbW1vbS5jc3M/ZGU2NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL3dlYmdsL2N1b24tbWF0cml4LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3Ivd2ViZ2wvY3Vvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL3dlYmdsL3dlYmdsLWRlYnVnLmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3Ivd2ViZ2wvd2ViZ2wtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Zwdmlld2VyL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZnB2aWV3ZXIvY2xpY2tfcm90YXRlX29iai5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZnB2aWV3ZXIvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZnB2aWV3ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Zwdmlld2VyL3RleHR1cmUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNzcyIsImxvY2F0aW9uIiwid2luZG93IiwiRXJyb3IiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwicmVwbGFjZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCJvIiwiJDEiLCJ0ZXN0IiwibmV3VXJsIiwiaW5kZXhPZiIsIlRlc3RTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInJlcXVpcmUiLCJQcm9taXNlIiwiZnB2aWV3ZXIiLCJ0aGVuIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJNYXRyaXg0Iiwib3B0X3NyYyIsInMiLCJkIiwiaGFzT3duUHJvcGVydHkiLCJlbGVtZW50cyIsIkZsb2F0MzJBcnJheSIsInByb3RvdHlwZSIsInNldElkZW50aXR5IiwiZSIsInNldCIsInNyYyIsIm90aGVyIiwiYSIsImIiLCJhaTAiLCJhaTEiLCJhaTIiLCJhaTMiLCJtdWx0aXBseSIsIm11bHRpcGx5VmVjdG9yMyIsInBvcyIsInAiLCJ2IiwiVmVjdG9yMyIsInJlc3VsdCIsIm11bHRpcGx5VmVjdG9yNCIsIlZlY3RvcjQiLCJ0cmFuc3Bvc2UiLCJ0Iiwic2V0SW52ZXJzZU9mIiwiaW52IiwiZGV0IiwiaW52ZXJ0Iiwic2V0T3J0aG8iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJuZWFyIiwiZmFyIiwicnciLCJyaCIsInJkIiwib3J0aG8iLCJzZXRGcnVzdHVtIiwiZnJ1c3R1bSIsInNldFBlcnNwZWN0aXZlIiwiZm92eSIsImFzcGVjdCIsImN0IiwiTWF0aCIsIlBJIiwic2luIiwiY29zIiwicGVyc3BlY3RpdmUiLCJzZXRTY2FsZSIsIngiLCJ5IiwieiIsInNjYWxlIiwic2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlIiwic2V0Um90YXRlIiwiYW5nbGUiLCJjIiwibGVuIiwicmxlbiIsIm5jIiwieHkiLCJ5eiIsInp4IiwieHMiLCJ5cyIsInpzIiwic3FydCIsInJvdGF0ZSIsInNldExvb2tBdCIsImV5ZVgiLCJleWVZIiwiZXllWiIsImNlbnRlclgiLCJjZW50ZXJZIiwiY2VudGVyWiIsInVwWCIsInVwWSIsInVwWiIsImZ4IiwiZnkiLCJmeiIsInJsZiIsInN4Iiwic3kiLCJzeiIsInJscyIsInV4IiwidXkiLCJ1eiIsImxvb2tBdCIsImRyb3BTaGFkb3ciLCJwbGFuZSIsImxpZ2h0IiwibWF0IiwiZG90IiwiZHJvcFNoYWRvd0RpcmVjdGlvbmFsbHkiLCJub3JtWCIsIm5vcm1ZIiwibm9ybVoiLCJwbGFuZVgiLCJwbGFuZVkiLCJwbGFuZVoiLCJsaWdodFgiLCJsaWdodFkiLCJsaWdodFoiLCJub3JtYWxpemUiLCJnIiwiaW5pdFNoYWRlcnMiLCJjcmVhdGVQcm9ncmFtIiwibG9hZFNoYWRlciIsImdldFdlYkdMQ29udGV4dCIsImdsIiwidnNoYWRlciIsImZzaGFkZXIiLCJwcm9ncmFtIiwiY29uc29sZSIsImxvZyIsInVzZVByb2dyYW0iLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rZWQiLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJlcnJvciIsImdldFByb2dyYW1JbmZvTG9nIiwiZGVsZXRlUHJvZ3JhbSIsImRlbGV0ZVNoYWRlciIsInR5cGUiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZWQiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJvcHRfZGVidWciLCJXZWJHTFV0aWxzIiwic2V0dXBXZWJHTCIsImFyZ3VtZW50cyIsIldlYkdMRGVidWdVdGlscyIsIm1ha2VEZWJ1Z0NvbnRleHQiLCJtc2ciLCJnbFZhbGlkRW51bUNvbnRleHRzIiwiZ2xFbnVtcyIsImluaXQiLCJjdHgiLCJwcm9wZXJ0eU5hbWUiLCJjaGVja0luaXQiLCJtaWdodEJlRW51bSIsInZhbHVlIiwidW5kZWZpbmVkIiwiZ2xFbnVtVG9TdHJpbmciLCJuYW1lIiwiZ2xGdW5jdGlvbkFyZ1RvU3RyaW5nIiwiZnVuY3Rpb25OYW1lIiwiYXJndW1lbnRJbmRleCIsImZ1bmNJbmZvIiwib3B0X29uRXJyb3JGdW5jIiwiZXJyIiwiYXJncyIsImFyZ1N0ciIsImlpIiwiZ2xFcnJvclNoYWRvdyIsIm1ha2VFcnJvcldyYXBwZXIiLCJhcHBseSIsImdldEVycm9yIiwid3JhcHBlciIsIk5PX0VSUk9SIiwicmVzZXRUb0luaXRpYWxTdGF0ZSIsIm51bUF0dHJpYnMiLCJnZXRQYXJhbWV0ZXIiLCJNQVhfVkVSVEVYX0FUVFJJQlMiLCJ0bXAiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwidmVydGV4QXR0cmliMWYiLCJkZWxldGVCdWZmZXIiLCJudW1UZXh0dXJlVW5pdHMiLCJNQVhfVEVYVFVSRV9JTUFHRV9VTklUUyIsImFjdGl2ZVRleHR1cmUiLCJURVhUVVJFMCIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV9DVUJFX01BUCIsIlRFWFRVUkVfMkQiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImJpbmRGcmFtZWJ1ZmZlciIsIkZSQU1FQlVGRkVSIiwiYmluZFJlbmRlcmJ1ZmZlciIsIlJFTkRFUkJVRkZFUiIsImRpc2FibGUiLCJCTEVORCIsIkNVTExfRkFDRSIsIkRFUFRIX1RFU1QiLCJESVRIRVIiLCJTQ0lTU09SX1RFU1QiLCJibGVuZENvbG9yIiwiYmxlbmRFcXVhdGlvbiIsIkZVTkNfQUREIiwiYmxlbmRGdW5jIiwiT05FIiwiWkVSTyIsImNsZWFyQ29sb3IiLCJjbGVhckRlcHRoIiwiY2xlYXJTdGVuY2lsIiwiY29sb3JNYXNrIiwiY3VsbEZhY2UiLCJCQUNLIiwiZGVwdGhGdW5jIiwiTEVTUyIsImRlcHRoTWFzayIsImRlcHRoUmFuZ2UiLCJmcm9udEZhY2UiLCJDQ1ciLCJoaW50IiwiR0VORVJBVEVfTUlQTUFQX0hJTlQiLCJET05UX0NBUkUiLCJsaW5lV2lkdGgiLCJwaXhlbFN0b3JlaSIsIlBBQ0tfQUxJR05NRU5UIiwiVU5QQUNLX0FMSUdOTUVOVCIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wiLCJVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMIiwiQlJPV1NFUl9ERUZBVUxUX1dFQkdMIiwicG9seWdvbk9mZnNldCIsInNhbXBsZUNvdmVyYWdlIiwic2Npc3NvciIsInN0ZW5jaWxGdW5jIiwiQUxXQVlTIiwic3RlbmNpbE1hc2siLCJzdGVuY2lsT3AiLCJLRUVQIiwidmlld3BvcnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJTVEVOQ0lMX0JVRkZFUl9CSVQiLCJtYWtlTG9zdENvbnRleHRTaW11bGF0aW5nQ29udGV4dCIsIndyYXBwZXJfIiwiY29udGV4dElkXyIsImNvbnRleHRMb3N0XyIsInJlc291cmNlSWRfIiwicmVzb3VyY2VEYl8iLCJvbkxvc3RfIiwib25SZXN0b3JlZF8iLCJuZXh0T25SZXN0b3JlZF8iLCJnbEVycm9yU2hhZG93XyIsImlzV2ViR0xPYmplY3QiLCJvYmoiLCJXZWJHTEJ1ZmZlciIsIldlYkdMRnJhbWVidWZmZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTFJlbmRlcmJ1ZmZlciIsIldlYkdMU2hhZGVyIiwiV2ViR0xUZXh0dXJlIiwiY2hlY2tSZXNvdXJjZXMiLCJhcmciLCJfX3dlYmdsRGVidWdDb250ZXh0TG9zdElkX18iLCJjbGVhckVycm9ycyIsImsiLCJPYmplY3QiLCJrZXlzIiwiZ2xFcnJvclNoZG93XyIsIm1ha2VMb3N0Q29udGV4dFdyYXBwZXIiLCJmIiwiSU5WQUxJRF9PUEVSQVRJT04iLCJtYWtlV2ViR0xDb250ZXh0RXZlbnQiLCJzdGF0dXNNZXNzYWdlIiwiZnJlZVJlc291cmNlcyIsInJlc291cmNlIiwiV2ViY3R4RnJhbWVidWZmZXIiLCJkZWxldGVGcmFtZWJ1ZmZlciIsIldlYmN0eFByb2dyYW0iLCJXZWJjdHhSZW5kZXJidWZmZXIiLCJkZWxldGVSZW5kZXJidWZmZXIiLCJXZWJjdHhTaGFkZXIiLCJXZWJjdHhUZXh0dXJlIiwiZGVsZXRlVGV4dHVyZSIsImxvc2VDb250ZXh0IiwiQ09OVEVYVF9MT1NUX1dFQkdMIiwic2V0VGltZW91dCIsInJlc3RvcmVDb250ZXh0IiwiY2FsbGJhY2siLCJjcmVhdGlvbkZ1bmN0aW9ucyIsImZ1bmN0aW9uc1RoYXRTaG91bGRSZXR1cm5OdWxsIiwiaXNGdW5jdGlvbnMiLCJjaGVja0ZyYW1lYnVmZmVyU3RhdHVzIiwiRlJBTUVCVUZGRVJfVU5TVVBQT1JURUQiLCJnZXRBdHRyaWJMb2NhdGlvbiIsImdldFZlcnRleEF0dHJpYk9mZnNldCIsImlzQ29udGV4dExvc3QiLCJ3cmFwRXZlbnQiLCJsaXN0ZW5lciIsImluZm8iLCJoYW5kbGVFdmVudCIsInJlZ2lzdGVyT25Db250ZXh0TG9zdExpc3RlbmVyIiwicmVnaXN0ZXJPbkNvbnRleHRSZXN0b3JlZExpc3RlbmVyIiwibWFrZUZhaWxIVE1MIiwiR0VUX0FfV0VCR0xfQlJPV1NFUiIsIk9USEVSX1BST0JMRU0iLCJvcHRfYXR0cmlicyIsIm9wdF9vbkVycm9yIiwiaGFuZGxlQ3JlYXRpb25FcnJvciIsImNvbnRhaW5lciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3RyIiwiV2ViR0xSZW5kZXJpbmdDb250ZXh0IiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29udGV4dCIsImNyZWF0ZTNEQ29udGV4dCIsIm5hbWVzIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsZW1lbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaW5pdEFycmF5QnVmZmVyIiwibnVtIiwiYXR0cmlidXRlIiwiYnVmZmVyIiwiYnVmZmVyRGF0YSIsIlNUQVRJQ19EUkFXIiwiYV9hdHRyaWJ1dGUiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsImluaXRWZXJ0ZXhCdWZmZXJzIiwiaW5kZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsInRleENvb3JkcyIsImluZGljZXMiLCJhZGRIYW5kbGVyIiwiaGFuZGxlciIsImF0dGFjaEV2ZW50IiwiaW5pdEV2ZW50SGFuZGxlcnMiLCJjdXJyZW50QW5nbGUiLCJkcmFnZ2luZyIsImxhc3RYIiwibGFzdFkiLCJkb3duIiwiZXYiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW92ZSIsImZhY3RvciIsImR4IiwiZHkiLCJtYXgiLCJtaW4iLCJ1cCIsImluaXROaXVNb2RlbERhdGEiLCJpbml0Q3ViZURhdGEiLCJVaW50OEFycmF5IiwiZ19NVlBNYXRyaXgiLCJjYW1lcmFQb3MiLCJkaXN0YW5jZSIsInBvdyIsImN1c3RvbVZpZXdXaWR0aCIsInZpZXdNYXRyaXgiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlRWxlbWVudCIsIm1vZGVsRGF0YSIsImRhdGFOdW0iLCJlbmFibGUiLCJ1X01WUE1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImZvdiIsImNhbGNGb3YiLCJ0aWNrIiwiZHJhdyIsInJlc2l6ZVdpbmRvd3MiLCJuIiwidW5pZm9ybU1hdHJpeDRmdiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJ3IiwiciIsInZlcnRpY2FsIiwiYXRhbiIsImxvYWRUZXh0dXJlIiwidGV4dHVyZSIsInVfU2FtcGxlciIsImltYWdlIiwidGV4UGFyYW1ldGVyZiIsIlRFWFRVUkVfTUlOX0ZJTFRFUiIsIkxJTkVBUiIsInRleEltYWdlMkQiLCJSR0IiLCJ1bmlmb3JtMWkiLCJpbml0VGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJJbWFnZSIsIm9ubG9hZCIsInRleHR1cmVJbWciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSw4QkFBK0IsY0FBYyxlQUFlLHFCQUFxQixHQUFHLGVBQWUsbUJBQW1CLHNCQUFzQix5QkFBeUIsMEJBQTBCLGtCQUFrQixnQ0FBZ0MscUJBQXFCLDhCQUE4Qix3Q0FBd0MscUJBQXFCLGlDQUFpQyxrREFBa0QsR0FBRzs7QUFFdmI7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBSUE7QUFDQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxZQUFULEVBQXVCO0FBQ3ZDLEtBQUlDLE9BQU8sRUFBWDs7QUFFQTtBQUNBQSxNQUFLQyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbkMsU0FBTyxLQUFLQyxHQUFMLENBQVMsVUFBVUMsSUFBVixFQUFnQjtBQUMvQixPQUFJQyxVQUFVQyx1QkFBdUJGLElBQXZCLEVBQTZCSixZQUE3QixDQUFkO0FBQ0EsT0FBR0ksS0FBSyxDQUFMLENBQUgsRUFBWTtBQUNYLFdBQU8sWUFBWUEsS0FBSyxDQUFMLENBQVosR0FBc0IsR0FBdEIsR0FBNEJDLE9BQTVCLEdBQXNDLEdBQTdDO0FBQ0EsSUFGRCxNQUVPO0FBQ04sV0FBT0EsT0FBUDtBQUNBO0FBQ0QsR0FQTSxFQU9KRSxJQVBJLENBT0MsRUFQRCxDQUFQO0FBUUEsRUFURDs7QUFXQTtBQUNBTixNQUFLTyxDQUFMLEdBQVMsVUFBU0MsT0FBVCxFQUFrQkMsVUFBbEIsRUFBOEI7QUFDdEMsTUFBRyxPQUFPRCxPQUFQLEtBQW1CLFFBQXRCLEVBQ0NBLFVBQVUsQ0FBQyxDQUFDLElBQUQsRUFBT0EsT0FBUCxFQUFnQixFQUFoQixDQUFELENBQVY7QUFDRCxNQUFJRSx5QkFBeUIsRUFBN0I7QUFDQSxPQUFJLElBQUlILElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtJLE1BQXhCLEVBQWdDSixHQUFoQyxFQUFxQztBQUNwQyxPQUFJSyxLQUFLLEtBQUtMLENBQUwsRUFBUSxDQUFSLENBQVQ7QUFDQSxPQUFHLE9BQU9LLEVBQVAsS0FBYyxRQUFqQixFQUNDRix1QkFBdUJFLEVBQXZCLElBQTZCLElBQTdCO0FBQ0Q7QUFDRCxPQUFJTCxJQUFJLENBQVIsRUFBV0EsSUFBSUMsUUFBUUcsTUFBdkIsRUFBK0JKLEdBQS9CLEVBQW9DO0FBQ25DLE9BQUlKLE9BQU9LLFFBQVFELENBQVIsQ0FBWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBRyxPQUFPSixLQUFLLENBQUwsQ0FBUCxLQUFtQixRQUFuQixJQUErQixDQUFDTyx1QkFBdUJQLEtBQUssQ0FBTCxDQUF2QixDQUFuQyxFQUFvRTtBQUNuRSxRQUFHTSxjQUFjLENBQUNOLEtBQUssQ0FBTCxDQUFsQixFQUEyQjtBQUMxQkEsVUFBSyxDQUFMLElBQVVNLFVBQVY7QUFDQSxLQUZELE1BRU8sSUFBR0EsVUFBSCxFQUFlO0FBQ3JCTixVQUFLLENBQUwsSUFBVSxNQUFNQSxLQUFLLENBQUwsQ0FBTixHQUFnQixTQUFoQixHQUE0Qk0sVUFBNUIsR0FBeUMsR0FBbkQ7QUFDQTtBQUNEVCxTQUFLYSxJQUFMLENBQVVWLElBQVY7QUFDQTtBQUNEO0FBQ0QsRUF4QkQ7QUF5QkEsUUFBT0gsSUFBUDtBQUNBLENBMUNEOztBQTRDQSxTQUFTSyxzQkFBVCxDQUFnQ0YsSUFBaEMsRUFBc0NKLFlBQXRDLEVBQW9EO0FBQ25ELEtBQUlLLFVBQVVELEtBQUssQ0FBTCxLQUFXLEVBQXpCO0FBQ0EsS0FBSVcsYUFBYVgsS0FBSyxDQUFMLENBQWpCO0FBQ0EsS0FBSSxDQUFDVyxVQUFMLEVBQWlCO0FBQ2hCLFNBQU9WLE9BQVA7QUFDQTs7QUFFRCxLQUFJTCxnQkFBZ0IsT0FBT2dCLElBQVAsS0FBZ0IsVUFBcEMsRUFBZ0Q7QUFDL0MsTUFBSUMsZ0JBQWdCQyxVQUFVSCxVQUFWLENBQXBCO0FBQ0EsTUFBSUksYUFBYUosV0FBV0ssT0FBWCxDQUFtQmpCLEdBQW5CLENBQXVCLFVBQVVrQixNQUFWLEVBQWtCO0FBQ3pELFVBQU8sbUJBQW1CTixXQUFXTyxVQUE5QixHQUEyQ0QsTUFBM0MsR0FBb0QsS0FBM0Q7QUFDQSxHQUZnQixDQUFqQjs7QUFJQSxTQUFPLENBQUNoQixPQUFELEVBQVVrQixNQUFWLENBQWlCSixVQUFqQixFQUE2QkksTUFBN0IsQ0FBb0MsQ0FBQ04sYUFBRCxDQUFwQyxFQUFxRFYsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBUDtBQUNBOztBQUVELFFBQU8sQ0FBQ0YsT0FBRCxFQUFVRSxJQUFWLENBQWUsSUFBZixDQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFTVyxTQUFULENBQW1CTSxTQUFuQixFQUE4QjtBQUM3QjtBQUNBLEtBQUlDLFNBQVNULEtBQUtVLFNBQVNDLG1CQUFtQkMsS0FBS0MsU0FBTCxDQUFlTCxTQUFmLENBQW5CLENBQVQsQ0FBTCxDQUFiO0FBQ0EsS0FBSU0sT0FBTyxpRUFBaUVMLE1BQTVFOztBQUVBLFFBQU8sU0FBU0ssSUFBVCxHQUFnQixLQUF2QjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM0VEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMVhBOzs7Ozs7Ozs7Ozs7O0FBYUFoQyxPQUFPQyxPQUFQLEdBQWlCLFVBQVVnQyxHQUFWLEVBQWU7QUFDOUI7QUFDQSxLQUFJQyxXQUFXLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9ELFFBQXZEOztBQUVBLEtBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsUUFBTSxJQUFJRSxLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNEOztBQUVGO0FBQ0EsS0FBSSxDQUFDSCxHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFFBQTNCLEVBQXFDO0FBQ25DLFNBQU9BLEdBQVA7QUFDQTs7QUFFRCxLQUFJSSxVQUFVSCxTQUFTSSxRQUFULEdBQW9CLElBQXBCLEdBQTJCSixTQUFTSyxJQUFsRDtBQUNBLEtBQUlDLGFBQWFILFVBQVVILFNBQVNPLFFBQVQsQ0FBa0JDLE9BQWxCLENBQTBCLFdBQTFCLEVBQXVDLEdBQXZDLENBQTNCOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLEtBQUlDLFdBQVdWLElBQUlTLE9BQUosQ0FBWSxxREFBWixFQUFtRSxVQUFTRSxTQUFULEVBQW9CQyxPQUFwQixFQUE2QjtBQUM5RztBQUNBLE1BQUlDLGtCQUFrQkQsUUFDcEJFLElBRG9CLEdBRXBCTCxPQUZvQixDQUVaLFVBRlksRUFFQSxVQUFTTSxDQUFULEVBQVlDLEVBQVosRUFBZTtBQUFFLFVBQU9BLEVBQVA7QUFBWSxHQUY3QixFQUdwQlAsT0FIb0IsQ0FHWixVQUhZLEVBR0EsVUFBU00sQ0FBVCxFQUFZQyxFQUFaLEVBQWU7QUFBRSxVQUFPQSxFQUFQO0FBQVksR0FIN0IsQ0FBdEI7O0FBS0E7QUFDQSxNQUFJLG9EQUFvREMsSUFBcEQsQ0FBeURKLGVBQXpELENBQUosRUFBK0U7QUFDN0UsVUFBT0YsU0FBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSU8sTUFBSjs7QUFFQSxNQUFJTCxnQkFBZ0JNLE9BQWhCLENBQXdCLElBQXhCLE1BQWtDLENBQXRDLEVBQXlDO0FBQ3RDO0FBQ0ZELFlBQVNMLGVBQVQ7QUFDQSxHQUhELE1BR08sSUFBSUEsZ0JBQWdCTSxPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFyQyxFQUF3QztBQUM5QztBQUNBRCxZQUFTZCxVQUFVUyxlQUFuQixDQUY4QyxDQUVWO0FBQ3BDLEdBSE0sTUFHQTtBQUNOO0FBQ0FLLFlBQVNYLGFBQWFNLGdCQUFnQkosT0FBaEIsQ0FBd0IsT0FBeEIsRUFBaUMsRUFBakMsQ0FBdEIsQ0FGTSxDQUVzRDtBQUM1RDs7QUFFRDtBQUNBLFNBQU8sU0FBU1osS0FBS0MsU0FBTCxDQUFlb0IsTUFBZixDQUFULEdBQWtDLEdBQXpDO0FBQ0EsRUE1QmMsQ0FBZjs7QUE4QkE7QUFDQSxRQUFPUixRQUFQO0FBQ0EsQ0ExRUQsQzs7Ozs7Ozs7Ozs7QUNkQSxtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBLElBQU1VLGFBQWE7QUFDbEI7QUFDQUMsZUFBYyxDQUViLDRCQUZhLEVBR2IsNEJBSGEsRUFLYiwyQkFMYSxFQU9iLDBCQVBhLEVBU2IsY0FUYSxFQVVaLHlDQVZZLEVBV1osMEJBWFksRUFZYixHQVphLEVBY1o3QyxJQWRZLENBY1AsSUFkTyxDQUZJO0FBaUJsQjtBQUNBOEMsaUJBQWdCLENBRWYsY0FGZSxFQUdmLDBCQUhlLEVBSWYsUUFKZSxFQU1mLDhCQU5lLEVBUWYsMEJBUmUsRUFVZixjQVZlLEVBV2Qsa0RBWGMsRUFZZixHQVplLEVBY2Q5QyxJQWRjLENBY1QsSUFkUztBQWxCRSxDQUFuQjs7a0JBbUNlNEMsVTs7Ozs7Ozs7Ozs7Ozs7QUN2Q2Y7Ozs7OztBQUVBLG1CQUFBRyxDQUFRLGdFQUFSOztBQUVBLElBQUlDLE9BQUosQ0FBWUMsZUFBWixFQUFzQkMsSUFBdEIsQ0FBMkIsVUFBU0MsTUFBVCxFQUFnQjtBQUMxQ0MsVUFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxLQUFwQixHQUE0QjdCLE9BQU84QixVQUFQLEdBQW9CLElBQWhEO0FBQ0FKLFVBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkcsTUFBcEIsR0FBNkIvQixPQUFPZ0MsV0FBUCxHQUFxQixJQUFsRDtBQUNBTixVQUFTTyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxXQUEvQixDQUEyQ1QsTUFBM0M7QUFDQSxDQUpELEU7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7Ozs7OztBQU9BOzs7Ozs7QUFNTyxJQUFNVSw0QkFBVSxTQUFWQSxPQUFVLENBQVNDLE9BQVQsRUFBa0I7QUFDdkMsTUFBSTdELENBQUosRUFBTzhELENBQVAsRUFBVUMsQ0FBVjtBQUNBLE1BQUlGLFdBQVcsUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUE5QixJQUEwQ0EsUUFBUUcsY0FBUixDQUF1QixVQUF2QixDQUE5QyxFQUFrRjtBQUNoRkYsUUFBSUQsUUFBUUksUUFBWjtBQUNBRixRQUFJLElBQUlHLFlBQUosQ0FBaUIsRUFBakIsQ0FBSjtBQUNBLFNBQUtsRSxJQUFJLENBQVQsRUFBWUEsSUFBSSxFQUFoQixFQUFvQixFQUFFQSxDQUF0QixFQUF5QjtBQUN2QitELFFBQUUvRCxDQUFGLElBQU84RCxFQUFFOUQsQ0FBRixDQUFQO0FBQ0Q7QUFDRCxTQUFLaUUsUUFBTCxHQUFnQkYsQ0FBaEI7QUFDRCxHQVBELE1BT087QUFDTCxTQUFLRSxRQUFMLEdBQWdCLElBQUlDLFlBQUosQ0FBaUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLENBQWxDLENBQWpCLENBQWhCO0FBQ0Q7QUFDRixDQVpNOztBQWNQOzs7O0FBSUFOLFFBQVFPLFNBQVIsQ0FBa0JDLFdBQWxCLEdBQWdDLFlBQVc7QUFDekMsTUFBSUMsSUFBSSxLQUFLSixRQUFiO0FBQ0FJLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBWUEsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFZQSxFQUFFLENBQUYsSUFBUSxDQUFSLENBQWFBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDckNBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBWUEsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFZQSxFQUFFLENBQUYsSUFBUSxDQUFSLENBQWFBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDckNBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBWUEsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFZQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQWFBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDckNBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBWUEsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFZQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQWFBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDckMsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7QUFLQVQsUUFBUU8sU0FBUixDQUFrQkcsR0FBbEIsR0FBd0IsVUFBU0MsR0FBVCxFQUFjO0FBQ3BDLE1BQUl2RSxDQUFKLEVBQU84RCxDQUFQLEVBQVVDLENBQVY7O0FBRUFELE1BQUlTLElBQUlOLFFBQVI7QUFDQUYsTUFBSSxLQUFLRSxRQUFUOztBQUVBLE1BQUlILE1BQU1DLENBQVYsRUFBYTtBQUNYO0FBQ0Q7O0FBRUQsT0FBSy9ELElBQUksQ0FBVCxFQUFZQSxJQUFJLEVBQWhCLEVBQW9CLEVBQUVBLENBQXRCLEVBQXlCO0FBQ3ZCK0QsTUFBRS9ELENBQUYsSUFBTzhELEVBQUU5RCxDQUFGLENBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWZEOztBQWlCQTs7Ozs7QUFLQTRELFFBQVFPLFNBQVIsQ0FBa0JwRCxNQUFsQixHQUEyQixVQUFTeUQsS0FBVCxFQUFnQjtBQUN6QyxNQUFJeEUsQ0FBSixFQUFPcUUsQ0FBUCxFQUFVSSxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0JDLEdBQS9COztBQUVBO0FBQ0FULE1BQUksS0FBS0osUUFBVDtBQUNBUSxNQUFJLEtBQUtSLFFBQVQ7QUFDQVMsTUFBSUYsTUFBTVAsUUFBVjs7QUFFQTtBQUNBLE1BQUlJLE1BQU1LLENBQVYsRUFBYTtBQUNYQSxRQUFJLElBQUlSLFlBQUosQ0FBaUIsRUFBakIsQ0FBSjtBQUNBLFNBQUtsRSxJQUFJLENBQVQsRUFBWUEsSUFBSSxFQUFoQixFQUFvQixFQUFFQSxDQUF0QixFQUF5QjtBQUN2QjBFLFFBQUUxRSxDQUFGLElBQU9xRSxFQUFFckUsQ0FBRixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLQSxJQUFJLENBQVQsRUFBWUEsSUFBSSxDQUFoQixFQUFtQkEsR0FBbkIsRUFBd0I7QUFDdEIyRSxVQUFJRixFQUFFekUsQ0FBRixDQUFKLENBQVc0RSxNQUFJSCxFQUFFekUsSUFBRSxDQUFKLENBQUosQ0FBYTZFLE1BQUlKLEVBQUV6RSxJQUFFLENBQUosQ0FBSixDQUFhOEUsTUFBSUwsRUFBRXpFLElBQUUsRUFBSixDQUFKO0FBQ3JDcUUsTUFBRXJFLENBQUYsSUFBVTJFLE1BQU1ELEVBQUUsQ0FBRixDQUFOLEdBQWNFLE1BQU1GLEVBQUUsQ0FBRixDQUFwQixHQUE0QkcsTUFBTUgsRUFBRSxDQUFGLENBQWxDLEdBQTBDSSxNQUFNSixFQUFFLENBQUYsQ0FBMUQ7QUFDQUwsTUFBRXJFLElBQUUsQ0FBSixJQUFVMkUsTUFBTUQsRUFBRSxDQUFGLENBQU4sR0FBY0UsTUFBTUYsRUFBRSxDQUFGLENBQXBCLEdBQTRCRyxNQUFNSCxFQUFFLENBQUYsQ0FBbEMsR0FBMENJLE1BQU1KLEVBQUUsQ0FBRixDQUExRDtBQUNBTCxNQUFFckUsSUFBRSxDQUFKLElBQVUyRSxNQUFNRCxFQUFFLENBQUYsQ0FBTixHQUFjRSxNQUFNRixFQUFFLENBQUYsQ0FBcEIsR0FBNEJHLE1BQU1ILEVBQUUsRUFBRixDQUFsQyxHQUEwQ0ksTUFBTUosRUFBRSxFQUFGLENBQTFEO0FBQ0FMLE1BQUVyRSxJQUFFLEVBQUosSUFBVTJFLE1BQU1ELEVBQUUsRUFBRixDQUFOLEdBQWNFLE1BQU1GLEVBQUUsRUFBRixDQUFwQixHQUE0QkcsTUFBTUgsRUFBRSxFQUFGLENBQWxDLEdBQTBDSSxNQUFNSixFQUFFLEVBQUYsQ0FBMUQ7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXpCRDtBQTBCQWQsUUFBUU8sU0FBUixDQUFrQlksUUFBbEIsR0FBNkJuQixRQUFRTyxTQUFSLENBQWtCcEQsTUFBL0M7O0FBRUE7Ozs7O0FBS0E2QyxRQUFRTyxTQUFSLENBQWtCYSxlQUFsQixHQUFvQyxVQUFTQyxHQUFULEVBQWM7QUFDaEQsTUFBSVosSUFBSSxLQUFLSixRQUFiO0FBQ0EsTUFBSWlCLElBQUlELElBQUloQixRQUFaO0FBQ0EsTUFBSWtCLElBQUksSUFBSUMsT0FBSixFQUFSO0FBQ0EsTUFBSUMsU0FBU0YsRUFBRWxCLFFBQWY7O0FBRUFvQixTQUFPLENBQVAsSUFBWUgsRUFBRSxDQUFGLElBQU9iLEVBQUUsQ0FBRixDQUFQLEdBQWNhLEVBQUUsQ0FBRixJQUFPYixFQUFFLENBQUYsQ0FBckIsR0FBNEJhLEVBQUUsQ0FBRixJQUFPYixFQUFHLENBQUgsQ0FBbkMsR0FBMkNBLEVBQUUsRUFBRixDQUF2RDtBQUNBZ0IsU0FBTyxDQUFQLElBQVlILEVBQUUsQ0FBRixJQUFPYixFQUFFLENBQUYsQ0FBUCxHQUFjYSxFQUFFLENBQUYsSUFBT2IsRUFBRSxDQUFGLENBQXJCLEdBQTRCYSxFQUFFLENBQUYsSUFBT2IsRUFBRyxDQUFILENBQW5DLEdBQTJDQSxFQUFFLEVBQUYsQ0FBdkQ7QUFDQWdCLFNBQU8sQ0FBUCxJQUFZSCxFQUFFLENBQUYsSUFBT2IsRUFBRSxDQUFGLENBQVAsR0FBY2EsRUFBRSxDQUFGLElBQU9iLEVBQUUsQ0FBRixDQUFyQixHQUE0QmEsRUFBRSxDQUFGLElBQU9iLEVBQUUsRUFBRixDQUFuQyxHQUEyQ0EsRUFBRSxFQUFGLENBQXZEOztBQUVBLFNBQU9jLENBQVA7QUFDRCxDQVhEOztBQWFBOzs7OztBQUtBdkIsUUFBUU8sU0FBUixDQUFrQm1CLGVBQWxCLEdBQW9DLFVBQVNMLEdBQVQsRUFBYztBQUNoRCxNQUFJWixJQUFJLEtBQUtKLFFBQWI7QUFDQSxNQUFJaUIsSUFBSUQsSUFBSWhCLFFBQVo7QUFDQSxNQUFJa0IsSUFBSSxJQUFJSSxPQUFKLEVBQVI7QUFDQSxNQUFJRixTQUFTRixFQUFFbEIsUUFBZjs7QUFFQW9CLFNBQU8sQ0FBUCxJQUFZSCxFQUFFLENBQUYsSUFBT2IsRUFBRSxDQUFGLENBQVAsR0FBY2EsRUFBRSxDQUFGLElBQU9iLEVBQUUsQ0FBRixDQUFyQixHQUE0QmEsRUFBRSxDQUFGLElBQU9iLEVBQUcsQ0FBSCxDQUFuQyxHQUEyQ2EsRUFBRSxDQUFGLElBQU9iLEVBQUUsRUFBRixDQUE5RDtBQUNBZ0IsU0FBTyxDQUFQLElBQVlILEVBQUUsQ0FBRixJQUFPYixFQUFFLENBQUYsQ0FBUCxHQUFjYSxFQUFFLENBQUYsSUFBT2IsRUFBRSxDQUFGLENBQXJCLEdBQTRCYSxFQUFFLENBQUYsSUFBT2IsRUFBRyxDQUFILENBQW5DLEdBQTJDYSxFQUFFLENBQUYsSUFBT2IsRUFBRSxFQUFGLENBQTlEO0FBQ0FnQixTQUFPLENBQVAsSUFBWUgsRUFBRSxDQUFGLElBQU9iLEVBQUUsQ0FBRixDQUFQLEdBQWNhLEVBQUUsQ0FBRixJQUFPYixFQUFFLENBQUYsQ0FBckIsR0FBNEJhLEVBQUUsQ0FBRixJQUFPYixFQUFFLEVBQUYsQ0FBbkMsR0FBMkNhLEVBQUUsQ0FBRixJQUFPYixFQUFFLEVBQUYsQ0FBOUQ7QUFDQWdCLFNBQU8sQ0FBUCxJQUFZSCxFQUFFLENBQUYsSUFBT2IsRUFBRSxDQUFGLENBQVAsR0FBY2EsRUFBRSxDQUFGLElBQU9iLEVBQUUsQ0FBRixDQUFyQixHQUE0QmEsRUFBRSxDQUFGLElBQU9iLEVBQUUsRUFBRixDQUFuQyxHQUEyQ2EsRUFBRSxDQUFGLElBQU9iLEVBQUUsRUFBRixDQUE5RDs7QUFFQSxTQUFPYyxDQUFQO0FBQ0QsQ0FaRDs7QUFjQTs7OztBQUlBdkIsUUFBUU8sU0FBUixDQUFrQnFCLFNBQWxCLEdBQThCLFlBQVc7QUFDdkMsTUFBSW5CLENBQUosRUFBT29CLENBQVA7O0FBRUFwQixNQUFJLEtBQUtKLFFBQVQ7O0FBRUF3QixNQUFJcEIsRUFBRyxDQUFILENBQUosQ0FBWUEsRUFBRyxDQUFILElBQVFBLEVBQUcsQ0FBSCxDQUFSLENBQWdCQSxFQUFHLENBQUgsSUFBUW9CLENBQVI7QUFDNUJBLE1BQUlwQixFQUFHLENBQUgsQ0FBSixDQUFZQSxFQUFHLENBQUgsSUFBUUEsRUFBRyxDQUFILENBQVIsQ0FBZ0JBLEVBQUcsQ0FBSCxJQUFRb0IsQ0FBUjtBQUM1QkEsTUFBSXBCLEVBQUcsQ0FBSCxDQUFKLENBQVlBLEVBQUcsQ0FBSCxJQUFRQSxFQUFFLEVBQUYsQ0FBUixDQUFnQkEsRUFBRSxFQUFGLElBQVFvQixDQUFSO0FBQzVCQSxNQUFJcEIsRUFBRyxDQUFILENBQUosQ0FBWUEsRUFBRyxDQUFILElBQVFBLEVBQUcsQ0FBSCxDQUFSLENBQWdCQSxFQUFHLENBQUgsSUFBUW9CLENBQVI7QUFDNUJBLE1BQUlwQixFQUFHLENBQUgsQ0FBSixDQUFZQSxFQUFHLENBQUgsSUFBUUEsRUFBRSxFQUFGLENBQVIsQ0FBZ0JBLEVBQUUsRUFBRixJQUFRb0IsQ0FBUjtBQUM1QkEsTUFBSXBCLEVBQUUsRUFBRixDQUFKLENBQVlBLEVBQUUsRUFBRixJQUFRQSxFQUFFLEVBQUYsQ0FBUixDQUFnQkEsRUFBRSxFQUFGLElBQVFvQixDQUFSOztBQUU1QixTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBOzs7OztBQUtBN0IsUUFBUU8sU0FBUixDQUFrQnVCLFlBQWxCLEdBQWlDLFVBQVNsQixLQUFULEVBQWdCO0FBQy9DLE1BQUl4RSxDQUFKLEVBQU84RCxDQUFQLEVBQVVDLENBQVYsRUFBYTRCLEdBQWIsRUFBa0JDLEdBQWxCOztBQUVBOUIsTUFBSVUsTUFBTVAsUUFBVjtBQUNBRixNQUFJLEtBQUtFLFFBQVQ7QUFDQTBCLFFBQU0sSUFBSXpCLFlBQUosQ0FBaUIsRUFBakIsQ0FBTjs7QUFFQXlCLE1BQUksQ0FBSixJQUFZN0IsRUFBRSxDQUFGLElBQUtBLEVBQUUsRUFBRixDQUFMLEdBQVdBLEVBQUUsRUFBRixDQUFYLEdBQW1CQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxFQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBQS9CLEdBQXVDQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQWxELEdBQ0FBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFXQSxFQUFFLEVBQUYsQ0FEWCxHQUNtQkEsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVlBLEVBQUUsRUFBRixDQUQvQixHQUN1Q0EsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUQ5RDtBQUVBNkIsTUFBSSxDQUFKLElBQVUsQ0FBRTdCLEVBQUUsQ0FBRixDQUFGLEdBQU9BLEVBQUUsRUFBRixDQUFQLEdBQWFBLEVBQUUsRUFBRixDQUFiLEdBQXFCQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxFQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBQWpDLEdBQXlDQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQXBELEdBQ0VBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFXQSxFQUFFLEVBQUYsQ0FEYixHQUNxQkEsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVlBLEVBQUUsRUFBRixDQURqQyxHQUN5Q0EsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUQ5RDtBQUVBNkIsTUFBSSxDQUFKLElBQVk3QixFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBV0EsRUFBRSxFQUFGLENBQVgsR0FBbUJBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLEVBQUYsQ0FBTixHQUFZQSxFQUFFLEVBQUYsQ0FBL0IsR0FBdUNBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLEVBQUYsQ0FBbEQsR0FDQUEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVdBLEVBQUUsRUFBRixDQURYLEdBQ21CQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBRC9CLEdBQ3VDQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxDQUFGLENBRDlEO0FBRUE2QixNQUFJLEVBQUosSUFBVSxDQUFFN0IsRUFBRSxDQUFGLENBQUYsR0FBT0EsRUFBRSxDQUFGLENBQVAsR0FBYUEsRUFBRSxFQUFGLENBQWIsR0FBcUJBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLEVBQUYsQ0FBTixHQUFZQSxFQUFFLEVBQUYsQ0FBakMsR0FBeUNBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLEVBQUYsQ0FBcEQsR0FDRUEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVdBLEVBQUUsRUFBRixDQURiLEdBQ3FCQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBRGpDLEdBQ3lDQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxDQUFGLENBRDlEOztBQUdBNkIsTUFBSSxDQUFKLElBQVUsQ0FBRTdCLEVBQUUsQ0FBRixDQUFGLEdBQU9BLEVBQUUsRUFBRixDQUFQLEdBQWFBLEVBQUUsRUFBRixDQUFiLEdBQXFCQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxFQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBQWpDLEdBQXlDQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQXBELEdBQ0VBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFXQSxFQUFFLEVBQUYsQ0FEYixHQUNxQkEsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVlBLEVBQUUsRUFBRixDQURqQyxHQUN5Q0EsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUQ5RDtBQUVBNkIsTUFBSSxDQUFKLElBQVk3QixFQUFFLENBQUYsSUFBS0EsRUFBRSxFQUFGLENBQUwsR0FBV0EsRUFBRSxFQUFGLENBQVgsR0FBbUJBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLEVBQUYsQ0FBTixHQUFZQSxFQUFFLEVBQUYsQ0FBL0IsR0FBdUNBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLEVBQUYsQ0FBbEQsR0FDQUEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVdBLEVBQUUsRUFBRixDQURYLEdBQ21CQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBRC9CLEdBQ3VDQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBRDlEO0FBRUE2QixNQUFJLENBQUosSUFBVSxDQUFFN0IsRUFBRSxDQUFGLENBQUYsR0FBT0EsRUFBRSxDQUFGLENBQVAsR0FBYUEsRUFBRSxFQUFGLENBQWIsR0FBcUJBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLEVBQUYsQ0FBTixHQUFZQSxFQUFFLEVBQUYsQ0FBakMsR0FBeUNBLEVBQUUsQ0FBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLEVBQUYsQ0FBcEQsR0FDRUEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVdBLEVBQUUsRUFBRixDQURiLEdBQ3FCQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBWUEsRUFBRSxFQUFGLENBRGpDLEdBQ3lDQSxFQUFFLEVBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxDQUFGLENBRDlEO0FBRUE2QixNQUFJLEVBQUosSUFBWTdCLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFXQSxFQUFFLEVBQUYsQ0FBWCxHQUFtQkEsRUFBRSxDQUFGLElBQU1BLEVBQUUsRUFBRixDQUFOLEdBQVlBLEVBQUUsRUFBRixDQUEvQixHQUF1Q0EsRUFBRSxDQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUFsRCxHQUNBQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBV0EsRUFBRSxFQUFGLENBRFgsR0FDbUJBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFZQSxFQUFFLEVBQUYsQ0FEL0IsR0FDdUNBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLENBQUYsQ0FEOUQ7O0FBR0E2QixNQUFJLENBQUosSUFBWTdCLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLEVBQUYsQ0FBVixHQUFrQkEsRUFBRSxDQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUE3QixHQUFxQ0EsRUFBRSxDQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUFoRCxHQUNBQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBRFYsR0FDa0JBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLENBQUYsQ0FEN0IsR0FDcUNBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLENBQUYsQ0FENUQ7QUFFQTZCLE1BQUksQ0FBSixJQUFVLENBQUU3QixFQUFFLENBQUYsQ0FBRixHQUFPQSxFQUFFLENBQUYsQ0FBUCxHQUFZQSxFQUFFLEVBQUYsQ0FBWixHQUFvQkEsRUFBRSxDQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUEvQixHQUF1Q0EsRUFBRSxDQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsRUFBRixDQUFsRCxHQUNFQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBRFosR0FDb0JBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLENBQUYsQ0FEL0IsR0FDdUNBLEVBQUUsRUFBRixJQUFNQSxFQUFFLENBQUYsQ0FBTixHQUFXQSxFQUFFLENBQUYsQ0FENUQ7QUFFQTZCLE1BQUksRUFBSixJQUFZN0IsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsRUFBRixDQUFWLEdBQWtCQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQTdCLEdBQXFDQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQWhELEdBQ0FBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLEVBQUYsQ0FEVixHQUNrQkEsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsQ0FBRixDQUQ3QixHQUNxQ0EsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsQ0FBRixDQUQ1RDtBQUVBNkIsTUFBSSxFQUFKLElBQVUsQ0FBRTdCLEVBQUUsQ0FBRixDQUFGLEdBQU9BLEVBQUUsQ0FBRixDQUFQLEdBQVlBLEVBQUUsRUFBRixDQUFaLEdBQW9CQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQS9CLEdBQXVDQSxFQUFFLENBQUYsSUFBTUEsRUFBRSxDQUFGLENBQU4sR0FBV0EsRUFBRSxFQUFGLENBQWxELEdBQ0VBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLEVBQUYsQ0FEWixHQUNvQkEsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsQ0FBRixDQUQvQixHQUN1Q0EsRUFBRSxFQUFGLElBQU1BLEVBQUUsQ0FBRixDQUFOLEdBQVdBLEVBQUUsQ0FBRixDQUQ1RDs7QUFHQTZCLE1BQUksQ0FBSixJQUFVLENBQUU3QixFQUFFLENBQUYsQ0FBRixHQUFPQSxFQUFFLENBQUYsQ0FBUCxHQUFZQSxFQUFFLEVBQUYsQ0FBWixHQUFvQkEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsRUFBRixDQUE5QixHQUFzQ0EsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsRUFBRixDQUFoRCxHQUNFQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBRFosR0FDb0JBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLENBQUYsQ0FEOUIsR0FDc0NBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLENBQUYsQ0FEMUQ7QUFFQTZCLE1BQUksQ0FBSixJQUFZN0IsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsRUFBRixDQUFWLEdBQWtCQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBQTVCLEdBQW9DQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBQTlDLEdBQ0FBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLEVBQUYsQ0FEVixHQUNrQkEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsQ0FBRixDQUQ1QixHQUNvQ0EsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsQ0FBRixDQUQxRDtBQUVBNkIsTUFBSSxFQUFKLElBQVUsQ0FBRTdCLEVBQUUsQ0FBRixDQUFGLEdBQU9BLEVBQUUsQ0FBRixDQUFQLEdBQVlBLEVBQUUsRUFBRixDQUFaLEdBQW9CQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxDQUFGLENBQTlCLEdBQXNDQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBQWhELEdBQ0VBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLENBQUYsQ0FEWixHQUNvQkEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsQ0FBRixDQUQ5QixHQUNzQ0EsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsQ0FBRixDQUQxRDtBQUVBNkIsTUFBSSxFQUFKLElBQVk3QixFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxFQUFGLENBQVYsR0FBa0JBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLENBQUYsQ0FBNUIsR0FBb0NBLEVBQUUsQ0FBRixJQUFLQSxFQUFFLENBQUYsQ0FBTCxHQUFVQSxFQUFFLEVBQUYsQ0FBOUMsR0FDQUEsRUFBRSxDQUFGLElBQUtBLEVBQUUsQ0FBRixDQUFMLEdBQVVBLEVBQUUsQ0FBRixDQURWLEdBQ2tCQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxDQUFGLENBRDVCLEdBQ29DQSxFQUFFLENBQUYsSUFBS0EsRUFBRSxDQUFGLENBQUwsR0FBVUEsRUFBRSxDQUFGLENBRDFEOztBQUdBOEIsUUFBTTlCLEVBQUUsQ0FBRixJQUFLNkIsSUFBSSxDQUFKLENBQUwsR0FBYzdCLEVBQUUsQ0FBRixJQUFLNkIsSUFBSSxDQUFKLENBQW5CLEdBQTRCN0IsRUFBRSxDQUFGLElBQUs2QixJQUFJLENBQUosQ0FBakMsR0FBMEM3QixFQUFFLENBQUYsSUFBSzZCLElBQUksRUFBSixDQUFyRDtBQUNBLE1BQUlDLFFBQVEsQ0FBWixFQUFlO0FBQ2IsV0FBTyxJQUFQO0FBQ0Q7O0FBRURBLFFBQU0sSUFBSUEsR0FBVjtBQUNBLE9BQUs1RixJQUFJLENBQVQsRUFBWUEsSUFBSSxFQUFoQixFQUFvQkEsR0FBcEIsRUFBeUI7QUFDdkIrRCxNQUFFL0QsQ0FBRixJQUFPMkYsSUFBSTNGLENBQUosSUFBUzRGLEdBQWhCO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F0REQ7O0FBd0RBOzs7O0FBSUFoQyxRQUFRTyxTQUFSLENBQWtCMEIsTUFBbEIsR0FBMkIsWUFBVztBQUNwQyxTQUFPLEtBQUtILFlBQUwsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7QUFVQTlCLFFBQVFPLFNBQVIsQ0FBa0IyQixRQUFsQixHQUE2QixVQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUNDLEdBQXpDLEVBQThDO0FBQ3pFLE1BQUkvQixDQUFKLEVBQU9nQyxFQUFQLEVBQVdDLEVBQVgsRUFBZUMsRUFBZjs7QUFFQSxNQUFJUixTQUFTQyxLQUFULElBQWtCQyxXQUFXQyxHQUE3QixJQUFvQ0MsU0FBU0MsR0FBakQsRUFBc0Q7QUFDcEQsVUFBTSxjQUFOO0FBQ0Q7O0FBRURDLE9BQUssS0FBS0wsUUFBUUQsSUFBYixDQUFMO0FBQ0FPLE9BQUssS0FBS0osTUFBTUQsTUFBWCxDQUFMO0FBQ0FNLE9BQUssS0FBS0gsTUFBTUQsSUFBWCxDQUFMOztBQUVBOUIsTUFBSSxLQUFLSixRQUFUOztBQUVBSSxJQUFFLENBQUYsSUFBUSxJQUFJZ0MsRUFBWjtBQUNBaEMsSUFBRSxDQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLENBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsQ0FBRixJQUFRLENBQVI7O0FBRUFBLElBQUUsQ0FBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxDQUFGLElBQVEsSUFBSWlDLEVBQVo7QUFDQWpDLElBQUUsQ0FBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxDQUFGLElBQVEsQ0FBUjs7QUFFQUEsSUFBRSxDQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLENBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsRUFBRixJQUFRLENBQUMsQ0FBRCxHQUFLa0MsRUFBYjtBQUNBbEMsSUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQUEsSUFBRSxFQUFGLElBQVEsRUFBRTJCLFFBQVFELElBQVYsSUFBa0JNLEVBQTFCO0FBQ0FoQyxJQUFFLEVBQUYsSUFBUSxFQUFFNkIsTUFBTUQsTUFBUixJQUFrQkssRUFBMUI7QUFDQWpDLElBQUUsRUFBRixJQUFRLEVBQUUrQixNQUFNRCxJQUFSLElBQWdCSSxFQUF4QjtBQUNBbEMsSUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQSxTQUFPLElBQVA7QUFDRCxDQWxDRDs7QUFvQ0E7Ozs7Ozs7Ozs7QUFVQVQsUUFBUU8sU0FBUixDQUFrQnFDLEtBQWxCLEdBQTBCLFVBQVNULElBQVQsRUFBZUMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5Q0MsR0FBekMsRUFBOEM7QUFDdEUsU0FBTyxLQUFLckYsTUFBTCxDQUFZLElBQUk2QyxPQUFKLEdBQWNrQyxRQUFkLENBQXVCQyxJQUF2QixFQUE2QkMsS0FBN0IsRUFBb0NDLE1BQXBDLEVBQTRDQyxHQUE1QyxFQUFpREMsSUFBakQsRUFBdURDLEdBQXZELENBQVosQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7QUFVQXhDLFFBQVFPLFNBQVIsQ0FBa0JzQyxVQUFsQixHQUErQixVQUFTVixJQUFULEVBQWVDLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUNDLEdBQXpDLEVBQThDO0FBQzNFLE1BQUkvQixDQUFKLEVBQU9nQyxFQUFQLEVBQVdDLEVBQVgsRUFBZUMsRUFBZjs7QUFFQSxNQUFJUixTQUFTQyxLQUFULElBQWtCRSxRQUFRRCxNQUExQixJQUFvQ0UsU0FBU0MsR0FBakQsRUFBc0Q7QUFDcEQsVUFBTSxjQUFOO0FBQ0Q7QUFDRCxNQUFJRCxRQUFRLENBQVosRUFBZTtBQUNiLFVBQU0sV0FBTjtBQUNEO0FBQ0QsTUFBSUMsT0FBTyxDQUFYLEVBQWM7QUFDWixVQUFNLFVBQU47QUFDRDs7QUFFREMsT0FBSyxLQUFLTCxRQUFRRCxJQUFiLENBQUw7QUFDQU8sT0FBSyxLQUFLSixNQUFNRCxNQUFYLENBQUw7QUFDQU0sT0FBSyxLQUFLSCxNQUFNRCxJQUFYLENBQUw7O0FBRUE5QixNQUFJLEtBQUtKLFFBQVQ7O0FBRUFJLElBQUcsQ0FBSCxJQUFRLElBQUk4QixJQUFKLEdBQVdFLEVBQW5CO0FBQ0FoQyxJQUFHLENBQUgsSUFBUSxDQUFSO0FBQ0FBLElBQUcsQ0FBSCxJQUFRLENBQVI7QUFDQUEsSUFBRyxDQUFILElBQVEsQ0FBUjs7QUFFQUEsSUFBRyxDQUFILElBQVEsQ0FBUjtBQUNBQSxJQUFHLENBQUgsSUFBUSxJQUFJOEIsSUFBSixHQUFXRyxFQUFuQjtBQUNBakMsSUFBRyxDQUFILElBQVEsQ0FBUjtBQUNBQSxJQUFHLENBQUgsSUFBUSxDQUFSOztBQUVBQSxJQUFHLENBQUgsSUFBUSxDQUFDMkIsUUFBUUQsSUFBVCxJQUFpQk0sRUFBekI7QUFDQWhDLElBQUcsQ0FBSCxJQUFRLENBQUM2QixNQUFNRCxNQUFQLElBQWlCSyxFQUF6QjtBQUNBakMsSUFBRSxFQUFGLElBQVEsRUFBRStCLE1BQU1ELElBQVIsSUFBZ0JJLEVBQXhCO0FBQ0FsQyxJQUFFLEVBQUYsSUFBUSxDQUFDLENBQVQ7O0FBRUFBLElBQUUsRUFBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLEVBQUYsSUFBUSxDQUFDLENBQUQsR0FBSzhCLElBQUwsR0FBWUMsR0FBWixHQUFrQkcsRUFBMUI7QUFDQWxDLElBQUUsRUFBRixJQUFRLENBQVI7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQ0F4Q0Q7O0FBMENBOzs7Ozs7Ozs7O0FBVUFULFFBQVFPLFNBQVIsQ0FBa0J1QyxPQUFsQixHQUE0QixVQUFTWCxJQUFULEVBQWVDLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUNDLEdBQXpDLEVBQThDO0FBQ3hFLFNBQU8sS0FBS3JGLE1BQUwsQ0FBWSxJQUFJNkMsT0FBSixHQUFjNkMsVUFBZCxDQUF5QlYsSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDQyxNQUF0QyxFQUE4Q0MsR0FBOUMsRUFBbURDLElBQW5ELEVBQXlEQyxHQUF6RCxDQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7OztBQVFBeEMsUUFBUU8sU0FBUixDQUFrQndDLGNBQWxCLEdBQW1DLFVBQVNDLElBQVQsRUFBZUMsTUFBZixFQUF1QlYsSUFBdkIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBQ25FLE1BQUkvQixDQUFKLEVBQU9rQyxFQUFQLEVBQVd6QyxDQUFYLEVBQWNnRCxFQUFkOztBQUVBLE1BQUlYLFNBQVNDLEdBQVQsSUFBZ0JTLFdBQVcsQ0FBL0IsRUFBa0M7QUFDaEMsVUFBTSxjQUFOO0FBQ0Q7QUFDRCxNQUFJVixRQUFRLENBQVosRUFBZTtBQUNiLFVBQU0sV0FBTjtBQUNEO0FBQ0QsTUFBSUMsT0FBTyxDQUFYLEVBQWM7QUFDWixVQUFNLFVBQU47QUFDRDs7QUFFRFEsU0FBT0csS0FBS0MsRUFBTCxHQUFVSixJQUFWLEdBQWlCLEdBQWpCLEdBQXVCLENBQTlCO0FBQ0E5QyxNQUFJaUQsS0FBS0UsR0FBTCxDQUFTTCxJQUFULENBQUo7QUFDQSxNQUFJOUMsTUFBTSxDQUFWLEVBQWE7QUFDWCxVQUFNLGNBQU47QUFDRDs7QUFFRHlDLE9BQUssS0FBS0gsTUFBTUQsSUFBWCxDQUFMO0FBQ0FXLE9BQUtDLEtBQUtHLEdBQUwsQ0FBU04sSUFBVCxJQUFpQjlDLENBQXRCOztBQUVBTyxNQUFJLEtBQUtKLFFBQVQ7O0FBRUFJLElBQUUsQ0FBRixJQUFReUMsS0FBS0QsTUFBYjtBQUNBeEMsSUFBRSxDQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLENBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsQ0FBRixJQUFRLENBQVI7O0FBRUFBLElBQUUsQ0FBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxDQUFGLElBQVF5QyxFQUFSO0FBQ0F6QyxJQUFFLENBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsQ0FBRixJQUFRLENBQVI7O0FBRUFBLElBQUUsQ0FBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxDQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLEVBQUYsSUFBUSxFQUFFK0IsTUFBTUQsSUFBUixJQUFnQkksRUFBeEI7QUFDQWxDLElBQUUsRUFBRixJQUFRLENBQUMsQ0FBVDs7QUFFQUEsSUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsRUFBRixJQUFRLENBQUMsQ0FBRCxHQUFLOEIsSUFBTCxHQUFZQyxHQUFaLEdBQWtCRyxFQUExQjtBQUNBbEMsSUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQSxTQUFPLElBQVA7QUFDRCxDQTdDRDs7QUErQ0E7Ozs7Ozs7O0FBUUFULFFBQVFPLFNBQVIsQ0FBa0JnRCxXQUFsQixHQUFnQyxVQUFTUCxJQUFULEVBQWVDLE1BQWYsRUFBdUJWLElBQXZCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNoRSxTQUFPLEtBQUtyRixNQUFMLENBQVksSUFBSTZDLE9BQUosR0FBYytDLGNBQWQsQ0FBNkJDLElBQTdCLEVBQW1DQyxNQUFuQyxFQUEyQ1YsSUFBM0MsRUFBaURDLEdBQWpELENBQVosQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7QUFPQXhDLFFBQVFPLFNBQVIsQ0FBa0JpRCxRQUFsQixHQUE2QixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUM3QyxNQUFJbEQsSUFBSSxLQUFLSixRQUFiO0FBQ0FJLElBQUUsQ0FBRixJQUFPZ0QsQ0FBUCxDQUFXaEQsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbENBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU9pRCxDQUFQLENBQVdqRCxFQUFFLENBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbENBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLEVBQUYsSUFBUWtELENBQVIsQ0FBWWxELEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbENBLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbEMsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7OztBQU9BVCxRQUFRTyxTQUFSLENBQWtCcUQsS0FBbEIsR0FBMEIsVUFBU0gsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFDMUMsTUFBSWxELElBQUksS0FBS0osUUFBYjtBQUNBSSxJQUFFLENBQUYsS0FBUWdELENBQVIsQ0FBWWhELEVBQUUsQ0FBRixLQUFRaUQsQ0FBUixDQUFZakQsRUFBRSxDQUFGLEtBQVNrRCxDQUFUO0FBQ3hCbEQsSUFBRSxDQUFGLEtBQVFnRCxDQUFSLENBQVloRCxFQUFFLENBQUYsS0FBUWlELENBQVIsQ0FBWWpELEVBQUUsQ0FBRixLQUFTa0QsQ0FBVDtBQUN4QmxELElBQUUsQ0FBRixLQUFRZ0QsQ0FBUixDQUFZaEQsRUFBRSxDQUFGLEtBQVFpRCxDQUFSLENBQVlqRCxFQUFFLEVBQUYsS0FBU2tELENBQVQ7QUFDeEJsRCxJQUFFLENBQUYsS0FBUWdELENBQVIsQ0FBWWhELEVBQUUsQ0FBRixLQUFRaUQsQ0FBUixDQUFZakQsRUFBRSxFQUFGLEtBQVNrRCxDQUFUO0FBQ3hCLFNBQU8sSUFBUDtBQUNELENBUEQ7O0FBU0E7Ozs7Ozs7QUFPQTNELFFBQVFPLFNBQVIsQ0FBa0JzRCxZQUFsQixHQUFpQyxVQUFTSixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUNqRCxNQUFJbEQsSUFBSSxLQUFLSixRQUFiO0FBQ0FJLElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRZ0QsQ0FBUjtBQUNsQ2hELElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRaUQsQ0FBUjtBQUNsQ2pELElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRa0QsQ0FBUjtBQUNsQ2xELElBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbEMsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7OztBQU9BVCxRQUFRTyxTQUFSLENBQWtCdUQsU0FBbEIsR0FBOEIsVUFBU0wsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFDOUMsTUFBSWxELElBQUksS0FBS0osUUFBYjtBQUNBSSxJQUFFLEVBQUYsS0FBU0EsRUFBRSxDQUFGLElBQU9nRCxDQUFQLEdBQVdoRCxFQUFFLENBQUYsSUFBT2lELENBQWxCLEdBQXNCakQsRUFBRSxDQUFGLElBQVFrRCxDQUF2QztBQUNBbEQsSUFBRSxFQUFGLEtBQVNBLEVBQUUsQ0FBRixJQUFPZ0QsQ0FBUCxHQUFXaEQsRUFBRSxDQUFGLElBQU9pRCxDQUFsQixHQUFzQmpELEVBQUUsQ0FBRixJQUFRa0QsQ0FBdkM7QUFDQWxELElBQUUsRUFBRixLQUFTQSxFQUFFLENBQUYsSUFBT2dELENBQVAsR0FBV2hELEVBQUUsQ0FBRixJQUFPaUQsQ0FBbEIsR0FBc0JqRCxFQUFFLEVBQUYsSUFBUWtELENBQXZDO0FBQ0FsRCxJQUFFLEVBQUYsS0FBU0EsRUFBRSxDQUFGLElBQU9nRCxDQUFQLEdBQVdoRCxFQUFFLENBQUYsSUFBT2lELENBQWxCLEdBQXNCakQsRUFBRSxFQUFGLElBQVFrRCxDQUF2QztBQUNBLFNBQU8sSUFBUDtBQUNELENBUEQ7O0FBU0E7Ozs7Ozs7OztBQVNBM0QsUUFBUU8sU0FBUixDQUFrQndELFNBQWxCLEdBQThCLFVBQVNDLEtBQVQsRUFBZ0JQLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckQsTUFBSWxELENBQUosRUFBT1AsQ0FBUCxFQUFVK0QsQ0FBVixFQUFhQyxHQUFiLEVBQWtCQyxJQUFsQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsRUFBcEMsRUFBd0NDLEVBQXhDLEVBQTRDQyxFQUE1QyxFQUFnREMsRUFBaEQ7O0FBRUFWLFVBQVFiLEtBQUtDLEVBQUwsR0FBVVksS0FBVixHQUFrQixHQUExQjtBQUNBdkQsTUFBSSxLQUFLSixRQUFUOztBQUVBSCxNQUFJaUQsS0FBS0UsR0FBTCxDQUFTVyxLQUFULENBQUo7QUFDQUMsTUFBSWQsS0FBS0csR0FBTCxDQUFTVSxLQUFULENBQUo7O0FBRUEsTUFBSSxNQUFNUCxDQUFOLElBQVcsTUFBTUMsQ0FBakIsSUFBc0IsTUFBTUMsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQSxRQUFJRixJQUFJLENBQVIsRUFBVztBQUNUdkQsVUFBSSxDQUFDQSxDQUFMO0FBQ0Q7QUFDRE8sTUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUcsQ0FBSCxJQUFRLENBQVIsQ0FBWUEsRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNsQ0EsTUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBT3dELENBQVAsQ0FBV3hELEVBQUcsQ0FBSCxJQUFPLENBQUNQLENBQVIsQ0FBWU8sRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNsQ0EsTUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBT1AsQ0FBUCxDQUFXTyxFQUFFLEVBQUYsSUFBUXdELENBQVIsQ0FBWXhELEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbENBLE1BQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLEVBQUYsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbkMsR0FURCxNQVNPLElBQUksTUFBTWdELENBQU4sSUFBVyxNQUFNQyxDQUFqQixJQUFzQixNQUFNQyxDQUFoQyxFQUFtQztBQUN4QztBQUNBLFFBQUlELElBQUksQ0FBUixFQUFXO0FBQ1R4RCxVQUFJLENBQUNBLENBQUw7QUFDRDtBQUNETyxNQUFFLENBQUYsSUFBT3dELENBQVAsQ0FBV3hELEVBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRyxDQUFILElBQVFQLENBQVIsQ0FBWU8sRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNsQ0EsTUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUcsQ0FBSCxJQUFRLENBQVIsQ0FBWUEsRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNsQ0EsTUFBRSxDQUFGLElBQU0sQ0FBQ1AsQ0FBUCxDQUFXTyxFQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUUsRUFBRixJQUFRd0QsQ0FBUixDQUFZeEQsRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNsQ0EsTUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFXQSxFQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUUsRUFBRixJQUFRLENBQVIsQ0FBWUEsRUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNuQyxHQVRNLE1BU0EsSUFBSSxNQUFNZ0QsQ0FBTixJQUFXLE1BQU1DLENBQWpCLElBQXNCLE1BQU1DLENBQWhDLEVBQW1DO0FBQ3hDO0FBQ0EsUUFBSUEsSUFBSSxDQUFSLEVBQVc7QUFDVHpELFVBQUksQ0FBQ0EsQ0FBTDtBQUNEO0FBQ0RPLE1BQUUsQ0FBRixJQUFPd0QsQ0FBUCxDQUFXeEQsRUFBRSxDQUFGLElBQU0sQ0FBQ1AsQ0FBUCxDQUFXTyxFQUFHLENBQUgsSUFBUSxDQUFSLENBQVlBLEVBQUUsRUFBRixJQUFRLENBQVI7QUFDbENBLE1BQUUsQ0FBRixJQUFPUCxDQUFQLENBQVdPLEVBQUUsQ0FBRixJQUFPd0QsQ0FBUCxDQUFXeEQsRUFBRyxDQUFILElBQVEsQ0FBUixDQUFZQSxFQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ2xDQSxNQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxFQUFGLElBQVEsQ0FBUixDQUFZQSxFQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ2xDQSxNQUFFLENBQUYsSUFBTyxDQUFQLENBQVdBLEVBQUUsQ0FBRixJQUFPLENBQVAsQ0FBV0EsRUFBRSxFQUFGLElBQVEsQ0FBUixDQUFZQSxFQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ25DLEdBVE0sTUFTQTtBQUNMO0FBQ0F5RCxVQUFNZixLQUFLd0IsSUFBTCxDQUFVbEIsSUFBRUEsQ0FBRixHQUFNQyxJQUFFQSxDQUFSLEdBQVlDLElBQUVBLENBQXhCLENBQU47QUFDQSxRQUFJTyxRQUFRLENBQVosRUFBZTtBQUNiQyxhQUFPLElBQUlELEdBQVg7QUFDQVQsV0FBS1UsSUFBTDtBQUNBVCxXQUFLUyxJQUFMO0FBQ0FSLFdBQUtRLElBQUw7QUFDRDtBQUNEQyxTQUFLLElBQUlILENBQVQ7QUFDQUksU0FBS1osSUFBSUMsQ0FBVDtBQUNBWSxTQUFLWixJQUFJQyxDQUFUO0FBQ0FZLFNBQUtaLElBQUlGLENBQVQ7QUFDQWUsU0FBS2YsSUFBSXZELENBQVQ7QUFDQXVFLFNBQUtmLElBQUl4RCxDQUFUO0FBQ0F3RSxTQUFLZixJQUFJekQsQ0FBVDs7QUFFQU8sTUFBRyxDQUFILElBQVFnRCxJQUFFQSxDQUFGLEdBQUlXLEVBQUosR0FBVUgsQ0FBbEI7QUFDQXhELE1BQUcsQ0FBSCxJQUFRNEQsS0FBSUQsRUFBSixHQUFTTSxFQUFqQjtBQUNBakUsTUFBRyxDQUFILElBQVE4RCxLQUFJSCxFQUFKLEdBQVNLLEVBQWpCO0FBQ0FoRSxNQUFHLENBQUgsSUFBUSxDQUFSOztBQUVBQSxNQUFHLENBQUgsSUFBUTRELEtBQUlELEVBQUosR0FBU00sRUFBakI7QUFDQWpFLE1BQUcsQ0FBSCxJQUFRaUQsSUFBRUEsQ0FBRixHQUFJVSxFQUFKLEdBQVVILENBQWxCO0FBQ0F4RCxNQUFHLENBQUgsSUFBUTZELEtBQUlGLEVBQUosR0FBU0ksRUFBakI7QUFDQS9ELE1BQUcsQ0FBSCxJQUFRLENBQVI7O0FBRUFBLE1BQUcsQ0FBSCxJQUFROEQsS0FBSUgsRUFBSixHQUFTSyxFQUFqQjtBQUNBaEUsTUFBRyxDQUFILElBQVE2RCxLQUFJRixFQUFKLEdBQVNJLEVBQWpCO0FBQ0EvRCxNQUFFLEVBQUYsSUFBUWtELElBQUVBLENBQUYsR0FBSVMsRUFBSixHQUFVSCxDQUFsQjtBQUNBeEQsTUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQUEsTUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNBQSxNQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ0FBLE1BQUUsRUFBRixJQUFRLENBQVI7QUFDQUEsTUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBM0VEOztBQTZFQTs7Ozs7Ozs7O0FBU0FULFFBQVFPLFNBQVIsQ0FBa0JxRSxNQUFsQixHQUEyQixVQUFTWixLQUFULEVBQWdCUCxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQ2xELFNBQU8sS0FBS3hHLE1BQUwsQ0FBWSxJQUFJNkMsT0FBSixHQUFjK0QsU0FBZCxDQUF3QkMsS0FBeEIsRUFBK0JQLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQ0MsQ0FBckMsQ0FBWixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BM0QsUUFBUU8sU0FBUixDQUFrQnNFLFNBQWxCLEdBQThCLFVBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQkMsSUFBckIsRUFBMkJDLE9BQTNCLEVBQW9DQyxPQUFwQyxFQUE2Q0MsT0FBN0MsRUFBc0RDLEdBQXRELEVBQTJEQyxHQUEzRCxFQUFnRUMsR0FBaEUsRUFBcUU7QUFDakcsTUFBSTdFLENBQUosRUFBTzhFLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxFQUFmLEVBQW1CQyxHQUFuQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsR0FBcEMsRUFBeUNDLEVBQXpDLEVBQTZDQyxFQUE3QyxFQUFpREMsRUFBakQ7O0FBRUFWLE9BQUtOLFVBQVVILElBQWY7QUFDQVUsT0FBS04sVUFBVUgsSUFBZjtBQUNBVSxPQUFLTixVQUFVSCxJQUFmOztBQUVBO0FBQ0FVLFFBQU0sSUFBSXZDLEtBQUt3QixJQUFMLENBQVVZLEtBQUdBLEVBQUgsR0FBUUMsS0FBR0EsRUFBWCxHQUFnQkMsS0FBR0EsRUFBN0IsQ0FBVjtBQUNBRixRQUFNRyxHQUFOO0FBQ0FGLFFBQU1FLEdBQU47QUFDQUQsUUFBTUMsR0FBTjs7QUFFQTtBQUNBQyxPQUFLSCxLQUFLRixHQUFMLEdBQVdHLEtBQUtKLEdBQXJCO0FBQ0FPLE9BQUtILEtBQUtMLEdBQUwsR0FBV0csS0FBS0QsR0FBckI7QUFDQU8sT0FBS04sS0FBS0YsR0FBTCxHQUFXRyxLQUFLSixHQUFyQjs7QUFFQTtBQUNBVSxRQUFNLElBQUkzQyxLQUFLd0IsSUFBTCxDQUFVZ0IsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUFYLEdBQWdCQyxLQUFHQSxFQUE3QixDQUFWO0FBQ0FGLFFBQU1HLEdBQU47QUFDQUYsUUFBTUUsR0FBTjtBQUNBRCxRQUFNQyxHQUFOOztBQUVBO0FBQ0FDLE9BQUtILEtBQUtILEVBQUwsR0FBVUksS0FBS0wsRUFBcEI7QUFDQVEsT0FBS0gsS0FBS04sRUFBTCxHQUFVSSxLQUFLRixFQUFwQjtBQUNBUSxPQUFLTixLQUFLSCxFQUFMLEdBQVVJLEtBQUtMLEVBQXBCOztBQUVBO0FBQ0E5RSxNQUFJLEtBQUtKLFFBQVQ7QUFDQUksSUFBRSxDQUFGLElBQU9rRixFQUFQO0FBQ0FsRixJQUFFLENBQUYsSUFBT3NGLEVBQVA7QUFDQXRGLElBQUUsQ0FBRixJQUFPLENBQUM4RSxFQUFSO0FBQ0E5RSxJQUFFLENBQUYsSUFBTyxDQUFQOztBQUVBQSxJQUFFLENBQUYsSUFBT21GLEVBQVA7QUFDQW5GLElBQUUsQ0FBRixJQUFPdUYsRUFBUDtBQUNBdkYsSUFBRSxDQUFGLElBQU8sQ0FBQytFLEVBQVI7QUFDQS9FLElBQUUsQ0FBRixJQUFPLENBQVA7O0FBRUFBLElBQUUsQ0FBRixJQUFPb0YsRUFBUDtBQUNBcEYsSUFBRSxDQUFGLElBQU93RixFQUFQO0FBQ0F4RixJQUFFLEVBQUYsSUFBUSxDQUFDZ0YsRUFBVDtBQUNBaEYsSUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQUEsSUFBRSxFQUFGLElBQVEsQ0FBUjtBQUNBQSxJQUFFLEVBQUYsSUFBUSxDQUFSO0FBQ0FBLElBQUUsRUFBRixJQUFRLENBQVI7QUFDQUEsSUFBRSxFQUFGLElBQVEsQ0FBUjs7QUFFQTtBQUNBLFNBQU8sS0FBS3FELFNBQUwsQ0FBZSxDQUFDZ0IsSUFBaEIsRUFBc0IsQ0FBQ0MsSUFBdkIsRUFBNkIsQ0FBQ0MsSUFBOUIsQ0FBUDtBQUNELENBckREOztBQXVEQTs7Ozs7OztBQU9BaEYsUUFBUU8sU0FBUixDQUFrQjJGLE1BQWxCLEdBQTJCLFVBQVNwQixJQUFULEVBQWVDLElBQWYsRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQ0MsT0FBcEMsRUFBNkNDLE9BQTdDLEVBQXNEQyxHQUF0RCxFQUEyREMsR0FBM0QsRUFBZ0VDLEdBQWhFLEVBQXFFO0FBQzlGLFNBQU8sS0FBS25JLE1BQUwsQ0FBWSxJQUFJNkMsT0FBSixHQUFjNkUsU0FBZCxDQUF3QkMsSUFBeEIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsT0FBMUMsRUFBbURDLE9BQW5ELEVBQTREQyxPQUE1RCxFQUFxRUMsR0FBckUsRUFBMEVDLEdBQTFFLEVBQStFQyxHQUEvRSxDQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQXRGLFFBQVFPLFNBQVIsQ0FBa0I0RixVQUFsQixHQUErQixVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUF1QjtBQUNwRCxNQUFJQyxNQUFNLElBQUl0RyxPQUFKLEVBQVY7QUFDQSxNQUFJUyxJQUFJNkYsSUFBSWpHLFFBQVo7O0FBRUEsTUFBSWtHLE1BQU1ILE1BQU0sQ0FBTixJQUFXQyxNQUFNLENBQU4sQ0FBWCxHQUFzQkQsTUFBTSxDQUFOLElBQVdDLE1BQU0sQ0FBTixDQUFqQyxHQUE0Q0QsTUFBTSxDQUFOLElBQVdDLE1BQU0sQ0FBTixDQUF2RCxHQUFrRUQsTUFBTSxDQUFOLElBQVdDLE1BQU0sQ0FBTixDQUF2Rjs7QUFFQTVGLElBQUcsQ0FBSCxJQUFROEYsTUFBTUYsTUFBTSxDQUFOLElBQVdELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRyxDQUFILElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRyxDQUFILElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRyxDQUFILElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6Qjs7QUFFQTNGLElBQUcsQ0FBSCxJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUcsQ0FBSCxJQUFROEYsTUFBTUYsTUFBTSxDQUFOLElBQVdELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRyxDQUFILElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRyxDQUFILElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6Qjs7QUFFQTNGLElBQUcsQ0FBSCxJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUcsQ0FBSCxJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUUsRUFBRixJQUFROEYsTUFBTUYsTUFBTSxDQUFOLElBQVdELE1BQU0sQ0FBTixDQUF6QjtBQUNBM0YsSUFBRSxFQUFGLElBQVksQ0FBRTRGLE1BQU0sQ0FBTixDQUFGLEdBQWFELE1BQU0sQ0FBTixDQUF6Qjs7QUFFQTNGLElBQUUsRUFBRixJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUUsRUFBRixJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUUsRUFBRixJQUFZLENBQUU0RixNQUFNLENBQU4sQ0FBRixHQUFhRCxNQUFNLENBQU4sQ0FBekI7QUFDQTNGLElBQUUsRUFBRixJQUFROEYsTUFBTUYsTUFBTSxDQUFOLElBQVdELE1BQU0sQ0FBTixDQUF6Qjs7QUFFQSxTQUFPLEtBQUtqSixNQUFMLENBQVltSixHQUFaLENBQVA7QUFDRCxDQTNCRDs7QUE2QkE7Ozs7Ozs7QUFPQXRHLFFBQVFPLFNBQVIsQ0FBa0JpRyx1QkFBbEIsR0FBNEMsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQ0MsTUFBdEMsRUFBOENDLE1BQTlDLEVBQXNEQyxNQUF0RCxFQUE4REMsTUFBOUQsRUFBc0VDLE1BQXRFLEVBQThFO0FBQ3hILE1BQUlwRyxJQUFJK0YsU0FBU0gsS0FBVCxHQUFpQkksU0FBU0gsS0FBMUIsR0FBa0NJLFNBQVNILEtBQW5EO0FBQ0EsU0FBTyxLQUFLUixVQUFMLENBQWdCLENBQUNNLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxLQUFmLEVBQXNCLENBQUM5RixDQUF2QixDQUFoQixFQUEyQyxDQUFDa0csTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxNQUFqQixFQUF5QixDQUF6QixDQUEzQyxDQUFQO0FBQ0QsQ0FIRDs7QUFLQTs7Ozs7QUFLTyxJQUFNekYsNEJBQVUsU0FBVkEsT0FBVSxDQUFTdkIsT0FBVCxFQUFrQjtBQUN2QyxNQUFJc0IsSUFBSSxJQUFJakIsWUFBSixDQUFpQixDQUFqQixDQUFSO0FBQ0EsTUFBSUwsV0FBVyxRQUFPQSxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQWxDLEVBQTRDO0FBQzFDc0IsTUFBRSxDQUFGLElBQU90QixRQUFRLENBQVIsQ0FBUCxDQUFtQnNCLEVBQUUsQ0FBRixJQUFPdEIsUUFBUSxDQUFSLENBQVAsQ0FBbUJzQixFQUFFLENBQUYsSUFBT3RCLFFBQVEsQ0FBUixDQUFQO0FBQ3ZDO0FBQ0QsT0FBS0ksUUFBTCxHQUFnQmtCLENBQWhCO0FBQ0QsQ0FOTTs7QUFRUDs7OztBQUlBQyxRQUFRakIsU0FBUixDQUFrQjJHLFNBQWxCLEdBQThCLFlBQVc7QUFDdkMsTUFBSTNGLElBQUksS0FBS2xCLFFBQWI7QUFDQSxNQUFJNEQsSUFBSTFDLEVBQUUsQ0FBRixDQUFSO0FBQUEsTUFBY3BCLElBQUlvQixFQUFFLENBQUYsQ0FBbEI7QUFBQSxNQUF3QmQsSUFBSWMsRUFBRSxDQUFGLENBQTVCO0FBQUEsTUFBa0M0RixJQUFJaEUsS0FBS3dCLElBQUwsQ0FBVVYsSUFBRUEsQ0FBRixHQUFJOUQsSUFBRUEsQ0FBTixHQUFRTSxJQUFFQSxDQUFwQixDQUF0QztBQUNBLE1BQUcwRyxDQUFILEVBQUs7QUFDSCxRQUFHQSxLQUFLLENBQVIsRUFDSSxPQUFPLElBQVA7QUFDSixHQUhGLE1BR1E7QUFDTDVGLE1BQUUsQ0FBRixJQUFPLENBQVAsQ0FBVUEsRUFBRSxDQUFGLElBQU8sQ0FBUCxDQUFVQSxFQUFFLENBQUYsSUFBTyxDQUFQO0FBQ3BCLFdBQU8sSUFBUDtBQUNEO0FBQ0Q0RixNQUFJLElBQUVBLENBQU47QUFDQTVGLElBQUUsQ0FBRixJQUFPMEMsSUFBRWtELENBQVQsQ0FBWTVGLEVBQUUsQ0FBRixJQUFPcEIsSUFBRWdILENBQVQsQ0FBWTVGLEVBQUUsQ0FBRixJQUFPZCxJQUFFMEcsQ0FBVDtBQUN4QixTQUFPLElBQVA7QUFDRixDQWJEOztBQWVBOzs7OztBQUtPLElBQU14Riw0QkFBVSxTQUFWQSxPQUFVLENBQVMxQixPQUFULEVBQWtCO0FBQ3ZDLE1BQUlzQixJQUFJLElBQUlqQixZQUFKLENBQWlCLENBQWpCLENBQVI7QUFDQSxNQUFJTCxXQUFXLFFBQU9BLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbEMsRUFBNEM7QUFDMUNzQixNQUFFLENBQUYsSUFBT3RCLFFBQVEsQ0FBUixDQUFQLENBQW1Cc0IsRUFBRSxDQUFGLElBQU90QixRQUFRLENBQVIsQ0FBUCxDQUFtQnNCLEVBQUUsQ0FBRixJQUFPdEIsUUFBUSxDQUFSLENBQVAsQ0FBbUJzQixFQUFFLENBQUYsSUFBT3RCLFFBQVEsQ0FBUixDQUFQO0FBQzFEO0FBQ0QsT0FBS0ksUUFBTCxHQUFnQmtCLENBQWhCO0FBQ0QsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQ2x0QlM2RixXLEdBQUFBLFc7UUFvQkFDLGEsR0FBQUEsYTtRQXlDQUMsVSxHQUFBQSxVO1FBZ0NBQyxlLEdBQUFBLGU7O0FBekdoQjs7OztBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7O0FBT08sU0FBU0gsV0FBVCxDQUFxQkksRUFBckIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxNQUFJQyxVQUFVTixjQUFjRyxFQUFkLEVBQWtCQyxPQUFsQixFQUEyQkMsT0FBM0IsQ0FBZDtBQUNBLE1BQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1pDLFlBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVETCxLQUFHTSxVQUFILENBQWNILE9BQWQ7QUFDQUgsS0FBR0csT0FBSCxHQUFhQSxPQUFiOztBQUVBLFNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT08sU0FBU04sYUFBVCxDQUF1QkcsRUFBdkIsRUFBMkJDLE9BQTNCLEVBQW9DQyxPQUFwQyxFQUE2QztBQUNsRDtBQUNBLE1BQUkxSSxlQUFlc0ksV0FBV0UsRUFBWCxFQUFlQSxHQUFHTyxhQUFsQixFQUFpQ04sT0FBakMsQ0FBbkI7QUFDQSxNQUFJeEksaUJBQWlCcUksV0FBV0UsRUFBWCxFQUFlQSxHQUFHUSxlQUFsQixFQUFtQ04sT0FBbkMsQ0FBckI7QUFDQSxNQUFJLENBQUMxSSxZQUFELElBQWlCLENBQUNDLGNBQXRCLEVBQXNDO0FBQ3BDLFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSTBJLFVBQVVILEdBQUdILGFBQUgsRUFBZDtBQUNBLE1BQUksQ0FBQ00sT0FBTCxFQUFjO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQUgsS0FBR1MsWUFBSCxDQUFnQk4sT0FBaEIsRUFBeUIzSSxZQUF6QjtBQUNBd0ksS0FBR1MsWUFBSCxDQUFnQk4sT0FBaEIsRUFBeUIxSSxjQUF6Qjs7QUFFQTtBQUNBdUksS0FBR1UsV0FBSCxDQUFlUCxPQUFmOztBQUVBO0FBQ0EsTUFBSVEsU0FBU1gsR0FBR1ksbUJBQUgsQ0FBdUJULE9BQXZCLEVBQWdDSCxHQUFHYSxXQUFuQyxDQUFiO0FBQ0EsTUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWCxRQUFJRyxRQUFRZCxHQUFHZSxpQkFBSCxDQUFxQlosT0FBckIsQ0FBWjtBQUNBQyxZQUFRQyxHQUFSLENBQVksNkJBQTZCUyxLQUF6QztBQUNBZCxPQUFHZ0IsYUFBSCxDQUFpQmIsT0FBakI7QUFDQUgsT0FBR2lCLFlBQUgsQ0FBZ0J4SixjQUFoQjtBQUNBdUksT0FBR2lCLFlBQUgsQ0FBZ0J6SixZQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FBTzJJLE9BQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNMLFVBQVQsQ0FBb0JFLEVBQXBCLEVBQXdCa0IsSUFBeEIsRUFBOEJ6TCxNQUE5QixFQUFzQztBQUMzQztBQUNBLE1BQUkwTCxTQUFTbkIsR0FBR29CLFlBQUgsQ0FBZ0JGLElBQWhCLENBQWI7QUFDQSxNQUFJQyxVQUFVLElBQWQsRUFBb0I7QUFDbEJmLFlBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0FMLEtBQUdxQixZQUFILENBQWdCRixNQUFoQixFQUF3QjFMLE1BQXhCOztBQUVBO0FBQ0F1SyxLQUFHc0IsYUFBSCxDQUFpQkgsTUFBakI7O0FBRUE7QUFDQSxNQUFJSSxXQUFXdkIsR0FBR3dCLGtCQUFILENBQXNCTCxNQUF0QixFQUE4Qm5CLEdBQUd5QixjQUFqQyxDQUFmO0FBQ0EsTUFBSSxDQUFDRixRQUFMLEVBQWU7QUFDYixRQUFJVCxRQUFRZCxHQUFHMEIsZ0JBQUgsQ0FBb0JQLE1BQXBCLENBQVo7QUFDQWYsWUFBUUMsR0FBUixDQUFZLCtCQUErQlMsS0FBM0M7QUFDQWQsT0FBR2lCLFlBQUgsQ0FBZ0JFLE1BQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsTUFBUDtBQUNEOztBQUVEOzs7Ozs7QUFNTyxTQUFTcEIsZUFBVCxDQUF5QmpJLE1BQXpCLEVBQWlDNkosU0FBakMsRUFBNEM7QUFDakQ7QUFDQSxNQUFJM0IsS0FBSzRCLHFCQUFXQyxVQUFYLENBQXNCL0osTUFBdEIsQ0FBVDtBQUNBLE1BQUksQ0FBQ2tJLEVBQUwsRUFBUyxPQUFPLElBQVA7O0FBRVQ7QUFDQSxNQUFJOEIsVUFBVTlNLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IyTSxTQUE1QixFQUF1QztBQUNyQzNCLFNBQUsrQixxQkFBZ0JDLGdCQUFoQixDQUFpQ2hDLEVBQWpDLENBQUw7QUFDRDs7QUFFRCxTQUFPQSxFQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQU0rQixrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7O0FBRW5DOzs7O0FBSUEsTUFBSTFCLE1BQU0sU0FBTkEsR0FBTSxDQUFTNEIsR0FBVCxFQUFjO0FBQ3RCLFFBQUk1TCxPQUFPK0osT0FBUCxJQUFrQi9KLE9BQU8rSixPQUFQLENBQWVDLEdBQXJDLEVBQTBDO0FBQ3hDaEssYUFBTytKLE9BQVAsQ0FBZUMsR0FBZixDQUFtQjRCLEdBQW5CO0FBQ0Q7QUFDRixHQUpEOztBQU1BOzs7O0FBSUEsTUFBSUMsc0JBQXNCOztBQUV4Qjs7QUFFQSxjQUFVLEVBQUUsR0FBRSxJQUFKLEVBSmM7QUFLeEIsZUFBVyxFQUFFLEdBQUUsSUFBSixFQUxhO0FBTXhCLG9CQUFnQixFQUFFLEdBQUUsSUFBSixFQU5ROztBQVF4Qjs7QUFFQSxrQkFBYyxFQUFFLEdBQUUsSUFBSixFQVZVO0FBV3hCLG9CQUFnQixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQVhROztBQWF4Qjs7QUFFQSxvQkFBZ0IsRUFBRSxHQUFFLElBQUosRUFmUTtBQWdCeEIsMEJBQXNCLEVBQUUsR0FBRSxJQUFKLEVBaEJFO0FBaUJ4QiwyQkFBdUIsRUFBRSxHQUFFLElBQUosRUFqQkM7O0FBbUJ4Qjs7QUFFQSx1QkFBbUIsRUFBRSxHQUFFLElBQUosRUFyQks7QUFzQnhCLDJCQUF1QixFQUFFLEdBQUUsSUFBSixFQXRCQzs7QUF3QnhCOztBQUVBLG1CQUFlLEVBQUUsR0FBRSxJQUFKLEVBMUJTO0FBMkJ4QixxQkFBaUIsRUFBRSxHQUFFLElBQUosRUEzQk87QUE0QnhCLHVCQUFtQixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQTVCSztBQTZCeEIscUJBQWlCLEVBQUUsR0FBRSxJQUFKLEVBQVUsR0FBRSxJQUFaLEVBN0JPO0FBOEJ4QixxQkFBaUIsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQTlCTztBQStCeEIsa0JBQWMsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQUEwQixHQUFFLElBQTVCLEVBL0JVO0FBZ0N4QixxQkFBaUIsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQWhDTztBQWlDeEIsc0JBQWtCLEVBQUUsR0FBRSxJQUFKLEVBQVUsR0FBRSxJQUFaLEVBakNNO0FBa0N4Qix5QkFBcUIsRUFBRSxHQUFFLElBQUosRUFsQ0c7QUFtQ3hCLHNCQUFrQixFQUFFLEdBQUUsSUFBSixFQW5DTTs7QUFxQ3hCOztBQUVBLGtCQUFjLEVBQUUsR0FBRSxJQUFKLEVBdkNVO0FBd0N4QixrQkFBYyxFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQXhDVTtBQXlDeEIscUJBQWlCLEVBQUUsR0FBRSxJQUFKLEVBekNPO0FBMEN4QiwwQkFBc0IsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUExQ0U7O0FBNEN4Qjs7QUFFQSxtQkFBZSxFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQTlDUztBQStDeEIsa0JBQWMsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUEvQ1U7QUFnRHhCLHdCQUFvQixFQUFFLEdBQUUsSUFBSixFQWhESTtBQWlEeEIsdUJBQW1CLEVBQUUsR0FBRSxJQUFKLEVBakRLO0FBa0R4Qiw4QkFBMEIsRUFBRSxHQUFFLElBQUosRUFsREY7QUFtRHhCLCtCQUEyQixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQUFrQixHQUFFLElBQXBCLEVBbkRIO0FBb0R4Qiw0QkFBd0IsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQXBEQTtBQXFEeEIseUNBQXFDLEVBQUUsR0FBRSxJQUFKLEVBQVUsR0FBRSxJQUFaLEVBQWtCLEdBQUUsSUFBcEIsRUFyRGI7QUFzRHhCLGdDQUE0QixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQXRESjtBQXVEeEIsMkJBQXVCLEVBQUUsR0FBRSxJQUFKLEVBQVUsR0FBRSxJQUFaLEVBdkRDOztBQXlEeEI7O0FBRUEsYUFBUyxFQUFFLEdBQUUsSUFBSixFQTNEZTtBQTREeEIsaUJBQWEsRUFBRSxHQUFFLElBQUosRUE1RFc7QUE2RHhCLGlCQUFhLEVBQUUsR0FBRSxJQUFKLEVBQVUsR0FBRSxJQUFaLEVBN0RXO0FBOER4Qix5QkFBcUIsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQUEwQixHQUFFLElBQTVCLEVBOURHO0FBK0R4QixxQkFBaUIsRUFBRSxHQUFFLElBQUosRUEvRE87QUFnRXhCLDZCQUF5QixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQWhFRDtBQWlFeEIsbUJBQWUsRUFBRSxHQUFFLElBQUosRUFqRVM7QUFrRXhCLDJCQUF1QixFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQWxFQztBQW1FeEIsMkJBQXVCLEVBQUUsR0FBRSxJQUFKLEVBbkVDO0FBb0V4QixpQkFBYSxFQUFFLEdBQUUsSUFBSixFQUFVLEdBQUUsSUFBWixFQUFrQixHQUFFLElBQXBCLEVBcEVXO0FBcUV4Qix5QkFBcUIsRUFBRSxHQUFFLElBQUosRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRSxJQUFwQixFQUEwQixHQUFFLElBQTVCLEVBckVHOztBQXVFeEI7O0FBRUEsZ0JBQVksRUFBRSxHQUFFLElBQUosRUF6RVk7QUEwRXhCLGlCQUFhLEVBQUUsR0FBRSxJQUFKO0FBMUVXLEdBQTFCOztBQTZFQTs7OztBQUlBLE1BQUlDLFVBQVUsSUFBZDs7QUFFQTs7Ozs7O0FBTUEsV0FBU0MsSUFBVCxDQUFjQyxHQUFkLEVBQW1CO0FBQ2pCLFFBQUlGLFdBQVcsSUFBZixFQUFxQjtBQUNuQkEsZ0JBQVUsRUFBVjtBQUNBLFdBQUssSUFBSUcsWUFBVCxJQUF5QkQsR0FBekIsRUFBOEI7QUFDNUIsWUFBSSxPQUFPQSxJQUFJQyxZQUFKLENBQVAsSUFBNEIsUUFBaEMsRUFBMEM7QUFDeENILGtCQUFRRSxJQUFJQyxZQUFKLENBQVIsSUFBNkJBLFlBQTdCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7OztBQUdBLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkIsUUFBSUosV0FBVyxJQUFmLEVBQXFCO0FBQ25CLFlBQU0sc0NBQU47QUFDRDtBQUNGOztBQUVEOzs7OztBQUtBLFdBQVNLLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCRjtBQUNBLFdBQVFKLFFBQVFNLEtBQVIsTUFBbUJDLFNBQTNCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztBQVNBLFdBQVNDLGNBQVQsQ0FBd0JGLEtBQXhCLEVBQStCO0FBQzdCRjtBQUNBLFFBQUlLLE9BQU9ULFFBQVFNLEtBQVIsQ0FBWDtBQUNBLFdBQVFHLFNBQVNGLFNBQVYsR0FBdUJFLElBQXZCLEdBQ0YsNEJBQTRCSCxNQUFNbk8sUUFBTixDQUFlLEVBQWYsQ0FBNUIsR0FBaUQsR0FEdEQ7QUFFRDs7QUFFRDs7Ozs7Ozs7QUFRQSxXQUFTdU8scUJBQVQsQ0FBK0JDLFlBQS9CLEVBQTZDQyxhQUE3QyxFQUE0RE4sS0FBNUQsRUFBbUU7QUFDakUsUUFBSU8sV0FBV2Qsb0JBQW9CWSxZQUFwQixDQUFmO0FBQ0EsUUFBSUUsYUFBYU4sU0FBakIsRUFBNEI7QUFDMUIsVUFBSU0sU0FBU0QsYUFBVCxDQUFKLEVBQTZCO0FBQzNCLGVBQU9KLGVBQWVGLEtBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxXQUFPQSxNQUFNbk8sUUFBTixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztBQVlBLFdBQVMwTixnQkFBVCxDQUEwQkssR0FBMUIsRUFBK0JZLGVBQS9CLEVBQWdEO0FBQzlDYixTQUFLQyxHQUFMO0FBQ0FZLHNCQUFrQkEsbUJBQW1CLFVBQVNDLEdBQVQsRUFBY0osWUFBZCxFQUE0QkssSUFBNUIsRUFBa0M7QUFDakU7QUFDQSxVQUFJQyxTQUFTLEVBQWI7QUFDQSxXQUFLLElBQUlDLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0YsS0FBS25PLE1BQTNCLEVBQW1DLEVBQUVxTyxFQUFyQyxFQUF5QztBQUN2Q0Qsa0JBQVUsQ0FBRUMsTUFBTSxDQUFQLEdBQVksRUFBWixHQUFpQixJQUFsQixJQUNOUixzQkFBc0JDLFlBQXRCLEVBQW9DTyxFQUFwQyxFQUF3Q0YsS0FBS0UsRUFBTCxDQUF4QyxDQURKO0FBRUQ7QUFDRGhELFVBQUksaUJBQWdCc0MsZUFBZU8sR0FBZixDQUFoQixHQUFzQyxNQUF0QyxHQUE4Q0osWUFBOUMsR0FDQSxHQURBLEdBQ01NLE1BRE4sR0FDZSxHQURuQjtBQUVELEtBVEw7O0FBV0E7QUFDQTtBQUNBLFFBQUlFLGdCQUFnQixFQUFwQjs7QUFFQTtBQUNBLGFBQVNDLGdCQUFULENBQTBCbEIsR0FBMUIsRUFBK0JTLFlBQS9CLEVBQTZDO0FBQzNDLGFBQU8sWUFBVztBQUNoQixZQUFJN0ksU0FBU29JLElBQUlTLFlBQUosRUFBa0JVLEtBQWxCLENBQXdCbkIsR0FBeEIsRUFBNkJQLFNBQTdCLENBQWI7QUFDQSxZQUFJb0IsTUFBTWIsSUFBSW9CLFFBQUosRUFBVjtBQUNBLFlBQUlQLE9BQU8sQ0FBWCxFQUFjO0FBQ1pJLHdCQUFjSixHQUFkLElBQXFCLElBQXJCO0FBQ0FELDBCQUFnQkMsR0FBaEIsRUFBcUJKLFlBQXJCLEVBQW1DaEIsU0FBbkM7QUFDRDtBQUNELGVBQU83SCxNQUFQO0FBQ0QsT0FSRDtBQVNEOztBQUVEO0FBQ0E7QUFDQSxRQUFJeUosVUFBVSxFQUFkO0FBQ0EsU0FBSyxJQUFJcEIsWUFBVCxJQUF5QkQsR0FBekIsRUFBOEI7QUFDNUIsVUFBSSxPQUFPQSxJQUFJQyxZQUFKLENBQVAsSUFBNEIsVUFBaEMsRUFBNEM7QUFDekNvQixnQkFBUXBCLFlBQVIsSUFBd0JpQixpQkFBaUJsQixHQUFqQixFQUFzQkMsWUFBdEIsQ0FBeEI7QUFDRCxPQUZGLE1BRVE7QUFDTG9CLGdCQUFRcEIsWUFBUixJQUF3QkQsSUFBSUMsWUFBSixDQUF4QjtBQUNEO0FBQ0g7O0FBRUQ7QUFDQW9CLFlBQVFELFFBQVIsR0FBbUIsWUFBVztBQUM1QixXQUFLLElBQUlQLEdBQVQsSUFBZ0JJLGFBQWhCLEVBQStCO0FBQzdCLFlBQUlBLGNBQWNKLEdBQWQsQ0FBSixFQUF3QjtBQUN0Qkksd0JBQWNKLEdBQWQsSUFBcUIsS0FBckI7QUFDQSxpQkFBT0EsR0FBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPYixJQUFJc0IsUUFBWDtBQUNELEtBUkQ7O0FBVUEsV0FBT0QsT0FBUDtBQUNEOztBQUVELFdBQVNFLG1CQUFULENBQTZCdkIsR0FBN0IsRUFBa0M7QUFDaEMsUUFBSXdCLGFBQWF4QixJQUFJeUIsWUFBSixDQUFpQnpCLElBQUkwQixrQkFBckIsQ0FBakI7QUFDQSxRQUFJQyxNQUFNM0IsSUFBSTRCLFlBQUosRUFBVjtBQUNBNUIsUUFBSTZCLFVBQUosQ0FBZTdCLElBQUk4QixZQUFuQixFQUFpQ0gsR0FBakM7QUFDQSxTQUFLLElBQUlYLEtBQUssQ0FBZCxFQUFpQkEsS0FBS1EsVUFBdEIsRUFBa0MsRUFBRVIsRUFBcEMsRUFBd0M7QUFDdENoQixVQUFJK0Isd0JBQUosQ0FBNkJmLEVBQTdCO0FBQ0FoQixVQUFJZ0MsbUJBQUosQ0FBd0JoQixFQUF4QixFQUE0QixDQUE1QixFQUErQmhCLElBQUlpQyxLQUFuQyxFQUEwQyxLQUExQyxFQUFpRCxDQUFqRCxFQUFvRCxDQUFwRDtBQUNBakMsVUFBSWtDLGNBQUosQ0FBbUJsQixFQUFuQixFQUF1QixDQUF2QjtBQUNEO0FBQ0RoQixRQUFJbUMsWUFBSixDQUFpQlIsR0FBakI7O0FBRUEsUUFBSVMsa0JBQWtCcEMsSUFBSXlCLFlBQUosQ0FBaUJ6QixJQUFJcUMsdUJBQXJCLENBQXRCO0FBQ0EsU0FBSyxJQUFJckIsS0FBSyxDQUFkLEVBQWlCQSxLQUFLb0IsZUFBdEIsRUFBdUMsRUFBRXBCLEVBQXpDLEVBQTZDO0FBQzNDaEIsVUFBSXNDLGFBQUosQ0FBa0J0QyxJQUFJdUMsUUFBSixHQUFldkIsRUFBakM7QUFDQWhCLFVBQUl3QyxXQUFKLENBQWdCeEMsSUFBSXlDLGdCQUFwQixFQUFzQyxJQUF0QztBQUNBekMsVUFBSXdDLFdBQUosQ0FBZ0J4QyxJQUFJMEMsVUFBcEIsRUFBZ0MsSUFBaEM7QUFDRDs7QUFFRDFDLFFBQUlzQyxhQUFKLENBQWtCdEMsSUFBSXVDLFFBQXRCO0FBQ0F2QyxRQUFJL0IsVUFBSixDQUFlLElBQWY7QUFDQStCLFFBQUk2QixVQUFKLENBQWU3QixJQUFJOEIsWUFBbkIsRUFBaUMsSUFBakM7QUFDQTlCLFFBQUk2QixVQUFKLENBQWU3QixJQUFJMkMsb0JBQW5CLEVBQXlDLElBQXpDO0FBQ0EzQyxRQUFJNEMsZUFBSixDQUFvQjVDLElBQUk2QyxXQUF4QixFQUFxQyxJQUFyQztBQUNBN0MsUUFBSThDLGdCQUFKLENBQXFCOUMsSUFBSStDLFlBQXpCLEVBQXVDLElBQXZDO0FBQ0EvQyxRQUFJZ0QsT0FBSixDQUFZaEQsSUFBSWlELEtBQWhCO0FBQ0FqRCxRQUFJZ0QsT0FBSixDQUFZaEQsSUFBSWtELFNBQWhCO0FBQ0FsRCxRQUFJZ0QsT0FBSixDQUFZaEQsSUFBSW1ELFVBQWhCO0FBQ0FuRCxRQUFJZ0QsT0FBSixDQUFZaEQsSUFBSW9ELE1BQWhCO0FBQ0FwRCxRQUFJZ0QsT0FBSixDQUFZaEQsSUFBSXFELFlBQWhCO0FBQ0FyRCxRQUFJc0QsVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQXRELFFBQUl1RCxhQUFKLENBQWtCdkQsSUFBSXdELFFBQXRCO0FBQ0F4RCxRQUFJeUQsU0FBSixDQUFjekQsSUFBSTBELEdBQWxCLEVBQXVCMUQsSUFBSTJELElBQTNCO0FBQ0EzRCxRQUFJNEQsVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQTVELFFBQUk2RCxVQUFKLENBQWUsQ0FBZjtBQUNBN0QsUUFBSThELFlBQUosQ0FBaUIsQ0FBQyxDQUFsQjtBQUNBOUQsUUFBSStELFNBQUosQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDO0FBQ0EvRCxRQUFJZ0UsUUFBSixDQUFhaEUsSUFBSWlFLElBQWpCO0FBQ0FqRSxRQUFJa0UsU0FBSixDQUFjbEUsSUFBSW1FLElBQWxCO0FBQ0FuRSxRQUFJb0UsU0FBSixDQUFjLElBQWQ7QUFDQXBFLFFBQUlxRSxVQUFKLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBckUsUUFBSXNFLFNBQUosQ0FBY3RFLElBQUl1RSxHQUFsQjtBQUNBdkUsUUFBSXdFLElBQUosQ0FBU3hFLElBQUl5RSxvQkFBYixFQUFtQ3pFLElBQUkwRSxTQUF2QztBQUNBMUUsUUFBSTJFLFNBQUosQ0FBYyxDQUFkO0FBQ0EzRSxRQUFJNEUsV0FBSixDQUFnQjVFLElBQUk2RSxjQUFwQixFQUFvQyxDQUFwQztBQUNBN0UsUUFBSTRFLFdBQUosQ0FBZ0I1RSxJQUFJOEUsZ0JBQXBCLEVBQXNDLENBQXRDO0FBQ0E5RSxRQUFJNEUsV0FBSixDQUFnQjVFLElBQUkrRSxtQkFBcEIsRUFBeUMsS0FBekM7QUFDQS9FLFFBQUk0RSxXQUFKLENBQWdCNUUsSUFBSWdGLDhCQUFwQixFQUFvRCxLQUFwRDtBQUNBO0FBQ0EsUUFBSWhGLElBQUlpRixrQ0FBUixFQUE0QztBQUMxQ2pGLFVBQUk0RSxXQUFKLENBQWdCNUUsSUFBSWlGLGtDQUFwQixFQUF3RGpGLElBQUlrRixxQkFBNUQ7QUFDRDtBQUNEbEYsUUFBSW1GLGFBQUosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQW5GLFFBQUlvRixjQUFKLENBQW1CLENBQW5CLEVBQXNCLEtBQXRCO0FBQ0FwRixRQUFJcUYsT0FBSixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCckYsSUFBSXZLLE1BQUosQ0FBV0ksS0FBN0IsRUFBb0NtSyxJQUFJdkssTUFBSixDQUFXTSxNQUEvQztBQUNBaUssUUFBSXNGLFdBQUosQ0FBZ0J0RixJQUFJdUYsTUFBcEIsRUFBNEIsQ0FBNUIsRUFBK0IsVUFBL0I7QUFDQXZGLFFBQUl3RixXQUFKLENBQWdCLFVBQWhCO0FBQ0F4RixRQUFJeUYsU0FBSixDQUFjekYsSUFBSTBGLElBQWxCLEVBQXdCMUYsSUFBSTBGLElBQTVCLEVBQWtDMUYsSUFBSTBGLElBQXRDO0FBQ0ExRixRQUFJMkYsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIzRixJQUFJdkssTUFBSixDQUFXbVEsV0FBOUIsRUFBMkM1RixJQUFJdkssTUFBSixDQUFXb1EsWUFBdEQ7QUFDQTdGLFFBQUk4RixLQUFKLENBQVU5RixJQUFJK0YsZ0JBQUosR0FBdUIvRixJQUFJZ0csZ0JBQTNCLEdBQThDaEcsSUFBSWlHLGtCQUE1RDs7QUFFQTtBQUNBLFdBQU1qRyxJQUFJb0IsUUFBSixFQUFOO0FBQ0Q7O0FBRUQsV0FBUzhFLGdDQUFULENBQTBDbEcsR0FBMUMsRUFBK0M7QUFDN0MsUUFBSW1HLFdBQVcsRUFBZjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJQyxlQUFlLEtBQW5CO0FBQ0EsUUFBSUMsY0FBYyxDQUFsQjtBQUNBLFFBQUlDLGNBQWMsRUFBbEI7QUFDQSxRQUFJQyxVQUFVbkcsU0FBZDtBQUNBLFFBQUlvRyxjQUFjcEcsU0FBbEI7QUFDQSxRQUFJcUcsa0JBQWtCckcsU0FBdEI7O0FBRUE7QUFDQSxRQUFJc0csaUJBQWlCLEVBQXJCOztBQUVBLGFBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQzFCO0FBQ0EsYUFBUUEsZUFBZUMsV0FBZixJQUNBRCxlQUFlRSxnQkFEZixJQUVBRixlQUFlRyxZQUZmLElBR0FILGVBQWVJLGlCQUhmLElBSUFKLGVBQWVLLFdBSmYsSUFLQUwsZUFBZU0sWUFMdkI7QUFNRDs7QUFFRCxhQUFTQyxjQUFULENBQXdCdEcsSUFBeEIsRUFBOEI7QUFDNUIsV0FBSyxJQUFJRSxLQUFLLENBQWQsRUFBaUJBLEtBQUtGLEtBQUtuTyxNQUEzQixFQUFtQyxFQUFFcU8sRUFBckMsRUFBeUM7QUFDdkMsWUFBSXFHLE1BQU12RyxLQUFLRSxFQUFMLENBQVY7QUFDQSxZQUFJNEYsY0FBY1MsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGlCQUFPQSxJQUFJQywyQkFBSixJQUFtQ2xCLFVBQTFDO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEOztBQUVELGFBQVNtQixXQUFULEdBQXVCO0FBQ3JCLFVBQUlDLElBQUlDLE9BQU9DLElBQVAsQ0FBWWYsY0FBWixDQUFSO0FBQ0EsV0FBSyxJQUFJM0YsS0FBSyxDQUFkLEVBQWlCQSxLQUFLd0csRUFBRTdVLE1BQXhCLEVBQWdDLEVBQUVxTyxFQUFsQyxFQUFzQztBQUNwQyxlQUFPMkcsY0FBY0gsQ0FBZCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLGFBQVNJLHNCQUFULENBQWdDNUgsR0FBaEMsRUFBcUNTLFlBQXJDLEVBQW1EO0FBQ2pELFVBQUlvSCxJQUFJN0gsSUFBSVMsWUFBSixDQUFSO0FBQ0EsYUFBTyxZQUFXO0FBQ2hCO0FBQ0EsWUFBSSxDQUFDNEYsWUFBTCxFQUFtQjtBQUNqQixjQUFJLENBQUNlLGVBQWUzSCxTQUFmLENBQUwsRUFBZ0M7QUFDOUJrSCwyQkFBZTNHLElBQUk4SCxpQkFBbkIsSUFBd0MsSUFBeEM7QUFDQTtBQUNEO0FBQ0QsY0FBSWxRLFNBQVNpUSxFQUFFMUcsS0FBRixDQUFRbkIsR0FBUixFQUFhUCxTQUFiLENBQWI7QUFDQSxpQkFBTzdILE1BQVA7QUFDRDtBQUNGLE9BVkQ7QUFXRDs7QUFFRCxTQUFLLElBQUlxSSxZQUFULElBQXlCRCxHQUF6QixFQUE4QjtBQUM1QixVQUFJLE9BQU9BLElBQUlDLFlBQUosQ0FBUCxJQUE0QixVQUFoQyxFQUE0QztBQUN6Q2tHLGlCQUFTbEcsWUFBVCxJQUF5QjJILHVCQUF1QjVILEdBQXZCLEVBQTRCQyxZQUE1QixDQUF6QjtBQUNELE9BRkYsTUFFUTtBQUNMa0csaUJBQVNsRyxZQUFULElBQXlCRCxJQUFJQyxZQUFKLENBQXpCO0FBQ0Q7QUFDSDs7QUFFRCxhQUFTOEgscUJBQVQsQ0FBK0JDLGFBQS9CLEVBQThDO0FBQzVDLGFBQU8sRUFBQ0EsZUFBZUEsYUFBaEIsRUFBUDtBQUNEOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDdkIsV0FBSyxJQUFJakgsS0FBSyxDQUFkLEVBQWlCQSxLQUFLdUYsWUFBWTVULE1BQWxDLEVBQTBDLEVBQUVxTyxFQUE1QyxFQUFnRDtBQUM5QyxZQUFJa0gsV0FBVzNCLFlBQVl2RixFQUFaLENBQWY7QUFDQSxZQUFJa0gsb0JBQW9CcEIsV0FBeEIsRUFBcUM7QUFDbkM5RyxjQUFJbUMsWUFBSixDQUFpQitGLFFBQWpCO0FBQ0QsU0FGRCxNQUVPLElBQUlBLG9CQUFvQkMsaUJBQXhCLEVBQTJDO0FBQ2hEbkksY0FBSW9JLGlCQUFKLENBQXNCRixRQUF0QjtBQUNELFNBRk0sTUFFQSxJQUFJQSxvQkFBb0JHLGFBQXhCLEVBQXVDO0FBQzVDckksY0FBSXJCLGFBQUosQ0FBa0J1SixRQUFsQjtBQUNELFNBRk0sTUFFQSxJQUFJQSxvQkFBb0JJLGtCQUF4QixFQUE0QztBQUNqRHRJLGNBQUl1SSxrQkFBSixDQUF1QkwsUUFBdkI7QUFDRCxTQUZNLE1BRUEsSUFBSUEsb0JBQW9CTSxZQUF4QixFQUFzQztBQUMzQ3hJLGNBQUlwQixZQUFKLENBQWlCc0osUUFBakI7QUFDRCxTQUZNLE1BRUEsSUFBSUEsb0JBQW9CTyxhQUF4QixFQUF1QztBQUM1Q3pJLGNBQUkwSSxhQUFKLENBQWtCUixRQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRC9CLGFBQVN3QyxXQUFULEdBQXVCLFlBQVc7QUFDaEMsVUFBSSxDQUFDdEMsWUFBTCxFQUFtQjtBQUNqQkEsdUJBQWUsSUFBZjtBQUNBLFVBQUVELFVBQUY7QUFDQSxlQUFPcEcsSUFBSW9CLFFBQUosRUFBUDtBQUNBbUc7QUFDQVosdUJBQWUzRyxJQUFJNEksa0JBQW5CLElBQXlDLElBQXpDO0FBQ0FDLG1CQUFXLFlBQVc7QUFDbEIsY0FBSXJDLE9BQUosRUFBYTtBQUNYQSxvQkFBUXVCLHNCQUFzQixjQUF0QixDQUFSO0FBQ0Q7QUFDRixTQUpILEVBSUssQ0FKTDtBQUtEO0FBQ0YsS0FiRDs7QUFlQTVCLGFBQVMyQyxjQUFULEdBQTBCLFlBQVc7QUFDbkMsVUFBSXpDLFlBQUosRUFBa0I7QUFDaEIsWUFBSUksV0FBSixFQUFpQjtBQUNmb0MscUJBQVcsWUFBVztBQUNsQlo7QUFDQTFHLGdDQUFvQnZCLEdBQXBCO0FBQ0FxRywyQkFBZSxLQUFmO0FBQ0EsZ0JBQUlJLFdBQUosRUFBaUI7QUFDZixrQkFBSXNDLFdBQVd0QyxXQUFmO0FBQ0FBLDRCQUFjQyxlQUFkO0FBQ0FBLGdDQUFrQnJHLFNBQWxCO0FBQ0EwSSx1QkFBU2hCLHNCQUFzQixrQkFBdEIsQ0FBVDtBQUNEO0FBQ0YsV0FWSCxFQVVLLENBVkw7QUFXRCxTQVpELE1BWU87QUFDTCxnQkFBTSxvREFBTjtBQUNEO0FBQ0Y7QUFDRixLQWxCRDs7QUFvQkE7QUFDQTVCLGFBQVMvRSxRQUFULEdBQW9CLFlBQVc7QUFDN0IsVUFBSSxDQUFDaUYsWUFBTCxFQUFtQjtBQUNqQixZQUFJeEYsR0FBSjtBQUNBLGVBQU9BLE1BQU1iLElBQUlvQixRQUFKLEVBQWIsRUFBNkI7QUFDM0J1Rix5QkFBZTlGLEdBQWYsSUFBc0IsSUFBdEI7QUFDRDtBQUNGO0FBQ0QsV0FBSyxJQUFJQSxHQUFULElBQWdCOEYsY0FBaEIsRUFBZ0M7QUFDOUIsWUFBSUEsZUFBZTlGLEdBQWYsQ0FBSixFQUF5QjtBQUN2QixpQkFBTzhGLGVBQWU5RixHQUFmLENBQVA7QUFDQSxpQkFBT0EsR0FBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPYixJQUFJc0IsUUFBWDtBQUNELEtBZEQ7O0FBZ0JBLFFBQUkwSCxvQkFBb0IsQ0FDdEIsY0FEc0IsRUFFdEIsbUJBRnNCLEVBR3RCLGVBSHNCLEVBSXRCLG9CQUpzQixFQUt0QixjQUxzQixFQU10QixlQU5zQixDQUF4QjtBQVFBLFNBQUssSUFBSWhJLEtBQUssQ0FBZCxFQUFpQkEsS0FBS2dJLGtCQUFrQnJXLE1BQXhDLEVBQWdELEVBQUVxTyxFQUFsRCxFQUFzRDtBQUNwRCxVQUFJUCxlQUFldUksa0JBQWtCaEksRUFBbEIsQ0FBbkI7QUFDQW1GLGVBQVMxRixZQUFULElBQXlCLFVBQVNvSCxDQUFULEVBQVk7QUFDbkMsZUFBTyxZQUFXO0FBQ2hCLGNBQUl4QixZQUFKLEVBQWtCO0FBQ2hCLG1CQUFPLElBQVA7QUFDRDtBQUNELGNBQUlRLE1BQU1nQixFQUFFMUcsS0FBRixDQUFRbkIsR0FBUixFQUFhUCxTQUFiLENBQVY7QUFDQW9ILGNBQUlTLDJCQUFKLEdBQWtDbEIsVUFBbEM7QUFDQUcsc0JBQVkxVCxJQUFaLENBQWlCZ1UsR0FBakI7QUFDQSxpQkFBT0EsR0FBUDtBQUNELFNBUkQ7QUFTRCxPQVZ3QixDQVV2QjdHLElBQUlTLFlBQUosQ0FWdUIsQ0FBekI7QUFXRDs7QUFFRCxRQUFJd0ksZ0NBQWdDLENBQ2xDLGlCQURrQyxFQUVsQyxrQkFGa0MsRUFHbEMsb0JBSGtDLEVBSWxDLHNCQUprQyxFQUtsQyxvQkFMa0MsRUFNbEMsbUNBTmtDLEVBT2xDLGNBUGtDLEVBUWxDLHFCQVJrQyxFQVNsQyxtQkFUa0MsRUFVbEMsMEJBVmtDLEVBV2xDLG9CQVhrQyxFQVlsQyxrQkFaa0MsRUFhbEMsaUJBYmtDLEVBY2xDLGlCQWRrQyxFQWVsQyxZQWZrQyxFQWdCbEMsb0JBaEJrQyxFQWlCbEMsaUJBakJrQyxDQUFwQztBQW1CQSxTQUFLLElBQUlqSSxLQUFLLENBQWQsRUFBaUJBLEtBQUtpSSw4QkFBOEJ0VyxNQUFwRCxFQUE0RCxFQUFFcU8sRUFBOUQsRUFBa0U7QUFDaEUsVUFBSVAsZUFBZXdJLDhCQUE4QmpJLEVBQTlCLENBQW5CO0FBQ0FtRixlQUFTMUYsWUFBVCxJQUF5QixVQUFTb0gsQ0FBVCxFQUFZO0FBQ25DLGVBQU8sWUFBVztBQUNoQixjQUFJeEIsWUFBSixFQUFrQjtBQUNoQixtQkFBTyxJQUFQO0FBQ0Q7QUFDRCxpQkFBT3dCLEVBQUUxRyxLQUFGLENBQVFuQixHQUFSLEVBQWFQLFNBQWIsQ0FBUDtBQUNELFNBTEQ7QUFNRCxPQVB3QixDQU92QjBHLFNBQVMxRixZQUFULENBUHVCLENBQXpCO0FBUUQ7O0FBRUQsUUFBSXlJLGNBQWMsQ0FDaEIsVUFEZ0IsRUFFaEIsV0FGZ0IsRUFHaEIsZUFIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsZ0JBTGdCLEVBTWhCLFVBTmdCLEVBT2hCLFdBUGdCLENBQWxCO0FBU0EsU0FBSyxJQUFJbEksS0FBSyxDQUFkLEVBQWlCQSxLQUFLa0ksWUFBWXZXLE1BQWxDLEVBQTBDLEVBQUVxTyxFQUE1QyxFQUFnRDtBQUM5QyxVQUFJUCxlQUFleUksWUFBWWxJLEVBQVosQ0FBbkI7QUFDQW1GLGVBQVMxRixZQUFULElBQXlCLFVBQVNvSCxDQUFULEVBQVk7QUFDbkMsZUFBTyxZQUFXO0FBQ2hCLGNBQUl4QixZQUFKLEVBQWtCO0FBQ2hCLG1CQUFPLEtBQVA7QUFDRDtBQUNELGlCQUFPd0IsRUFBRTFHLEtBQUYsQ0FBUW5CLEdBQVIsRUFBYVAsU0FBYixDQUFQO0FBQ0QsU0FMRDtBQU1ELE9BUHdCLENBT3ZCMEcsU0FBUzFGLFlBQVQsQ0FQdUIsQ0FBekI7QUFRRDs7QUFFRDBGLGFBQVNnRCxzQkFBVCxHQUFrQyxVQUFTdEIsQ0FBVCxFQUFZO0FBQzVDLGFBQU8sWUFBVztBQUNoQixZQUFJeEIsWUFBSixFQUFrQjtBQUNoQixpQkFBT3JHLElBQUlvSix1QkFBWDtBQUNEO0FBQ0QsZUFBT3ZCLEVBQUUxRyxLQUFGLENBQVFuQixHQUFSLEVBQWFQLFNBQWIsQ0FBUDtBQUNELE9BTEQ7QUFNRCxLQVBpQyxDQU9oQzBHLFNBQVNnRCxzQkFQdUIsQ0FBbEM7O0FBU0FoRCxhQUFTa0QsaUJBQVQsR0FBNkIsVUFBU3hCLENBQVQsRUFBWTtBQUN2QyxhQUFPLFlBQVc7QUFDaEIsWUFBSXhCLFlBQUosRUFBa0I7QUFDaEIsaUJBQU8sQ0FBQyxDQUFSO0FBQ0Q7QUFDRCxlQUFPd0IsRUFBRTFHLEtBQUYsQ0FBUW5CLEdBQVIsRUFBYVAsU0FBYixDQUFQO0FBQ0QsT0FMRDtBQU1ELEtBUDRCLENBTzNCMEcsU0FBU2tELGlCQVBrQixDQUE3Qjs7QUFTQWxELGFBQVNtRCxxQkFBVCxHQUFpQyxVQUFTekIsQ0FBVCxFQUFZO0FBQzNDLGFBQU8sWUFBVztBQUNoQixZQUFJeEIsWUFBSixFQUFrQjtBQUNoQixpQkFBTyxDQUFQO0FBQ0Q7QUFDRCxlQUFPd0IsRUFBRTFHLEtBQUYsQ0FBUW5CLEdBQVIsRUFBYVAsU0FBYixDQUFQO0FBQ0QsT0FMRDtBQU1ELEtBUGdDLENBTy9CMEcsU0FBU21ELHFCQVBzQixDQUFqQzs7QUFTQW5ELGFBQVNvRCxhQUFULEdBQXlCLFlBQVc7QUFDbEMsYUFBT2xELFlBQVA7QUFDRCxLQUZEOztBQUlBLGFBQVNtRCxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixVQUFJLE9BQU9BLFFBQVAsSUFBb0IsVUFBeEIsRUFBb0M7QUFDbEMsZUFBT0EsUUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sVUFBU0MsSUFBVCxFQUFlO0FBQ3BCRCxtQkFBU0UsV0FBVCxDQUFxQkQsSUFBckI7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7QUFFRHZELGFBQVN5RCw2QkFBVCxHQUF5QyxVQUFTSCxRQUFULEVBQW1CO0FBQzFEakQsZ0JBQVVnRCxVQUFVQyxRQUFWLENBQVY7QUFDRCxLQUZEOztBQUlBdEQsYUFBUzBELGlDQUFULEdBQTZDLFVBQVNKLFFBQVQsRUFBbUI7QUFDOUQsVUFBSXBELFlBQUosRUFBa0I7QUFDaEJLLDBCQUFrQjhDLFVBQVVDLFFBQVYsQ0FBbEI7QUFDRCxPQUZELE1BRU87QUFDTGhELHNCQUFjK0MsVUFBVUMsUUFBVixDQUFkO0FBQ0Q7QUFDRixLQU5EOztBQVFBLFdBQU90RCxRQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUNMOzs7Ozs7QUFNQSxZQUFRcEcsSUFQSDs7QUFTTDs7Ozs7QUFLQSxtQkFBZUksV0FkVjs7QUFnQkw7Ozs7Ozs7Ozs7QUFVQSxzQkFBa0JHLGNBMUJiOztBQTRCTDs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsNkJBQXlCRSxxQkEzQ3BCOztBQTZDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLHdCQUFvQmIsZ0JBbEVmOztBQW9FTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLHdDQUFvQ3VHLGdDQXpGL0I7O0FBMkZMOzs7OztBQUtBLDJCQUF1QjNFO0FBaEdsQixHQUFQO0FBbUdDLENBN3BCRDs7a0JBK3BCZTdCLGlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JxQmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxJQUFNSCxhQUFhLFNBQWJBLFVBQWEsR0FBVzs7QUFFOUI7Ozs7OztBQU1BLE1BQUl1SyxlQUFlLFNBQWZBLFlBQWUsQ0FBU2xLLEdBQVQsRUFBYztBQUMvQixXQUFPLEtBQ0QsMEZBREMsR0FDNEZBLEdBRDVGLEdBQ2tHLFFBRHpHO0FBRUEsV0FBTyxLQUNMLHdFQURLLEdBRUwscUJBRkssR0FHTCw0REFISyxHQUlMLGdCQUpLLEdBSWNBLEdBSmQsR0FJb0IsUUFKcEIsR0FLTCxRQUxLLEdBTUwsb0JBTkY7QUFPRCxHQVZEOztBQVlBOzs7O0FBSUEsTUFBSW1LLHNCQUFzQixLQUN4Qix3REFEd0IsR0FFeEIsd0VBRkY7O0FBSUE7Ozs7QUFJQSxNQUFJQyxnQkFBZ0IsS0FDbEIseURBRGtCLEdBRWxCLHFFQUZGOztBQUlBOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFJeEssYUFBYSxTQUFiQSxVQUFhLENBQVMvSixNQUFULEVBQWlCd1UsV0FBakIsRUFBOEJDLFdBQTlCLEVBQTJDO0FBQzFELGFBQVNDLG1CQUFULENBQTZCdkssR0FBN0IsRUFBa0M7QUFDOUIsVUFBSXdLLFlBQVkxVSxTQUFTMlUsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDRjtBQUNBLFVBQUlELFNBQUosRUFBZTtBQUNiLFlBQUlFLE1BQU10VyxPQUFPdVcscUJBQVAsR0FDTFAsYUFESyxHQUVMRCxtQkFGTDtBQUdBLFlBQUluSyxHQUFKLEVBQVM7QUFDUDBLLGlCQUFPLHVCQUF1QjFLLEdBQTlCO0FBQ0Q7QUFDRHdLLGtCQUFVSSxTQUFWLEdBQXNCVixhQUFhUSxHQUFiLENBQXRCO0FBQ0Q7QUFDRjs7QUFFREosa0JBQWNBLGVBQWVDLG1CQUE3Qjs7QUFFQSxRQUFJMVUsT0FBT2dWLGdCQUFYLEVBQTZCO0FBQzNCaFYsYUFBT2dWLGdCQUFQLENBQXdCLDJCQUF4QixFQUFxRCxVQUFTQyxLQUFULEVBQWdCO0FBQy9EUixvQkFBWVEsTUFBTTFDLGFBQWxCO0FBQ0QsT0FGTCxFQUVPLEtBRlA7QUFHRDtBQUNELFFBQUkyQyxVQUFVQyxnQkFBZ0JuVixNQUFoQixFQUF3QndVLFdBQXhCLENBQWQ7QUFDQSxRQUFJLENBQUNVLE9BQUwsRUFBYztBQUNaLFVBQUksQ0FBQzNXLE9BQU91VyxxQkFBWixFQUFtQztBQUNqQ0wsb0JBQVksRUFBWjtBQUNELE9BRkQsTUFFTztBQUNMQSxvQkFBWSxFQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPUyxPQUFQO0FBQ0QsR0FoQ0Q7O0FBa0NBOzs7Ozs7QUFNQSxNQUFJQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQVNuVixNQUFULEVBQWlCd1UsV0FBakIsRUFBOEI7QUFDbEQsUUFBSVksUUFBUSxDQUFDLE9BQUQsRUFBVSxvQkFBVixFQUFnQyxXQUFoQyxFQUE2QyxXQUE3QyxDQUFaO0FBQ0EsUUFBSUYsVUFBVSxJQUFkO0FBQ0EsU0FBSyxJQUFJM0osS0FBSyxDQUFkLEVBQWlCQSxLQUFLNkosTUFBTWxZLE1BQTVCLEVBQW9DLEVBQUVxTyxFQUF0QyxFQUEwQztBQUN4QyxVQUFJO0FBQ0YySixrQkFBVWxWLE9BQU9xVixVQUFQLENBQWtCRCxNQUFNN0osRUFBTixDQUFsQixFQUE2QmlKLFdBQTdCLENBQVY7QUFDRCxPQUZELENBRUUsT0FBTXJULENBQU4sRUFBUyxDQUFFO0FBQ2IsVUFBSStULE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjtBQUNELFdBQU9BLE9BQVA7QUFDRCxHQVpEOztBQWNBLFNBQU87QUFDTEMscUJBQWlCQSxlQURaO0FBRUxwTCxnQkFBWUE7QUFGUCxHQUFQO0FBS0MsQ0EzR0Q7O0FBNkdBOzs7O0FBSUEsSUFBSSxDQUFDeEwsT0FBTytXLHFCQUFaLEVBQW1DO0FBQ2pDL1csU0FBTytXLHFCQUFQLEdBQWdDLFlBQVc7QUFDekMsV0FBTy9XLE9BQU8rVyxxQkFBUCxJQUNBL1csT0FBT2dYLDJCQURQLElBRUFoWCxPQUFPaVgsd0JBRlAsSUFHQWpYLE9BQU9rWCxzQkFIUCxJQUlBbFgsT0FBT21YLHVCQUpQLElBS0EsV0FBUyxtQ0FBb0NwQyxRQUE3QyxFQUF1RCx3QkFBeUJxQyxPQUFoRixFQUF5RjtBQUN2RnBYLGFBQU82VSxVQUFQLENBQWtCRSxRQUFsQixFQUE0QixPQUFLLEVBQWpDO0FBQ0QsS0FQUjtBQVFELEdBVDhCLEVBQS9CO0FBVUQ7O0FBRUQ7Ozs7O0FBS0EsSUFBSSxDQUFDL1UsT0FBT3FYLG9CQUFaLEVBQWtDO0FBQ2hDclgsU0FBT3FYLG9CQUFQLEdBQStCclgsT0FBT3NYLDJCQUFQLElBQ0F0WCxPQUFPdVgsMEJBRFAsSUFDcUN2WCxPQUFPd1gsaUNBRDVDLElBRUF4WCxPQUFPeVgsdUJBRlAsSUFFa0N6WCxPQUFPMFgsOEJBRnpDLElBR0ExWCxPQUFPMlgsc0JBSFAsSUFHaUMzWCxPQUFPNFgsNkJBSHhDLElBSUE1WCxPQUFPNlgscUJBSlAsSUFJZ0M3WCxPQUFPOFgsNEJBSnZDLElBS0E5WCxPQUFPK1gsWUFMdEM7QUFNRDs7a0JBRWN4TSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TWYsSUFBTXlNLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3JPLEVBQUQsRUFBSzlKLElBQUwsRUFBV29ZLEdBQVgsRUFBZ0JwTixJQUFoQixFQUFzQnFOLFNBQXRCLEVBQW9DO0FBQzNELEtBQUlDLFNBQVN4TyxHQUFHaUUsWUFBSCxFQUFiO0FBQ0EsS0FBRyxDQUFDdUssTUFBSixFQUFXO0FBQ1ZwTyxVQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQSxTQUFPLEtBQVA7QUFDQTtBQUNETCxJQUFHa0UsVUFBSCxDQUFjbEUsR0FBR21FLFlBQWpCLEVBQStCcUssTUFBL0I7QUFDQXhPLElBQUd5TyxVQUFILENBQWN6TyxHQUFHbUUsWUFBakIsRUFBK0JqTyxJQUEvQixFQUFxQzhKLEdBQUcwTyxXQUF4Qzs7QUFFQSxLQUFJQyxjQUFjM08sR0FBRzBMLGlCQUFILENBQXFCMUwsR0FBR0csT0FBeEIsRUFBaUNvTyxTQUFqQyxDQUFsQjtBQUNBLEtBQUdJLGNBQWMsQ0FBakIsRUFBbUI7QUFDbEJ2TyxVQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSxTQUFPLEtBQVA7QUFDQTs7QUFFREwsSUFBR3FFLG1CQUFILENBQXVCc0ssV0FBdkIsRUFBb0NMLEdBQXBDLEVBQXlDcE4sSUFBekMsRUFBK0MsS0FBL0MsRUFBc0QsQ0FBdEQsRUFBeUQsQ0FBekQ7QUFDQWxCLElBQUc0Tyx1QkFBSCxDQUEyQkQsV0FBM0I7O0FBRUEsUUFBTyxJQUFQO0FBQ0EsQ0FuQkQ7O0FBc0JBOzs7OztBQUtBLElBQU1FLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUM3TyxFQUFELEVBQUs5SixJQUFMLEVBQWM7QUFDdkM7QUFDQSxLQUFJNFksY0FBYzlPLEdBQUdpRSxZQUFILEVBQWxCO0FBQ0EsS0FBRyxDQUFDNkssV0FBSixFQUFpQjtBQUNoQjFPLFVBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUcsQ0FBQ2dPLGdCQUFnQnJPLEVBQWhCLEVBQW9COUosS0FBSzZZLFFBQXpCLEVBQW1DLENBQW5DLEVBQXNDL08sR0FBR3NFLEtBQXpDLEVBQWdELFlBQWhELENBQUosRUFBbUUsT0FBTyxDQUFDLENBQVI7QUFDbkUsS0FBRyxDQUFDK0osZ0JBQWdCck8sRUFBaEIsRUFBb0I5SixLQUFLOFksU0FBekIsRUFBb0MsQ0FBcEMsRUFBdUNoUCxHQUFHc0UsS0FBMUMsRUFBaUQsWUFBakQsQ0FBSixFQUFvRSxPQUFPLENBQUMsQ0FBUjs7QUFFcEV0RSxJQUFHa0UsVUFBSCxDQUFjbEUsR0FBR2dGLG9CQUFqQixFQUF1QzhKLFdBQXZDO0FBQ0E5TyxJQUFHeU8sVUFBSCxDQUFjek8sR0FBR2dGLG9CQUFqQixFQUF1QzlPLEtBQUsrWSxPQUE1QyxFQUFxRGpQLEdBQUcwTyxXQUF4RDs7QUFFQSxRQUFPLElBQVA7QUFDQSxDQWZEOztrQkFpQmVHLGlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZjs7Ozs7OztBQU9BLElBQU1LLGFBQWEsU0FBYkEsVUFBYSxDQUFDekIsT0FBRCxFQUFVdk0sSUFBVixFQUFnQmlPLE9BQWhCLEVBQTRCO0FBQzdDLE1BQUkxQixRQUFRWCxnQkFBWixFQUE2QjtBQUMzQlcsWUFBUVgsZ0JBQVIsQ0FBeUI1TCxJQUF6QixFQUErQmlPLE9BQS9CLEVBQXdDLElBQXhDO0FBQ0QsR0FGRCxNQUVPLElBQUkxQixRQUFRMkIsV0FBWixFQUF3QjtBQUM3QjNCLFlBQVEyQixXQUFSLENBQW9CLE9BQU9sTyxJQUEzQixFQUFpQ2lPLE9BQWpDO0FBQ0QsR0FGTSxNQUVBO0FBQ0wxQixZQUFRLE9BQU92TSxJQUFmLElBQXVCaU8sT0FBdkI7QUFDRDtBQUNGLENBUkQ7O0FBVUE7Ozs7OztBQU1BLElBQU1FLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUN2WCxNQUFELEVBQVN3WCxZQUFULEVBQTBCO0FBQ25EO0FBQ0EsTUFBSUMsV0FBVyxLQUFmO0FBQ0E7QUFDQSxNQUFJQyxRQUFRLENBQUMsQ0FBYjtBQUFBLE1BQWdCQyxRQUFRLENBQUMsQ0FBekI7O0FBRUEsTUFBSUMsT0FBTyxrQkFBa0I1WCxNQUFsQixHQUEyQixZQUEzQixHQUEwQyxXQUFyRDtBQUNDb1gsYUFBV3BYLE1BQVgsRUFBa0I0WCxJQUFsQixFQUF1QixVQUFTelcsQ0FBVCxFQUFXO0FBQ2hDLFFBQUkwVyxLQUFLLGtCQUFrQjdYLE1BQWxCLEdBQTJCbUIsRUFBRTJXLE9BQUYsQ0FBVSxDQUFWLENBQTNCLEdBQTBDM1csQ0FBbkQ7QUFDQSxRQUFJZ0QsSUFBSTBULEdBQUdFLE9BQVg7QUFBQSxRQUFvQjNULElBQUl5VCxHQUFHRyxPQUEzQjtBQUNGO0FBQ0EsUUFBSUMsT0FBT0osR0FBR0ssTUFBSCxDQUFVQyxxQkFBVixFQUFYO0FBQ0E7QUFDQSxRQUFHRixLQUFLcFYsSUFBTCxJQUFhc0IsQ0FBYixJQUFrQkEsSUFBSThULEtBQUtuVixLQUEzQixJQUFvQ21WLEtBQUtqVixHQUFMLElBQVlvQixDQUFoRCxJQUFxREEsSUFBSTZULEtBQUtsVixNQUFqRSxFQUF3RTtBQUN2RTJVLGNBQVF2VCxDQUFSLENBQVd3VCxRQUFRdlQsQ0FBUjtBQUNYcVQsaUJBQVcsSUFBWDtBQUNBO0FBQ0EsR0FWRDs7QUFZQSxNQUFJVyxPQUFPLGlCQUFpQnBZLE1BQWpCLEdBQTBCLFdBQTFCLEdBQXdDLFdBQW5EO0FBQ0FvWCxhQUFXcFgsTUFBWCxFQUFrQm9ZLElBQWxCLEVBQXVCLFVBQVNqWCxDQUFULEVBQVc7QUFDaEMsUUFBSTBXLEtBQUssaUJBQWlCN1gsTUFBakIsR0FBMEJtQixFQUFFMlcsT0FBRixDQUFVLENBQVYsQ0FBMUIsR0FBeUMzVyxDQUFsRDtBQUNBLFFBQUlnRCxJQUFJMFQsR0FBR0UsT0FBWDtBQUFBLFFBQW9CM1QsSUFBSXlULEdBQUdHLE9BQTNCO0FBQ0YsUUFBR1AsUUFBSCxFQUFZO0FBQ1gsVUFBSVksU0FBUyxNQUFNclksT0FBT00sTUFBMUIsQ0FEVyxDQUN1QjtBQUNsQyxVQUFJZ1ksS0FBS0QsVUFBVWxVLElBQUl1VCxLQUFkLENBQVQ7QUFDQSxVQUFJYSxLQUFLRixVQUFValUsSUFBSXVULEtBQWQsQ0FBVDtBQUNBO0FBQ0FILG1CQUFhLENBQWIsSUFBa0IzVCxLQUFLMlUsR0FBTCxDQUFTM1UsS0FBSzRVLEdBQUwsQ0FBU2pCLGFBQWEsQ0FBYixJQUFrQmUsRUFBM0IsRUFBK0IsSUFBL0IsQ0FBVCxFQUErQyxDQUFDLElBQWhELENBQWxCO0FBQ0FmLG1CQUFhLENBQWIsSUFBa0JBLGFBQWEsQ0FBYixJQUFrQmMsRUFBcEM7QUFDQTtBQUNEWixZQUFRdlQsQ0FBUixFQUFXd1QsUUFBUXZULENBQW5CO0FBQ0MsR0FaRDs7QUFjQSxNQUFJc1UsS0FBSyxnQkFBZ0IxWSxNQUFoQixHQUF5QixVQUF6QixHQUFzQyxTQUEvQztBQUNBb1gsYUFBV3BYLE1BQVgsRUFBa0IwWSxFQUFsQixFQUFxQixVQUFTdlgsQ0FBVCxFQUFXO0FBQzlCc1csZUFBVyxLQUFYO0FBQ0QsR0FGRDtBQUdELENBdENEOztrQkF3Q2VGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGY7QUFDQTs7QUFFTyxJQUFNb0IsOENBQW1CLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxDQUpNOztBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNqQztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSTNCLFdBQVcsSUFBSWpXLFlBQUosQ0FBaUIsQ0FBSTtBQUNqQyxLQUQ2QixFQUN4QixHQUR3QixFQUNuQixHQURtQixFQUNiLENBQUMsR0FEWSxFQUNQLEdBRE8sRUFDRixHQURFLEVBQ0ksQ0FBQyxHQURMLEVBQ1MsQ0FBQyxHQURWLEVBQ2UsR0FEZixFQUNzQixHQUR0QixFQUMwQixDQUFDLEdBRDNCLEVBQ2dDLEdBRGhDLEVBQ3dDO0FBQ3JFLEtBRjZCLEVBRXhCLEdBRndCLEVBRW5CLEdBRm1CLEVBRVosR0FGWSxFQUVSLENBQUMsR0FGTyxFQUVGLEdBRkUsRUFFSyxHQUZMLEVBRVMsQ0FBQyxHQUZWLEVBRWMsQ0FBQyxHQUZmLEVBRXNCLEdBRnRCLEVBRTJCLEdBRjNCLEVBRStCLENBQUMsR0FGaEMsRUFFd0M7QUFDckUsS0FINkIsRUFHeEIsR0FId0IsRUFHbkIsR0FIbUIsRUFHWixHQUhZLEVBR1AsR0FITyxFQUdILENBQUMsR0FIRSxFQUdJLENBQUMsR0FITCxFQUdVLEdBSFYsRUFHYyxDQUFDLEdBSGYsRUFHcUIsQ0FBQyxHQUh0QixFQUcyQixHQUgzQixFQUdnQyxHQUhoQyxFQUd3QztBQUN0RSxHQUFDLEdBSjZCLEVBSXhCLEdBSndCLEVBSW5CLEdBSm1CLEVBSWIsQ0FBQyxHQUpZLEVBSVAsR0FKTyxFQUlILENBQUMsR0FKRSxFQUlJLENBQUMsR0FKTCxFQUlTLENBQUMsR0FKVixFQUljLENBQUMsR0FKZixFQUlxQixDQUFDLEdBSnRCLEVBSTBCLENBQUMsR0FKM0IsRUFJZ0MsR0FKaEMsRUFJd0M7QUFDdEUsR0FBQyxHQUw2QixFQUt6QixDQUFDLEdBTHdCLEVBS3BCLENBQUMsR0FMbUIsRUFLWixHQUxZLEVBS1IsQ0FBQyxHQUxPLEVBS0gsQ0FBQyxHQUxFLEVBS0ssR0FMTCxFQUtTLENBQUMsR0FMVixFQUtlLEdBTGYsRUFLcUIsQ0FBQyxHQUx0QixFQUswQixDQUFDLEdBTDNCLEVBS2dDLEdBTGhDLEVBS3dDO0FBQ3JFLEtBTjZCLEVBTXpCLENBQUMsR0FOd0IsRUFNcEIsQ0FBQyxHQU5tQixFQU1iLENBQUMsR0FOWSxFQU1SLENBQUMsR0FOTyxFQU1ILENBQUMsR0FORSxFQU1JLENBQUMsR0FOTCxFQU1VLEdBTlYsRUFNYyxDQUFDLEdBTmYsRUFNc0IsR0FOdEIsRUFNMkIsR0FOM0IsRUFNK0IsQ0FBQyxHQU5oQyxDQU13QztBQU54QyxHQUFqQixDQUFmOztBQVNBLE1BQUlrVyxZQUFZLElBQUlsVyxZQUFKLENBQWlCLENBQUk7QUFDakMsS0FENkIsRUFDeEIsR0FEd0IsRUFDakIsR0FEaUIsRUFDWixHQURZLEVBQ0wsR0FESyxFQUNBLEdBREEsRUFDTyxHQURQLEVBQ1ksR0FEWixFQUNvQjtBQUNqRCxLQUY2QixFQUV4QixHQUZ3QixFQUVqQixHQUZpQixFQUVaLEdBRlksRUFFTCxHQUZLLEVBRUEsR0FGQSxFQUVPLEdBRlAsRUFFWSxHQUZaLEVBRW9CO0FBQ2pELEtBSDZCLEVBR3hCLEdBSHdCLEVBR2pCLEdBSGlCLEVBR1osR0FIWSxFQUdMLEdBSEssRUFHQSxHQUhBLEVBR08sR0FIUCxFQUdZLEdBSFosRUFHb0I7QUFDakQsS0FKNkIsRUFJeEIsR0FKd0IsRUFJakIsR0FKaUIsRUFJWixHQUpZLEVBSUwsR0FKSyxFQUlBLEdBSkEsRUFJTyxHQUpQLEVBSVksR0FKWixFQUlvQjtBQUNqRCxLQUw2QixFQUt4QixHQUx3QixFQUtqQixHQUxpQixFQUtaLEdBTFksRUFLTCxHQUxLLEVBS0EsR0FMQSxFQUtPLEdBTFAsRUFLWSxHQUxaLEVBS29CO0FBQ2pELEtBTjZCLEVBTXhCLEdBTndCLEVBTWpCLEdBTmlCLEVBTVosR0FOWSxFQU1MLEdBTkssRUFNQSxHQU5BLEVBTU8sR0FOUCxFQU1ZLEdBTlosQ0FNb0I7QUFOcEIsR0FBakIsQ0FBaEI7O0FBU0E7QUFDQSxNQUFJbVcsVUFBVSxJQUFJMEIsVUFBSixDQUFlLENBQzFCLENBRDBCLEVBQ3ZCLENBRHVCLEVBQ3BCLENBRG9CLEVBQ2YsQ0FEZSxFQUNaLENBRFksRUFDVCxDQURTLEVBQ0g7QUFDdkIsR0FGMEIsRUFFdkIsQ0FGdUIsRUFFcEIsQ0FGb0IsRUFFZixDQUZlLEVBRVosQ0FGWSxFQUVULENBRlMsRUFFSDtBQUN2QixHQUgwQixFQUd2QixDQUh1QixFQUdyQixFQUhxQixFQUdmLENBSGUsRUFHYixFQUhhLEVBR1YsRUFIVSxFQUdIO0FBQ3hCLElBSjJCLEVBSXhCLEVBSndCLEVBSXJCLEVBSnFCLEVBSWhCLEVBSmdCLEVBSWIsRUFKYSxFQUlWLEVBSlUsRUFJSDtBQUN4QixJQUwyQixFQUt4QixFQUx3QixFQUtyQixFQUxxQixFQUtoQixFQUxnQixFQUtiLEVBTGEsRUFLVixFQUxVLEVBS0g7QUFDeEIsSUFOMkIsRUFNeEIsRUFOd0IsRUFNckIsRUFOcUIsRUFNaEIsRUFOZ0IsRUFNYixFQU5hLEVBTVYsRUFOVSxDQU1IO0FBTkcsR0FBZixDQUFkOztBQVNBLFNBQU8sRUFBRTVCLGtCQUFGLEVBQVlDLG9CQUFaLEVBQXVCQyxnQkFBdkIsRUFBUDtBQUNELENBdENNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQUkyQixjQUFjLElBQUlwWSxtQkFBSixFQUFsQjtBQUNBO0FBQ0EsSUFBSXFZLFlBQVksSUFBSTdXLG1CQUFKLENBQVksQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBWixDQUFoQjtBQUNBLElBQUk4VyxXQUFXblYsS0FBS29WLEdBQUwsQ0FBU0YsVUFBVWhZLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxFQUErQixDQUEvQixJQUNaOEMsS0FBS29WLEdBQUwsQ0FBU0YsVUFBVWhZLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxFQUErQixDQUEvQixDQURZLEdBQ3dCOEMsS0FBS29WLEdBQUwsQ0FBU0YsVUFBVWhZLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxFQUErQixDQUEvQixDQUR2Qzs7QUFHQTtBQUNBLElBQUltWSxrQkFBa0IsRUFBdEI7O0FBRUEsSUFBSWhSLFdBQUo7QUFBQSxJQUFRbEksZUFBUjtBQUFBLElBQWdCbVosbUJBQWhCOztBQUVBLElBQU1yWixXQUFXLFNBQVhBLFFBQVcsQ0FBQ3NaLE9BQUQsRUFBVUMsTUFBVixFQUFxQjs7QUFFckNyWixVQUFTQyxTQUFTcVosYUFBVCxDQUF1QixRQUF2QixDQUFUOztBQUVBLEtBQUcsQ0FBQ3RaLE1BQUosRUFBVztBQUNWc0ksVUFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0E4UTtBQUNBO0FBQ0RyWixRQUFPSSxLQUFQLEdBQWU3QixPQUFPOEIsVUFBdEI7QUFDQUwsUUFBT00sTUFBUCxHQUFnQi9CLE9BQU9nQyxXQUF2Qjs7QUFFQTJILE1BQUssZ0NBQWdCbEksTUFBaEIsQ0FBTDtBQUNBLEtBQUksQ0FBQ2tJLEVBQUwsRUFBUztBQUNSSSxVQUFRQyxHQUFSLENBQVkscUNBQVo7QUFDQThRO0FBQ0E7O0FBRUQsS0FBRyxDQUFDLDRCQUFZblIsRUFBWixFQUFnQnpJLHFCQUFXQyxZQUEzQixFQUF5Q0QscUJBQVdFLGNBQXBELENBQUosRUFBd0U7QUFDdkUySSxVQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQThRO0FBQ0E7O0FBRUQsS0FBSUUsWUFBWSx5QkFBaEI7QUFDQSxLQUFJQyxVQUFVRCxVQUFVcEMsT0FBVixDQUFrQmphLE1BQWhDOztBQUVBLEtBQUcsQ0FBQyxzQkFBa0JnTCxFQUFsQixFQUFzQnFSLFNBQXRCLENBQUosRUFBcUM7QUFDcENqUixVQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQThRO0FBQ0E7O0FBRURuUixJQUFHaUcsVUFBSCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7QUFDQWpHLElBQUd1UixNQUFILENBQVV2UixHQUFHd0YsVUFBYjs7QUFFQSxLQUFJZ00sY0FBY3hSLEdBQUd5UixrQkFBSCxDQUFzQnpSLEdBQUdHLE9BQXpCLEVBQWtDLGFBQWxDLENBQWxCOztBQUVBOFEsY0FBYSxJQUFJelksbUJBQUosRUFBYjtBQUNBO0FBQ0EsS0FBSWtaLE1BQU1DLFFBQVFiLFFBQVIsRUFBa0JFLGVBQWxCLEVBQW1DbFosT0FBT0ksS0FBUCxHQUFlSixPQUFPTSxNQUF6RCxDQUFWO0FBQ0E2WSxZQUFXMVYsY0FBWCxDQUEwQm1XLEdBQTFCLEVBQStCNVosT0FBT0ksS0FBUCxHQUFlSixPQUFPTSxNQUFyRCxFQUE2RCxHQUE3RCxFQUFrRSxNQUFsRTtBQUNBNlksWUFBV3ZTLE1BQVgsQ0FBa0JtUyxVQUFVaFksUUFBVixDQUFtQixDQUFuQixDQUFsQixFQUF5Q2dZLFVBQVVoWSxRQUFWLENBQW1CLENBQW5CLENBQXpDLEVBQWdFZ1ksVUFBVWhZLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBaEUsRUFBdUYsR0FBdkYsRUFBNEYsR0FBNUYsRUFBaUcsR0FBakcsRUFBc0csR0FBdEcsRUFBMkcsR0FBM0csRUFBZ0gsR0FBaEg7O0FBRUEsS0FBSXlXLGVBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFuQixDQXpDcUMsQ0F5Q047QUFDL0IsaUNBQWtCeFgsTUFBbEIsRUFBMEJ3WCxZQUExQjs7QUFFQSxLQUFHLENBQUMsdUJBQWF0UCxFQUFiLEVBQWlCc1IsT0FBakIsQ0FBSixFQUE4QjtBQUM3QmxSLFVBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBOFE7QUFDQTs7QUFFRDtBQUNBOztBQUVBLEtBQU1TLE9BQU8sU0FBUEEsSUFBTyxHQUFVO0FBQ3RCQyxPQUFLN1IsRUFBTCxFQUFTc1IsT0FBVCxFQUFrQkwsVUFBbEIsRUFBOEJPLFdBQTlCLEVBQTJDbEMsWUFBM0M7QUFDQWxDLHdCQUFzQndFLElBQXRCO0FBQ0EsRUFIRDtBQUlBQTs7QUFFQXZiLFFBQU95VyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2dGLGFBQWxDLEVBQWlELEtBQWpEOztBQUVBWixTQUFRcFosTUFBUjtBQUNBLENBN0REOztBQStEQSxJQUFNK1osT0FBTyxTQUFQQSxJQUFPLENBQUM3UixFQUFELEVBQUsrUixDQUFMLEVBQVFkLFVBQVIsRUFBb0JPLFdBQXBCLEVBQWlDbEMsWUFBakMsRUFBa0Q7QUFDOURzQixhQUFZMVgsR0FBWixDQUFnQitYLFVBQWhCO0FBQ0FMLGFBQVl4VCxNQUFaLENBQW1Ca1MsYUFBYSxDQUFiLENBQW5CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDO0FBQ0FzQixhQUFZeFQsTUFBWixDQUFtQmtTLGFBQWEsQ0FBYixDQUFuQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5Qzs7QUFFQXRQLElBQUdnUyxnQkFBSCxDQUFvQlIsV0FBcEIsRUFBaUMsS0FBakMsRUFBd0NaLFlBQVkvWCxRQUFwRDs7QUFFQW1ILElBQUdtSSxLQUFILENBQVNuSSxHQUFHb0ksZ0JBQUgsR0FBc0JwSSxHQUFHcUksZ0JBQWxDOztBQUVBckksSUFBR2lTLFlBQUgsQ0FBZ0JqUyxHQUFHa1MsU0FBbkIsRUFBOEJILENBQTlCLEVBQWlDL1IsR0FBR21TLGFBQXBDLEVBQW1ELENBQW5EO0FBQ0EsQ0FWRDs7QUFZQTs7Ozs7O0FBTUEsU0FBU1IsT0FBVCxDQUFpQmhaLENBQWpCLEVBQW9CeVosQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQ3hCLEtBQUluSSxDQUFKO0FBQ0EsS0FBSW9JLFdBQVdGLENBQWY7QUFDQSxLQUFJQyxJQUFJLENBQVIsRUFBVztBQUNQQyxhQUFXQSxXQUFTRCxDQUFwQjtBQUNIO0FBQ0RuSSxLQUFJdk8sS0FBSzRXLElBQUwsQ0FBVUQsV0FBUzNaLENBQVQsR0FBVyxDQUFyQixJQUF3QixDQUF4QixJQUE2QixNQUFNZ0QsS0FBS0MsRUFBeEMsQ0FBSjtBQUNBLFFBQU9zTyxDQUFQO0FBQ0Q7O0FBRUQsSUFBTTRILGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBTTtBQUMzQmhhLFFBQU9JLEtBQVAsR0FBZTdCLE9BQU84QixVQUF0QjtBQUNBTCxRQUFPTSxNQUFQLEdBQWdCL0IsT0FBT2dDLFdBQXZCO0FBQ0E7QUFDQSxLQUFJcVosTUFBTUMsUUFBUWIsUUFBUixFQUFrQkUsZUFBbEIsRUFBbUNsWixPQUFPSSxLQUFQLEdBQWVKLE9BQU9NLE1BQXpELENBQVY7QUFDQTZZLFlBQVcxVixjQUFYLENBQTBCbVcsR0FBMUIsRUFBK0I1WixPQUFPSSxLQUFQLEdBQWVKLE9BQU9NLE1BQXJELEVBQTZELEdBQTdELEVBQWtFLE1BQWxFO0FBQ0E2WSxZQUFXdlMsTUFBWCxDQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxHQUEzQyxFQUFnRCxHQUFoRCxFQUFxRCxHQUFyRCxFQUEwRCxHQUExRDtBQUNBc0IsSUFBR2dJLFFBQUgsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CbFEsT0FBT0ksS0FBMUIsRUFBaUNKLE9BQU9NLE1BQXhDOztBQUVBTCxVQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLEtBQXBCLEdBQTRCN0IsT0FBTzhCLFVBQVAsR0FBb0IsSUFBaEQ7QUFDQUosVUFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CRyxNQUFwQixHQUE2Qi9CLE9BQU9nQyxXQUFQLEdBQXFCLElBQWxEO0FBQ0EsQ0FYRDs7a0JBY2VULFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIZjs7Ozs7O0FBR0EsSUFBTTRhLGNBQWMsU0FBZEEsV0FBYyxDQUFDeFMsRUFBRCxFQUFLK1IsQ0FBTCxFQUFRVSxPQUFSLEVBQWlCQyxTQUFqQixFQUE0QkMsS0FBNUIsRUFBc0M7QUFDekQ7QUFDQTNTLElBQUdpSCxXQUFILENBQWVqSCxHQUFHb0gsbUJBQWxCLEVBQXVDLENBQXZDO0FBQ0E7QUFDQXBILElBQUcyRSxhQUFILENBQWlCM0UsR0FBRzRFLFFBQXBCO0FBQ0E7QUFDQTVFLElBQUc2RSxXQUFILENBQWU3RSxHQUFHK0UsVUFBbEIsRUFBOEIwTixPQUE5Qjs7QUFFQTtBQUNBelMsSUFBRzRTLGFBQUgsQ0FBaUI1UyxHQUFHK0UsVUFBcEIsRUFBZ0MvRSxHQUFHNlMsa0JBQW5DLEVBQXVEN1MsR0FBRzhTLE1BQTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUM7QUFDQTlTLElBQUcrUyxVQUFILENBQWMvUyxHQUFHK0UsVUFBakIsRUFBNkIsQ0FBN0IsRUFBZ0MvRSxHQUFHZ1QsR0FBbkMsRUFBd0NoVCxHQUFHZ1QsR0FBM0MsRUFBZ0RoVCxHQUFHbVMsYUFBbkQsRUFBa0VRLEtBQWxFOztBQUVBO0FBQ0EzUyxJQUFHaVQsU0FBSCxDQUFhUCxTQUFiLEVBQXdCLENBQXhCO0FBQ0EsQ0F0QkQ7O0FBd0JBLElBQU1RLGNBQWMsU0FBZEEsV0FBYyxDQUFDbFQsRUFBRCxFQUFLc08sR0FBTCxFQUFhO0FBQ2hDO0FBQ0EsS0FBSW1FLFVBQVV6UyxHQUFHbVQsYUFBSCxFQUFkO0FBQ0EsS0FBRyxDQUFDVixPQUFKLEVBQVk7QUFDWHJTLFVBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUlxUyxZQUFZMVMsR0FBR3lSLGtCQUFILENBQXNCelIsR0FBR0csT0FBekIsRUFBa0MsV0FBbEMsQ0FBaEI7O0FBRUEsS0FBSXdTLFFBQVEsSUFBSVMsS0FBSixFQUFaO0FBQ0FULE9BQU1VLE1BQU4sR0FBZSxZQUFVO0FBQ3hCYixjQUFZeFMsRUFBWixFQUFnQnNPLEdBQWhCLEVBQXFCbUUsT0FBckIsRUFBOEJDLFNBQTlCLEVBQXlDQyxLQUF6QztBQUNBLEVBRkQ7QUFHQUEsT0FBTXhaLEdBQU4sR0FBWW1hLGFBQVo7O0FBRUEsUUFBTyxJQUFQO0FBQ0EsQ0FqQkQ7O2tCQW1CZUosVyIsImZpbGUiOiJmcHZpZXdlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9mcHZpZXdlcl9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYmx1ZV9idG4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAuNzY5MjMwNzdlbTtcXG4gICAgYm90dG9tOiAuNzY5MjMwNzdlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDdiZTY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuMDc2OTIzMDhlbTtcXG4gICAgcGFkZGluZzogLjYxNTM4NDYyZW0gMS4yMzA3NjkyM2VtO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjMwNzY5MjMxZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjYxNTM4NDYyZW0gcmdiYSgwLDAsMCwuNCk7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc2t5LjJiMTFlZmQ2LmpwZ1wiOyIsIi8qKlxuICog5rWL6K+Vc2hhZGVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBUZXN0U2hhZGVyID0ge1xuXHQvLyDpobbngrnnnYDoibLlmahcblx0dmVydGV4U2hhZGVyOiBbXG5cblx0XHRcImF0dHJpYnV0ZSB2ZWM0IGFfUG9zaXRpb247XCIsXG5cdFx0XCJhdHRyaWJ1dGUgdmVjMiBhX1RleENvb3JkO1wiLFxuXG5cdFx0XCJ1bmlmb3JtIG1hdDQgdV9NVlBNYXRyaXg7XCIsXG5cblx0XHRcInZhcnlpbmcgdmVjMiB2X1RleENvb3JkO1wiLFxuXG5cdFx0XCJ2b2lkIG1haW4oKXtcIixcblx0XHRcdFwiZ2xfUG9zaXRpb24gPSB1X01WUE1hdHJpeCAqIGFfUG9zaXRpb247XCIsXG5cdFx0XHRcInZfVGV4Q29vcmQgPSBhX1RleENvb3JkO1wiLFxuXHRcdFwifVwiXG5cblx0XS5qb2luKFwiXFxuXCIpLFxuXHQvLyDniYflhYPnnYDoibLlmahcblx0ZnJhZ21lbnRTaGFkZXI6IFtcblxuXHRcdFwiI2lmZGVmIEdMX0VTXCIsXG5cdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcblx0XHRcIiNlbmRpZlwiLFxuXG5cdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB1X1NhbXBsZXI7XCIsXG5cblx0XHRcInZhcnlpbmcgdmVjMiB2X1RleENvb3JkO1wiLFxuXG5cdFx0XCJ2b2lkIG1haW4oKXtcIixcblx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVfU2FtcGxlciwgdl9UZXhDb29yZCk7XCIsXG5cdFx0XCJ9XCJcblxuXHRdLmpvaW4oXCJcXG5cIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNoYWRlcjsiLCJpbXBvcnQgZnB2aWV3ZXIgZnJvbSBcImZwdmlld2VyL2luZGV4XCI7XG5cbnJlcXVpcmUoXCIuL3N0eWxlL2NvbW1vbi9jb21tb20uY3NzXCIpO1xuXG5uZXcgUHJvbWlzZShmcHZpZXdlcikudGhlbihmdW5jdGlvbihjYW52YXMpe1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyAncHgnO1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLmFwcGVuZENoaWxkKGNhbnZhcyk7XG59KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb21tb20uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbW1vbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbW1vbS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBjdW9uLW1hdHJpeC5qcyAoYykgMjAxMiBrYW5kYSBhbmQgbWF0c3VkYVxyXG4vKiogXHJcbiAqIFRoaXMgaXMgYSBjbGFzcyB0cmVhdGluZyA0eDQgbWF0cml4LlxyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gT3BlbkdMIG1hdHJpeCBzdGFjay5cclxuICogVGhlIG1hdHJpeCBhZnRlciBjb252ZXJzaW9uIGlzIGNhbGN1bGF0ZWQgYnkgbXVsdGlwbHlpbmcgYSBjb252ZXJzaW9uIG1hdHJpeCBmcm9tIHRoZSByaWdodC5cclxuICogVGhlIG1hdHJpeCBpcyByZXBsYWNlZCBieSB0aGUgY2FsY3VsYXRlZCByZXN1bHQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdG9yIG9mIE1hdHJpeDRcclxuICogSWYgb3B0X3NyYyBpcyBzcGVjaWZpZWQsIG5ldyBtYXRyaXggaXMgaW5pdGlhbGl6ZWQgYnkgb3B0X3NyYy5cclxuICogT3RoZXJ3aXNlLCBuZXcgbWF0cml4IGlzIGluaXRpYWxpemVkIGJ5IGlkZW50aXR5IG1hdHJpeC5cclxuICogQHBhcmFtIG9wdF9zcmMgc291cmNlIG1hdHJpeChvcHRpb24pXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWF0cml4NCA9IGZ1bmN0aW9uKG9wdF9zcmMpIHtcclxuICB2YXIgaSwgcywgZDtcclxuICBpZiAob3B0X3NyYyAmJiB0eXBlb2Ygb3B0X3NyYyA9PT0gJ29iamVjdCcgJiYgb3B0X3NyYy5oYXNPd25Qcm9wZXJ0eSgnZWxlbWVudHMnKSkge1xyXG4gICAgcyA9IG9wdF9zcmMuZWxlbWVudHM7XHJcbiAgICBkID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTY7ICsraSkge1xyXG4gICAgICBkW2ldID0gc1tpXTtcclxuICAgIH1cclxuICAgIHRoaXMuZWxlbWVudHMgPSBkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gbmV3IEZsb2F0MzJBcnJheShbMSwwLDAsMCwgMCwxLDAsMCwgMCwwLDEsMCwgMCwwLDAsMV0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGlkZW50aXR5IG1hdHJpeC5cclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zZXRJZGVudGl0eSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBlID0gdGhpcy5lbGVtZW50cztcclxuICBlWzBdID0gMTsgICBlWzRdID0gMDsgICBlWzhdICA9IDA7ICAgZVsxMl0gPSAwO1xyXG4gIGVbMV0gPSAwOyAgIGVbNV0gPSAxOyAgIGVbOV0gID0gMDsgICBlWzEzXSA9IDA7XHJcbiAgZVsyXSA9IDA7ICAgZVs2XSA9IDA7ICAgZVsxMF0gPSAxOyAgIGVbMTRdID0gMDtcclxuICBlWzNdID0gMDsgICBlWzddID0gMDsgICBlWzExXSA9IDA7ICAgZVsxNV0gPSAxO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvcHkgbWF0cml4LlxyXG4gKiBAcGFyYW0gc3JjIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihzcmMpIHtcclxuICB2YXIgaSwgcywgZDtcclxuXHJcbiAgcyA9IHNyYy5lbGVtZW50cztcclxuICBkID0gdGhpcy5lbGVtZW50cztcclxuXHJcbiAgaWYgKHMgPT09IGQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgICBcclxuICBmb3IgKGkgPSAwOyBpIDwgMTY7ICsraSkge1xyXG4gICAgZFtpXSA9IHNbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNdWx0aXBseSB0aGUgbWF0cml4IGZyb20gdGhlIHJpZ2h0LlxyXG4gKiBAcGFyYW0gb3RoZXIgVGhlIG11bHRpcGx5IG1hdHJpeFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uKG90aGVyKSB7XHJcbiAgdmFyIGksIGUsIGEsIGIsIGFpMCwgYWkxLCBhaTIsIGFpMztcclxuICBcclxuICAvLyBDYWxjdWxhdGUgZSA9IGEgKiBiXHJcbiAgZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgYSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgYiA9IG90aGVyLmVsZW1lbnRzO1xyXG4gIFxyXG4gIC8vIElmIGUgZXF1YWxzIGIsIGNvcHkgYiB0byB0ZW1wb3JhcnkgbWF0cml4LlxyXG4gIGlmIChlID09PSBiKSB7XHJcbiAgICBiID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTY7ICsraSkge1xyXG4gICAgICBiW2ldID0gZVtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZm9yIChpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgYWkwPWFbaV07ICBhaTE9YVtpKzRdOyAgYWkyPWFbaSs4XTsgIGFpMz1hW2krMTJdO1xyXG4gICAgZVtpXSAgICA9IGFpMCAqIGJbMF0gICsgYWkxICogYlsxXSAgKyBhaTIgKiBiWzJdICArIGFpMyAqIGJbM107XHJcbiAgICBlW2krNF0gID0gYWkwICogYls0XSAgKyBhaTEgKiBiWzVdICArIGFpMiAqIGJbNl0gICsgYWkzICogYls3XTtcclxuICAgIGVbaSs4XSAgPSBhaTAgKiBiWzhdICArIGFpMSAqIGJbOV0gICsgYWkyICogYlsxMF0gKyBhaTMgKiBiWzExXTtcclxuICAgIGVbaSsxMl0gPSBhaTAgKiBiWzEyXSArIGFpMSAqIGJbMTNdICsgYWkyICogYlsxNF0gKyBhaTMgKiBiWzE1XTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbk1hdHJpeDQucHJvdG90eXBlLm11bHRpcGx5ID0gTWF0cml4NC5wcm90b3R5cGUuY29uY2F0O1xyXG5cclxuLyoqXHJcbiAqIE11bHRpcGx5IHRoZSB0aHJlZS1kaW1lbnNpb25hbCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSBwb3MgIFRoZSBtdWx0aXBseSB2ZWN0b3JcclxuICogQHJldHVybiBUaGUgcmVzdWx0IG9mIG11bHRpcGxpY2F0aW9uKEZsb2F0MzJBcnJheSlcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLm11bHRpcGx5VmVjdG9yMyA9IGZ1bmN0aW9uKHBvcykge1xyXG4gIHZhciBlID0gdGhpcy5lbGVtZW50cztcclxuICB2YXIgcCA9IHBvcy5lbGVtZW50cztcclxuICB2YXIgdiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgdmFyIHJlc3VsdCA9IHYuZWxlbWVudHM7XHJcblxyXG4gIHJlc3VsdFswXSA9IHBbMF0gKiBlWzBdICsgcFsxXSAqIGVbNF0gKyBwWzJdICogZVsgOF0gKyBlWzEyXTtcclxuICByZXN1bHRbMV0gPSBwWzBdICogZVsxXSArIHBbMV0gKiBlWzVdICsgcFsyXSAqIGVbIDldICsgZVsxM107XHJcbiAgcmVzdWx0WzJdID0gcFswXSAqIGVbMl0gKyBwWzFdICogZVs2XSArIHBbMl0gKiBlWzEwXSArIGVbMTRdO1xyXG5cclxuICByZXR1cm4gdjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNdWx0aXBseSB0aGUgZm91ci1kaW1lbnNpb25hbCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSBwb3MgIFRoZSBtdWx0aXBseSB2ZWN0b3JcclxuICogQHJldHVybiBUaGUgcmVzdWx0IG9mIG11bHRpcGxpY2F0aW9uKEZsb2F0MzJBcnJheSlcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLm11bHRpcGx5VmVjdG9yNCA9IGZ1bmN0aW9uKHBvcykge1xyXG4gIHZhciBlID0gdGhpcy5lbGVtZW50cztcclxuICB2YXIgcCA9IHBvcy5lbGVtZW50cztcclxuICB2YXIgdiA9IG5ldyBWZWN0b3I0KCk7XHJcbiAgdmFyIHJlc3VsdCA9IHYuZWxlbWVudHM7XHJcblxyXG4gIHJlc3VsdFswXSA9IHBbMF0gKiBlWzBdICsgcFsxXSAqIGVbNF0gKyBwWzJdICogZVsgOF0gKyBwWzNdICogZVsxMl07XHJcbiAgcmVzdWx0WzFdID0gcFswXSAqIGVbMV0gKyBwWzFdICogZVs1XSArIHBbMl0gKiBlWyA5XSArIHBbM10gKiBlWzEzXTtcclxuICByZXN1bHRbMl0gPSBwWzBdICogZVsyXSArIHBbMV0gKiBlWzZdICsgcFsyXSAqIGVbMTBdICsgcFszXSAqIGVbMTRdO1xyXG4gIHJlc3VsdFszXSA9IHBbMF0gKiBlWzNdICsgcFsxXSAqIGVbN10gKyBwWzJdICogZVsxMV0gKyBwWzNdICogZVsxNV07XHJcblxyXG4gIHJldHVybiB2O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zcG9zZSB0aGUgbWF0cml4LlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLnRyYW5zcG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBlLCB0O1xyXG5cclxuICBlID0gdGhpcy5lbGVtZW50cztcclxuXHJcbiAgdCA9IGVbIDFdOyAgZVsgMV0gPSBlWyA0XTsgIGVbIDRdID0gdDtcclxuICB0ID0gZVsgMl07ICBlWyAyXSA9IGVbIDhdOyAgZVsgOF0gPSB0O1xyXG4gIHQgPSBlWyAzXTsgIGVbIDNdID0gZVsxMl07ICBlWzEyXSA9IHQ7XHJcbiAgdCA9IGVbIDZdOyAgZVsgNl0gPSBlWyA5XTsgIGVbIDldID0gdDtcclxuICB0ID0gZVsgN107ICBlWyA3XSA9IGVbMTNdOyAgZVsxM10gPSB0O1xyXG4gIHQgPSBlWzExXTsgIGVbMTFdID0gZVsxNF07ICBlWzE0XSA9IHQ7XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aGUgaW52ZXJzZSBtYXRyaXggb2Ygc3BlY2lmaWVkIG1hdHJpeCwgYW5kIHNldCB0byB0aGlzLlxyXG4gKiBAcGFyYW0gb3RoZXIgVGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zZXRJbnZlcnNlT2YgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gIHZhciBpLCBzLCBkLCBpbnYsIGRldDtcclxuXHJcbiAgcyA9IG90aGVyLmVsZW1lbnRzO1xyXG4gIGQgPSB0aGlzLmVsZW1lbnRzO1xyXG4gIGludiA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xyXG5cclxuICBpbnZbMF0gID0gICBzWzVdKnNbMTBdKnNbMTVdIC0gc1s1XSAqc1sxMV0qc1sxNF0gLSBzWzldICpzWzZdKnNbMTVdXHJcbiAgICAgICAgICAgICsgc1s5XSpzWzddICpzWzE0XSArIHNbMTNdKnNbNl0gKnNbMTFdIC0gc1sxM10qc1s3XSpzWzEwXTtcclxuICBpbnZbNF0gID0gLSBzWzRdKnNbMTBdKnNbMTVdICsgc1s0XSAqc1sxMV0qc1sxNF0gKyBzWzhdICpzWzZdKnNbMTVdXHJcbiAgICAgICAgICAgIC0gc1s4XSpzWzddICpzWzE0XSAtIHNbMTJdKnNbNl0gKnNbMTFdICsgc1sxMl0qc1s3XSpzWzEwXTtcclxuICBpbnZbOF0gID0gICBzWzRdKnNbOV0gKnNbMTVdIC0gc1s0XSAqc1sxMV0qc1sxM10gLSBzWzhdICpzWzVdKnNbMTVdXHJcbiAgICAgICAgICAgICsgc1s4XSpzWzddICpzWzEzXSArIHNbMTJdKnNbNV0gKnNbMTFdIC0gc1sxMl0qc1s3XSpzWzldO1xyXG4gIGludlsxMl0gPSAtIHNbNF0qc1s5XSAqc1sxNF0gKyBzWzRdICpzWzEwXSpzWzEzXSArIHNbOF0gKnNbNV0qc1sxNF1cclxuICAgICAgICAgICAgLSBzWzhdKnNbNl0gKnNbMTNdIC0gc1sxMl0qc1s1XSAqc1sxMF0gKyBzWzEyXSpzWzZdKnNbOV07XHJcblxyXG4gIGludlsxXSAgPSAtIHNbMV0qc1sxMF0qc1sxNV0gKyBzWzFdICpzWzExXSpzWzE0XSArIHNbOV0gKnNbMl0qc1sxNV1cclxuICAgICAgICAgICAgLSBzWzldKnNbM10gKnNbMTRdIC0gc1sxM10qc1syXSAqc1sxMV0gKyBzWzEzXSpzWzNdKnNbMTBdO1xyXG4gIGludls1XSAgPSAgIHNbMF0qc1sxMF0qc1sxNV0gLSBzWzBdICpzWzExXSpzWzE0XSAtIHNbOF0gKnNbMl0qc1sxNV1cclxuICAgICAgICAgICAgKyBzWzhdKnNbM10gKnNbMTRdICsgc1sxMl0qc1syXSAqc1sxMV0gLSBzWzEyXSpzWzNdKnNbMTBdO1xyXG4gIGludls5XSAgPSAtIHNbMF0qc1s5XSAqc1sxNV0gKyBzWzBdICpzWzExXSpzWzEzXSArIHNbOF0gKnNbMV0qc1sxNV1cclxuICAgICAgICAgICAgLSBzWzhdKnNbM10gKnNbMTNdIC0gc1sxMl0qc1sxXSAqc1sxMV0gKyBzWzEyXSpzWzNdKnNbOV07XHJcbiAgaW52WzEzXSA9ICAgc1swXSpzWzldICpzWzE0XSAtIHNbMF0gKnNbMTBdKnNbMTNdIC0gc1s4XSAqc1sxXSpzWzE0XVxyXG4gICAgICAgICAgICArIHNbOF0qc1syXSAqc1sxM10gKyBzWzEyXSpzWzFdICpzWzEwXSAtIHNbMTJdKnNbMl0qc1s5XTtcclxuXHJcbiAgaW52WzJdICA9ICAgc1sxXSpzWzZdKnNbMTVdIC0gc1sxXSAqc1s3XSpzWzE0XSAtIHNbNV0gKnNbMl0qc1sxNV1cclxuICAgICAgICAgICAgKyBzWzVdKnNbM10qc1sxNF0gKyBzWzEzXSpzWzJdKnNbN10gIC0gc1sxM10qc1szXSpzWzZdO1xyXG4gIGludls2XSAgPSAtIHNbMF0qc1s2XSpzWzE1XSArIHNbMF0gKnNbN10qc1sxNF0gKyBzWzRdICpzWzJdKnNbMTVdXHJcbiAgICAgICAgICAgIC0gc1s0XSpzWzNdKnNbMTRdIC0gc1sxMl0qc1syXSpzWzddICArIHNbMTJdKnNbM10qc1s2XTtcclxuICBpbnZbMTBdID0gICBzWzBdKnNbNV0qc1sxNV0gLSBzWzBdICpzWzddKnNbMTNdIC0gc1s0XSAqc1sxXSpzWzE1XVxyXG4gICAgICAgICAgICArIHNbNF0qc1szXSpzWzEzXSArIHNbMTJdKnNbMV0qc1s3XSAgLSBzWzEyXSpzWzNdKnNbNV07XHJcbiAgaW52WzE0XSA9IC0gc1swXSpzWzVdKnNbMTRdICsgc1swXSAqc1s2XSpzWzEzXSArIHNbNF0gKnNbMV0qc1sxNF1cclxuICAgICAgICAgICAgLSBzWzRdKnNbMl0qc1sxM10gLSBzWzEyXSpzWzFdKnNbNl0gICsgc1sxMl0qc1syXSpzWzVdO1xyXG5cclxuICBpbnZbM10gID0gLSBzWzFdKnNbNl0qc1sxMV0gKyBzWzFdKnNbN10qc1sxMF0gKyBzWzVdKnNbMl0qc1sxMV1cclxuICAgICAgICAgICAgLSBzWzVdKnNbM10qc1sxMF0gLSBzWzldKnNbMl0qc1s3XSAgKyBzWzldKnNbM10qc1s2XTtcclxuICBpbnZbN10gID0gICBzWzBdKnNbNl0qc1sxMV0gLSBzWzBdKnNbN10qc1sxMF0gLSBzWzRdKnNbMl0qc1sxMV1cclxuICAgICAgICAgICAgKyBzWzRdKnNbM10qc1sxMF0gKyBzWzhdKnNbMl0qc1s3XSAgLSBzWzhdKnNbM10qc1s2XTtcclxuICBpbnZbMTFdID0gLSBzWzBdKnNbNV0qc1sxMV0gKyBzWzBdKnNbN10qc1s5XSAgKyBzWzRdKnNbMV0qc1sxMV1cclxuICAgICAgICAgICAgLSBzWzRdKnNbM10qc1s5XSAgLSBzWzhdKnNbMV0qc1s3XSAgKyBzWzhdKnNbM10qc1s1XTtcclxuICBpbnZbMTVdID0gICBzWzBdKnNbNV0qc1sxMF0gLSBzWzBdKnNbNl0qc1s5XSAgLSBzWzRdKnNbMV0qc1sxMF1cclxuICAgICAgICAgICAgKyBzWzRdKnNbMl0qc1s5XSAgKyBzWzhdKnNbMV0qc1s2XSAgLSBzWzhdKnNbMl0qc1s1XTtcclxuXHJcbiAgZGV0ID0gc1swXSppbnZbMF0gKyBzWzFdKmludls0XSArIHNbMl0qaW52WzhdICsgc1szXSppbnZbMTJdO1xyXG4gIGlmIChkZXQgPT09IDApIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGV0ID0gMSAvIGRldDtcclxuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgZFtpXSA9IGludltpXSAqIGRldDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aGUgaW52ZXJzZSBtYXRyaXggb2YgdGhpcywgYW5kIHNldCB0byB0aGlzLlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLmludmVydCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnNldEludmVyc2VPZih0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIG9ydGhvZ3JhcGhpYyBwcm9qZWN0aW9uIG1hdHJpeC5cclxuICogQHBhcmFtIGxlZnQgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSByaWdodCBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSBib3R0b20gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiBjbGlwcGluZyBwbGFuZS5cclxuICogQHBhcmFtIHRvcCBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICogQHBhcmFtIG5lYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhcmVyIGRlcHRoIGNsaXBwaW5nIHBsYW5lLiBUaGlzIHZhbHVlIGlzIG1pbnVzIGlmIHRoZSBwbGFuZSBpcyB0byBiZSBiZWhpbmQgdGhlIHZpZXdlci5cclxuICogQHBhcmFtIGZhciBUaGUgZGlzdGFuY2VzIHRvIHRoZSBmYXJ0aGVyIGRlcHRoIGNsaXBwaW5nIHBsYW5lLiBUaGlzIHZhbHVlIGlzIG1pbnVzIGlmIHRoZSBwbGFuZSBpcyB0byBiZSBiZWhpbmQgdGhlIHZpZXdlci5cclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zZXRPcnRobyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgdmFyIGUsIHJ3LCByaCwgcmQ7XHJcblxyXG4gIGlmIChsZWZ0ID09PSByaWdodCB8fCBib3R0b20gPT09IHRvcCB8fCBuZWFyID09PSBmYXIpIHtcclxuICAgIHRocm93ICdudWxsIGZydXN0dW0nO1xyXG4gIH1cclxuXHJcbiAgcncgPSAxIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgcmggPSAxIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgcmQgPSAxIC8gKGZhciAtIG5lYXIpO1xyXG5cclxuICBlID0gdGhpcy5lbGVtZW50cztcclxuXHJcbiAgZVswXSAgPSAyICogcnc7XHJcbiAgZVsxXSAgPSAwO1xyXG4gIGVbMl0gID0gMDtcclxuICBlWzNdICA9IDA7XHJcblxyXG4gIGVbNF0gID0gMDtcclxuICBlWzVdICA9IDIgKiByaDtcclxuICBlWzZdICA9IDA7XHJcbiAgZVs3XSAgPSAwO1xyXG5cclxuICBlWzhdICA9IDA7XHJcbiAgZVs5XSAgPSAwO1xyXG4gIGVbMTBdID0gLTIgKiByZDtcclxuICBlWzExXSA9IDA7XHJcblxyXG4gIGVbMTJdID0gLShyaWdodCArIGxlZnQpICogcnc7XHJcbiAgZVsxM10gPSAtKHRvcCArIGJvdHRvbSkgKiByaDtcclxuICBlWzE0XSA9IC0oZmFyICsgbmVhcikgKiByZDtcclxuICBlWzE1XSA9IDE7XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE11bHRpcGx5IHRoZSBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXggZnJvbSB0aGUgcmlnaHQuXHJcbiAqIEBwYXJhbSBsZWZ0IFRoZSBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IG9mIGNsaXBwaW5nIHBsYW5lLlxyXG4gKiBAcGFyYW0gcmlnaHQgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IG9mIGNsaXBwaW5nIHBsYW5lLlxyXG4gKiBAcGFyYW0gYm90dG9tIFRoZSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSB0b3AgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSBuZWFyIFRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXJlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBpcyBtaW51cyBpZiB0aGUgcGxhbmUgaXMgdG8gYmUgYmVoaW5kIHRoZSB2aWV3ZXIuXHJcbiAqIEBwYXJhbSBmYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgZmFydGhlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBpcyBtaW51cyBpZiB0aGUgcGxhbmUgaXMgdG8gYmUgYmVoaW5kIHRoZSB2aWV3ZXIuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUub3J0aG8gPSBmdW5jdGlvbihsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gIHJldHVybiB0aGlzLmNvbmNhdChuZXcgTWF0cml4NCgpLnNldE9ydGhvKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeC5cclxuICogQHBhcmFtIGxlZnQgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSByaWdodCBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSBib3R0b20gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiBjbGlwcGluZyBwbGFuZS5cclxuICogQHBhcmFtIHRvcCBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICogQHBhcmFtIG5lYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhcmVyIGRlcHRoIGNsaXBwaW5nIHBsYW5lLiBUaGlzIHZhbHVlIG11c3QgYmUgcGx1cyB2YWx1ZS5cclxuICogQHBhcmFtIGZhciBUaGUgZGlzdGFuY2VzIHRvIHRoZSBmYXJ0aGVyIGRlcHRoIGNsaXBwaW5nIHBsYW5lLiBUaGlzIHZhbHVlIG11c3QgYmUgcGx1cyB2YWx1ZS5cclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zZXRGcnVzdHVtID0gZnVuY3Rpb24obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcclxuICB2YXIgZSwgcncsIHJoLCByZDtcclxuXHJcbiAgaWYgKGxlZnQgPT09IHJpZ2h0IHx8IHRvcCA9PT0gYm90dG9tIHx8IG5lYXIgPT09IGZhcikge1xyXG4gICAgdGhyb3cgJ251bGwgZnJ1c3R1bSc7XHJcbiAgfVxyXG4gIGlmIChuZWFyIDw9IDApIHtcclxuICAgIHRocm93ICduZWFyIDw9IDAnO1xyXG4gIH1cclxuICBpZiAoZmFyIDw9IDApIHtcclxuICAgIHRocm93ICdmYXIgPD0gMCc7XHJcbiAgfVxyXG5cclxuICBydyA9IDEgLyAocmlnaHQgLSBsZWZ0KTtcclxuICByaCA9IDEgLyAodG9wIC0gYm90dG9tKTtcclxuICByZCA9IDEgLyAoZmFyIC0gbmVhcik7XHJcblxyXG4gIGUgPSB0aGlzLmVsZW1lbnRzO1xyXG5cclxuICBlWyAwXSA9IDIgKiBuZWFyICogcnc7XHJcbiAgZVsgMV0gPSAwO1xyXG4gIGVbIDJdID0gMDtcclxuICBlWyAzXSA9IDA7XHJcblxyXG4gIGVbIDRdID0gMDtcclxuICBlWyA1XSA9IDIgKiBuZWFyICogcmg7XHJcbiAgZVsgNl0gPSAwO1xyXG4gIGVbIDddID0gMDtcclxuXHJcbiAgZVsgOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJ3O1xyXG4gIGVbIDldID0gKHRvcCArIGJvdHRvbSkgKiByaDtcclxuICBlWzEwXSA9IC0oZmFyICsgbmVhcikgKiByZDtcclxuICBlWzExXSA9IC0xO1xyXG5cclxuICBlWzEyXSA9IDA7XHJcbiAgZVsxM10gPSAwO1xyXG4gIGVbMTRdID0gLTIgKiBuZWFyICogZmFyICogcmQ7XHJcbiAgZVsxNV0gPSAwO1xyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNdWx0aXBseSB0aGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggZnJvbSB0aGUgcmlnaHQuXHJcbiAqIEBwYXJhbSBsZWZ0IFRoZSBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IG9mIGNsaXBwaW5nIHBsYW5lLlxyXG4gKiBAcGFyYW0gcmlnaHQgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IG9mIGNsaXBwaW5nIHBsYW5lLlxyXG4gKiBAcGFyYW0gYm90dG9tIFRoZSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSB0b3AgVGhlIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAqIEBwYXJhbSBuZWFyIFRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXJlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEBwYXJhbSBmYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgZmFydGhlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUuZnJ1c3R1bSA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgcmV0dXJuIHRoaXMuY29uY2F0KG5ldyBNYXRyaXg0KCkuc2V0RnJ1c3R1bShsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggYnkgZm92eSBhbmQgYXNwZWN0LlxyXG4gKiBAcGFyYW0gZm92eSBUaGUgYW5nbGUgYmV0d2VlbiB0aGUgdXBwZXIgYW5kIGxvd2VyIHNpZGVzIG9mIHRoZSBmcnVzdHVtLlxyXG4gKiBAcGFyYW0gYXNwZWN0IFRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGZydXN0dW0uICh3aWR0aC9oZWlnaHQpXHJcbiAqIEBwYXJhbSBuZWFyIFRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXJlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEBwYXJhbSBmYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgZmFydGhlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUuc2V0UGVyc3BlY3RpdmUgPSBmdW5jdGlvbihmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xyXG4gIHZhciBlLCByZCwgcywgY3Q7XHJcblxyXG4gIGlmIChuZWFyID09PSBmYXIgfHwgYXNwZWN0ID09PSAwKSB7XHJcbiAgICB0aHJvdyAnbnVsbCBmcnVzdHVtJztcclxuICB9XHJcbiAgaWYgKG5lYXIgPD0gMCkge1xyXG4gICAgdGhyb3cgJ25lYXIgPD0gMCc7XHJcbiAgfVxyXG4gIGlmIChmYXIgPD0gMCkge1xyXG4gICAgdGhyb3cgJ2ZhciA8PSAwJztcclxuICB9XHJcblxyXG4gIGZvdnkgPSBNYXRoLlBJICogZm92eSAvIDE4MCAvIDI7XHJcbiAgcyA9IE1hdGguc2luKGZvdnkpO1xyXG4gIGlmIChzID09PSAwKSB7XHJcbiAgICB0aHJvdyAnbnVsbCBmcnVzdHVtJztcclxuICB9XHJcblxyXG4gIHJkID0gMSAvIChmYXIgLSBuZWFyKTtcclxuICBjdCA9IE1hdGguY29zKGZvdnkpIC8gcztcclxuXHJcbiAgZSA9IHRoaXMuZWxlbWVudHM7XHJcblxyXG4gIGVbMF0gID0gY3QgLyBhc3BlY3Q7XHJcbiAgZVsxXSAgPSAwO1xyXG4gIGVbMl0gID0gMDtcclxuICBlWzNdICA9IDA7XHJcblxyXG4gIGVbNF0gID0gMDtcclxuICBlWzVdICA9IGN0O1xyXG4gIGVbNl0gID0gMDtcclxuICBlWzddICA9IDA7XHJcblxyXG4gIGVbOF0gID0gMDtcclxuICBlWzldICA9IDA7XHJcbiAgZVsxMF0gPSAtKGZhciArIG5lYXIpICogcmQ7XHJcbiAgZVsxMV0gPSAtMTtcclxuXHJcbiAgZVsxMl0gPSAwO1xyXG4gIGVbMTNdID0gMDtcclxuICBlWzE0XSA9IC0yICogbmVhciAqIGZhciAqIHJkO1xyXG4gIGVbMTVdID0gMDtcclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogTXVsdGlwbHkgdGhlIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IGZyb20gdGhlIHJpZ2h0LlxyXG4gKiBAcGFyYW0gZm92eSBUaGUgYW5nbGUgYmV0d2VlbiB0aGUgdXBwZXIgYW5kIGxvd2VyIHNpZGVzIG9mIHRoZSBmcnVzdHVtLlxyXG4gKiBAcGFyYW0gYXNwZWN0IFRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGZydXN0dW0uICh3aWR0aC9oZWlnaHQpXHJcbiAqIEBwYXJhbSBuZWFyIFRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXJlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEBwYXJhbSBmYXIgVGhlIGRpc3RhbmNlcyB0byB0aGUgZmFydGhlciBkZXB0aCBjbGlwcGluZyBwbGFuZS4gVGhpcyB2YWx1ZSBtdXN0IGJlIHBsdXMgdmFsdWUuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUucGVyc3BlY3RpdmUgPSBmdW5jdGlvbihmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xyXG4gIHJldHVybiB0aGlzLmNvbmNhdChuZXcgTWF0cml4NCgpLnNldFBlcnNwZWN0aXZlKGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBtYXRyaXggZm9yIHNjYWxpbmcuXHJcbiAqIEBwYXJhbSB4IFRoZSBzY2FsZSBmYWN0b3IgYWxvbmcgdGhlIFggYXhpc1xyXG4gKiBAcGFyYW0geSBUaGUgc2NhbGUgZmFjdG9yIGFsb25nIHRoZSBZIGF4aXNcclxuICogQHBhcmFtIHogVGhlIHNjYWxlIGZhY3RvciBhbG9uZyB0aGUgWiBheGlzXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUuc2V0U2NhbGUgPSBmdW5jdGlvbih4LCB5LCB6KSB7XHJcbiAgdmFyIGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gIGVbMF0gPSB4OyAgZVs0XSA9IDA7ICBlWzhdICA9IDA7ICBlWzEyXSA9IDA7XHJcbiAgZVsxXSA9IDA7ICBlWzVdID0geTsgIGVbOV0gID0gMDsgIGVbMTNdID0gMDtcclxuICBlWzJdID0gMDsgIGVbNl0gPSAwOyAgZVsxMF0gPSB6OyAgZVsxNF0gPSAwO1xyXG4gIGVbM10gPSAwOyAgZVs3XSA9IDA7ICBlWzExXSA9IDA7ICBlWzE1XSA9IDE7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogTXVsdGlwbHkgdGhlIG1hdHJpeCBmb3Igc2NhbGluZyBmcm9tIHRoZSByaWdodC5cclxuICogQHBhcmFtIHggVGhlIHNjYWxlIGZhY3RvciBhbG9uZyB0aGUgWCBheGlzXHJcbiAqIEBwYXJhbSB5IFRoZSBzY2FsZSBmYWN0b3IgYWxvbmcgdGhlIFkgYXhpc1xyXG4gKiBAcGFyYW0geiBUaGUgc2NhbGUgZmFjdG9yIGFsb25nIHRoZSBaIGF4aXNcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICB2YXIgZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgZVswXSAqPSB4OyAgZVs0XSAqPSB5OyAgZVs4XSAgKj0gejtcclxuICBlWzFdICo9IHg7ICBlWzVdICo9IHk7ICBlWzldICAqPSB6O1xyXG4gIGVbMl0gKj0geDsgIGVbNl0gKj0geTsgIGVbMTBdICo9IHo7XHJcbiAgZVszXSAqPSB4OyAgZVs3XSAqPSB5OyAgZVsxMV0gKj0gejtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIG1hdHJpeCBmb3IgdHJhbnNsYXRpb24uXHJcbiAqIEBwYXJhbSB4IFRoZSBYIHZhbHVlIG9mIGEgdHJhbnNsYXRpb24uXHJcbiAqIEBwYXJhbSB5IFRoZSBZIHZhbHVlIG9mIGEgdHJhbnNsYXRpb24uXHJcbiAqIEBwYXJhbSB6IFRoZSBaIHZhbHVlIG9mIGEgdHJhbnNsYXRpb24uXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUuc2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gIHZhciBlID0gdGhpcy5lbGVtZW50cztcclxuICBlWzBdID0gMTsgIGVbNF0gPSAwOyAgZVs4XSAgPSAwOyAgZVsxMl0gPSB4O1xyXG4gIGVbMV0gPSAwOyAgZVs1XSA9IDE7ICBlWzldICA9IDA7ICBlWzEzXSA9IHk7XHJcbiAgZVsyXSA9IDA7ICBlWzZdID0gMDsgIGVbMTBdID0gMTsgIGVbMTRdID0gejtcclxuICBlWzNdID0gMDsgIGVbN10gPSAwOyAgZVsxMV0gPSAwOyAgZVsxNV0gPSAxO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE11bHRpcGx5IHRoZSBtYXRyaXggZm9yIHRyYW5zbGF0aW9uIGZyb20gdGhlIHJpZ2h0LlxyXG4gKiBAcGFyYW0geCBUaGUgWCB2YWx1ZSBvZiBhIHRyYW5zbGF0aW9uLlxyXG4gKiBAcGFyYW0geSBUaGUgWSB2YWx1ZSBvZiBhIHRyYW5zbGF0aW9uLlxyXG4gKiBAcGFyYW0geiBUaGUgWiB2YWx1ZSBvZiBhIHRyYW5zbGF0aW9uLlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICB2YXIgZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgZVsxMl0gKz0gZVswXSAqIHggKyBlWzRdICogeSArIGVbOF0gICogejtcclxuICBlWzEzXSArPSBlWzFdICogeCArIGVbNV0gKiB5ICsgZVs5XSAgKiB6O1xyXG4gIGVbMTRdICs9IGVbMl0gKiB4ICsgZVs2XSAqIHkgKyBlWzEwXSAqIHo7XHJcbiAgZVsxNV0gKz0gZVszXSAqIHggKyBlWzddICogeSArIGVbMTFdICogejtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIG1hdHJpeCBmb3Igcm90YXRpb24uXHJcbiAqIFRoZSB2ZWN0b3Igb2Ygcm90YXRpb24gYXhpcyBtYXkgbm90IGJlIG5vcm1hbGl6ZWQuXHJcbiAqIEBwYXJhbSBhbmdsZSBUaGUgYW5nbGUgb2Ygcm90YXRpb24gKGRlZ3JlZXMpXHJcbiAqIEBwYXJhbSB4IFRoZSBYIGNvb3JkaW5hdGUgb2YgdmVjdG9yIG9mIHJvdGF0aW9uIGF4aXMuXHJcbiAqIEBwYXJhbSB5IFRoZSBZIGNvb3JkaW5hdGUgb2YgdmVjdG9yIG9mIHJvdGF0aW9uIGF4aXMuXHJcbiAqIEBwYXJhbSB6IFRoZSBaIGNvb3JkaW5hdGUgb2YgdmVjdG9yIG9mIHJvdGF0aW9uIGF4aXMuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUuc2V0Um90YXRlID0gZnVuY3Rpb24oYW5nbGUsIHgsIHksIHopIHtcclxuICB2YXIgZSwgcywgYywgbGVuLCBybGVuLCBuYywgeHksIHl6LCB6eCwgeHMsIHlzLCB6cztcclxuXHJcbiAgYW5nbGUgPSBNYXRoLlBJICogYW5nbGUgLyAxODA7XHJcbiAgZSA9IHRoaXMuZWxlbWVudHM7XHJcblxyXG4gIHMgPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuXHJcbiAgaWYgKDAgIT09IHggJiYgMCA9PT0geSAmJiAwID09PSB6KSB7XHJcbiAgICAvLyBSb3RhdGlvbiBhcm91bmQgWCBheGlzXHJcbiAgICBpZiAoeCA8IDApIHtcclxuICAgICAgcyA9IC1zO1xyXG4gICAgfVxyXG4gICAgZVswXSA9IDE7ICBlWzRdID0gMDsgIGVbIDhdID0gMDsgIGVbMTJdID0gMDtcclxuICAgIGVbMV0gPSAwOyAgZVs1XSA9IGM7ICBlWyA5XSA9LXM7ICBlWzEzXSA9IDA7XHJcbiAgICBlWzJdID0gMDsgIGVbNl0gPSBzOyAgZVsxMF0gPSBjOyAgZVsxNF0gPSAwO1xyXG4gICAgZVszXSA9IDA7ICBlWzddID0gMDsgIGVbMTFdID0gMDsgIGVbMTVdID0gMTtcclxuICB9IGVsc2UgaWYgKDAgPT09IHggJiYgMCAhPT0geSAmJiAwID09PSB6KSB7XHJcbiAgICAvLyBSb3RhdGlvbiBhcm91bmQgWSBheGlzXHJcbiAgICBpZiAoeSA8IDApIHtcclxuICAgICAgcyA9IC1zO1xyXG4gICAgfVxyXG4gICAgZVswXSA9IGM7ICBlWzRdID0gMDsgIGVbIDhdID0gczsgIGVbMTJdID0gMDtcclxuICAgIGVbMV0gPSAwOyAgZVs1XSA9IDE7ICBlWyA5XSA9IDA7ICBlWzEzXSA9IDA7XHJcbiAgICBlWzJdID0tczsgIGVbNl0gPSAwOyAgZVsxMF0gPSBjOyAgZVsxNF0gPSAwO1xyXG4gICAgZVszXSA9IDA7ICBlWzddID0gMDsgIGVbMTFdID0gMDsgIGVbMTVdID0gMTtcclxuICB9IGVsc2UgaWYgKDAgPT09IHggJiYgMCA9PT0geSAmJiAwICE9PSB6KSB7XHJcbiAgICAvLyBSb3RhdGlvbiBhcm91bmQgWiBheGlzXHJcbiAgICBpZiAoeiA8IDApIHtcclxuICAgICAgcyA9IC1zO1xyXG4gICAgfVxyXG4gICAgZVswXSA9IGM7ICBlWzRdID0tczsgIGVbIDhdID0gMDsgIGVbMTJdID0gMDtcclxuICAgIGVbMV0gPSBzOyAgZVs1XSA9IGM7ICBlWyA5XSA9IDA7ICBlWzEzXSA9IDA7XHJcbiAgICBlWzJdID0gMDsgIGVbNl0gPSAwOyAgZVsxMF0gPSAxOyAgZVsxNF0gPSAwO1xyXG4gICAgZVszXSA9IDA7ICBlWzddID0gMDsgIGVbMTFdID0gMDsgIGVbMTVdID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gUm90YXRpb24gYXJvdW5kIGFub3RoZXIgYXhpc1xyXG4gICAgbGVuID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XHJcbiAgICBpZiAobGVuICE9PSAxKSB7XHJcbiAgICAgIHJsZW4gPSAxIC8gbGVuO1xyXG4gICAgICB4ICo9IHJsZW47XHJcbiAgICAgIHkgKj0gcmxlbjtcclxuICAgICAgeiAqPSBybGVuO1xyXG4gICAgfVxyXG4gICAgbmMgPSAxIC0gYztcclxuICAgIHh5ID0geCAqIHk7XHJcbiAgICB5eiA9IHkgKiB6O1xyXG4gICAgenggPSB6ICogeDtcclxuICAgIHhzID0geCAqIHM7XHJcbiAgICB5cyA9IHkgKiBzO1xyXG4gICAgenMgPSB6ICogcztcclxuXHJcbiAgICBlWyAwXSA9IHgqeCpuYyArICBjO1xyXG4gICAgZVsgMV0gPSB4eSAqbmMgKyB6cztcclxuICAgIGVbIDJdID0genggKm5jIC0geXM7XHJcbiAgICBlWyAzXSA9IDA7XHJcblxyXG4gICAgZVsgNF0gPSB4eSAqbmMgLSB6cztcclxuICAgIGVbIDVdID0geSp5Km5jICsgIGM7XHJcbiAgICBlWyA2XSA9IHl6ICpuYyArIHhzO1xyXG4gICAgZVsgN10gPSAwO1xyXG5cclxuICAgIGVbIDhdID0genggKm5jICsgeXM7XHJcbiAgICBlWyA5XSA9IHl6ICpuYyAtIHhzO1xyXG4gICAgZVsxMF0gPSB6KnoqbmMgKyAgYztcclxuICAgIGVbMTFdID0gMDtcclxuXHJcbiAgICBlWzEyXSA9IDA7XHJcbiAgICBlWzEzXSA9IDA7XHJcbiAgICBlWzE0XSA9IDA7XHJcbiAgICBlWzE1XSA9IDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNdWx0aXBseSB0aGUgbWF0cml4IGZvciByb3RhdGlvbiBmcm9tIHRoZSByaWdodC5cclxuICogVGhlIHZlY3RvciBvZiByb3RhdGlvbiBheGlzIG1heSBub3QgYmUgbm9ybWFsaXplZC5cclxuICogQHBhcmFtIGFuZ2xlIFRoZSBhbmdsZSBvZiByb3RhdGlvbiAoZGVncmVlcylcclxuICogQHBhcmFtIHggVGhlIFggY29vcmRpbmF0ZSBvZiB2ZWN0b3Igb2Ygcm90YXRpb24gYXhpcy5cclxuICogQHBhcmFtIHkgVGhlIFkgY29vcmRpbmF0ZSBvZiB2ZWN0b3Igb2Ygcm90YXRpb24gYXhpcy5cclxuICogQHBhcmFtIHogVGhlIFogY29vcmRpbmF0ZSBvZiB2ZWN0b3Igb2Ygcm90YXRpb24gYXhpcy5cclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbihhbmdsZSwgeCwgeSwgeikge1xyXG4gIHJldHVybiB0aGlzLmNvbmNhdChuZXcgTWF0cml4NCgpLnNldFJvdGF0ZShhbmdsZSwgeCwgeSwgeikpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgdmlld2luZyBtYXRyaXguXHJcbiAqIEBwYXJhbSBleWVYLCBleWVZLCBleWVaIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXllIHBvaW50LlxyXG4gKiBAcGFyYW0gY2VudGVyWCwgY2VudGVyWSwgY2VudGVyWiBUaGUgcG9zaXRpb24gb2YgdGhlIHJlZmVyZW5jZSBwb2ludC5cclxuICogQHBhcmFtIHVwWCwgdXBZLCB1cFogVGhlIGRpcmVjdGlvbiBvZiB0aGUgdXAgdmVjdG9yLlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLnNldExvb2tBdCA9IGZ1bmN0aW9uKGV5ZVgsIGV5ZVksIGV5ZVosIGNlbnRlclgsIGNlbnRlclksIGNlbnRlclosIHVwWCwgdXBZLCB1cFopIHtcclxuICB2YXIgZSwgZngsIGZ5LCBmeiwgcmxmLCBzeCwgc3ksIHN6LCBybHMsIHV4LCB1eSwgdXo7XHJcblxyXG4gIGZ4ID0gY2VudGVyWCAtIGV5ZVg7XHJcbiAgZnkgPSBjZW50ZXJZIC0gZXllWTtcclxuICBmeiA9IGNlbnRlclogLSBleWVaO1xyXG5cclxuICAvLyBOb3JtYWxpemUgZi5cclxuICBybGYgPSAxIC8gTWF0aC5zcXJ0KGZ4KmZ4ICsgZnkqZnkgKyBmeipmeik7XHJcbiAgZnggKj0gcmxmO1xyXG4gIGZ5ICo9IHJsZjtcclxuICBmeiAqPSBybGY7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSBjcm9zcyBwcm9kdWN0IG9mIGYgYW5kIHVwLlxyXG4gIHN4ID0gZnkgKiB1cFogLSBmeiAqIHVwWTtcclxuICBzeSA9IGZ6ICogdXBYIC0gZnggKiB1cFo7XHJcbiAgc3ogPSBmeCAqIHVwWSAtIGZ5ICogdXBYO1xyXG5cclxuICAvLyBOb3JtYWxpemUgcy5cclxuICBybHMgPSAxIC8gTWF0aC5zcXJ0KHN4KnN4ICsgc3kqc3kgKyBzeipzeik7XHJcbiAgc3ggKj0gcmxzO1xyXG4gIHN5ICo9IHJscztcclxuICBzeiAqPSBybHM7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSBjcm9zcyBwcm9kdWN0IG9mIHMgYW5kIGYuXHJcbiAgdXggPSBzeSAqIGZ6IC0gc3ogKiBmeTtcclxuICB1eSA9IHN6ICogZnggLSBzeCAqIGZ6O1xyXG4gIHV6ID0gc3ggKiBmeSAtIHN5ICogZng7XHJcblxyXG4gIC8vIFNldCB0byB0aGlzLlxyXG4gIGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gIGVbMF0gPSBzeDtcclxuICBlWzFdID0gdXg7XHJcbiAgZVsyXSA9IC1meDtcclxuICBlWzNdID0gMDtcclxuXHJcbiAgZVs0XSA9IHN5O1xyXG4gIGVbNV0gPSB1eTtcclxuICBlWzZdID0gLWZ5O1xyXG4gIGVbN10gPSAwO1xyXG5cclxuICBlWzhdID0gc3o7XHJcbiAgZVs5XSA9IHV6O1xyXG4gIGVbMTBdID0gLWZ6O1xyXG4gIGVbMTFdID0gMDtcclxuXHJcbiAgZVsxMl0gPSAwO1xyXG4gIGVbMTNdID0gMDtcclxuICBlWzE0XSA9IDA7XHJcbiAgZVsxNV0gPSAxO1xyXG5cclxuICAvLyBUcmFuc2xhdGUuXHJcbiAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKC1leWVYLCAtZXllWSwgLWV5ZVopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE11bHRpcGx5IHRoZSB2aWV3aW5nIG1hdHJpeCBmcm9tIHRoZSByaWdodC5cclxuICogQHBhcmFtIGV5ZVgsIGV5ZVksIGV5ZVogVGhlIHBvc2l0aW9uIG9mIHRoZSBleWUgcG9pbnQuXHJcbiAqIEBwYXJhbSBjZW50ZXJYLCBjZW50ZXJZLCBjZW50ZXJaIFRoZSBwb3NpdGlvbiBvZiB0aGUgcmVmZXJlbmNlIHBvaW50LlxyXG4gKiBAcGFyYW0gdXBYLCB1cFksIHVwWiBUaGUgZGlyZWN0aW9uIG9mIHRoZSB1cCB2ZWN0b3IuXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuTWF0cml4NC5wcm90b3R5cGUubG9va0F0ID0gZnVuY3Rpb24oZXllWCwgZXllWSwgZXllWiwgY2VudGVyWCwgY2VudGVyWSwgY2VudGVyWiwgdXBYLCB1cFksIHVwWikge1xyXG4gIHJldHVybiB0aGlzLmNvbmNhdChuZXcgTWF0cml4NCgpLnNldExvb2tBdChleWVYLCBleWVZLCBleWVaLCBjZW50ZXJYLCBjZW50ZXJZLCBjZW50ZXJaLCB1cFgsIHVwWSwgdXBaKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogTXVsdGlwbHkgdGhlIG1hdHJpeCBmb3IgcHJvamVjdCB2ZXJ0ZXggdG8gcGxhbmUgZnJvbSB0aGUgcmlnaHQuXHJcbiAqIEBwYXJhbSBwbGFuZSBUaGUgYXJyYXlbQSwgQiwgQywgRF0gb2YgdGhlIGVxdWF0aW9uIG9mIHBsYW5lIFwiQXggKyBCeSArIEN6ICsgRCA9IDBcIi5cclxuICogQHBhcmFtIGxpZ2h0IFRoZSBhcnJheSB3aGljaCBzdG9yZWQgY29vcmRpbmF0ZXMgb2YgdGhlIGxpZ2h0LiBpZiBsaWdodFszXT0wLCB0cmVhdGVkIGFzIHBhcmFsbGVsIGxpZ2h0LlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbk1hdHJpeDQucHJvdG90eXBlLmRyb3BTaGFkb3cgPSBmdW5jdGlvbihwbGFuZSwgbGlnaHQpIHtcclxuICB2YXIgbWF0ID0gbmV3IE1hdHJpeDQoKTtcclxuICB2YXIgZSA9IG1hdC5lbGVtZW50cztcclxuXHJcbiAgdmFyIGRvdCA9IHBsYW5lWzBdICogbGlnaHRbMF0gKyBwbGFuZVsxXSAqIGxpZ2h0WzFdICsgcGxhbmVbMl0gKiBsaWdodFsyXSArIHBsYW5lWzNdICogbGlnaHRbM107XHJcblxyXG4gIGVbIDBdID0gZG90IC0gbGlnaHRbMF0gKiBwbGFuZVswXTtcclxuICBlWyAxXSA9ICAgICAtIGxpZ2h0WzFdICogcGxhbmVbMF07XHJcbiAgZVsgMl0gPSAgICAgLSBsaWdodFsyXSAqIHBsYW5lWzBdO1xyXG4gIGVbIDNdID0gICAgIC0gbGlnaHRbM10gKiBwbGFuZVswXTtcclxuXHJcbiAgZVsgNF0gPSAgICAgLSBsaWdodFswXSAqIHBsYW5lWzFdO1xyXG4gIGVbIDVdID0gZG90IC0gbGlnaHRbMV0gKiBwbGFuZVsxXTtcclxuICBlWyA2XSA9ICAgICAtIGxpZ2h0WzJdICogcGxhbmVbMV07XHJcbiAgZVsgN10gPSAgICAgLSBsaWdodFszXSAqIHBsYW5lWzFdO1xyXG5cclxuICBlWyA4XSA9ICAgICAtIGxpZ2h0WzBdICogcGxhbmVbMl07XHJcbiAgZVsgOV0gPSAgICAgLSBsaWdodFsxXSAqIHBsYW5lWzJdO1xyXG4gIGVbMTBdID0gZG90IC0gbGlnaHRbMl0gKiBwbGFuZVsyXTtcclxuICBlWzExXSA9ICAgICAtIGxpZ2h0WzNdICogcGxhbmVbMl07XHJcblxyXG4gIGVbMTJdID0gICAgIC0gbGlnaHRbMF0gKiBwbGFuZVszXTtcclxuICBlWzEzXSA9ICAgICAtIGxpZ2h0WzFdICogcGxhbmVbM107XHJcbiAgZVsxNF0gPSAgICAgLSBsaWdodFsyXSAqIHBsYW5lWzNdO1xyXG4gIGVbMTVdID0gZG90IC0gbGlnaHRbM10gKiBwbGFuZVszXTtcclxuXHJcbiAgcmV0dXJuIHRoaXMuY29uY2F0KG1hdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNdWx0aXBseSB0aGUgbWF0cml4IGZvciBwcm9qZWN0IHZlcnRleCB0byBwbGFuZSBmcm9tIHRoZSByaWdodC4oUHJvamVjdGVkIGJ5IHBhcmFsbGVsIGxpZ2h0LilcclxuICogQHBhcmFtIG5vcm1YLCBub3JtWSwgbm9ybVogVGhlIG5vcm1hbCB2ZWN0b3Igb2YgdGhlIHBsYW5lLihOb3QgbmVjZXNzYXJ5IHRvIGJlIG5vcm1hbGl6ZWQuKVxyXG4gKiBAcGFyYW0gcGxhbmVYLCBwbGFuZVksIHBsYW5lWiBUaGUgY29vcmRpbmF0ZSBvZiBhcmJpdHJhcnkgcG9pbnRzIG9uIGEgcGxhbmUuXHJcbiAqIEBwYXJhbSBsaWdodFgsIGxpZ2h0WSwgbGlnaHRaIFRoZSB2ZWN0b3Igb2YgdGhlIGRpcmVjdGlvbiBvZiBsaWdodC4oTm90IG5lY2Vzc2FyeSB0byBiZSBub3JtYWxpemVkLilcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5NYXRyaXg0LnByb3RvdHlwZS5kcm9wU2hhZG93RGlyZWN0aW9uYWxseSA9IGZ1bmN0aW9uKG5vcm1YLCBub3JtWSwgbm9ybVosIHBsYW5lWCwgcGxhbmVZLCBwbGFuZVosIGxpZ2h0WCwgbGlnaHRZLCBsaWdodFopIHtcclxuICB2YXIgYSA9IHBsYW5lWCAqIG5vcm1YICsgcGxhbmVZICogbm9ybVkgKyBwbGFuZVogKiBub3JtWjtcclxuICByZXR1cm4gdGhpcy5kcm9wU2hhZG93KFtub3JtWCwgbm9ybVksIG5vcm1aLCAtYV0sIFtsaWdodFgsIGxpZ2h0WSwgbGlnaHRaLCAwXSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0b3Igb2YgVmVjdG9yM1xyXG4gKiBJZiBvcHRfc3JjIGlzIHNwZWNpZmllZCwgbmV3IHZlY3RvciBpcyBpbml0aWFsaXplZCBieSBvcHRfc3JjLlxyXG4gKiBAcGFyYW0gb3B0X3NyYyBzb3VyY2UgdmVjdG9yKG9wdGlvbilcclxuICovXHJcbmV4cG9ydCBjb25zdCBWZWN0b3IzID0gZnVuY3Rpb24ob3B0X3NyYykge1xyXG4gIHZhciB2ID0gbmV3IEZsb2F0MzJBcnJheSgzKTtcclxuICBpZiAob3B0X3NyYyAmJiB0eXBlb2Ygb3B0X3NyYyA9PT0gJ29iamVjdCcpIHtcclxuICAgIHZbMF0gPSBvcHRfc3JjWzBdOyB2WzFdID0gb3B0X3NyY1sxXTsgdlsyXSA9IG9wdF9zcmNbMl07XHJcbiAgfSBcclxuICB0aGlzLmVsZW1lbnRzID0gdjtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBOb3JtYWxpemUuXHJcbiAgKiBAcmV0dXJuIHRoaXNcclxuICAqL1xyXG5WZWN0b3IzLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgdiA9IHRoaXMuZWxlbWVudHM7XHJcbiAgdmFyIGMgPSB2WzBdLCBkID0gdlsxXSwgZSA9IHZbMl0sIGcgPSBNYXRoLnNxcnQoYypjK2QqZCtlKmUpO1xyXG4gIGlmKGcpe1xyXG4gICAgaWYoZyA9PSAxKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgIHZbMF0gPSAwOyB2WzFdID0gMDsgdlsyXSA9IDA7XHJcbiAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgZyA9IDEvZztcclxuICAgdlswXSA9IGMqZzsgdlsxXSA9IGQqZzsgdlsyXSA9IGUqZztcclxuICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0b3Igb2YgVmVjdG9yNFxyXG4gKiBJZiBvcHRfc3JjIGlzIHNwZWNpZmllZCwgbmV3IHZlY3RvciBpcyBpbml0aWFsaXplZCBieSBvcHRfc3JjLlxyXG4gKiBAcGFyYW0gb3B0X3NyYyBzb3VyY2UgdmVjdG9yKG9wdGlvbilcclxuICovXHJcbmV4cG9ydCBjb25zdCBWZWN0b3I0ID0gZnVuY3Rpb24ob3B0X3NyYykge1xyXG4gIHZhciB2ID0gbmV3IEZsb2F0MzJBcnJheSg0KTtcclxuICBpZiAob3B0X3NyYyAmJiB0eXBlb2Ygb3B0X3NyYyA9PT0gJ29iamVjdCcpIHtcclxuICAgIHZbMF0gPSBvcHRfc3JjWzBdOyB2WzFdID0gb3B0X3NyY1sxXTsgdlsyXSA9IG9wdF9zcmNbMl07IHZbM10gPSBvcHRfc3JjWzNdO1xyXG4gIH0gXHJcbiAgdGhpcy5lbGVtZW50cyA9IHY7XHJcbn1cclxuIiwiaW1wb3J0IFdlYkdMVXRpbHMgZnJvbSBcInZlbmRvcl9nbC93ZWJnbC11dGlsc1wiO1xyXG5pbXBvcnQgV2ViR0xEZWJ1Z1V0aWxzIGZyb20gXCJ2ZW5kb3JfZ2wvd2ViZ2wtZGVidWdcIjtcclxuXHJcblxyXG4vLyBjdW9uLXV0aWxzLmpzIChjKSAyMDEyIGthbmRhIGFuZCBtYXRzdWRhXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwcm9ncmFtIG9iamVjdCBhbmQgbWFrZSBjdXJyZW50XHJcbiAqIEBwYXJhbSBnbCBHTCBjb250ZXh0XHJcbiAqIEBwYXJhbSB2c2hhZGVyIGEgdmVydGV4IHNoYWRlciBwcm9ncmFtIChzdHJpbmcpXHJcbiAqIEBwYXJhbSBmc2hhZGVyIGEgZnJhZ21lbnQgc2hhZGVyIHByb2dyYW0gKHN0cmluZylcclxuICogQHJldHVybiB0cnVlLCBpZiB0aGUgcHJvZ3JhbSBvYmplY3Qgd2FzIGNyZWF0ZWQgYW5kIHN1Y2Nlc3NmdWxseSBtYWRlIGN1cnJlbnQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNoYWRlcnMoZ2wsIHZzaGFkZXIsIGZzaGFkZXIpIHtcclxuICB2YXIgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZzaGFkZXIsIGZzaGFkZXIpO1xyXG4gIGlmICghcHJvZ3JhbSkge1xyXG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZ3JhbScpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICBnbC5wcm9ncmFtID0gcHJvZ3JhbTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIGxpbmtlZCBwcm9ncmFtIG9iamVjdFxyXG4gKiBAcGFyYW0gZ2wgR0wgY29udGV4dFxyXG4gKiBAcGFyYW0gdnNoYWRlciBhIHZlcnRleCBzaGFkZXIgcHJvZ3JhbSAoc3RyaW5nKVxyXG4gKiBAcGFyYW0gZnNoYWRlciBhIGZyYWdtZW50IHNoYWRlciBwcm9ncmFtIChzdHJpbmcpXHJcbiAqIEByZXR1cm4gY3JlYXRlZCBwcm9ncmFtIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oZ2wsIHZzaGFkZXIsIGZzaGFkZXIpIHtcclxuICAvLyBDcmVhdGUgc2hhZGVyIG9iamVjdFxyXG4gIHZhciB2ZXJ0ZXhTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2c2hhZGVyKTtcclxuICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZzaGFkZXIpO1xyXG4gIGlmICghdmVydGV4U2hhZGVyIHx8ICFmcmFnbWVudFNoYWRlcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYSBwcm9ncmFtIG9iamVjdFxyXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gIGlmICghcHJvZ3JhbSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBBdHRhY2ggdGhlIHNoYWRlciBvYmplY3RzXHJcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgLy8gTGluayB0aGUgcHJvZ3JhbSBvYmplY3RcclxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgLy8gQ2hlY2sgdGhlIHJlc3VsdCBvZiBsaW5raW5nXHJcbiAgdmFyIGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xyXG4gIGlmICghbGlua2VkKSB7XHJcbiAgICB2YXIgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbGluayBwcm9ncmFtOiAnICsgZXJyb3IpO1xyXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XHJcbiAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gcHJvZ3JhbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHNoYWRlciBvYmplY3RcclxuICogQHBhcmFtIGdsIEdMIGNvbnRleHRcclxuICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIHNoYWRlciBvYmplY3QgdG8gYmUgY3JlYXRlZFxyXG4gKiBAcGFyYW0gc291cmNlIHNoYWRlciBwcm9ncmFtIChzdHJpbmcpXHJcbiAqIEByZXR1cm4gY3JlYXRlZCBzaGFkZXIgb2JqZWN0LCBvciBudWxsIGlmIHRoZSBjcmVhdGlvbiBoYXMgZmFpbGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2wsIHR5cGUsIHNvdXJjZSkge1xyXG4gIC8vIENyZWF0ZSBzaGFkZXIgb2JqZWN0XHJcbiAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICBpZiAoc2hhZGVyID09IG51bGwpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gY3JlYXRlIHNoYWRlcicpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdGhlIHNoYWRlciBwcm9ncmFtXHJcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuXHJcbiAgLy8gQ29tcGlsZSB0aGUgc2hhZGVyXHJcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAvLyBDaGVjayB0aGUgcmVzdWx0IG9mIGNvbXBpbGF0aW9uXHJcbiAgdmFyIGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xyXG4gIGlmICghY29tcGlsZWQpIHtcclxuICAgIHZhciBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXI6ICcgKyBlcnJvcik7XHJcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoYWRlcjtcclxufVxyXG5cclxuLyoqIFxyXG4gKiBJbml0aWFsaXplIGFuZCBnZXQgdGhlIHJlbmRlcmluZyBmb3IgV2ViR0xcclxuICogQHBhcmFtIGNhbnZhcyA8Y2F2bmFzPiBlbGVtZW50XHJcbiAqIEBwYXJhbSBvcHRfZGVidWcgZmxhZyB0byBpbml0aWFsaXplIHRoZSBjb250ZXh0IGZvciBkZWJ1Z2dpbmdcclxuICogQHJldHVybiB0aGUgcmVuZGVyaW5nIGNvbnRleHQgZm9yIFdlYkdMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2ViR0xDb250ZXh0KGNhbnZhcywgb3B0X2RlYnVnKSB7XHJcbiAgLy8gR2V0IHRoZSByZW5kZXJpbmcgY29udGV4dCBmb3IgV2ViR0xcclxuICB2YXIgZ2wgPSBXZWJHTFV0aWxzLnNldHVwV2ViR0woY2FudmFzKTtcclxuICBpZiAoIWdsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgLy8gaWYgb3B0X2RlYnVnIGlzIGV4cGxpY2l0bHkgZmFsc2UsIGNyZWF0ZSB0aGUgY29udGV4dCBmb3IgZGVidWdnaW5nXHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IG9wdF9kZWJ1Zykge1xyXG4gICAgZ2wgPSBXZWJHTERlYnVnVXRpbHMubWFrZURlYnVnQ29udGV4dChnbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2w7XHJcbn1cclxuIiwiLy9Db3B5cmlnaHQgKGMpIDIwMDkgVGhlIENocm9taXVtIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4vL2ZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcblxyXG4vLyBWYXJpb3VzIGZ1bmN0aW9ucyBmb3IgaGVscGluZyBkZWJ1ZyBXZWJHTCBhcHBzLlxyXG5cclxuY29uc3QgV2ViR0xEZWJ1Z1V0aWxzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4vKipcclxuICogV3JhcHBlZCBsb2dnaW5nIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIE1lc3NhZ2UgdG8gbG9nLlxyXG4gKi9cclxudmFyIGxvZyA9IGZ1bmN0aW9uKG1zZykge1xyXG4gIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcclxuICAgIHdpbmRvdy5jb25zb2xlLmxvZyhtc2cpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBXaGljaCBhcmd1ZW1lbnRzIGFyZSBlbnVtcy5cclxuICogQHR5cGUgeyFPYmplY3QuPG51bWJlciwgc3RyaW5nPn1cclxuICovXHJcbnZhciBnbFZhbGlkRW51bUNvbnRleHRzID0ge1xyXG5cclxuICAvLyBHZW5lcmljIHNldHRlcnMgYW5kIGdldHRlcnNcclxuXHJcbiAgJ2VuYWJsZSc6IHsgMDp0cnVlIH0sXHJcbiAgJ2Rpc2FibGUnOiB7IDA6dHJ1ZSB9LFxyXG4gICdnZXRQYXJhbWV0ZXInOiB7IDA6dHJ1ZSB9LFxyXG5cclxuICAvLyBSZW5kZXJpbmdcclxuXHJcbiAgJ2RyYXdBcnJheXMnOiB7IDA6dHJ1ZSB9LFxyXG4gICdkcmF3RWxlbWVudHMnOiB7IDA6dHJ1ZSwgMjp0cnVlIH0sXHJcblxyXG4gIC8vIFNoYWRlcnNcclxuXHJcbiAgJ2NyZWF0ZVNoYWRlcic6IHsgMDp0cnVlIH0sXHJcbiAgJ2dldFNoYWRlclBhcmFtZXRlcic6IHsgMTp0cnVlIH0sXHJcbiAgJ2dldFByb2dyYW1QYXJhbWV0ZXInOiB7IDE6dHJ1ZSB9LFxyXG5cclxuICAvLyBWZXJ0ZXggYXR0cmlidXRlc1xyXG5cclxuICAnZ2V0VmVydGV4QXR0cmliJzogeyAxOnRydWUgfSxcclxuICAndmVydGV4QXR0cmliUG9pbnRlcic6IHsgMjp0cnVlIH0sXHJcblxyXG4gIC8vIFRleHR1cmVzXHJcblxyXG4gICdiaW5kVGV4dHVyZSc6IHsgMDp0cnVlIH0sXHJcbiAgJ2FjdGl2ZVRleHR1cmUnOiB7IDA6dHJ1ZSB9LFxyXG4gICdnZXRUZXhQYXJhbWV0ZXInOiB7IDA6dHJ1ZSwgMTp0cnVlIH0sXHJcbiAgJ3RleFBhcmFtZXRlcmYnOiB7IDA6dHJ1ZSwgMTp0cnVlIH0sXHJcbiAgJ3RleFBhcmFtZXRlcmknOiB7IDA6dHJ1ZSwgMTp0cnVlLCAyOnRydWUgfSxcclxuICAndGV4SW1hZ2UyRCc6IHsgMDp0cnVlLCAyOnRydWUsIDY6dHJ1ZSwgNzp0cnVlIH0sXHJcbiAgJ3RleFN1YkltYWdlMkQnOiB7IDA6dHJ1ZSwgNjp0cnVlLCA3OnRydWUgfSxcclxuICAnY29weVRleEltYWdlMkQnOiB7IDA6dHJ1ZSwgMjp0cnVlIH0sXHJcbiAgJ2NvcHlUZXhTdWJJbWFnZTJEJzogeyAwOnRydWUgfSxcclxuICAnZ2VuZXJhdGVNaXBtYXAnOiB7IDA6dHJ1ZSB9LFxyXG5cclxuICAvLyBCdWZmZXIgb2JqZWN0c1xyXG5cclxuICAnYmluZEJ1ZmZlcic6IHsgMDp0cnVlIH0sXHJcbiAgJ2J1ZmZlckRhdGEnOiB7IDA6dHJ1ZSwgMjp0cnVlIH0sXHJcbiAgJ2J1ZmZlclN1YkRhdGEnOiB7IDA6dHJ1ZSB9LFxyXG4gICdnZXRCdWZmZXJQYXJhbWV0ZXInOiB7IDA6dHJ1ZSwgMTp0cnVlIH0sXHJcblxyXG4gIC8vIFJlbmRlcmJ1ZmZlcnMgYW5kIGZyYW1lYnVmZmVyc1xyXG5cclxuICAncGl4ZWxTdG9yZWknOiB7IDA6dHJ1ZSwgMTp0cnVlIH0sXHJcbiAgJ3JlYWRQaXhlbHMnOiB7IDQ6dHJ1ZSwgNTp0cnVlIH0sXHJcbiAgJ2JpbmRSZW5kZXJidWZmZXInOiB7IDA6dHJ1ZSB9LFxyXG4gICdiaW5kRnJhbWVidWZmZXInOiB7IDA6dHJ1ZSB9LFxyXG4gICdjaGVja0ZyYW1lYnVmZmVyU3RhdHVzJzogeyAwOnRydWUgfSxcclxuICAnZnJhbWVidWZmZXJSZW5kZXJidWZmZXInOiB7IDA6dHJ1ZSwgMTp0cnVlLCAyOnRydWUgfSxcclxuICAnZnJhbWVidWZmZXJUZXh0dXJlMkQnOiB7IDA6dHJ1ZSwgMTp0cnVlLCAyOnRydWUgfSxcclxuICAnZ2V0RnJhbWVidWZmZXJBdHRhY2htZW50UGFyYW1ldGVyJzogeyAwOnRydWUsIDE6dHJ1ZSwgMjp0cnVlIH0sXHJcbiAgJ2dldFJlbmRlcmJ1ZmZlclBhcmFtZXRlcic6IHsgMDp0cnVlLCAxOnRydWUgfSxcclxuICAncmVuZGVyYnVmZmVyU3RvcmFnZSc6IHsgMDp0cnVlLCAxOnRydWUgfSxcclxuXHJcbiAgLy8gRnJhbWUgYnVmZmVyIG9wZXJhdGlvbnMgKGNsZWFyLCBibGVuZCwgZGVwdGggdGVzdCwgc3RlbmNpbClcclxuXHJcbiAgJ2NsZWFyJzogeyAwOnRydWUgfSxcclxuICAnZGVwdGhGdW5jJzogeyAwOnRydWUgfSxcclxuICAnYmxlbmRGdW5jJzogeyAwOnRydWUsIDE6dHJ1ZSB9LFxyXG4gICdibGVuZEZ1bmNTZXBhcmF0ZSc6IHsgMDp0cnVlLCAxOnRydWUsIDI6dHJ1ZSwgMzp0cnVlIH0sXHJcbiAgJ2JsZW5kRXF1YXRpb24nOiB7IDA6dHJ1ZSB9LFxyXG4gICdibGVuZEVxdWF0aW9uU2VwYXJhdGUnOiB7IDA6dHJ1ZSwgMTp0cnVlIH0sXHJcbiAgJ3N0ZW5jaWxGdW5jJzogeyAwOnRydWUgfSxcclxuICAnc3RlbmNpbEZ1bmNTZXBhcmF0ZSc6IHsgMDp0cnVlLCAxOnRydWUgfSxcclxuICAnc3RlbmNpbE1hc2tTZXBhcmF0ZSc6IHsgMDp0cnVlIH0sXHJcbiAgJ3N0ZW5jaWxPcCc6IHsgMDp0cnVlLCAxOnRydWUsIDI6dHJ1ZSB9LFxyXG4gICdzdGVuY2lsT3BTZXBhcmF0ZSc6IHsgMDp0cnVlLCAxOnRydWUsIDI6dHJ1ZSwgMzp0cnVlIH0sXHJcblxyXG4gIC8vIEN1bGxpbmdcclxuXHJcbiAgJ2N1bGxGYWNlJzogeyAwOnRydWUgfSxcclxuICAnZnJvbnRGYWNlJzogeyAwOnRydWUgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgbnVtYmVycyB0byBuYW1lcy5cclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbnZhciBnbEVudW1zID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyB0aGlzIG1vZHVsZS4gU2FmZSB0byBjYWxsIG1vcmUgdGhhbiBvbmNlLlxyXG4gKiBAcGFyYW0geyFXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGN0eCBBIFdlYkdMIGNvbnRleHQuIElmXHJcbiAqICAgIHlvdSBoYXZlIG1vcmUgdGhhbiBvbmUgY29udGV4dCBpdCBkb2Vzbid0IG1hdHRlciB3aGljaCBvbmVcclxuICogICAgeW91IHBhc3MgaW4sIGl0IGlzIG9ubHkgdXNlZCB0byBwdWxsIG91dCBjb25zdGFudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KGN0eCkge1xyXG4gIGlmIChnbEVudW1zID09IG51bGwpIHtcclxuICAgIGdsRW51bXMgPSB7IH07XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gY3R4KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgY3R4W3Byb3BlcnR5TmFtZV0gPT0gJ251bWJlcicpIHtcclxuICAgICAgICBnbEVudW1zW2N0eFtwcm9wZXJ0eU5hbWVdXSA9IHByb3BlcnR5TmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB0aGUgdXRpbHMgaGF2ZSBiZWVuIGluaXRpYWxpemVkLlxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tJbml0KCkge1xyXG4gIGlmIChnbEVudW1zID09IG51bGwpIHtcclxuICAgIHRocm93ICdXZWJHTERlYnVnVXRpbHMuaW5pdChjdHgpIG5vdCBjYWxsZWQnO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBpZiB2YWx1ZSBtYXRjaGVzIGFueSBXZWJHTCBlbnVtXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gY2hlY2sgaWYgaXQgbWlnaHQgYmUgYW4gZW51bS5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBtYXRjaGVzIG9uZSBvZiB0aGUgV2ViR0wgZGVmaW5lZCBlbnVtc1xyXG4gKi9cclxuZnVuY3Rpb24gbWlnaHRCZUVudW0odmFsdWUpIHtcclxuICBjaGVja0luaXQoKTtcclxuICByZXR1cm4gKGdsRW51bXNbdmFsdWVdICE9PSB1bmRlZmluZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBhbiBzdHJpbmcgdmVyc2lvbiBvZiBhbiBXZWJHTCBlbnVtLlxyXG4gKlxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHZhciBzdHIgPSBXZWJHTERlYnVnVXRpbC5nbEVudW1Ub1N0cmluZyhjdHguZ2V0RXJyb3IoKSk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byByZXR1cm4gYW4gZW51bSBmb3JcclxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5nIHZlcnNpb24gb2YgdGhlIGVudW0uXHJcbiAqL1xyXG5mdW5jdGlvbiBnbEVudW1Ub1N0cmluZyh2YWx1ZSkge1xyXG4gIGNoZWNrSW5pdCgpO1xyXG4gIHZhciBuYW1lID0gZ2xFbnVtc1t2YWx1ZV07XHJcbiAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID8gbmFtZSA6XHJcbiAgICAgIChcIipVTktOT1dOIFdlYkdMIEVOVU0gKDB4XCIgKyB2YWx1ZS50b1N0cmluZygxNikgKyBcIilcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzdHJpbmcgdmVyc2lvbiBvZiBhIFdlYkdMIGFyZ3VtZW50LlxyXG4gKiBBdHRlbXB0cyB0byBjb252ZXJ0IGVudW0gYXJndW1lbnRzIHRvIHN0cmluZ3MuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIFdlYkdMIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYXJndW1lbnRJbmR4IHRoZSBpbmRleCBvZiB0aGUgYXJndW1lbnQuXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBhcmd1bWVudC5cclxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgYXMgYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBnbEZ1bmN0aW9uQXJnVG9TdHJpbmcoZnVuY3Rpb25OYW1lLCBhcmd1bWVudEluZGV4LCB2YWx1ZSkge1xyXG4gIHZhciBmdW5jSW5mbyA9IGdsVmFsaWRFbnVtQ29udGV4dHNbZnVuY3Rpb25OYW1lXTtcclxuICBpZiAoZnVuY0luZm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGZ1bmNJbmZvW2FyZ3VtZW50SW5kZXhdKSB7XHJcbiAgICAgIHJldHVybiBnbEVudW1Ub1N0cmluZyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBXZWJHTCBjb250ZXh0IHJldHVybnMgYSB3cmFwcGVkIGNvbnRleHQgdGhhdCBjYWxsc1xyXG4gKiBnbC5nZXRFcnJvciBhZnRlciBldmVyeSBjb21tYW5kIGFuZCBjYWxscyBhIGZ1bmN0aW9uIGlmIHRoZVxyXG4gKiByZXN1bHQgaXMgbm90IGdsLk5PX0VSUk9SLlxyXG4gKlxyXG4gKiBAcGFyYW0geyFXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGN0eCBUaGUgd2ViZ2wgY29udGV4dCB0b1xyXG4gKiAgICAgICAgd3JhcC5cclxuICogQHBhcmFtIHshZnVuY3Rpb24oZXJyLCBmdW5jTmFtZSwgYXJncyk6IHZvaWR9IG9wdF9vbkVycm9yRnVuY1xyXG4gKiAgICAgICAgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBnbC5nZXRFcnJvciByZXR1cm5zIGFuXHJcbiAqICAgICAgICBlcnJvci4gSWYgbm90IHNwZWNpZmllZCB0aGUgZGVmYXVsdCBmdW5jdGlvbiBjYWxsc1xyXG4gKiAgICAgICAgY29uc29sZS5sb2cgd2l0aCBhIG1lc3NhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlRGVidWdDb250ZXh0KGN0eCwgb3B0X29uRXJyb3JGdW5jKSB7XHJcbiAgaW5pdChjdHgpO1xyXG4gIG9wdF9vbkVycm9yRnVuYyA9IG9wdF9vbkVycm9yRnVuYyB8fCBmdW5jdGlvbihlcnIsIGZ1bmN0aW9uTmFtZSwgYXJncykge1xyXG4gICAgICAgIC8vIGFwcGFyZW50bHkgd2UgY2FuJ3QgZG8gYXJncy5qb2luKFwiLFwiKTtcclxuICAgICAgICB2YXIgYXJnU3RyID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgYXJncy5sZW5ndGg7ICsraWkpIHtcclxuICAgICAgICAgIGFyZ1N0ciArPSAoKGlpID09IDApID8gJycgOiAnLCAnKSArXHJcbiAgICAgICAgICAgICAgZ2xGdW5jdGlvbkFyZ1RvU3RyaW5nKGZ1bmN0aW9uTmFtZSwgaWksIGFyZ3NbaWldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nKFwiV2ViR0wgZXJyb3IgXCIrIGdsRW51bVRvU3RyaW5nKGVycikgKyBcIiBpbiBcIisgZnVuY3Rpb25OYW1lICtcclxuICAgICAgICAgICAgXCIoXCIgKyBhcmdTdHIgKyBcIilcIik7XHJcbiAgICAgIH07XHJcblxyXG4gIC8vIEhvbGRzIGJvb2xlYW5zIGZvciBlYWNoIEdMIGVycm9yIHNvIGFmdGVyIHdlIGdldCB0aGUgZXJyb3Igb3Vyc2VsdmVzXHJcbiAgLy8gd2UgY2FuIHN0aWxsIHJldHVybiBpdCB0byB0aGUgY2xpZW50IGFwcC5cclxuICB2YXIgZ2xFcnJvclNoYWRvdyA9IHsgfTtcclxuXHJcbiAgLy8gTWFrZXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIGEgV2ViR0wgZnVuY3Rpb24gYW5kIHRoZW4gY2FsbHMgZ2V0RXJyb3IuXHJcbiAgZnVuY3Rpb24gbWFrZUVycm9yV3JhcHBlcihjdHgsIGZ1bmN0aW9uTmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gY3R4W2Z1bmN0aW9uTmFtZV0uYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xyXG4gICAgICB2YXIgZXJyID0gY3R4LmdldEVycm9yKCk7XHJcbiAgICAgIGlmIChlcnIgIT0gMCkge1xyXG4gICAgICAgIGdsRXJyb3JTaGFkb3dbZXJyXSA9IHRydWU7XHJcbiAgICAgICAgb3B0X29uRXJyb3JGdW5jKGVyciwgZnVuY3Rpb25OYW1lLCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gTWFrZSBhIGFuIG9iamVjdCB0aGF0IGhhcyBhIGNvcHkgb2YgZXZlcnkgcHJvcGVydHkgb2YgdGhlIFdlYkdMIGNvbnRleHRcclxuICAvLyBidXQgd3JhcHMgYWxsIGZ1bmN0aW9ucy5cclxuICB2YXIgd3JhcHBlciA9IHt9O1xyXG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBjdHgpIHtcclxuICAgIGlmICh0eXBlb2YgY3R4W3Byb3BlcnR5TmFtZV0gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgd3JhcHBlcltwcm9wZXJ0eU5hbWVdID0gbWFrZUVycm9yV3JhcHBlcihjdHgsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIHdyYXBwZXJbcHJvcGVydHlOYW1lXSA9IGN0eFtwcm9wZXJ0eU5hbWVdO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE92ZXJyaWRlIHRoZSBnZXRFcnJvciBmdW5jdGlvbiB3aXRoIG9uZSB0aGF0IHJldHVybnMgb3VyIHNhdmVkIHJlc3VsdHMuXHJcbiAgd3JhcHBlci5nZXRFcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgZXJyIGluIGdsRXJyb3JTaGFkb3cpIHtcclxuICAgICAgaWYgKGdsRXJyb3JTaGFkb3dbZXJyXSkge1xyXG4gICAgICAgIGdsRXJyb3JTaGFkb3dbZXJyXSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjdHguTk9fRVJST1I7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0VG9Jbml0aWFsU3RhdGUoY3R4KSB7XHJcbiAgdmFyIG51bUF0dHJpYnMgPSBjdHguZ2V0UGFyYW1ldGVyKGN0eC5NQVhfVkVSVEVYX0FUVFJJQlMpO1xyXG4gIHZhciB0bXAgPSBjdHguY3JlYXRlQnVmZmVyKCk7XHJcbiAgY3R4LmJpbmRCdWZmZXIoY3R4LkFSUkFZX0JVRkZFUiwgdG1wKTtcclxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtQXR0cmliczsgKytpaSkge1xyXG4gICAgY3R4LmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpaSk7XHJcbiAgICBjdHgudmVydGV4QXR0cmliUG9pbnRlcihpaSwgNCwgY3R4LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICBjdHgudmVydGV4QXR0cmliMWYoaWksIDApO1xyXG4gIH1cclxuICBjdHguZGVsZXRlQnVmZmVyKHRtcCk7XHJcblxyXG4gIHZhciBudW1UZXh0dXJlVW5pdHMgPSBjdHguZ2V0UGFyYW1ldGVyKGN0eC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyk7XHJcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVRleHR1cmVVbml0czsgKytpaSkge1xyXG4gICAgY3R4LmFjdGl2ZVRleHR1cmUoY3R4LlRFWFRVUkUwICsgaWkpO1xyXG4gICAgY3R4LmJpbmRUZXh0dXJlKGN0eC5URVhUVVJFX0NVQkVfTUFQLCBudWxsKTtcclxuICAgIGN0eC5iaW5kVGV4dHVyZShjdHguVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBjdHguYWN0aXZlVGV4dHVyZShjdHguVEVYVFVSRTApO1xyXG4gIGN0eC51c2VQcm9ncmFtKG51bGwpO1xyXG4gIGN0eC5iaW5kQnVmZmVyKGN0eC5BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gIGN0eC5iaW5kQnVmZmVyKGN0eC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgY3R4LmJpbmRGcmFtZWJ1ZmZlcihjdHguRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gIGN0eC5iaW5kUmVuZGVyYnVmZmVyKGN0eC5SRU5ERVJCVUZGRVIsIG51bGwpO1xyXG4gIGN0eC5kaXNhYmxlKGN0eC5CTEVORCk7XHJcbiAgY3R4LmRpc2FibGUoY3R4LkNVTExfRkFDRSk7XHJcbiAgY3R4LmRpc2FibGUoY3R4LkRFUFRIX1RFU1QpO1xyXG4gIGN0eC5kaXNhYmxlKGN0eC5ESVRIRVIpO1xyXG4gIGN0eC5kaXNhYmxlKGN0eC5TQ0lTU09SX1RFU1QpO1xyXG4gIGN0eC5ibGVuZENvbG9yKDAsIDAsIDAsIDApO1xyXG4gIGN0eC5ibGVuZEVxdWF0aW9uKGN0eC5GVU5DX0FERCk7XHJcbiAgY3R4LmJsZW5kRnVuYyhjdHguT05FLCBjdHguWkVSTyk7XHJcbiAgY3R4LmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcbiAgY3R4LmNsZWFyRGVwdGgoMSk7XHJcbiAgY3R4LmNsZWFyU3RlbmNpbCgtMSk7XHJcbiAgY3R4LmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcclxuICBjdHguY3VsbEZhY2UoY3R4LkJBQ0spO1xyXG4gIGN0eC5kZXB0aEZ1bmMoY3R4LkxFU1MpO1xyXG4gIGN0eC5kZXB0aE1hc2sodHJ1ZSk7XHJcbiAgY3R4LmRlcHRoUmFuZ2UoMCwgMSk7XHJcbiAgY3R4LmZyb250RmFjZShjdHguQ0NXKTtcclxuICBjdHguaGludChjdHguR0VORVJBVEVfTUlQTUFQX0hJTlQsIGN0eC5ET05UX0NBUkUpO1xyXG4gIGN0eC5saW5lV2lkdGgoMSk7XHJcbiAgY3R4LnBpeGVsU3RvcmVpKGN0eC5QQUNLX0FMSUdOTUVOVCwgNCk7XHJcbiAgY3R4LnBpeGVsU3RvcmVpKGN0eC5VTlBBQ0tfQUxJR05NRU5ULCA0KTtcclxuICBjdHgucGl4ZWxTdG9yZWkoY3R4LlVOUEFDS19GTElQX1lfV0VCR0wsIGZhbHNlKTtcclxuICBjdHgucGl4ZWxTdG9yZWkoY3R4LlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgZmFsc2UpO1xyXG4gIC8vIFRPRE86IERlbGV0ZSB0aGlzIElGLlxyXG4gIGlmIChjdHguVU5QQUNLX0NPTE9SU1BBQ0VfQ09OVkVSU0lPTl9XRUJHTCkge1xyXG4gICAgY3R4LnBpeGVsU3RvcmVpKGN0eC5VTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMLCBjdHguQlJPV1NFUl9ERUZBVUxUX1dFQkdMKTtcclxuICB9XHJcbiAgY3R4LnBvbHlnb25PZmZzZXQoMCwgMCk7XHJcbiAgY3R4LnNhbXBsZUNvdmVyYWdlKDEsIGZhbHNlKTtcclxuICBjdHguc2Npc3NvcigwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgY3R4LnN0ZW5jaWxGdW5jKGN0eC5BTFdBWVMsIDAsIDB4RkZGRkZGRkYpO1xyXG4gIGN0eC5zdGVuY2lsTWFzaygweEZGRkZGRkZGKTtcclxuICBjdHguc3RlbmNpbE9wKGN0eC5LRUVQLCBjdHguS0VFUCwgY3R4LktFRVApO1xyXG4gIGN0eC52aWV3cG9ydCgwLCAwLCBjdHguY2FudmFzLmNsaWVudFdpZHRoLCBjdHguY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgY3R4LmNsZWFyKGN0eC5DT0xPUl9CVUZGRVJfQklUIHwgY3R4LkRFUFRIX0JVRkZFUl9CSVQgfCBjdHguU1RFTkNJTF9CVUZGRVJfQklUKTtcclxuXHJcbiAgLy8gVE9ETzogVGhpcyBzaG91bGQgTk9UIGJlIG5lZWRlZCBidXQgRmlyZWZveCBmYWlscyB3aXRoICdoaW50J1xyXG4gIHdoaWxlKGN0eC5nZXRFcnJvcigpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUxvc3RDb250ZXh0U2ltdWxhdGluZ0NvbnRleHQoY3R4KSB7XHJcbiAgdmFyIHdyYXBwZXJfID0ge307XHJcbiAgdmFyIGNvbnRleHRJZF8gPSAxO1xyXG4gIHZhciBjb250ZXh0TG9zdF8gPSBmYWxzZTtcclxuICB2YXIgcmVzb3VyY2VJZF8gPSAwO1xyXG4gIHZhciByZXNvdXJjZURiXyA9IFtdO1xyXG4gIHZhciBvbkxvc3RfID0gdW5kZWZpbmVkO1xyXG4gIHZhciBvblJlc3RvcmVkXyA9IHVuZGVmaW5lZDtcclxuICB2YXIgbmV4dE9uUmVzdG9yZWRfID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBIb2xkcyBib29sZWFucyBmb3IgZWFjaCBHTCBlcnJvciBzbyBjYW4gc2ltdWxhdGUgZXJyb3JzLlxyXG4gIHZhciBnbEVycm9yU2hhZG93XyA9IHsgfTtcclxuXHJcbiAgZnVuY3Rpb24gaXNXZWJHTE9iamVjdChvYmopIHtcclxuICAgIC8vcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBXZWJHTEJ1ZmZlciB8fFxyXG4gICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBXZWJHTEZyYW1lYnVmZmVyIHx8XHJcbiAgICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIFdlYkdMUHJvZ3JhbSB8fFxyXG4gICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmJ1ZmZlciB8fFxyXG4gICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBXZWJHTFNoYWRlciB8fFxyXG4gICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBXZWJHTFRleHR1cmUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tSZXNvdXJjZXMoYXJncykge1xyXG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGFyZ3MubGVuZ3RoOyArK2lpKSB7XHJcbiAgICAgIHZhciBhcmcgPSBhcmdzW2lpXTtcclxuICAgICAgaWYgKGlzV2ViR0xPYmplY3QoYXJnKSkge1xyXG4gICAgICAgIHJldHVybiBhcmcuX193ZWJnbERlYnVnQ29udGV4dExvc3RJZF9fID09IGNvbnRleHRJZF87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJFcnJvcnMoKSB7XHJcbiAgICB2YXIgayA9IE9iamVjdC5rZXlzKGdsRXJyb3JTaGFkb3dfKTtcclxuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBrLmxlbmd0aDsgKytpaSkge1xyXG4gICAgICBkZWxldGUgZ2xFcnJvclNoZG93X1trXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ha2VzIGEgZnVuY3Rpb24gdGhhdCBzaW11bGF0ZXMgV2ViR0wgd2hlbiBvdXQgb2YgY29udGV4dC5cclxuICBmdW5jdGlvbiBtYWtlTG9zdENvbnRleHRXcmFwcGVyKGN0eCwgZnVuY3Rpb25OYW1lKSB7XHJcbiAgICB2YXIgZiA9IGN0eFtmdW5jdGlvbk5hbWVdO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBPbmx5IGNhbGwgdGhlIGZ1bmN0aW9ucyBpZiB0aGUgY29udGV4dCBpcyBub3QgbG9zdC5cclxuICAgICAgaWYgKCFjb250ZXh0TG9zdF8pIHtcclxuICAgICAgICBpZiAoIWNoZWNrUmVzb3VyY2VzKGFyZ3VtZW50cykpIHtcclxuICAgICAgICAgIGdsRXJyb3JTaGFkb3dfW2N0eC5JTlZBTElEX09QRVJBVElPTl0gPSB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gZi5hcHBseShjdHgsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBjdHgpIHtcclxuICAgIGlmICh0eXBlb2YgY3R4W3Byb3BlcnR5TmFtZV0gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgd3JhcHBlcl9bcHJvcGVydHlOYW1lXSA9IG1ha2VMb3N0Q29udGV4dFdyYXBwZXIoY3R4LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICB3cmFwcGVyX1twcm9wZXJ0eU5hbWVdID0gY3R4W3Byb3BlcnR5TmFtZV07XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZVdlYkdMQ29udGV4dEV2ZW50KHN0YXR1c01lc3NhZ2UpIHtcclxuICAgIHJldHVybiB7c3RhdHVzTWVzc2FnZTogc3RhdHVzTWVzc2FnZX07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmcmVlUmVzb3VyY2VzKCkge1xyXG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHJlc291cmNlRGJfLmxlbmd0aDsgKytpaSkge1xyXG4gICAgICB2YXIgcmVzb3VyY2UgPSByZXNvdXJjZURiX1tpaV07XHJcbiAgICAgIGlmIChyZXNvdXJjZSBpbnN0YW5jZW9mIFdlYkdMQnVmZmVyKSB7XHJcbiAgICAgICAgY3R4LmRlbGV0ZUJ1ZmZlcihyZXNvdXJjZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBXZWJjdHhGcmFtZWJ1ZmZlcikge1xyXG4gICAgICAgIGN0eC5kZWxldGVGcmFtZWJ1ZmZlcihyZXNvdXJjZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBXZWJjdHhQcm9ncmFtKSB7XHJcbiAgICAgICAgY3R4LmRlbGV0ZVByb2dyYW0ocmVzb3VyY2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc291cmNlIGluc3RhbmNlb2YgV2ViY3R4UmVuZGVyYnVmZmVyKSB7XHJcbiAgICAgICAgY3R4LmRlbGV0ZVJlbmRlcmJ1ZmZlcihyZXNvdXJjZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBXZWJjdHhTaGFkZXIpIHtcclxuICAgICAgICBjdHguZGVsZXRlU2hhZGVyKHJlc291cmNlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNvdXJjZSBpbnN0YW5jZW9mIFdlYmN0eFRleHR1cmUpIHtcclxuICAgICAgICBjdHguZGVsZXRlVGV4dHVyZShyZXNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyYXBwZXJfLmxvc2VDb250ZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIWNvbnRleHRMb3N0Xykge1xyXG4gICAgICBjb250ZXh0TG9zdF8gPSB0cnVlO1xyXG4gICAgICArK2NvbnRleHRJZF87XHJcbiAgICAgIHdoaWxlIChjdHguZ2V0RXJyb3IoKSk7XHJcbiAgICAgIGNsZWFyRXJyb3JzKCk7XHJcbiAgICAgIGdsRXJyb3JTaGFkb3dfW2N0eC5DT05URVhUX0xPU1RfV0VCR0xdID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmIChvbkxvc3RfKSB7XHJcbiAgICAgICAgICAgIG9uTG9zdF8obWFrZVdlYkdMQ29udGV4dEV2ZW50KFwiY29udGV4dCBsb3N0XCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3cmFwcGVyXy5yZXN0b3JlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGNvbnRleHRMb3N0Xykge1xyXG4gICAgICBpZiAob25SZXN0b3JlZF8pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmcmVlUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgIHJlc2V0VG9Jbml0aWFsU3RhdGUoY3R4KTtcclxuICAgICAgICAgICAgY29udGV4dExvc3RfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChvblJlc3RvcmVkXykge1xyXG4gICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG9uUmVzdG9yZWRfO1xyXG4gICAgICAgICAgICAgIG9uUmVzdG9yZWRfID0gbmV4dE9uUmVzdG9yZWRfO1xyXG4gICAgICAgICAgICAgIG5leHRPblJlc3RvcmVkXyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICBjYWxsYmFjayhtYWtlV2ViR0xDb250ZXh0RXZlbnQoXCJjb250ZXh0IHJlc3RvcmVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgXCJZb3UgY2FuIG5vdCByZXN0b3JlIHRoZSBjb250ZXh0IHdpdGhvdXQgYSBsaXN0ZW5lclwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBXcmFwIGEgZmV3IGZ1bmN0aW9ucyBzcGVjaWFsbHkuXHJcbiAgd3JhcHBlcl8uZ2V0RXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghY29udGV4dExvc3RfKSB7XHJcbiAgICAgIHZhciBlcnI7XHJcbiAgICAgIHdoaWxlIChlcnIgPSBjdHguZ2V0RXJyb3IoKSkge1xyXG4gICAgICAgIGdsRXJyb3JTaGFkb3dfW2Vycl0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBlcnIgaW4gZ2xFcnJvclNoYWRvd18pIHtcclxuICAgICAgaWYgKGdsRXJyb3JTaGFkb3dfW2Vycl0pIHtcclxuICAgICAgICBkZWxldGUgZ2xFcnJvclNoYWRvd19bZXJyXTtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3R4Lk5PX0VSUk9SO1xyXG4gIH07XHJcblxyXG4gIHZhciBjcmVhdGlvbkZ1bmN0aW9ucyA9IFtcclxuICAgIFwiY3JlYXRlQnVmZmVyXCIsXHJcbiAgICBcImNyZWF0ZUZyYW1lYnVmZmVyXCIsXHJcbiAgICBcImNyZWF0ZVByb2dyYW1cIixcclxuICAgIFwiY3JlYXRlUmVuZGVyYnVmZmVyXCIsXHJcbiAgICBcImNyZWF0ZVNoYWRlclwiLFxyXG4gICAgXCJjcmVhdGVUZXh0dXJlXCJcclxuICBdO1xyXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBjcmVhdGlvbkZ1bmN0aW9ucy5sZW5ndGg7ICsraWkpIHtcclxuICAgIHZhciBmdW5jdGlvbk5hbWUgPSBjcmVhdGlvbkZ1bmN0aW9uc1tpaV07XHJcbiAgICB3cmFwcGVyX1tmdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24oZikge1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRMb3N0Xykge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYmogPSBmLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcclxuICAgICAgICBvYmouX193ZWJnbERlYnVnQ29udGV4dExvc3RJZF9fID0gY29udGV4dElkXztcclxuICAgICAgICByZXNvdXJjZURiXy5wdXNoKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfTtcclxuICAgIH0oY3R4W2Z1bmN0aW9uTmFtZV0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGZ1bmN0aW9uc1RoYXRTaG91bGRSZXR1cm5OdWxsID0gW1xyXG4gICAgXCJnZXRBY3RpdmVBdHRyaWJcIixcclxuICAgIFwiZ2V0QWN0aXZlVW5pZm9ybVwiLFxyXG4gICAgXCJnZXRCdWZmZXJQYXJhbWV0ZXJcIixcclxuICAgIFwiZ2V0Q29udGV4dEF0dHJpYnV0ZXNcIixcclxuICAgIFwiZ2V0QXR0YWNoZWRTaGFkZXJzXCIsXHJcbiAgICBcImdldEZyYW1lYnVmZmVyQXR0YWNobWVudFBhcmFtZXRlclwiLFxyXG4gICAgXCJnZXRQYXJhbWV0ZXJcIixcclxuICAgIFwiZ2V0UHJvZ3JhbVBhcmFtZXRlclwiLFxyXG4gICAgXCJnZXRQcm9ncmFtSW5mb0xvZ1wiLFxyXG4gICAgXCJnZXRSZW5kZXJidWZmZXJQYXJhbWV0ZXJcIixcclxuICAgIFwiZ2V0U2hhZGVyUGFyYW1ldGVyXCIsXHJcbiAgICBcImdldFNoYWRlckluZm9Mb2dcIixcclxuICAgIFwiZ2V0U2hhZGVyU291cmNlXCIsXHJcbiAgICBcImdldFRleFBhcmFtZXRlclwiLFxyXG4gICAgXCJnZXRVbmlmb3JtXCIsXHJcbiAgICBcImdldFVuaWZvcm1Mb2NhdGlvblwiLFxyXG4gICAgXCJnZXRWZXJ0ZXhBdHRyaWJcIlxyXG4gIF07XHJcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGZ1bmN0aW9uc1RoYXRTaG91bGRSZXR1cm5OdWxsLmxlbmd0aDsgKytpaSkge1xyXG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uc1RoYXRTaG91bGRSZXR1cm5OdWxsW2lpXTtcclxuICAgIHdyYXBwZXJfW2Z1bmN0aW9uTmFtZV0gPSBmdW5jdGlvbihmKSB7XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoY29udGV4dExvc3RfKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9KHdyYXBwZXJfW2Z1bmN0aW9uTmFtZV0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlzRnVuY3Rpb25zID0gW1xyXG4gICAgXCJpc0J1ZmZlclwiLFxyXG4gICAgXCJpc0VuYWJsZWRcIixcclxuICAgIFwiaXNGcmFtZWJ1ZmZlclwiLFxyXG4gICAgXCJpc1Byb2dyYW1cIixcclxuICAgIFwiaXNSZW5kZXJidWZmZXJcIixcclxuICAgIFwiaXNTaGFkZXJcIixcclxuICAgIFwiaXNUZXh0dXJlXCJcclxuICBdO1xyXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBpc0Z1bmN0aW9ucy5sZW5ndGg7ICsraWkpIHtcclxuICAgIHZhciBmdW5jdGlvbk5hbWUgPSBpc0Z1bmN0aW9uc1tpaV07XHJcbiAgICB3cmFwcGVyX1tmdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24oZikge1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRMb3N0Xykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZi5hcHBseShjdHgsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuICAgIH0od3JhcHBlcl9bZnVuY3Rpb25OYW1lXSk7XHJcbiAgfVxyXG5cclxuICB3cmFwcGVyXy5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzID0gZnVuY3Rpb24oZikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoY29udGV4dExvc3RfKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eC5GUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZi5hcHBseShjdHgsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH0od3JhcHBlcl8uY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyk7XHJcblxyXG4gIHdyYXBwZXJfLmdldEF0dHJpYkxvY2F0aW9uID0gZnVuY3Rpb24oZikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoY29udGV4dExvc3RfKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfSh3cmFwcGVyXy5nZXRBdHRyaWJMb2NhdGlvbik7XHJcblxyXG4gIHdyYXBwZXJfLmdldFZlcnRleEF0dHJpYk9mZnNldCA9IGZ1bmN0aW9uKGYpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKGNvbnRleHRMb3N0Xykge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfSh3cmFwcGVyXy5nZXRWZXJ0ZXhBdHRyaWJPZmZzZXQpO1xyXG5cclxuICB3cmFwcGVyXy5pc0NvbnRleHRMb3N0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gY29udGV4dExvc3RfO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXBFdmVudChsaXN0ZW5lcikge1xyXG4gICAgaWYgKHR5cGVvZihsaXN0ZW5lcikgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbihpbmZvKSB7XHJcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoaW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyYXBwZXJfLnJlZ2lzdGVyT25Db250ZXh0TG9zdExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcclxuICAgIG9uTG9zdF8gPSB3cmFwRXZlbnQobGlzdGVuZXIpO1xyXG4gIH07XHJcblxyXG4gIHdyYXBwZXJfLnJlZ2lzdGVyT25Db250ZXh0UmVzdG9yZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XHJcbiAgICBpZiAoY29udGV4dExvc3RfKSB7XHJcbiAgICAgIG5leHRPblJlc3RvcmVkXyA9IHdyYXBFdmVudChsaXN0ZW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvblJlc3RvcmVkXyA9IHdyYXBFdmVudChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd3JhcHBlcl87XHJcbn1cclxuXHJcbnJldHVybiB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgdGhpcyBtb2R1bGUuIFNhZmUgdG8gY2FsbCBtb3JlIHRoYW4gb25jZS5cclxuICAgKiBAcGFyYW0geyFXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGN0eCBBIFdlYkdMIGNvbnRleHQuIElmXHJcbiAgICogICAgeW91IGhhdmUgbW9yZSB0aGFuIG9uZSBjb250ZXh0IGl0IGRvZXNuJ3QgbWF0dGVyIHdoaWNoIG9uZVxyXG4gICAqICAgIHlvdSBwYXNzIGluLCBpdCBpcyBvbmx5IHVzZWQgdG8gcHVsbCBvdXQgY29uc3RhbnRzLlxyXG4gICAqL1xyXG4gICdpbml0JzogaW5pdCxcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmIHZhbHVlIG1hdGNoZXMgYW55IFdlYkdMIGVudW1cclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGNoZWNrIGlmIGl0IG1pZ2h0IGJlIGFuIGVudW0uXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBtYXRjaGVzIG9uZSBvZiB0aGUgV2ViR0wgZGVmaW5lZCBlbnVtc1xyXG4gICAqL1xyXG4gICdtaWdodEJlRW51bSc6IG1pZ2h0QmVFbnVtLFxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGFuIHN0cmluZyB2ZXJzaW9uIG9mIGFuIFdlYkdMIGVudW0uXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOlxyXG4gICAqICAgV2ViR0xEZWJ1Z1V0aWwuaW5pdChjdHgpO1xyXG4gICAqICAgdmFyIHN0ciA9IFdlYkdMRGVidWdVdGlsLmdsRW51bVRvU3RyaW5nKGN0eC5nZXRFcnJvcigpKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byByZXR1cm4gYW4gZW51bSBmb3JcclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgZW51bS5cclxuICAgKi9cclxuICAnZ2xFbnVtVG9TdHJpbmcnOiBnbEVudW1Ub1N0cmluZyxcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgdGhlIGFyZ3VtZW50IG9mIGEgV2ViR0wgZnVuY3Rpb24gdG8gYSBzdHJpbmcuXHJcbiAgICogQXR0ZW1wdHMgdG8gY29udmVydCBlbnVtIGFyZ3VtZW50cyB0byBzdHJpbmdzLlxyXG4gICAqXHJcbiAgICogRXhhbXBsZTpcclxuICAgKiAgIFdlYkdMRGVidWdVdGlsLmluaXQoY3R4KTtcclxuICAgKiAgIHZhciBzdHIgPSBXZWJHTERlYnVnVXRpbC5nbEZ1bmN0aW9uQXJnVG9TdHJpbmcoJ2JpbmRUZXh0dXJlJywgMCwgZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICpcclxuICAgKiB3b3VsZCByZXR1cm4gJ1RFWFRVUkVfMkQnXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBXZWJHTCBmdW5jdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJndW1lbnRJbmR4IHRoZSBpbmRleCBvZiB0aGUgYXJndW1lbnQuXHJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGFyZ3VtZW50LlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIGFzIGEgc3RyaW5nLlxyXG4gICAqL1xyXG4gICdnbEZ1bmN0aW9uQXJnVG9TdHJpbmcnOiBnbEZ1bmN0aW9uQXJnVG9TdHJpbmcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgV2ViR0wgY29udGV4dCByZXR1cm5zIGEgd3JhcHBlZCBjb250ZXh0IHRoYXQgY2FsbHNcclxuICAgKiBnbC5nZXRFcnJvciBhZnRlciBldmVyeSBjb21tYW5kIGFuZCBjYWxscyBhIGZ1bmN0aW9uIGlmIHRoZVxyXG4gICAqIHJlc3VsdCBpcyBub3QgTk9fRVJST1IuXHJcbiAgICpcclxuICAgKiBZb3UgY2FuIHN1cHBseSB5b3VyIG93biBmdW5jdGlvbiBpZiB5b3Ugd2FudC4gRm9yIGV4YW1wbGUsIGlmIHlvdSdkIGxpa2VcclxuICAgKiBhbiBleGNlcHRpb24gdGhyb3duIG9uIGFueSBHTCBlcnJvciB5b3UgY291bGQgZG8gdGhpc1xyXG4gICAqXHJcbiAgICogICAgZnVuY3Rpb24gdGhyb3dPbkdMRXJyb3IoZXJyLCBmdW5jTmFtZSwgYXJncykge1xyXG4gICAqICAgICAgdGhyb3cgV2ViR0xEZWJ1Z1V0aWxzLmdsRW51bVRvU3RyaW5nKGVycikgKyBcIiB3YXMgY2F1c2VkIGJ5IGNhbGwgdG9cIiArXHJcbiAgICogICAgICAgICAgICBmdW5jTmFtZTtcclxuICAgKiAgICB9O1xyXG4gICAqXHJcbiAgICogICAgY3R4ID0gV2ViR0xEZWJ1Z1V0aWxzLm1ha2VEZWJ1Z0NvbnRleHQoXHJcbiAgICogICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIiksIHRocm93T25HTEVycm9yKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7IVdlYkdMUmVuZGVyaW5nQ29udGV4dH0gY3R4IFRoZSB3ZWJnbCBjb250ZXh0IHRvIHdyYXAuXHJcbiAgICogQHBhcmFtIHshZnVuY3Rpb24oZXJyLCBmdW5jTmFtZSwgYXJncyk6IHZvaWR9IG9wdF9vbkVycm9yRnVuYyBUaGUgZnVuY3Rpb25cclxuICAgKiAgICAgdG8gY2FsbCB3aGVuIGdsLmdldEVycm9yIHJldHVybnMgYW4gZXJyb3IuIElmIG5vdCBzcGVjaWZpZWQgdGhlIGRlZmF1bHRcclxuICAgKiAgICAgZnVuY3Rpb24gY2FsbHMgY29uc29sZS5sb2cgd2l0aCBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgJ21ha2VEZWJ1Z0NvbnRleHQnOiBtYWtlRGVidWdDb250ZXh0LFxyXG5cclxuICAvKipcclxuICAgKiBHaXZlbiBhIFdlYkdMIGNvbnRleHQgcmV0dXJucyBhIHdyYXBwZWQgY29udGV4dCB0aGF0IGFkZHMgNFxyXG4gICAqIGZ1bmN0aW9ucy5cclxuICAgKlxyXG4gICAqIGN0eC5sb3NlQ29udGV4dDpcclxuICAgKiAgIHNpbXVsYXRlcyBhIGxvc3QgY29udGV4dCBldmVudC5cclxuICAgKlxyXG4gICAqIGN0eC5yZXN0b3JlQ29udGV4dDpcclxuICAgKiAgIHNpbXVsYXRlcyB0aGUgY29udGV4dCBiZWluZyByZXN0b3JlZC5cclxuICAgKlxyXG4gICAqIGN0eC5yZWdpc3Rlck9uQ29udGV4dExvc3RMaXN0ZW5lcihsaXN0ZW5lcik6XHJcbiAgICogICBsZXRzIHlvdSByZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjb250ZXh0IGxvc3QuIFVzZSBpbnN0ZWFkXHJcbiAgICogICBvZiBhZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0ZXZlbnQnLCBsaXN0ZW5lcik7XHJcbiAgICpcclxuICAgKiBjdHgucmVnaXN0ZXJPbkNvbnRleHRSZXN0b3JlZExpc3RlbmVyKGxpc3RlbmVyKTpcclxuICAgKiAgIGxldHMgeW91IHJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIGNvbnRleHQgcmVzdG9yZWQuIFVzZVxyXG4gICAqICAgaW5zdGVhZCBvZiBhZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsXHJcbiAgICogICBsaXN0ZW5lcik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyFXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGN0eCBUaGUgd2ViZ2wgY29udGV4dCB0byB3cmFwLlxyXG4gICAqL1xyXG4gICdtYWtlTG9zdENvbnRleHRTaW11bGF0aW5nQ29udGV4dCc6IG1ha2VMb3N0Q29udGV4dFNpbXVsYXRpbmdDb250ZXh0LFxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgYSBjb250ZXh0IHRvIHRoZSBpbml0aWFsIHN0YXRlLlxyXG4gICAqIEBwYXJhbSB7IVdlYkdMUmVuZGVyaW5nQ29udGV4dH0gY3R4IFRoZSB3ZWJnbCBjb250ZXh0IHRvXHJcbiAgICogICAgIHJlc2V0LlxyXG4gICAqL1xyXG4gICdyZXNldFRvSW5pdGlhbFN0YXRlJzogcmVzZXRUb0luaXRpYWxTdGF0ZVxyXG59O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYkdMRGVidWdVdGlscygpO1xyXG5cclxuIiwiLypcclxuICogQ29weXJpZ2h0IDIwMTAsIEdvb2dsZSBJbmMuXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbiAqIG1ldDpcclxuICpcclxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXHJcbiAqIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxyXG4gKiBkaXN0cmlidXRpb24uXHJcbiAqICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cclxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xyXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXHJcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxyXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxyXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcclxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxyXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcclxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXHJcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXHJcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFRoaXMgZmlsZSBjb250YWlucyBmdW5jdGlvbnMgZXZlcnkgd2ViZ2wgcHJvZ3JhbSB3aWxsIG5lZWRcclxuICogYSB2ZXJzaW9uIG9mIG9uZSB3YXkgb3IgYW5vdGhlci5cclxuICpcclxuICogSW5zdGVhZCBvZiBzZXR0aW5nIHVwIGEgY29udGV4dCBtYW51YWxseSBpdCBpcyByZWNvbW1lbmRlZCB0b1xyXG4gKiB1c2UuIFRoaXMgd2lsbCBjaGVjayBmb3Igc3VjY2VzcyBvciBmYWlsdXJlLiBPbiBmYWlsdXJlIGl0XHJcbiAqIHdpbGwgYXR0ZW1wdCB0byBwcmVzZW50IGFuIGFwcHJvcmlhdGUgbWVzc2FnZSB0byB0aGUgdXNlci5cclxuICpcclxuICogICAgICAgZ2wgPSBXZWJHTFV0aWxzLnNldHVwV2ViR0woY2FudmFzKTtcclxuICpcclxuICogRm9yIGFuaW1hdGVkIFdlYkdMIGFwcHMgdXNlIG9mIHNldFRpbWVvdXQgb3Igc2V0SW50ZXJ2YWwgYXJlXHJcbiAqIGRpc2NvdXJhZ2VkLiBJdCBpcyByZWNvbW1lbmRlZCB5b3Ugc3RydWN0dXJlIHlvdXIgcmVuZGVyaW5nXHJcbiAqIGxvb3AgbGlrZSB0aGlzLlxyXG4gKlxyXG4gKiAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAqICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIsIGNhbnZhcyk7XHJcbiAqXHJcbiAqICAgICAgICAgLy8gZG8gcmVuZGVyaW5nXHJcbiAqICAgICAgICAgLi4uXHJcbiAqICAgICAgIH1cclxuICogICAgICAgcmVuZGVyKCk7XHJcbiAqXHJcbiAqIFRoaXMgd2lsbCBjYWxsIHlvdXIgcmVuZGVyaW5nIGZ1bmN0aW9uIHVwIHRvIHRoZSByZWZyZXNoIHJhdGVcclxuICogb2YgeW91ciBkaXNwbGF5IGJ1dCB3aWxsIHN0b3AgcmVuZGVyaW5nIGlmIHlvdXIgYXBwIGlzIG5vdFxyXG4gKiB2aXNpYmxlLlxyXG4gKi9cclxuXHJcbmNvbnN0IFdlYkdMVXRpbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIHRoZSBIVExNIGZvciBhIGZhaWx1cmUgbWVzc2FnZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FudmFzQ29udGFpbmVySWQgaWQgb2YgY29udGFpbmVyIG9mIHRoXHJcbiAqICAgICAgICBjYW52YXMuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGh0bWwuXHJcbiAqL1xyXG52YXIgbWFrZUZhaWxIVE1MID0gZnVuY3Rpb24obXNnKSB7XHJcbiAgcmV0dXJuICcnICtcclxuICAgICAgICAnPGRpdiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgd2lkdGg6NTAwcHg7ei1pbmRleDoxMDAwMDttYXJnaW4tdG9wOjIwZW07dGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG1zZyArICc8L2Rpdj4nO1xyXG4gIHJldHVybiAnJyArXHJcbiAgICAnPHRhYmxlIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzhDRTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIj48dHI+JyArXHJcbiAgICAnPHRkIGFsaWduPVwiY2VudGVyXCI+JyArXHJcbiAgICAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+JyArXHJcbiAgICAnPGRpdiBzdHlsZT1cIlwiPicgKyBtc2cgKyAnPC9kaXY+JyArXHJcbiAgICAnPC9kaXY+JyArXHJcbiAgICAnPC90ZD48L3RyPjwvdGFibGU+JztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXNhc2dlIGZvciBnZXR0aW5nIGEgd2ViZ2wgYnJvd3NlclxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxudmFyIEdFVF9BX1dFQkdMX0JST1dTRVIgPSAnJyArXHJcbiAgJ1RoaXMgcGFnZSByZXF1aXJlcyBhIGJyb3dzZXIgdGhhdCBzdXBwb3J0cyBXZWJHTC48YnIvPicgK1xyXG4gICc8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmdcIj5DbGljayBoZXJlIHRvIHVwZ3JhZGUgeW91ciBicm93c2VyLjwvYT4nO1xyXG5cclxuLyoqXHJcbiAqIE1lc2FzZ2UgZm9yIG5lZWQgYmV0dGVyIGhhcmR3YXJlXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgT1RIRVJfUFJPQkxFTSA9ICcnICtcclxuICBcIkl0IGRvZXNuJ3QgYXBwZWFyIHlvdXIgY29tcHV0ZXIgY2FuIHN1cHBvcnQgV2ViR0wuPGJyLz5cIiArXHJcbiAgJzxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZ1wiPkNsaWNrIGhlcmUgZm9yIG1vcmUgaW5mb3JtYXRpb24uPC9hPic7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuIElmIGNyZWF0aW9uIGZhaWxzIGl0IHdpbGxcclxuICogY2hhbmdlIHRoZSBjb250ZW50cyBvZiB0aGUgY29udGFpbmVyIG9mIHRoZSA8Y2FudmFzPlxyXG4gKiB0YWcgdG8gYW4gZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBjb3JyZWN0IGxpbmtzIGZvciBXZWJHTC5cclxuICogQHBhcmFtIHtFbGVtZW50fSBjYW52YXMuIFRoZSBjYW52YXMgZWxlbWVudCB0byBjcmVhdGUgYVxyXG4gKiAgICAgY29udGV4dCBmcm9tLlxyXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dENyZWF0aW9uQXR0aXJidXRlc30gb3B0X2F0dHJpYnMgQW55XHJcbiAqICAgICBjcmVhdGlvbiBhdHRyaWJ1dGVzIHlvdSB3YW50IHRvIHBhc3MgaW4uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb246KG1zZyl9IG9wdF9vbkVycm9yIEFuIGZ1bmN0aW9uIHRvIGNhbGxcclxuICogICAgIGlmIHRoZXJlIGlzIGFuIGVycm9yIGR1cmluZyBjcmVhdGlvbi5cclxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxyXG4gKi9cclxudmFyIHNldHVwV2ViR0wgPSBmdW5jdGlvbihjYW52YXMsIG9wdF9hdHRyaWJzLCBvcHRfb25FcnJvcikge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNyZWF0aW9uRXJyb3IobXNnKSB7XHJcbiAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgICAvL3ZhciBjb250YWluZXIgPSBjYW52YXMucGFyZW50Tm9kZTtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgdmFyIHN0ciA9IHdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQgP1xyXG4gICAgICAgICAgIE9USEVSX1BST0JMRU0gOlxyXG4gICAgICAgICAgIEdFVF9BX1dFQkdMX0JST1dTRVI7XHJcbiAgICAgIGlmIChtc2cpIHtcclxuICAgICAgICBzdHIgKz0gXCI8YnIvPjxici8+U3RhdHVzOiBcIiArIG1zZztcclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWFrZUZhaWxIVE1MKHN0cik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb3B0X29uRXJyb3IgPSBvcHRfb25FcnJvciB8fCBoYW5kbGVDcmVhdGlvbkVycm9yO1xyXG5cclxuICBpZiAoY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvclwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgb3B0X29uRXJyb3IoZXZlbnQuc3RhdHVzTWVzc2FnZSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gIH1cclxuICB2YXIgY29udGV4dCA9IGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIGlmICghd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICBvcHRfb25FcnJvcihcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdF9vbkVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXHJcbiAqIEBwYXJhbSB7IUNhbnZhc30gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldCBjb250ZXh0XHJcbiAqICAgICBmcm9tLiBJZiBvbmUgaXMgbm90IHBhc3NlZCBpbiBvbmUgd2lsbCBiZSBjcmVhdGVkLlxyXG4gKiBAcmV0dXJuIHshV2ViR0xDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxyXG4gKi9cclxudmFyIGNyZWF0ZTNEQ29udGV4dCA9IGZ1bmN0aW9uKGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcclxuICB2YXIgbmFtZXMgPSBbXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiLCBcIndlYmtpdC0zZFwiLCBcIm1vei13ZWJnbFwiXTtcclxuICB2YXIgY29udGV4dCA9IG51bGw7XHJcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0X2F0dHJpYnMpO1xyXG4gICAgfSBjYXRjaChlKSB7fVxyXG4gICAgaWYgKGNvbnRleHQpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5yZXR1cm4ge1xyXG4gIGNyZWF0ZTNEQ29udGV4dDogY3JlYXRlM0RDb250ZXh0LFxyXG4gIHNldHVwV2ViR0w6IHNldHVwV2ViR0xcclxufTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaW4gYSBjcm9zcyBicm93c2VyXHJcbiAqIHdheS5cclxuICovXHJcbmlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiBGcmFtZVJlcXVlc3RDYWxsYmFjayAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCBFbGVtZW50ICovIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwLzYwKTtcclxuICAgICAgICAgICB9O1xyXG4gIH0pKCk7XHJcbn1cclxuXHJcbi8qKiAqIEVSUkFUQTogJ2NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZScgcmVuYW1lZCB0byAnY2FuY2VsQW5pbWF0aW9uRnJhbWUnIHRvIHJlZmxlY3QgYW4gdXBkYXRlIHRvIHRoZSBXM0MgQW5pbWF0aW9uLVRpbWluZyBTcGVjLiBcclxuICogXHJcbiAqIENhbmNlbHMgYW4gYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuIFxyXG4gKiBDaGVja3MgZm9yIGNyb3NzLWJyb3dzZXIgc3VwcG9ydCwgZmFsbHMgYmFjayB0byBjbGVhclRpbWVvdXQuIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gIEFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0LiAqL1xyXG5pZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICh3aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJHTFV0aWxzKCk7IiwiXG5jb25zdCBpbml0QXJyYXlCdWZmZXIgPSAoZ2wsIGRhdGEsIG51bSwgdHlwZSwgYXR0cmlidXRlKSA9PiB7XG5cdGxldCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblx0aWYoIWJ1ZmZlcil7XG5cdFx0Y29uc29sZS5sb2coXCJub3QgY3JlYXRlIGJ1ZmZlclwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG5cdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhLCBnbC5TVEFUSUNfRFJBVyk7XG5cblx0bGV0IGFfYXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oZ2wucHJvZ3JhbSwgYXR0cmlidXRlKTtcblx0aWYoYV9hdHRyaWJ1dGUgPCAwKXtcblx0XHRjb25zb2xlLmxvZyhcIm5vdCBmaW5kIGF0dHJpYnV0ZVwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfYXR0cmlidXRlLCBudW0sIHR5cGUsIGZhbHNlLCAwLCAwKTtcblx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV9hdHRyaWJ1dGUpO1xuXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICog5Yid5aeL5YyWdmVydGV4QnVmZmVy5a+56LGhXG4gKiBAcGFyYW0gIHtbdHlwZV19IGdsIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgW2Rlc2NyaXB0aW9uXVxuICovXG5jb25zdCBpbml0VmVydGV4QnVmZmVycyA9IChnbCwgZGF0YSkgPT4ge1xuXHQvLyDliJvlu7rnvJPlhrLljLrlr7nosaFcblx0dmFyIGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cdGlmKCFpbmRleEJ1ZmZlcikge1xuXHRcdGNvbnNvbGUubG9nKCdub3QgY3JlYXRlIGJ1ZmZlciBvYmplY3QnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGlmKCFpbml0QXJyYXlCdWZmZXIoZ2wsIGRhdGEudmVydGljZXMsIDMsIGdsLkZMT0FULCAnYV9Qb3NpdGlvbicpKSByZXR1cm4gLTE7XG5cdGlmKCFpbml0QXJyYXlCdWZmZXIoZ2wsIGRhdGEudGV4Q29vcmRzLCAyLCBnbC5GTE9BVCwgJ2FfVGV4Q29vcmQnKSkgcmV0dXJuIC0xO1xuXG5cdGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGV4QnVmZmVyKTtcblx0Z2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgZGF0YS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRWZXJ0ZXhCdWZmZXJzOyIsIi8qKlxuICog6YCC6YWNcGPkuI7np7vliqjnq6/nmoTpvKDmoIfkuovku7ZcbiAqIEBwYXJhbSAge1t0eXBlXX0gZWxlbWVudCBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IHR5cGUgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBoYW5kbGVyIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmNvbnN0IGFkZEhhbmRsZXIgPSAoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikgPT4geyAgXG4gIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCB0cnVlKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KXsgIFxuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7ICBcbiAgfSBlbHNlIHsgIFxuICAgIGVsZW1lbnRbXCJvblwiICsgdHlwZV0gPSBoYW5kbGVyOyAgXG4gIH1cbn1cblxuLyoqXG4gKiDliJ3lp4vljJbpvKDmoIfmi5bmi73kuovku7ZcbiAqIEBwYXJhbSAge1t0eXBlXX0gY2FudmFzICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gY3VycmVudEFuZ2xlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuY29uc3QgaW5pdEV2ZW50SGFuZGxlcnMgPSAoY2FudmFzLCBjdXJyZW50QW5nbGUpID0+IHtcblx0Ly8g6buY6K6k5LiN5ouW5ou9XG5cdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHQvLyDliJ3lp4vljJbpvKDmoIfmnIDnu4jnp7vliqjkvY3nva7lnZDmoIdcblx0bGV0IGxhc3RYID0gLTEsIGxhc3RZID0gLTE7XG5cblx0bGV0IGRvd24gPSAnb250b3VjaHN0YXJ0JyBpbiBjYW52YXMgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgYWRkSGFuZGxlcihjYW52YXMsZG93bixmdW5jdGlvbihlKXtcbiAgICBsZXQgZXYgPSAnb250b3VjaHN0YXJ0JyBpbiBjYW52YXMgPyBlLnRvdWNoZXNbMF0gOiBlIDtcbiAgICBsZXQgeCA9IGV2LmNsaWVudFgsIHkgPSBldi5jbGllbnRZO1xuXHRcdC8vIOm8oOagh+WcqGNhbnZhc+WGheaLluWKqCwg6I635Y+WY2FudmFz5b2T5YmN5Z2Q5qCH5pWw5o2uXG5cdFx0bGV0IHJlY3QgPSBldi50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Ly8g6ZSB5a6aY2FudmFz6IyD5Zu05YaFXG5cdFx0aWYocmVjdC5sZWZ0IDw9IHggJiYgeCA8IHJlY3QucmlnaHQgJiYgcmVjdC50b3AgPD0geSAmJiB5IDwgcmVjdC5ib3R0b20pe1xuXHRcdFx0bGFzdFggPSB4OyBsYXN0WSA9IHk7XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuICB9KTtcblxuICBsZXQgbW92ZSA9ICdvbnRvdWNobW92ZScgaW4gY2FudmFzID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJzsgIFxuICBhZGRIYW5kbGVyKGNhbnZhcyxtb3ZlLGZ1bmN0aW9uKGUpe1xuICAgIGxldCBldiA9ICdvbnRvdWNobW92ZScgaW4gY2FudmFzID8gZS50b3VjaGVzWzBdIDogZSA7XG4gICAgbGV0IHggPSBldi5jbGllbnRYLCB5ID0gZXYuY2xpZW50WTtcblx0XHRpZihkcmFnZ2luZyl7XG5cdFx0XHRsZXQgZmFjdG9yID0gMTAwIC8gY2FudmFzLmhlaWdodDsgLy8g5peL6L2s5Zug5a2QIFxuXHRcdFx0bGV0IGR4ID0gZmFjdG9yICogKHggLSBsYXN0WCk7XG5cdFx0XHRsZXQgZHkgPSBmYWN0b3IgKiAoeSAtIGxhc3RZKTtcblx0XHRcdC8vIOaOp+WItlnovbTml4vovazop5LluqblnKgtOTDoh7M5MOW6puS5i+mXtO+8jOmYsuatouS4h+WQkemUgemXrumimFxuXHRcdFx0Y3VycmVudEFuZ2xlWzBdID0gTWF0aC5tYXgoTWF0aC5taW4oY3VycmVudEFuZ2xlWzBdICsgZHksIDkwLjApLCAtOTAuMCk7XG5cdFx0XHRjdXJyZW50QW5nbGVbMV0gPSBjdXJyZW50QW5nbGVbMV0gKyBkeDtcblx0XHR9XG5cdFx0bGFzdFggPSB4LCBsYXN0WSA9IHk7XG4gIH0pO1xuXG4gIGxldCB1cCA9ICdvbnRvdWNoZW5kJyBpbiBjYW52YXMgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnOyAgXG4gIGFkZEhhbmRsZXIoY2FudmFzLHVwLGZ1bmN0aW9uKGUpe1xuICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RXZlbnRIYW5kbGVyczsiLCJcbi8vIGltcG9ydCBuaXV0b3VPYmogZnJvbSBcInJlc19nbC9tb2RlbC9uaXV0b3Uub2JqLmpzXCI7XG4vLyBjb25zdCBPQkogPSByZXF1aXJlKCd3ZWJnbC1vYmotbG9hZGVyJyk7XG5cbmV4cG9ydCBjb25zdCBpbml0Tml1TW9kZWxEYXRhID0gKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZyhuaXV0b3VPYmopO1xuXHQvLyB2YXIgbWVzaCA9IG5ldyBPQkouTWVzaChuaXV0b3VPYmopO1xuXHQvLyBjb25zb2xlLmxvZyhtZXNoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDdWJlRGF0YSA9ICgpID0+IHtcblx0Ly8gQ3JlYXRlIGEgY3ViZVxuICAvLyAgICB2Ni0tLS0tIHY1XG4gIC8vICAgL3wgICAgICAvfFxuICAvLyAgdjEtLS0tLS12MHxcbiAgLy8gIHwgfCAgICAgfCB8XG4gIC8vICB8IHx2Ny0tLXwtfHY0XG4gIC8vICB8LyAgICAgIHwvXG4gIC8vICB2Mi0tLS0tLXYzXG4gIGxldCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWyAgIC8vIFZlcnRleCBjb29yZGluYXRlc1xuICAgICAxLjAsIDEuMCwgMS4wLCAgLTEuMCwgMS4wLCAxLjAsICAtMS4wLC0xLjAsIDEuMCwgICAxLjAsLTEuMCwgMS4wLCAgICAvLyB2MC12MS12Mi12MyBmcm9udFxuICAgICAxLjAsIDEuMCwgMS4wLCAgIDEuMCwtMS4wLCAxLjAsICAgMS4wLC0xLjAsLTEuMCwgICAxLjAsIDEuMCwtMS4wLCAgICAvLyB2MC12My12NC12NSByaWdodFxuICAgICAxLjAsIDEuMCwgMS4wLCAgIDEuMCwgMS4wLC0xLjAsICAtMS4wLCAxLjAsLTEuMCwgIC0xLjAsIDEuMCwgMS4wLCAgICAvLyB2MC12NS12Ni12MSB1cFxuICAgIC0xLjAsIDEuMCwgMS4wLCAgLTEuMCwgMS4wLC0xLjAsICAtMS4wLC0xLjAsLTEuMCwgIC0xLjAsLTEuMCwgMS4wLCAgICAvLyB2MS12Ni12Ny12MiBsZWZ0XG4gICAgLTEuMCwtMS4wLC0xLjAsICAgMS4wLC0xLjAsLTEuMCwgICAxLjAsLTEuMCwgMS4wLCAgLTEuMCwtMS4wLCAxLjAsICAgIC8vIHY3LXY0LXYzLXYyIGRvd25cbiAgICAgMS4wLC0xLjAsLTEuMCwgIC0xLjAsLTEuMCwtMS4wLCAgLTEuMCwgMS4wLC0xLjAsICAgMS4wLCAxLjAsLTEuMCAgICAgLy8gdjQtdjctdjYtdjUgYmFja1xuICBdKTtcblxuICBsZXQgdGV4Q29vcmRzID0gbmV3IEZsb2F0MzJBcnJheShbICAgLy8gVGV4dHVyZSBjb29yZGluYXRlc1xuICAgICAgMS4wLCAxLjAsICAgMC4wLCAxLjAsICAgMC4wLCAwLjAsICAgMS4wLCAwLjAsICAgIC8vIHYwLXYxLXYyLXYzIGZyb250XG4gICAgICAwLjAsIDEuMCwgICAwLjAsIDAuMCwgICAxLjAsIDAuMCwgICAxLjAsIDEuMCwgICAgLy8gdjAtdjMtdjQtdjUgcmlnaHRcbiAgICAgIDEuMCwgMC4wLCAgIDEuMCwgMS4wLCAgIDAuMCwgMS4wLCAgIDAuMCwgMC4wLCAgICAvLyB2MC12NS12Ni12MSB1cFxuICAgICAgMS4wLCAxLjAsICAgMC4wLCAxLjAsICAgMC4wLCAwLjAsICAgMS4wLCAwLjAsICAgIC8vIHYxLXY2LXY3LXYyIGxlZnRcbiAgICAgIDAuMCwgMC4wLCAgIDEuMCwgMC4wLCAgIDEuMCwgMS4wLCAgIDAuMCwgMS4wLCAgICAvLyB2Ny12NC12My12MiBkb3duXG4gICAgICAwLjAsIDAuMCwgICAxLjAsIDAuMCwgICAxLjAsIDEuMCwgICAwLjAsIDEuMCAgICAgLy8gdjQtdjctdjYtdjUgYmFja1xuICBdKTtcblxuICAvLyBJbmRpY2VzIG9mIHRoZSB2ZXJ0aWNlc1xuICBsZXQgaW5kaWNlcyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgMCwgMSwgMiwgICAwLCAyLCAzLCAgICAvLyBmcm9udFxuICAgICA0LCA1LCA2LCAgIDQsIDYsIDcsICAgIC8vIHJpZ2h0XG4gICAgIDgsIDksMTAsICAgOCwxMCwxMSwgICAgLy8gdXBcbiAgICAxMiwxMywxNCwgIDEyLDE0LDE1LCAgICAvLyBsZWZ0XG4gICAgMTYsMTcsMTgsICAxNiwxOCwxOSwgICAgLy8gZG93blxuICAgIDIwLDIxLDIyLCAgMjAsMjIsMjMgICAgIC8vIGJhY2tcbiAgXSk7XG4gXG4gIHJldHVybiB7IHZlcnRpY2VzLCB0ZXhDb29yZHMsIGluZGljZXMgfVxufSIsImltcG9ydCB7IGdldFdlYkdMQ29udGV4dCwgaW5pdFNoYWRlcnMgfSBmcm9tIFwidmVuZG9yX2dsL2N1b24tdXRpbHNcIjtcbmltcG9ydCB7IE1hdHJpeDQsIFZlY3RvcjMgfSBmcm9tIFwidmVuZG9yX2dsL2N1b24tbWF0cml4XCI7XG5pbXBvcnQgVGVzdFNoYWRlciBmcm9tIFwic2hhZGVyX2dsL2Zwdmlld2VyL1Rlc3RTaGFkZXJcIjtcbmltcG9ydCBpbml0VmVydGV4QnVmZmVycyBmcm9tIFwiZnB2aWV3ZXIvYnVmZmVyXCI7XG5pbXBvcnQgeyBpbml0Q3ViZURhdGEsIGluaXROaXVNb2RlbERhdGF9ICBmcm9tIFwiZnB2aWV3ZXIvZGF0YVwiO1xuaW1wb3J0IGluaXRUZXh0dXJlcyBmcm9tIFwiZnB2aWV3ZXIvdGV4dHVyZVwiO1xuaW1wb3J0IGluaXRFdmVudEhhbmRsZXJzIGZyb20gXCJmcHZpZXdlci9jbGlja19yb3RhdGVfb2JqXCI7XG5cbi8vIOiusOW9leeri+aWueS9k+eahOWPmOaNouefqemYtVxubGV0IGdfTVZQTWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcbi8vIGNhbWVyYSB2aWV3IHBvaW50XG5sZXQgY2FtZXJhUG9zID0gbmV3IFZlY3RvcjMoWzMuMCwgMy4wLCA3LjBdKTtcbmxldCBkaXN0YW5jZSA9IE1hdGgucG93KGNhbWVyYVBvcy5lbGVtZW50c1swXSwyKSBcblx0KyBNYXRoLnBvdyhjYW1lcmFQb3MuZWxlbWVudHNbMV0sMikgKyBNYXRoLnBvdyhjYW1lcmFQb3MuZWxlbWVudHNbMl0sMik7XG5cbi8vIOiHquWumuS5ieinhuWcuuWuveW6plxubGV0IGN1c3RvbVZpZXdXaWR0aCA9IDU2O1xuXG5sZXQgZ2wsIGNhbnZhcywgdmlld01hdHJpeDtcblxuY29uc3QgZnB2aWV3ZXIgPSAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cblx0Y2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuXHRpZighY2FudmFzKXtcblx0XHRjb25zb2xlLmxvZyhcIm5vIHJlYWQgZWxlbWVudFwiKTtcblx0XHRyZWplY3QoKTtcblx0fVxuXHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXHRnbCA9IGdldFdlYkdMQ29udGV4dChjYW52YXMpO1xuXHRpZiAoIWdsKSB7XG5cdFx0Y29uc29sZS5sb2coJ25vIHJlYWQgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHdlYmdsJyk7XG5cdFx0cmVqZWN0KCk7XG5cdH1cblxuXHRpZighaW5pdFNoYWRlcnMoZ2wsIFRlc3RTaGFkZXIudmVydGV4U2hhZGVyLCBUZXN0U2hhZGVyLmZyYWdtZW50U2hhZGVyKSl7XG5cdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCB0byBpbnRpYWxpemUgc2hhZGVycy4nKTtcblx0XHRyZWplY3QoKTtcblx0fVxuXG5cdGxldCBtb2RlbERhdGEgPSBpbml0Q3ViZURhdGEoKTtcblx0bGV0IGRhdGFOdW0gPSBtb2RlbERhdGEuaW5kaWNlcy5sZW5ndGg7XG5cblx0aWYoIWluaXRWZXJ0ZXhCdWZmZXJzKGdsLCBtb2RlbERhdGEpKXtcblx0XHRjb25zb2xlLmxvZyhcImZhaWxlZCB0byBzZXQgdmVydGljZXNcIik7XG5cdFx0cmVqZWN0KCk7XG5cdH1cblxuXHRnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG5cdGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcblxuXHRsZXQgdV9NVlBNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oZ2wucHJvZ3JhbSwgJ3VfTVZQTWF0cml4Jyk7XG5cblx0dmlld01hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XG5cdC8vIOmAgumFjeWkmuenjeWxj+W5lVxuXHRsZXQgZm92ID0gY2FsY0ZvdihkaXN0YW5jZSwgY3VzdG9tVmlld1dpZHRoLCBjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KTtcblx0dmlld01hdHJpeC5zZXRQZXJzcGVjdGl2ZShmb3YsIGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQsIDAuMSwgMTAwMC4wKTtcblx0dmlld01hdHJpeC5sb29rQXQoY2FtZXJhUG9zLmVsZW1lbnRzWzBdLCBjYW1lcmFQb3MuZWxlbWVudHNbMV0sIGNhbWVyYVBvcy5lbGVtZW50c1syXSwgMC4wLCAwLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCk7XG5cblx0bGV0IGN1cnJlbnRBbmdsZSA9IFswLjAsIDAuMF07IC8vIFvnu5V46L205peL6L2s6KeS5bqm77yM57uVeei9tOaXi+i9rOinkuW6pl1cblx0aW5pdEV2ZW50SGFuZGxlcnMoY2FudmFzLCBjdXJyZW50QW5nbGUpO1xuXG5cdGlmKCFpbml0VGV4dHVyZXMoZ2wsIGRhdGFOdW0pKXtcblx0XHRjb25zb2xlLmxvZyhcIm5vdCBpbnRpYWxpemUgdGV4dHVyZVwiKTtcblx0XHRyZWplY3QoKTtcblx0fVxuXG5cdC8vIOWKoOi9veeJm+WktOaooeWei1xuXHQvLyBpbml0Tml1TW9kZWxEYXRhKCk7XG5cblx0Y29uc3QgdGljayA9IGZ1bmN0aW9uKCl7XG5cdFx0ZHJhdyhnbCwgZGF0YU51bSwgdmlld01hdHJpeCwgdV9NVlBNYXRyaXgsIGN1cnJlbnRBbmdsZSk7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXHR9XG5cdHRpY2soKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplV2luZG93cywgZmFsc2UpO1xuXG5cdHJlc29sdmUoY2FudmFzKTtcbn1cblxuY29uc3QgZHJhdyA9IChnbCwgbiwgdmlld01hdHJpeCwgdV9NVlBNYXRyaXgsIGN1cnJlbnRBbmdsZSkgPT4ge1xuXHRnX01WUE1hdHJpeC5zZXQodmlld01hdHJpeCk7XG5cdGdfTVZQTWF0cml4LnJvdGF0ZShjdXJyZW50QW5nbGVbMF0sIDEuMCwgMC4wLCAwLjApO1xuXHRnX01WUE1hdHJpeC5yb3RhdGUoY3VycmVudEFuZ2xlWzFdLCAwLjAsIDEuMCwgMC4wKTtcblxuXHRnbC51bmlmb3JtTWF0cml4NGZ2KHVfTVZQTWF0cml4LCBmYWxzZSwgZ19NVlBNYXRyaXguZWxlbWVudHMpO1xuXG5cdGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuXHRnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCBuLCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbn1cblxuLyoqXG4gKiDorqHnrpfnm7jmnLogZm92IOeahOWHveaVsFxuICogQHBhcmFtIGQgOiDlnKjnm7jmnLrliY3mlrkgZCDot53nprtcbiAqIEBwYXJhbSB3IDog5oOz6KaB55yL5Yiw5pyA5aSn5q2j5pa55b2i5Yy65Z+f6L656ZW/5Li6IHdcbiAqIEBwYXJhbSByIDog5bGP5bmV5a696auY5q+UXG4gKi9cbmZ1bmN0aW9uIGNhbGNGb3YoZCwgdywgcikge1xuICB2YXIgZjtcbiAgdmFyIHZlcnRpY2FsID0gdztcbiAgaWYgKHIgPCAxKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHZlcnRpY2FsL3I7XG4gIH1cbiAgZiA9IE1hdGguYXRhbih2ZXJ0aWNhbC9kLzIpKjIgKiAoMTgwIC8gTWF0aC5QSSk7XG4gIHJldHVybiBmO1xufVxuXG5jb25zdCByZXNpemVXaW5kb3dzID0gKCkgPT4ge1xuXHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0Ly8g6YCC6YWN5aSa56eN5bGP5bmVXG5cdGxldCBmb3YgPSBjYWxjRm92KGRpc3RhbmNlLCBjdXN0b21WaWV3V2lkdGgsIGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpO1xuXHR2aWV3TWF0cml4LnNldFBlcnNwZWN0aXZlKGZvdiwgY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCwgMC4xLCAxMDAwLjApO1xuXHR2aWV3TWF0cml4Lmxvb2tBdCgzLjAsIDMuMCwgNy4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC4wKTtcblx0Z2wudmlld3BvcnQoIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xuXHRcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4Jztcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAncHgnO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZwdmlld2VyOyIsImltcG9ydCB0ZXh0dXJlSW1nIGZyb20gJ3Jlc19nbC9pbWcvc2t5LmpwZyc7XG5cblxuY29uc3QgbG9hZFRleHR1cmUgPSAoZ2wsIG4sIHRleHR1cmUsIHVfU2FtcGxlciwgaW1hZ2UpID0+IHtcblx0Ly8geei9tOe/u+i9rOWbvueJh1xuXHRnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAxKTtcblx0Ly8g5r+A5rS7MOWPt+e6ueeQhlxuXHRnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblx0Ly8g57uR5a6a5oiQMkTnurnnkIZcblx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cblx0Ly8g6K6+572u57q555CG5Y+C5pWwXG5cdGdsLnRleFBhcmFtZXRlcmYoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuXG5cdC8vIOa1i+ivleWFtuS7lueahOe6ueeQhuWhq+WFheaooeW8j1xuXHQvLyDlnoLnm7TmlrnlkJHplZzlg4/ph43lpI3loavlhYVcblx0Ly8gZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuTUlSUk9SRURfUkVQRUFUKTtcblx0Ly8gLy8g5rC05bmz5pa55ZCR5Y675Y+W6L6557yY5YC85L2c5Li65aGr5YWF5YC8XG4vLyBcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuXG5cdC8vIOiuvue9rue6ueeQhuWbvuWDj+WPguaVsFxuXHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQiwgZ2wuUkdCLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XG5cblx0Ly8g5bCG57q555CG5Y2V5YWD6K6+572u5Yiw6YeH5qC35Zmo5a+56LGhXG5cdGdsLnVuaWZvcm0xaSh1X1NhbXBsZXIsIDApO1xufVxuXG5jb25zdCBpbml0VGV4dHVyZSA9IChnbCwgbnVtKSA9PiB7XG5cdC8vIOWIm+W7uue6ueeQhuWvueixoVxuXHRsZXQgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblx0aWYoIXRleHR1cmUpe1xuXHRcdGNvbnNvbGUubG9nKFwibm90IGNyZWF0ZSB0ZXh0dXJlIG9iamVjdFwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRsZXQgdV9TYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKGdsLnByb2dyYW0sICd1X1NhbXBsZXInKTtcblxuXHRsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0aW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRsb2FkVGV4dHVyZShnbCwgbnVtLCB0ZXh0dXJlLCB1X1NhbXBsZXIsIGltYWdlKTtcblx0fVxuXHRpbWFnZS5zcmMgPSB0ZXh0dXJlSW1nO1xuXG5cdHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0VGV4dHVyZTsiXSwic291cmNlUm9vdCI6IiJ9
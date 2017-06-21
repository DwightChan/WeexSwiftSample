/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(201)
	var __weex_script__ = __webpack_require__(202)

	__weex_define__('@weex-component/c1022e7ee9ce09ed1eadcf7bffe1b341', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/c1022e7ee9ce09ed1eadcf7bffe1b341',undefined,undefined)

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(36)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 30,
	            "color": "#000000"
	          },
	          "attr": {
	            "value": function () {return this.location}
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 35,
	            "color": "#FFA07A"
	          },
	          "attr": {
	            "value": function () {return this.watchlocation}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var _stringify = __webpack_require__(102);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        location: "等待定位数据",
	        watchlocation: "watch location",
	        i: 0
	    }},
	    created: function created() {
	        var geolocation = __weex_require__('@weex-module/geolocation');
	        geolocation.getCurrentPosition(function (result) {
	            console.log("into--[getCurrentPosition success] result:" + (0, _stringify2.default)(result));
	            this.location = (0, _stringify2.default)(result);
	        }.bind(this), function (result) {
	            console.log("into--[getCurrentPosition error] result:" + (0, _stringify2.default)(result));
	            this.location = (0, _stringify2.default)(result);
	        }.bind(this), { enableHighAcuracy: false, address: true });

	        geolocation.watchPosition(function (result) {
	            console.log("into--[watchPosition success] result:" + (0, _stringify2.default)(result));
	            var str = this.watchlocation + '\n' + (0, _stringify2.default)(result);
	            this.watchlocation = str;
	            this.i += 1;

	            if (this.i == 2) {
	                geolocation.clearWatch(result.registerId);
	                __weex_require__('@weex-module/modal').toast({
	                    'message': "[clear watch] id:" + result.registerId,
	                    'duration': 1
	                });
	            }
	        }.bind(this), function (result) {
	            console.log("into--[watchPosition success] result:" + (0, _stringify2.default)(result));
	            this.watchlocation = (0, _stringify2.default)(result);
	        }.bind(this), { enableHighAcuracy: false, address: true });
	    },
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ })

/******/ });
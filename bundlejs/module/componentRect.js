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

	__webpack_require__(226)
	var __weex_template__ = __webpack_require__(230)
	var __weex_style__ = __webpack_require__(231)
	var __weex_script__ = __webpack_require__(232)

	__weex_define__('@weex-component/3cccb00caad47f9888c7597d009c670e', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/3cccb00caad47f9888c7597d009c670e',undefined,undefined)

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(227)
	var __weex_style__ = __webpack_require__(228)
	var __weex_script__ = __webpack_require__(229)

	__weex_define__('@weex-component/multi-text', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "row"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "text-style",
	        "text-descript"
	      ],
	      "attr": {
	        "value": function () {return this.descript}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text-style",
	        "text-detail"
	      ],
	      "attr": {
	        "value": function () {return this.detail}
	      }
	    }
	  ]
	}

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

	module.exports = {
	  "text-style": {
	    "fontSize": 30,
	    "marginTop": 15,
	    "marginLeft": 15,
	    "marginBottom": 15
	  },
	  "text-descript": {
	    "fontWeight": "bold",
	    "flex": 1
	  },
	  "text-detail": {
	    "flex": 1
	  }
	}

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    descript: '',
	    detail: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "width": 730,
	    "margin": 10,
	    "borderWidth": 3,
	    "borderColor": "#00FF00"
	  },
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "click every view to get view Rect information"
	      }
	    },
	    {
	      "type": "scroller",
	      "style": {
	        "height": 400,
	        "width": 700,
	        "margin": 10,
	        "borderWidth": 3,
	        "borderColor": "#0000FF"
	      },
	      "children": [
	        {
	          "type": "text",
	          "events": {
	            "click": "getViewportRect"
	          },
	          "classList": [
	            "component",
	            "viewportBtn"
	          ],
	          "attr": {
	            "value": "root view"
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "text",
	              "events": {
	                "click": "getViewRect"
	              },
	              "classList": [
	                "component",
	                "basicBtn"
	              ],
	              "id": "basicview1",
	              "attr": {
	                "value": "basicview1"
	              }
	            },
	            {
	              "type": "text",
	              "events": {
	                "click": "getViewRect"
	              },
	              "classList": [
	                "component",
	                "basicBtn"
	              ],
	              "id": "basicview2",
	              "attr": {
	                "value": "basicview2"
	              }
	            },
	            {
	              "type": "text",
	              "events": {
	                "click": "getViewRect"
	              },
	              "classList": [
	                "component",
	                "basicBtn"
	              ],
	              "id": "basicview3",
	              "attr": {
	                "value": "basicview3"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "column"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "events": {
	                    "click": "getViewRect"
	                  },
	                  "classList": [
	                    "component",
	                    "basicBtn"
	                  ],
	                  "id": "basicview4",
	                  "attr": {
	                    "value": "basicview4"
	                  }
	                },
	                {
	                  "type": "text",
	                  "events": {
	                    "click": "getViewRect"
	                  },
	                  "classList": [
	                    "component",
	                    "basicBtn"
	                  ],
	                  "id": "basicview5",
	                  "attr": {
	                    "value": "basicview5"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "events": {
	                "click": "getViewRect"
	              },
	              "classList": [
	                "component",
	                "basicBtn"
	              ],
	              "id": "basicview6",
	              "attr": {
	                "value": "basicview6"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "width": 700,
	        "margin": 10,
	        "borderWidth": 3,
	        "borderColor": "#0000FF"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "sub-title"
	          ],
	          "attr": {
	            "value": "Device Config"
	          }
	        },
	        {
	          "type": "multi-text",
	          "attr": {
	            "descript": "Device Width:",
	            "detail": function () {return this.configEnv.deviceWidth}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "div-split"
	          ]
	        },
	        {
	          "type": "multi-text",
	          "attr": {
	            "descript": "Device Height:",
	            "detail": function () {return this.configEnv.deviceHeight}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "sub-title"
	          ],
	          "attr": {
	            "value": "View Rect Information"
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "repeat": {
	                    "expression": function () {return this.viewDesc},
	                    "key": "key",
	                    "value": "value"
	                  },
	                  "classList": [
	                    "titleFont"
	                  ],
	                  "attr": {
	                    "value": function () {return this.value}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "child-split"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "child-split"
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "repeat": {
	                    "expression": function () {return this.viewRect},
	                    "key": "key",
	                    "value": "value"
	                  },
	                  "classList": [
	                    "titleFont"
	                  ],
	                  "attr": {
	                    "value": function () {return this.value}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

	module.exports = {
	  "sub-title": {
	    "height": 40,
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)",
	    "color": "#FFFFFF",
	    "borderWidth": 1
	  },
	  "div-split": {
	    "height": 2,
	    "borderWidth": 1,
	    "borderStyle": "dashed",
	    "borderColor": "#375830"
	  },
	  "titleFont": {
	    "fontSize": 30,
	    "padding": 15,
	    "borderBottomWidth": 1
	  },
	  "child-split": {
	    "width": 2,
	    "borderWidth": 1,
	    "borderStyle": "dashed",
	    "borderColor": "#00FF00"
	  },
	  "component": {
	    "borderWidth": 3,
	    "fontSize": 60,
	    "textAlign": "center",
	    "backgroundColor": "rgb(240,173,78)"
	  },
	  "viewportBtn": {
	    "width": 300,
	    "height": 100,
	    "marginTop": 20,
	    "marginLeft": 200
	  },
	  "basicBtn": {
	    "width": 190,
	    "height": 180,
	    "marginLeft": 30,
	    "marginTop": 20,
	    "fontSize": 40,
	    "padding": 35
	  },
	  "stickyBtn": {
	    "position": "sticky",
	    "width": 200,
	    "height": 60,
	    "marginLeft": 30,
	    "marginTop": 20,
	    "fontSize": 40
	  },
	  "fixedBtn": {
	    "position": "fixed",
	    "width": 200,
	    "height": 170,
	    "right": 100,
	    "top": 200,
	    "padding": 20
	  },
	  "content": {
	    "height": 400,
	    "margin": 10,
	    "padding": 20,
	    "fontSize": 50,
	    "color": "#00FF00",
	    "borderColor": "#FF0000",
	    "borderWidth": 3
	  }
	}

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    configEnv: {},
	    viewRect: ['View Rect'],
	    viewDesc: ['----', 'width', 'height', 'top', 'left', 'bottom', 'right'],
	    contentList: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	  }},
	  created: function created() {
	    this.$getConfig(function (config) {
	      this.configEnv = config.env;
	    }.bind(this));
	  },
	  methods: {
	    getViewportRect: function getViewportRect(e) {
	      var dom = __weex_require__('@weex-module/dom');
	      dom.getComponentRect('viewport', function (data) {
	        if (data.result) {
	          this.viewRect = [this.viewRect[0]];
	          this.viewRect.push(data.size.width);
	          this.viewRect.push(data.size.height);
	          this.viewRect.push(data.size.top);
	          this.viewRect.push(data.size.left);
	          this.viewRect.push(data.size.bottom);
	          this.viewRect.push(data.size.right);
	        }
	      }.bind(this));
	    },
	    getViewRect: function getViewRect(e) {
	      var dom = __weex_require__('@weex-module/dom');
	      dom.getComponentRect(this.$el(e.target.attr.value), function (data) {
	        if (data.result) {
	          this.viewRect = [this.viewRect[0]];
	          this.viewRect.push(data.size.width);
	          this.viewRect.push(data.size.height);
	          this.viewRect.push(data.size.top);
	          this.viewRect.push(data.size.left);
	          this.viewRect.push(data.size.bottom);
	          this.viewRect.push(data.size.right);
	        }
	      }.bind(this));
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });
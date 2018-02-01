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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'frzTable';
var ModuleDefaults = {
	count: {
		// M版時每次點擊往前往後移動幾格儲存格
		slide: 2, // [number] 
		// M版時一個畫面show幾格儲存格
		show: 3 // [number],M版寬最大顯示4筆資料 
	},
	// 設定花多久時間移動完成
	speed: .3, // [number] 
	// 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
	whenClick: function whenClick($element) {
		// console.log($element)
	}
};
var ModuleReturns = [];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			var self = this;
			var $this = this.$ele;
			var options = this.option;
			var $slide_left = $this.find('.slide_left');
			var $slide_right = $this.find('.slide_right');
			var $td2_content = $this.find('.td2_content');
			var $sliderBall = $this.find('.sliderBall');
			var slide = ModuleDefaults.count.slide;
			var divSlide = ModuleDefaults.count.slide;
			var show = ModuleDefaults.count.show;
			var speed = ModuleDefaults.count.speed;

			$slide_left.on('click', function () {
				if (slide === 1) {
					if (7 - divSlide >= 0 && divSlide !== 1) {
						divSlide = divSlide - slide;
						console.log(divSlide, 'left slide=1');
						self.onClickLeft();
					}
				} else {
					console.log(divSlide, 'left初始');
					if (divSlide - show > 0 && divSlide > show * 2 && divSlide !== 1) {
						divSlide = divSlide - slide;
						console.log(divSlide, 'left1');
						self.onClickLeft();
					} else if (divSlide - show > 0 && divSlide <= show * 2) {
						var divWidth = ($td2_content.width() + 2) * (divSlide - show) + .5; //show4 slider2的話會直接滑到最頭
						console.log(divSlide, 'left 2');
						$td2_content.animate({
							left: "+=" + divWidth + ""
						}, speed);
						divSlide = slide;
					}
				}
			});

			$slide_right.on('click', function () {
				$this.find(".sliderBall:first-child").removeClass('activeBall');
				console.log(divSlide, '初始');
				if (slide === 1) {
					if (divSlide + show <= 7) {
						divSlide = divSlide + slide;
						console.log(divSlide, 'right slide=1');
						self.onClickRight();
					}
				} else {
					if (divSlide + show <= 7) {
						divSlide = divSlide + show;
						console.log(divSlide, 'right1');
						self.onClickRight();
					} else if (7 - divSlide > 0) {
						var divWidth = ($td2_content.width() + 2) * (7 - divSlide) + .5;
						console.log(divSlide, 'right2');
						$td2_content.animate({
							left: "-=" + divWidth + ""
						}, speed);
						divSlide = divSlide + (7 - divSlide);
						console.log(divSlide, 'right_ends');
						// $this.find(".sliderBall:nth-child( " + ( divSlide - 1 ) + " )").addClass('activeBall') ;
					}
				}
			});

			if (show - slide) {}
			$this.find(".sliderBall:first-child").addClass('activeBall');

			this.changeWindow();
			this.onClickDiv();
			this.airOnClick();
		}
	}, {
		key: 'changeWindow',
		value: function changeWindow() {
			var self = this;
			var $this = this.$ele;
			var $td2_content = $this.find('.td2_content');
			var windowWidth = $(window).width();
			var divShow = $(".td2_wrap").width() / 7 - 2;
			if (windowWidth >= 768) {
				$('.slide_btn').addClass('display_n');
				$td2_content.width(divShow);
			} else {
				self.showDiv();
			}
		}
	}, {
		key: 'showDiv',
		value: function showDiv() {
			var self = this;
			var $this = this.$ele;
			var $td2_content = $this.find('.td2_content');
			var $td2_box = $this.find('.td2_box');
			var show = ModuleDefaults.count.show;
			var divShow = $(".td2_wrap").width() / show;
			$td2_content.width(divShow);
			$td2_box.width(divShow * 7);
		}
	}, {
		key: 'onClickLeft',
		value: function onClickLeft() {
			var self = this;
			var $this = this.$ele;
			var $td2_content = $this.find('.td2_content');
			var divSlide = ModuleDefaults.count.slide;
			var srcollWidth = ($td2_content.width() + 2) * divSlide + .5;
			var speed = ModuleDefaults.speed * 1000;
			$td2_content.animate({
				left: "+=" + srcollWidth + ""
			}, speed);
		}
	}, {
		key: 'onClickRight',
		value: function onClickRight() {
			var self = this;
			var $this = this.$ele;
			var $td2_content = $this.find('.td2_content');
			var divSlide = ModuleDefaults.count.slide;
			var srcollWidth = ($('.td2_content').width() + 2) * divSlide + .5;
			var speed = ModuleDefaults.speed * 1000;
			$td2_content.animate({
				left: "-=" + srcollWidth + ""
			}, speed);
		}
	}, {
		key: 'onClickDiv',
		value: function onClickDiv() {
			var self = this;
			var $this = this.$ele;
			var $td2_content = $this.find('.td2_content');
			var $title_bg = $this.find('.title_bg');

			$td2_content.on('click', function () {
				var thisDiv = $(this).index() + 1;
				$td2_content.removeClass('active').removeClass('bg_gray');
				$this.find('.td2_content:nth-child(' + thisDiv + ')').addClass('bg_gray');
				$title_bg.removeClass('bg_gray');
				$(this).removeClass('bg_gray').addClass('active').siblings().addClass('bg_gray');
			});
		}
	}, {
		key: 'airOnClick',
		value: function airOnClick() {
			var self = this;
			var $this = this.$ele;
			var $air_td2_content = $this.find('.air_td2_content');
			var $title_bg = $this.find('.title_bg');

			$air_td2_content.on('click', function () {
				var thisDiv = $(this).index() + 1;
				var thisFirst = $(this).index() + 1;
				$air_td2_content.removeClass('active').removeClass('bg_gray');
				$this.find('.air_td2_content:nth-child(' + thisDiv + ')').removeClass('bg_gray');
				$this.find('.air_td2_content_head').removeClass('air_color');
				$this.find('.air_td2_content_head:nth-child(' + thisFirst + ')').addClass('air_color');

				$(this).addClass('active');
				var title_active = $this.find('.active').parent().index() - 1;
				$this.find('.td1_left').removeClass('air_color');
				$this.find('.td1_left:nth-child(' + title_active + ')').addClass('air_color');

				$this.find('.td1_left_m').removeClass('air_color');
				$this.find('.td1_left_m:nth-child(' + title_active + ')').addClass('air_color');
			});
		}
	}]);

	return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);
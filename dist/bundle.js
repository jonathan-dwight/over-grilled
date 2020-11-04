/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./overgrilled.js":
/*!************************!*\
  !*** ./overgrilled.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ "./src/game.js");
console.log("we connected");

document.addEventListener("DOMContentLoaded", function () {
  var game = new _src_game__WEBPACK_IMPORTED_MODULE_0__.default();
  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    document.getElementById('intro-container').classList.add('hidden');
    game.addClickToItems();
    game.addClickToClearPlate();
  }); // x, y, width, height
});

/***/ }),

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BURGER_ITEMS = {
  cheese: "../assets/cheese.png",
  ketchup: "../assets/ketchup icon.jpg",
  lettuce: "../assets/salad.png",
  mustard: "../assets/mustard icon.jpg",
  beef: "../assets/beef patty.png",
  bottom_bun: "../assets/bottom bun.jpeg",
  top_bun: "../assets/top bun.jpeg"
};

var Burger = /*#__PURE__*/function () {
  function Burger(order) {
    _classCallCheck(this, Burger);

    this.burger = []; // this.order = order;
  }

  _createClass(Burger, [{
    key: "clearPlate",
    value: function clearPlate() {
      this.burger = [];
      this.show();
    }
  }, {
    key: "addIngredient",
    value: function addIngredient(item) {
      this.burger.push(item);
      this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var plate = document.getElementsByClassName('plate')[0];
      plate.innerHTML = "";
      var initialImg = document.createElement('img');
      initialImg.src = "../assets/plate.png";
      initialImg.className = 'plate-img';
      plate.appendChild(initialImg);

      for (var i = 0; i < this.burger.length; i++) {
        var ingredient = this.burger[i];
        var img = document.createElement('img');
        img.src = BURGER_ITEMS[ingredient];
        img.id = ingredient;
        img.className = 'burger-item-1'; // let theFirstChild = plate.firstChild;

        if (i === 0) {
          var plateImg = document.getElementsByClassName('plate-img')[0];
          plate.insertBefore(img, plateImg);
        } else {
          var theFirstChild = plate.firstChild;
          plate.insertBefore(img, theFirstChild);
        } // plate.insertBefore(img, theFirstChild)
        // plate.appendChild(img);

      }
    }
  }]);

  return Burger;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/burger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default(); // this.order = [];

    this.start = this.start.bind(this);
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {}
  }, {
    key: "addClickToItems",
    value: function addClickToItems() {
      var _this = this;

      var items = Array.from(document.getElementsByClassName('burger-item'));
      items.forEach(function (item) {
        item.addEventListener('click', function () {
          _this.burger.addIngredient(item.id);
        });
      });
    }
  }, {
    key: "addClickToClearPlate",
    value: function addClickToClearPlate() {
      var _this2 = this;

      var button = document.getElementById('clear-plate');
      button.addEventListener('click', function () {
        _this2.burger.clearPlate();
      });
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./overgrilled.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map
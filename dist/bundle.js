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
  var timer;
  var isPlaying = true;
  var startButton = document.getElementById('start-button');
  var playAgainButton = document.getElementById('play-again');
  startButton.addEventListener('click', function () {
    document.getElementById('intro-container').classList.add('hidden');
    game.start();
    timer = 60;
    setInterval(time, 1000);
    setInterval(gameStatus, 50);
  });
  playAgainButton.addEventListener('click', function () {
    game.restart();
    timer = 60;
  });

  function time() {
    timer > 0 ? timer-- : isPlaying = false;
    var countdown = document.getElementById('timer');
    countdown.innerHTML = timer;
  }

  function gameStatus() {
    if (!isPlaying && timer === 0) {// game.endGame()
    }
  }

  function checker() {
    setInterval(gameStatus, 50);
  } // x, y, width, height

});

/***/ }),

/***/ "./src/burger-order.js":
/*!*****************************!*\
  !*** ./src/burger-order.js ***!
  \*****************************/
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

var ITEMS = {
  beef: "../assets/beef patty.png",
  bottom_bun: "../assets/bottom-bun.jpeg",
  top_bun: "../assets/top-bun1.jpeg"
};
var CONDIMENTS = {
  cheese: "../assets/cheese.png",
  ketchup: "../assets/ketchup-icon.jpg",
  lettuce: "../assets/salad.png",
  beef: "../assets/beef-patty.png",
  mustard: "../assets/mustard-icon.jpg"
};
var ALL_ITEMS = {
  beef: "../assets/beef-patty.png",
  bottom_bun: "../assets/bottom-bun.jpeg",
  top_bun: "../assets/top-bun.png",
  cheese: "../assets/cheese.png",
  ketchup: "../assets/ketchup-icon.jpg",
  lettuce: "../assets/salad.png",
  mustard: "../assets/mustard-icon.jpg"
};

var BurgerOrder = /*#__PURE__*/function () {
  function BurgerOrder(numItems) {
    _classCallCheck(this, BurgerOrder);

    this.numItems = numItems;
    this.burgerOrder = [];
    this.orderItem = this.orderItem.bind(this);
    this.showOrder();
  }

  _createClass(BurgerOrder, [{
    key: "order",
    value: function order() {
      var options = Object.keys(ITEMS);
      var condimentsOptions = Object.keys(CONDIMENTS);

      if (this.numItems === 3) {
        this.burgerOrder.push('bottom_bun');
        this.burgerOrder.push('beef');
        this.burgerOrder.push('top_bun');
      } else {
        this.burgerOrder.push('bottom_bun');
        this.burgerOrder.push('beef');

        for (var i = 3; i < this.numItems; i++) {
          var item = Math.floor(Math.random() * 5);
          this.burgerOrder.push(condimentsOptions[item]);
        }

        this.burgerOrder.push('top_bun');
      }
    }
  }, {
    key: "orderItem",
    value: function orderItem(item) {
      var img = document.createElement('img');
      img.src = ALL_ITEMS[item];
      img.className = "burger-order";
      return img;
    }
  }, {
    key: "showOrder",
    value: function showOrder() {
      var _this = this;

      this.order();
      var orderDisplay = document.getElementById('order-window'); // orderDisplay.classList.add('order-options')

      this.burgerOrder.forEach(function (item) {
        var img = _this.orderItem(item); // orderDisplay.appendChild(img)


        var theFirstChild = orderDisplay.firstChild;
        orderDisplay.insertBefore(img, theFirstChild);
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var order = document.getElementById('order-window');
      order.innerHTML = "";
    }
  }]);

  return BurgerOrder;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerOrder);

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
  ketchup: "../assets/ketchup-icon.jpg",
  lettuce: "../assets/salad.png",
  mustard: "../assets/mustard-icon.jpg",
  beef: "../assets/beef-patty.png",
  bottom_bun: "../assets/bottom-bun.jpeg",
  top_bun: "../assets/top-bun.png"
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
/* harmony import */ var _burger_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-order */ "./src/burger-order.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    // let items = 3
    this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
    this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(3);
    this.score = 0; // this.order = [];

    this.start = this.start.bind(this);
    this.addClickToItems = this.addClickToItems.bind(this);
    this.addClickToClearPlate = this.addClickToClearPlate.bind(this);
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.addClickToItems();
      this.addClickToClearPlate();
      this.addClickToSubmitOrder();
    }
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
  }, {
    key: "addClickToSubmitOrder",
    value: function addClickToSubmitOrder() {
      var _this3 = this;

      var submitButton = document.getElementById('submit-order');
      submitButton.addEventListener('click', function () {
        _this3.checkGame();
      });
    }
  }, {
    key: "correctOrder",
    value: function correctOrder() {
      return JSON.stringify(this.burgerOrder.burgerOrder) === JSON.stringify(this.burger.burger);
    }
  }, {
    key: "showScore",
    value: function showScore() {
      var score = document.getElementById('score');
      score.innerHTML = "".concat(this.score);
    }
  }, {
    key: "checkGame",
    value: function checkGame() {
      if (this.correctOrder()) {
        this.score += 1;
        this.showScore();
        this.newRound();
      } else {
        console.log("incorrect order");
      }
    }
  }, {
    key: "newRound",
    value: function newRound() {
      this.burger.clearPlate();
      this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
      this.burgerOrder["delete"]();

      if (this.score < 1) {
        this.burgerOrder["delete"]();
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(4);
      } else if (this.score < 3) {
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(5);
        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
        this.burger.clearPlate();
      } else if (this.score < 6) {
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(7);
        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
        this.burger.clearPlate();
      } else if (this.score < 8) {
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(8);
        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
        this.burger.clearPlate();
      } else if (this.score < 10) {
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(10);
        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
        this.burger.clearPlate();
      } else {
        this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(10);
        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_0__.default();
        this.burger.clearPlate();
      }
    }
  }, {
    key: "restart",
    value: function restart() {
      this.burgerOrder["delete"]();
      this.burgerOrder = new _burger_order__WEBPACK_IMPORTED_MODULE_1__.default(3);
      this.burger.clearPlate();
      this.score = 0;
      this.showScore();
      document.getElementById("modal").classList.add("hidden");
    }
  }, {
    key: "endGame",
    value: function endGame() {
      document.getElementById("modal").classList.remove("hidden");
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
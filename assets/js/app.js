(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = _interopRequireDefault(require("./components/slider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    //burgerMenu.init();
    _slider["default"].init();
  });
})(jQuery);

},{"./components/slider":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var swiperSlider = function () {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 10000
    },
    speed: 6500,
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  //   const mySwiperMobail = new Swiper('.mySwiperMobail', {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     loop: true,
  //     autoplay: {
  //       delay: 8000,
  //     },
  //     speed: 3500,
  //     keyboard: {
  //       enabled: true,
  //     },
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 2,
  //       },
  //     },
  //     // pagination: {
  //     //   el: '.swiper-pagination',
  //     //   clickable: true,
  //     // },
  //     // navigation: {
  //     //   nextEl: '.swiper-button-next',
  //     //   prevEl: '.swiper-button-prev',
  //     // },
  //   });

  var init = function init() {};
  return {
    init: init
  };
}();
var _default = swiperSlider;
exports["default"] = _default;

},{}]},{},[1]);

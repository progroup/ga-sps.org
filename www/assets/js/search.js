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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/templates/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_polyfills__ = __webpack_require__(\"./client/utils/polyfills.js\");\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__utils_polyfills__[\"a\" /* focusWithin */])(document.querySelector(\".js-search-field\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdGVtcGxhdGVzL3NlYXJjaC5qcz9hZWI2Il0sIm5hbWVzIjpbImZvY3VzV2l0aGluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUFBLDZFQUFXQSxDQUFDQyxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFaIiwiZmlsZSI6Ii4vY2xpZW50L3RlbXBsYXRlcy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb2N1c1dpdGhpbiB9IGZyb20gXCIuLi91dGlscy9wb2x5ZmlsbHNcIjtcblxuZm9jdXNXaXRoaW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zZWFyY2gtZmllbGRcIikpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90ZW1wbGF0ZXMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/templates/search.js\n");

/***/ }),

/***/ "./client/utils/polyfills.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return focusWithin; });\n// if browser does not support `:focus-within`\n// pseudo-selector, inits a polyfill (IE/Edge)\nvar focusWithin = function () {\n\n  try {\n    // if `document.querySelector()` does not throw an error,\n    // an empty function is returned, because the browser\n    // supports the `:focus-within` pseudo-selector and thus\n    // does not need a polyfill.\n    document.querySelector(\":focus-within\");\n    return function () {}; /* eslint-disable-line no-empty-function */\n  } catch (err) {\n\n    return function (node) {\n\n      if (document.activeElement && node.contains(document.activeElement)) {\n        node.classList.add(\"is-focus-within\");\n      }\n\n      node.addEventListener(\"focus\", function () {\n        node.classList.add(\"is-focus-within\");\n      }, true);\n\n      node.addEventListener(\"blur\", function () {\n        if (!node.contains(document.activeElement)) {\n          node.classList.remove(\"is-focus-within\");\n        }\n      }, true);\n    };\n  }\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvcG9seWZpbGxzLmpzPzMwOGMiXSwibmFtZXMiOlsiZm9jdXNXaXRoaW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlcnIiLCJub2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsY0FBZSxZQUFZOztBQUUvQixNQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBU0MsYUFBVCxDQUF1QixlQUF2QjtBQUNBLFdBQU8sWUFBVyxDQUFFLENBQXBCLENBTkUsQ0FNb0I7QUFDdkIsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTs7QUFFWixXQUFPLFVBQVVDLElBQVYsRUFBZ0I7O0FBRXJCLFVBQUdILFNBQVNJLGFBQVQsSUFBMEJELEtBQUtFLFFBQUwsQ0FBY0wsU0FBU0ksYUFBdkIsQ0FBN0IsRUFBb0U7QUFDbEVELGFBQUtHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixpQkFBbkI7QUFDRDs7QUFFREosV0FBS0ssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6Q0wsYUFBS0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLGlCQUFuQjtBQUNELE9BRkQsRUFFRyxJQUZIOztBQUlBSixXQUFLSyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixZQUFZO0FBQ3hDLFlBQUcsQ0FBQ0wsS0FBS0UsUUFBTCxDQUFjTCxTQUFTSSxhQUF2QixDQUFKLEVBQTJDO0FBQ3pDRCxlQUFLRyxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsaUJBQXRCO0FBQ0Q7QUFDRixPQUpELEVBSUcsSUFKSDtBQU1ELEtBaEJEO0FBaUJEO0FBQ0YsQ0E3Qm1CLEVBQXBCIiwiZmlsZSI6Ii4vY2xpZW50L3V0aWxzL3BvbHlmaWxscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBgOmZvY3VzLXdpdGhpbmBcbi8vIHBzZXVkby1zZWxlY3RvciwgaW5pdHMgYSBwb2x5ZmlsbCAoSUUvRWRnZSlcbmNvbnN0IGZvY3VzV2l0aGluID0gKGZ1bmN0aW9uICgpIHtcblxuICB0cnkge1xuICAgIC8vIGlmIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKClgIGRvZXMgbm90IHRocm93IGFuIGVycm9yLFxuICAgIC8vIGFuIGVtcHR5IGZ1bmN0aW9uIGlzIHJldHVybmVkLCBiZWNhdXNlIHRoZSBicm93c2VyXG4gICAgLy8gc3VwcG9ydHMgdGhlIGA6Zm9jdXMtd2l0aGluYCBwc2V1ZG8tc2VsZWN0b3IgYW5kIHRodXNcbiAgICAvLyBkb2VzIG5vdCBuZWVkIGEgcG9seWZpbGwuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpmb2N1cy13aXRoaW5cIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge307IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHktZnVuY3Rpb24gKi9cbiAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcblxuICAgICAgaWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBub2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImlzLWZvY3VzLXdpdGhpblwiKTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJpcy1mb2N1cy13aXRoaW5cIik7XG4gICAgICB9LCB0cnVlKTtcblxuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCFub2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZm9jdXMtd2l0aGluXCIpO1xuICAgICAgICB9XG4gICAgICB9LCB0cnVlKTtcblxuICAgIH07XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGZvY3VzV2l0aGluIH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9wb2x5ZmlsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/utils/polyfills.js\n");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/templates/search.js");


/***/ })

/******/ });
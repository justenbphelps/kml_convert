module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Uploader.js":
/*!********************************!*\
  !*** ./components/Uploader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uploader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/justen/Projects/Apps/kml_convert/components/Uploader.js";



var toGeoJSON = __webpack_require__(/*! ../static/togeojson */ "./static/togeojson.js");

function upload(e) {
  var file = e.target.files[0];
  var url = window.URL.createObjectURL(file);
  var xhr = new XMLHttpRequest(url);
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onload = function () {
    var kml = xhr.responseXML;
    convert(kml, file);
  };
}

function convert(kml, file) {
  var geojson = toGeoJSON.kml(kml); // const download = window.URL.createObjectURL(geojson)

  console.log();
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(geojson));
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", file.name + ".json");
  dlAnchorElem.click();
}

function Uploader() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1846388426" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-1846388426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1846388426" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-1846388426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-1846388426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-1846388426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1846388426",
    __self: this
  }, ".wrapper.jsx-1846388426{width:350px;height:200px;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-1846388426{font-weight:400;font-size:24px;margin-top:10px;}input.jsx-1846388426{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}label.jsx-1846388426{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#47a66a;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}a.jsx-1846388426{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHdUIsQUFXSSxBQUtKLEFBUUksQUFlSCxZQXRDQSxBQWdCQSxDQXVCZixHQTVCaUIsQUFhSCxTQXZCVSxBQWdCWixHQVFFLEdBYkksSUFNQSxLQVFHLE9BeEJELEFBV3BCLElBTW9CLFFBUUEsTUF4QnNCLElBaUI3QixRQVFPLEdBUHBCLGVBUW1CLFVBekJKLE9BMEJJLGlCQUNMLFlBQ1kseUJBQ1gsYUE1QlMsQUE2QkgsOEVBNUJXLGVBNkJmLGVBQ2pCLHFGQTdCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9HZW9KU09OID0gcmVxdWlyZSgnLi4vc3RhdGljL3RvZ2VvanNvbicpXG5cbmZ1bmN0aW9uIHVwbG9hZChlKSB7XG4gIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHVybClcbiAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKVxuICB4aHIuc2VuZCgpXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBrbWwgPSB4aHIucmVzcG9uc2VYTUxcbiAgICBjb252ZXJ0KGttbCwgZmlsZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGttbCwgZmlsZSl7XG4gIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgLy8gY29uc3QgZG93bmxvYWQgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChnZW9qc29uKVxuICBjb25zb2xlLmxvZygpXG5cbiAgdmFyIGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2VvanNvbikpO1xuICB2YXIgZGxBbmNob3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQW5jaG9yRWxlbScpO1xuICBkbEFuY2hvckVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCAgICAgZGF0YVN0ciAgICAgKTtcbiAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGUubmFtZSArIFwiLmpzb25cIik7XG4gIGRsQW5jaG9yRWxlbS5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcigpIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgxPi5rbWwgY29udmVydGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX2Zvcm1cIj5cbiAgICAgICAgPGEgaWQ9XCJkb3dubG9hZEFuY2hvckVsZW1cIiA+PC9hPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVfaW5wdXRcIiBuYW1lPVwiZmlsZV9pbnB1dFwiIG9uQ2hhbmdlPXt1cGxvYWR9IGFjY2VwdD1cIi5rbWxcIj48L2lucHV0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVfaW5wdXRcIj5TZWxlY3QgRmlsZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA2cHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMC4xcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwLjFweDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0N2E2NmE7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ }),

/***/ "./components/Wrapper.js":
/*!*******************************!*\
  !*** ./components/Wrapper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uploader */ "./components/Uploader.js");
var _jsxFileName = "/Users/justen/Projects/Apps/kml_convert/components/Wrapper.js";



function Wrapper() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-787366954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Uploader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logo.svg",
    width: "70px",
    className: "jsx-787366954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "787366954",
    __self: this
  }, "div.jsx-787366954{height:100vh;width:100%;background-color:#fafafd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-787366954{padding-top:20px;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtCLEFBR3dCLEFBU0ksYUFSTixJQVNDLE9BUmEsS0FTM0Isb0JBUmUsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXBsb2FkZXIgZnJvbSAnLi9VcGxvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgICA8VXBsb2FkZXIgLz5cbiAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnN2Z1wiIHdpZHRoPVwiNzBweFwiLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Wrapper.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper.js");
var _jsxFileName = "/Users/justen/Projects/Apps/kml_convert/pages/index.js";


 // Thank you's

console.log("This application was built around https://github.com/mapbox/togeojson ");
function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2863341845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2863341845",
    __self: this
  }, "body{height:100%;width:100%;margin:0;padding:0;background-color:#fff;color:#333;font-family:'Avenir';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTeUIsQUFHdUIsWUFDRCxXQUNGLFNBQ0MsVUFDWSxzQkFDWCxXQUNVLHFCQUN2QiIsImZpbGUiOiIvVXNlcnMvanVzdGVuL1Byb2plY3RzL0FwcHMva21sX2NvbnZlcnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1dyYXBwZXInXG5cbi8vIFRoYW5rIHlvdSdzXG5jb25zb2xlLmxvZyhcIlRoaXMgYXBwbGljYXRpb24gd2FzIGJ1aWx0IGFyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L3RvZ2VvanNvbiBcIilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxXcmFwcGVyIC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LWZhbWlseTogJ0F2ZW5pcic7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/pages/index.js */"));
}

/***/ }),

/***/ "./static/togeojson.js":
/*!*****************************!*\
  !*** ./static/togeojson.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.toGeoJSON = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var _parseFloat2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js"));

var toGeoJSON = function () {
  'use strict';

  var removeSpace = /\s*/g,
      trimSpace = /^\s*|\s*$/g,
      splitSpace = /\s+/; // generate a short, numeric hash of a string

  function okhash(x) {
    if (!x || !x.length) return 0;

    for (var i = 0, h = 0; i < x.length; i++) {
      h = (h << 5) - h + x.charCodeAt(i) | 0;
    }

    return h;
  } // all Y children of X


  function get(x, y) {
    return x.getElementsByTagName(y);
  }

  function attr(x, y) {
    return x.getAttribute(y);
  }

  function attrf(x, y) {
    return (0, _parseFloat2["default"])(attr(x, y));
  } // one Y child of X, if any, otherwise null


  function get1(x, y) {
    var n = get(x, y);
    return n.length ? n[0] : null;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Node.normalize


  function norm(el) {
    if (el.normalize) {
      el.normalize();
    }

    return el;
  } // cast array x into numbers


  function numarray(x) {
    for (var j = 0, o = []; j < x.length; j++) {
      o[j] = (0, _parseFloat2["default"])(x[j]);
    }

    return o;
  } // get the content of a text node, if any


  function nodeVal(x) {
    if (x) {
      norm(x);
    }

    return x && x.textContent || '';
  } // get the contents of multiple text nodes, if present


  function getMulti(x, ys) {
    var o = {},
        n,
        k;

    for (k = 0; k < ys.length; k++) {
      n = get1(x, ys[k]);
      if (n) o[ys[k]] = nodeVal(n);
    }

    return o;
  } // add properties of Y to X, overwriting if present in both


  function extend(x, y) {
    for (var k in y) {
      x[k] = y[k];
    }
  } // get one coordinate from a coordinate array, if any


  function coord1(v) {
    return numarray(v.replace(removeSpace, '').split(','));
  } // get all coordinates from a coordinate array as [[],[]]


  function coord(v) {
    var coords = v.replace(trimSpace, '').split(splitSpace),
        o = [];

    for (var i = 0; i < coords.length; i++) {
      o.push(coord1(coords[i]));
    }

    return o;
  }

  function coordPair(x) {
    var ll = [attrf(x, 'lon'), attrf(x, 'lat')],
        ele = get1(x, 'ele'),
        // handle namespaced attribute in browser
    heartRate = get1(x, 'gpxtpx:hr') || get1(x, 'hr'),
        time = get1(x, 'time'),
        e;

    if (ele) {
      e = (0, _parseFloat2["default"])(nodeVal(ele));

      if (!isNaN(e)) {
        ll.push(e);
      }
    }

    return {
      coordinates: ll,
      time: time ? nodeVal(time) : null,
      heartRate: heartRate ? (0, _parseFloat2["default"])(nodeVal(heartRate)) : null
    };
  } // create a new feature collection parent object


  function fc() {
    return {
      type: 'FeatureCollection',
      features: []
    };
  }

  var serializer;

  if (typeof XMLSerializer !== 'undefined') {
    /* istanbul ignore next */
    serializer = new XMLSerializer();
  } else {
    var isNodeEnv = typeof process === 'object' && !false;
    var isTitaniumEnv = typeof Titanium === 'object';

    if ( true && (isNodeEnv || isTitaniumEnv)) {
      serializer = new (__webpack_require__(/*! xmldom */ "xmldom").XMLSerializer)();
    } else {
      throw new Error('Unable to initialize serializer');
    }
  }

  function xml2str(str) {
    // IE9 will create a new XMLSerializer but it'll crash immediately.
    // This line is ignored because we don't run coverage tests in IE9

    /* istanbul ignore next */
    if (str.xml !== undefined) return str.xml;
    return serializer.serializeToString(str);
  }

  var t = {
    kml: function kml(doc) {
      var gj = fc(),
          // styleindex keeps track of hashed styles in order to match features
      styleIndex = {},
          styleByHash = {},
          // stylemapindex keeps track of style maps to expose in properties
      styleMapIndex = {},
          // atomic geospatial types supported by KML - MultiGeometry is
      // handled separately
      geotypes = ['Polygon', 'LineString', 'Point', 'Track', 'gx:Track'],
          // all root placemarks in the file
      placemarks = get(doc, 'Placemark'),
          styles = get(doc, 'Style'),
          styleMaps = get(doc, 'StyleMap');

      for (var k = 0; k < styles.length; k++) {
        var hash = okhash(xml2str(styles[k])).toString(16);
        styleIndex['#' + attr(styles[k], 'id')] = hash;
        styleByHash[hash] = styles[k];
      }

      for (var l = 0; l < styleMaps.length; l++) {
        styleIndex['#' + attr(styleMaps[l], 'id')] = okhash(xml2str(styleMaps[l])).toString(16);
        var pairs = get(styleMaps[l], 'Pair');
        var pairsMap = {};

        for (var m = 0; m < pairs.length; m++) {
          pairsMap[nodeVal(get1(pairs[m], 'key'))] = nodeVal(get1(pairs[m], 'styleUrl'));
        }

        styleMapIndex['#' + attr(styleMaps[l], 'id')] = pairsMap;
      }

      for (var j = 0; j < placemarks.length; j++) {
        gj.features = gj.features.concat(getPlacemark(placemarks[j]));
      }

      function kmlColor(v) {
        var color, opacity;
        v = v || '';

        if (v.substr(0, 1) === '#') {
          v = v.substr(1);
        }

        if (v.length === 6 || v.length === 3) {
          color = v;
        }

        if (v.length === 8) {
          opacity = (0, _parseInt2["default"])(v.substr(0, 2), 16) / 255;
          color = '#' + v.substr(6, 2) + v.substr(4, 2) + v.substr(2, 2);
        }

        return [color, isNaN(opacity) ? undefined : opacity];
      }

      function gxCoord(v) {
        return numarray(v.split(' '));
      }

      function gxCoords(root) {
        var elems = get(root, 'coord', 'gx'),
            coords = [],
            times = [];
        if (elems.length === 0) elems = get(root, 'gx:coord');

        for (var i = 0; i < elems.length; i++) {
          coords.push(gxCoord(nodeVal(elems[i])));
        }

        var timeElems = get(root, 'when');

        for (var j = 0; j < timeElems.length; j++) {
          times.push(nodeVal(timeElems[j]));
        }

        return {
          coords: coords,
          times: times
        };
      }

      function getGeometry(root) {
        var geomNode,
            geomNodes,
            i,
            j,
            k,
            geoms = [],
            coordTimes = [];

        if (get1(root, 'MultiGeometry')) {
          return getGeometry(get1(root, 'MultiGeometry'));
        }

        if (get1(root, 'MultiTrack')) {
          return getGeometry(get1(root, 'MultiTrack'));
        }

        if (get1(root, 'gx:MultiTrack')) {
          return getGeometry(get1(root, 'gx:MultiTrack'));
        }

        for (i = 0; i < geotypes.length; i++) {
          geomNodes = get(root, geotypes[i]);

          if (geomNodes) {
            for (j = 0; j < geomNodes.length; j++) {
              geomNode = geomNodes[j];

              if (geotypes[i] === 'Point') {
                geoms.push({
                  type: 'Point',
                  coordinates: coord1(nodeVal(get1(geomNode, 'coordinates')))
                });
              } else if (geotypes[i] === 'LineString') {
                geoms.push({
                  type: 'LineString',
                  coordinates: coord(nodeVal(get1(geomNode, 'coordinates')))
                });
              } else if (geotypes[i] === 'Polygon') {
                var rings = get(geomNode, 'LinearRing'),
                    coords = [];

                for (k = 0; k < rings.length; k++) {
                  coords.push(coord(nodeVal(get1(rings[k], 'coordinates'))));
                }

                geoms.push({
                  type: 'Polygon',
                  coordinates: coords
                });
              } else if (geotypes[i] === 'Track' || geotypes[i] === 'gx:Track') {
                var track = gxCoords(geomNode);
                geoms.push({
                  type: 'LineString',
                  coordinates: track.coords
                });
                if (track.times.length) coordTimes.push(track.times);
              }
            }
          }
        }

        return {
          geoms: geoms,
          coordTimes: coordTimes
        };
      }

      function getPlacemark(root) {
        var geomsAndTimes = getGeometry(root),
            i,
            properties = {},
            name = nodeVal(get1(root, 'name')),
            address = nodeVal(get1(root, 'address')),
            styleUrl = nodeVal(get1(root, 'styleUrl')),
            description = nodeVal(get1(root, 'description')),
            timeSpan = get1(root, 'TimeSpan'),
            timeStamp = get1(root, 'TimeStamp'),
            extendedData = get1(root, 'ExtendedData'),
            lineStyle = get1(root, 'LineStyle'),
            polyStyle = get1(root, 'PolyStyle'),
            visibility = get1(root, 'visibility');
        if (!geomsAndTimes.geoms.length) return [];
        if (name) properties.name = name;
        if (address) properties.address = address;

        if (styleUrl) {
          if (styleUrl[0] !== '#') {
            styleUrl = '#' + styleUrl;
          }

          properties.styleUrl = styleUrl;

          if (styleIndex[styleUrl]) {
            properties.styleHash = styleIndex[styleUrl];
          }

          if (styleMapIndex[styleUrl]) {
            properties.styleMapHash = styleMapIndex[styleUrl];
            properties.styleHash = styleIndex[styleMapIndex[styleUrl].normal];
          } // Try to populate the lineStyle or polyStyle since we got the style hash


          var style = styleByHash[properties.styleHash];

          if (style) {
            if (!lineStyle) lineStyle = get1(style, 'LineStyle');
            if (!polyStyle) polyStyle = get1(style, 'PolyStyle');
            var iconStyle = get1(style, 'IconStyle');

            if (iconStyle) {
              var icon = get1(iconStyle, 'Icon');

              if (icon) {
                var href = nodeVal(get1(icon, 'href'));
                if (href) properties.icon = href;
              }
            }
          }
        }

        if (description) properties.description = description;

        if (timeSpan) {
          var begin = nodeVal(get1(timeSpan, 'begin'));
          var end = nodeVal(get1(timeSpan, 'end'));
          properties.timespan = {
            begin: begin,
            end: end
          };
        }

        if (timeStamp) {
          properties.timestamp = nodeVal(get1(timeStamp, 'when'));
        }

        if (lineStyle) {
          var linestyles = kmlColor(nodeVal(get1(lineStyle, 'color'))),
              color = linestyles[0],
              opacity = linestyles[1],
              width = (0, _parseFloat2["default"])(nodeVal(get1(lineStyle, 'width')));
          if (color) properties.stroke = color;
          if (!isNaN(opacity)) properties['stroke-opacity'] = opacity;
          if (!isNaN(width)) properties['stroke-width'] = width;
        }

        if (polyStyle) {
          var polystyles = kmlColor(nodeVal(get1(polyStyle, 'color'))),
              pcolor = polystyles[0],
              popacity = polystyles[1],
              fill = nodeVal(get1(polyStyle, 'fill')),
              outline = nodeVal(get1(polyStyle, 'outline'));
          if (pcolor) properties.fill = pcolor;
          if (!isNaN(popacity)) properties['fill-opacity'] = popacity;
          if (fill) properties['fill-opacity'] = fill === '1' ? properties['fill-opacity'] || 1 : 0;
          if (outline) properties['stroke-opacity'] = outline === '1' ? properties['stroke-opacity'] || 1 : 0;
        }

        if (extendedData) {
          var datas = get(extendedData, 'Data'),
              simpleDatas = get(extendedData, 'SimpleData');

          for (i = 0; i < datas.length; i++) {
            properties[datas[i].getAttribute('name')] = nodeVal(get1(datas[i], 'value'));
          }

          for (i = 0; i < simpleDatas.length; i++) {
            properties[simpleDatas[i].getAttribute('name')] = nodeVal(simpleDatas[i]);
          }
        }

        if (visibility) {
          properties.visibility = nodeVal(visibility);
        }

        if (geomsAndTimes.coordTimes.length) {
          properties.coordTimes = geomsAndTimes.coordTimes.length === 1 ? geomsAndTimes.coordTimes[0] : geomsAndTimes.coordTimes;
        }

        var feature = {
          type: 'Feature',
          geometry: geomsAndTimes.geoms.length === 1 ? geomsAndTimes.geoms[0] : {
            type: 'GeometryCollection',
            geometries: geomsAndTimes.geoms
          },
          properties: properties
        };
        if (attr(root, 'id')) feature.id = attr(root, 'id');
        return [feature];
      }

      return gj;
    },
    gpx: function gpx(doc) {
      var i,
          tracks = get(doc, 'trk'),
          routes = get(doc, 'rte'),
          waypoints = get(doc, 'wpt'),
          // a feature collection
      gj = fc(),
          feature;

      for (i = 0; i < tracks.length; i++) {
        feature = getTrack(tracks[i]);
        if (feature) gj.features.push(feature);
      }

      for (i = 0; i < routes.length; i++) {
        feature = getRoute(routes[i]);
        if (feature) gj.features.push(feature);
      }

      for (i = 0; i < waypoints.length; i++) {
        gj.features.push(getPoint(waypoints[i]));
      }

      function initializeArray(arr, size) {
        for (var h = 0; h < size; h++) {
          arr.push(null);
        }

        return arr;
      }

      function getPoints(node, pointname) {
        var pts = get(node, pointname),
            line = [],
            times = [],
            heartRates = [],
            l = pts.length;
        if (l < 2) return {}; // Invalid line in GeoJSON

        for (var i = 0; i < l; i++) {
          var c = coordPair(pts[i]);
          line.push(c.coordinates);
          if (c.time) times.push(c.time);

          if (c.heartRate || heartRates.length) {
            if (!heartRates.length) initializeArray(heartRates, i);
            heartRates.push(c.heartRate || null);
          }
        }

        return {
          line: line,
          times: times,
          heartRates: heartRates
        };
      }

      function getTrack(node) {
        var segments = get(node, 'trkseg'),
            track = [],
            times = [],
            heartRates = [],
            line;

        for (var i = 0; i < segments.length; i++) {
          line = getPoints(segments[i], 'trkpt');

          if (line) {
            if (line.line) track.push(line.line);
            if (line.times && line.times.length) times.push(line.times);

            if (heartRates.length || line.heartRates && line.heartRates.length) {
              if (!heartRates.length) {
                for (var s = 0; s < i; s++) {
                  heartRates.push(initializeArray([], track[s].length));
                }
              }

              if (line.heartRates && line.heartRates.length) {
                heartRates.push(line.heartRates);
              } else {
                heartRates.push(initializeArray([], line.line.length || 0));
              }
            }
          }
        }

        if (track.length === 0) return;
        var properties = getProperties(node);
        extend(properties, getLineStyle(get1(node, 'extensions')));
        if (times.length) properties.coordTimes = track.length === 1 ? times[0] : times;
        if (heartRates.length) properties.heartRates = track.length === 1 ? heartRates[0] : heartRates;
        return {
          type: 'Feature',
          properties: properties,
          geometry: {
            type: track.length === 1 ? 'LineString' : 'MultiLineString',
            coordinates: track.length === 1 ? track[0] : track
          }
        };
      }

      function getRoute(node) {
        var line = getPoints(node, 'rtept');
        if (!line.line) return;
        var prop = getProperties(node);
        extend(prop, getLineStyle(get1(node, 'extensions')));
        var routeObj = {
          type: 'Feature',
          properties: prop,
          geometry: {
            type: 'LineString',
            coordinates: line.line
          }
        };
        return routeObj;
      }

      function getPoint(node) {
        var prop = getProperties(node);
        extend(prop, getMulti(node, ['sym']));
        return {
          type: 'Feature',
          properties: prop,
          geometry: {
            type: 'Point',
            coordinates: coordPair(node).coordinates
          }
        };
      }

      function getLineStyle(extensions) {
        var style = {};

        if (extensions) {
          var lineStyle = get1(extensions, 'line');

          if (lineStyle) {
            var color = nodeVal(get1(lineStyle, 'color')),
                opacity = (0, _parseFloat2["default"])(nodeVal(get1(lineStyle, 'opacity'))),
                width = (0, _parseFloat2["default"])(nodeVal(get1(lineStyle, 'width')));
            if (color) style.stroke = color;
            if (!isNaN(opacity)) style['stroke-opacity'] = opacity; // GPX width is in mm, convert to px with 96 px per inch

            if (!isNaN(width)) style['stroke-width'] = width * 96 / 25.4;
          }
        }

        return style;
      }

      function getProperties(node) {
        var prop = getMulti(node, ['name', 'cmt', 'desc', 'type', 'time', 'keywords']),
            links = get(node, 'link');
        if (links.length) prop.links = [];

        for (var i = 0, link; i < links.length; i++) {
          link = {
            href: attr(links[i], 'href')
          };
          extend(link, getMulti(links[i], ['text', 'type']));
          prop.links.push(link);
        }

        return prop;
      }

      return gj;
    }
  };
  return t;
}();

exports.toGeoJSON = toGeoJSON;
if (true) module.exports = toGeoJSON;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justen/Projects/Apps/kml_convert/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "xmldom":
/*!*************************!*\
  !*** external "xmldom" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xmldom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Uploader.js":
/*!********************************!*\
  !*** ./components/Uploader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uploader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_7__);



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
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(geojson));
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", file.name.slice(0, -4) + ".json");
  dlAnchorElem.click();
}

function select(e) {
  console.log('gv');
}

function Uploader() {
  var _useState = useState(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_5__["FormRadio"], {
    inline: true,
    name: "filetype",
    checked: true,
    onChange: function onChange() {
      console.log('json');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, ".json"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_5__["FormRadio"], {
    inline: true,
    name: "filetype",
    checked: setFileType = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("setFileType"), "geojson"),
    onChange: function onChange() {
      console.log('geojson');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, ".geojson"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-3366377244" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3366377244",
    __self: this
  }, ".wrapper.jsx-3366377244{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-3366377244:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-3366377244{font-weight:400;font-size:18px;margin-top:10px;}span.jsx-3366377244{font-size:12px;}input[type=\"file\"].jsx-3366377244{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-3366377244{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}a.jsx-3366377244{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRCxBQUdILEFBUUksQUFlSCxZQWhEQSxBQTBCQSxDQXVCZixFQTFCQSxDQUxpQixBQWdCSCxTQWpDQyxBQTBCSCxHQVFFLEdBaEJJLElBU0EsR0ExQkUsRUFZVSxBQXNCVCxPQWhCckIsSUFTb0IsS0ExQkksR0FrQ0osVUFQUCxRQVFPLENBbENBLEVBMkJwQixlQVFtQixDQWxDdUIsZ0JBbUN2QixpQkFDTCxPQW5DQyxBQVNmLEtBMkIyQix5QkFDWixhQUNNLCtCQXJDRyw4REFzQ1AsZUFDakIsQ0F0Q2dDLG1IQUNYLDZGQUNDLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvanVzdGVuL1Byb2plY3RzL0FwcHMva21sX2NvbnZlcnQvY29tcG9uZW50cy9VcGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvR2VvSlNPTiA9IHJlcXVpcmUoJy4uL3N0YXRpYy90b2dlb2pzb24nKVxuXG5pbXBvcnQgeyBGb3JtUmFkaW8gfSBmcm9tICdzaGFyZHMtcmVhY3QnO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcInNoYXJkcy11aS9kaXN0L2Nzcy9zaGFyZHMubWluLmNzc1wiO1xuXG5cbmZ1bmN0aW9uIHVwbG9hZChlKSB7XG4gIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHVybClcbiAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKVxuICB4aHIuc2VuZCgpXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBrbWwgPSB4aHIucmVzcG9uc2VYTUxcbiAgICBjb252ZXJ0KGttbCwgZmlsZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGttbCwgZmlsZSl7XG4gIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgLy8gY29uc3QgZG93bmxvYWQgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChnZW9qc29uKVxuICBjb25zb2xlLmxvZygpXG5cbiAgdmFyIGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2VvanNvbikpO1xuICB2YXIgZGxBbmNob3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQW5jaG9yRWxlbScpO1xuICBkbEFuY2hvckVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCAgICAgZGF0YVN0ciAgICAgKTtcbiAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGUubmFtZS5zbGljZSgwLCAtNCkgKyBcIi5qc29uXCIpO1xuICBkbEFuY2hvckVsZW0uY2xpY2soKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGUpe1xuICBjb25zb2xlLmxvZygnZ3YnKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKCkge1xuICBjb25zdCBbZmlsZVR5cGUsIHNldEZpbGVUeXBlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT4ua21sIGNvbnZlcnRlcjwvaDE+XG4gICAgICA8Rm9ybVJhZGlvXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXG4gICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnanNvbicpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgLmpzb25cbiAgICAgICAgICA8L0Zvcm1SYWRpbz5cbiAgICAgICAgICA8Rm9ybVJhZGlvXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZXRGaWxlVHlwZT1cImdlb2pzb25cIn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW9qc29uJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAuZ2VvanNvblxuICAgICAgICAgIDwvRm9ybVJhZGlvPlxuICAgICAgPHNwYW4+U2VsZWN0IHlvdXIgLmttbCBmaWxlIGJlbG93IHRvIGNvbnZlcnQgYW5kIGF1dG9tYXRpY2FsbHkgZG93bmxvYWQgdGhlIGNvbnZlcnRlZCAuanNvbiBmaWxlPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfZm9ybVwiPlxuICAgICAgICA8YSBpZD1cImRvd25sb2FkQW5jaG9yRWxlbVwiID48L2E+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZV9pbnB1dFwiIG5hbWU9XCJmaWxlX2lucHV0XCIgb25DaGFuZ2U9e3VwbG9hZH0gYWNjZXB0PVwiLmttbFwiPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZV9pbnB1dFwiIGNsYXNzTmFtZT1cInVwbG9hZF9sYWJlbFwiPlNlbGVjdCBGaWxlPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXI6aG92ZXJ7XG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDhweCAxMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICAudXBsb2FkX2xhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2NGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=index.js.b8f341339e71c4ef1f02.hot-update.js.map
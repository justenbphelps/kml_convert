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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    console.log(xhr.responseXML);
    var kml = xhr.responseXML;
    convert(kml);
  };
}

function convert(kml) {
  var geojson = toGeoJSON.kml(kml); // const download = window.URL.createObjectURL(geojson)

  console.log();
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(storageObj));
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "scene.json");
  dlAnchorElem.click();
}

function Uploader() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-302460385" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-302460385",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-302460385" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-302460385",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-302460385",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Upload")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "302460385",
    __self: this
  }, ".wrapper.jsx-302460385{width:350px;height:200px;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-302460385{font-weight:400;font-size:24px;margin-top:10px;}input.jsx-302460385{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}label.jsx-302460385{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#47a66a;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHdUIsQUFXSSxBQUtKLEFBUUksWUF2QkgsQUFnQkEsSUFMRSxBQWFILFNBdkJVLEFBZ0JaLEdBUUUsR0FiSSxJQU1BLEtBUUcsT0F4QkQsQUFXcEIsSUFNb0IsUUFRQSxNQXhCc0IsSUFpQjdCLFFBUU8sR0FQcEIsZUFRbUIsVUF6QkosT0EwQkksaUJBQ0wsWUFDWSx5QkFDWCxhQTVCUyxBQTZCSCw4RUE1QlcsZUE2QmYsZUFDakIscUZBN0JxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2p1c3Rlbi9Qcm9qZWN0cy9BcHBzL2ttbF9jb252ZXJ0L2NvbXBvbmVudHMvVXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0dlb0pTT04gPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9nZW9qc29uJylcblxuZnVuY3Rpb24gdXBsb2FkKGUpIHtcbiAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gIGxldCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QodXJsKVxuICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpXG4gIHhoci5zZW5kKClcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVhNTClcbiAgICBjb25zdCBrbWwgPSB4aHIucmVzcG9uc2VYTUxcbiAgICBjb252ZXJ0KGttbClcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGttbCl7XG4gIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgLy8gY29uc3QgZG93bmxvYWQgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChnZW9qc29uKVxuICBjb25zb2xlLmxvZygpXG5cbiAgdmFyIGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iaikpO1xudmFyIGRsQW5jaG9yRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZEFuY2hvckVsZW0nKTtcbmRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsICAgICBkYXRhU3RyICAgICApO1xuZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwic2NlbmUuanNvblwiKTtcbmRsQW5jaG9yRWxlbS5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcigpIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgxPi5rbWwgY29udmVydGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX2Zvcm1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlX2lucHV0XCIgbmFtZT1cImZpbGVfaW5wdXRcIiBvbkNoYW5nZT17dXBsb2FkfSBhY2NlcHQ9XCIua21sXCI+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlX2lucHV0XCI+VXBsb2FkPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ3YTY2YTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.dc90019513630a0fc50c.hot-update.js.map
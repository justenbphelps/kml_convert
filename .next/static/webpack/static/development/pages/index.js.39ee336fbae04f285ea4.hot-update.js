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
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_5__);

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
    className: "jsx-1207471846" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-1207471846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-1207471846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Select your file below to convert and automatically download the .json file"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1207471846" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-1207471846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-1207471846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-1207471846" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1207471846",
    __self: this
  }, ".wrapper.jsx-1207471846{width:350px;height:200px;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-1207471846{font-weight:400;font-size:18px;margin-top:10px;}span.jsx-1207471846{font-size:12px;}input[type=\"file\"].jsx-1207471846{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-1207471846{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}a.jsx-1207471846{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHdUIsQUFXSSxBQUtELEFBR0gsQUFRSSxBQWVILFlBekNBLEFBbUJBLENBdUJmLEVBMUJBLENBTGlCLEFBZ0JILFNBMUJVLEFBbUJaLEdBUUUsR0FoQkksSUFTQSxLQVFHLE9BM0JELEFBV3BCLElBU29CLFFBUUEsTUEzQnNCLElBb0I3QixRQVFPLEdBUHBCLGVBUW1CLFVBNUJKLE9BNkJJLGlCQUNMLFlBQ2EseUJBQ1osYUEvQlMsQUFnQ0gsOEVBL0JXLGVBZ0NmLGVBQ2pCLHFGQWhDcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9HZW9KU09OID0gcmVxdWlyZSgnLi4vc3RhdGljL3RvZ2VvanNvbicpXG5cbmltcG9ydCB7IEZvcm1SYWRpbyB9IGZyb20gJ3NoYXJkcy1yZWFjdCc7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwic2hhcmRzLXVpL2Rpc3QvY3NzL3NoYXJkcy5taW4uY3NzXCI7XG5cblxuZnVuY3Rpb24gdXBsb2FkKGUpIHtcbiAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gIGxldCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QodXJsKVxuICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpXG4gIHhoci5zZW5kKClcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGttbCA9IHhoci5yZXNwb25zZVhNTFxuICAgIGNvbnZlcnQoa21sLCBmaWxlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnQoa21sLCBmaWxlKXtcbiAgY29uc3QgZ2VvanNvbiA9IHRvR2VvSlNPTi5rbWwoa21sKVxuICAvLyBjb25zdCBkb3dubG9hZCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGdlb2pzb24pXG4gIGNvbnNvbGUubG9nKClcblxuICB2YXIgZGF0YVN0ciA9IFwiZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShnZW9qc29uKSk7XG4gIHZhciBkbEFuY2hvckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWRBbmNob3JFbGVtJyk7XG4gIGRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsICAgICBkYXRhU3RyICAgICApO1xuICBkbEFuY2hvckVsZW0uc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZS5uYW1lICsgXCIuanNvblwiKTtcbiAgZGxBbmNob3JFbGVtLmNsaWNrKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKCkge1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT4ua21sIGNvbnZlcnRlcjwvaDE+XG4gICAgICA8c3Bhbj5TZWxlY3QgeW91ciBmaWxlIGJlbG93IHRvIGNvbnZlcnQgYW5kIGF1dG9tYXRpY2FsbHkgZG93bmxvYWQgdGhlIC5qc29uIGZpbGU8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9mb3JtXCI+XG4gICAgICAgIDxhIGlkPVwiZG93bmxvYWRBbmNob3JFbGVtXCIgPjwvYT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlX2lucHV0XCIgbmFtZT1cImZpbGVfaW5wdXRcIiBvbkNoYW5nZT17dXBsb2FkfSBhY2NlcHQ9XCIua21sXCI+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlX2lucHV0XCIgY2xhc3NOYW1lPVwidXBsb2FkX2xhYmVsXCI+U2VsZWN0IEZpbGU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggNnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnVwbG9hZF9sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjRmYjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.39ee336fbae04f285ea4.hot-update.js.map
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/justen/Projects/Apps/kml_convert/components/Uploader.js";



 // Styles for Shards


 // Conversion script

var toGeoJSON = __webpack_require__(/*! ../static/togeojson */ "./static/togeojson.js");

function Uploader() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('json'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

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
    var geojson = toGeoJSON.kml(kml);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(geojson));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    var extension = fileType;
    dlAnchorElem.setAttribute("download", "".concat(file.name.slice(0, -4), ".").concat(extension));
    dlAnchorElem.click();
    location.reload(true); // Temporary fix. Need to clear file from XHR Request when i have more time
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2835745881" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-2835745881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2835745881" + " " + "radios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-2835745881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Convert to:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormRadio"], {
    inline: true,
    name: "filetype",
    checked: fileType === 'json',
    onChange: function onChange() {
      return setFileType('json');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, ".json"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormRadio"], {
    inline: true,
    name: "filetype",
    checked: fileType === 'geojson',
    onChange: function onChange() {
      return setFileType('geojson');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, ".geojson")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-2835745881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2835745881" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-2835745881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-2835745881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-2835745881" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2835745881",
    __self: this
  }, ".wrapper.jsx-2835745881{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-2835745881:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-2835745881{font-weight:400;font-size:18px;margin-top:10px;}p.jsx-2835745881{margin-bottom:10px;}.radios.jsx-2835745881{margin:5px auto;}span.jsx-2835745881{font-size:12px;}input[type=\"file\"].jsx-2835745881{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-2835745881{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.upload_label.jsx-2835745881:hover{opacity:0.9;}a.jsx-2835745881{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRyxBQUdILEFBR0QsQUFHSCxBQVFJLEFBZUosQUFHQyxZQXpEQSxBQWdDQSxBQXVCZixDQUdBLEVBN0JBLENBWGlCLEFBUWpCLEFBY2MsR0FqQmQsTUF0QmUsQUFnQ0gsR0FRRSxHQXRCSSxJQWVBLEdBaENFLEVBWVUsQUE0QlQsT0F0QnJCLElBZW9CLEtBaENJLEdBd0NKLFVBUFAsUUFRTyxDQXhDQSxFQWlDcEIsZUFRbUIsQ0F4Q3VCLGdCQXlDdkIsaUJBQ0wsT0F6Q0MsQUFTZixLQWlDMkIseUJBQ1osYUFDTSwrQkEzQ0csOERBNENQLGVBQ2pCLENBNUNnQyxtSEFDWCw2RkFDQyxnREFDdEIiLCJmaWxlIjoiL1VzZXJzL2p1c3Rlbi9Qcm9qZWN0cy9BcHBzL2ttbF9jb252ZXJ0L2NvbXBvbmVudHMvVXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1SYWRpbyB9IGZyb20gJ3NoYXJkcy1yZWFjdCc7XG5cbi8vIFN0eWxlcyBmb3IgU2hhcmRzXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcInNoYXJkcy11aS9kaXN0L2Nzcy9zaGFyZHMubWluLmNzc1wiO1xuXG4vLyBDb252ZXJzaW9uIHNjcmlwdFxuY29uc3QgdG9HZW9KU09OID0gcmVxdWlyZSgnLi4vc3RhdGljL3RvZ2VvanNvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKCkge1xuXG4gIGxldCBbZmlsZVR5cGUsIHNldEZpbGVUeXBlXSA9IHVzZVN0YXRlKCdqc29uJyk7XG5cbiAgZnVuY3Rpb24gdXBsb2FkKGUpIHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QodXJsKVxuICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSlcbiAgICB4aHIuc2VuZCgpXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qga21sID0geGhyLnJlc3BvbnNlWE1MXG4gICAgICBjb252ZXJ0KGttbCwgZmlsZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0KGttbCwgZmlsZSl7XG4gICAgY29uc3QgZ2VvanNvbiA9IHRvR2VvSlNPTi5rbWwoa21sKVxuICBcbiAgICB2YXIgZGF0YVN0ciA9IFwiZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShnZW9qc29uKSk7XG4gICAgdmFyIGRsQW5jaG9yRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZEFuY2hvckVsZW0nKTtcbiAgICBkbEFuY2hvckVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhU3RyKTtcbiAgICBsZXQgZXh0ZW5zaW9uID0gZmlsZVR5cGVcbiAgICBkbEFuY2hvckVsZW0uc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgYCR7ZmlsZS5uYW1lLnNsaWNlKDAsIC00KX0uJHtleHRlbnNpb259YCk7XG4gICAgZGxBbmNob3JFbGVtLmNsaWNrKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKHRydWUpOyAvLyBUZW1wb3JhcnkgZml4LiBOZWVkIHRvIGNsZWFyIGZpbGUgZnJvbSBYSFIgUmVxdWVzdCB3aGVuIGkgaGF2ZSBtb3JlIHRpbWVcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT4ua21sIGNvbnZlcnRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgPHA+Q29udmVydCB0bzo8L3A+XG4gICAgICA8Rm9ybVJhZGlvXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXG4gICAgICAgICAgICBjaGVja2VkPXtmaWxlVHlwZSA9PT0gJ2pzb24nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZpbGVUeXBlKCdqc29uJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgIC5qc29uXG4gICAgICAgICAgPC9Gb3JtUmFkaW8+XG4gICAgICAgICAgPEZvcm1SYWRpb1xuICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICBuYW1lPVwiZmlsZXR5cGVcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZmlsZVR5cGUgPT09ICdnZW9qc29uJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGaWxlVHlwZSgnZ2VvanNvbicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAuZ2VvanNvblxuICAgICAgICAgIDwvRm9ybVJhZGlvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4+U2VsZWN0IHlvdXIgLmttbCBmaWxlIGJlbG93IHRvIGNvbnZlcnQgYW5kIGF1dG9tYXRpY2FsbHkgZG93bmxvYWQgdGhlIGNvbnZlcnRlZCAuanNvbiBmaWxlPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfZm9ybVwiPlxuICAgICAgICA8YSBpZD1cImRvd25sb2FkQW5jaG9yRWxlbVwiID48L2E+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZV9pbnB1dFwiIG5hbWU9XCJmaWxlX2lucHV0XCIgb25DaGFuZ2U9e3VwbG9hZH0gYWNjZXB0PVwiLmttbFwiPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZV9pbnB1dFwiIGNsYXNzTmFtZT1cInVwbG9hZF9sYWJlbFwiPlNlbGVjdCBGaWxlPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXI6aG92ZXJ7XG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDhweCAxMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJhZGlvcyB7XG4gICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnVwbG9hZF9sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjRmYjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC51cGxvYWRfbGFiZWw6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f6f8e92579745cc1de23.hot-update.js.map
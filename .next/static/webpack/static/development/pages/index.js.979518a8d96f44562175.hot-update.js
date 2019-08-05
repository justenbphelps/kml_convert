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
    className: "jsx-1705603254" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1705603254",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1705603254" + " " + "radios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1705603254",
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
    className: "jsx-1705603254",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1705603254" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-1705603254",
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
    className: "jsx-1705603254",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-1705603254" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1705603254",
    __self: this
  }, ".wrapper.jsx-1705603254{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-1705603254:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-1705603254{font-weight:400;font-size:18px;margin-top:10px;}p.jsx-1705603254{margin-bottom:10px;}span.jsx-1705603254{font-size:12px;}input[type=\"file\"].jsx-1705603254{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-1705603254{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.upload_label.jsx-1705603254:hover{opacity:0.9;}a.jsx-1705603254{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRyxBQUdKLEFBR0gsQUFRSSxBQWVKLEFBR0MsWUF0REEsQUE2QkEsQUF1QmYsQ0FHQSxFQTdCQSxDQVJpQixBQW1CSCxHQWRkLE1BdEJlLEFBNkJILEdBUUUsR0FuQkksSUFZQSxHQTdCRSxFQVlVLEFBeUJULE9BbkJyQixJQVlvQixLQTdCSSxHQXFDSixVQVBQLFFBUU8sQ0FyQ0EsRUE4QnBCLGVBUW1CLENBckN1QixnQkFzQ3ZCLGlCQUNMLE9BdENDLEFBU2YsS0E4QjJCLHlCQUNaLGFBQ00sK0JBeENHLDhEQXlDUCxlQUNqQixDQXpDZ0MsbUhBQ1gsNkZBQ0MsZ0RBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtUmFkaW8gfSBmcm9tICdzaGFyZHMtcmVhY3QnO1xuXG4vLyBTdHlsZXMgZm9yIFNoYXJkc1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCJzaGFyZHMtdWkvZGlzdC9jc3Mvc2hhcmRzLm1pbi5jc3NcIjtcblxuLy8gQ29udmVyc2lvbiBzY3JpcHRcbmNvbnN0IHRvR2VvSlNPTiA9IHJlcXVpcmUoJy4uL3N0YXRpYy90b2dlb2pzb24nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcigpIHtcblxuICBsZXQgW2ZpbGVUeXBlLCBzZXRGaWxlVHlwZV0gPSB1c2VTdGF0ZSgnanNvbicpO1xuXG4gIGZ1bmN0aW9uIHVwbG9hZChlKSB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHVybClcbiAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpXG4gICAgeGhyLnNlbmQoKVxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGttbCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgY29udmVydChrbWwsIGZpbGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydChrbWwsIGZpbGUpe1xuICAgIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgXG4gICAgdmFyIGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2VvanNvbikpO1xuICAgIHZhciBkbEFuY2hvckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWRBbmNob3JFbGVtJyk7XG4gICAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZGF0YVN0cik7XG4gICAgbGV0IGV4dGVuc2lvbiA9IGZpbGVUeXBlXG4gICAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke2ZpbGUubmFtZS5zbGljZSgwLCAtNCl9LiR7ZXh0ZW5zaW9ufWApO1xuICAgIGRsQW5jaG9yRWxlbS5jbGljaygpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTsgLy8gVGVtcG9yYXJ5IGZpeC4gTmVlZCB0byBjbGVhciBmaWxlIGZyb20gWEhSIFJlcXVlc3Qgd2hlbiBpIGhhdmUgbW9yZSB0aW1lXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8aDE+LmttbCBjb252ZXJ0ZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb3NcIj5cbiAgICAgIDxwPkNvbnZlcnQgdG86PC9wPlxuICAgICAgPEZvcm1SYWRpb1xuICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICBuYW1lPVwiZmlsZXR5cGVcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZmlsZVR5cGUgPT09ICdqc29uJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGaWxlVHlwZSgnanNvbicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAuanNvblxuICAgICAgICAgIDwvRm9ybVJhZGlvPlxuICAgICAgICAgIDxGb3JtUmFkaW9cbiAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgbmFtZT1cImZpbGV0eXBlXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbGVUeXBlID09PSAnZ2VvanNvbid9XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RmlsZVR5cGUoJ2dlb2pzb24nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgLmdlb2pzb25cbiAgICAgICAgICA8L0Zvcm1SYWRpbz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuPlNlbGVjdCB5b3VyIC5rbWwgZmlsZSBiZWxvdyB0byBjb252ZXJ0IGFuZCBhdXRvbWF0aWNhbGx5IGRvd25sb2FkIHRoZSBjb252ZXJ0ZWQgLmpzb24gZmlsZTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX2Zvcm1cIj5cbiAgICAgICAgPGEgaWQ9XCJkb3dubG9hZEFuY2hvckVsZW1cIiA+PC9hPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVfaW5wdXRcIiBuYW1lPVwiZmlsZV9pbnB1dFwiIG9uQ2hhbmdlPXt1cGxvYWR9IGFjY2VwdD1cIi5rbWxcIj48L2lucHV0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVfaW5wdXRcIiBjbGFzc05hbWU9XCJ1cGxvYWRfbGFiZWxcIj5TZWxlY3QgRmlsZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA2cHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyOmhvdmVye1xuICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA4cHggMTJweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICAudXBsb2FkX2xhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2NGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnVwbG9hZF9sYWJlbDpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.979518a8d96f44562175.hot-update.js.map
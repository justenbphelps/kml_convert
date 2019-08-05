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




var toGeoJSON = __webpack_require__(/*! ../static/togeojson */ "./static/togeojson.js");




function Uploader() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('json'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  function convert(kml, file) {
    var geojson = toGeoJSON.kml(kml); // const download = window.URL.createObjectURL(geojson)

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(geojson));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", file.name.slice(0, -4) + {
      fileType: fileType
    });
    dlAnchorElem.click();
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "radios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_4__["FormRadio"], {
    inline: true,
    name: "filetype",
    checked: fileType === 'json',
    onChange: function onChange() {
      return setFileType('json');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
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
      lineNumber: 39
    },
    __self: this
  }, ".geojson")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "file",
    id: "file_input",
    name: "file_input",
    onChange: upload,
    accept: ".kml",
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-3366377244" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3366377244",
    __self: this
  }, ".wrapper.jsx-3366377244{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-3366377244:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-3366377244{font-weight:400;font-size:18px;margin-top:10px;}span.jsx-3366377244{font-size:12px;}input[type=\"file\"].jsx-3366377244{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-3366377244{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}a.jsx-3366377244{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRCxBQUdILEFBUUksQUFlSCxZQWhEQSxBQTBCQSxDQXVCZixFQTFCQSxDQUxpQixBQWdCSCxTQWpDQyxBQTBCSCxHQVFFLEdBaEJJLElBU0EsR0ExQkUsRUFZVSxBQXNCVCxPQWhCckIsSUFTb0IsS0ExQkksR0FrQ0osVUFQUCxRQVFPLENBbENBLEVBMkJwQixlQVFtQixDQWxDdUIsZ0JBbUN2QixpQkFDTCxPQW5DQyxBQVNmLEtBMkIyQix5QkFDWixhQUNNLCtCQXJDRyw4REFzQ1AsZUFDakIsQ0F0Q2dDLG1IQUNYLDZGQUNDLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvanVzdGVuL1Byb2plY3RzL0FwcHMva21sX2NvbnZlcnQvY29tcG9uZW50cy9VcGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB0b0dlb0pTT04gPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9nZW9qc29uJylcblxuaW1wb3J0IHsgRm9ybVJhZGlvIH0gZnJvbSAnc2hhcmRzLXJlYWN0JztcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCJzaGFyZHMtdWkvZGlzdC9jc3Mvc2hhcmRzLm1pbi5jc3NcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKCkge1xuXG4gIGxldCBbZmlsZVR5cGUsIHNldEZpbGVUeXBlXSA9IHVzZVN0YXRlKCdqc29uJyk7XG5cbiAgZnVuY3Rpb24gY29udmVydChrbWwsIGZpbGUpe1xuICAgIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgICAvLyBjb25zdCBkb3dubG9hZCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGdlb2pzb24pXG4gIFxuICAgIHZhciBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGdlb2pzb24pKTtcbiAgICB2YXIgZGxBbmNob3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQW5jaG9yRWxlbScpO1xuICAgIGRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsICAgICBkYXRhU3RyICAgICApO1xuICAgIGRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlLm5hbWUuc2xpY2UoMCwgLTQpICsgeyBmaWxlVHlwZSB9KTtcbiAgICBkbEFuY2hvckVsZW0uY2xpY2soKTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT4ua21sIGNvbnZlcnRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgPEZvcm1SYWRpb1xuICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICBuYW1lPVwiZmlsZXR5cGVcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZmlsZVR5cGUgPT09ICdqc29uJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGaWxlVHlwZSgnanNvbicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAuanNvblxuICAgICAgICAgIDwvRm9ybVJhZGlvPlxuICAgICAgICAgIDxGb3JtUmFkaW9cbiAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgbmFtZT1cImZpbGV0eXBlXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbGVUeXBlID09PSAnZ2VvanNvbid9XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RmlsZVR5cGUoJ2dlb2pzb24nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgLmdlb2pzb25cbiAgICAgICAgICA8L0Zvcm1SYWRpbz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuPlNlbGVjdCB5b3VyIC5rbWwgZmlsZSBiZWxvdyB0byBjb252ZXJ0IGFuZCBhdXRvbWF0aWNhbGx5IGRvd25sb2FkIHRoZSBjb252ZXJ0ZWQgLmpzb24gZmlsZTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX2Zvcm1cIj5cbiAgICAgICAgPGEgaWQ9XCJkb3dubG9hZEFuY2hvckVsZW1cIiA+PC9hPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVfaW5wdXRcIiBuYW1lPVwiZmlsZV9pbnB1dFwiIG9uQ2hhbmdlPXt1cGxvYWR9IGFjY2VwdD1cIi5rbWxcIj48L2lucHV0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVfaW5wdXRcIiBjbGFzc05hbWU9XCJ1cGxvYWRfbGFiZWxcIj5TZWxlY3QgRmlsZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA2cHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyOmhvdmVye1xuICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA4cHggMTJweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLnVwbG9hZF9sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjRmYjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a1558cd10f4b161399a9.hot-update.js.map
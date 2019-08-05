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
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "radios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 42
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
      lineNumber: 50
    },
    __self: this
  }, ".geojson")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3366377244" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-3366377244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-3366377244" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3366377244",
    __self: this
  }, ".wrapper.jsx-3366377244{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-3366377244:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-3366377244{font-weight:400;font-size:18px;margin-top:10px;}span.jsx-3366377244{font-size:12px;}input[type=\"file\"].jsx-3366377244{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-3366377244{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}a.jsx-3366377244{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRCxBQUdILEFBUUksQUFlSCxZQWhEQSxBQTBCQSxDQXVCZixFQTFCQSxDQUxpQixBQWdCSCxTQWpDQyxBQTBCSCxHQVFFLEdBaEJJLElBU0EsR0ExQkUsRUFZVSxBQXNCVCxPQWhCckIsSUFTb0IsS0ExQkksR0FrQ0osVUFQUCxRQVFPLENBbENBLEVBMkJwQixlQVFtQixDQWxDdUIsZ0JBbUN2QixpQkFDTCxPQW5DQyxBQVNmLEtBMkIyQix5QkFDWixhQUNNLCtCQXJDRyw4REFzQ1AsZUFDakIsQ0F0Q2dDLG1IQUNYLDZGQUNDLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvanVzdGVuL1Byb2plY3RzL0FwcHMva21sX2NvbnZlcnQvY29tcG9uZW50cy9VcGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybVJhZGlvIH0gZnJvbSAnc2hhcmRzLXJlYWN0JztcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwic2hhcmRzLXVpL2Rpc3QvY3NzL3NoYXJkcy5taW4uY3NzXCI7XG5cbmNvbnN0IHRvR2VvSlNPTiA9IHJlcXVpcmUoJy4uL3N0YXRpYy90b2dlb2pzb24nKVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcigpIHtcblxuICBsZXQgW2ZpbGVUeXBlLCBzZXRGaWxlVHlwZV0gPSB1c2VTdGF0ZSgnanNvbicpO1xuXG4gIGZ1bmN0aW9uIHVwbG9hZChlKSB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHVybClcbiAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpXG4gICAgeGhyLnNlbmQoKVxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGttbCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgY29udmVydChrbWwsIGZpbGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydChrbWwsIGZpbGUpe1xuICAgIGNvbnN0IGdlb2pzb24gPSB0b0dlb0pTT04ua21sKGttbClcbiAgXG4gICAgdmFyIGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2VvanNvbikpO1xuICAgIHZhciBkbEFuY2hvckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWRBbmNob3JFbGVtJyk7XG4gICAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgICAgIGRhdGFTdHIgICAgICk7XG4gICAgbGV0IGV4dGVuc2lvbiA9IGZpbGVUeXBlXG4gICAgZGxBbmNob3JFbGVtLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke2ZpbGUubmFtZS5zbGljZSgwLCAtNCl9LiR7ZXh0ZW5zaW9ufWApO1xuICAgIGRsQW5jaG9yRWxlbS5jbGljaygpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgxPi5rbWwgY29udmVydGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICA8Rm9ybVJhZGlvXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXG4gICAgICAgICAgICBjaGVja2VkPXtmaWxlVHlwZSA9PT0gJ2pzb24nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZpbGVUeXBlKCdqc29uJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgIC5qc29uXG4gICAgICAgICAgPC9Gb3JtUmFkaW8+XG4gICAgICAgICAgPEZvcm1SYWRpb1xuICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICBuYW1lPVwiZmlsZXR5cGVcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZmlsZVR5cGUgPT09ICdnZW9qc29uJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGaWxlVHlwZSgnZ2VvanNvbicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAuZ2VvanNvblxuICAgICAgICAgIDwvRm9ybVJhZGlvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4+U2VsZWN0IHlvdXIgLmttbCBmaWxlIGJlbG93IHRvIGNvbnZlcnQgYW5kIGF1dG9tYXRpY2FsbHkgZG93bmxvYWQgdGhlIGNvbnZlcnRlZCAuanNvbiBmaWxlPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfZm9ybVwiPlxuICAgICAgICA8YSBpZD1cImRvd25sb2FkQW5jaG9yRWxlbVwiID48L2E+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZV9pbnB1dFwiIG5hbWU9XCJmaWxlX2lucHV0XCIgb25DaGFuZ2U9e3VwbG9hZH0gYWNjZXB0PVwiLmttbFwiPjwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZV9pbnB1dFwiIGNsYXNzTmFtZT1cInVwbG9hZF9sYWJlbFwiPlNlbGVjdCBGaWxlPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXI6aG92ZXJ7XG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDhweCAxMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICAudXBsb2FkX2xhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2NGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.8826887daaf1e9fb4525.hot-update.js.map
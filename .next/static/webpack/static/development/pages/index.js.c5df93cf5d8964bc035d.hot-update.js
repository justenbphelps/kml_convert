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
    className: "jsx-562197966" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-562197966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, ".kml converter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-562197966" + " " + "radios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-562197966",
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
    className: "jsx-562197966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Select your .kml file below to convert and automatically download the converted .json file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-562197966" + " " + "upload_form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    id: "downloadAnchorElem",
    className: "jsx-562197966",
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
    className: "jsx-562197966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "file_input",
    className: "jsx-562197966" + " " + "upload_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Select File")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "562197966",
    __self: this
  }, ".wrapper.jsx-562197966{width:350px;height:200px;padding:10px;text-align:center;background-color:#fff;border-radius:4px;box-shadow:2px 6px 10px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.4s;transition:all 0.4s;}.wrapper.jsx-562197966:hover{box-shadow:4px 8px 12px rgba(0,0,0,0.2);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}h1.jsx-562197966{font-weight:400;font-size:18px;margin-top:10px;}p.jsx-562197966{margin-bottom:10px;}.radios.jsx-562197966{margin:5px 0;}span.jsx-562197966{font-size:12px;}input[type=\"file\"].jsx-562197966{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}.upload_label.jsx-562197966{font-weight:700;width:150px;height:35px;margin-bottom:10px;border-radius:4px;text-align:center;line-height:150%;font-size:1.15em;color:white;background-color:#4264fb;display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.upload_label.jsx-562197966:hover{opacity:0.9;}a.jsx-562197966{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0ZW4vUHJvamVjdHMvQXBwcy9rbWxfY29udmVydC9jb21wb25lbnRzL1VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHdUIsQUFjNEIsQUFJeEIsQUFLRyxBQUdOLEFBR0UsQUFHSCxBQVFJLEFBZUosQUFHQyxZQXpEQSxBQWdDQSxBQXVCZixDQTdCQSxBQWdDQSxFQTdCQSxDQVhpQixBQXNCSCxHQWpCZCxNQXRCZSxBQWdDSCxHQVFFLEdBdEJJLElBZUEsR0FoQ0UsRUFZVSxBQTRCVCxPQXRCckIsSUFlb0IsS0FoQ0ksR0F3Q0osVUFQUCxRQVFPLENBeENBLEVBaUNwQixlQVFtQixDQXhDdUIsZ0JBeUN2QixpQkFDTCxPQXpDQyxBQVNmLEtBaUMyQix5QkFDWixhQUNNLCtCQTNDRyw4REE0Q1AsZUFDakIsQ0E1Q2dDLG1IQUNYLDZGQUNDLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvanVzdGVuL1Byb2plY3RzL0FwcHMva21sX2NvbnZlcnQvY29tcG9uZW50cy9VcGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybVJhZGlvIH0gZnJvbSAnc2hhcmRzLXJlYWN0JztcblxuLy8gU3R5bGVzIGZvciBTaGFyZHNcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwic2hhcmRzLXVpL2Rpc3QvY3NzL3NoYXJkcy5taW4uY3NzXCI7XG5cbi8vIENvbnZlcnNpb24gc2NyaXB0XG5jb25zdCB0b0dlb0pTT04gPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9nZW9qc29uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkZXIoKSB7XG5cbiAgbGV0IFtmaWxlVHlwZSwgc2V0RmlsZVR5cGVdID0gdXNlU3RhdGUoJ2pzb24nKTtcblxuICBmdW5jdGlvbiB1cGxvYWQoZSkge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgIGxldCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh1cmwpXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKVxuICAgIHhoci5zZW5kKClcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBrbWwgPSB4aHIucmVzcG9uc2VYTUxcbiAgICAgIGNvbnZlcnQoa21sLCBmaWxlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnQoa21sLCBmaWxlKXtcbiAgICBjb25zdCBnZW9qc29uID0gdG9HZW9KU09OLmttbChrbWwpXG4gIFxuICAgIHZhciBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGdlb2pzb24pKTtcbiAgICB2YXIgZGxBbmNob3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQW5jaG9yRWxlbScpO1xuICAgIGRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRhdGFTdHIpO1xuICAgIGxldCBleHRlbnNpb24gPSBmaWxlVHlwZVxuICAgIGRsQW5jaG9yRWxlbS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgJHtmaWxlLm5hbWUuc2xpY2UoMCwgLTQpfS4ke2V4dGVuc2lvbn1gKTtcbiAgICBkbEFuY2hvckVsZW0uY2xpY2soKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7IC8vIFRlbXBvcmFyeSBmaXguIE5lZWQgdG8gY2xlYXIgZmlsZSBmcm9tIFhIUiBSZXF1ZXN0IHdoZW4gaSBoYXZlIG1vcmUgdGltZVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgxPi5rbWwgY29udmVydGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICA8cD5Db252ZXJ0IHRvOjwvcD5cbiAgICAgIDxGb3JtUmFkaW9cbiAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgbmFtZT1cImZpbGV0eXBlXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbGVUeXBlID09PSAnanNvbid9XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RmlsZVR5cGUoJ2pzb24nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgLmpzb25cbiAgICAgICAgICA8L0Zvcm1SYWRpbz5cbiAgICAgICAgICA8Rm9ybVJhZGlvXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXG4gICAgICAgICAgICBjaGVja2VkPXtmaWxlVHlwZSA9PT0gJ2dlb2pzb24nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZpbGVUeXBlKCdnZW9qc29uJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgIC5nZW9qc29uXG4gICAgICAgICAgPC9Gb3JtUmFkaW8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8c3Bhbj5TZWxlY3QgeW91ciAua21sIGZpbGUgYmVsb3cgdG8gY29udmVydCBhbmQgYXV0b21hdGljYWxseSBkb3dubG9hZCB0aGUgY29udmVydGVkIC5qc29uIGZpbGU8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9mb3JtXCI+XG4gICAgICAgIDxhIGlkPVwiZG93bmxvYWRBbmNob3JFbGVtXCIgPjwvYT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlX2lucHV0XCIgbmFtZT1cImZpbGVfaW5wdXRcIiBvbkNoYW5nZT17dXBsb2FkfSBhY2NlcHQ9XCIua21sXCI+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlX2lucHV0XCIgY2xhc3NOYW1lPVwidXBsb2FkX2xhYmVsXCI+U2VsZWN0IEZpbGU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggNnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlcjpob3ZlcntcbiAgICAgICAgICBib3gtc2hhZG93OiA0cHggOHB4IDEycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucmFkaW9zIHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgICAudXBsb2FkX2xhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2NGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnVwbG9hZF9sYWJlbDpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/justen/Projects/Apps/kml_convert/components/Uploader.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c5df93cf5d8964bc035d.hot-update.js.map
webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./src/pages/sitemap.xml.jsx":
/*!***********************************!*\
  !*** ./src/pages/sitemap.xml.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var src_shared_monthLongName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/monthLongName */ \"./src/shared/monthLongName.js\");\n\n\nvar formatDate = function formatDate(timestamp) {\n  var date = new Date(timestamp);\n  return \"\".concat(date.getFullYear(), \"-\").concat(date.getMonth() + 1, \"-\").concat(date.getDate());\n};\n\nvar asOf = function asOf() {\n  return formatDate(new Date());\n};\n\nvar toUrl = function toUrl(host, route) {\n  return \"<url>\\n  <loc>http://www.\".concat(host).concat(route, \"</loc>\\n  <lastmod>\").concat(asOf(), \"</lastmod>\\n  <changefreq>monthly</changefreq>\\n</url>\");\n};\n\nvar createSitemap = function createSitemap(host, routes) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n    <urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\">\\n    \".concat(routes.map(function (route) {\n    return toUrl(host, route);\n  }).join(''), \"\\n    <url>\\n      <loc>https://comcast.github.io/humans.txt</loc>\\n      <lastmod>\").concat(asOf(), \"</lastmod>\\n      <changefreq>monthly</changefreq>\\n    </url>\\n    </urlset>\");\n};\n\nvar Sitemap = function Sitemap() {};\n\n_c = Sitemap;\n\nSitemap.getInitialProps = function (_ref) {\n  var res = _ref.res,\n      req = _ref.req;\n  var routes = ['', '/projects', '/people', '/community', '/events', '/blog'];\n  var sitemap = createSitemap(req.headers.host, routes);\n  res.setHeader('Content-Type', 'text/xml');\n  res.write(sitemap);\n  res.end();\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitemap);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sitemap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeD84ODIzIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYXNPZiIsInRvVXJsIiwiaG9zdCIsInJvdXRlIiwiY3JlYXRlU2l0ZW1hcCIsInJvdXRlcyIsIm1hcCIsImpvaW4iLCJTaXRlbWFwIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwicmVxIiwic2l0ZW1hcCIsImhlYWRlcnMiLCJzZXRIZWFkZXIiLCJ3cml0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUNoQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixTQUFULENBQWI7QUFDQSxtQkFBVUMsSUFBSSxDQUFDRSxXQUFMLEVBQVYsY0FBZ0NGLElBQUksQ0FBQ0csUUFBTCxLQUFrQixDQUFsRCxjQUF1REgsSUFBSSxDQUFDSSxPQUFMLEVBQXZEO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU1QLFVBQVUsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FBaEI7QUFBQSxDQUFiOztBQUVBLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRDQUNNRCxJQUROLFNBQ2FDLEtBRGIsZ0NBRURILElBQUksRUFGSDtBQUFBLENBQWQ7O0FBTUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQU9HLE1BQVA7QUFBQSx1SUFFaEJBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNILEtBQUQ7QUFBQSxXQUFXRixLQUFLLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFoQjtBQUFBLEdBQVgsRUFBMENJLElBQTFDLENBQStDLEVBQS9DLENBRmdCLGdHQUtMUCxJQUFJLEVBTEM7QUFBQSxDQUF0Qjs7QUFVQSxJQUFNUSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNLENBQUUsQ0FBeEI7O0tBQU1BLE87O0FBRU5BLE9BQU8sQ0FBQ0MsZUFBUixHQUEwQixnQkFBa0I7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDMUMsTUFBTU4sTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLFdBQUwsRUFBa0IsU0FBbEIsRUFBNkIsWUFBN0IsRUFBMkMsU0FBM0MsRUFBc0QsT0FBdEQsQ0FBZjtBQUNBLE1BQU1PLE9BQU8sR0FBR1IsYUFBYSxDQUFDTyxHQUFHLENBQUNFLE9BQUosQ0FBWVgsSUFBYixFQUFtQkcsTUFBbkIsQ0FBN0I7QUFFQUssS0FBRyxDQUFDSSxTQUFKLENBQWMsY0FBZCxFQUE4QixVQUE5QjtBQUNBSixLQUFHLENBQUNLLEtBQUosQ0FBVUgsT0FBVjtBQUNBRixLQUFHLENBQUNNLEdBQUo7QUFDQSxTQUFPTixHQUFQO0FBQ0QsQ0FSRDs7QUFVZUYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2l0ZW1hcC54bWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9udGhMb25nTmFtZSB9IGZyb20gJ3NyYy9zaGFyZWQvbW9udGhMb25nTmFtZSc7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAodGltZXN0YW1wKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcbn07XG5cbmNvbnN0IGFzT2YgPSAoKSA9PiBmb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xuXG5jb25zdCB0b1VybCA9IChob3N0LCByb3V0ZSkgPT4gYDx1cmw+XG4gIDxsb2M+aHR0cDovL3d3dy4ke2hvc3R9JHtyb3V0ZX08L2xvYz5cbiAgPGxhc3Rtb2Q+JHthc09mKCl9PC9sYXN0bW9kPlxuICA8Y2hhbmdlZnJlcT5tb250aGx5PC9jaGFuZ2VmcmVxPlxuPC91cmw+YDtcblxuY29uc3QgY3JlYXRlU2l0ZW1hcCA9IChob3N0LCByb3V0ZXMpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICA8dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxuICAgICR7cm91dGVzLm1hcCgocm91dGUpID0+IHRvVXJsKGhvc3QsIHJvdXRlKSkuam9pbignJyl9XG4gICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly9jb21jYXN0LmdpdGh1Yi5pby9odW1hbnMudHh0PC9sb2M+XG4gICAgICA8bGFzdG1vZD4ke2FzT2YoKX08L2xhc3Rtb2Q+XG4gICAgICA8Y2hhbmdlZnJlcT5tb250aGx5PC9jaGFuZ2VmcmVxPlxuICAgIDwvdXJsPlxuICAgIDwvdXJsc2V0PmA7XG5cbmNvbnN0IFNpdGVtYXAgPSAoKSA9PiB7fTtcblxuU2l0ZW1hcC5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlcyA9IFsnJywgJy9wcm9qZWN0cycsICcvcGVvcGxlJywgJy9jb21tdW5pdHknLCAnL2V2ZW50cycsICcvYmxvZyddO1xuICBjb25zdCBzaXRlbWFwID0gY3JlYXRlU2l0ZW1hcChyZXEuaGVhZGVycy5ob3N0LCByb3V0ZXMpO1xuXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3htbCcpO1xuICByZXMud3JpdGUoc2l0ZW1hcCk7XG4gIHJlcy5lbmQoKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVtYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sitemap.xml.jsx\n");

/***/ })

})
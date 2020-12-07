webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Pagination/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Pagination/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Pagination/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar paginate = function paginate(currentPage, endPage, onPageSelect) {\n  var n = 0;\n  var pages = [];\n  var span = currentPage <= currentPage + 2 || currentPage - 2 >= currentPage;\n\n  while (n < endPage) {\n    if (n + 1 < currentPage + 5 || (n + 1) % 5 === 0) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick(e) {\n          return onPageSelect(e);\n        },\n        value: n,\n        className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"], \" \").concat(currentPage === n ? _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"selected\"] : null),\n        children: n + 1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 72\n      }, _this));\n    } else if (span && (n + 1) % 5 === 0) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: \"...\"\n      }, void 0, false));\n    }\n\n    n += 1;\n  }\n\n  return pages;\n};\n\nvar Pagination = function Pagination(_ref) {\n  var itemType = _ref.itemType,\n      count = _ref.count,\n      currentPage = _ref.currentPage,\n      onPageSelect = _ref.onPageSelect;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagination\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"repoCount\"],\n      children: [count, \" \", count > 1 ? itemType[1] : itemType[0]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, _this), count > 10 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"paginationButtons\"],\n      children: [\"\\u2190\", paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect), \"\\u2192\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagesCount\"],\n      children: [\"page \", parseInt(currentPage, 10) + 1, \" of \", Math.ceil(count / 10)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nPagination.propTypes = {\n  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired,\n  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  onPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3g/ZjE2MCJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsImN1cnJlbnRQYWdlIiwiZW5kUGFnZSIsIm9uUGFnZVNlbGVjdCIsIm4iLCJwYWdlcyIsInNwYW4iLCJwdXNoIiwiZSIsInBhZ2UiLCJzZWxlY3RlZCIsIlBhZ2luYXRpb24iLCJpdGVtVHlwZSIsImNvdW50IiwicGFnaW5hdGlvbiIsInJlcG9Db3VudCIsInBhZ2luYXRpb25CdXR0b25zIiwicGFyc2VJbnQiLCJNYXRoIiwiY2VpbCIsInBhZ2VzQ291bnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQVNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFdBQUQsRUFBY0MsT0FBZCxFQUF1QkMsWUFBdkIsRUFBd0M7QUFDdkQsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBLE1BQU1DLElBQUksR0FBS0wsV0FBVyxJQUFJQSxXQUFXLEdBQUcsQ0FBOUIsSUFBcUNBLFdBQVcsR0FBRyxDQUFkLElBQW1CQSxXQUF0RTs7QUFDQSxTQUFPRyxDQUFDLEdBQUdGLE9BQVgsRUFBb0I7QUFDbEIsUUFBS0UsQ0FBQyxHQUFHLENBQUosR0FBUUgsV0FBVyxHQUFHLENBQXZCLElBQThCLENBQUNHLENBQUMsR0FBRyxDQUFMLElBQVUsQ0FBVixLQUFnQixDQUFsRCxFQUFzRDtBQUFFQyxXQUFLLENBQUNFLElBQU4sZUFBVztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPTCxZQUFZLENBQUNLLENBQUQsQ0FBbkI7QUFBQSxTQUEvQjtBQUF1RCxhQUFLLEVBQUVKLENBQTlEO0FBQWlFLGlCQUFTLFlBQUtLLHNEQUFMLGNBQWFSLFdBQVcsS0FBS0csQ0FBaEIsR0FBb0JNLDBEQUFwQixHQUErQixJQUE1QyxDQUExRTtBQUFBLGtCQUErSE4sQ0FBQyxHQUFHO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDtBQUE2SixLQUFyTixNQUEyTixJQUFJRSxJQUFJLElBQUssQ0FBQ0YsQ0FBQyxHQUFHLENBQUwsSUFBVSxDQUFWLEtBQWdCLENBQTdCLEVBQWlDO0FBQUVDLFdBQUssQ0FBQ0UsSUFBTixlQUFXO0FBQUE7QUFBQSx1QkFBWDtBQUF1Qjs7QUFDclJILEtBQUMsSUFBSSxDQUFMO0FBQ0Q7O0FBQ0QsU0FBT0MsS0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUNqQkMsUUFEaUIsUUFDakJBLFFBRGlCO0FBQUEsTUFFakJDLEtBRmlCLFFBRWpCQSxLQUZpQjtBQUFBLE1BR2pCWixXQUhpQixRQUdqQkEsV0FIaUI7QUFBQSxNQUlqQkUsWUFKaUIsUUFJakJBLFlBSmlCO0FBQUEsc0JBTWpCO0FBQUssYUFBUyxFQUFFVyw0REFBaEI7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBRUMsMkRBQWQ7QUFBQSxpQkFBMEJGLEtBQTFCLE9BQWtDQSxLQUFLLEdBQUcsQ0FBUixHQUFZRCxRQUFRLENBQUMsQ0FBRCxDQUFwQixHQUEwQkEsUUFBUSxDQUFDLENBQUQsQ0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0MsS0FBSyxHQUFHLEVBQVIsaUJBQ0M7QUFBRyxlQUFTLEVBQUVHLG1FQUFkO0FBQUEsMkJBRUdoQixRQUFRLENBQUNpQixRQUFRLENBQUNoQixXQUFELEVBQWMsRUFBZCxDQUFULEVBQTRCaUIsSUFBSSxDQUFDQyxJQUFMLENBQVVOLEtBQUssR0FBRyxFQUFsQixDQUE1QixFQUFtRFYsWUFBbkQsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVNFO0FBQUcsZUFBUyxFQUFFaUIsNERBQWQ7QUFBQSwwQkFBZ0NILFFBQVEsQ0FBQ2hCLFdBQUQsRUFBYyxFQUFkLENBQVIsR0FBNEIsQ0FBNUQsVUFBbUVpQixJQUFJLENBQUNDLElBQUwsQ0FBVU4sS0FBSyxHQUFHLEVBQWxCLENBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5pQjtBQUFBLENBQW5COztLQUFNRixVO0FBbUJTQSx5RUFBZjtBQUVBQSxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDckJULFVBQVEsRUFBRVUsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsVUFEUDtBQUVyQlgsT0FBSyxFQUFFUyxpREFBUyxDQUFDRyxNQUFWLENBQWlCRCxVQUZIO0FBR3JCdkIsYUFBVyxFQUFFcUIsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFIVDtBQUlyQnJCLGNBQVksRUFBRW1CLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFKUixDQUF2QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgcGFnaW5hdGlvbixcbiAgcGFnZSxcbiAgcmVwb0NvdW50LFxuICBwYWdpbmF0aW9uQnV0dG9ucyxcbiAgcGFnZXNDb3VudCxcbiAgc2VsZWN0ZWQsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHBhZ2luYXRlID0gKGN1cnJlbnRQYWdlLCBlbmRQYWdlLCBvblBhZ2VTZWxlY3QpID0+IHtcbiAgbGV0IG4gPSAwO1xuICBjb25zdCBwYWdlcyA9IFtdO1xuICBjb25zdCBzcGFuID0gKChjdXJyZW50UGFnZSA8PSBjdXJyZW50UGFnZSArIDIpIHx8IChjdXJyZW50UGFnZSAtIDIgPj0gY3VycmVudFBhZ2UpKTtcbiAgd2hpbGUgKG4gPCBlbmRQYWdlKSB7XG4gICAgaWYgKChuICsgMSA8IGN1cnJlbnRQYWdlICsgNSkgfHwgKChuICsgMSkgJSA1ID09PSAwKSkgeyBwYWdlcy5wdXNoKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBvblBhZ2VTZWxlY3QoZSl9IHZhbHVlPXtufSBjbGFzc05hbWU9e2Ake3BhZ2V9ICR7Y3VycmVudFBhZ2UgPT09IG4gPyBzZWxlY3RlZCA6IG51bGx9YH0+e24gKyAxfTwvYnV0dG9uPik7IH0gZWxzZSBpZiAoc3BhbiAmJiAoKG4gKyAxKSAlIDUgPT09IDApKSB7IHBhZ2VzLnB1c2goPD4uLi48Lz4pOyB9XG4gICAgbiArPSAxO1xuICB9XG4gIHJldHVybiBwYWdlcztcbn07XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xuICBpdGVtVHlwZSxcbiAgY291bnQsXG4gIGN1cnJlbnRQYWdlLFxuICBvblBhZ2VTZWxlY3QsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtwYWdpbmF0aW9ufT5cbiAgICA8cCBjbGFzc05hbWU9e3JlcG9Db3VudH0+e2NvdW50fSB7Y291bnQgPiAxID8gaXRlbVR5cGVbMV0gOiBpdGVtVHlwZVswXX08L3A+XG4gICAge2NvdW50ID4gMTAgJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uQnV0dG9uc30+XG4gICAgICAgICZsYXJyO1xuICAgICAgICB7cGFnaW5hdGUocGFyc2VJbnQoY3VycmVudFBhZ2UsIDEwKSwgTWF0aC5jZWlsKGNvdW50IC8gMTApLCBvblBhZ2VTZWxlY3QpfVxuICAgICAgICAmcmFycjtcbiAgICAgIDwvcD5cbiAgICApfVxuICAgIDxwIGNsYXNzTmFtZT17cGFnZXNDb3VudH0+cGFnZSB7cGFyc2VJbnQoY3VycmVudFBhZ2UsIDEwKSArIDF9IG9mIHtNYXRoLmNlaWwoY291bnQgLyAxMCl9PC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBpdGVtVHlwZTogUHJvcFR5cGVzLmFycmF5T2YuaXNSZXF1aXJlZCxcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25QYWdlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.jsx\n");

/***/ })

})
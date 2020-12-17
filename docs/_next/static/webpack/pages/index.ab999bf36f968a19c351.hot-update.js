webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Jumbotron/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Jumbotron/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Jumbotron/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Jumbotron/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */\n\n\n\n\n\nvar LEFT = 37;\nvar RIGHT = 39;\n\nvar changeTab = function changeTab(event) {\n  var isDirectionPressed = event.keyCode === LEFT || event.keyCode === RIGHT;\n\n  if (!isDirectionPressed) {\n    return;\n  }\n\n  if (event.keyCode === LEFT) {\n    var _event$target$previou;\n\n    (_event$target$previou = event.target.previousElementSibling) === null || _event$target$previou === void 0 ? void 0 : _event$target$previou.focus();\n  }\n\n  if (event.keyCode === RIGHT) {\n    var _event$target$nextEle;\n\n    (_event$target$nextEle = event.target.nextElementSibling) === null || _event$target$nextEle === void 0 ? void 0 : _event$target$nextEle.focus();\n  }\n\n  event.preventDefault();\n};\n\nvar Jumbotron = function Jumbotron(_ref) {\n  _s();\n\n  var items = _ref.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      currentItem = _useState[0],\n      setCurrentItem = _useState[1];\n\n  var updateUrl = function updateUrl(path) {\n    return path.includes('http') ? path : \"\".concat(\"\").concat(path);\n  };\n\n  var tabs = items.map(function (item) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      \"aria-controls\": \"panel\".concat(item.id),\n      \"aria-selected\": item.id === currentItem,\n      className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronTab\"], \" \").concat(item.id === currentItem ? _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"selected\"] : ''),\n      id: \"tab\".concat(item.id),\n      onClick: function onClick() {\n        return setCurrentItem(item.id);\n      },\n      onKeyDown: changeTab,\n      role: \"tab\",\n      tabIndex: item.id === currentItem ? 0 : -1,\n      type: \"button\",\n      children: item.title\n    }, \"tab\".concat(item.id), false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this);\n  });\n  var panels = items.map(function (item) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronPanel\"], \" \").concat(item.id === currentItem ? _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"selected\"] : ''),\n      tabIndex: \"0\",\n      role: \"tabpanel\",\n      id: \"panel\".concat(item.id),\n      \"aria-labelledby\": \"tab\".concat(item.id),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"card\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"cardTitle\"],\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"cardDescription\",\n          children: item.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, _this), item.cta && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"cardCta\",\n          children: [item.cta.lead, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: updateUrl(item.cta.url),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: updateUrl(item.cta.url),\n              className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"cta\"],\n              children: item.cta.label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 97\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 60\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 22\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, _this), item.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"featuredImage\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          src: \"\".concat(\"\").concat(item.image),\n          alt: \"\",\n          rel: \"preload\",\n          layout: \"fill\",\n          objectFit: \"cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this)]\n    }, \"panel\".concat(item.id), true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotron\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      role: \"tablist\",\n      \"aria-label\": \"Features\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__[\"jumbotronTabs\"],\n        children: tabs\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"platform\",\n        children: panels\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Jumbotron, \"w7hILHQrV4nnxOq72cmys9PFAJM=\");\n\n_c = Jumbotron;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nJumbotron.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Jumbotron\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uL2luZGV4LmpzeD8xYjY5Il0sIm5hbWVzIjpbIkxFRlQiLCJSSUdIVCIsImNoYW5nZVRhYiIsImV2ZW50IiwiaXNEaXJlY3Rpb25QcmVzc2VkIiwia2V5Q29kZSIsInRhcmdldCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJmb2N1cyIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZlbnREZWZhdWx0IiwiSnVtYm90cm9uIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwic2V0Q3VycmVudEl0ZW0iLCJ1cGRhdGVVcmwiLCJwYXRoIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwidGFicyIsIm1hcCIsIml0ZW0iLCJpZCIsImp1bWJvdHJvblRhYiIsInNlbGVjdGVkIiwidGl0bGUiLCJwYW5lbHMiLCJqdW1ib3Ryb25QYW5lbCIsImNhcmQiLCJjYXJkVGl0bGUiLCJkZXNjcmlwdGlvbiIsImN0YSIsImxlYWQiLCJ1cmwiLCJsYWJlbCIsImltYWdlIiwiZmVhdHVyZWRJbWFnZSIsImp1bWJvdHJvbiIsImp1bWJvdHJvblRhYnMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVlBLElBQU1BLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLE1BQU1DLGtCQUFrQixHQUFJRCxLQUFLLENBQUNFLE9BQU4sS0FBa0JMLElBQWxCLElBQTBCRyxLQUFLLENBQUNFLE9BQU4sS0FBa0JKLEtBQXhFOztBQUNBLE1BQUksQ0FBQ0csa0JBQUwsRUFBeUI7QUFDdkI7QUFDRDs7QUFDRCxNQUFJRCxLQUFLLENBQUNF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REFBUyxDQUFDQyxPQUFWLENBQWtCQztBQURMLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtdG8taW50ZXJhY3RpdmUtcm9sZSAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHtcbiAganVtYm90cm9uLFxuICBqdW1ib3Ryb25UYWJzLFxuICBqdW1ib3Ryb25UYWIsXG4gIGp1bWJvdHJvblBhbmVsLFxuICBzZWxlY3RlZCxcbiAgY2FyZCxcbiAgY2FyZFRpdGxlLFxuICBjdGEsXG4gIGZlYXR1cmVkSW1hZ2UsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IExFRlQgPSAzNztcbmNvbnN0IFJJR0hUID0gMzk7XG5cbmNvbnN0IGNoYW5nZVRhYiA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0RpcmVjdGlvblByZXNzZWQgPSAoZXZlbnQua2V5Q29kZSA9PT0gTEVGVCB8fCBldmVudC5rZXlDb2RlID09PSBSSUdIVCk7XG4gIGlmICghaXNEaXJlY3Rpb25QcmVzc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChldmVudC5rZXlDb2RlID09PSBMRUZUKSB7XG4gICAgZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LmZvY3VzKCk7XG4gIH1cbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFJJR0hUKSB7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZz8uZm9jdXMoKTtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuY29uc3QgSnVtYm90cm9uID0gKHsgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEN1cnJlbnRJdGVtXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IHVwZGF0ZVVybCA9IChwYXRoKSA9PiAocGF0aC5pbmNsdWRlcygnaHR0cCcpID8gcGF0aCA6IGAke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke3BhdGh9YCk7XG5cbiAgY29uc3QgdGFicyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbCR7aXRlbS5pZH1gfVxuICAgICAgYXJpYS1zZWxlY3RlZD17aXRlbS5pZCA9PT0gY3VycmVudEl0ZW19XG4gICAgICBjbGFzc05hbWU9e2Ake2p1bWJvdHJvblRhYn0gJHtpdGVtLmlkID09PSBjdXJyZW50SXRlbSA/IHNlbGVjdGVkIDogJyd9YH1cbiAgICAgIGlkPXtgdGFiJHtpdGVtLmlkfWB9XG4gICAgICBrZXk9e2B0YWIke2l0ZW0uaWR9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRJdGVtKGl0ZW0uaWQpfVxuICAgICAgb25LZXlEb3duPXtjaGFuZ2VUYWJ9XG4gICAgICByb2xlPVwidGFiXCJcbiAgICAgIHRhYkluZGV4PXtpdGVtLmlkID09PSBjdXJyZW50SXRlbSA/IDAgOiAtMX1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHtpdGVtLnRpdGxlfVxuICAgIDwvYnV0dG9uPlxuICApKTtcblxuICBjb25zdCBwYW5lbHMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2Ake2p1bWJvdHJvblBhbmVsfSAke2l0ZW0uaWQgPT09IGN1cnJlbnRJdGVtID8gc2VsZWN0ZWQgOiAnJ31gfSB0YWJJbmRleD1cIjBcIiByb2xlPVwidGFicGFuZWxcIiBpZD17YHBhbmVsJHtpdGVtLmlkfWB9IGtleT17YHBhbmVsJHtpdGVtLmlkfWB9IGFyaWEtbGFiZWxsZWRieT17YHRhYiR7aXRlbS5pZH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2FyZFRpdGxlfT57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkRGVzY3JpcHRpb25cIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIHtpdGVtLmN0YSAmJiA8cCBjbGFzc05hbWU9XCJjYXJkQ3RhXCI+e2l0ZW0uY3RhLmxlYWR9PExpbmsgaHJlZj17dXBkYXRlVXJsKGl0ZW0uY3RhLnVybCl9PjxhIGhyZWY9e3VwZGF0ZVVybChpdGVtLmN0YS51cmwpfSBjbGFzc05hbWU9e2N0YX0+e2l0ZW0uY3RhLmxhYmVsfTwvYT48L0xpbms+PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgICAge2l0ZW0uaW1hZ2VcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmZWF0dXJlZEltYWdlfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2l0ZW0uaW1hZ2V9YH0gYWx0PVwiXCIgcmVsPVwicHJlbG9hZFwiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtqdW1ib3Ryb259PlxuICAgICAgPGFydGljbGUgcm9sZT1cInRhYmxpc3RcIiBhcmlhLWxhYmVsPVwiRmVhdHVyZXNcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtqdW1ib3Ryb25UYWJzfT5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwbGF0Zm9ybVwiPlxuICAgICAgICAgIHtwYW5lbHN9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEp1bWJvdHJvbjtcblxuSnVtYm90cm9uLnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Jumbotron/index.jsx\n");

/***/ })

})
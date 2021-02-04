webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Nav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Nav/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Nav/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Nav/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar KEYCODE_TAB = 9;\nvar ESC = 27;\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var navOpenRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var navCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (open === null) {\n      return;\n    }\n\n    if (open) {\n      navCloseRef.current.focus();\n    } else {\n      navOpenRef.current.focus();\n    }\n  }, [open]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (open) {\n      var focusableEls = document.querySelector(_style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"nav\"]).querySelectorAll('a[href]');\n      var firstFocusableEl = focusableEls[0];\n      var lastFocusableEl = focusableEls[focusableEls.length - 1];\n\n      var listener = function listener(event) {\n        if (event.keyCode === ESC) {\n          setOpen(false);\n        }\n\n        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {\n          if (event.shiftKey) {\n            if (document.activeElement === firstFocusableEl) {\n              lastFocusableEl.focus();\n              event.preventDefault();\n            }\n          } else if (document.activeElement === lastFocusableEl) {\n            firstFocusableEl.focus();\n            event.preventDefault();\n          }\n        }\n      };\n\n      document.addEventListener('keydown', listener);\n      return function () {\n        document.removeEventListener('keydown', listener);\n      };\n    }\n\n    return '';\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"nav\"], \" \").concat(open ? 'open' : ''),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"navigationButton\"],\n      type: \"button\",\n      \"aria-expanded\": !!open,\n      \"aria-label\": \"Expand navigation menu\",\n      onClick: function onClick() {\n        return setOpen(!open);\n      },\n      ref: navOpenRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"navigationClose\"],\n      type: \"button\",\n      \"aria-expanded\": !!open,\n      \"aria-label\": \"Close navigation menu\",\n      onClick: function onClick() {\n        return setOpen(!open);\n      },\n      ref: navCloseRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/\"),\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/projects\"),\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/people\"),\n          children: \"People\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/community\"),\n          children: \"Community\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/events\"),\n          children: \"Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/blog\"),\n          children: \"Blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"4RH+35hhvvIutwDEbTa73DuvskE=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzeD9lNmY1Il0sIm5hbWVzIjpbIktFWUNPREVfVEFCIiwiRVNDIiwiTmF2IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm5hdk9wZW5SZWYiLCJ1c2VSZWYiLCJuYXZDbG9zZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImZvY3VzYWJsZUVscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEZvY3VzYWJsZUVsIiwibGFzdEZvY3VzYWJsZUVsIiwibGVuZ3RoIiwibGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJrZXkiLCJzaGlmdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2aWdhdGlvbkJ1dHRvbiIsIm5hdmlnYXRpb25DbG9zZSIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUFwQjtBQUNBLElBQU1DLEdBQUcsR0FBRyxFQUFaOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxJQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBRWhCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFFQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFBRTtBQUFTOztBQUM5QixRQUFJQSxJQUFKLEVBQVU7QUFDUkksaUJBQVcsQ0FBQ0UsT0FBWixDQUFvQkMs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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFBLCtCQUFJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxZQUFLQSxFQUFMLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLCtCQUFJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxZQUFLQSxFQUFMLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUFBLCtCQUFJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxZQUFLQSxFQUFMLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTFERDs7R0FBTTdCLEc7O0tBQUFBLEc7QUE0RFNBLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBuYXYsIG5hdmlnYXRpb25CdXR0b24sIG5hdmlnYXRpb25DbG9zZSB9IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEtFWUNPREVfVEFCID0gOTtcbmNvbnN0IEVTQyA9IDI3O1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBuYXZPcGVuUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBuYXZDbG9zZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmIChvcGVuKSB7XG4gICAgICBuYXZDbG9zZVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdk9wZW5SZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBjb25zdCBmb2N1c2FibGVFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdikucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXScpO1xuICAgICAgY29uc3QgZmlyc3RGb2N1c2FibGVFbCA9IGZvY3VzYWJsZUVsc1swXTtcbiAgICAgIGNvbnN0IGxhc3RGb2N1c2FibGVFbCA9IGZvY3VzYWJsZUVsc1tmb2N1c2FibGVFbHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDKSB7XG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gS0VZQ09ERV9UQUIpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsKSB7XG4gICAgICAgICAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEZvY3VzYWJsZUVsKSB7XG4gICAgICAgICAgICBmaXJzdEZvY3VzYWJsZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e2Ake25hdn0gJHtvcGVuID8gJ29wZW4nIDogJyd9YH0+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bmF2aWdhdGlvbkJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9eyEhb3Blbn0gYXJpYS1sYWJlbD1cIkV4cGFuZCBuYXZpZ2F0aW9uIG1lbnVcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gcmVmPXtuYXZPcGVuUmVmfSAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e25hdmlnYXRpb25DbG9zZX0gdHlwZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9eyEhb3Blbn0gYXJpYS1sYWJlbD1cIkNsb3NlIG5hdmlnYXRpb24gbWVudVwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfSByZWY9e25hdkNsb3NlUmVmfSAvPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9gfT5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9wcm9qZWN0c2B9PlByb2plY3RzPC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L3Blb3BsZWB9PlBlb3BsZTwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9jb21tdW5pdHlgfT5Db21tdW5pdHk8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vZXZlbnRzYH0+RXZlbnRzPC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2Jsb2dgfT5CbG9nPC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/index.jsx\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  font-family: Monospace;\\n  margin: 0 4em;\\n  padding-top: 1em;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: none;\\n  margin: 0.5em 1.5em;\\n  font-size: 1.3em;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: solid;\\n  color: white;\\n  background-color: teal;\\n  padding: 1em 2.0em;\\n  border-radius: 6px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition: fixed;\\nheight: 100vh;\\nwidth: 100vw;\\noverflow: hidden;\\nz-index: -1;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: rgba(232,255,252,1);\\n  layout=fill;\\n  objectFit=cover;\\n  position: fixed;\\n   top: 0;\\n   left: 0;\\n   width: 100vw;\\n   height: 100vh;\\n   z-index: -1;\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var aboutStyle = {\n        color: router.pathname === \"/about\" ? \"white\" : \"black\"\n    };\n    var homeStyle = {\n        color: router.pathname === \"/\" ? \"white\" : \"black\"\n    };\n    var creditStyle = {\n        color: router.pathname === \"/credit\" ? \"white\" : \"black\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuButton, {\n                                style: homeStyle,\n                                onClick: function() {\n                                    router.push(\"/\");\n                                },\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuButton, {\n                                style: aboutStyle,\n                                onClick: function() {\n                                    router.push(\"/about\");\n                                },\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuButton, {\n                                style: creditStyle,\n                                onClick: function() {\n                                    router.push(\"/credit\");\n                                },\n                                children: \"Team\"\n                            }, void 0, false, {\n                                fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BorderButton, {\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject());\n_c1 = Header;\nvar MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span(_templateObject1());\n_c2 = MenuButton;\nvar BorderButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MenuButton)(_templateObject2());\n_c3 = BorderButton;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\nvar ColorBackground = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].body(_templateObject4());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MenuButton\");\n$RefreshReg$(_c3, \"BorderButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUdYO0FBQ0Q7O0FBSXRDLFNBQVNHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztJQUNyQixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTUssVUFBVSxHQUFHO1FBQ2pCQyxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0csUUFBUSxLQUFLLFFBQVEsR0FBRyxPQUFPLEdBQUcsT0FBTztLQUN4RDtJQUNELElBQU1DLFNBQVMsR0FBRztRQUNoQkYsS0FBSyxFQUFFRixNQUFNLENBQUNHLFFBQVEsS0FBSyxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU87S0FDbkQ7SUFDRCxJQUFNRSxXQUFXLEdBQUc7UUFDbEJILEtBQUssRUFBRUYsTUFBTSxDQUFDRyxRQUFRLEtBQUssU0FBUyxHQUFHLE9BQU8sR0FBRyxPQUFPO0tBQ3pEO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUVGLDhEQUFDQyxNQUFNOztrQ0FDTCw4REFBQ0QsS0FBRzs7MENBQ0YsOERBQUNFLFVBQVU7Z0NBQUNDLEtBQUssRUFBRUwsU0FBUztnQ0FBRU0sT0FBTyxFQUFFLFdBQU07b0NBQUVWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FBRTswQ0FBRSxNQUFJOzs7OztvQ0FBYTswQ0FDcEYsOERBQUNILFVBQVU7Z0NBQUNDLEtBQUssRUFBRVIsVUFBVTtnQ0FBRVMsT0FBTyxFQUFFLFdBQU07b0NBQUVWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FBRTswQ0FBRSxPQUFLOzs7OztvQ0FBYTswQ0FDM0YsOERBQUNILFVBQVU7Z0NBQUNDLEtBQUssRUFBRUosV0FBVztnQ0FBRUssT0FBTyxFQUFFLFdBQU07b0NBQUVWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FBRTswQ0FBRSxNQUFJOzs7OztvQ0FBYTs7Ozs7OzRCQUN4RjtrQ0FDTiw4REFBQ0MsWUFBWTtrQ0FBRSxNQUFJOzs7Ozs0QkFBZTs7Ozs7O29CQUMzQjtZQUNSYixLQUFLLENBQUNjLFFBQVE7Ozs7OztZQUNYLENBQ1A7Q0FDRjtHQTFCUWYsTUFBTTs7UUFDRUYsa0RBQVM7OztBQURqQkUsS0FBQUEsTUFBTTtBQTRCZixJQUFNUyxNQUFNLEdBQUdWLGdFQUFhLG1CQU8zQjtBQVBLVSxNQUFBQSxNQUFNO0FBU1osSUFBTUMsVUFBVSxHQUFHWCw4REFBVyxvQkFLN0I7QUFMS1csTUFBQUEsVUFBVTtBQU9oQixJQUFNSSxZQUFZLEdBQUdmLDZEQUFNLENBQUNXLFVBQVUsQ0FBQyxvQkFNdEM7QUFOS0ksTUFBQUEsWUFBWTtBQVFsQixJQUFNSSxVQUFVLEdBQUduQiw2REFBVSxvQkFNNUI7QUFFRCxJQUFNb0IsZUFBZSxHQUFHcEIsOERBQVcsb0JBU25CO0FBR2hCLCtEQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC50c3g/ZGU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi8uLi9wdWJsaWMvYmFja2dyb3VuZC5wbmcnXG5cblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhYm91dFN0eWxlID0ge1xuICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ3doaXRlJyA6ICdibGFjaydcbiAgfVxuICBjb25zdCBob21lU3R5bGUgPSB7XG4gICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gJ3doaXRlJyA6ICdibGFjaydcbiAgfVxuICBjb25zdCBjcmVkaXRTdHlsZSA9IHtcbiAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09PSAnL2NyZWRpdCcgPyAnd2hpdGUnIDogJ2JsYWNrJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIFxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWVudUJ1dHRvbiBzdHlsZT17aG9tZVN0eWxlfSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKCcvJykgfX0+SG9tZTwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8TWVudUJ1dHRvbiBzdHlsZT17YWJvdXRTdHlsZX0gb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaCgnL2Fib3V0JykgfX0+QWJvdXQ8L01lbnVCdXR0b24+XG4gICAgICAgICAgPE1lbnVCdXR0b24gc3R5bGU9e2NyZWRpdFN0eWxlfSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKCcvY3JlZGl0JykgfX0+VGVhbTwvTWVudUJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCb3JkZXJCdXR0b24gPlBsYXk8L0JvcmRlckJ1dHRvbj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBNb25vc3BhY2U7XG4gIG1hcmdpbjogMCA0ZW07XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcblxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5zcGFuYFxuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMC41ZW0gMS41ZW07XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuY29uc3QgQm9yZGVyQnV0dG9uID0gc3R5bGVkKE1lbnVCdXR0b24pYFxuICBib3JkZXI6IHNvbGlkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIHBhZGRpbmc6IDFlbSAyLjBlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuYFxuXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbnBvc2l0aW9uOiBmaXhlZDtcbmhlaWdodDogMTAwdmg7XG53aWR0aDogMTAwdnc7XG5vdmVyZmxvdzogaGlkZGVuO1xuei1pbmRleDogLTE7XG5gIFxuXG5jb25zdCBDb2xvckJhY2tncm91bmQgPSBzdHlsZWQuYm9keWBcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsMjU1LDI1MiwxKTtcbiAgbGF5b3V0PWZpbGw7XG4gIG9iamVjdEZpdD1jb3ZlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgdG9wOiAwO1xuICAgbGVmdDogMDtcbiAgIHdpZHRoOiAxMDB2dztcbiAgIGhlaWdodDogMTAwdmg7XG4gICB6LWluZGV4OiAtMTtgXG5cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJMYXlvdXQiLCJwcm9wcyIsInJvdXRlciIsImFib3V0U3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiaG9tZVN0eWxlIiwiY3JlZGl0U3R5bGUiLCJkaXYiLCJIZWFkZXIiLCJNZW51QnV0dG9uIiwic3R5bGUiLCJvbkNsaWNrIiwicHVzaCIsIkJvcmRlckJ1dHRvbiIsImNoaWxkcmVuIiwiaGVhZGVyIiwic3BhbiIsIkJhY2tncm91bmQiLCJDb2xvckJhY2tncm91bmQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n"));

/***/ })

});
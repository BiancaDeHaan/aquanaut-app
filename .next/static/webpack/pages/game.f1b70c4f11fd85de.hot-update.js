"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./src/components/Game.tsx":
/*!*********************************!*\
  !*** ./src/components/Game.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _public_bubble_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/bubble.png */ \"./public/bubble.png\");\n/* harmony import */ var _public_name_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/name.png */ \"./public/name.png\");\n/* harmony import */ var _public_log_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/log.png */ \"./public/log.png\");\n/* harmony import */ var _public_choice_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/choice_button.png */ \"./public/choice_button.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n\n      console.log(\"End of story\");\n    }\n  }\n\n  function handleLogButtonClick() {}\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: _public_choice_button_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(LogButton, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: _public_log_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        onClick: handleLogButtonClick\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(DialogueArea, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: _public_name_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameText, {\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: _public_bubble_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NextButton, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _public_name_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameText, {\n            onClick: handleNextButtonClick,\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Game, \"EPmFyVIqrQkJ15kT+fvHcrH03gg=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText];\n});\n\n_c = Game;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;&:hover{cursor:pointer;}\"]);\n_c2 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c3 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c4 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"text-align:center;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c5 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"bottom:0%;text-align:center;position:fixed;\"]);\n_c6 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"position:relative;text-align:center;margin-left:20%;display:block;width:10%;\"]);\n_c7 = NameArea;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;\"]);\n_c8 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c9 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c10 = Text;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"LogButton\");\n$RefreshReg$(_c3, \"NextButton\");\n$RefreshReg$(_c4, \"ChoiceArea\");\n$RefreshReg$(_c5, \"Choice\");\n$RefreshReg$(_c6, \"DialogueArea\");\n$RefreshReg$(_c7, \"NameArea\");\n$RefreshReg$(_c8, \"NameText\");\n$RefreshReg$(_c9, \"TextArea\");\n$RefreshReg$(_c10, \"Text\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL0dhbWUudHN4PzM2NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVR5cGluZ1RleHQgfSBmcm9tICcuLi9hcHAvdXNlVHlwaW5nVGVzdCc7XG5pbXBvcnQgSG9tZURpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCB0ZXh0SW1hZ2UgZnJvbSAnLi4vLi4vcHVibGljL2J1YmJsZS5wbmcnO1xuaW1wb3J0IG5hbWVJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvbmFtZS5wbmcnO1xuaW1wb3J0IGxvZ0ltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9sb2cucG5nJztcbmltcG9ydCBjaG9pY2VJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvY2hvaWNlX2J1dHRvbi5wbmcnO1xuLy8gVE9ETyBjb25zb2xpZGF0ZSBzZXRYIGZyb20gdHlwZSBpbnRvIGEgZnVuY3Rpb25cblxuaW50ZXJmYWNlIERhdGEge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGNob2ljZXM/OiBzdHJpbmdbXTtcbiAgICByZXNwb25zZXM/OiBEYXRhW11bXTtcbn1cblxuaW50ZXJmYWNlIFN0b3J5RGF0YSB7XG4gICAgc3Rvcnk6IERhdGFbXTtcbiAgICBuZXh0Q2hhcHRlcjogKCkgPT4gdm9pZFxufVxuXG5jb25zdCBkaWFsb2d1ZVR5cGUgPSBcIkRJQUxPR1VFXCI7XG5jb25zdCBjaG9pY2VUeXBlID0gXCJDSE9JQ0VcIjtcblxuZnVuY3Rpb24gR2FtZShwcm9wczogU3RvcnlEYXRhKSB7XG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlPERhdGFbXT4oKTtcblxuICAgIC8vR2FtZSByZWxhdGVkXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtyZXNwb25zZXMsIHNldFJlc3BvbnNlc10gPSB1c2VTdGF0ZTxEYXRhW11bXT4oKTtcblxuICAgIGNvbnN0IHsgd29yZCB9ID0gdXNlVHlwaW5nVGV4dChcbiAgICAgICAgdGV4dCxcbiAgICAgICAgNTBcbiAgICApO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV4dCBidXR0b24gY2xpY2tlZFwiKTtcbiAgICAgICAgLy8gRmluaXNoIHF1ZXVlIGlmIG5vdCBlbXB0eVxuICAgICAgICBpZiAocXVldWUgJiYgcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgICAgICAgICAgIHNldFR5cGUoY2hvaWNlVHlwZSk7XG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VzKHZhbHVlLnJlc3BvbnNlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgICAgICAgICBzZXRUZXh0KHZhbHVlLnRleHQpO1xuICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgcHJvcHMuc3RvcnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0b3J5W3VwZGF0ZV0udHlwZSAmJiBwcm9wcy5zdG9yeVt1cGRhdGVdLnR5cGUgPT09IFwiY2hvaWNlXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlcyhwcm9wcy5zdG9yeVt1cGRhdGVdLnJlc3BvbnNlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgICAgICAgICBzZXRUZXh0KHByb3BzLnN0b3J5W3VwZGF0ZV0udGV4dCk7XG4gICAgICAgICAgICAgICAgc2V0TmFtZShwcm9wcy5zdG9yeVt1cGRhdGVdLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SW5kZXgodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5leHQgY2hhcHRlclxuICAgICAgICAgICAgcHJvcHMubmV4dENoYXB0ZXIoKTtcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzdG9yeVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmQgb2Ygc3RvcnlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMb2dCdXR0b25DbGljaygpIHtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNob2ljZUNsaWNrKGRhdGE6IERhdGFbXSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBkYXRhO1xuICAgICAgICB2YWx1ZS5jb25jYXQocXVldWUpO1xuICAgICAgICBzZXRRdWV1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnN0b3J5W2luZGV4XS50eXBlICYmIHByb3BzLnN0b3J5W2luZGV4XS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICAgICAgc2V0UmVzcG9uc2VzKHByb3BzLnN0b3J5W2luZGV4XS5yZXNwb25zZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgICAgICAgc2V0VGV4dChwcm9wcy5zdG9yeVtpbmRleF0udGV4dCk7XG4gICAgICAgICAgICBzZXROYW1lKHByb3BzLnN0b3J5W2luZGV4XS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChxdWV1ZSkgaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk7XG4gICAgfSwgW3F1ZXVlXSk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNob2ljZXMoKSB7XG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSBwcm9wcy5zdG9yeVtpbmRleF0uY2hvaWNlcy5tYXAoKGNob2ljZSwgbnVtKSA9PlxuICAgICAgICAgICAgPENob2ljZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaG9pY2VDbGljayhwcm9wcy5zdG9yeVtpbmRleF0ucmVzcG9uc2VzW251bV0pfSBrZXk9e251bX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hvaWNlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGgxPntjaG9pY2V9PC9oMT5cbiAgICAgICAgICAgIDwvQ2hvaWNlPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDaG9pY2VBcmVhPntjaG9pY2VzfTwvQ2hvaWNlQXJlYT5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ0ltYWdlfSBvbkNsaWNrPXtoYW5kbGVMb2dCdXR0b25DbGlja30gLz5cbiAgICAgICAgICAgIDwvTG9nQnV0dG9uPlxuICAgICAgICAgICAgPEhvbWVEaWFsb2cgLz5cbiAgICAgICAgICAgIHt0eXBlID09PSBkaWFsb2d1ZVR5cGUgJiZcbiAgICAgICAgICAgICAgICA8RGlhbG9ndWVBcmVhPlxuICAgICAgICAgICAgICAgICAgICA8TmFtZUFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtuYW1lSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmFtZVRleHQ+e25hbWV9PC9OYW1lVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9OYW1lQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGV4dEltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3dvcmR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bmFtZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lVGV4dCBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9Pk5leHQ8L05hbWVUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRBcmVhPlxuICAgICAgICAgICAgICAgIDwvRGlhbG9ndWVBcmVhPn1cbiAgICAgICAgICAgIHt0eXBlID09PSBjaG9pY2VUeXBlICYmXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDaG9pY2VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBMb2dCdXR0b24gPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5gXG5cbmNvbnN0IE5leHRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbmBcbmNvbnN0IENob2ljZUFyZWEgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuY29uc3QgQ2hvaWNlID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5gXG5cbmNvbnN0IERpYWxvZ3VlQXJlYSA9IHN0eWxlZC5kaXZgXG4gICAgYm90dG9tOiAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuYFxuY29uc3QgTmFtZUFyZWEgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAlO1xuYFxuXG5jb25zdCBOYW1lVGV4dCA9IHN0eWxlZC5oMWBcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbmBcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW46IDBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA4MCU7XG5gO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJzdHlsZWQiLCJ1c2VUeXBpbmdUZXh0IiwiSG9tZURpYWxvZyIsInRleHRJbWFnZSIsIm5hbWVJbWFnZSIsImxvZ0ltYWdlIiwiY2hvaWNlSW1hZ2UiLCJkaWFsb2d1ZVR5cGUiLCJjaG9pY2VUeXBlIiwiR2FtZSIsInByb3BzIiwidHlwZSIsInNldFR5cGUiLCJpbmRleCIsInNldEluZGV4IiwicXVldWUiLCJzZXRRdWV1ZSIsInRleHQiLCJzZXRUZXh0IiwibmFtZSIsInNldE5hbWUiLCJyZXNwb25zZXMiLCJzZXRSZXNwb25zZXMiLCJ3b3JkIiwiaGFuZGxlTmV4dEJ1dHRvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInZhbHVlIiwic2hpZnQiLCJzdG9yeSIsInVwZGF0ZSIsIm5leHRDaGFwdGVyIiwiaGFuZGxlTG9nQnV0dG9uQ2xpY2siLCJoYW5kbGVDaG9pY2VDbGljayIsImRhdGEiLCJjb25jYXQiLCJnZW5lcmF0ZUNob2ljZXMiLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwibnVtIiwiTG9nQnV0dG9uIiwiZGl2IiwiTmV4dEJ1dHRvbiIsIkNob2ljZUFyZWEiLCJDaG9pY2UiLCJEaWFsb2d1ZUFyZWEiLCJOYW1lQXJlYSIsIk5hbWVUZXh0IiwiaDEiLCJUZXh0QXJlYSIsIlRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
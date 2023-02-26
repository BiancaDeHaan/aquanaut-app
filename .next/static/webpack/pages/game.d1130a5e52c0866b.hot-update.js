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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Log */ \"./src/components/Log.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/bian/Documents/Github/aquanaut-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLogOpen = _useState7[0],\n      setLogOpen = _useState7[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n    }\n  }\n\n  function handleLogButtonClick() {\n    setLogOpen(true);\n  }\n\n  function handleExitLogButton() {\n    setLogOpen(false);\n  }\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  function keyDownHandler(e) {\n    if (e.key === \"Escape\") {\n      setLogOpen(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n\n    document.addEventListener(\"keydown\", keyDownHandler); // 👇️ clean up event listener\n\n    return function () {\n      document.removeEventListener(\"keydown\", keyDownHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"/choice_button.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChoiceText, {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 9\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 7\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Background, {\n      src: \"/backgrounds/hq.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Character, {\n      height: props.height,\n      src: \"/characters/\" + props.character + \".png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this), isLogOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Log__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onExit: handleExitLogButton,\n      logs: props.log\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogButton, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: \"/log.png\",\n        onClick: handleLogButtonClick,\n        layout: \"fill\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(DialogueArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameArea, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameText, {\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"/bubble.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NextButton, {\n          onClick: handleNextButtonClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameText, {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 139,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Game, \"Gq+kfw7g0daXHUkyVuKNXSMYBYY=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText];\n});\n\n_c = Game;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Game__Background\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:-1;\"]);\n_c2 = Background;\nvar Character = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Game__Character\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"position:fixed;left:4%;bottom:10%;height:\", \";\"], function (props) {\n  return props.height + \"%\" || 0;\n});\n_c3 = Character;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;z-index:3;&:hover{cursor:pointer;}\"]);\n_c4 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c5 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c6 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"text-align:center;position:relative;display:block;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c7 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"bottom:0%;text-align:center;position:fixed;display:flex;flex-direction:column;margin-bottom:8px;\"]);\n_c8 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"position:relative;text-align:center;display:block;\"]);\n_c9 = NameArea;\nvar ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Game__ChoiceText\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"font-size:1.2em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c10 = ChoiceText;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-9\"\n})([\"font-size:1.5em;margin:0em;text-align:left;border:solid;border-radius:2em;width:fit-content;padding:10px 20px;background-color:white;border-color:darkblue;\"]);\n_c11 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-10\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c12 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-11\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:60%;left:50%;width:80%;\"]);\n_c13 = Text;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Wrapper\",\n  componentId: \"sc-1w7gpub-12\"\n})([\"width:100%;height:100%;\"]);\n_c14 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"Background\");\n$RefreshReg$(_c3, \"Character\");\n$RefreshReg$(_c4, \"LogButton\");\n$RefreshReg$(_c5, \"NextButton\");\n$RefreshReg$(_c6, \"ChoiceArea\");\n$RefreshReg$(_c7, \"Choice\");\n$RefreshReg$(_c8, \"DialogueArea\");\n$RefreshReg$(_c9, \"NameArea\");\n$RefreshReg$(_c10, \"ChoiceText\");\n$RefreshReg$(_c11, \"NameText\");\n$RefreshReg$(_c12, \"TextArea\");\n$RefreshReg$(_c13, \"Text\");\n$RefreshReg$(_c14, \"Wrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNa0Q7QUFRTixJQUFNRSxTQUFTLEdBQUdwRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSx1REFJSCxVQUFDTyxLQUFEO0VBQUEsT0FBV0EsS0FBSyxDQUFDeUMsTUFBTixHQUFlLEdBQWYsSUFBc0IsQ0FBakM7QUFBQSxDQUpHLENBQWY7TUFBTUk7QUFPTixJQUFNQyxTQUFTLEdBQUdyRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSxpR0FBZjtNQUFNcUQ7QUFZTixJQUFNRSxVQUFVLEdBQUd2RCx3RUFBSDtFQUFBO0VBQUE7QUFBQSx3RkFBaEI7TUFBTXVEO0FBV04sSUFBTUMsVUFBVSxHQUFHeEQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK0hBQWhCO01BQU13RDtBQVVOLElBQU1DLE1BQU0sR0FBR3pELHdFQUFIO0VBQUE7RUFBQTtBQUFBLDZHQUFaO01BQU15RDtBQVdOLElBQU1DLFlBQVksR0FBRzFELHdFQUFIO0VBQUE7RUFBQTtBQUFBLHdHQUFsQjtNQUFNMEQ7QUFTTixJQUFNQyxRQUFRLEdBQUczRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwwREFBZDtNQUFNMkQ7QUFNTixJQUFNQyxVQUFVLEdBQUc1RCxzRUFBSDtFQUFBO0VBQUE7QUFBQSwrR0FBaEI7T0FBTTREO0FBVU4sSUFBTUUsUUFBUSxHQUFHOUQsdUVBQUg7RUFBQTtFQUFBO0FBQUEsbUtBQWQ7T0FBTThEO0FBWU4sSUFBTUUsUUFBUSxHQUFHaEUsd0VBQUg7RUFBQTtFQUFBO0FBQUEsdUdBQWQ7T0FBTWdFO0FBU04sSUFBTUMsSUFBSSxHQUFHakUsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK0dBQVY7T0FBTWlFO0FBVU4sSUFBTUMsT0FBTyxHQUFHbEUsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK0JBQWI7T0FBTWtFO0FBS04sK0RBQWU1RCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWUudHN4PzM2NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVR5cGluZ1RleHQgfSBmcm9tIFwiLi4vYXBwL3VzZVR5cGluZ1Rlc3RcIjtcbmltcG9ydCBIb21lRGlhbG9nIGZyb20gXCIuL0FsZXJ0RGlhbG9nXCI7XG5pbXBvcnQgdGV4dEltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvYnViYmxlLnBuZ1wiO1xuaW1wb3J0IG5hbWVJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL25hbWUucG5nXCI7XG5pbXBvcnQgbG9nSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9sb2cucG5nXCI7XG5pbXBvcnQgY2hvaWNlSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9jaG9pY2VfYnV0dG9uLnBuZ1wiO1xuaW1wb3J0IExvZywgeyBMb2dFbnRyeSB9IGZyb20gXCIuL0xvZ1wiO1xuLy8gVE9ETyBjb25zb2xpZGF0ZSBzZXRYIGZyb20gdHlwZSBpbnRvIGEgZnVuY3Rpb25cblxuaW50ZXJmYWNlIERhdGEge1xuICBuYW1lPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBjaG9pY2VzPzogc3RyaW5nW107XG4gIHJlc3BvbnNlcz86IERhdGFbXVtdO1xufVxuXG5pbnRlcmZhY2UgU3RvcnlEYXRhIHtcbiAgc3Rvcnk6IERhdGFbXTtcbiAgbmV4dENoYXB0ZXI6ICgpID0+IHZvaWQ7XG4gIGNoYXB0ZXI6IG51bWJlcjtcbiAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBsb2c6IExvZ0VudHJ5W107XG59XG5cbmNvbnN0IGRpYWxvZ3VlVHlwZSA9IFwiRElBTE9HVUVcIjtcbmNvbnN0IGNob2ljZVR5cGUgPSBcIkNIT0lDRVwiO1xuXG5mdW5jdGlvbiBHYW1lKHByb3BzOiBTdG9yeURhdGEpIHtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IFtxdWV1ZSwgc2V0UXVldWVdID0gdXNlU3RhdGU8RGF0YVtdPigpO1xuXG4gIC8vR2FtZSByZWxhdGVkXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtyZXNwb25zZXMsIHNldFJlc3BvbnNlc10gPSB1c2VTdGF0ZTxEYXRhW11bXT4oKTtcblxuICBjb25zdCBbaXNMb2dPcGVuLCBzZXRMb2dPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCB7IHdvcmQgfSA9IHVzZVR5cGluZ1RleHQodGV4dCwgNTApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5leHQgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgLy8gRmluaXNoIHF1ZXVlIGlmIG5vdCBlbXB0eVxuICAgIGlmIChxdWV1ZSAmJiBxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAodmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICAgIHNldFR5cGUoY2hvaWNlVHlwZSk7XG4gICAgICAgIHNldFJlc3BvbnNlcyh2YWx1ZS5yZXNwb25zZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgICBzZXRUZXh0KHZhbHVlLnRleHQpO1xuICAgICAgICBzZXROYW1lKHZhbHVlLm5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCBwcm9wcy5zdG9yeS5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCB1cGRhdGUgPSBpbmRleCArIDE7XG4gICAgICBpZiAocHJvcHMuc3RvcnlbdXBkYXRlXS50eXBlICYmIHByb3BzLnN0b3J5W3VwZGF0ZV0udHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICBzZXRSZXNwb25zZXMocHJvcHMuc3RvcnlbdXBkYXRlXS5yZXNwb25zZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgICBzZXRUZXh0KHByb3BzLnN0b3J5W3VwZGF0ZV0udGV4dCk7XG4gICAgICAgIHNldE5hbWUocHJvcHMuc3RvcnlbdXBkYXRlXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHNldEluZGV4KHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5leHQgY2hhcHRlclxuICAgICAgcHJvcHMubmV4dENoYXB0ZXIoKTtcbiAgICAgIC8vIEVuZCBvZiBzdG9yeVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ0J1dHRvbkNsaWNrKCkge1xuICAgIHNldExvZ09wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFeGl0TG9nQnV0dG9uKCkge1xuICAgIHNldExvZ09wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hvaWNlQ2xpY2soZGF0YTogRGF0YVtdKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YTtcbiAgICB2YWx1ZS5jb25jYXQocXVldWUpO1xuICAgIHNldFF1ZXVlKHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHNldExvZ09wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnN0b3J5W2luZGV4XS50eXBlICYmIHByb3BzLnN0b3J5W2luZGV4XS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgc2V0UmVzcG9uc2VzKHByb3BzLnN0b3J5W2luZGV4XS5yZXNwb25zZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUeXBlKGRpYWxvZ3VlVHlwZSk7XG4gICAgICBzZXRUZXh0KHByb3BzLnN0b3J5W2luZGV4XS50ZXh0KTtcbiAgICAgIHNldE5hbWUocHJvcHMuc3RvcnlbaW5kZXhdLm5hbWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcblxuICAgIC8vIPCfkYfvuI8gY2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWV1ZSkgaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk7XG4gIH0sIFtxdWV1ZV0pO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2hvaWNlcygpIHtcbiAgICBjb25zdCBjaG9pY2VzID0gcHJvcHMuc3RvcnlbaW5kZXhdLmNob2ljZXMubWFwKChjaG9pY2UsIG51bSkgPT4gKFxuICAgICAgPENob2ljZVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaG9pY2VDbGljayhwcm9wcy5zdG9yeVtpbmRleF0ucmVzcG9uc2VzW251bV0pfVxuICAgICAgICBrZXk9e251bX1cbiAgICAgID5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9jaG9pY2VfYnV0dG9uLnBuZ1wiIC8+XG4gICAgICAgIDxDaG9pY2VUZXh0PntjaG9pY2V9PC9DaG9pY2VUZXh0PlxuICAgICAgPC9DaG9pY2U+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gPENob2ljZUFyZWE+e2Nob2ljZXN9PC9DaG9pY2VBcmVhPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFja2dyb3VuZCBzcmM9e1wiL2JhY2tncm91bmRzL2hxLnBuZ1wifSAvPlxuICAgICAgPENoYXJhY3RlclxuICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH1cbiAgICAgICAgc3JjPXtcIi9jaGFyYWN0ZXJzL1wiICsgcHJvcHMuY2hhcmFjdGVyICsgXCIucG5nXCJ9XG4gICAgICAvPlxuICAgICAge2lzTG9nT3BlbiAmJiA8TG9nIG9uRXhpdD17aGFuZGxlRXhpdExvZ0J1dHRvbn0gbG9ncz17cHJvcHMubG9nfSAvPn1cbiAgICAgIDxMb2dCdXR0b24+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nLnBuZ1wiIG9uQ2xpY2s9e2hhbmRsZUxvZ0J1dHRvbkNsaWNrfSBsYXlvdXQ9e1wiZmlsbFwifS8+XG4gICAgICA8L0xvZ0J1dHRvbj5cbiAgICAgIDxIb21lRGlhbG9nIC8+XG4gICAgICB7dHlwZSA9PT0gZGlhbG9ndWVUeXBlICYmIChcbiAgICAgICAgPERpYWxvZ3VlQXJlYT5cbiAgICAgICAgICA8VGV4dEFyZWE+XG4gICAgICAgICAgICA8TmFtZUFyZWE+XG4gICAgICAgICAgICAgIDxOYW1lVGV4dD57bmFtZX08L05hbWVUZXh0PlxuICAgICAgICAgICAgPC9OYW1lQXJlYT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYnViYmxlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8VGV4dD57d29yZH08L1RleHQ+XG4gICAgICAgICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgICA8TmFtZVRleHQ+TmV4dDwvTmFtZVRleHQ+XG4gICAgICAgICAgICA8L05leHRCdXR0b24+XG4gICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgPC9EaWFsb2d1ZUFyZWE+XG4gICAgICApfVxuICAgICAge3R5cGUgPT09IGNob2ljZVR5cGUgJiYgZ2VuZXJhdGVDaG9pY2VzKCl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuYDtcblxuY29uc3QgQ2hhcmFjdGVyID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA0JTtcbiAgYm90dG9tOiAxMCU7XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmhlaWdodCArIFwiJVwiIHx8IFwiODAlXCJ9O1xuYDtcblxuY29uc3QgTG9nQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IE5leHRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNSU7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuYDtcblxuY29uc3QgQ2hvaWNlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IENob2ljZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5gO1xuXG5jb25zdCBEaWFsb2d1ZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxuY29uc3QgTmFtZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBDaG9pY2VUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogODAlO1xuYDtcblxuY29uc3QgTmFtZVRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcbmA7XG5cbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogODAlO1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlZCIsInVzZVR5cGluZ1RleHQiLCJIb21lRGlhbG9nIiwiTG9nIiwiZGlhbG9ndWVUeXBlIiwiY2hvaWNlVHlwZSIsIkdhbWUiLCJwcm9wcyIsInR5cGUiLCJzZXRUeXBlIiwiaW5kZXgiLCJzZXRJbmRleCIsInF1ZXVlIiwic2V0UXVldWUiLCJ0ZXh0Iiwic2V0VGV4dCIsIm5hbWUiLCJzZXROYW1lIiwicmVzcG9uc2VzIiwic2V0UmVzcG9uc2VzIiwiaXNMb2dPcGVuIiwic2V0TG9nT3BlbiIsIndvcmQiLCJoYW5kbGVOZXh0QnV0dG9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwidmFsdWUiLCJzaGlmdCIsInN0b3J5IiwidXBkYXRlIiwibmV4dENoYXB0ZXIiLCJoYW5kbGVMb2dCdXR0b25DbGljayIsImhhbmRsZUV4aXRMb2dCdXR0b24iLCJoYW5kbGVDaG9pY2VDbGljayIsImRhdGEiLCJjb25jYXQiLCJrZXlEb3duSGFuZGxlciIsImUiLCJrZXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVDaG9pY2VzIiwiY2hvaWNlcyIsIm1hcCIsImNob2ljZSIsIm51bSIsImhlaWdodCIsImNoYXJhY3RlciIsIkJhY2tncm91bmQiLCJpbWciLCJDaGFyYWN0ZXIiLCJMb2dCdXR0b24iLCJkaXYiLCJOZXh0QnV0dG9uIiwiQ2hvaWNlQXJlYSIsIkNob2ljZSIsIkRpYWxvZ3VlQXJlYSIsIk5hbWVBcmVhIiwiQ2hvaWNlVGV4dCIsInAiLCJOYW1lVGV4dCIsImgxIiwiVGV4dEFyZWEiLCJUZXh0IiwiV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
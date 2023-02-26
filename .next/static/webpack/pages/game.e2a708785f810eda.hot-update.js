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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Log */ \"./src/components/Log.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/bian/Documents/Github/aquanaut-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLogOpen = _useState7[0],\n      setLogOpen = _useState7[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n    }\n  }\n\n  function handleLogButtonClick() {\n    setLogOpen(true);\n  }\n\n  function handleExitLogButton() {\n    setLogOpen(false);\n  }\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  function keyDownHandler(e) {\n    if (e.key === \"Escape\") {\n      setLogOpen(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n\n    document.addEventListener(\"keydown\", keyDownHandler); // 👇️ clean up event listener\n\n    return function () {\n      document.removeEventListener(\"keydown\", keyDownHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n          src: \"/choice_button.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChoiceText, {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 9\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 7\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Background, {\n      src: \"/backgrounds/hq.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Character, {\n      height: props.height,\n      src: \"/characters/\" + props.character + \".png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), isLogOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Log__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onExit: handleExitLogButton,\n      logs: props.log\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LogButton, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n        src: \"/log.png\",\n        onClick: handleLogButtonClick\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DialogueArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameArea, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameText, {\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n          src: \"/bubble.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NextButton, {\n          onClick: handleNextButtonClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameText, {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Game, \"Gq+kfw7g0daXHUkyVuKNXSMYBYY=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__.useTypingText];\n});\n\n_c = Game;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__Background\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:-1;\"]);\n_c2 = Background;\nvar Character = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__Character\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"position:fixed;left:4%;bottom:10%;height:\", \";\"], function (props) {\n  return props.height + \"%\" || 0;\n});\n_c3 = Character;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;z-index:3;&:hover{cursor:pointer;}\"]);\n_c4 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c5 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c6 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"text-align:center;position:relative;display:block;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c7 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"bottom:0%;text-align:center;position:fixed;display:flex;flex-direction:column;margin-bottom:8px;\"]);\n_c8 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"position:relative;text-align:center;display:block;\"]);\n_c9 = NameArea;\nvar ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n  displayName: \"Game__ChoiceText\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"font-size:1.2em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c10 = ChoiceText;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-9\"\n})([\"font-size:1.5em;margin:0em;text-align:left;border:solid;border-radius:2em;width:fit-content;padding:10px 20px;background-color:white;border-color:darkblue;\"]);\n_c11 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-10\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c12 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-11\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:60%;left:50%;width:80%;\"]);\n_c13 = Text;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Wrapper\",\n  componentId: \"sc-1w7gpub-12\"\n})([\"width:100%;height:100%;\"]);\n_c14 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"Background\");\n$RefreshReg$(_c3, \"Character\");\n$RefreshReg$(_c4, \"LogButton\");\n$RefreshReg$(_c5, \"NextButton\");\n$RefreshReg$(_c6, \"ChoiceArea\");\n$RefreshReg$(_c7, \"Choice\");\n$RefreshReg$(_c8, \"DialogueArea\");\n$RefreshReg$(_c9, \"NameArea\");\n$RefreshReg$(_c10, \"ChoiceText\");\n$RefreshReg$(_c11, \"NameText\");\n$RefreshReg$(_c12, \"TextArea\");\n$RefreshReg$(_c13, \"Text\");\n$RefreshReg$(_c14, \"Wrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQSxPQUFXQSxLQUFLLENBQUN5QyxNQUFOLEdBQWUsR0FBZixJQUFzQixDQUFqQztBQUFBLENBSkcsQ0FBZjtNQUFNSTtBQU9OLElBQU1DLFNBQVMsR0FBR3JELHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlHQUFmO01BQU1xRDtBQVlOLElBQU1FLFVBQVUsR0FBR3ZELHdFQUFIO0VBQUE7RUFBQTtBQUFBLHdGQUFoQjtNQUFNdUQ7QUFXTixJQUFNQyxVQUFVLEdBQUd4RCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrSEFBaEI7TUFBTXdEO0FBVU4sSUFBTUMsTUFBTSxHQUFHekQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsNkdBQVo7TUFBTXlEO0FBV04sSUFBTUMsWUFBWSxHQUFHMUQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0dBQWxCO01BQU0wRDtBQVNOLElBQU1DLFFBQVEsR0FBRzNELHdFQUFIO0VBQUE7RUFBQTtBQUFBLDBEQUFkO01BQU0yRDtBQU1OLElBQU1DLFVBQVUsR0FBRzVELHNFQUFIO0VBQUE7RUFBQTtBQUFBLCtHQUFoQjtPQUFNNEQ7QUFVTixJQUFNRSxRQUFRLEdBQUc5RCx1RUFBSDtFQUFBO0VBQUE7QUFBQSxtS0FBZDtPQUFNOEQ7QUFZTixJQUFNRSxRQUFRLEdBQUdoRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSx1R0FBZDtPQUFNZ0U7QUFTTixJQUFNQyxJQUFJLEdBQUdqRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrR0FBVjtPQUFNaUU7QUFVTixJQUFNQyxPQUFPLEdBQUdsRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrQkFBYjtPQUFNa0U7QUFLTiwrREFBZTVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZS50c3g/MzY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVR5cGluZ1RleHQgfSBmcm9tIFwiLi4vYXBwL3VzZVR5cGluZ1Rlc3RcIjtcbmltcG9ydCBIb21lRGlhbG9nIGZyb20gXCIuL0FsZXJ0RGlhbG9nXCI7XG5pbXBvcnQgdGV4dEltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvYnViYmxlLnBuZ1wiO1xuaW1wb3J0IG5hbWVJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL25hbWUucG5nXCI7XG5pbXBvcnQgbG9nSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9sb2cucG5nXCI7XG5pbXBvcnQgY2hvaWNlSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9jaG9pY2VfYnV0dG9uLnBuZ1wiO1xuaW1wb3J0IExvZywgeyBMb2dFbnRyeSB9IGZyb20gXCIuL0xvZ1wiO1xuLy8gVE9ETyBjb25zb2xpZGF0ZSBzZXRYIGZyb20gdHlwZSBpbnRvIGEgZnVuY3Rpb25cblxuaW50ZXJmYWNlIERhdGEge1xuICBuYW1lPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBjaG9pY2VzPzogc3RyaW5nW107XG4gIHJlc3BvbnNlcz86IERhdGFbXVtdO1xufVxuXG5pbnRlcmZhY2UgU3RvcnlEYXRhIHtcbiAgc3Rvcnk6IERhdGFbXTtcbiAgbmV4dENoYXB0ZXI6ICgpID0+IHZvaWQ7XG4gIGNoYXB0ZXI6IG51bWJlcjtcbiAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBsb2c6IExvZ0VudHJ5W107XG59XG5cbmNvbnN0IGRpYWxvZ3VlVHlwZSA9IFwiRElBTE9HVUVcIjtcbmNvbnN0IGNob2ljZVR5cGUgPSBcIkNIT0lDRVwiO1xuXG5mdW5jdGlvbiBHYW1lKHByb3BzOiBTdG9yeURhdGEpIHtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IFtxdWV1ZSwgc2V0UXVldWVdID0gdXNlU3RhdGU8RGF0YVtdPigpO1xuXG4gIC8vR2FtZSByZWxhdGVkXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtyZXNwb25zZXMsIHNldFJlc3BvbnNlc10gPSB1c2VTdGF0ZTxEYXRhW11bXT4oKTtcblxuICBjb25zdCBbaXNMb2dPcGVuLCBzZXRMb2dPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCB7IHdvcmQgfSA9IHVzZVR5cGluZ1RleHQodGV4dCwgNTApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5leHRCdXR0b25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5leHQgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgLy8gRmluaXNoIHF1ZXVlIGlmIG5vdCBlbXB0eVxuICAgIGlmIChxdWV1ZSAmJiBxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAodmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICAgIHNldFR5cGUoY2hvaWNlVHlwZSk7XG4gICAgICAgIHNldFJlc3BvbnNlcyh2YWx1ZS5yZXNwb25zZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgICBzZXRUZXh0KHZhbHVlLnRleHQpO1xuICAgICAgICBzZXROYW1lKHZhbHVlLm5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCBwcm9wcy5zdG9yeS5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCB1cGRhdGUgPSBpbmRleCArIDE7XG4gICAgICBpZiAocHJvcHMuc3RvcnlbdXBkYXRlXS50eXBlICYmIHByb3BzLnN0b3J5W3VwZGF0ZV0udHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICBzZXRSZXNwb25zZXMocHJvcHMuc3RvcnlbdXBkYXRlXS5yZXNwb25zZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgICBzZXRUZXh0KHByb3BzLnN0b3J5W3VwZGF0ZV0udGV4dCk7XG4gICAgICAgIHNldE5hbWUocHJvcHMuc3RvcnlbdXBkYXRlXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHNldEluZGV4KHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5leHQgY2hhcHRlclxuICAgICAgcHJvcHMubmV4dENoYXB0ZXIoKTtcbiAgICAgIC8vIEVuZCBvZiBzdG9yeVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ0J1dHRvbkNsaWNrKCkge1xuICAgIHNldExvZ09wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFeGl0TG9nQnV0dG9uKCkge1xuICAgIHNldExvZ09wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hvaWNlQ2xpY2soZGF0YTogRGF0YVtdKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YTtcbiAgICB2YWx1ZS5jb25jYXQocXVldWUpO1xuICAgIHNldFF1ZXVlKHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHNldExvZ09wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnN0b3J5W2luZGV4XS50eXBlICYmIHByb3BzLnN0b3J5W2luZGV4XS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgc2V0UmVzcG9uc2VzKHByb3BzLnN0b3J5W2luZGV4XS5yZXNwb25zZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUeXBlKGRpYWxvZ3VlVHlwZSk7XG4gICAgICBzZXRUZXh0KHByb3BzLnN0b3J5W2luZGV4XS50ZXh0KTtcbiAgICAgIHNldE5hbWUocHJvcHMuc3RvcnlbaW5kZXhdLm5hbWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcblxuICAgIC8vIPCfkYfvuI8gY2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWV1ZSkgaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCk7XG4gIH0sIFtxdWV1ZV0pO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2hvaWNlcygpIHtcbiAgICBjb25zdCBjaG9pY2VzID0gcHJvcHMuc3RvcnlbaW5kZXhdLmNob2ljZXMubWFwKChjaG9pY2UsIG51bSkgPT4gKFxuICAgICAgPENob2ljZVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaG9pY2VDbGljayhwcm9wcy5zdG9yeVtpbmRleF0ucmVzcG9uc2VzW251bV0pfVxuICAgICAgICBrZXk9e251bX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9XCIvY2hvaWNlX2J1dHRvbi5wbmdcIiAvPlxuICAgICAgICA8Q2hvaWNlVGV4dD57Y2hvaWNlfTwvQ2hvaWNlVGV4dD5cbiAgICAgIDwvQ2hvaWNlPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIDxDaG9pY2VBcmVhPntjaG9pY2VzfTwvQ2hvaWNlQXJlYT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJhY2tncm91bmQgc3JjPXtcIi9iYWNrZ3JvdW5kcy9ocS5wbmdcIn0gLz5cbiAgICAgIDxDaGFyYWN0ZXJcbiAgICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gICAgICAgIHNyYz17XCIvY2hhcmFjdGVycy9cIiArIHByb3BzLmNoYXJhY3RlciArIFwiLnBuZ1wifVxuICAgICAgLz5cbiAgICAgIHtpc0xvZ09wZW4gJiYgPExvZyBvbkV4aXQ9e2hhbmRsZUV4aXRMb2dCdXR0b259IGxvZ3M9e3Byb3BzLmxvZ30gLz59XG4gICAgICA8TG9nQnV0dG9uPlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2cucG5nXCIgb25DbGljaz17aGFuZGxlTG9nQnV0dG9uQ2xpY2t9IC8+XG4gICAgICA8L0xvZ0J1dHRvbj5cbiAgICAgIDxIb21lRGlhbG9nIC8+XG4gICAgICB7dHlwZSA9PT0gZGlhbG9ndWVUeXBlICYmIChcbiAgICAgICAgPERpYWxvZ3VlQXJlYT5cbiAgICAgICAgICA8VGV4dEFyZWE+XG4gICAgICAgICAgICA8TmFtZUFyZWE+XG4gICAgICAgICAgICAgIDxOYW1lVGV4dD57bmFtZX08L05hbWVUZXh0PlxuICAgICAgICAgICAgPC9OYW1lQXJlYT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2J1YmJsZS5wbmdcIiAvPlxuICAgICAgICAgICAgPFRleHQ+e3dvcmR9PC9UZXh0PlxuICAgICAgICAgICAgPE5leHRCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfT5cbiAgICAgICAgICAgICAgPE5hbWVUZXh0Pk5leHQ8L05hbWVUZXh0PlxuICAgICAgICAgICAgPC9OZXh0QnV0dG9uPlxuICAgICAgICAgIDwvVGV4dEFyZWE+XG4gICAgICAgIDwvRGlhbG9ndWVBcmVhPlxuICAgICAgKX1cbiAgICAgIHt0eXBlID09PSBjaG9pY2VUeXBlICYmIGdlbmVyYXRlQ2hvaWNlcygpfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IENoYXJhY3RlciA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNCU7XG4gIGJvdHRvbTogMTAlO1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHQgKyBcIiVcIiB8fCBcIjgwJVwifTtcbmA7XG5cbmNvbnN0IExvZ0J1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBOZXh0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUlO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbmA7XG5cbmNvbnN0IENob2ljZUFyZWEgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBDaG9pY2UgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuYDtcblxuY29uc3QgRGlhbG9ndWVBcmVhID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbmA7XG5cbmNvbnN0IE5hbWVBcmVhID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgQ2hvaWNlVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbmA7XG5cbmNvbnN0IE5hbWVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwidXNlVHlwaW5nVGV4dCIsIkhvbWVEaWFsb2ciLCJMb2ciLCJkaWFsb2d1ZVR5cGUiLCJjaG9pY2VUeXBlIiwiR2FtZSIsInByb3BzIiwidHlwZSIsInNldFR5cGUiLCJpbmRleCIsInNldEluZGV4IiwicXVldWUiLCJzZXRRdWV1ZSIsInRleHQiLCJzZXRUZXh0IiwibmFtZSIsInNldE5hbWUiLCJyZXNwb25zZXMiLCJzZXRSZXNwb25zZXMiLCJpc0xvZ09wZW4iLCJzZXRMb2dPcGVuIiwid29yZCIsImhhbmRsZU5leHRCdXR0b25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZSIsInNoaWZ0Iiwic3RvcnkiLCJ1cGRhdGUiLCJuZXh0Q2hhcHRlciIsImhhbmRsZUxvZ0J1dHRvbkNsaWNrIiwiaGFuZGxlRXhpdExvZ0J1dHRvbiIsImhhbmRsZUNob2ljZUNsaWNrIiwiZGF0YSIsImNvbmNhdCIsImtleURvd25IYW5kbGVyIiwiZSIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZUNob2ljZXMiLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwibnVtIiwiaGVpZ2h0IiwiY2hhcmFjdGVyIiwiQmFja2dyb3VuZCIsImltZyIsIkNoYXJhY3RlciIsIkxvZ0J1dHRvbiIsImRpdiIsIk5leHRCdXR0b24iLCJDaG9pY2VBcmVhIiwiQ2hvaWNlIiwiRGlhbG9ndWVBcmVhIiwiTmFtZUFyZWEiLCJDaG9pY2VUZXh0IiwicCIsIk5hbWVUZXh0IiwiaDEiLCJUZXh0QXJlYSIsIlRleHQiLCJXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
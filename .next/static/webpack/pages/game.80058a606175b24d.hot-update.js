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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Log */ \"./src/components/Log.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/bian/Documents/Github/aquanaut-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLogOpen = _useState7[0],\n      setLogOpen = _useState7[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n    }\n  }\n\n  function handleLogButtonClick() {\n    setLogOpen(true);\n  }\n\n  function handleExitLogButton() {\n    setLogOpen(false);\n  }\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  function keyDownHandler(e) {\n    if (e.key === \"Escape\") {\n      setLogOpen(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n\n    document.addEventListener(\"keydown\", keyDownHandler); // 👇️ clean up event listener\n\n    return function () {\n      document.removeEventListener(\"keydown\", keyDownHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChoiceImage, {\n          src: \"/choice_button.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChoiceText, {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 9\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 7\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Background, {\n      src: \"/backgrounds/hq.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Character, {\n      height: props.height,\n      src: \"/characters/\" + props.character + \".png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this), isLogOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Log__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onExit: handleExitLogButton,\n      logs: props.log\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LogButton, {\n      src: \"/log.png\",\n      onClick: handleLogButtonClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DialogueArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameArea, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameText, {\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DialogueImage, {\n          src: \"/bubble.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NextButton, {\n          onClick: handleNextButtonClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NameText, {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 157,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 139,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Game, \"Gq+kfw7g0daXHUkyVuKNXSMYBYY=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_1__.useTypingText];\n});\n\n_c = Game;\nvar DialogueImage = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__DialogueImage\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"width:100%;height:auto;z-index:0;position:relative;\"]);\n_c2 = DialogueImage;\nvar ChoiceImage = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__ChoiceImage\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"width:100%;position:relative;\"]);\n_c3 = ChoiceImage;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__Background\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:-1;\"]);\n_c4 = Background;\nvar Character = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__Character\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"position:fixed;left:4%;bottom:10%;height:\", \";\"], function (props) {\n  return props.height + \"%\" || 0;\n});\n_c5 = Character;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;z-index:3;&:hover{cursor:pointer;}\"]);\n_c6 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c7 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c8 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"text-align:center;position:relative;display:block;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c9 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"bottom:0%;text-align:center;position:fixed;display:flex;flex-direction:column;margin-bottom:8px;\"]);\n_c10 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-9\"\n})([\"position:relative;text-align:center;display:block;\"]);\n_c11 = NameArea;\nvar ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n  displayName: \"Game__ChoiceText\",\n  componentId: \"sc-1w7gpub-10\"\n})([\"font-size:1.2em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c12 = ChoiceText;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-11\"\n})([\"font-size:1.5em;margin:0em;text-align:left;border:solid;border-radius:2em;width:fit-content;padding:10px 20px;background-color:white;border-color:darkblue;\"]);\n_c13 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-12\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c14 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-13\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:60%;left:50%;width:80%;\"]);\n_c15 = Text;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Game__Wrapper\",\n  componentId: \"sc-1w7gpub-14\"\n})([\"width:100%;height:100%;\"]);\n_c16 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"DialogueImage\");\n$RefreshReg$(_c3, \"ChoiceImage\");\n$RefreshReg$(_c4, \"Background\");\n$RefreshReg$(_c5, \"Character\");\n$RefreshReg$(_c6, \"LogButton\");\n$RefreshReg$(_c7, \"NextButton\");\n$RefreshReg$(_c8, \"ChoiceArea\");\n$RefreshReg$(_c9, \"Choice\");\n$RefreshReg$(_c10, \"DialogueArea\");\n$RefreshReg$(_c11, \"NameArea\");\n$RefreshReg$(_c12, \"ChoiceText\");\n$RefreshReg$(_c13, \"NameText\");\n$RefreshReg$(_c14, \"TextArea\");\n$RefreshReg$(_c15, \"Text\");\n$RefreshReg$(_c16, \"Wrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdyRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwyRUFBaEI7TUFBTXFEO0FBUU4sSUFBTUMsU0FBUyxHQUFHdEQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsdURBSUgsVUFBQ08sS0FBRDtFQUFBLE9BQVdBLEtBQUssQ0FBQ3lDLE1BQU4sR0FBZSxHQUFmLElBQXNCLENBQWpDO0FBQUEsQ0FKRyxDQUFmO01BQU1NO0FBT04sSUFBTUMsU0FBUyxHQUFHdkQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsaUdBQWY7TUFBTXVEO0FBWU4sSUFBTUMsVUFBVSxHQUFHeEQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0ZBQWhCO01BQU13RDtBQVdOLElBQU1FLFVBQVUsR0FBRzFELHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtIQUFoQjtNQUFNMEQ7QUFVTixJQUFNQyxNQUFNLEdBQUczRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSw2R0FBWjtNQUFNMkQ7QUFXTixJQUFNQyxZQUFZLEdBQUc1RCx3RUFBSDtFQUFBO0VBQUE7QUFBQSx3R0FBbEI7T0FBTTREO0FBU04sSUFBTUMsUUFBUSxHQUFHN0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsMERBQWQ7T0FBTTZEO0FBTU4sSUFBTUMsVUFBVSxHQUFHOUQsc0VBQUg7RUFBQTtFQUFBO0FBQUEsK0dBQWhCO09BQU04RDtBQVVOLElBQU1FLFFBQVEsR0FBR2hFLHVFQUFIO0VBQUE7RUFBQTtBQUFBLG1LQUFkO09BQU1nRTtBQVlOLElBQU1FLFFBQVEsR0FBR2xFLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVHQUFkO09BQU1rRTtBQVNOLElBQU1DLElBQUksR0FBR25FLHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtHQUFWO09BQU1tRTtBQVVOLElBQU1DLE9BQU8sR0FBR3BFLHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtCQUFiO09BQU1vRTtBQUtOLCtEQUFlOUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lLnRzeD8zNjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VUeXBpbmdUZXh0IH0gZnJvbSBcIi4uL2FwcC91c2VUeXBpbmdUZXN0XCI7XG5pbXBvcnQgSG9tZURpYWxvZyBmcm9tIFwiLi9BbGVydERpYWxvZ1wiO1xuaW1wb3J0IHRleHRJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL2J1YmJsZS5wbmdcIjtcbmltcG9ydCBuYW1lSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9uYW1lLnBuZ1wiO1xuaW1wb3J0IGxvZ0ltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvbG9nLnBuZ1wiO1xuaW1wb3J0IGNob2ljZUltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvY2hvaWNlX2J1dHRvbi5wbmdcIjtcbmltcG9ydCBMb2csIHsgTG9nRW50cnkgfSBmcm9tIFwiLi9Mb2dcIjtcbi8vIFRPRE8gY29uc29saWRhdGUgc2V0WCBmcm9tIHR5cGUgaW50byBhIGZ1bmN0aW9uXG5cbmludGVyZmFjZSBEYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgY2hvaWNlcz86IHN0cmluZ1tdO1xuICByZXNwb25zZXM/OiBEYXRhW11bXTtcbn1cblxuaW50ZXJmYWNlIFN0b3J5RGF0YSB7XG4gIHN0b3J5OiBEYXRhW107XG4gIG5leHRDaGFwdGVyOiAoKSA9PiB2b2lkO1xuICBjaGFwdGVyOiBudW1iZXI7XG4gIGNoYXJhY3Rlcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbG9nOiBMb2dFbnRyeVtdO1xufVxuXG5jb25zdCBkaWFsb2d1ZVR5cGUgPSBcIkRJQUxPR1VFXCI7XG5jb25zdCBjaG9pY2VUeXBlID0gXCJDSE9JQ0VcIjtcblxuZnVuY3Rpb24gR2FtZShwcm9wczogU3RvcnlEYXRhKSB7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlPERhdGFbXT4oKTtcblxuICAvL0dhbWUgcmVsYXRlZFxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcmVzcG9uc2VzLCBzZXRSZXNwb25zZXNdID0gdXNlU3RhdGU8RGF0YVtdW10+KCk7XG5cbiAgY29uc3QgW2lzTG9nT3Blbiwgc2V0TG9nT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgeyB3b3JkIH0gPSB1c2VUeXBpbmdUZXh0KHRleHQsIDUwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJOZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIC8vIEZpbmlzaCBxdWV1ZSBpZiBub3QgZW1wdHlcbiAgICBpZiAocXVldWUgJiYgcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICBzZXRSZXNwb25zZXModmFsdWUucmVzcG9uc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgc2V0VGV4dCh2YWx1ZS50ZXh0KTtcbiAgICAgICAgc2V0TmFtZSh2YWx1ZS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgcHJvcHMuc3RvcnkubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgdXBkYXRlID0gaW5kZXggKyAxO1xuICAgICAgaWYgKHByb3BzLnN0b3J5W3VwZGF0ZV0udHlwZSAmJiBwcm9wcy5zdG9yeVt1cGRhdGVdLnR5cGUgPT09IFwiY2hvaWNlXCIpIHtcbiAgICAgICAgc2V0VHlwZShjaG9pY2VUeXBlKTtcbiAgICAgICAgc2V0UmVzcG9uc2VzKHByb3BzLnN0b3J5W3VwZGF0ZV0ucmVzcG9uc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgc2V0VGV4dChwcm9wcy5zdG9yeVt1cGRhdGVdLnRleHQpO1xuICAgICAgICBzZXROYW1lKHByb3BzLnN0b3J5W3VwZGF0ZV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBzZXRJbmRleCh1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXh0IGNoYXB0ZXJcbiAgICAgIHByb3BzLm5leHRDaGFwdGVyKCk7XG4gICAgICAvLyBFbmQgb2Ygc3RvcnlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMb2dCdXR0b25DbGljaygpIHtcbiAgICBzZXRMb2dPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXhpdExvZ0J1dHRvbigpIHtcbiAgICBzZXRMb2dPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNob2ljZUNsaWNrKGRhdGE6IERhdGFbXSkge1xuICAgIHZhciB2YWx1ZSA9IGRhdGE7XG4gICAgdmFsdWUuY29uY2F0KHF1ZXVlKTtcbiAgICBzZXRRdWV1ZSh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBzZXRMb2dPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5zdG9yeVtpbmRleF0udHlwZSAmJiBwcm9wcy5zdG9yeVtpbmRleF0udHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgc2V0VHlwZShjaG9pY2VUeXBlKTtcbiAgICAgIHNldFJlc3BvbnNlcyhwcm9wcy5zdG9yeVtpbmRleF0ucmVzcG9uc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgc2V0VGV4dChwcm9wcy5zdG9yeVtpbmRleF0udGV4dCk7XG4gICAgICBzZXROYW1lKHByb3BzLnN0b3J5W2luZGV4XS5uYW1lKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlcik7XG5cbiAgICAvLyDwn5GH77iPIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVldWUpIGhhbmRsZU5leHRCdXR0b25DbGljaygpO1xuICB9LCBbcXVldWVdKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNob2ljZXMoKSB7XG4gICAgY29uc3QgY2hvaWNlcyA9IHByb3BzLnN0b3J5W2luZGV4XS5jaG9pY2VzLm1hcCgoY2hvaWNlLCBudW0pID0+IChcbiAgICAgIDxDaG9pY2VcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hvaWNlQ2xpY2socHJvcHMuc3RvcnlbaW5kZXhdLnJlc3BvbnNlc1tudW1dKX1cbiAgICAgICAga2V5PXtudW19XG4gICAgICA+XG4gICAgICAgIDxDaG9pY2VJbWFnZSBzcmM9XCIvY2hvaWNlX2J1dHRvbi5wbmdcIiAvPlxuICAgICAgICA8Q2hvaWNlVGV4dD57Y2hvaWNlfTwvQ2hvaWNlVGV4dD5cbiAgICAgIDwvQ2hvaWNlPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIDxDaG9pY2VBcmVhPntjaG9pY2VzfTwvQ2hvaWNlQXJlYT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJhY2tncm91bmQgc3JjPXtcIi9iYWNrZ3JvdW5kcy9ocS5wbmdcIn0gLz5cbiAgICAgIDxDaGFyYWN0ZXJcbiAgICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gICAgICAgIHNyYz17XCIvY2hhcmFjdGVycy9cIiArIHByb3BzLmNoYXJhY3RlciArIFwiLnBuZ1wifVxuICAgICAgLz5cbiAgICAgIHtpc0xvZ09wZW4gJiYgPExvZyBvbkV4aXQ9e2hhbmRsZUV4aXRMb2dCdXR0b259IGxvZ3M9e3Byb3BzLmxvZ30gLz59XG4gICAgICA8TG9nQnV0dG9uIHNyYz1cIi9sb2cucG5nXCIgb25DbGljaz17aGFuZGxlTG9nQnV0dG9uQ2xpY2t9IC8+XG4gICAgICA8SG9tZURpYWxvZyAvPlxuICAgICAge3R5cGUgPT09IGRpYWxvZ3VlVHlwZSAmJiAoXG4gICAgICAgIDxEaWFsb2d1ZUFyZWE+XG4gICAgICAgICAgPFRleHRBcmVhPlxuICAgICAgICAgICAgPE5hbWVBcmVhPlxuICAgICAgICAgICAgICA8TmFtZVRleHQ+e25hbWV9PC9OYW1lVGV4dD5cbiAgICAgICAgICAgIDwvTmFtZUFyZWE+XG4gICAgICAgICAgICA8RGlhbG9ndWVJbWFnZSBzcmM9XCIvYnViYmxlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8VGV4dD57d29yZH08L1RleHQ+XG4gICAgICAgICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgICA8TmFtZVRleHQ+TmV4dDwvTmFtZVRleHQ+XG4gICAgICAgICAgICA8L05leHRCdXR0b24+XG4gICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgPC9EaWFsb2d1ZUFyZWE+XG4gICAgICApfVxuICAgICAge3R5cGUgPT09IGNob2ljZVR5cGUgJiYgZ2VuZXJhdGVDaG9pY2VzKCl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBEaWFsb2d1ZUltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgQ2hvaWNlSW1hZ2UgPSBzdHlsZWQuaW1nYFxud2lkdGg6IDEwMCU7XG5wb3NpdGlvbjogcmVsYXRpdmU7YDtcblxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IENoYXJhY3RlciA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNCU7XG4gIGJvdHRvbTogMTAlO1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHQgKyBcIiVcIiB8fCBcIjgwJVwifTtcbmA7XG5cbmNvbnN0IExvZ0J1dHRvbiA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBOZXh0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUlO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbmA7XG5cbmNvbnN0IENob2ljZUFyZWEgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBDaG9pY2UgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuYDtcblxuY29uc3QgRGlhbG9ndWVBcmVhID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbmA7XG5cbmNvbnN0IE5hbWVBcmVhID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgQ2hvaWNlVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbmA7XG5cbmNvbnN0IE5hbWVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwidXNlVHlwaW5nVGV4dCIsIkhvbWVEaWFsb2ciLCJMb2ciLCJkaWFsb2d1ZVR5cGUiLCJjaG9pY2VUeXBlIiwiR2FtZSIsInByb3BzIiwidHlwZSIsInNldFR5cGUiLCJpbmRleCIsInNldEluZGV4IiwicXVldWUiLCJzZXRRdWV1ZSIsInRleHQiLCJzZXRUZXh0IiwibmFtZSIsInNldE5hbWUiLCJyZXNwb25zZXMiLCJzZXRSZXNwb25zZXMiLCJpc0xvZ09wZW4iLCJzZXRMb2dPcGVuIiwid29yZCIsImhhbmRsZU5leHRCdXR0b25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZSIsInNoaWZ0Iiwic3RvcnkiLCJ1cGRhdGUiLCJuZXh0Q2hhcHRlciIsImhhbmRsZUxvZ0J1dHRvbkNsaWNrIiwiaGFuZGxlRXhpdExvZ0J1dHRvbiIsImhhbmRsZUNob2ljZUNsaWNrIiwiZGF0YSIsImNvbmNhdCIsImtleURvd25IYW5kbGVyIiwiZSIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZUNob2ljZXMiLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwibnVtIiwiaGVpZ2h0IiwiY2hhcmFjdGVyIiwiRGlhbG9ndWVJbWFnZSIsImltZyIsIkNob2ljZUltYWdlIiwiQmFja2dyb3VuZCIsIkNoYXJhY3RlciIsIkxvZ0J1dHRvbiIsIk5leHRCdXR0b24iLCJkaXYiLCJDaG9pY2VBcmVhIiwiQ2hvaWNlIiwiRGlhbG9ndWVBcmVhIiwiTmFtZUFyZWEiLCJDaG9pY2VUZXh0IiwicCIsIk5hbWVUZXh0IiwiaDEiLCJUZXh0QXJlYSIsIlRleHQiLCJXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
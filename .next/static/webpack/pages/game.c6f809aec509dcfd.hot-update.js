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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Log */ \"./src/components/Log.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/bian/Documents/Github/aquanaut-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLogOpen = _useState7[0],\n      setLogOpen = _useState7[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n    }\n  }\n\n  function handleLogButtonClick() {\n    setLogOpen(true);\n  }\n\n  function handleExitLogButton() {\n    setLogOpen(false);\n  }\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  function keyDownHandler(e) {\n    if (e.key === \"Escape\") {\n      setLogOpen(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n\n    document.addEventListener(\"keydown\", keyDownHandler); // 👇️ clean up event listener\n\n    return function () {\n      document.removeEventListener(\"keydown\", keyDownHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"/choice_button.png\",\n          layout: \"fill\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChoiceText, {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 9\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 7\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Background, {\n      src: \"/backgrounds/hq.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Character, {\n      height: props.height,\n      src: \"/characters/\" + props.character + \".png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this), isLogOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Log__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onExit: handleExitLogButton,\n      logs: props.log\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogButton, {\n      src: \"/log.png\",\n      onClick: handleLogButtonClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(DialogueArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameArea, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameText, {\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"/bubble.png\",\n          layout: \"fill\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NextButton, {\n          onClick: handleNextButtonClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NameText, {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 157,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 139,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Game, \"Gq+kfw7g0daXHUkyVuKNXSMYBYY=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText];\n});\n\n_c = Game;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Game__Background\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:-1;\"]);\n_c2 = Background;\nvar Character = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Game__Character\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"position:fixed;left:4%;bottom:10%;height:\", \";\"], function (props) {\n  return props.height + \"%\" || 0;\n});\n_c3 = Character;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;z-index:3;&:hover{cursor:pointer;}\"]);\n_c4 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c5 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c6 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"text-align:center;position:relative;display:block;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c7 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"bottom:0%;text-align:center;position:fixed;display:flex;flex-direction:column;margin-bottom:8px;\"]);\n_c8 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"position:relative;text-align:center;display:block;\"]);\n_c9 = NameArea;\nvar ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Game__ChoiceText\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"font-size:1.2em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c10 = ChoiceText;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-9\"\n})([\"font-size:1.5em;margin:0em;text-align:left;border:solid;border-radius:2em;width:fit-content;padding:10px 20px;background-color:white;border-color:darkblue;\"]);\n_c11 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-10\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c12 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-11\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:60%;left:50%;width:80%;\"]);\n_c13 = Text;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Game__Wrapper\",\n  componentId: \"sc-1w7gpub-12\"\n})([\"width:100%;height:100%;\"]);\n_c14 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"Background\");\n$RefreshReg$(_c3, \"Character\");\n$RefreshReg$(_c4, \"LogButton\");\n$RefreshReg$(_c5, \"NextButton\");\n$RefreshReg$(_c6, \"ChoiceArea\");\n$RefreshReg$(_c7, \"Choice\");\n$RefreshReg$(_c8, \"DialogueArea\");\n$RefreshReg$(_c9, \"NameArea\");\n$RefreshReg$(_c10, \"ChoiceText\");\n$RefreshReg$(_c11, \"NameText\");\n$RefreshReg$(_c12, \"TextArea\");\n$RefreshReg$(_c13, \"Text\");\n$RefreshReg$(_c14, \"Wrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsdURBSUgsVUFBQ08sS0FBRDtFQUFBLE9BQVdBLEtBQUssQ0FBQ3lDLE1BQU4sR0FBZSxHQUFmLElBQXNCLENBQWpDO0FBQUEsQ0FKRyxDQUFmO01BQU1JO0FBT04sSUFBTUMsU0FBUyxHQUFHckQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsaUdBQWY7TUFBTXFEO0FBWU4sSUFBTUMsVUFBVSxHQUFHdEQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0ZBQWhCO01BQU1zRDtBQVdOLElBQU1FLFVBQVUsR0FBR3hELHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtIQUFoQjtNQUFNd0Q7QUFVTixJQUFNQyxNQUFNLEdBQUd6RCx3RUFBSDtFQUFBO0VBQUE7QUFBQSw2R0FBWjtNQUFNeUQ7QUFXTixJQUFNQyxZQUFZLEdBQUcxRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSx3R0FBbEI7TUFBTTBEO0FBU04sSUFBTUMsUUFBUSxHQUFHM0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsMERBQWQ7TUFBTTJEO0FBTU4sSUFBTUMsVUFBVSxHQUFHNUQsc0VBQUg7RUFBQTtFQUFBO0FBQUEsK0dBQWhCO09BQU00RDtBQVVOLElBQU1FLFFBQVEsR0FBRzlELHVFQUFIO0VBQUE7RUFBQTtBQUFBLG1LQUFkO09BQU04RDtBQVlOLElBQU1FLFFBQVEsR0FBR2hFLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVHQUFkO09BQU1nRTtBQVNOLElBQU1DLElBQUksR0FBR2pFLHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtHQUFWO09BQU1pRTtBQVVOLElBQU1DLE9BQU8sR0FBR2xFLHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtCQUFiO09BQU1rRTtBQUtOLCtEQUFlNUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lLnRzeD8zNjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VUeXBpbmdUZXh0IH0gZnJvbSBcIi4uL2FwcC91c2VUeXBpbmdUZXN0XCI7XG5pbXBvcnQgSG9tZURpYWxvZyBmcm9tIFwiLi9BbGVydERpYWxvZ1wiO1xuaW1wb3J0IHRleHRJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL2J1YmJsZS5wbmdcIjtcbmltcG9ydCBuYW1lSW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9uYW1lLnBuZ1wiO1xuaW1wb3J0IGxvZ0ltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvbG9nLnBuZ1wiO1xuaW1wb3J0IGNob2ljZUltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvY2hvaWNlX2J1dHRvbi5wbmdcIjtcbmltcG9ydCBMb2csIHsgTG9nRW50cnkgfSBmcm9tIFwiLi9Mb2dcIjtcbi8vIFRPRE8gY29uc29saWRhdGUgc2V0WCBmcm9tIHR5cGUgaW50byBhIGZ1bmN0aW9uXG5cbmludGVyZmFjZSBEYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgY2hvaWNlcz86IHN0cmluZ1tdO1xuICByZXNwb25zZXM/OiBEYXRhW11bXTtcbn1cblxuaW50ZXJmYWNlIFN0b3J5RGF0YSB7XG4gIHN0b3J5OiBEYXRhW107XG4gIG5leHRDaGFwdGVyOiAoKSA9PiB2b2lkO1xuICBjaGFwdGVyOiBudW1iZXI7XG4gIGNoYXJhY3Rlcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbG9nOiBMb2dFbnRyeVtdO1xufVxuXG5jb25zdCBkaWFsb2d1ZVR5cGUgPSBcIkRJQUxPR1VFXCI7XG5jb25zdCBjaG9pY2VUeXBlID0gXCJDSE9JQ0VcIjtcblxuZnVuY3Rpb24gR2FtZShwcm9wczogU3RvcnlEYXRhKSB7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlPERhdGFbXT4oKTtcblxuICAvL0dhbWUgcmVsYXRlZFxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcmVzcG9uc2VzLCBzZXRSZXNwb25zZXNdID0gdXNlU3RhdGU8RGF0YVtdW10+KCk7XG5cbiAgY29uc3QgW2lzTG9nT3Blbiwgc2V0TG9nT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgeyB3b3JkIH0gPSB1c2VUeXBpbmdUZXh0KHRleHQsIDUwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJOZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIC8vIEZpbmlzaCBxdWV1ZSBpZiBub3QgZW1wdHlcbiAgICBpZiAocXVldWUgJiYgcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgICBzZXRUeXBlKGNob2ljZVR5cGUpO1xuICAgICAgICBzZXRSZXNwb25zZXModmFsdWUucmVzcG9uc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgc2V0VGV4dCh2YWx1ZS50ZXh0KTtcbiAgICAgICAgc2V0TmFtZSh2YWx1ZS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgcHJvcHMuc3RvcnkubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgdXBkYXRlID0gaW5kZXggKyAxO1xuICAgICAgaWYgKHByb3BzLnN0b3J5W3VwZGF0ZV0udHlwZSAmJiBwcm9wcy5zdG9yeVt1cGRhdGVdLnR5cGUgPT09IFwiY2hvaWNlXCIpIHtcbiAgICAgICAgc2V0VHlwZShjaG9pY2VUeXBlKTtcbiAgICAgICAgc2V0UmVzcG9uc2VzKHByb3BzLnN0b3J5W3VwZGF0ZV0ucmVzcG9uc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgICAgc2V0VGV4dChwcm9wcy5zdG9yeVt1cGRhdGVdLnRleHQpO1xuICAgICAgICBzZXROYW1lKHByb3BzLnN0b3J5W3VwZGF0ZV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBzZXRJbmRleCh1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXh0IGNoYXB0ZXJcbiAgICAgIHByb3BzLm5leHRDaGFwdGVyKCk7XG4gICAgICAvLyBFbmQgb2Ygc3RvcnlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMb2dCdXR0b25DbGljaygpIHtcbiAgICBzZXRMb2dPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXhpdExvZ0J1dHRvbigpIHtcbiAgICBzZXRMb2dPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNob2ljZUNsaWNrKGRhdGE6IERhdGFbXSkge1xuICAgIHZhciB2YWx1ZSA9IGRhdGE7XG4gICAgdmFsdWUuY29uY2F0KHF1ZXVlKTtcbiAgICBzZXRRdWV1ZSh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBzZXRMb2dPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5zdG9yeVtpbmRleF0udHlwZSAmJiBwcm9wcy5zdG9yeVtpbmRleF0udHlwZSA9PT0gXCJjaG9pY2VcIikge1xuICAgICAgc2V0VHlwZShjaG9pY2VUeXBlKTtcbiAgICAgIHNldFJlc3BvbnNlcyhwcm9wcy5zdG9yeVtpbmRleF0ucmVzcG9uc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VHlwZShkaWFsb2d1ZVR5cGUpO1xuICAgICAgc2V0VGV4dChwcm9wcy5zdG9yeVtpbmRleF0udGV4dCk7XG4gICAgICBzZXROYW1lKHByb3BzLnN0b3J5W2luZGV4XS5uYW1lKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlcik7XG5cbiAgICAvLyDwn5GH77iPIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVldWUpIGhhbmRsZU5leHRCdXR0b25DbGljaygpO1xuICB9LCBbcXVldWVdKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNob2ljZXMoKSB7XG4gICAgY29uc3QgY2hvaWNlcyA9IHByb3BzLnN0b3J5W2luZGV4XS5jaG9pY2VzLm1hcCgoY2hvaWNlLCBudW0pID0+IChcbiAgICAgIDxDaG9pY2VcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hvaWNlQ2xpY2socHJvcHMuc3RvcnlbaW5kZXhdLnJlc3BvbnNlc1tudW1dKX1cbiAgICAgICAga2V5PXtudW19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvY2hvaWNlX2J1dHRvbi5wbmdcIiBsYXlvdXQ9e1wiZmlsbFwifS8+XG4gICAgICAgIDxDaG9pY2VUZXh0PntjaG9pY2V9PC9DaG9pY2VUZXh0PlxuICAgICAgPC9DaG9pY2U+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gPENob2ljZUFyZWE+e2Nob2ljZXN9PC9DaG9pY2VBcmVhPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFja2dyb3VuZCBzcmM9e1wiL2JhY2tncm91bmRzL2hxLnBuZ1wifSAvPlxuICAgICAgPENoYXJhY3RlclxuICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH1cbiAgICAgICAgc3JjPXtcIi9jaGFyYWN0ZXJzL1wiICsgcHJvcHMuY2hhcmFjdGVyICsgXCIucG5nXCJ9XG4gICAgICAvPlxuICAgICAge2lzTG9nT3BlbiAmJiA8TG9nIG9uRXhpdD17aGFuZGxlRXhpdExvZ0J1dHRvbn0gbG9ncz17cHJvcHMubG9nfSAvPn1cbiAgICAgIDxMb2dCdXR0b24gc3JjPVwiL2xvZy5wbmdcIiBvbkNsaWNrPXtoYW5kbGVMb2dCdXR0b25DbGlja30gLz5cbiAgICAgIDxIb21lRGlhbG9nIC8+XG4gICAgICB7dHlwZSA9PT0gZGlhbG9ndWVUeXBlICYmIChcbiAgICAgICAgPERpYWxvZ3VlQXJlYT5cbiAgICAgICAgICA8VGV4dEFyZWE+XG4gICAgICAgICAgICA8TmFtZUFyZWE+XG4gICAgICAgICAgICAgIDxOYW1lVGV4dD57bmFtZX08L05hbWVUZXh0PlxuICAgICAgICAgICAgPC9OYW1lQXJlYT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYnViYmxlLnBuZ1wiIGxheW91dD17XCJmaWxsXCJ9Lz5cbiAgICAgICAgICAgIDxUZXh0Pnt3b3JkfTwvVGV4dD5cbiAgICAgICAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja30+XG4gICAgICAgICAgICAgIDxOYW1lVGV4dD5OZXh0PC9OYW1lVGV4dD5cbiAgICAgICAgICAgIDwvTmV4dEJ1dHRvbj5cbiAgICAgICAgICA8L1RleHRBcmVhPlxuICAgICAgICA8L0RpYWxvZ3VlQXJlYT5cbiAgICAgICl9XG4gICAgICB7dHlwZSA9PT0gY2hvaWNlVHlwZSAmJiBnZW5lcmF0ZUNob2ljZXMoKX1cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG5gO1xuXG5jb25zdCBDaGFyYWN0ZXIgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDQlO1xuICBib3R0b206IDEwJTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaGVpZ2h0ICsgXCIlXCIgfHwgXCI4MCVcIn07XG5gO1xuXG5jb25zdCBMb2dCdXR0b24gPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgTmV4dEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1JTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5gO1xuXG5jb25zdCBDaG9pY2VBcmVhID0gc3R5bGVkLmRpdmBcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgQ2hvaWNlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMmVtO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbmA7XG5cbmNvbnN0IERpYWxvZ3VlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5gO1xuXG5jb25zdCBOYW1lQXJlYSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IENob2ljZVRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAwZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA4MCU7XG5gO1xuXG5jb25zdCBOYW1lVGV4dCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IGRhcmtibHVlO1xuYDtcblxuY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAwZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA4MCU7XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwic3R5bGVkIiwidXNlVHlwaW5nVGV4dCIsIkhvbWVEaWFsb2ciLCJMb2ciLCJkaWFsb2d1ZVR5cGUiLCJjaG9pY2VUeXBlIiwiR2FtZSIsInByb3BzIiwidHlwZSIsInNldFR5cGUiLCJpbmRleCIsInNldEluZGV4IiwicXVldWUiLCJzZXRRdWV1ZSIsInRleHQiLCJzZXRUZXh0IiwibmFtZSIsInNldE5hbWUiLCJyZXNwb25zZXMiLCJzZXRSZXNwb25zZXMiLCJpc0xvZ09wZW4iLCJzZXRMb2dPcGVuIiwid29yZCIsImhhbmRsZU5leHRCdXR0b25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZSIsInNoaWZ0Iiwic3RvcnkiLCJ1cGRhdGUiLCJuZXh0Q2hhcHRlciIsImhhbmRsZUxvZ0J1dHRvbkNsaWNrIiwiaGFuZGxlRXhpdExvZ0J1dHRvbiIsImhhbmRsZUNob2ljZUNsaWNrIiwiZGF0YSIsImNvbmNhdCIsImtleURvd25IYW5kbGVyIiwiZSIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZUNob2ljZXMiLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwibnVtIiwiaGVpZ2h0IiwiY2hhcmFjdGVyIiwiQmFja2dyb3VuZCIsImltZyIsIkNoYXJhY3RlciIsIkxvZ0J1dHRvbiIsIk5leHRCdXR0b24iLCJkaXYiLCJDaG9pY2VBcmVhIiwiQ2hvaWNlIiwiRGlhbG9ndWVBcmVhIiwiTmFtZUFyZWEiLCJDaG9pY2VUZXh0IiwicCIsIk5hbWVUZXh0IiwiaDEiLCJUZXh0QXJlYSIsIlRleHQiLCJXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
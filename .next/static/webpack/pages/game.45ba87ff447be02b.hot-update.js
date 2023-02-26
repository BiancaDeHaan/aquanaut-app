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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/useTypingTest */ \"./src/app/useTypingTest.tsx\");\n/* harmony import */ var _AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertDialog */ \"./src/components/AlertDialog.tsx\");\n/* harmony import */ var _public_bubble_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/bubble.png */ \"./public/bubble.png\");\n/* harmony import */ var _public_log_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/log.png */ \"./public/log.png\");\n/* harmony import */ var _public_choice_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/choice_button.png */ \"./public/choice_button.png\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Log */ \"./src/components/Log.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/home/bian/Documents/Github/aquanaut-app/src/components/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // TODO consolidate setX from type into a function\n\n\nvar dialogueType = \"DIALOGUE\";\nvar choiceType = \"CHOICE\";\n\nfunction Game(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      type = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      queue = _useState3[0],\n      setQueue = _useState3[1]; //Game related\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      name = _useState5[0],\n      setName = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      responses = _useState6[0],\n      setResponses = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLogOpen = _useState7[0],\n      setLogOpen = _useState7[1];\n\n  var _useTypingText = (0,_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText)(text, 50),\n      word = _useTypingText.word;\n\n  function handleNextButtonClick() {\n    console.log(\"Next button clicked\"); // Finish queue if not empty\n\n    if (queue && queue.length > 0) {\n      var value = queue.shift();\n\n      if (value.type && value.type === \"choice\") {\n        setType(choiceType);\n        setResponses(value.responses);\n      } else {\n        setType(dialogueType);\n        setText(value.text);\n        setName(value.name);\n      }\n\n      return;\n    }\n\n    if (index < props.story.length - 1) {\n      var update = index + 1;\n\n      if (props.story[update].type && props.story[update].type === \"choice\") {\n        setType(choiceType);\n        setResponses(props.story[update].responses);\n      } else {\n        setType(dialogueType);\n        setText(props.story[update].text);\n        setName(props.story[update].name);\n      }\n\n      setIndex(update);\n    } else {\n      // Next chapter\n      props.nextChapter(); // End of story\n    }\n  }\n\n  function handleLogButtonClick() {\n    setLogOpen(true);\n  }\n\n  function handleExitLogButton() {\n    setLogOpen(false);\n  }\n\n  function handleChoiceClick(data) {\n    var value = data;\n    value.concat(queue);\n    setQueue(value);\n  }\n\n  function keyDownHandler(e) {\n    if (e.key === \"Escape\") {\n      setLogOpen(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.story[index].type && props.story[index].type === \"choice\") {\n      setType(choiceType);\n      setResponses(props.story[index].responses);\n    } else {\n      setType(dialogueType);\n      setText(props.story[index].text);\n      setName(props.story[index].name);\n    }\n\n    document.addEventListener(\"keydown\", keyDownHandler); // 👇️ clean up event listener\n\n    return function () {\n      document.removeEventListener(\"keydown\", keyDownHandler);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (queue) handleNextButtonClick();\n  }, [queue]);\n\n  function generateChoices() {\n    var _this = this;\n\n    var choices = props.story[index].choices.map(function (choice, num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Choice, {\n        onClick: function onClick() {\n          return handleChoiceClick(props.story[index].responses[num]);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: _public_choice_button_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(ChoiceText, {\n          children: choice\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 9\n        }, _this)]\n      }, num, true, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 7\n      }, _this);\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(ChoiceArea, {\n      children: choices\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Background, {\n      src: \"/backgrounds/hq.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Character, {\n      height: props.height,\n      src: \"/characters/\" + props.character + \".png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this), isLogOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Log__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onExit: handleExitLogButton,\n      logs: props.log\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(LogButton, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: _public_log_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        onClick: handleLogButtonClick\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }, this), type === dialogueType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(DialogueArea, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(TextArea, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameArea, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameText, {\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: _public_bubble_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Text, {\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NextButton, {\n          onClick: handleNextButtonClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(NameText, {\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }, this), type === choiceType && generateChoices()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 139,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Game, \"Gq+kfw7g0daXHUkyVuKNXSMYBYY=\", false, function () {\n  return [_app_useTypingTest__WEBPACK_IMPORTED_MODULE_2__.useTypingText];\n});\n\n_c = Game;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].img.withConfig({\n  displayName: \"Game__Background\",\n  componentId: \"sc-1w7gpub-0\"\n})([\"position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:-1;\"]);\n_c2 = Background;\nvar Character = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].img.withConfig({\n  displayName: \"Game__Character\",\n  componentId: \"sc-1w7gpub-1\"\n})([\"position:fixed;left:4%;bottom:10%;height:\", \";\"], function (props) {\n  return props.height + \"%\" || 0;\n});\n_c3 = Character;\nvar LogButton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__LogButton\",\n  componentId: \"sc-1w7gpub-2\"\n})([\"position:fixed;top:0;left:0;width:5%;border-radius:50%;z-index:3;&:hover{cursor:pointer;}\"]);\n_c4 = LogButton;\nvar NextButton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__NextButton\",\n  componentId: \"sc-1w7gpub-3\"\n})([\"right:0;bottom:0;position:absolute;width:15%;&:hover{cursor:pointer;color:gray;}\"]);\n_c5 = NextButton;\nvar ChoiceArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__ChoiceArea\",\n  componentId: \"sc-1w7gpub-4\"\n})([\"transform:translate(-50%,-50%);top:50%;left:50%;position:absolute;text-align:center;display:flex;flex-direction:column;\"]);\n_c6 = ChoiceArea;\nvar Choice = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__Choice\",\n  componentId: \"sc-1w7gpub-5\"\n})([\"text-align:center;position:relative;display:block;font-size:1.2em;&:hover{cursor:pointer;color:gray;}\"]);\n_c7 = Choice;\nvar DialogueArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__DialogueArea\",\n  componentId: \"sc-1w7gpub-6\"\n})([\"bottom:0%;text-align:center;position:fixed;display:flex;flex-direction:column;margin-bottom:8px;\"]);\n_c8 = DialogueArea;\nvar NameArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__NameArea\",\n  componentId: \"sc-1w7gpub-7\"\n})([\"position:relative;text-align:center;display:block;\"]);\n_c9 = NameArea;\nvar ChoiceText = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].p.withConfig({\n  displayName: \"Game__ChoiceText\",\n  componentId: \"sc-1w7gpub-8\"\n})([\"font-size:1.2em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;width:80%;\"]);\n_c10 = ChoiceText;\nvar NameText = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h1.withConfig({\n  displayName: \"Game__NameText\",\n  componentId: \"sc-1w7gpub-9\"\n})([\"font-size:1.5em;margin:0em;text-align:left;border:solid;border-radius:2em;width:fit-content;padding:10px 20px;background-color:white;border-color:darkblue;\"]);\n_c11 = NameText;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__TextArea\",\n  componentId: \"sc-1w7gpub-10\"\n})([\"position:relative;text-align:center;width:60%;margin-left:auto;margin-right:auto;display:block;\"]);\n_c12 = TextArea;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__Text\",\n  componentId: \"sc-1w7gpub-11\"\n})([\"font-size:1.5em;margin:0em;position:absolute;transform:translate(-50%,-50%);top:60%;left:50%;width:80%;\"]);\n_c13 = Text;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Game__Wrapper\",\n  componentId: \"sc-1w7gpub-12\"\n})([\"width:100%;height:100%;\"]);\n_c14 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n\n$RefreshReg$(_c, \"Game\");\n$RefreshReg$(_c2, \"Background\");\n$RefreshReg$(_c3, \"Character\");\n$RefreshReg$(_c4, \"LogButton\");\n$RefreshReg$(_c5, \"NextButton\");\n$RefreshReg$(_c6, \"ChoiceArea\");\n$RefreshReg$(_c7, \"Choice\");\n$RefreshReg$(_c8, \"DialogueArea\");\n$RefreshReg$(_c9, \"NameArea\");\n$RefreshReg$(_c10, \"ChoiceText\");\n$RefreshReg$(_c11, \"NameText\");\n$RefreshReg$(_c12, \"TextArea\");\n$RefreshReg$(_c13, \"Text\");\n$RefreshReg$(_c14, \"Wrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUg7RUFBQTtFQUFBO0FBQUEsMkVBQWhCO01BQU1xRDtBQVFOLElBQU1FLFNBQVMsR0FBR3ZELHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVEQUlILFVBQUNVLEtBQUQ7RUFBQSxPQUFXQSxLQUFLLENBQUN5QyxNQUFOLEdBQWUsR0FBZixJQUFzQixDQUFqQztBQUFBLENBSkcsQ0FBZjtNQUFNSTtBQU9OLElBQU1DLFNBQVMsR0FBR3hELHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlHQUFmO01BQU13RDtBQVlOLElBQU1FLFVBQVUsR0FBRzFELHdFQUFIO0VBQUE7RUFBQTtBQUFBLHdGQUFoQjtNQUFNMEQ7QUFXTixJQUFNQyxVQUFVLEdBQUczRCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrSEFBaEI7TUFBTTJEO0FBVU4sSUFBTUMsTUFBTSxHQUFHNUQsd0VBQUg7RUFBQTtFQUFBO0FBQUEsNkdBQVo7TUFBTTREO0FBV04sSUFBTUMsWUFBWSxHQUFHN0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0dBQWxCO01BQU02RDtBQVNOLElBQU1DLFFBQVEsR0FBRzlELHdFQUFIO0VBQUE7RUFBQTtBQUFBLDBEQUFkO01BQU04RDtBQU1OLElBQU1DLFVBQVUsR0FBRy9ELHNFQUFIO0VBQUE7RUFBQTtBQUFBLCtHQUFoQjtPQUFNK0Q7QUFVTixJQUFNRSxRQUFRLEdBQUdqRSx1RUFBSDtFQUFBO0VBQUE7QUFBQSxtS0FBZDtPQUFNaUU7QUFZTixJQUFNRSxRQUFRLEdBQUduRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSx1R0FBZDtPQUFNbUU7QUFTTixJQUFNQyxJQUFJLEdBQUdwRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrR0FBVjtPQUFNb0U7QUFVTixJQUFNQyxPQUFPLEdBQUdyRSx3RUFBSDtFQUFBO0VBQUE7QUFBQSwrQkFBYjtPQUFNcUU7QUFLTiwrREFBZTVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZS50c3g/MzY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlVHlwaW5nVGV4dCB9IGZyb20gXCIuLi9hcHAvdXNlVHlwaW5nVGVzdFwiO1xuaW1wb3J0IEhvbWVEaWFsb2cgZnJvbSBcIi4vQWxlcnREaWFsb2dcIjtcbmltcG9ydCB0ZXh0SW1hZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy9idWJibGUucG5nXCI7XG5pbXBvcnQgbmFtZUltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvbmFtZS5wbmdcIjtcbmltcG9ydCBsb2dJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL2xvZy5wbmdcIjtcbmltcG9ydCBjaG9pY2VJbWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL2Nob2ljZV9idXR0b24ucG5nXCI7XG5pbXBvcnQgTG9nLCB7IExvZ0VudHJ5IH0gZnJvbSBcIi4vTG9nXCI7XG4vLyBUT0RPIGNvbnNvbGlkYXRlIHNldFggZnJvbSB0eXBlIGludG8gYSBmdW5jdGlvblxuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGNob2ljZXM/OiBzdHJpbmdbXTtcbiAgcmVzcG9uc2VzPzogRGF0YVtdW107XG59XG5cbmludGVyZmFjZSBTdG9yeURhdGEge1xuICBzdG9yeTogRGF0YVtdO1xuICBuZXh0Q2hhcHRlcjogKCkgPT4gdm9pZDtcbiAgY2hhcHRlcjogbnVtYmVyO1xuICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIGxvZzogTG9nRW50cnlbXTtcbn1cblxuY29uc3QgZGlhbG9ndWVUeXBlID0gXCJESUFMT0dVRVwiO1xuY29uc3QgY2hvaWNlVHlwZSA9IFwiQ0hPSUNFXCI7XG5cbmZ1bmN0aW9uIEdhbWUocHJvcHM6IFN0b3J5RGF0YSkge1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgW3F1ZXVlLCBzZXRRdWV1ZV0gPSB1c2VTdGF0ZTxEYXRhW10+KCk7XG5cbiAgLy9HYW1lIHJlbGF0ZWRcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3Jlc3BvbnNlcywgc2V0UmVzcG9uc2VzXSA9IHVzZVN0YXRlPERhdGFbXVtdPigpO1xuXG4gIGNvbnN0IFtpc0xvZ09wZW4sIHNldExvZ09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHsgd29yZCB9ID0gdXNlVHlwaW5nVGV4dCh0ZXh0LCA1MCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dEJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiTmV4dCBidXR0b24gY2xpY2tlZFwiKTtcbiAgICAvLyBGaW5pc2ggcXVldWUgaWYgbm90IGVtcHR5XG4gICAgaWYgKHF1ZXVlICYmIHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIGlmICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUgPT09IFwiY2hvaWNlXCIpIHtcbiAgICAgICAgc2V0VHlwZShjaG9pY2VUeXBlKTtcbiAgICAgICAgc2V0UmVzcG9uc2VzKHZhbHVlLnJlc3BvbnNlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUeXBlKGRpYWxvZ3VlVHlwZSk7XG4gICAgICAgIHNldFRleHQodmFsdWUudGV4dCk7XG4gICAgICAgIHNldE5hbWUodmFsdWUubmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmRleCA8IHByb3BzLnN0b3J5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGluZGV4ICsgMTtcbiAgICAgIGlmIChwcm9wcy5zdG9yeVt1cGRhdGVdLnR5cGUgJiYgcHJvcHMuc3RvcnlbdXBkYXRlXS50eXBlID09PSBcImNob2ljZVwiKSB7XG4gICAgICAgIHNldFR5cGUoY2hvaWNlVHlwZSk7XG4gICAgICAgIHNldFJlc3BvbnNlcyhwcm9wcy5zdG9yeVt1cGRhdGVdLnJlc3BvbnNlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUeXBlKGRpYWxvZ3VlVHlwZSk7XG4gICAgICAgIHNldFRleHQocHJvcHMuc3RvcnlbdXBkYXRlXS50ZXh0KTtcbiAgICAgICAgc2V0TmFtZShwcm9wcy5zdG9yeVt1cGRhdGVdLm5hbWUpO1xuICAgICAgfVxuICAgICAgc2V0SW5kZXgodXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTmV4dCBjaGFwdGVyXG4gICAgICBwcm9wcy5uZXh0Q2hhcHRlcigpO1xuICAgICAgLy8gRW5kIG9mIHN0b3J5XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTG9nQnV0dG9uQ2xpY2soKSB7XG4gICAgc2V0TG9nT3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUV4aXRMb2dCdXR0b24oKSB7XG4gICAgc2V0TG9nT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaG9pY2VDbGljayhkYXRhOiBEYXRhW10pIHtcbiAgICB2YXIgdmFsdWUgPSBkYXRhO1xuICAgIHZhbHVlLmNvbmNhdChxdWV1ZSk7XG4gICAgc2V0UXVldWUodmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgc2V0TG9nT3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuc3RvcnlbaW5kZXhdLnR5cGUgJiYgcHJvcHMuc3RvcnlbaW5kZXhdLnR5cGUgPT09IFwiY2hvaWNlXCIpIHtcbiAgICAgIHNldFR5cGUoY2hvaWNlVHlwZSk7XG4gICAgICBzZXRSZXNwb25zZXMocHJvcHMuc3RvcnlbaW5kZXhdLnJlc3BvbnNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFR5cGUoZGlhbG9ndWVUeXBlKTtcbiAgICAgIHNldFRleHQocHJvcHMuc3RvcnlbaW5kZXhdLnRleHQpO1xuICAgICAgc2V0TmFtZShwcm9wcy5zdG9yeVtpbmRleF0ubmFtZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuXG4gICAgLy8g8J+Rh++4jyBjbGVhbiB1cCBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXVlKSBoYW5kbGVOZXh0QnV0dG9uQ2xpY2soKTtcbiAgfSwgW3F1ZXVlXSk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDaG9pY2VzKCkge1xuICAgIGNvbnN0IGNob2ljZXMgPSBwcm9wcy5zdG9yeVtpbmRleF0uY2hvaWNlcy5tYXAoKGNob2ljZSwgbnVtKSA9PiAoXG4gICAgICA8Q2hvaWNlXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNob2ljZUNsaWNrKHByb3BzLnN0b3J5W2luZGV4XS5yZXNwb25zZXNbbnVtXSl9XG4gICAgICAgIGtleT17bnVtfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtjaG9pY2VJbWFnZX0gLz5cbiAgICAgICAgPENob2ljZVRleHQ+e2Nob2ljZX08L0Nob2ljZVRleHQ+XG4gICAgICA8L0Nob2ljZT5cbiAgICApKTtcblxuICAgIHJldHVybiA8Q2hvaWNlQXJlYT57Y2hvaWNlc308L0Nob2ljZUFyZWE+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCYWNrZ3JvdW5kIHNyYz17XCIvYmFja2dyb3VuZHMvaHEucG5nXCJ9IC8+XG4gICAgICA8Q2hhcmFjdGVyXG4gICAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgICAgICBzcmM9e1wiL2NoYXJhY3RlcnMvXCIgKyBwcm9wcy5jaGFyYWN0ZXIgKyBcIi5wbmdcIn1cbiAgICAgIC8+XG4gICAgICB7aXNMb2dPcGVuICYmIDxMb2cgb25FeGl0PXtoYW5kbGVFeGl0TG9nQnV0dG9ufSBsb2dzPXtwcm9wcy5sb2d9IC8+fVxuICAgICAgPExvZ0J1dHRvbj5cbiAgICAgICAgPEltYWdlIHNyYz17bG9nSW1hZ2V9IG9uQ2xpY2s9e2hhbmRsZUxvZ0J1dHRvbkNsaWNrfSAvPlxuICAgICAgPC9Mb2dCdXR0b24+XG4gICAgICA8SG9tZURpYWxvZyAvPlxuICAgICAge3R5cGUgPT09IGRpYWxvZ3VlVHlwZSAmJiAoXG4gICAgICAgIDxEaWFsb2d1ZUFyZWE+XG4gICAgICAgICAgPFRleHRBcmVhPlxuICAgICAgICAgICAgPE5hbWVBcmVhPlxuICAgICAgICAgICAgICA8TmFtZVRleHQ+e25hbWV9PC9OYW1lVGV4dD5cbiAgICAgICAgICAgIDwvTmFtZUFyZWE+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0ZXh0SW1hZ2V9IC8+XG4gICAgICAgICAgICA8VGV4dD57d29yZH08L1RleHQ+XG4gICAgICAgICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgICA8TmFtZVRleHQ+TmV4dDwvTmFtZVRleHQ+XG4gICAgICAgICAgICA8L05leHRCdXR0b24+XG4gICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgPC9EaWFsb2d1ZUFyZWE+XG4gICAgICApfVxuICAgICAge3R5cGUgPT09IGNob2ljZVR5cGUgJiYgZ2VuZXJhdGVDaG9pY2VzKCl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuYDtcblxuY29uc3QgQ2hhcmFjdGVyID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA0JTtcbiAgYm90dG9tOiAxMCU7XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmhlaWdodCArIFwiJVwiIHx8IFwiODAlXCJ9O1xuYDtcblxuY29uc3QgTG9nQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IE5leHRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNSU7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuYDtcblxuY29uc3QgQ2hvaWNlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IENob2ljZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5gO1xuXG5jb25zdCBEaWFsb2d1ZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxuY29uc3QgTmFtZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBDaG9pY2VUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogODAlO1xuYDtcblxuY29uc3QgTmFtZVRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcbmA7XG5cbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogODAlO1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlZCIsInVzZVR5cGluZ1RleHQiLCJIb21lRGlhbG9nIiwidGV4dEltYWdlIiwibG9nSW1hZ2UiLCJjaG9pY2VJbWFnZSIsIkxvZyIsImRpYWxvZ3VlVHlwZSIsImNob2ljZVR5cGUiLCJHYW1lIiwicHJvcHMiLCJ0eXBlIiwic2V0VHlwZSIsImluZGV4Iiwic2V0SW5kZXgiLCJxdWV1ZSIsInNldFF1ZXVlIiwidGV4dCIsInNldFRleHQiLCJuYW1lIiwic2V0TmFtZSIsInJlc3BvbnNlcyIsInNldFJlc3BvbnNlcyIsImlzTG9nT3BlbiIsInNldExvZ09wZW4iLCJ3b3JkIiwiaGFuZGxlTmV4dEJ1dHRvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInZhbHVlIiwic2hpZnQiLCJzdG9yeSIsInVwZGF0ZSIsIm5leHRDaGFwdGVyIiwiaGFuZGxlTG9nQnV0dG9uQ2xpY2siLCJoYW5kbGVFeGl0TG9nQnV0dG9uIiwiaGFuZGxlQ2hvaWNlQ2xpY2siLCJkYXRhIiwiY29uY2F0Iiwia2V5RG93bkhhbmRsZXIiLCJlIiwia2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdlbmVyYXRlQ2hvaWNlcyIsImNob2ljZXMiLCJtYXAiLCJjaG9pY2UiLCJudW0iLCJoZWlnaHQiLCJjaGFyYWN0ZXIiLCJCYWNrZ3JvdW5kIiwiaW1nIiwiQ2hhcmFjdGVyIiwiTG9nQnV0dG9uIiwiZGl2IiwiTmV4dEJ1dHRvbiIsIkNob2ljZUFyZWEiLCJDaG9pY2UiLCJEaWFsb2d1ZUFyZWEiLCJOYW1lQXJlYSIsIkNob2ljZVRleHQiLCJwIiwiTmFtZVRleHQiLCJoMSIsIlRleHRBcmVhIiwiVGV4dCIsIldyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n"));

/***/ })

});
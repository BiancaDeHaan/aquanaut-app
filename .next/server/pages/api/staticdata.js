"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/staticdata";
exports.ids = ["pages/api/staticdata"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/staticdata.ts":
/*!*************************************!*\
  !*** ./src/pages/api/staticdata.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst numChapters = 2;\nasync function handler(req, res) {\n  //Find the absolute path of the json directory\n  const {\n    query\n  } = req.query;\n  const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"src/chapters\"); //Read the json data file data.json\n\n  var fileContents;\n\n  try {\n    fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/\" + query + \".json\", \"utf8\");\n  } catch (err) {\n    // File not found error\n    res.status(200).json({\n      state: \"game_over\"\n    });\n    return;\n  }\n\n  jsonDirectory; //Return the content of the data file in json format\n\n  res.status(200).json(fileContents);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXRpY2RhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsTUFBTUcsV0FBVyxHQUFHLENBQXBCO0FBRWUsZUFBZUMsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtFQUNBO0VBQ0EsTUFBTTtJQUFFQztFQUFGLElBQVlGLEdBQUcsQ0FBQ0UsS0FBdEI7RUFDQSxNQUFNQyxhQUFhLEdBQUdSLGdEQUFBLENBQVVVLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLGNBQXpCLENBQXRCLENBSEEsQ0FJQTs7RUFDQSxJQUFJQyxZQUFKOztFQUNBLElBQUk7SUFDRkEsWUFBWSxHQUFHLE1BQU1WLGlEQUFBLENBQ25CTSxhQUFhLEdBQUcsR0FBaEIsR0FBc0JELEtBQXRCLEdBQThCLE9BRFgsRUFFbkIsTUFGbUIsQ0FBckI7RUFJRCxDQUxELENBS0UsT0FBT08sR0FBUCxFQUFZO0lBQ1o7SUFDQVIsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsS0FBSyxFQUFFO0lBQVQsQ0FBckI7SUFDQTtFQUNEOztFQUNEVCxhQUFhLENBaEJiLENBaUJBOztFQUNBRixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosWUFBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvc3RhdGljZGF0YS50cz80NTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmNvbnN0IG51bUNoYXB0ZXJzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAvL0ZpbmQgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIGpzb24gZGlyZWN0b3J5XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJlcS5xdWVyeTtcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyYy9jaGFwdGVyc1wiKTtcbiAgLy9SZWFkIHRoZSBqc29uIGRhdGEgZmlsZSBkYXRhLmpzb25cbiAgdmFyIGZpbGVDb250ZW50cztcbiAgdHJ5IHtcbiAgICBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShcbiAgICAgIGpzb25EaXJlY3RvcnkgKyBcIi9cIiArIHF1ZXJ5ICsgXCIuanNvblwiLFxuICAgICAgXCJ1dGY4XCJcbiAgICApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBGaWxlIG5vdCBmb3VuZCBlcnJvclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdGU6IFwiZ2FtZV9vdmVyXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGpzb25EaXJlY3Rvcnk7XG4gIC8vUmV0dXJuIHRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGZpbGUgaW4ganNvbiBmb3JtYXRcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsIm51bUNoYXB0ZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/staticdata.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/staticdata.ts"));
module.exports = __webpack_exports__;

})();
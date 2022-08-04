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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst numChapters = 2;\nasync function handler(req, res) {\n  //Find the absolute path of the json directory\n  const {\n    query\n  } = req.query;\n  const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'src/chapters'); //Read the json data file data.json\n\n  var fileContents;\n\n  try {\n    fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + '/' + query + '.json', 'utf8');\n  } catch (err) {\n    // File not found error \n    res.status(200).json({\n      state: 'game_over'\n    });\n    return;\n  } //Return the content of the data file in json format\n\n\n  res.status(200).json(fileContents);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXRpY2RhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsTUFBTUcsV0FBVyxHQUFHLENBQXBCO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNkNDLEdBQTdDLEVBQW1FO0VBQ2hGO0VBQ0EsTUFBTTtJQUFFQztFQUFGLElBQVlGLEdBQUcsQ0FBQ0UsS0FBdEI7RUFDQSxNQUFNQyxhQUFhLEdBQUdSLGdEQUFBLENBQVVVLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLGNBQXpCLENBQXRCLENBSGdGLENBSWhGOztFQUNBLElBQUlDLFlBQUo7O0VBQ0EsSUFBSTtJQUNGQSxZQUFZLEdBQUcsTUFBTVYsaURBQUEsQ0FBWU0sYUFBYSxHQUFHLEdBQWhCLEdBQXNCRCxLQUF0QixHQUE4QixPQUExQyxFQUFtRCxNQUFuRCxDQUFyQjtFQUNELENBRkQsQ0FFRSxPQUFPTyxHQUFQLEVBQVk7SUFDWjtJQUNDUixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxLQUFLLEVBQUU7SUFBVCxDQUFyQjtJQUNBO0VBQ0YsQ0FaK0UsQ0FhaEY7OztFQUNBWCxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosWUFBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvc3RhdGljZGF0YS50cz80NTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuY29uc3QgbnVtQ2hhcHRlcnMgPSAyO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSA6IE5leHRBcGlSZXF1ZXN0LCByZXMgOk5leHRBcGlSZXNwb25zZSkge1xuICAvL0ZpbmQgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIGpzb24gZGlyZWN0b3J5XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJlcS5xdWVyeTtcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2NoYXB0ZXJzJyk7XG4gIC8vUmVhZCB0aGUganNvbiBkYXRhIGZpbGUgZGF0YS5qc29uXG4gIHZhciBmaWxlQ29udGVudHM7XG4gIHRyeSB7XG4gICAgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoanNvbkRpcmVjdG9yeSArICcvJyArIHF1ZXJ5ICsgJy5qc29uJywgJ3V0ZjgnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRmlsZSBub3QgZm91bmQgZXJyb3IgXG4gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdGU6ICdnYW1lX292ZXInIH0pO1xuICAgICByZXR1cm47XG4gIH0gIFxuICAvL1JldHVybiB0aGUgY29udGVudCBvZiB0aGUgZGF0YSBmaWxlIGluIGpzb24gZm9ybWF0XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbGVDb250ZW50cyk7XG59Il0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwibnVtQ2hhcHRlcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJqc29uRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZSIsImVyciIsInN0YXR1cyIsImpzb24iLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/staticdata.ts\n");

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
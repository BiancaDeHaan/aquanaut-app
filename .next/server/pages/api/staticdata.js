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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst numChapters = 2;\nasync function handler(req, res) {\n    //Find the absolute path of the json directory\n    const { query  } = req.query;\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"src/chapters\");\n    //Read the json data file data.json\n    var fileContents;\n    try {\n        fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/\" + query + \".json\", \"utf8\");\n    } catch (err) {\n        // File not found error \n        res.status(200).json({\n            state: \"game_over\"\n        });\n        return;\n    }\n    //Return the content of the data file in json format\n    res.status(200).json(fileContents);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXRpY2RhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDWTtBQUdwQyxNQUFNRyxXQUFXLEdBQUcsQ0FBQztBQUVOLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBb0IsRUFBRUMsR0FBb0IsRUFBRTtJQUNoRiw4Q0FBOEM7SUFDOUMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRSxLQUFLO0lBQzNCLE1BQU1DLGFBQWEsR0FBR1IsZ0RBQVMsQ0FBQ1UsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxjQUFjLENBQUM7SUFDOUQsbUNBQW1DO0lBQ25DLElBQUlDLFlBQVk7SUFDaEIsSUFBSTtRQUNGQSxZQUFZLEdBQUcsTUFBTVYsaURBQVcsQ0FBQ00sYUFBYSxHQUFHLEdBQUcsR0FBR0QsS0FBSyxHQUFHLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRixDQUFDLE9BQU9PLEdBQUcsRUFBRTtRQUNaLHdCQUF3QjtRQUN2QlIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsV0FBVztTQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPO0tBQ1Q7SUFDRCxvREFBb0Q7SUFDcERYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLFlBQVksQ0FBQyxDQUFDO0NBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9zdGF0aWNkYXRhLnRzPzQ1NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBudW1DaGFwdGVycyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxIDogTmV4dEFwaVJlcXVlc3QsIHJlcyA6TmV4dEFwaVJlc3BvbnNlKSB7XG4gIC8vRmluZCB0aGUgYWJzb2x1dGUgcGF0aCBvZiB0aGUganNvbiBkaXJlY3RvcnlcbiAgY29uc3QgeyBxdWVyeSB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCBqc29uRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvY2hhcHRlcnMnKTtcbiAgLy9SZWFkIHRoZSBqc29uIGRhdGEgZmlsZSBkYXRhLmpzb25cbiAgdmFyIGZpbGVDb250ZW50cztcbiAgdHJ5IHtcbiAgICBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy8nICsgcXVlcnkgKyAnLmpzb24nLCAndXRmOCcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBGaWxlIG5vdCBmb3VuZCBlcnJvciBcbiAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0ZTogJ2dhbWVfb3ZlcicgfSk7XG4gICAgIHJldHVybjtcbiAgfSAgXG4gIC8vUmV0dXJuIHRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGZpbGUgaW4ganNvbiBmb3JtYXRcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcbn0iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJudW1DaGFwdGVycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwiZXJyIiwic3RhdHVzIiwianNvbiIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/staticdata.ts\n");

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
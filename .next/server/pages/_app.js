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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/counter/counterSlice */ \"./src/features/counter/counterSlice.ts\");\n\n\nfunction makeStore() {\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        }\n    });\n}\nconst store = makeStore();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNFO0FBRVQ7QUFFdEQsU0FBU0UsU0FBUyxHQUFHO0lBQzFCLE9BQU9GLGdFQUFjLENBQUM7UUFDcEJHLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUVILHNFQUFjO1NBQUU7S0FDckMsQ0FBQztDQUNIO0FBRUQsTUFBTUksS0FBSyxHQUFHSCxTQUFTLEVBQUU7QUFhekIsaUVBQWVHLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlLnRzPzE0N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RvcmUoKSB7XG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogeyBjb3VudGVyOiBjb3VudGVyUmVkdWNlciB9LFxuICB9KVxufVxuXG5jb25zdCBzdG9yZSA9IG1ha2VTdG9yZSgpXG5cbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXG5cbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBBcHBTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uPHN0cmluZz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNvdW50ZXJSZWR1Y2VyIiwibWFrZVN0b3JlIiwicmVkdWNlciIsImNvdW50ZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/features/counter/counterAPI.ts":
/*!********************************************!*\
  !*** ./src/features/counter/counterAPI.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCount\": () => (/* binding */ fetchCount)\n/* harmony export */ });\nasync function fetchCount(amount = 1) {\n    const response = await fetch(\"/api/counter\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            amount\n        })\n    });\n    const result = await response.json();\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyQVBJLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxVQUFVLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQTZCO0lBQ3RFLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQzNDQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBRVAsTUFBTTtTQUFFLENBQUM7S0FDakMsQ0FBQztJQUNGLE1BQU1RLE1BQU0sR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQUksRUFBRTtJQUVwQyxPQUFPRCxNQUFNO0NBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyQVBJLnRzPzJiNTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnQoYW1vdW50ID0gMSk6IFByb21pc2U8eyBkYXRhOiBudW1iZXIgfT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvdW50ZXInLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50IH0pLFxuICB9KVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hDb3VudCIsImFtb3VudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/counter/counterAPI.ts\n");

/***/ }),

/***/ "./src/features/counter/counterSlice.ts":
/*!**********************************************!*\
  !*** ./src/features/counter/counterSlice.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementAsync\": () => (/* binding */ incrementAsync),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"incrementIfOdd\": () => (/* binding */ incrementIfOdd),\n/* harmony export */   \"selectCount\": () => (/* binding */ selectCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counterAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterAPI */ \"./src/features/counter/counterAPI.ts\");\n\n\nconst initialState = {\n    value: 0,\n    status: \"idle\"\n};\n// The function below is called a thunk and allows us to perform async logic. It\n// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This\n// will call the thunk with the `dispatch` function as the first argument. Async\n// code can then be executed and other actions can be dispatched. Thunks are\n// typically used to make async requests.\nconst incrementAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"counter/fetchCount\", async (amount)=>{\n    const response = await (0,_counterAPI__WEBPACK_IMPORTED_MODULE_1__.fetchCount)(amount);\n    // The value we return becomes the `fulfilled` action payload\n    return response.data;\n});\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    // The `reducers` field lets us define reducers and generate associated actions\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        // Use the PayloadAction type to declare the contents of `action.payload`\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    },\n    // The `extraReducers` field lets the slice handle actions defined elsewhere,\n    // including actions generated by createAsyncThunk or in other slices.\n    extraReducers: (builder)=>{\n        builder.addCase(incrementAsync.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(incrementAsync.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.value += action.payload;\n        });\n    }\n});\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\n// The function below is called a selector and allows us to select a value from\n// the state. Selectors can also be defined inline where they're used instead of\n// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`\nconst selectCount = (state)=>state.counter.value;\n// We can also write thunks by hand, which may contain both sync and async logic.\n// Here's an example of conditionally dispatching actions based on current state.\nconst incrementIfOdd = (amount)=>(dispatch, getState)=>{\n        const currentValue = selectCount(getState());\n        if (currentValue % 2 === 1) {\n            dispatch(incrementByAmount(amount));\n        }\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0U7QUFHdEM7QUFPekMsTUFBTUcsWUFBWSxHQUFpQjtJQUNqQ0MsS0FBSyxFQUFFLENBQUM7SUFDUkMsTUFBTSxFQUFFLE1BQU07Q0FDZjtBQUVELGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBQ2hGLDRFQUE0RTtBQUM1RSx5Q0FBeUM7QUFDbEMsTUFBTUMsY0FBYyxHQUFHTixrRUFBZ0IsQ0FDNUMsb0JBQW9CLEVBQ3BCLE9BQU9PLE1BQWMsR0FBSztJQUN4QixNQUFNQyxRQUFRLEdBQUcsTUFBTU4sdURBQVUsQ0FBQ0ssTUFBTSxDQUFDO0lBQ3pDLDZEQUE2RDtJQUM3RCxPQUFPQyxRQUFRLENBQUNDLElBQUk7Q0FDckIsQ0FDRjtBQUVNLE1BQU1DLFlBQVksR0FBR1QsNkRBQVcsQ0FBQztJQUN0Q1UsSUFBSSxFQUFFLFNBQVM7SUFDZlIsWUFBWTtJQUNaLCtFQUErRTtJQUMvRVMsUUFBUSxFQUFFO1FBQ1JDLFNBQVMsRUFBRSxDQUFDQyxLQUFLLEdBQUs7WUFDcEIsb0VBQW9FO1lBQ3BFLHVFQUF1RTtZQUN2RSxvRUFBb0U7WUFDcEUsMENBQTBDO1lBQzFDQSxLQUFLLENBQUNWLEtBQUssSUFBSSxDQUFDO1NBQ2pCO1FBQ0RXLFNBQVMsRUFBRSxDQUFDRCxLQUFLLEdBQUs7WUFDcEJBLEtBQUssQ0FBQ1YsS0FBSyxJQUFJLENBQUM7U0FDakI7UUFDRCx5RUFBeUU7UUFDekVZLGlCQUFpQixFQUFFLENBQUNGLEtBQUssRUFBRUcsTUFBNkIsR0FBSztZQUMzREgsS0FBSyxDQUFDVixLQUFLLElBQUlhLE1BQU0sQ0FBQ0MsT0FBTztTQUM5QjtLQUNGO0lBQ0QsNkVBQTZFO0lBQzdFLHNFQUFzRTtJQUN0RUMsYUFBYSxFQUFFLENBQUNDLE9BQU8sR0FBSztRQUMxQkEsT0FBTyxDQUNKQyxPQUFPLENBQUNmLGNBQWMsQ0FBQ2dCLE9BQU8sRUFBRSxDQUFDUixLQUFLLEdBQUs7WUFDMUNBLEtBQUssQ0FBQ1QsTUFBTSxHQUFHLFNBQVM7U0FDekIsQ0FBQyxDQUNEZ0IsT0FBTyxDQUFDZixjQUFjLENBQUNpQixTQUFTLEVBQUUsQ0FBQ1QsS0FBSyxFQUFFRyxNQUFNLEdBQUs7WUFDcERILEtBQUssQ0FBQ1QsTUFBTSxHQUFHLE1BQU07WUFDckJTLEtBQUssQ0FBQ1YsS0FBSyxJQUFJYSxNQUFNLENBQUNDLE9BQU87U0FDOUIsQ0FBQztLQUNMO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRUwsU0FBUyxHQUFFRSxTQUFTLEdBQUVDLGlCQUFpQixHQUFFLEdBQUdOLFlBQVksQ0FBQ2MsT0FBTztBQUUvRSwrRUFBK0U7QUFDL0UsZ0ZBQWdGO0FBQ2hGLDJGQUEyRjtBQUNwRixNQUFNQyxXQUFXLEdBQUcsQ0FBQ1gsS0FBZSxHQUFLQSxLQUFLLENBQUNZLE9BQU8sQ0FBQ3RCLEtBQUs7QUFFbkUsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUMxRSxNQUFNdUIsY0FBYyxHQUN6QixDQUFDcEIsTUFBYyxHQUNmLENBQUNxQixRQUFRLEVBQUVDLFFBQVEsR0FBSztRQUN0QixNQUFNQyxZQUFZLEdBQUdMLFdBQVcsQ0FBQ0ksUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSUMsWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUJGLFFBQVEsQ0FBQ1osaUJBQWlCLENBQUNULE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7QUFFSCxpRUFBZUcsWUFBWSxDQUFDcUIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZS50cz9jODEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSwgQXBwVGh1bmsgfSBmcm9tICcuLi8uLi9hcHAvc3RvcmUnXG5pbXBvcnQgeyBmZXRjaENvdW50IH0gZnJvbSAnLi9jb3VudGVyQVBJJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XG4gIHZhbHVlOiBudW1iZXJcbiAgc3RhdHVzOiAnaWRsZScgfCAnbG9hZGluZycgfCAnZmFpbGVkJ1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcbiAgdmFsdWU6IDAsXG4gIHN0YXR1czogJ2lkbGUnLFxufVxuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxuLy8gY2FuIGJlIGRpc3BhdGNoZWQgbGlrZSBhIHJlZ3VsYXIgYWN0aW9uOiBgZGlzcGF0Y2goaW5jcmVtZW50QXN5bmMoMTApKWAuIFRoaXNcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkLiBUaHVua3MgYXJlXG4vLyB0eXBpY2FsbHkgdXNlZCB0byBtYWtlIGFzeW5jIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IGluY3JlbWVudEFzeW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvdW50ZXIvZmV0Y2hDb3VudCcsXG4gIGFzeW5jIChhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hDb3VudChhbW91bnQpXG4gICAgLy8gVGhlIHZhbHVlIHdlIHJldHVybiBiZWNvbWVzIHRoZSBgZnVsZmlsbGVkYCBhY3Rpb24gcGF5bG9hZFxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NvdW50ZXInLFxuICBpbml0aWFsU3RhdGUsXG4gIC8vIFRoZSBgcmVkdWNlcnNgIGZpZWxkIGxldHMgdXMgZGVmaW5lIHJlZHVjZXJzIGFuZCBnZW5lcmF0ZSBhc3NvY2lhdGVkIGFjdGlvbnNcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxuICAgICAgLy8gZG9lc24ndCBhY3R1YWxseSBtdXRhdGUgdGhlIHN0YXRlIGJlY2F1c2UgaXQgdXNlcyB0aGUgSW1tZXIgbGlicmFyeSxcbiAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcbiAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xuICAgICAgc3RhdGUudmFsdWUgKz0gMVxuICAgIH0sXG4gICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICB9LFxuICAgIC8vIFVzZSB0aGUgUGF5bG9hZEFjdGlvbiB0eXBlIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnRzIG9mIGBhY3Rpb24ucGF5bG9hZGBcbiAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICB9LFxuICAvLyBUaGUgYGV4dHJhUmVkdWNlcnNgIGZpZWxkIGxldHMgdGhlIHNsaWNlIGhhbmRsZSBhY3Rpb25zIGRlZmluZWQgZWxzZXdoZXJlLFxuICAvLyBpbmNsdWRpbmcgYWN0aW9ucyBnZW5lcmF0ZWQgYnkgY3JlYXRlQXN5bmNUaHVuayBvciBpbiBvdGhlciBzbGljZXMuXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2UoaW5jcmVtZW50QXN5bmMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJ1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGluY3JlbWVudEFzeW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2lkbGUnXG4gICAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KVxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxuZXhwb3J0IGNvbnN0IHNlbGVjdENvdW50ID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZVxuXG4vLyBXZSBjYW4gYWxzbyB3cml0ZSB0aHVua3MgYnkgaGFuZCwgd2hpY2ggbWF5IGNvbnRhaW4gYm90aCBzeW5jIGFuZCBhc3luYyBsb2dpYy5cbi8vIEhlcmUncyBhbiBleGFtcGxlIG9mIGNvbmRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxuZXhwb3J0IGNvbnN0IGluY3JlbWVudElmT2RkID1cbiAgKGFtb3VudDogbnVtYmVyKTogQXBwVGh1bmsgPT5cbiAgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHNlbGVjdENvdW50KGdldFN0YXRlKCkpXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAlIDIgPT09IDEpIHtcbiAgICAgIGRpc3BhdGNoKGluY3JlbWVudEJ5QW1vdW50KGFtb3VudCkpXG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiZmV0Y2hDb3VudCIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwic3RhdHVzIiwiaW5jcmVtZW50QXN5bmMiLCJhbW91bnQiLCJyZXNwb25zZSIsImRhdGEiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJhY3Rpb25zIiwic2VsZWN0Q291bnQiLCJjb3VudGVyIiwiaW5jcmVtZW50SWZPZGQiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiY3VycmVudFZhbHVlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/counter/counterSlice.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/pages/_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bian/Documents/Github/AquaNautApp/with-redux-app/src/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUlRO0FBR047QUFFakIsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDaEUscUJBQ0UsOERBQUNKLGlEQUFRO1FBQUNDLEtBQUssRUFBRUEsa0RBQUs7a0JBQ3BCLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ25CLENBQ1o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5cbmltcG9ydCBzdG9yZSBmcm9tICcuLi9hcHAvc3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
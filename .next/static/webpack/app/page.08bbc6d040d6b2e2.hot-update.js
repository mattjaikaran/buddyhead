"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Preloader */ \"(app-client)/./components/Preloader.tsx\");\n/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Provider */ \"(app-client)/./components/Provider.tsx\");\n/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchInput */ \"(app-client)/./components/SearchInput.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"(app-client)/./store/index.tsx\");\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/userSlice */ \"(app-client)/./store/userSlice.ts\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"(app-client)/./node_modules/react-bootstrap/esm/Container.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nasync function Home() {\n    const request = await fetch(\"http://localhost:3000/api/search\");\n    const data = await request.json();\n    _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_5__.setStartupUsers)(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"what up\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    users: data\n                }, void 0, false, {\n                    fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/Samsung_T5/web/buddyhead/buddyheadv1/app/page.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrQztBQUNEO0FBQ0s7QUFFbkI7QUFDb0I7QUFDRjtBQUVuQyxlQUFlTTtJQUM1QixNQUFNQyxVQUFVLE1BQU1DLE1BQU07SUFDNUIsTUFBTUMsT0FBTyxNQUFNRixRQUFRRyxJQUFJO0lBQy9CUCx5Q0FBS0EsQ0FBQ1EsUUFBUSxDQUFDUCxpRUFBZUEsQ0FBQ0s7SUFDL0IscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDUCxpRUFBU0E7OzhCQUNSLDhEQUFDUTs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDYiw2REFBU0E7b0JBQUNjLE9BQU9MOzs7Ozs7OEJBQ2xCLDhEQUFDUiw0REFBU0E7OEJBQ1IsNEVBQUNDLCtEQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0tBZjhCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL1ByZWxvYWRlcic7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ0AvY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaElucHV0JztcblxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IHNldFN0YXJ0dXBVc2VycyB9IGZyb20gJ0Avc3RvcmUvdXNlclNsaWNlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZWFyY2gnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICBzdG9yZS5kaXNwYXRjaChzZXRTdGFydHVwVXNlcnMoZGF0YSkpO1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgxPndoYXQgdXA8L2gxPlxuICAgICAgICA8UHJlbG9hZGVyIHVzZXJzPXtkYXRhfSAvPlxuICAgICAgICA8UHJvdmlkZXJzPlxuICAgICAgICAgIDxTZWFyY2hJbnB1dCAvPlxuICAgICAgICA8L1Byb3ZpZGVycz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJQcm92aWRlcnMiLCJTZWFyY2hJbnB1dCIsInN0b3JlIiwic2V0U3RhcnR1cFVzZXJzIiwiQ29udGFpbmVyIiwiSG9tZSIsInJlcXVlc3QiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGlzcGF0Y2giLCJtYWluIiwiaDEiLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ }),

/***/ "(app-client)/./components/Preloader.tsx":
/*!**********************************!*\
  !*** ./components/Preloader.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"(app-client)/./store/index.tsx\");\n/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/userSlice */ \"(app-client)/./store/userSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\nconst Preloader = (param)=>{\n    let { users } = param;\n    _s();\n    const loaded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    if (!loaded.current) {\n        _store__WEBPACK_IMPORTED_MODULE_1__.store.dispatch((0,_store_userSlice__WEBPACK_IMPORTED_MODULE_2__.setStartupUsers)(users));\n        loaded.current = true;\n    }\n    return null;\n};\n_s(Preloader, \"MnEySotN63Jz2QGBvlaQBkw3XQU=\");\n_c = Preloader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Preloader);\nvar _c;\n$RefreshReg$(_c, \"Preloader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9QcmVsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUNDO0FBRW9CO0FBRXBELE1BQU1HLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQXFCOztJQUM3QyxNQUFNQyxTQUFTTCw2Q0FBTUEsQ0FBQztJQUN0QixJQUFJLENBQUNLLE9BQU9DLE9BQU8sRUFBRTtRQUNuQkwseUNBQUtBLENBQUNNLFFBQVEsQ0FBQ0wsaUVBQWVBLENBQUNFO1FBQy9CQyxPQUFPQyxPQUFPLEdBQUc7SUFDbkI7SUFDQSxPQUFPO0FBQ1Q7R0FQTUg7S0FBQUE7QUFTTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3g/OGYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0AvbGliL3R5cGVzL3VzZXJUeXBlcyc7XG5pbXBvcnQgeyBzZXRTdGFydHVwVXNlcnMgfSBmcm9tICdAL3N0b3JlL3VzZXJTbGljZSc7XG5cbmNvbnN0IFByZWxvYWRlciA9ICh7IHVzZXJzIH06IHsgdXNlcnM6IFVzZXJbXSB9KSA9PiB7XG4gIGNvbnN0IGxvYWRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIGlmICghbG9hZGVkLmN1cnJlbnQpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRTdGFydHVwVXNlcnModXNlcnMpKTtcbiAgICBsb2FkZWQuY3VycmVudCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwic3RvcmUiLCJzZXRTdGFydHVwVXNlcnMiLCJQcmVsb2FkZXIiLCJ1c2VycyIsImxvYWRlZCIsImN1cnJlbnQiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Preloader.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./components/EditDeleteModal/EditDeleteModal.jsx":
/*!********************************************************!*\
  !*** ./components/EditDeleteModal/EditDeleteModal.jsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditDeleteModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDeleteModal.module.css */ \"./components/EditDeleteModal/EditDeleteModal.module.css\");\n/* harmony import */ var _EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EditDeleteModal({ onEdit, onDelete }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modal),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().option_list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().option_item),\n                        onClick: onEdit,\n                        children: \"수정하기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\EditDeleteModal\\\\EditDeleteModal.jsx\",\n                        lineNumber: 7,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_EditDeleteModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().option_item),\n                        onClick: onDelete,\n                        children: \"삭제하기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\EditDeleteModal\\\\EditDeleteModal.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\EditDeleteModal\\\\EditDeleteModal.jsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\EditDeleteModal\\\\EditDeleteModal.jsx\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = EditDeleteModal;\nvar _c;\n$RefreshReg$(_c, \"EditDeleteModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXREZWxldGVNb2RhbC9FZGl0RGVsZXRlTW9kYWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNuQyxTQUFTQyxnQkFBZ0IsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUU7SUFDMUQscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVdMLDBFQUFZO3NCQUMxQiw0RUFBQ087Z0JBQUdGLFdBQVdMLGdGQUFrQjs7a0NBQy9CLDhEQUFDUzt3QkFBR0osV0FBV0wsZ0ZBQWtCO3dCQUFFVyxTQUFTVDtrQ0FBUTs7Ozs7O2tDQUdwRCw4REFBQ087d0JBQUdKLFdBQVdMLGdGQUFrQjt3QkFBRVcsU0FBU1I7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRTtLQWZ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0RGVsZXRlTW9kYWwvRWRpdERlbGV0ZU1vZGFsLmpzeD80MmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRWRpdERlbGV0ZU1vZGFsLm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdERlbGV0ZU1vZGFsKHsgb25FZGl0LCBvbkRlbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25fbGlzdH0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uX2l0ZW19IG9uQ2xpY2s9e29uRWRpdH0+XHJcbiAgICAgICAgICAgIOyImOygle2VmOq4sFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25faXRlbX0gb25DbGljaz17b25EZWxldGV9PlxyXG4gICAgICAgICAgICDsgq3soJztlZjquLBcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJFZGl0RGVsZXRlTW9kYWwiLCJvbkVkaXQiLCJvbkRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1vZGFsIiwidWwiLCJvcHRpb25fbGlzdCIsImxpIiwib3B0aW9uX2l0ZW0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditDeleteModal/EditDeleteModal.jsx\n"));

/***/ })

});
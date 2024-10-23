"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board",{

/***/ "./components/BestPost/BestPost.jsx":
/*!******************************************!*\
  !*** ./components/BestPost/BestPost.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BestPost)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BestPost_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BestPost.module.css */ \"./components/BestPost/BestPost.module.css\");\n/* harmony import */ var _BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_board_best_badge_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/board/best_badge.svg */ \"./images/board/best_badge.svg\");\n/* harmony import */ var _images_board_laptop_img_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/board/laptop_img.svg */ \"./images/board/laptop_img.svg\");\n/* harmony import */ var _images_board_heart_img_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/board/heart_img.svg */ \"./images/board/heart_img.svg\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/fetchApi */ \"./utils/fetchApi.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction BestPost() {\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const [recentPost, setRecentPost] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const fetchBestPosts = async ()=>{\n        try {\n            const data = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_6__.fetchApi)(\"/articles\");\n            setPost(data);\n            const sortedPosts = data.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);\n            setLatestPosts(sortedPosts);\n        } catch (e) {\n            console.error(e);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        fetchBestPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().best_container),\n            children: recentPost.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().best_wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: _images_board_best_badge_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().title_img),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _images_board_laptop_img_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().user_wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().user_stats),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"총명\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _images_board_heart_img_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"9999+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().create_at),\n                                    children: new Date(post.createdAt).toLocaleDateString()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(BestPost, \"thcY6yziY6SXVtIR5AaHvieJ6J8=\");\n_c = BestPost;\nvar _c;\n$RefreshReg$(_c, \"BestPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jlc3RQb3N0L0Jlc3RQb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNXO0FBQ0M7QUFDRjtBQUNUO0FBQ0E7QUFFN0IsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DLE1BQU1NLGlCQUFpQjtRQUNyQixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNVCx5REFBUUEsQ0FBQztZQUM1QkssUUFBUUk7WUFFUixNQUFNQyxjQUFjRCxLQUNqQkUsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBSUMsS0FBS0QsRUFBRUUsU0FBUyxJQUFJLElBQUlELEtBQUtGLEVBQUVHLFNBQVMsR0FDM0RDLEtBQUssQ0FBQyxHQUFHO1lBQ1pDLGVBQWVQO1FBQ2pCLEVBQUUsT0FBT1EsR0FBRztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2hCO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JPO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUNhO1lBQUlDLFdBQVcxQiw0RUFBcUI7c0JBQ2xDVSxXQUFXa0IsR0FBRyxDQUFDLENBQUNwQixxQkFDZiw4REFBQ2lCO29CQUFrQkMsV0FBVzFCLDBFQUFtQjs7c0NBQy9DLDhEQUFDRCxtREFBS0E7NEJBQUMrQixLQUFLN0Isb0VBQUtBOzs7Ozs7c0NBQ2pCLDhEQUFDd0I7NEJBQUlDLFdBQVcxQix1RUFBZ0I7OzhDQUM5Qiw4REFBQ2dDOzhDQUFJeEIsS0FBS3lCLEtBQUs7Ozs7Ozs4Q0FDZiw4REFBQ2xDLG1EQUFLQTtvQ0FBQytCLEtBQUs1QixvRUFBTUE7Ozs7Ozs7Ozs7OztzQ0FFcEIsOERBQUN1Qjs0QkFBSUMsV0FBVzFCLDBFQUFtQjs7OENBQ2pDLDhEQUFDeUI7b0NBQUlDLFdBQVcxQix3RUFBaUI7O3NEQUMvQiw4REFBQ29DO3NEQUFFOzs7Ozs7c0RBQ0gsOERBQUNyQyxtREFBS0E7NENBQUMrQixLQUFLM0IsbUVBQUtBOzs7Ozs7c0RBQ2pCLDhEQUFDaUM7c0RBQUU7Ozs7Ozs7Ozs7Ozs4Q0FFTCw4REFBQ1g7b0NBQUlDLFdBQVcxQix1RUFBZ0I7OENBQzdCLElBQUlrQixLQUFLVixLQUFLVyxTQUFTLEVBQUVtQixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7bUJBYnhDOUIsS0FBSytCLEVBQUU7Ozs7Ozs7Ozs7O0FBcUIzQjtHQS9Dd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jlc3RQb3N0L0Jlc3RQb3N0LmpzeD9mMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Jlc3RQb3N0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGJhZGdlIGZyb20gXCIuLi8uLi9pbWFnZXMvYm9hcmQvYmVzdF9iYWRnZS5zdmdcIjtcclxuaW1wb3J0IGxhcHRvcCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2JvYXJkL2xhcHRvcF9pbWcuc3ZnXCI7XHJcbmltcG9ydCBoZWFydCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2JvYXJkL2hlYXJ0X2ltZy5zdmdcIjtcclxuaW1wb3J0IHsgZmV0Y2hBcGkgfSBmcm9tIFwiQC91dGlscy9mZXRjaEFwaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZXN0UG9zdCgpIHtcclxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlY2VudFBvc3QsIHNldFJlY2VudFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEJlc3RQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFwaShcIi9hcnRpY2xlc1wiKTtcclxuICAgICAgc2V0UG9zdChkYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IHNvcnRlZFBvc3RzID0gZGF0YVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkpXHJcbiAgICAgICAgLnNsaWNlKDAsIDMpO1xyXG4gICAgICBzZXRMYXRlc3RQb3N0cyhzb3J0ZWRQb3N0cyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQmVzdFBvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAge3JlY2VudFBvc3QubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuYmVzdF93cmFwcGVyfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFkZ2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfaW1nfT5cclxuICAgICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsYXB0b3B9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3N0YXRzfT5cclxuICAgICAgICAgICAgICAgIDxwPuy0neuqhTwvcD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2hlYXJ0fSAvPlxyXG4gICAgICAgICAgICAgICAgPHA+OTk5OSs8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVfYXR9PlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsImJhZGdlIiwibGFwdG9wIiwiaGVhcnQiLCJmZXRjaEFwaSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmVzdFBvc3QiLCJwb3N0Iiwic2V0UG9zdCIsInJlY2VudFBvc3QiLCJzZXRSZWNlbnRQb3N0IiwiZmV0Y2hCZXN0UG9zdHMiLCJkYXRhIiwic29ydGVkUG9zdHMiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiY3JlYXRlZEF0Iiwic2xpY2UiLCJzZXRMYXRlc3RQb3N0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJiZXN0X2NvbnRhaW5lciIsIm1hcCIsImJlc3Rfd3JhcHBlciIsInNyYyIsInRpdGxlX2ltZyIsImgzIiwidGl0bGUiLCJ1c2VyX3dyYXBwZXIiLCJ1c2VyX3N0YXRzIiwicCIsImNyZWF0ZV9hdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BestPost/BestPost.jsx\n"));

/***/ })

});
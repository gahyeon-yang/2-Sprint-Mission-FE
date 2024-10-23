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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BestPost)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BestPost_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BestPost.module.css */ \"./components/BestPost/BestPost.module.css\");\n/* harmony import */ var _BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_board_best_badge_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/board/best_badge.svg */ \"./images/board/best_badge.svg\");\n/* harmony import */ var _images_board_laptop_img_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/board/laptop_img.svg */ \"./images/board/laptop_img.svg\");\n/* harmony import */ var _images_board_heart_img_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/board/heart_img.svg */ \"./images/board/heart_img.svg\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/fetchApi */ \"./utils/fetchApi.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction BestPost() {\n    _s();\n    const [posts, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const [recentPost, setRecentPost] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const fetchBestPosts = async ()=>{\n        try {\n            const data = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_6__.fetchApi)(\"/articles\");\n            setPost(data);\n            const sortedPosts = data.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);\n            setLatestPosts(sortedPosts);\n        } catch (e) {\n            console.error(e);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        fetchBestPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().best_container),\n            children: recentPost.map((posts)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().best_wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: _images_board_best_badge_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().title_img),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: posts.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _images_board_laptop_img_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().user_wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().user_stats),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"총명\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _images_board_heart_img_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"9999+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_BestPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().create_at),\n                                    children: new Date(post.createdAt).toLocaleDateString()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, posts.id, true, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\가현\\\\sprint8\\\\2-Sprint-Mission-FE\\\\components\\\\BestPost\\\\BestPost.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(BestPost, \"1dA9BfUvVbaN/YGRskRQMYkQW1M=\");\n_c = BestPost;\nvar _c;\n$RefreshReg$(_c, \"BestPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jlc3RQb3N0L0Jlc3RQb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNXO0FBQ0M7QUFDRjtBQUNUO0FBQ0E7QUFFN0IsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3BDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DLE1BQU1NLGlCQUFpQjtRQUNyQixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNVCx5REFBUUEsQ0FBQztZQUM1QkssUUFBUUk7WUFFUixNQUFNQyxjQUFjRCxLQUNqQkUsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBSUMsS0FBS0QsRUFBRUUsU0FBUyxJQUFJLElBQUlELEtBQUtGLEVBQUVHLFNBQVMsR0FDM0RDLEtBQUssQ0FBQyxHQUFHO1lBQ1pDLGVBQWVQO1FBQ2pCLEVBQUUsT0FBT1EsR0FBRztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2hCO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JPO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUNhO1lBQUlDLFdBQVcxQiw0RUFBcUI7c0JBQ2xDVSxXQUFXa0IsR0FBRyxDQUFDLENBQUNwQixzQkFDZiw4REFBQ2lCO29CQUFtQkMsV0FBVzFCLDBFQUFtQjs7c0NBQ2hELDhEQUFDRCxtREFBS0E7NEJBQUMrQixLQUFLN0Isb0VBQUtBOzs7Ozs7c0NBQ2pCLDhEQUFDd0I7NEJBQUlDLFdBQVcxQix1RUFBZ0I7OzhDQUM5Qiw4REFBQ2dDOzhDQUFJeEIsTUFBTXlCLEtBQUs7Ozs7Ozs4Q0FDaEIsOERBQUNsQyxtREFBS0E7b0NBQUMrQixLQUFLNUIsb0VBQU1BOzs7Ozs7Ozs7Ozs7c0NBRXBCLDhEQUFDdUI7NEJBQUlDLFdBQVcxQiwwRUFBbUI7OzhDQUNqQyw4REFBQ3lCO29DQUFJQyxXQUFXMUIsd0VBQWlCOztzREFDL0IsOERBQUNvQztzREFBRTs7Ozs7O3NEQUNILDhEQUFDckMsbURBQUtBOzRDQUFDK0IsS0FBSzNCLG1FQUFLQTs7Ozs7O3NEQUNqQiw4REFBQ2lDO3NEQUFFOzs7Ozs7Ozs7Ozs7OENBRUwsOERBQUNYO29DQUFJQyxXQUFXMUIsdUVBQWdCOzhDQUM3QixJQUFJa0IsS0FBS29CLEtBQUtuQixTQUFTLEVBQUVvQixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7bUJBYnhDL0IsTUFBTWdDLEVBQUU7Ozs7Ozs7Ozs7O0FBcUI1QjtHQS9Dd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jlc3RQb3N0L0Jlc3RQb3N0LmpzeD9mMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Jlc3RQb3N0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGJhZGdlIGZyb20gXCIuLi8uLi9pbWFnZXMvYm9hcmQvYmVzdF9iYWRnZS5zdmdcIjtcclxuaW1wb3J0IGxhcHRvcCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2JvYXJkL2xhcHRvcF9pbWcuc3ZnXCI7XHJcbmltcG9ydCBoZWFydCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2JvYXJkL2hlYXJ0X2ltZy5zdmdcIjtcclxuaW1wb3J0IHsgZmV0Y2hBcGkgfSBmcm9tIFwiQC91dGlscy9mZXRjaEFwaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZXN0UG9zdCgpIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWNlbnRQb3N0LCBzZXRSZWNlbnRQb3N0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hCZXN0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBcGkoXCIvYXJ0aWNsZXNcIik7XHJcbiAgICAgIHNldFBvc3QoZGF0YSk7XHJcblxyXG4gICAgICBjb25zdCBzb3J0ZWRQb3N0cyA9IGRhdGFcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpKVxyXG4gICAgICAgIC5zbGljZSgwLCAzKTtcclxuICAgICAgc2V0TGF0ZXN0UG9zdHMoc29ydGVkUG9zdHMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEJlc3RQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmVzdF9jb250YWluZXJ9PlxyXG4gICAgICAgIHtyZWNlbnRQb3N0Lm1hcCgocG9zdHMpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0cy5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuYmVzdF93cmFwcGVyfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFkZ2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfaW1nfT5cclxuICAgICAgICAgICAgICA8aDM+e3Bvc3RzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bGFwdG9wfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICA8cD7stJ3rqoU8L3A+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtoZWFydH0gLz5cclxuICAgICAgICAgICAgICAgIDxwPjk5OTkrPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlX2F0fT5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJiYWRnZSIsImxhcHRvcCIsImhlYXJ0IiwiZmV0Y2hBcGkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJlc3RQb3N0IiwicG9zdHMiLCJzZXRQb3N0IiwicmVjZW50UG9zdCIsInNldFJlY2VudFBvc3QiLCJmZXRjaEJlc3RQb3N0cyIsImRhdGEiLCJzb3J0ZWRQb3N0cyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJzbGljZSIsInNldExhdGVzdFBvc3RzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImJlc3RfY29udGFpbmVyIiwibWFwIiwiYmVzdF93cmFwcGVyIiwic3JjIiwidGl0bGVfaW1nIiwiaDMiLCJ0aXRsZSIsInVzZXJfd3JhcHBlciIsInVzZXJfc3RhdHMiLCJwIiwiY3JlYXRlX2F0IiwicG9zdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BestPost/BestPost.jsx\n"));

/***/ })

});
webpackHotUpdate_N_E("pages/article",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ArticleCard */ "./components/ArticleCard.js");




var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\pages\\article.js",
    _this = undefined,
    _s = $RefreshSig$();







var Article = function Article(_ref) {
  _s();

  var id = _ref.id;
  // getInitialProps로부터 전달받은 props 
  //console.log(id);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      article = _useSelector.article;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_ARTICLE_REQUEST"],
      data: id
    });
  }, []); //console.log('(pages)article: ', article);

  return (
    /*#__PURE__*/
    // 해당 제목에 해당하는 게시글 보여줌 
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: article.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          article: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this)
  );
};

_s(Article, "XqGvSrpm9EaivVoZYDmhvGEMH9A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Article;
Article.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};

Article.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return C_Users_ympark4_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('article getInitialProps', context.query.id);
            return _context.abrupt("return", {
              id: context.query.id
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

$RefreshReg$(_c, "Article");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiaWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJhcnRpY2xlIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfQVJUSUNMRV9SRVFVRVNUIiwiZGF0YSIsIm1hcCIsImMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBWTtBQUFBOztBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUztBQUFFO0FBQzFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGd0IscUJBR0pDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FIUDtBQUFBLE1BR2hCQyxPQUhnQixnQkFHaEJBLE9BSGdCOztBQUt4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pOLFlBQVEsQ0FBQztBQUNMTyxVQUFJLEVBQUVDLG1FQUREO0FBRUxDLFVBQUksRUFBRVY7QUFGRCxLQUFELENBQVI7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFULENBTHdCLENBWXhCOztBQUVBO0FBQUE7QUFBUztBQUNMO0FBQUEsZ0JBQ0tNLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNDLENBQUQsRUFBTztBQUNoQiw0QkFDSSxxRUFBQywrREFBRDtBQUFxQixpQkFBTyxFQUFFQTtBQUE5QixXQUFrQkEsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUdILE9BSkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFTSCxDQXZCRDs7R0FBTWIsTztVQUVlRyx1RCxFQUNHQyx1RDs7O0tBSGxCSixPO0FBeUJOQSxPQUFPLENBQUNjLFNBQVIsR0FBb0I7QUFDaEJiLElBQUUsRUFBRWMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFETCxDQUFwQjs7QUFJQWpCLE9BQU8sQ0FBQ2tCLGVBQVI7QUFBQSxxVEFBMEIsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixPQUFPLENBQUNHLEtBQVIsQ0FBY3JCLEVBQXJEO0FBRHdCLDZDQUVqQjtBQUFFQSxnQkFBRSxFQUFFa0IsT0FBTyxDQUFDRyxLQUFSLENBQWNyQjtBQUFwQixhQUZpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZS4xMzc0YWQyOGY4OGM2OWFlZGUyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IExPQURfQVJUSUNMRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVDYXJkJztcclxuXHJcbmNvbnN0IEFydGljbGUgPSAoeyBpZCB9KSA9PiB7IC8vIGdldEluaXRpYWxQcm9wc+uhnOu2gO2EsCDsoITri6zrsJvsnYAgcHJvcHMgXHJcbiAgICAvL2NvbnNvbGUubG9nKGlkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgYXJ0aWNsZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQVJUSUNMRV9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCcocGFnZXMpYXJ0aWNsZTogJywgYXJ0aWNsZSk7XHJcblxyXG4gICAgcmV0dXJuICggLy8g7ZW064u5IOygnOuqqeyXkCDtlbTri7ntlZjripQg6rKM7Iuc6riAIOuztOyXrOykjCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7YXJ0aWNsZS5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVDYXJkIGtleT17Y30gYXJ0aWNsZT17Y30vPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXJ0aWNsZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuQXJ0aWNsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdhcnRpY2xlIGdldEluaXRpYWxQcm9wcycsIGNvbnRleHQucXVlcnkuaWQpO1xyXG4gIHJldHVybiB7IGlkOiBjb250ZXh0LnF1ZXJ5LmlkIH07IC8vIOyEnOuyhOuhnOu2gO2EsCDrsJvsnYAg642w7J207YSwIC0tPiDtlITroaDtirjsnZggcHJvcHProZwg7KCE64usIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ZiE7J6sIO2MjOydvDogN+uyiOynuCDspIQgISBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
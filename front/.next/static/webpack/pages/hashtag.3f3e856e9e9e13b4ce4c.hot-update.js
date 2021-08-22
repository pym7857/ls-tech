webpackHotUpdate_N_E("pages/hashtag",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\Users\\YOUNG\\Documents\\GitHub\\ls-tech\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();










var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var liked = me && post.Likers && post.Likers.find(function (v) {
    return v.id === me.id;
  }); // 좋아요 누른 상태 

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!me) {
      return alert('로그인이 필요합니다!');
    }

    if (liked) {
      // 좋아요 누른 상태에서, 하트를 한번 더 누르면 
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
        data: post.id
      });
    } else {
      // 좋아요 안 누른 상태에서, 하트를 누르면 
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
        data: post.id
      });
    }
  }, [me && me.id, post && post.id, liked]); // markdown 형식 -> 일반 글 형식 

  var PreviewPanel = function PreviewPanel(props) {
    // post.content   ex) <p>해시태그도 써볼까</p><ul><li>#md성공 #md</li><li>될까?</li></ul>
    marked__WEBPACK_IMPORTED_MODULE_6___default.a.setOptions({
      renderer: new marked__WEBPACK_IMPORTED_MODULE_6___default.a.Renderer(),
      gfm: true,
      breaks: true
    });
    var output = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_6___default()(props.mdText));
    console.log('output: ', output);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: output
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      type: "heart",
      theme: liked ? 'twoTone' : 'outlined',
      twoToneColor: "#eb2f96",
      onClick: onToggleLike
    }, "heart", false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, _this)],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/user',
          query: {
            id: post.User.id
          }
        },
        as: "/user/".concat(post.User.id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
            children: post.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this),
      title: post.User.nickname,
      description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "preview panel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PreviewPanel, {
          mdText: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "original panel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, _this), post.content.split(/(#[^\s]+)/g).map(function (v) {
          if (v.match(/#[^\s]+/)) {
            // 해시태그인 애들은 Link로 감싸준다 
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/hashtag',
                query: {
                  tag: v.slice(1)
                }
              },
              as: "/hashtag/".concat(v.slice(1)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: v
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 37
            }, _this);
          }

          return v; // 해시태그 아닌애들은 그냥 문자열 리턴 
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this)
  }, +post.createdAt, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "uBOv2by25cHXCDxA+5QfGINDHrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    // shape: 객체 상태 
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJicmVha3MiLCJvdXRwdXQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1kVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJfX2h0bWwiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInNwbGl0IiwibWFwIiwibWF0Y2giLCJ0YWciLCJzbGljZSIsImNyZWF0ZWRBdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDWkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQURDO0FBQUEsTUFDbkJDLEVBRG1CLGdCQUNuQkEsRUFEbUI7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdILEVBQUUs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YXRpYy93ZWJwYWNrL3BhZ2VzL2hhc2h0YWcuM2YzZTg1NmU5ZTllMTNiNGNlNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEljb24sIENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuaW1wb3J0IERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBtZSAmJiBwb3N0Lkxpa2VycyAmJiBwb3N0Lkxpa2Vycy5maW5kKHYgPT4gdi5pZCA9PT0gbWUuaWQpOyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnCBcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaWtlZCkgeyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IO2VnOuyiCDrjZQg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g7KKL7JWE7JqUIOyViCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgcG9zdCAmJiBwb3N0LmlkLCBsaWtlZF0pO1xyXG5cclxuICAgIC8vIG1hcmtkb3duIO2YleyLnSAtPiDsnbzrsJgg6riAIO2YleyLnSBcclxuICAgIGNvbnN0IFByZXZpZXdQYW5lbCA9IChwcm9wcykgPT4geyAvLyBwb3N0LmNvbnRlbnQgICBleCkgPHA+7ZW07Iuc7YOc6re464+EIOyNqOuzvOq5jDwvcD48dWw+PGxpPiNtZOyEseqztSAjbWQ8L2xpPjxsaT7rkKDquYw/PC9saT48L3VsPlxyXG4gICAgICAgIG1hcmtlZC5zZXRPcHRpb25zKHtcclxuICAgICAgICAgICAgcmVuZGVyZXI6IG5ldyBtYXJrZWQuUmVuZGVyZXIoKSwgICBcclxuICAgICAgICAgICAgZ2ZtOiB0cnVlLFxyXG4gICAgICAgICAgICBicmVha3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IERPTVB1cmlmeS5zYW5pdGl6ZShtYXJrZWQocHJvcHMubWRUZXh0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dHB1dDogJywgb3V0cHV0KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgaWQ9J3ByZXZpZXcnIFxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9IHt7X19odG1sOiBvdXRwdXR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9eytwb3N0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlYXJ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXtsaWtlZCA/ICd0d29Ub25lJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3VzZXInLCBxdWVyeTogeyBpZDogcG9zdC5Vc2VyLmlkIH0gfX0gYXM9e2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+cHJldmlldyBwYW5lbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdQYW5lbCBtZFRleHQ9e3Bvc3QuY29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5vcmlnaW5hbCBwYW5lbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lm1hdGNoKC8jW15cXHNdKy8pKSB7IC8vIO2VtOyLnO2DnOq3uOyduCDslaDrk6TsnYAgTGlua+uhnCDqsJDsi7jspIDri6QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9oYXNodGFnJywgcXVlcnk6IHsgdGFnOiB2LnNsaWNlKDEpIH0gfX0gYXM9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt2fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjsgLy8g7ZW07Iuc7YOc6re4IOyVhOuLjOyVoOuTpOydgCDqt7jrg6Ug66y47J6Q7Je0IOumrO2EtCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoeyAvLyBzaGFwZTog6rCd7LK0IOyDge2DnCBcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
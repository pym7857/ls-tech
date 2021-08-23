webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\components\\PostCard.js",
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
  //console.log('liked:', liked);

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!me) {
      return alert('로그인이 필요합니다!');
    }

    if (liked) {
      // 좋아요 누른 상태에서, 하트를 한번 더 누르면 
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UNLIKE_POST_REQUEST"],
        data: post.id
      });
    } else {
      // 좋아요 안 누른 상태에서, 하트를 누르면 
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LIKE_POST_REQUEST"],
        data: post.id
      });
    }
  }, [me && me.id, post && post.id, liked]); //console.log('(postCard) post:', post);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      type: "heart",
      theme: liked ? 'twoTone' : 'outlined',
      twoToneColor: "#eb2f96",
      onClick: onToggleLike
    }, "heart", false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
            lineNumber: 55,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, _this),
      title: post.User.nickname,
      description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: {
              pathname: '/article',
              query: {
                id: post.id
              }
            },
            as: "/article/".concat(post.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: '-2px'
                },
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: post.subTitle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: post.createdAt.split('T')[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, _this), post.content.split(/(#[^\s]+)/g).map(function (v) {
          // 해시태그인 애들은 Link로 감싸준다 
          if (v.match(/(#[\S]+)/)) {
            // ex) #사과<li>
            //console.log(v.split('<')[0].slice(1));
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/hashtag',
                query: {
                  tag: v.split('<')[0].slice(1)
                }
              },
              as: "/hashtag/".concat(v.split('<')[0].slice(1)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  color: '#3f729b'
                },
                children: ["#", v.split('<')[0].slice(1), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 37
            }, _this);
          } //return v; // 해시태그 아닌애들은 그냥 문자열 리턴 

        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)
  }, +post.createdAt, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsInBhdGhuYW1lIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInRpdGxlIiwic3ViVGl0bGUiLCJjcmVhdGVkQXQiLCJzcGxpdCIsImNvbnRlbnQiLCJtYXAiLCJtYXRjaCIsInRhZyIsInNsaWNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDWkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQURDO0FBQUEsTUFDbkJDLEVBRG1CLGdCQUNuQkEsRUFEbUI7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdILEVBQUUsSUFBSUosSUFBSSxDQUFDUSxNQUFYLElBQXFCUixJQUFJLENBQUNRLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxF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RTtBQUVsQlIsV0FBTyxFQUFFTSxpREFBUyxDQUFDRyxNQUZEO0FBR2xCWCxhQUFTLEVBQUVRLGlEQUFTLENBQUNFO0FBSEgsR0FBaEI7QUFEVyxDQUFyQjtBQVFleEMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODBjNjA1Y2I1Mjk0MzQ4YWY3MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgSWNvbiwgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBsaWtlZCA9IG1lICYmIHBvc3QuTGlrZXJzICYmIHBvc3QuTGlrZXJzLmZpbmQodiA9PiB2LmlkID09PSBtZS5pZCk7IC8vIOyii+yVhOyalCDriITrpbgg7IOB7YOcIFxyXG5cclxuICAgIC8vY29uc29sZS5sb2coJ2xpa2VkOicsIGxpa2VkKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaWtlZCkgeyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IO2VnOuyiCDrjZQg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g7KKL7JWE7JqUIOyViCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgcG9zdCAmJiBwb3N0LmlkLCBsaWtlZF0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coJyhwb3N0Q2FyZCkgcG9zdDonLCBwb3N0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGtleT17K3Bvc3QuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVhcnRcIiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e2xpa2VkID8gJ3R3b1RvbmUnIDogJ291dGxpbmVkJ31cclxuICAgICAgICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvdXNlcicsIHF1ZXJ5OiB7IGlkOiBwb3N0LlVzZXIuaWQgfSB9fSBhcz17YC91c2VyLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249eyhcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9hcnRpY2xlJywgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fSBhcz17YC9hcnRpY2xlLyR7cG9zdC5pZH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICdibGFjaycsIG1hcmdpbkJvdHRvbTogJy0ycHgnfX0+e3Bvc3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5zdWJUaXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmNyZWF0ZWRBdC5zcGxpdCgnVCcpWzBdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOyLnO2DnOq3uOyduCDslaDrk6TsnYAgTGlua+uhnCDqsJDsi7jspIDri6QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5tYXRjaCgvKCNbXFxTXSspLykpIHsgLy8gZXgpICPsgqzqs7w8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvaGFzaHRhZycsIHF1ZXJ5OiB7IHRhZzogdi5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpIH0gfX0gYXM9e2AvaGFzaHRhZy8ke3Yuc3BsaXQoJzwnKVswXS5zbGljZSgxKX1gfSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICcjM2Y3MjliJyB9fT4je3Yuc3BsaXQoJzwnKVswXS5zbGljZSgxKX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIHY7IC8vIO2VtOyLnO2DnOq3uCDslYTri4zslaDrk6TsnYAg6re464OlIOusuOyekOyXtCDrpqzthLQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L0NhcmQuTWV0YT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHsgLy8gc2hhcGU6IOqwneyytCDsg4Htg5wgXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
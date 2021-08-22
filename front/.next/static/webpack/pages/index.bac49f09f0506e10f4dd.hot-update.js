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
    var output = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_6___default()(props.mdText)); //console.log('output: ', output);

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
          children: "[preview panel]"
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
          children: "[hashtag panel]"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, _this), post.content.split(/(#[^\s]+)/g).map(function (v) {
          // 해시태그인 애들은 Link로 감싸준다 
          if (v.match(/(#[\S]+)</)) {
            // ex) #사과<li>
            console.log(v.split('<')[0].slice(1));
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/hashtag',
                query: {
                  tag: v.split('<')[0].slice(1)
                }
              },
              as: "/hashtag/".concat(v.split('<')[0].slice(1)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: v.split('<')[0].slice(1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 37
            }, _this);
          } else if (v.match(/(#[\S]+)/)) {
            // ex) #사과
            console.log(v.slice(1));
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/hashtag',
                query: {
                  tag: v.slice(1)
                }
              },
              as: "/hashtag/".concat(v.slice(1)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [v.slice(1), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 56
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 37
            }, _this);
          } //return v; // 해시태그 아닌애들은 그냥 문자열 리턴 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJicmVha3MiLCJvdXRwdXQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1kVGV4dCIsIl9faHRtbCIsInBhdGhuYW1lIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Iiwic3BsaXQiLCJtYXAiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsInRhZyIsImNyZWF0ZWRBdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDWkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQURDO0FBQUEsTUFDbkJDLEVBRG1CLGdCQUNuQkEsRUFEbUI7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdILEVBQUUs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LENBQUNnQyxLQUFGLENBQVEsQ0FBUjtBQUFQO0FBQS9CLGVBQVo7QUFBa0UsZ0JBQUUscUJBQWNoQyxDQUFDLENBQUNnQyxLQUFGLENBQVEsQ0FBUixDQUFkLENBQXBFO0FBQUEscUNBQ0k7QUFBQSwyQkFBSWhDLENBQUMsQ0FBQ2dDLEtBQUYsQ0FBUSxDQUFSLENBQUosZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQXFHaEMsQ0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUtILFdBaEJ3QyxDQWlCekM7O0FBQ0gsU0FsQkEsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkosS0FDUyxDQUFDVixJQUFJLENBQUM0QyxTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtESCxDQTNGRDs7R0FBTTdDLFE7VUFDYUUsdUQsRUFDRUssdUQ7OztLQUZmUCxRO0FBNkZOQSxRQUFRLENBQUM4QyxTQUFULEdBQXFCO0FBQ2pCN0MsTUFBSSxFQUFFOEMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUFFO0FBQ3BCYixRQUFJLEVBQUVZLGlEQUFTLENBQUNFLE1BREU7QUFFbEJaLFdBQU8sRUFBRVUsaURBQVMsQ0FBQ0csTUFGRDtBQUdsQkwsYUFBUyxFQUFFRSxpREFBUyxDQUFDRTtBQUhILEdBQWhCO0FBRFcsQ0FBckI7QUFRZWpELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhYzQ5ZjA5ZjA1MDZlMTBmNGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBJY29uLCBDYXJkLCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gbWUgJiYgcG9zdC5MaWtlcnMgJiYgcG9zdC5MaWtlcnMuZmluZCh2ID0+IHYuaWQgPT09IG1lLmlkKTsgLy8g7KKL7JWE7JqUIOuIhOuluCDsg4Htg5wgXHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlrZWQpIHsgLy8g7KKL7JWE7JqUIOuIhOuluCDsg4Htg5zsl5DshJwsIO2VmO2KuOulvCDtlZzrsogg642UIOuIhOultOuptCBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIOyii+yVhOyalCDslYgg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IOuIhOultOuptCBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWQsIHBvc3QgJiYgcG9zdC5pZCwgbGlrZWRdKTtcclxuXHJcbiAgICAvLyBtYXJrZG93biDtmJXsi50gLT4g7J2867CYIOq4gCDtmJXsi50gXHJcbiAgICBjb25zdCBQcmV2aWV3UGFuZWwgPSAocHJvcHMpID0+IHsgLy8gcG9zdC5jb250ZW50ICAgZXgpIDxwPu2VtOyLnO2DnOq3uOuPhCDsjajrs7zquYw8L3A+PHVsPjxsaT4jbWTshLHqs7UgI21kPC9saT48bGk+65Cg6rmMPzwvbGk+PC91bD5cclxuICAgICAgICBtYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBuZXcgbWFya2VkLlJlbmRlcmVyKCksICAgXHJcbiAgICAgICAgICAgIGdmbTogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBET01QdXJpZnkuc2FuaXRpemUobWFya2VkKHByb3BzLm1kVGV4dCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ291dHB1dDogJywgb3V0cHV0KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgaWQ9J3ByZXZpZXcnIFxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9IHt7X19odG1sOiBvdXRwdXR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9eytwb3N0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlYXJ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXtsaWtlZCA/ICd0d29Ub25lJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3VzZXInLCBxdWVyeTogeyBpZDogcG9zdC5Vc2VyLmlkIH0gfX0gYXM9e2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+W3ByZXZpZXcgcGFuZWxdPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlld1BhbmVsIG1kVGV4dD17cG9zdC5jb250ZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPltoYXNodGFnIHBhbmVsXTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOyLnO2DnOq3uOyduCDslaDrk6TsnYAgTGlua+uhnCDqsJDsi7jspIDri6QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5tYXRjaCgvKCNbXFxTXSspPC8pKSB7IC8vIGV4KSAj7IKs6rO8PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYuc3BsaXQoJzwnKVswXS5zbGljZSgxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9oYXNodGFnJywgcXVlcnk6IHsgdGFnOiB2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSkgfSB9fSBhcz17YC9oYXNodGFnLyR7di5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpfWB9IGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57di5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYubWF0Y2goLygjW1xcU10rKS8pKSB7IC8vIGV4KSAj7IKs6rO8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codi5zbGljZSgxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9oYXNodGFnJywgcXVlcnk6IHsgdGFnOiB2LnNsaWNlKDEpIH0gfX0gYXM9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt2LnNsaWNlKDEpfTxiciAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiB2OyAvLyDtlbTsi5ztg5zqt7gg7JWE64uM7JWg65Ok7J2AIOq3uOuDpSDrrLjsnpDsl7Qg66as7YS0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7IC8vIHNoYXBlOiDqsJ3ssrQg7IOB7YOcIFxyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=
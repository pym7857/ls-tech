webpackHotUpdate_N_E("pages/article",{

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
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
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/styles/default.css */ "../node_modules/highlight.js/styles/default.css");
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js */ "../node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\components\\ArticleCard.js",
    _this = undefined,
    _s = $RefreshSig$();












var ArticleCard = function ArticleCard(_ref) {
  _s();

  var article = _ref.article;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var liked = me && article.Likers && article.Likers.find(function (v) {
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
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
        data: article.id
      });
    } else {
      // 좋아요 안 누른 상태에서, 하트를 누르면 
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
        data: article.id
      });
    }
  }, [me && me.id, article && article.id, liked]); // markdown 형식 -> 일반 글 형식 

  var PreviewPanel = function PreviewPanel(props) {
    // article.content   ex) <p>해시태그도 써볼까</p><ul><li>#md성공 #md</li><li>될까?</li></ul>
    // source : https://marked.js.org/using_advanced#options
    marked__WEBPACK_IMPORTED_MODULE_6___default.a.setOptions({
      highlight: function highlight(code, lang) {
        return highlight_js__WEBPACK_IMPORTED_MODULE_9___default.a.highlight(lang, code).value;
      },
      renderer: new marked__WEBPACK_IMPORTED_MODULE_6___default.a.Renderer(),
      // An object containing functions to render tokens to HTML. See extensibility for more details. 
      gfm: true,
      // If true, use approved GitHub Flavored Markdown (GFM) specification.
      breaks: true // If true, add <br> on a single line break (copies GitHub behavior on comments, but not on rendered markdown files). Requires gfm be true.

    });
    var output = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_6___default()(props.mdText));
    console.log('output: ', output); // output:  <p><a href="httht">httht</a></p>

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: output
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this);
  }; //console.log('(article card) article:', article);


  return (
    /*#__PURE__*/
    // 해당 제목에 해당하는 게시글 보여줌 
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          background: '#ECECEC',
          padding: '30px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          title: article.title,
          bordered: false,
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            type: "heart",
            theme: liked ? 'twoTone' : 'outlined',
            twoToneColor: "#eb2f96",
            onClick: onToggleLike
          }, "heart", false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/user',
                query: {
                  id: article.User.id
                }
              },
              as: "/user/".concat(article.User.id),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                  children: article.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 36
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this),
            title: article.User.nickname,
            description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PreviewPanel, {
                  mdText: article.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this), article.content.split(/(#[^\s]+)/g).map(function (v) {
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
                      lineNumber: 106,
                      columnNumber: 49
                    }, _this)
                  }, v, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 45
                  }, _this);
                } //return v; // 해시태그 아닌애들은 그냥 문자열 리턴 

              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, _this)
        }, +article.createdAt, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this)
  );
};

_s(ArticleCard, "uBOv2by25cHXCDxA+5QfGINDHrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = ArticleCard;
ArticleCard.propTypes = {
  article: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    // shape: 객체 상태 
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleCard);

var _c;

$RefreshReg$(_c, "ArticleCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlQ2FyZCIsImFydGljbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwiaGxqcyIsInZhbHVlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdmbSIsImJyZWFrcyIsIm91dHB1dCIsIkRPTVB1cmlmeSIsInNhbml0aXplIiwibWRUZXh0IiwiY29uc29sZSIsImxvZyIsIl9faHRtbCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGl0bGUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInNwbGl0IiwibWFwIiwibWF0Y2giLCJ0YWciLCJzbGljZSIsImNvbG9yIiwiY3JlYXRlZEF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQUtBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLHFCQUNsQkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEs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LDJDQUNJO0FBQUcsMkJBQUssRUFBRTtBQUFFQyw2QkFBSyxFQUFFO0FBQVQsdUJBQVY7QUFBQSxzQ0FBa0MxQyxDQUFDLENBQUNxQyxLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0JJLEtBQWhCLENBQXNCLENBQXRCLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQUFpSXpDLENBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFLSCxpQkFUMkMsQ0FVNUM7O0FBQ0gsZUFYQSxDQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSixXQUNTLENBQUNWLE9BQU8sQ0FBQ3FELFNBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBcURILENBdEdEOztHQUFNdEQsVztVQUNhRSx1RCxFQUNFSyx1RDs7O0tBRmZQLFc7QUF3R05BLFdBQVcsQ0FBQ3VELFNBQVosR0FBd0I7QUFDcEJ0RCxTQUFPLEVBQUV1RCxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQUU7QUFDdkJmLFNBQUssRUFBR2MsaURBQVMsQ0FBQ0UsTUFERztBQUVyQmIsUUFBSSxFQUFFVyxpREFBUyxDQUFDRyxNQUZLO0FBR3JCWixXQUFPLEVBQUVTLGlEQUFTLENBQUNFLE1BSEU7QUFJckJKLGFBQVMsRUFBRUUsaURBQVMsQ0FBQ0c7QUFKQSxHQUFoQjtBQURXLENBQXhCO0FBU2UzRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlLjRmYzhjN2RhZGRkNDQ1OTIyYTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEljb24sIENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuaW1wb3J0IERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XHJcblxyXG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZGVmYXVsdC5jc3MnO1xyXG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEFydGljbGVDYXJkID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBsaWtlZCA9IG1lICYmIGFydGljbGUuTGlrZXJzICYmIGFydGljbGUuTGlrZXJzLmZpbmQodiA9PiB2LmlkID09PSBtZS5pZCk7IC8vIOyii+yVhOyalCDriITrpbgg7IOB7YOcIFxyXG5cclxuICAgIC8vY29uc29sZS5sb2coJ2xpa2VkOicsIGxpa2VkKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaWtlZCkgeyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IO2VnOuyiCDrjZQg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYXJ0aWNsZS5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g7KKL7JWE7JqUIOyViCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGFydGljbGUuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgYXJ0aWNsZSAmJiBhcnRpY2xlLmlkLCBsaWtlZF0pO1xyXG5cclxuICAgIC8vIG1hcmtkb3duIO2YleyLnSAtPiDsnbzrsJgg6riAIO2YleyLnSBcclxuICAgIGNvbnN0IFByZXZpZXdQYW5lbCA9IChwcm9wcykgPT4geyAvLyBhcnRpY2xlLmNvbnRlbnQgICBleCkgPHA+7ZW07Iuc7YOc6re464+EIOyNqOuzvOq5jDwvcD48dWw+PGxpPiNtZOyEseqztSAjbWQ8L2xpPjxsaT7rkKDquYw/PC9saT48L3VsPlxyXG4gICAgICAgIC8vIHNvdXJjZSA6IGh0dHBzOi8vbWFya2VkLmpzLm9yZy91c2luZ19hZHZhbmNlZCNvcHRpb25zXHJcbiAgICAgICAgbWFya2VkLnNldE9wdGlvbnMoeyBcclxuICAgICAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihjb2RlLCBsYW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHQobGFuZywgY29kZSkudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBuZXcgbWFya2VkLlJlbmRlcmVyKCksIC8vIEFuIG9iamVjdCBjb250YWluaW5nIGZ1bmN0aW9ucyB0byByZW5kZXIgdG9rZW5zIHRvIEhUTUwuIFNlZSBleHRlbnNpYmlsaXR5IGZvciBtb3JlIGRldGFpbHMuIFxyXG4gICAgICAgICAgICBnZm06IHRydWUsIC8vIElmIHRydWUsIHVzZSBhcHByb3ZlZCBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gKEdGTSkgc3BlY2lmaWNhdGlvbi5cclxuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLCAvLyBJZiB0cnVlLCBhZGQgPGJyPiBvbiBhIHNpbmdsZSBsaW5lIGJyZWFrIChjb3BpZXMgR2l0SHViIGJlaGF2aW9yIG9uIGNvbW1lbnRzLCBidXQgbm90IG9uIHJlbmRlcmVkIG1hcmtkb3duIGZpbGVzKS4gUmVxdWlyZXMgZ2ZtIGJlIHRydWUuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IERPTVB1cmlmeS5zYW5pdGl6ZShtYXJrZWQocHJvcHMubWRUZXh0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dHB1dDogJywgb3V0cHV0KTsgLy8gb3V0cHV0OiAgPHA+PGEgaHJlZj1cImh0dGh0XCI+aHR0aHQ8L2E+PC9wPlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBpZD0ncHJldmlldycgXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD0ge3tfX2h0bWw6IG91dHB1dH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCcoYXJ0aWNsZSBjYXJkKSBhcnRpY2xlOicsIGFydGljbGUpO1xyXG5cclxuICAgIHJldHVybiAoIC8vIO2VtOuLuSDsoJzrqqnsl5Ag7ZW064u57ZWY64qUIOqyjOyLnOq4gCDrs7Tsl6zspIwgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI0VDRUNFQycsIHBhZGRpbmc6ICczMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17K2FydGljbGUuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfSBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVhcnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXtsaWtlZCA/ICd0d29Ub25lJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IGFydGljbGUuVXNlci5pZCB9IH19IGFzPXtgL3VzZXIvJHthcnRpY2xlLlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57YXJ0aWNsZS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2FydGljbGUuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdQYW5lbCBtZFRleHQ9e2FydGljbGUuY29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ZW07Iuc7YOc6re47J24IOyVoOuTpOydgCBMaW5r66GcIOqwkOyLuOykgOuLpCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYubWF0Y2goLygjW1xcU10rKS8pKSB7IC8vIGV4KSAj7IKs6rO8PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc3BsaXQoJzwnKVswXS5zbGljZSgxKSB9IH19IGFzPXtgL2hhc2h0YWcvJHt2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSl9YH0ga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICcjM2Y3MjliJyB9fT4je3Yuc3BsaXQoJzwnKVswXS5zbGljZSgxKX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gdjsgLy8g7ZW07Iuc7YOc6re4IOyVhOuLjOyVoOuTpOydgCDqt7jrg6Ug66y47J6Q7Je0IOumrO2EtCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFydGljbGVDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGFydGljbGU6IFByb3BUeXBlcy5zaGFwZSh7IC8vIHNoYXBlOiDqsJ3ssrQg7IOB7YOcIFxyXG4gICAgICAgIHRpdGxlOiAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
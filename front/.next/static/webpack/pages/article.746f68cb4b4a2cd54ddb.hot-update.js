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
    var output = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_6___default()(props.mdText)); //console.log('output: ', output); // output:  <p><a href="httht">httht</a></p>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlQ2FyZCIsImFydGljbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwiaGxqcyIsInZhbHVlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdmbSIsImJyZWFrcyIsIm91dHB1dCIsIkRPTVB1cmlmeSIsInNhbml0aXplIiwibWRUZXh0IiwiX19odG1sIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJ0aXRsZSIsInBhdGhuYW1lIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Iiwic3BsaXQiLCJtYXAiLCJtYXRjaCIsInRhZyIsInNsaWNlIiwiY29sb3IiLCJjcmVhdGVkQXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7O0FBS0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEscUJBQ2xCQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBRE87QUFBQSxN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Q3hDLENBQUMsQ0FBQ21DLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixFQUFnQkksS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBQWlJdkMsQ0FBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESjtBQUtILGlCQVQyQyxDQVU1Qzs7QUFDSCxlQVhBLENBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKLFdBQ1MsQ0FBQ1YsT0FBTyxDQUFDbUQsU0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFxREgsQ0F0R0Q7O0dBQU1wRCxXO1VBQ2FFLHVELEVBQ0VLLHVEOzs7S0FGZlAsVztBQXdHTkEsV0FBVyxDQUFDcUQsU0FBWixHQUF3QjtBQUNwQnBELFNBQU8sRUFBRXFELGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFBRTtBQUN2QmYsU0FBSyxFQUFHYyxpREFBUyxDQUFDRSxNQURHO0FBRXJCYixRQUFJLEVBQUVXLGlEQUFTLENBQUNHLE1BRks7QUFHckJaLFdBQU8sRUFBRVMsaURBQVMsQ0FBQ0UsTUFIRTtBQUlyQkosYUFBUyxFQUFFRSxpREFBUyxDQUFDRztBQUpBLEdBQWhCO0FBRFcsQ0FBeEI7QUFTZXpELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGUuNzQ2ZjY4Y2I0YjRhMmNkNTRkZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgSWNvbiwgQ2FyZCwgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5pbXBvcnQgRE9NUHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcclxuXHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9kZWZhdWx0LmNzcyc7XHJcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgQXJ0aWNsZUNhcmQgPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gbWUgJiYgYXJ0aWNsZS5MaWtlcnMgJiYgYXJ0aWNsZS5MaWtlcnMuZmluZCh2ID0+IHYuaWQgPT09IG1lLmlkKTsgLy8g7KKL7JWE7JqUIOuIhOuluCDsg4Htg5wgXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZygnbGlrZWQ6JywgbGlrZWQpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpa2VkKSB7IC8vIOyii+yVhOyalCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg7ZWc67KIIOuNlCDriITrpbTrqbQgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhcnRpY2xlLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyDsoovslYTsmpQg7JWIIOuIhOuluCDsg4Htg5zsl5DshJwsIO2VmO2KuOulvCDriITrpbTrqbQgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYXJ0aWNsZS5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkLCBhcnRpY2xlICYmIGFydGljbGUuaWQsIGxpa2VkXSk7XHJcblxyXG4gICAgLy8gbWFya2Rvd24g7ZiV7IudIC0+IOydvOuwmCDquIAg7ZiV7IudIFxyXG4gICAgY29uc3QgUHJldmlld1BhbmVsID0gKHByb3BzKSA9PiB7IC8vIGFydGljbGUuY29udGVudCAgIGV4KSA8cD7tlbTsi5ztg5zqt7jrj4Qg7I2o67O86rmMPC9wPjx1bD48bGk+I21k7ISx6rO1ICNtZDwvbGk+PGxpPuuQoOq5jD88L2xpPjwvdWw+XHJcbiAgICAgICAgLy8gc291cmNlIDogaHR0cHM6Ly9tYXJrZWQuanMub3JnL3VzaW5nX2FkdmFuY2VkI29wdGlvbnNcclxuICAgICAgICBtYXJrZWQuc2V0T3B0aW9ucyh7IFxyXG4gICAgICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGNvZGUsIGxhbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodChsYW5nLCBjb2RlKS52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6IG5ldyBtYXJrZWQuUmVuZGVyZXIoKSwgLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZnVuY3Rpb25zIHRvIHJlbmRlciB0b2tlbnMgdG8gSFRNTC4gU2VlIGV4dGVuc2liaWxpdHkgZm9yIG1vcmUgZGV0YWlscy4gXHJcbiAgICAgICAgICAgIGdmbTogdHJ1ZSwgLy8gSWYgdHJ1ZSwgdXNlIGFwcHJvdmVkIEdpdEh1YiBGbGF2b3JlZCBNYXJrZG93biAoR0ZNKSBzcGVjaWZpY2F0aW9uLlxyXG4gICAgICAgICAgICBicmVha3M6IHRydWUsIC8vIElmIHRydWUsIGFkZCA8YnI+IG9uIGEgc2luZ2xlIGxpbmUgYnJlYWsgKGNvcGllcyBHaXRIdWIgYmVoYXZpb3Igb24gY29tbWVudHMsIGJ1dCBub3Qgb24gcmVuZGVyZWQgbWFya2Rvd24gZmlsZXMpLiBSZXF1aXJlcyBnZm0gYmUgdHJ1ZS5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gRE9NUHVyaWZ5LnNhbml0aXplKG1hcmtlZChwcm9wcy5tZFRleHQpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdvdXRwdXQ6ICcsIG91dHB1dCk7IC8vIG91dHB1dDogIDxwPjxhIGhyZWY9XCJodHRodFwiPmh0dGh0PC9hPjwvcD5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgaWQ9J3ByZXZpZXcnIFxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9IHt7X19odG1sOiBvdXRwdXR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZygnKGFydGljbGUgY2FyZCkgYXJ0aWNsZTonLCBhcnRpY2xlKTtcclxuXHJcbiAgICByZXR1cm4gKCAvLyDtlbTri7kg7KCc66qp7JeQIO2VtOuLue2VmOuKlCDqsozsi5zquIAg67O07Jes7KSMIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNFQ0VDRUMnLCBwYWRkaW5nOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9eythcnRpY2xlLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfSBcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlYXJ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17bGlrZWQgPyAndHdvVG9uZScgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvdXNlcicsIHF1ZXJ5OiB7IGlkOiBhcnRpY2xlLlVzZXIuaWQgfSB9fSBhcz17YC91c2VyLyR7YXJ0aWNsZS5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxBdmF0YXI+e2FydGljbGUuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmV2aWV3UGFuZWwgbWRUZXh0PXthcnRpY2xlLmNvbnRlbnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNvbnRlbnQuc3BsaXQoLygjW15cXHNdKykvZykubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOyLnO2DnOq3uOyduCDslaDrk6TsnYAgTGlua+uhnCDqsJDsi7jspIDri6QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1tcXFNdKykvKSkgeyAvLyBleCkgI+yCrOqzvDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codi5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9oYXNodGFnJywgcXVlcnk6IHsgdGFnOiB2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSkgfSB9fSBhcz17YC9oYXNodGFnLyR7di5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpfWB9IGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAnIzNmNzI5YicgfX0+I3t2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSl9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIHY7IC8vIO2VtOyLnO2DnOq3uCDslYTri4zslaDrk6TsnYAg6re464OlIOusuOyekOyXtCDrpqzthLQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcnRpY2xlQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhcnRpY2xlOiBQcm9wVHlwZXMuc2hhcGUoeyAvLyBzaGFwZTog6rCd7LK0IOyDge2DnCBcclxuICAgICAgICB0aXRsZTogIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
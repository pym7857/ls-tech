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
          lineNumber: 81,
          columnNumber: 25
        }, _this), post.content.split(/(#[^\s]+)/g).map(function (v) {
          // 해시태그인 애들은 Link로 감싸준다 
          if (v.match(/(#[\S]+)</)) {
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
                children: ["#", v.split('<')[0].slice(1), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 71
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 37
            }, _this);
          } else if (v.match(/(#[\S]+)/)) {
            // ex) #사과
            //console.log(v.slice(1));
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: {
                pathname: '/hashtag',
                query: {
                  tag: v.slice(1)
                }
              },
              as: "/hashtag/".concat(v.slice(1)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: ["#", v.slice(1), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 57
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 41
              }, _this)
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJicmVha3MiLCJvdXRwdXQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1kVGV4dCIsIl9faHRtbCIsInBhdGhuYW1lIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Iiwic3BsaXQiLCJtYXAiLCJtYXRjaCIsInRhZyIsInNsaWNlIiwiY3JlYXRlZEF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNaQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBREM7QUFBQSxNQUNuQkMsRUFEbUIsZ0JBQ25CQSxFQURtQjs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLEtBQUssR0FBR0gsRUFBRSxJQUFJSixJQUFJLENBQUNRLE1BQVgsSUFBcUJSLElBQUksQ0FBQ1EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU1AsRUFBRSxDQUFDTyxFQUFoQjtBQUFBLEdBQWxCLENBQW5DLENBSjJCLENBSStDOztBQUUxRSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQyxRQUFJLENBQUNULEVBQUwsRUFBUztBQUNMLGFBQU9VLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDSDs7QUFDRCxRQUFJUCxLQUFKLEVBQVc7QUFBRTtBQUNURixjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFQyxrRUFERDtBQUVMQyxZQUFJLEVBQUVqQixJQUFJLENBQUNXO0FBRk4sT0FBRCxDQUFSO0FBSUgsS0FMRCxNQUtPO0FBQUU7QUFDTE4sY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRUcsZ0VBREQ7QUFFTEQsWUFBSSxFQUFFakIsSUFBSSxDQUFDVztBQUZOLE9BQUQsQ0FBUjtBQUlIO0FBQ0osR0FmK0IsRUFlN0IsQ0FBQ1AsRUFBRSxJQUFJQSxFQUFFLENBQUNPLEVBQVYsRUFBY1gsSUFBSSxJQUFJQSxJQUFJLENBQUNXLEVBQTNCLEVBQStCSixLQUEvQixDQWY2QixDQUFoQyxDQU4yQixDQXVCM0I7O0FBQ0EsTUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUU7QUFDOUJDLGlEQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDZEMsY0FBUSxFQUFFLElBQUlGLDZDQUFNLENBQUNHLFFBQVgsRUFESTtBQUVkQyxTQUFHLEVBQUUsSUFGUztBQUdkQyxZQUFNLEVBQUU7QUFITSxLQUFsQjtBQU1BLFFBQU1DLE1BQU0sR0FBR0MsZ0RBQVMsQ0FBQ0MsUUFBVixDQUFtQlIsNkNBQU0sQ0FBQ0QsS0FBSyxDQUFDVSxNQUFQLENBQXpCLENBQWYsQ0FQNEIsQ0FRNUI7O0FBQ0Esd0JBQ0k7QUFDSSxRQUFFLEVBQUMsU0FEUDtBQUVJLDZCQUF1QixFQUFHO0FBQUNDLGNBQU0sRUFBRUo7QUFBVDtBQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQWZEOztBQWlCQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUVJLFdBQU8sRUFBRSxjQUNMLHFFQUFDLHlDQUFEO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFHSSxXQUFLLEVBQUVwQixLQUFLLEdBQUcsU0FBSCxHQUFlLFVBSC9CO0FBSUksa0JBQVksRUFBQyxTQUpqQjtBQUtJLGFBQU8sRUFBRUs7QUFMYixPQUVRLE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLENBRmI7QUFBQSwyQkFZSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxZQUFNLGVBQ0YscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUU7QUFBRW9CLGtCQUFRLEVBQUUsT0FBWjtBQUFxQkMsZUFBSyxFQUFFO0FBQUV0QixjQUFFLEVBQUVYLElBQUksQ0FBQ2tDLElBQUwsQ0FBVXZCO0FBQWhCO0FBQTVCLFNBQVo7QUFBZ0UsVUFBRSxrQkFBV1gsSUFBSSxDQUFDa0MsSUFBTCxDQUFVdkIsRUFBckIsQ0FBbEU7QUFBQSwrQkFDSTtBQUFBLGlDQUFHLHFFQUFDLDJDQUFEO0FBQUEsc0JBQVNYLElBQUksQ0FBQ2tDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBTUksV0FBSyxFQUFFbkMsSUFBSSxDQUFDa0MsSUFBTCxDQUFVQyxRQU5yQjtBQU9JLGlCQUFXLGVBQ1A7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLFlBQUQ7QUFBYyxnQkFBTSxFQUFFbkMsSUFBSSxDQUFDb0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBS0twQyxJQUFJLENBQUNvQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsWUFBbkIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUM1QixDQUFELEVBQU87QUFDekM7QUFDQSxjQUFJQSxDQUFDLENBQUM2QixLQUFGLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQUU7QUFDeEI7QUFDQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUU7QUFBRVAsd0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxxQkFBSyxFQUFFO0FBQUVPLHFCQUFHLEVBQUU5QixDQUFDLENBQUMyQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0JJLEtBQWhCLENBQXNCLENBQXRCO0FBQVA7QUFBL0IsZUFBWjtBQUFnRixnQkFBRSxxQkFBYy9CLENBQUMsQ0FBQzJCLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixFQUFnQkksS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBZCxDQUFsRjtBQUFBLHFDQUNJO0FBQUEsZ0NBQUsvQixDQUFDLENBQUMyQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0JJLEtBQWhCLENBQXNCLENBQXRCLENBQUwsZUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBaUkvQixDQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0gsV0FQRCxNQU9PLElBQUlBLENBQUMsQ0FBQzZCLEtBQUYsQ0FBUSxVQUFSLENBQUosRUFBeUI7QUFBRTtBQUM5QjtBQUNBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRTtBQUFFUCx3QkFBUSxFQUFFLFVBQVo7QUFBd0JDLHFCQUFLLEVBQUU7QUFBRU8scUJBQUcsRUFBRTlCLENBQUMsQ0FBQytCLEtBQUYsQ0FBUSxDQUFSO0FBQVA7QUFBL0IsZUFBWjtBQUFrRSxnQkFBRSxxQkFBYy9CLENBQUMsQ0FBQytCLEtBQUYsQ0FBUSxDQUFSLENBQWQsQ0FBcEU7QUFBQSxxQ0FDSTtBQUFBLGdDQUFLL0IsQ0FBQyxDQUFDK0IsS0FBRixDQUFRLENBQVIsQ0FBTCxlQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFxRy9CLENBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFLSCxXQWhCd0MsQ0FpQnpDOztBQUNILFNBbEJBLENBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKLEtBQ1MsQ0FBQ1YsSUFBSSxDQUFDMEMsU0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0E1RkQ7O0dBQU0zQyxRO1VBQ2FFLHVELEVBQ0VLLHVEOzs7S0FGZlAsUTtBQThGTkEsUUFBUSxDQUFDNEMsU0FBVCxHQUFxQjtBQUNqQjNDLE1BQUksRUFBRTRDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFBRTtBQUNwQlgsUUFBSSxFQUFFVSxpREFBUyxDQUFDRSxNQURFO0FBRWxCVixXQUFPLEVBQUVRLGlEQUFTLENBQUNHLE1BRkQ7QUFHbEJMLGFBQVMsRUFBRUUsaURBQVMsQ0FBQ0U7QUFISCxHQUFoQjtBQURXLENBQXJCO0FBUWUvQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44Y2RiOWE2NTI4MWIyYmFiZWIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgSWNvbiwgQ2FyZCwgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5pbXBvcnQgRE9NUHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBsaWtlZCA9IG1lICYmIHBvc3QuTGlrZXJzICYmIHBvc3QuTGlrZXJzLmZpbmQodiA9PiB2LmlkID09PSBtZS5pZCk7IC8vIOyii+yVhOyalCDriITrpbgg7IOB7YOcIFxyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpa2VkKSB7IC8vIOyii+yVhOyalCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg7ZWc67KIIOuNlCDriITrpbTrqbQgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyDsoovslYTsmpQg7JWIIOuIhOuluCDsg4Htg5zsl5DshJwsIO2VmO2KuOulvCDriITrpbTrqbQgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkLCBwb3N0ICYmIHBvc3QuaWQsIGxpa2VkXSk7XHJcblxyXG4gICAgLy8gbWFya2Rvd24g7ZiV7IudIC0+IOydvOuwmCDquIAg7ZiV7IudIFxyXG4gICAgY29uc3QgUHJldmlld1BhbmVsID0gKHByb3BzKSA9PiB7IC8vIHBvc3QuY29udGVudCAgIGV4KSA8cD7tlbTsi5ztg5zqt7jrj4Qg7I2o67O86rmMPC9wPjx1bD48bGk+I21k7ISx6rO1ICNtZDwvbGk+PGxpPuuQoOq5jD88L2xpPjwvdWw+XHJcbiAgICAgICAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICByZW5kZXJlcjogbmV3IG1hcmtlZC5SZW5kZXJlcigpLCAgIFxyXG4gICAgICAgICAgICBnZm06IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gRE9NUHVyaWZ5LnNhbml0aXplKG1hcmtlZChwcm9wcy5tZFRleHQpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdvdXRwdXQ6ICcsIG91dHB1dCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGlkPSdwcmV2aWV3JyBcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPSB7e19faHRtbDogb3V0cHV0fX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXsrcG9zdC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoZWFydFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17bGlrZWQgPyAndHdvVG9uZScgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IHBvc3QuVXNlci5pZCB9IH19IGFzPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPltwcmV2aWV3IHBhbmVsXTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdQYW5lbCBtZFRleHQ9e3Bvc3QuY29udGVudH0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+W2hhc2h0YWcgcGFuZWxdPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50LnNwbGl0KC8oI1teXFxzXSspL2cpLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ZW07Iuc7YOc6re47J24IOyVoOuTpOydgCBMaW5r66GcIOqwkOyLuOykgOuLpCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1tcXFNdKyk8LykpIHsgLy8gZXgpICPsgqzqs7w8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvaGFzaHRhZycsIHF1ZXJ5OiB7IHRhZzogdi5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpIH0gfX0gYXM9e2AvaGFzaHRhZy8ke3Yuc3BsaXQoJzwnKVswXS5zbGljZSgxKX1gfSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+I3t2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSl9PGJyIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5tYXRjaCgvKCNbXFxTXSspLykpIHsgLy8gZXgpICPsgqzqs7xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHYuc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvaGFzaHRhZycsIHF1ZXJ5OiB7IHRhZzogdi5zbGljZSgxKSB9IH19IGFzPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4je3Yuc2xpY2UoMSl9PGJyIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIHY7IC8vIO2VtOyLnO2DnOq3uCDslYTri4zslaDrk6TsnYAg6re464OlIOusuOyekOyXtCDrpqzthLQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L0NhcmQuTWV0YT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHsgLy8gc2hhcGU6IOqwneyytCDsg4Htg5wgXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
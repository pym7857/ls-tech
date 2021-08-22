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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJicmVha3MiLCJvdXRwdXQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1kVGV4dCIsIl9faHRtbCIsInBhdGhuYW1lIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Iiwic3BsaXQiLCJtYXAiLCJtYXRjaCIsInRhZyIsInNsaWNlIiwiY3JlYXRlZEF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNaQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBREM7QUFBQSxNQUNuQkMsRUFEbUIsZ0JBQ25CQSxFQURtQjs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLEtBQUssR0FBR0gsRUFBRSxJQUFJSixJQUFJLENBQUNRLE1BQVgsSUFBcUJSLElBQUksQ0FBQ1EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU1AsRUFBRSxDQUFDTyxFQUFoQjtBQUFBLEdBQWxCLENBQW5DLENBSjJCLENBSStDOztBQUUxRSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQyxRQUFJLENBQUNULEVBQUwsRUFBUztBQUNMLGFBQU9VLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDSDs7QUFDRCxRQUFJUCxLQUFKLEVBQVc7QUFBRTtBQUNURixjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFQyxrRUFERDtBQUVMQyxZQUFJLEVBQUVqQixJQUFJLENBQUNXO0FBRk4sT0FBRCxDQUFSO0FBSUgsS0FMRCxNQUtPO0FBQUU7QUFDTE4sY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRUcsZ0VBREQ7QUFFTEQsWUFBSSxFQUFFakIsSUFBSSxDQUFDVztBQUZOLE9BQUQsQ0FBUjtBQUlIO0FBQ0osR0FmK0IsRUFlN0IsQ0FBQ1AsRUFBRSxJQUFJQSxFQUFFLENBQUNPLEVBQVYsRUFBY1gsSUFBSSxJQUFJQSxJQUFJLENBQUNXLEVBQTNCLEVBQStCSixLQUEvQixDQWY2QixDQUFoQyxDQU4yQixDQXVCM0I7O0FBQ0EsTUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUU7QUFDOUJDLGlEQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDZEMsY0FBUSxFQUFFLElBQUlGLDZDQUFNLENBQUNHLFFBQVgsRUFESTtBQUVkQyxTQUFHLEVBQUUsSUFGUztBQUdkQyxZQUFNLEVBQUU7QUFITSxLQUFsQjtBQU1BLFFBQU1DLE1BQU0sR0FBR0MsZ0RBQVMsQ0FBQ0MsUUFBVixDQUFtQlIsNkNBQU0sQ0FBQ0QsS0FBSyxDQUFDVSxNQUFQLENBQXpCLENBQWYsQ0FQNEIsQ0FRNUI7O0FBQ0Esd0JBQ0k7QUFDSSxRQUFFLEVBQUMsU0FEUDtBQUVJLDZCQUF1QixFQUFHO0FBQUNDLGNBQU0sRUFBRUo7QUFBVDtBQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQWZEOztBQWlCQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUVJLFdBQU8sRUFBRSxjQUNMLHFFQUFDLHlDQUFEO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFHSSxXQUFLLEVBQUVwQixLQUFLLEdBQUcsU0FBSCxHQUFlLFVBSC9CO0FBSUksa0JBQVksRUFBQyxTQUpqQjtBQUtJLGFBQU8sRUFBRUs7QUFMYixPQUVRLE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLENBRmI7QUFBQSwyQkFZSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxZQUFNLGVBQ0YscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUU7QUFBRW9CLGtCQUFRLEVBQUUsT0FBWjtBQUFxQkMsZUFBSyxFQUFFO0FBQUV0QixjQUFFLEVBQUVYLElBQUksQ0FBQ2tDLElBQUwsQ0FBVXZCO0FBQWhCO0FBQTVCLFNBQVo7QUFBZ0UsVUFBRSxrQkFBV1gsSUFBSSxDQUFDa0MsSUFBTCxDQUFVdkIsRUFBckIsQ0FBbEU7QUFBQSwrQkFDSTtBQUFBLGlDQUFHLHFFQUFDLDJDQUFEO0FBQUEsc0JBQVNYLElBQUksQ0FBQ2tDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBTUksV0FBSyxFQUFFbkMsSUFBSSxDQUFDa0MsSUFBTCxDQUFVQyxRQU5yQjtBQU9JLGlCQUFXLGVBQ1A7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLFlBQUQ7QUFBYyxnQkFBTSxFQUFFbkMsSUFBSSxDQUFDb0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLEVBSUtwQyxJQUFJLENBQUNvQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsWUFBbkIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUM1QixDQUFELEVBQU87QUFDekM7QUFDQSxjQUFJQSxDQUFDLENBQUM2QixLQUFGLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQUU7QUFDeEI7QUFDQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUU7QUFBRVAsd0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxxQkFBSyxFQUFFO0FBQUVPLHFCQUFHLEVBQUU5QixDQUFDLENBQUMyQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0JJLEtBQWhCLENBQXNCLENBQXRCO0FBQVA7QUFBL0IsZUFBWjtBQUFnRixnQkFBRSxxQkFBYy9CLENBQUMsQ0FBQzJCLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixFQUFnQkksS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBZCxDQUFsRjtBQUFBLHFDQUNJO0FBQUEsMEJBQUkvQixDQUFDLENBQUMyQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0JJLEtBQWhCLENBQXNCLENBQXRCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQWlJL0IsQ0FBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUtILFdBUEQsTUFPTyxJQUFJQSxDQUFDLENBQUM2QixLQUFGLENBQVEsVUFBUixDQUFKLEVBQXlCO0FBQUU7QUFDOUI7QUFDQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUU7QUFBRVAsd0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxxQkFBSyxFQUFFO0FBQUVPLHFCQUFHLEVBQUU5QixDQUFDLENBQUMrQixLQUFGLENBQVEsQ0FBUjtBQUFQO0FBQS9CLGVBQVo7QUFBa0UsZ0JBQUUscUJBQWMvQixDQUFDLENBQUMrQixLQUFGLENBQVEsQ0FBUixDQUFkLENBQXBFO0FBQUEscUNBQ0k7QUFBQSwyQkFBSS9CLENBQUMsQ0FBQytCLEtBQUYsQ0FBUSxDQUFSLENBQUosZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQXFHL0IsQ0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUtILFdBaEJ3QyxDQWlCekM7O0FBQ0gsU0FsQkEsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkosS0FDUyxDQUFDVixJQUFJLENBQUMwQyxTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtESCxDQTNGRDs7R0FBTTNDLFE7VUFDYUUsdUQsRUFDRUssdUQ7OztLQUZmUCxRO0FBNkZOQSxRQUFRLENBQUM0QyxTQUFULEdBQXFCO0FBQ2pCM0MsTUFBSSxFQUFFNEMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUFFO0FBQ3BCWCxRQUFJLEVBQUVVLGlEQUFTLENBQUNFLE1BREU7QUFFbEJWLFdBQU8sRUFBRVEsaURBQVMsQ0FBQ0csTUFGRDtBQUdsQkwsYUFBUyxFQUFFRSxpREFBUyxDQUFDRTtBQUhILEdBQWhCO0FBRFcsQ0FBckI7QUFRZS9DLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3MWFlZTcwYzYwOWVkNGUwZjkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBJY29uLCBDYXJkLCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gbWUgJiYgcG9zdC5MaWtlcnMgJiYgcG9zdC5MaWtlcnMuZmluZCh2ID0+IHYuaWQgPT09IG1lLmlkKTsgLy8g7KKL7JWE7JqUIOuIhOuluCDsg4Htg5wgXHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlrZWQpIHsgLy8g7KKL7JWE7JqUIOuIhOuluCDsg4Htg5zsl5DshJwsIO2VmO2KuOulvCDtlZzrsogg642UIOuIhOultOuptCBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIOyii+yVhOyalCDslYgg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IOuIhOultOuptCBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWQsIHBvc3QgJiYgcG9zdC5pZCwgbGlrZWRdKTtcclxuXHJcbiAgICAvLyBtYXJrZG93biDtmJXsi50gLT4g7J2867CYIOq4gCDtmJXsi50gXHJcbiAgICBjb25zdCBQcmV2aWV3UGFuZWwgPSAocHJvcHMpID0+IHsgLy8gcG9zdC5jb250ZW50ICAgZXgpIDxwPu2VtOyLnO2DnOq3uOuPhCDsjajrs7zquYw8L3A+PHVsPjxsaT4jbWTshLHqs7UgI21kPC9saT48bGk+65Cg6rmMPzwvbGk+PC91bD5cclxuICAgICAgICBtYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBuZXcgbWFya2VkLlJlbmRlcmVyKCksICAgXHJcbiAgICAgICAgICAgIGdmbTogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBET01QdXJpZnkuc2FuaXRpemUobWFya2VkKHByb3BzLm1kVGV4dCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ291dHB1dDogJywgb3V0cHV0KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgaWQ9J3ByZXZpZXcnIFxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9IHt7X19odG1sOiBvdXRwdXR9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9eytwb3N0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlYXJ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXtsaWtlZCA/ICd0d29Ub25lJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3VzZXInLCBxdWVyeTogeyBpZDogcG9zdC5Vc2VyLmlkIH0gfX0gYXM9e2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+W3ByZXZpZXcgcGFuZWxdPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlld1BhbmVsIG1kVGV4dD17cG9zdC5jb250ZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPltoYXNodGFnIHBhbmVsXTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOyLnO2DnOq3uOyduCDslaDrk6TsnYAgTGlua+uhnCDqsJDsi7jspIDri6QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5tYXRjaCgvKCNbXFxTXSspPC8pKSB7IC8vIGV4KSAj7IKs6rO8PGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codi5zcGxpdCgnPCcpWzBdLnNsaWNlKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc3BsaXQoJzwnKVswXS5zbGljZSgxKSB9IH19IGFzPXtgL2hhc2h0YWcvJHt2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSl9YH0ga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt2LnNwbGl0KCc8JylbMF0uc2xpY2UoMSl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5tYXRjaCgvKCNbXFxTXSspLykpIHsgLy8gZXgpICPsgqzqs7xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHYuc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvaGFzaHRhZycsIHF1ZXJ5OiB7IHRhZzogdi5zbGljZSgxKSB9IH19IGFzPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57di5zbGljZSgxKX08YnIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gdjsgLy8g7ZW07Iuc7YOc6re4IOyVhOuLjOyVoOuTpOydgCDqt7jrg6Ug66y47J6Q7Je0IOumrO2EtCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoeyAvLyBzaGFwZTog6rCd7LK0IOyDge2DnCBcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
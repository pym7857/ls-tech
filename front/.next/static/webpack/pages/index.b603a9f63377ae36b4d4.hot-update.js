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
    var output = dompurify__WEBPACK_IMPORTED_MODULE_7___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_6___default()(props.mdText));
    console.log('output: ', output);
    output.split(/(#[^\s]+)/g).map(function (v) {
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
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, v, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this);
      }

      return v; // 해시태그 아닌애들은 그냥 문자열 리턴 
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: output
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 72,
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
            lineNumber: 84,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }, _this),
      title: post.User.nickname,
      description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "preview panel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PreviewPanel, {
          mdText: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)
  }, +post.createdAt, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJpZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlByZXZpZXdQYW5lbCIsInByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJicmVha3MiLCJvdXRwdXQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1kVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsIm1hcCIsIm1hdGNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRhZyIsInNsaWNlIiwiX19odG1sIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsImNyZWF0ZWRBdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDWkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQURDO0FBQUEsTUFDbkJDLEVBRG1CLGdCQUNuQkEsRUFEbUI7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdILEVBQUUsSUFBSUosSUFBSSxDQUFDUSxNQUFYLElBQXFCUixJQUFJLENBQUNRLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNQLEVBQUUsQ0FBQ08sRUFBaEI7QUFBQSxHQUFsQixDQUFuQyxDQUoyQixDQUkrQzs7QUFFMUUsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSSxDQUFDVCxFQUFMLEVBQVM7QUFDTCxhQUFPVSxLQUFLLENBQUMsYUFBRCxDQUFaO0FBQ0g7O0FBQ0QsUUFBSVAsS0FBSixFQUFXO0FBQUU7QUFDVEYsY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRUMsa0VBREQ7QUFFTEMsWUFBSSxFQUFFakIsSUFBSSxDQUFDVztBQUZOLE9BQUQsQ0FBUjtBQUlILEtBTEQsTUFLTztBQUFFO0FBQ0xOLGNBQVEsQ0FBQztBQUNMVSxZQUFJLEVBQUVHLGdFQUREO0FBRUxELFlBQUksRUFBRWpCLElBQUksQ0FBQ1c7QUFGTixPQUFELENBQVI7QUFJSDtBQUNKLEdBZitCLEVBZTdCLENBQUNQLEVBQUUsSUFBSUEsRUFBRSxDQUFDTyxFQUFWLEVBQWNYLElBQUksSUFBSUEsSUFBSSxDQUFDVyxFQUEzQixFQUErQkosS0FBL0IsQ0FmNkIsQ0FBaEMsQ0FOMkIsQ0F1QjNCOztBQUNBLE1BQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFFO0FBQzlCQyxpREFBTSxDQUFDQyxVQUFQLENBQWtCO0FBQ2RDLGNBQVEsRUFBRSxJQUFJRiw2Q0FBTSxDQUFDRyxRQUFYLEVBREk7QUFFZEMsU0FBRyxFQUFFLElBRlM7QUFHZEMsWUFBTSxFQUFFO0FBSE0sS0FBbEI7QUFNQSxRQUFNQyxNQUFNLEdBQUdDLGdEQUFTLENBQUNDLFFBQVYsQ0FBbUJSLDZDQUFNLENBQUNELEtBQUssQ0FBQ1UsTUFBUCxDQUF6QixDQUFmO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JMLE1BQXhCO0FBRUFBLFVBQU0sQ0FBQ00sS0FBUCxDQUFhLFlBQWIsRUFBMkJDLEdBQTNCLENBQStCLFVBQUN4QixDQUFELEVBQU87QUFDbEMsVUFBSUEsQ0FBQyxDQUFDeUIsS0FBRixDQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUFFO0FBQ3RCLDRCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFO0FBQUVDLG9CQUFRLEVBQUUsVUFBWjtBQUF3QkMsaUJBQUssRUFBRTtBQUFFQyxpQkFBRyxFQUFFNUIsQ0FBQyxDQUFDNkIsS0FBRixDQUFRLENBQVI7QUFBUDtBQUEvQixXQUFaO0FBQWtFLFlBQUUscUJBQWM3QixDQUFDLENBQUM2QixLQUFGLENBQVEsQ0FBUixDQUFkLENBQXBFO0FBQUEsaUNBQ0k7QUFBQSxzQkFBSTdCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQXFHQSxDQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBS0g7O0FBQ0QsYUFBT0EsQ0FBUCxDQVJrQyxDQVF4QjtBQUNiLEtBVEQ7QUFXQSx3QkFDSTtBQUNJLFFBQUUsRUFBQyxTQURQO0FBRUksNkJBQXVCLEVBQUc7QUFBQzhCLGNBQU0sRUFBRWI7QUFBVDtBQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQTNCRDs7QUE2QkEsc0JBQ0kscUVBQUMseUNBQUQ7QUFFSSxXQUFPLEVBQUUsY0FDTCxxRUFBQyx5Q0FBRDtBQUNJLFVBQUksRUFBQyxPQURUO0FBR0ksV0FBSyxFQUFFcEIsS0FBSyxHQUFHLFNBQUgsR0FBZSxVQUgvQjtBQUlJLGtCQUFZLEVBQUMsU0FKakI7QUFLSSxhQUFPLEVBQUVLO0FBTGIsT0FFUSxPQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxDQUZiO0FBQUEsMkJBWUkscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksWUFBTSxlQUNGLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUV3QixrQkFBUSxFQUFFLE9BQVo7QUFBcUJDLGVBQUssRUFBRTtBQUFFMUIsY0FBRSxFQUFFWCxJQUFJLENBQUN5QyxJQUFMLENBQVU5QjtBQUFoQjtBQUE1QixTQUFaO0FBQWdFLFVBQUUsa0JBQVdYLElBQUksQ0FBQ3lDLElBQUwsQ0FBVTlCLEVBQXJCLENBQWxFO0FBQUEsK0JBQ0k7QUFBQSxpQ0FBRyxxRUFBQywyQ0FBRDtBQUFBLHNCQUFTWCxJQUFJLENBQUN5QyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQU1JLFdBQUssRUFBRTFDLElBQUksQ0FBQ3lDLElBQUwsQ0FBVUMsUUFOckI7QUFPSSxpQkFBVyxlQUNQO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxZQUFEO0FBQWMsZ0JBQU0sRUFBRTFDLElBQUksQ0FBQzJDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKLEtBQ1MsQ0FBQzNDLElBQUksQ0FBQzRDLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEJILENBbkZEOztHQUFNN0MsUTtVQUNhRSx1RCxFQUNFSyx1RDs7O0tBRmZQLFE7QUFxRk5BLFFBQVEsQ0FBQzhDLFNBQVQsR0FBcUI7QUFDakI3QyxNQUFJLEVBQUU4QyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQUU7QUFDcEJOLFFBQUksRUFBRUssaURBQVMsQ0FBQ0UsTUFERTtBQUVsQkwsV0FBTyxFQUFFRyxpREFBUyxDQUFDRyxNQUZEO0FBR2xCTCxhQUFTLEVBQUVFLGlEQUFTLENBQUNFO0FBSEgsR0FBaEI7QUFEVyxDQUFyQjtBQVFlakQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjYwM2E5ZjYzMzc3YWUzNmI0ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEljb24sIENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuaW1wb3J0IERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBtZSAmJiBwb3N0Lkxpa2VycyAmJiBwb3N0Lkxpa2Vycy5maW5kKHYgPT4gdi5pZCA9PT0gbWUuaWQpOyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnCBcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaWtlZCkgeyAvLyDsoovslYTsmpQg64iE66W4IOyDge2DnOyXkOyEnCwg7ZWY7Yq466W8IO2VnOuyiCDrjZQg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g7KKL7JWE7JqUIOyViCDriITrpbgg7IOB7YOc7JeQ7IScLCDtlZjtirjrpbwg64iE66W066m0IFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgcG9zdCAmJiBwb3N0LmlkLCBsaWtlZF0pO1xyXG5cclxuICAgIC8vIG1hcmtkb3duIO2YleyLnSAtPiDsnbzrsJgg6riAIO2YleyLnSBcclxuICAgIGNvbnN0IFByZXZpZXdQYW5lbCA9IChwcm9wcykgPT4geyAvLyBwb3N0LmNvbnRlbnQgICBleCkgPHA+7ZW07Iuc7YOc6re464+EIOyNqOuzvOq5jDwvcD48dWw+PGxpPiNtZOyEseqztSAjbWQ8L2xpPjxsaT7rkKDquYw/PC9saT48L3VsPlxyXG4gICAgICAgIG1hcmtlZC5zZXRPcHRpb25zKHtcclxuICAgICAgICAgICAgcmVuZGVyZXI6IG5ldyBtYXJrZWQuUmVuZGVyZXIoKSwgICBcclxuICAgICAgICAgICAgZ2ZtOiB0cnVlLFxyXG4gICAgICAgICAgICBicmVha3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IERPTVB1cmlmeS5zYW5pdGl6ZShtYXJrZWQocHJvcHMubWRUZXh0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dHB1dDogJywgb3V0cHV0KTtcclxuXHJcbiAgICAgICAgb3V0cHV0LnNwbGl0KC8oI1teXFxzXSspL2cpLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5tYXRjaCgvI1teXFxzXSsvKSkgeyAvLyDtlbTsi5ztg5zqt7jsnbgg7JWg65Ok7J2AIExpbmvroZwg6rCQ7Iu47KSA64ukIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc2xpY2UoMSkgfSB9fSBhcz17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dn08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjsgLy8g7ZW07Iuc7YOc6re4IOyVhOuLjOyVoOuTpOydgCDqt7jrg6Ug66y47J6Q7Je0IOumrO2EtCBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGlkPSdwcmV2aWV3JyBcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPSB7e19faHRtbDogb3V0cHV0fX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXsrcG9zdC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoZWFydFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17bGlrZWQgPyAndHdvVG9uZScgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IHBvc3QuVXNlci5pZCB9IH19IGFzPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnByZXZpZXcgcGFuZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmV2aWV3UGFuZWwgbWRUZXh0PXtwb3N0LmNvbnRlbnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7IC8vIHNoYXBlOiDqsJ3ssrQg7IOB7YOcIFxyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=
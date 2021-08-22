webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked3 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMainPosts),
    _marked4 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMainPosts),
    _marked5 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHashtagPosts),
    _marked6 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadHashtagPosts),
    _marked7 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUserPosts),
    _marked8 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUserPosts),
    _marked9 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked10 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked11 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked12 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked13 = /*#__PURE__*/C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function addPostAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', postData, {
    withCredentials: true
  });
}

function addPost(action) {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context.sent;
          console.log(result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // post reducer의 데이터를 수정 
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // user reducer의 데이터를 수정 
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11]]);
}

function watchAddPost() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function loadMainPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/posts'); // 로그인안한 사용자들도 글 목록 볼 수 있음 --> withCredentials: true 넣어줄 필요 X 
}

function loadMainPosts() {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMainPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMainPostsAPI);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_MAIN_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_MAIN_POSTS_FAILURE"],
            error: _context3.t0
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function watchLoadMainPosts() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMainPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_MAIN_POSTS_REQUEST"], loadMainPosts);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function loadHashtagPostsAPI(tag) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/hashtag/".concat(tag));
}

function loadHashtagPosts(action) {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHashtagPosts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_FAILURE"],
            error: _context5.t0
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function watchLoadHashtagPosts() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadHashtagPosts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function loadUserPostsAPI(id) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(id, "/posts"));
}

function loadUserPosts(action) {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUserPosts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
            error: _context7.t0
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchLoadUserPosts() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUserPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function likePostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(postId, "/like"), {}, {
    withCredentials: true
  });
}

function likePost(action) {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: {
              postId: action.data,
              // 해당 게시물 id 
              userId: result.data.userId // 좋아요 누른사람의 id 

            }
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context9.t0
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function watchLikePost() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function unlikePostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(postId, "/like"), {
    withCredentials: true
  });
}

function unlikePost(action) {
  var result;
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: {
              postId: action.data,
              // 해당 게시물 id 
              userId: result.data.userId // 좋아요 취소한사람의 id 

            }
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context11.t0
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchUnlikePost() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function postSaga() {
  return C_Users_YOUNG_Documents_GitHub_ls_tech_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMainPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0Iiwid2F0Y2hBZGRQb3N0IiwibG9hZE1haW5Qb3N0cyIsIndhdGNoTG9hZE1haW5Qb3N0cyIsImxvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJsb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwibGlrZVBvc3QiLCJ3YXRjaExpa2VQb3N0IiwidW5saWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsInBvc3REYXRhIiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiYWN0aW9uIiwiY2FsbCIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJsb2FkTWFpblBvc3RzQVBJIiwiZ2V0IiwiTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSIsIkxPQURfTUFJTl9QT1NUU19SRVFVRVNUIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsInRhZyIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsImxvYWRVc2VyUG9zdHNBUEkiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJsaWtlUG9zdEFQSSIsInBvc3RJZCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwidXNlcklkIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkpBNkJVQSxPOzRKQW1CQUMsWTs0SkFPQUMsYTs0SkFjQUMsa0I7NEpBT0FDLGdCOzRKQWNBQyxxQjs0SkFPQUMsYTs0SkFjQUMsa0I7NEpBU0FDLFE7NkpBa0JBQyxhOzZKQVNBQyxVOzZKQWtCQUMsZTs2SkFJZUMsUTs7QUF6S3pCO0FBQ0E7QUFDQTtBQW9CQTs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUM1QixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsT0FBWCxFQUFvQkYsUUFBcEIsRUFBOEI7QUFDbkNHLG1CQUFlLEVBQUU7QUFEa0IsR0FBOUIsQ0FBUDtBQUdEOztBQUNELFNBQVVqQixPQUFWLENBQWtCa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVtQixpQkFBTUMsK0RBQUksQ0FBQ04sVUFBRCxFQUFhSyxNQUFNLENBQUNFLElBQXBCLENBQVY7O0FBRm5CO0FBRVVDLGdCQUZWO0FBR0lDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUhKO0FBSUksaUJBQU1HLDhEQUFHLENBQUM7QUFBRTtBQUNWQyxnQkFBSSxFQUFFQywrREFERTtBQUVSTixnQkFBSSxFQUFFQyxNQUFNLENBQUNEO0FBRkwsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFRSSxpQkFBTUksOERBQUcsQ0FBQztBQUFFO0FBQ1ZDLGdCQUFJLEVBQUVFLDZEQURFO0FBRVJQLGdCQUFJLEVBQUVDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUTtBQUZWLFdBQUQsQ0FBVDs7QUFSSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhSSxpQkFBTUosOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFSSwrREFERTtBQUVSQyxpQkFBSztBQUZHLFdBQUQsQ0FBVDs7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBVTdCLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU04QixxRUFBVSxDQUFDQywrREFBRCxFQUFtQmhDLE9BQW5CLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVNpQyxnQkFBVCxHQUE0QjtBQUMxQixTQUFPbEIsNENBQUssQ0FBQ21CLEdBQU4sQ0FBVSxRQUFWLENBQVAsQ0FEMEIsQ0FDRTtBQUM3Qjs7QUFDRCxTQUFVaEMsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNaUIsK0RBQUksQ0FBQ2MsZ0JBQUQsQ0FBVjs7QUFGbkI7QUFFVVosZ0JBRlY7QUFBQTtBQUdJLGlCQUFNRyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVVLHNFQURFO0FBRVJmLGdCQUFJLEVBQUVDLE1BQU0sQ0FBQ0Q7QUFGTCxXQUFELENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUksaUJBQU1JLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRVcsc0VBREU7QUFFUk4saUJBQUs7QUFGRyxXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY0EsU0FBVTNCLGtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNNEIscUVBQVUsQ0FBQ00sc0VBQUQsRUFBMEJuQyxhQUExQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFTb0MsbUJBQVQsQ0FBNkJDLEdBQTdCLEVBQWtDO0FBQ2hDLFNBQU94Qiw0Q0FBSyxDQUFDbUIsR0FBTixvQkFBc0JLLEdBQXRCLEVBQVA7QUFDRDs7QUFDRCxTQUFVbkMsZ0JBQVYsQ0FBMkJjLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbUIsaUJBQU1DLCtEQUFJLENBQUNtQixtQkFBRCxFQUFzQnBCLE1BQU0sQ0FBQ0UsSUFBN0IsQ0FBVjs7QUFGbkI7QUFFVUMsZ0JBRlY7QUFBQTtBQUdJLGlCQUFNRyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVlLHlFQURFO0FBRVJwQixnQkFBSSxFQUFFQyxNQUFNLENBQUNEO0FBRkwsV0FBRCxDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFJLGlCQUFNSSw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVnQix5RUFERTtBQUVSWCxpQkFBSztBQUZHLFdBQUQsQ0FBVDs7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSxTQUFVekIscUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0wQixxRUFBVSxDQUFDVyx5RUFBRCxFQUE2QnRDLGdCQUE3QixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFTdUMsZ0JBQVQsQ0FBMEJmLEVBQTFCLEVBQThCO0FBQzVCLFNBQU9iLDRDQUFLLENBQUNtQixHQUFOLGlCQUFtQk4sRUFBbkIsWUFBUDtBQUNEOztBQUNELFNBQVV0QixhQUFWLENBQXdCWSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNQywrREFBSSxDQUFDd0IsZ0JBQUQsRUFBbUJ6QixNQUFNLENBQUNFLElBQTFCLENBQVY7O0FBRm5CO0FBRVVDLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUcsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFbUIsc0VBREU7QUFFUnhCLGdCQUFJLEVBQUVDLE1BQU0sQ0FBQ0Q7QUFGTCxXQUFELENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUksaUJBQU1JLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRW9CLHNFQURFO0FBRVJmLGlCQUFLO0FBRkcsV0FBRCxDQUFUOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNBLFNBQVV2QixrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTXdCLHFFQUFVLENBQUNlLHNFQUFELEVBQTBCeEMsYUFBMUIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBU3lDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQzNCLFNBQU9qQyw0Q0FBSyxDQUFDQyxJQUFOLGlCQUFvQmdDLE1BQXBCLFlBQW1DLEVBQW5DLEVBQXVDO0FBQzVDL0IsbUJBQWUsRUFBRTtBQUQyQixHQUF2QyxDQUFQO0FBR0Q7O0FBQ0QsU0FBVVQsUUFBVixDQUFtQlUsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVtQixpQkFBTUMsK0RBQUksQ0FBQzRCLFdBQUQsRUFBYzdCLE1BQU0sQ0FBQ0UsSUFBckIsQ0FBVjs7QUFGbkI7QUFFVUMsZ0JBRlY7QUFBQTtBQUdJLGlCQUFNRyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUV3QixnRUFERTtBQUVSN0IsZ0JBQUksRUFBRTtBQUNKNEIsb0JBQU0sRUFBRTlCLE1BQU0sQ0FBQ0UsSUFEWDtBQUNpQjtBQUNyQjhCLG9CQUFNLEVBQUU3QixNQUFNLENBQUNELElBQVAsQ0FBWThCLE1BRmhCLENBRXdCOztBQUZ4QjtBQUZFLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV0k1QixpQkFBTyxDQUFDUSxLQUFSO0FBWEo7QUFZSSxpQkFBTU4sOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFMEIsZ0VBREU7QUFFUnJCLGlCQUFLO0FBRkcsV0FBRCxDQUFUOztBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFVckIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTXNCLHFFQUFVLENBQUNxQixnRUFBRCxFQUFvQjVDLFFBQXBCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVM2QyxhQUFULENBQXVCTCxNQUF2QixFQUErQjtBQUM3QixTQUFPakMsNENBQUssVUFBTCxpQkFBc0JpQyxNQUF0QixZQUFxQztBQUMxQy9CLG1CQUFlLEVBQUU7QUFEeUIsR0FBckMsQ0FBUDtBQUdEOztBQUNELFNBQVVQLFVBQVYsQ0FBcUJRLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbUIsaUJBQU1DLCtEQUFJLENBQUNrQyxhQUFELEVBQWdCbkMsTUFBTSxDQUFDRSxJQUF2QixDQUFWOztBQUZuQjtBQUVVQyxnQkFGVjtBQUFBO0FBR0ksaUJBQU1HLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRTZCLGtFQURFO0FBRVJsQyxnQkFBSSxFQUFFO0FBQ0o0QixvQkFBTSxFQUFFOUIsTUFBTSxDQUFDRSxJQURYO0FBQ2lCO0FBQ3JCOEIsb0JBQU0sRUFBRTdCLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZOEIsTUFGaEIsQ0FFd0I7O0FBRnhCO0FBRkUsV0FBRCxDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXSTVCLGlCQUFPLENBQUNRLEtBQVI7QUFYSjtBQVlJLGlCQUFNTiw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUU4QixrRUFERTtBQUVSekIsaUJBQUs7QUFGRyxXQUFELENBQVQ7O0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBLFNBQVVuQixlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNb0IscUVBQVUsQ0FBQ3lCLGtFQUFELEVBQXNCOUMsVUFBdEIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTTZDLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ3ZELGtCQUFELENBREksRUFFUnVELCtEQUFJLENBQUN6RCxZQUFELENBRkksRUFHUnlELCtEQUFJLENBQUNyRCxxQkFBRCxDQUhJLEVBSVJxRCwrREFBSSxDQUFDbkQsa0JBQUQsQ0FKSSxFQUtSbUQsK0RBQUksQ0FBQ2pELGFBQUQsQ0FMSSxFQU1SaUQsK0RBQUksQ0FBQy9DLGVBQUQsQ0FOSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNDNjYjE0YTE4M2M1M2ZlZTVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGRlbGF5LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUywgXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSwgXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShwb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHBvc3REYXRhLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHBvc3QgcmVkdWNlcuydmCDrjbDsnbTthLDrpbwg7IiY7KCVIFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gdXNlciByZWR1Y2Vy7J2YIOuNsOydtO2EsOulvCDsiJjsoJUgXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCwgXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJyk7IC8vIOuhnOq3uOyduOyViO2VnCDsgqzsmqnsnpDrk6Trj4Qg6riAIOuqqeuhnSDrs7wg7IiYIOyeiOydjCAtLT4gd2l0aENyZWRlbnRpYWxzOiB0cnVlIOuEo+yWtOykhCDtlYTsmpQgWCBcclxufVxyXG5mdW5jdGlvbiogbG9hZE1haW5Qb3N0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTWFpblBvc3RzQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTUFJTl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTUFJTl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTWFpblBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QsIGxvYWRNYWluUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKHRhZykge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7dGFnfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGlkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtpZH0vcG9zdHNgKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkocG9zdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7cG9zdElkfS9saWtlYCwge30sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBhY3Rpb24uZGF0YSwgLy8g7ZW064u5IOqyjOyLnOusvCBpZCBcclxuICAgICAgICB1c2VySWQ6IHJlc3VsdC5kYXRhLnVzZXJJZCwgLy8g7KKL7JWE7JqUIOuIhOuluOyCrOuejOydmCBpZCBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdElkfS9saWtlYCwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLCAvLyDtlbTri7kg6rKM7Iuc66y8IGlkIFxyXG4gICAgICAgIHVzZXJJZDogcmVzdWx0LmRhdGEudXNlcklkLCAvLyDsoovslYTsmpQg7Leo7IaM7ZWc7IKs656M7J2YIGlkIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZE1haW5Qb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
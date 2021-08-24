module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/write": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/write.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/WysiwygEditor.tsx":
/*!**************************************!*\
  !*** ./components/WysiwygEditor.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\components\\WysiwygEditor.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./TuiEditorWrapper */ "./components/TuiEditorWrapper.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./TuiEditorWrapper */ "./components/TuiEditorWrapper.tsx")],
    modules: ["./TuiEditorWrapper"]
  }
});
const EditorWithForwardedRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"]((props, ref) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Editor, _objectSpread(_objectSpread({}, props), {}, {
  forwardedRef: ref
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined));

const WysiwygEditor = props => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut
  } = props;
  const editorRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  const handleChange = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";
    props.onChange(valueType === "markdown" ? instance.getMarkdown() : instance.getHtml());
  }, [props, editorRef]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditorWithForwardedRef, _objectSpread(_objectSpread({}, props), {}, {
      initialValue: initialValue || "hello react editor world!",
      previewStyle: previewStyle || "vertical",
      height: height || "600px",
      initialEditType: initialEditType || "markdown",
      useCommandShortcut: useCommandShortcut || true,
      ref: editorRef,
      onChange: handleChange
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WysiwygEditor);

/***/ }),

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Write; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_WysiwygEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WysiwygEditor */ "./components/WysiwygEditor.tsx");

var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\pages\\write.js";






function Write() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: titleText,
    1: setTitleText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: subTitleText,
    1: setSubTitleText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    isAddingPost,
    postAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.preventDefault();

    if (!titleText || !titleText.trim()) {
      return alert('제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }

    if (!subTitleText || !subTitleText.trim()) {
      return alert('소제목을 작성하세요.');
    }

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"],
      data: {
        title: titleText,
        subTitle: subTitleText,
        content: text
      }
    }, [titleText, subTitleText, text]);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
  }, [titleText, subTitleText, text]);
  console.log('text: ', text);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setText(e.target.value);
  }, []);
  const onChangeTitleText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setTitleText(e.target.value);
  }, []);
  const onChangeSubTitleText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setSubTitleText(e.target.value);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onSubmit: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Hello Next.js \uD83D\uDC4B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      maxLength: 50,
      placeholder: "\uC81C\uBAA9\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",
      value: titleText,
      onChange: onChangeTitleText,
      style: {
        height: '30px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      maxLength: 100,
      placeholder: "\uC18C\uC81C\uBAA9\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",
      value: subTitleText,
      onChange: onChangeSubTitleText,
      style: {
        height: '30px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WysiwygEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: value => setText(value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        style: {
          float: 'right'
        },
        htmlType: "submit",
        loading: isAddingPost,
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_ALL_HASHTAGS_REQUEST, LOAD_ALL_HASHTAGS_SUCCESS, LOAD_ALL_HASHTAGS_FAILURE, LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_REQUEST", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_SUCCESS", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_FAILURE", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_HASHTAGS_REQUEST", function() { return LOAD_ALL_HASHTAGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_HASHTAGS_SUCCESS", function() { return LOAD_ALL_HASHTAGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_HASHTAGS_FAILURE", function() { return LOAD_ALL_HASHTAGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ARTICLE_REQUEST", function() { return LOAD_ARTICLE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ARTICLE_SUCCESS", function() { return LOAD_ARTICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ARTICLE_FAILURE", function() { return LOAD_ARTICLE_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [],
  addPostErrorReason: '',
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중
  postAdded: false,
  // 포스트 업로드 성공
  hashTags: [],
  article: []
};
const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LOAD_ALL_HASHTAGS_REQUEST = 'LOAD_ALL_HASHTAGS_REQUEST';
const LOAD_ALL_HASHTAGS_SUCCESS = 'LOAD_ALL_HASHTAGS_SUCCESS';
const LOAD_ALL_HASHTAGS_FAILURE = 'LOAD_ALL_HASHTAGS_FAILURE';
const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: true,
          addPostErrorReason: '',
          postAdded: false
        });
      }

    case ADD_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: false,
          mainPosts: [action.data, ...state.mainPosts],
          postAdded: true
        });
      }

    case ADD_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: false,
          addPostErrorReason: action.error
        });
      }

    case LOAD_MAIN_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: []
        });
      }

    case LOAD_MAIN_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: action.data
        });
      }

    case LOAD_MAIN_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LIKE_POST_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LIKE_POST_SUCCESS:
      {
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 내가 '좋아요' 누른 게시물이 몇번째 포스트인지 

        const post = state.mainPosts[postIndex];
        const Likers = [{
          id: action.data.userId
        }, ...post.Likers]; // '좋아요'누른 사람목록에 내 이름 추가 

        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
          Likers
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts
        });
      }

    case LIKE_POST_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case UNLIKE_POST_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case UNLIKE_POST_SUCCESS:
      {
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        const post = state.mainPosts[postIndex];
        const Likers = post.Likers.filter(v => v.id !== action.data.userId); // '좋아요'누른 사람목록에서 내 이름 빼기 (=필터링) 

        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
          Likers
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts
        });
      }

    case UNLIKE_POST_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_ALL_HASHTAGS_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hashTags: []
        });
      }

    case LOAD_ALL_HASHTAGS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hashTags: action.data
        });
      }

    case LOAD_ALL_HASHTAGS_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_ARTICLE_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          article: []
        });
      }

    case LOAD_ARTICLE_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          article: [action.data]
        });
      }

    case LOAD_ARTICLE_FAILURE:
      {
        return _objectSpread({}, state);
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "@toast-ui/react-editor":
/*!*****************************************!*\
  !*** external "@toast-ui/react-editor" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@toast-ui/react-editor");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XeXNpd3lnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0b2FzdC11aS9yZWFjdC1lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkVkaXRvcldpdGhGb3J3YXJkZWRSZWYiLCJSZWFjdCIsInByb3BzIiwicmVmIiwiV3lzaXd5Z0VkaXRvciIsImluaXRpYWxWYWx1ZSIsInByZXZpZXdTdHlsZSIsImhlaWdodCIsImluaXRpYWxFZGl0VHlwZSIsInVzZUNvbW1hbmRTaG9ydGN1dCIsImVkaXRvclJlZiIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnQiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwidmFsdWVUeXBlIiwib25DaGFuZ2UiLCJnZXRNYXJrZG93biIsImdldEh0bWwiLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0aXRsZVRleHQiLCJzZXRUaXRsZVRleHQiLCJ1c2VTdGF0ZSIsInN1YlRpdGxlVGV4dCIsInNldFN1YlRpdGxlVGV4dCIsInRleHQiLCJzZXRUZXh0IiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsInRpdGxlIiwic3ViVGl0bGUiLCJjb250ZW50IiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGl0bGVUZXh0Iiwib25DaGFuZ2VTdWJUaXRsZVRleHQiLCJtYXJnaW4iLCJmbG9hdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RFcnJvclJlYXNvbiIsImhhc2hUYWdzIiwiYXJ0aWNsZSIsIkxPQURfTUFJTl9QT1NUU19SRVFVRVNUIiwiTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9BTExfSEFTSFRBR1NfUkVRVUVTVCIsIkxPQURfQUxMX0hBU0hUQUdTX1NVQ0NFU1MiLCJMT0FEX0FMTF9IQVNIVEFHU19GQUlMVVJFIiwiTE9BRF9BUlRJQ0xFX1JFUVVFU1QiLCJMT0FEX0FSVElDTEVfU1VDQ0VTUyIsIkxPQURfQVJUSUNMRV9GQUlMVVJFIiwicmVkdWNlciIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsImlkIiwicG9zdElkIiwiTGlrZXJzIiwidXNlcklkIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtBQVFB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Ozs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3dyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvd3JpdGVcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvd3JpdGUuanNcIik7XG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yIGFzIEVkaXRvclR5cGUsIEVkaXRvclByb3BzIH0gZnJvbSAnQHRvYXN0LXVpL3JlYWN0LWVkaXRvcic7XG5pbXBvcnQgeyBUdWlFZGl0b3JXaXRoRm9yd2FyZGVkUHJvcHMgfSBmcm9tICcuL1R1aUVkaXRvcldyYXBwZXInO1xuXG5pbnRlcmZhY2UgRWRpdG9yUHJvcHNXaXRoSGFuZGxlcnMgZXh0ZW5kcyBFZGl0b3JQcm9wcyB7XG4gIG9uQ2hhbmdlPyh2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn1cblxuY29uc3QgRWRpdG9yID0gZHluYW1pYzxUdWlFZGl0b3JXaXRoRm9yd2FyZGVkUHJvcHM+KCgpID0+IGltcG9ydChcIi4vVHVpRWRpdG9yV3JhcHBlclwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuY29uc3QgRWRpdG9yV2l0aEZvcndhcmRlZFJlZiA9IFJlYWN0LmZvcndhcmRSZWY8RWRpdG9yVHlwZSB8IHVuZGVmaW5lZCwgRWRpdG9yUHJvcHNXaXRoSGFuZGxlcnM+KChwcm9wcywgcmVmKSA9PiAoXG4gIDxFZGl0b3Igey4uLnByb3BzfSBmb3J3YXJkZWRSZWY9e3JlZiBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEVkaXRvclR5cGU+fSAvPlxuKSk7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEVkaXRvclByb3BzIHtcbiAgb25DaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgdmFsdWVUeXBlPzogXCJtYXJrZG93blwiIHwgXCJodG1sXCI7XG59XG5cbmNvbnN0IFd5c2l3eWdFZGl0b3I6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGluaXRpYWxWYWx1ZSwgcHJldmlld1N0eWxlLCBoZWlnaHQsIGluaXRpYWxFZGl0VHlwZSwgdXNlQ29tbWFuZFNob3J0Y3V0IH0gPSBwcm9wcztcblxuICBjb25zdCBlZGl0b3JSZWYgPSBSZWFjdC51c2VSZWY8RWRpdG9yVHlwZT4oKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZWRpdG9yUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IGVkaXRvclJlZi5jdXJyZW50LmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgdmFsdWVUeXBlID0gcHJvcHMudmFsdWVUeXBlIHx8IFwibWFya2Rvd25cIjtcblxuICAgIHByb3BzLm9uQ2hhbmdlKHZhbHVlVHlwZSA9PT0gXCJtYXJrZG93blwiID8gaW5zdGFuY2UuZ2V0TWFya2Rvd24oKSA6IGluc3RhbmNlLmdldEh0bWwoKSk7XG4gIH0sIFtwcm9wcywgZWRpdG9yUmVmXSk7XG5cbiAgcmV0dXJuIDxkaXY+XG4gICAgPEVkaXRvcldpdGhGb3J3YXJkZWRSZWZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGluaXRpYWxWYWx1ZT17aW5pdGlhbFZhbHVlIHx8IFwiaGVsbG8gcmVhY3QgZWRpdG9yIHdvcmxkIVwifVxuICAgICAgcHJldmlld1N0eWxlPXtwcmV2aWV3U3R5bGUgfHwgXCJ2ZXJ0aWNhbFwifVxuICAgICAgaGVpZ2h0PXtoZWlnaHQgfHwgXCI2MDBweFwifVxuICAgICAgaW5pdGlhbEVkaXRUeXBlPXtpbml0aWFsRWRpdFR5cGUgfHwgXCJtYXJrZG93blwifVxuICAgICAgdXNlQ29tbWFuZFNob3J0Y3V0PXt1c2VDb21tYW5kU2hvcnRjdXQgfHwgdHJ1ZX1cbiAgICAgIHJlZj17ZWRpdG9yUmVmfVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAvPlxuICA8L2Rpdj47XG59O1xuIFxuZXhwb3J0IGRlZmF1bHQgV3lzaXd5Z0VkaXRvcjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBXeXNpd3lnRWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvV3lzaXd5Z0VkaXRvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyaXRlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGl0bGVUZXh0LCBzZXRUaXRsZVRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWJUaXRsZVRleHQsIHNldFN1YlRpdGxlVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgaXNBZGRpbmdQb3N0LCBwb3N0QWRkZWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBvc3RBZGRlZCkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LCBbcG9zdEFkZGVkXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXRpdGxlVGV4dCB8fCAhdGl0bGVUZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+ygnOuqqeydhCDsnpHshLHtlZjshLjsmpQuJyk7IC8vIHJldHVybuycvOuhnCDrgYrslrTspJjslbwg67CR7JeQ67aA67aEIOyLpO2WieyViOuQqCBcclxuICAgIH1cclxuICAgIGlmICghc3ViVGl0bGVUZXh0IHx8ICFzdWJUaXRsZVRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn7IaM7KCc66qp7J2EIOyekeyEse2VmOyEuOyalC4nKTsgIFxyXG4gICAgfVxyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJyk7IFxyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlVGV4dCxcclxuICAgICAgICBzdWJUaXRsZTogc3ViVGl0bGVUZXh0LFxyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9LCBbdGl0bGVUZXh0LCBzdWJUaXRsZVRleHQsIHRleHRdKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSxbdGl0bGVUZXh0LCBzdWJUaXRsZVRleHQsIHRleHRdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3RleHQ6ICcsIHRleHQpXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGl0bGVUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRpdGxlVGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVN1YlRpdGxlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRTdWJUaXRsZVRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uU3VibWl0PXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxoMT5IZWxsbyBOZXh0LmpzIPCfkYs8L2gxPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezUwfSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsoIHslrTso7zshLjsmpRcIiB2YWx1ZT17dGl0bGVUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZVRleHR9IHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIG1heExlbmd0aD17MTAwfSBwbGFjZWhvbGRlcj1cIuyGjOygnOuqqeydhCDsoIHslrTso7zshLjsmpRcIiB2YWx1ZT17c3ViVGl0bGVUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VTdWJUaXRsZVRleHR9IHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgPFd5c2l3eWdFZGl0b3Igb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VGV4dCh2YWx1ZSl9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nUG9zdH0+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBhZGRQb3N0RXJyb3JSZWFzb246ICcnLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOyLpO2MqCDsgqzsnKBcclxuICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7KSRXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOyEseqztVxyXG4gICAgaGFzaFRhZ3M6IFtdLFxyXG4gICAgYXJ0aWNsZTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0hBU0hUQUdTX1JFUVVFU1QgPSAnTE9BRF9BTExfSEFTSFRBR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTID0gJ0xPQURfQUxMX0hBU0hUQUdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfSEFTSFRBR1NfRkFJTFVSRSA9ICdMT0FEX0FMTF9IQVNIVEFHU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfUkVRVUVTVCA9ICdMT0FEX0FSVElDTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfU1VDQ0VTUyA9ICdMT0FEX0FSVElDTEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfRkFJTFVSRSA9ICdMT0FEX0FSVElDTEVfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGFkZFBvc3RFcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgYWRkUG9zdEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogW10sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpOyAvLyDrgrTqsIAgJ+yii+yVhOyalCcg64iE66W4IOqyjOyLnOusvOydtCDrqofrsojsp7gg7Y+s7Iqk7Yq47J247KeAIFxyXG4gICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgTGlrZXJzID0gW3sgaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9LCAuLi5wb3N0Lkxpa2Vyc107IC8vICfsoovslYTsmpQn64iE66W4IOyCrOuejOuqqeuhneyXkCDrgrQg7J2066aEIOy2lOqwgCBcclxuICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSB7IC4uLnBvc3QsIExpa2VycyB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBMaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpOyAvLyAn7KKL7JWE7JqUJ+uIhOuluCDsgqzrnozrqqnroZ3sl5DshJwg64K0IOydtOumhCDrubzquLAgKD3tlYTthLDrp4EpIFxyXG4gICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgTGlrZXJzIH07XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfSEFTSFRBR1NfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGhhc2hUYWdzOiBbXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaGFzaFRhZ3M6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQUxMX0hBU0hUQUdTX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQVJUSUNMRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYXJ0aWNsZTogW10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BUlRJQ0xFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhcnRpY2xlOiBbYWN0aW9uLmRhdGFdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQVJUSUNMRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdG9hc3QtdWkvcmVhY3QtZWRpdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
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
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_TARGET_POSTS_REQUEST, LOAD_TARGET_POSTS_SUCCESS, LOAD_TARGET_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_ALL_HASHTAGS_REQUEST, LOAD_ALL_HASHTAGS_SUCCESS, LOAD_ALL_HASHTAGS_FAILURE, LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAILURE, EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_REQUEST", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_SUCCESS", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_FAILURE", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TARGET_POSTS_REQUEST", function() { return LOAD_TARGET_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TARGET_POSTS_SUCCESS", function() { return LOAD_TARGET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TARGET_POSTS_FAILURE", function() { return LOAD_TARGET_POSTS_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_REQUEST", function() { return EDIT_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_SUCCESS", function() { return EDIT_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_FAILURE", function() { return EDIT_POST_FAILURE; });
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
  article: [],
  isEditingPost: false,
  editPostErrorReason: '' // 게시글 수정 실패 사유

};
const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
const LOAD_TARGET_POSTS_REQUEST = 'LOAD_TARGET_POSTS_REQUEST';
const LOAD_TARGET_POSTS_SUCCESS = 'LOAD_TARGET_POSTS_SUCCESS';
const LOAD_TARGET_POSTS_FAILURE = 'LOAD_TARGET_POSTS_FAILURE';
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
const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

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
    case LOAD_TARGET_POSTS_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: []
        });
      }

    case LOAD_MAIN_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_TARGET_POSTS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: action.data
        });
      }

    case LOAD_MAIN_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_TARGET_POSTS_FAILURE:
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

    case EDIT_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isEditingPost: true,
          editPostErrorReason: ''
        });
      }

    case EDIT_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isEditingPost: false // me: {
          //   ...state.me,
          //   article: action.data, // me.article은 없음 
          // },

        });
      }

    case EDIT_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isEditingPost: false,
          editPostErrorReason: action.error
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XeXNpd3lnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0b2FzdC11aS9yZWFjdC1lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInNzciIsIkVkaXRvcldpdGhGb3J3YXJkZWRSZWYiLCJSZWFjdCIsInByb3BzIiwicmVmIiwiV3lzaXd5Z0VkaXRvciIsImluaXRpYWxWYWx1ZSIsInByZXZpZXdTdHlsZSIsImhlaWdodCIsImluaXRpYWxFZGl0VHlwZSIsInVzZUNvbW1hbmRTaG9ydGN1dCIsImVkaXRvclJlZiIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnQiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwidmFsdWVUeXBlIiwib25DaGFuZ2UiLCJnZXRNYXJrZG93biIsImdldEh0bWwiLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0aXRsZVRleHQiLCJzZXRUaXRsZVRleHQiLCJ1c2VTdGF0ZSIsInN1YlRpdGxlVGV4dCIsInNldFN1YlRpdGxlVGV4dCIsInRleHQiLCJzZXRUZXh0IiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsInRpdGxlIiwic3ViVGl0bGUiLCJjb250ZW50IiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZVRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGl0bGVUZXh0Iiwib25DaGFuZ2VTdWJUaXRsZVRleHQiLCJtYXJnaW4iLCJmbG9hdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RFcnJvclJlYXNvbiIsImhhc2hUYWdzIiwiYXJ0aWNsZSIsImlzRWRpdGluZ1Bvc3QiLCJlZGl0UG9zdEVycm9yUmVhc29uIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyIsIkxPQURfTUFJTl9QT1NUU19GQUlMVVJFIiwiTE9BRF9UQVJHRVRfUE9TVFNfUkVRVUVTVCIsIkxPQURfVEFSR0VUX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1RBUkdFVF9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX0FMTF9IQVNIVEFHU19SRVFVRVNUIiwiTE9BRF9BTExfSEFTSFRBR1NfU1VDQ0VTUyIsIkxPQURfQUxMX0hBU0hUQUdTX0ZBSUxVUkUiLCJMT0FEX0FSVElDTEVfUkVRVUVTVCIsIkxPQURfQVJUSUNMRV9TVUNDRVNTIiwiTE9BRF9BUlRJQ0xFX0ZBSUxVUkUiLCJFRElUX1BPU1RfUkVRVUVTVCIsIkVESVRfUE9TVF9TVUNDRVNTIiwiRURJVF9QT1NUX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJwb3N0SWQiLCJMaWtlcnMiLCJ1c2VySWQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsbUNBQW1DO1FBQ25DO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtRQUNKOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUNBO0FBUUEsTUFBTUEsTUFBTSxHQUFHQyxtREFBTyxDQUE4QixNQUFNLDRJQUFwQyxFQUFrRTtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQXZCLDZEQUF1QjtBQUFBLGNBQXZCLG9CQUF1QjtBQUFBO0FBQUEsQ0FBbEUsQ0FBdEI7QUFDQSxNQUFNQyxzQkFBc0IsZ0JBQUdDLGdEQUFBLENBQWtFLENBQUNDLEtBQUQsRUFBUUMsR0FBUixrQkFDL0YscUVBQUMsTUFBRCxrQ0FBWUQsS0FBWjtBQUFtQixjQUFZLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFENkIsQ0FBL0I7O0FBVUEsTUFBTUMsYUFBOEIsR0FBSUYsS0FBRCxJQUFXO0FBQ2hELFFBQU07QUFBRUcsZ0JBQUY7QUFBZ0JDLGdCQUFoQjtBQUE4QkMsVUFBOUI7QUFBc0NDLG1CQUF0QztBQUF1REM7QUFBdkQsTUFBOEVQLEtBQXBGO0FBRUEsUUFBTVEsU0FBUyxHQUFHVCw0Q0FBQSxFQUFsQjtBQUNBLFFBQU1VLFlBQVksR0FBR1YsaURBQUEsQ0FBa0IsTUFBTTtBQUMzQyxRQUFJLENBQUNTLFNBQVMsQ0FBQ0UsT0FBZixFQUF3QjtBQUN0QjtBQUNEOztBQUVELFVBQU1DLFFBQVEsR0FBR0gsU0FBUyxDQUFDRSxPQUFWLENBQWtCRSxXQUFsQixFQUFqQjtBQUNBLFVBQU1DLFNBQVMsR0FBR2IsS0FBSyxDQUFDYSxTQUFOLElBQW1CLFVBQXJDO0FBRUFiLFNBQUssQ0FBQ2MsUUFBTixDQUFlRCxTQUFTLEtBQUssVUFBZCxHQUEyQkYsUUFBUSxDQUFDSSxXQUFULEVBQTNCLEdBQW9ESixRQUFRLENBQUNLLE9BQVQsRUFBbkU7QUFDRCxHQVRvQixFQVNsQixDQUFDaEIsS0FBRCxFQUFRUSxTQUFSLENBVGtCLENBQXJCO0FBV0Esc0JBQU87QUFBQSwyQkFDTCxxRUFBQyxzQkFBRCxrQ0FDTVIsS0FETjtBQUVFLGtCQUFZLEVBQUVHLFlBQVksSUFBSSwyQkFGaEM7QUFHRSxrQkFBWSxFQUFFQyxZQUFZLElBQUksVUFIaEM7QUFJRSxZQUFNLEVBQUVDLE1BQU0sSUFBSSxPQUpwQjtBQUtFLHFCQUFlLEVBQUVDLGVBQWUsSUFBSSxVQUx0QztBQU1FLHdCQUFrQixFQUFFQyxrQkFBa0IsSUFBSSxJQU41QztBQU9FLFNBQUcsRUFBRUMsU0FQUDtBQVFFLGNBQVEsRUFBRUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBWUQsQ0EzQkQ7O0FBNkJlUCw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNlLEtBQVQsR0FBaUI7QUFDOUIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDRixzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBRUssZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQThCQywrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBaEIsQ0FBL0M7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUosU0FBSixFQUFlO0FBQ2JGLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDRSxTQUFELENBSk0sQ0FBVDtBQU1BLFFBQU1LLFlBQVksR0FBR0MseURBQVcsQ0FBRUMsQ0FBRCxJQUFPO0FBQ3RDQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSSxDQUFDaEIsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQ2lCLElBQVYsRUFBbkIsRUFBcUM7QUFDbkMsYUFBT0MsS0FBSyxDQUFDLFlBQUQsQ0FBWixDQURtQyxDQUNQO0FBQzdCOztBQUNELFFBQUksQ0FBQ2YsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNjLElBQWIsRUFBdEIsRUFBMkM7QUFDekMsYUFBT0MsS0FBSyxDQUFDLGFBQUQsQ0FBWjtBQUNEOztBQUNELFFBQUksQ0FBQ2IsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ1ksSUFBTCxFQUFkLEVBQTJCO0FBQ3pCLGFBQU9DLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDRDs7QUFDRHBCLFlBQVEsQ0FBQztBQUNQcUIsVUFBSSxFQUFFQywrREFEQztBQUVQQyxVQUFJLEVBQUU7QUFDSkMsYUFBSyxFQUFFdEIsU0FESDtBQUVKdUIsZ0JBQVEsRUFBRXBCLFlBRk47QUFHSnFCLGVBQU8sRUFBRW5CO0FBSEw7QUFGQyxLQUFELEVBT0wsQ0FBQ0wsU0FBRCxFQUFZRyxZQUFaLEVBQTBCRSxJQUExQixDQVBLLENBQVI7QUFRQW9CLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FwQitCLEVBb0I5QixDQUFDMUIsU0FBRCxFQUFZRyxZQUFaLEVBQTBCRSxJQUExQixDQXBCOEIsQ0FBaEM7QUFzQkFzQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCdkIsSUFBdEI7QUFFQSxRQUFNd0IsWUFBWSxHQUFHZix5REFBVyxDQUFFQyxDQUFELElBQU87QUFDdENULFdBQU8sQ0FBQ1MsQ0FBQyxDQUFDZSxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDO0FBSUEsUUFBTUMsaUJBQWlCLEdBQUdsQix5REFBVyxDQUFFQyxDQUFELElBQU87QUFDM0NkLGdCQUFZLENBQUNjLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDRCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUlBLFFBQU1FLG9CQUFvQixHQUFHbkIseURBQVcsQ0FBRUMsQ0FBRCxJQUFPO0FBQzlDWCxtQkFBZSxDQUFDVyxDQUFDLENBQUNlLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0QsR0FGdUMsRUFFckMsRUFGcUMsQ0FBeEM7QUFJQSxzQkFDRSxxRUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRTtBQUFFRyxZQUFNLEVBQUU7QUFBVixLQUFiO0FBQXdDLFdBQU8sRUFBQyxxQkFBaEQ7QUFBc0UsWUFBUSxFQUFFckIsWUFBaEY7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQWdCLGVBQVMsRUFBRSxFQUEzQjtBQUErQixpQkFBVyxFQUFDLG1EQUEzQztBQUF1RCxXQUFLLEVBQUViLFNBQTlEO0FBQXlFLGNBQVEsRUFBRWdDLGlCQUFuRjtBQUFzRyxXQUFLLEVBQUU7QUFBRS9DLGNBQU0sRUFBRTtBQUFWO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixlQUFTLEVBQUUsR0FBM0I7QUFBZ0MsaUJBQVcsRUFBQyx5REFBNUM7QUFBeUQsV0FBSyxFQUFFa0IsWUFBaEU7QUFBOEUsY0FBUSxFQUFFOEIsb0JBQXhGO0FBQThHLFdBQUssRUFBRTtBQUFFaEQsY0FBTSxFQUFFO0FBQVY7QUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUkscUVBQUMsaUVBQUQ7QUFBZSxjQUFRLEVBQUc4QyxLQUFELElBQVd6QixPQUFPLENBQUN5QixLQUFEO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQ0UscUVBQUMsMkNBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFO0FBQVQsU0FBOUI7QUFBa0QsZ0JBQVEsRUFBQyxRQUEzRDtBQUFvRSxlQUFPLEVBQUU1QixZQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVNLE1BQU02QixZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxFQURhO0FBRXhCQyxvQkFBa0IsRUFBRSxFQUZJO0FBRUE7QUFDeEIvQixjQUFZLEVBQUUsS0FIVTtBQUdIO0FBQ3JCQyxXQUFTLEVBQUUsS0FKYTtBQUlOO0FBQ2xCK0IsVUFBUSxFQUFFLEVBTGM7QUFPeEJDLFNBQU8sRUFBRSxFQVBlO0FBU3hCQyxlQUFhLEVBQUUsS0FUUztBQVV4QkMscUJBQW1CLEVBQUUsRUFWRyxDQVVDOztBQVZELENBQXJCO0FBYUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTWxDLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1tQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7O0FBRVAsTUFBTUMsT0FBTyxHQUFHLENBQUNqRSxLQUFLLEdBQUcwQixZQUFULEVBQXVCd0MsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDekQsSUFBZjtBQUNJLFNBQUtDLGdCQUFMO0FBQXVCO0FBQ3JCLCtDQUNLVixLQURMO0FBRUVILHNCQUFZLEVBQUUsSUFGaEI7QUFHRStCLDRCQUFrQixFQUFFLEVBSHRCO0FBSUU5QixtQkFBUyxFQUFFO0FBSmI7QUFNRDs7QUFDRCxTQUFLK0MsZ0JBQUw7QUFBdUI7QUFDckIsK0NBQ0s3QyxLQURMO0FBRUVILHNCQUFZLEVBQUUsS0FGaEI7QUFHRThCLG1CQUFTLEVBQUUsQ0FBQ3VDLE1BQU0sQ0FBQ3ZELElBQVIsRUFBYyxHQUFHWCxLQUFLLENBQUMyQixTQUF2QixDQUhiO0FBSUU3QixtQkFBUyxFQUFFO0FBSmI7QUFNRDs7QUFDRCxTQUFLZ0QsZ0JBQUw7QUFBdUI7QUFDckIsK0NBQ0s5QyxLQURMO0FBRUVILHNCQUFZLEVBQUUsS0FGaEI7QUFHRStCLDRCQUFrQixFQUFFc0MsTUFBTSxDQUFDQztBQUg3QjtBQUtEOztBQUNELFNBQUtsQyx1QkFBTDtBQUNBLFNBQUtNLDBCQUFMO0FBQ0EsU0FBS0csdUJBQUw7QUFDQSxTQUFLTix5QkFBTDtBQUFnQztBQUM5QiwrQ0FDS3BDLEtBREw7QUFFRTJCLG1CQUFTLEVBQUU7QUFGYjtBQUlEOztBQUNELFNBQUtPLHVCQUFMO0FBQ0EsU0FBS00sMEJBQUw7QUFDQSxTQUFLRyx1QkFBTDtBQUNBLFNBQUtOLHlCQUFMO0FBQWdDO0FBQzlCLCtDQUNLckMsS0FETDtBQUVFMkIsbUJBQVMsRUFBRXVDLE1BQU0sQ0FBQ3ZEO0FBRnBCO0FBSUQ7O0FBQ0QsU0FBS3dCLHVCQUFMO0FBQ0EsU0FBS00sMEJBQUw7QUFDQSxTQUFLRyx1QkFBTDtBQUNBLFNBQUtOLHlCQUFMO0FBQWdDO0FBQzlCLGlDQUNLdEMsS0FETDtBQUdEOztBQUNELFNBQUsrQyxpQkFBTDtBQUF3QjtBQUN0QixpQ0FDSy9DLEtBREw7QUFHRDs7QUFDRCxTQUFLZ0QsaUJBQUw7QUFBd0I7QUFDdEIsY0FBTW9CLFNBQVMsR0FBR3BFLEtBQUssQ0FBQzJCLFNBQU4sQ0FBZ0IwQyxTQUFoQixDQUEwQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0wsTUFBTSxDQUFDdkQsSUFBUCxDQUFZNkQsTUFBcEQsQ0FBbEIsQ0FEc0IsQ0FDeUQ7O0FBQy9FLGNBQU12RSxJQUFJLEdBQUdELEtBQUssQ0FBQzJCLFNBQU4sQ0FBZ0J5QyxTQUFoQixDQUFiO0FBQ0EsY0FBTUssTUFBTSxHQUFHLENBQUM7QUFBRUYsWUFBRSxFQUFFTCxNQUFNLENBQUN2RCxJQUFQLENBQVkrRDtBQUFsQixTQUFELEVBQTZCLEdBQUd6RSxJQUFJLENBQUN3RSxNQUFyQyxDQUFmLENBSHNCLENBR3VDOztBQUM3RCxjQUFNOUMsU0FBUyxHQUFHLENBQUMsR0FBRzNCLEtBQUssQ0FBQzJCLFNBQVYsQ0FBbEI7QUFDQUEsaUJBQVMsQ0FBQ3lDLFNBQUQsQ0FBVCxtQ0FBNEJuRSxJQUE1QjtBQUFrQ3dFO0FBQWxDO0FBQ0EsK0NBQ0t6RSxLQURMO0FBRUUyQjtBQUZGO0FBSUQ7O0FBQ0QsU0FBS3NCLGlCQUFMO0FBQXdCO0FBQ3RCLGlDQUNLakQsS0FETDtBQUdEOztBQUNELFNBQUtrRCxtQkFBTDtBQUEwQjtBQUN4QixpQ0FDS2xELEtBREw7QUFHRDs7QUFDRCxTQUFLbUQsbUJBQUw7QUFBMEI7QUFDeEIsY0FBTWlCLFNBQVMsR0FBR3BFLEtBQUssQ0FBQzJCLFNBQU4sQ0FBZ0IwQyxTQUFoQixDQUEwQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0wsTUFBTSxDQUFDdkQsSUFBUCxDQUFZNkQsTUFBcEQsQ0FBbEI7QUFDQSxjQUFNdkUsSUFBSSxHQUFHRCxLQUFLLENBQUMyQixTQUFOLENBQWdCeUMsU0FBaEIsQ0FBYjtBQUNBLGNBQU1LLE1BQU0sR0FBR3hFLElBQUksQ0FBQ3dFLE1BQUwsQ0FBWUUsTUFBWixDQUFtQkwsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0wsTUFBTSxDQUFDdkQsSUFBUCxDQUFZK0QsTUFBN0MsQ0FBZixDQUh3QixDQUc2Qzs7QUFDckUsY0FBTS9DLFNBQVMsR0FBRyxDQUFDLEdBQUczQixLQUFLLENBQUMyQixTQUFWLENBQWxCO0FBQ0FBLGlCQUFTLENBQUN5QyxTQUFELENBQVQsbUNBQTRCbkUsSUFBNUI7QUFBa0N3RTtBQUFsQztBQUNBLCtDQUNLekUsS0FETDtBQUVFMkI7QUFGRjtBQUlEOztBQUNELFNBQUt5QixtQkFBTDtBQUEwQjtBQUN4QixpQ0FDS3BELEtBREw7QUFHRDs7QUFDRCxTQUFLd0QseUJBQUw7QUFBZ0M7QUFDOUIsK0NBQ0t4RCxLQURMO0FBRUU2QixrQkFBUSxFQUFFO0FBRlo7QUFJRDs7QUFDRCxTQUFLNEIseUJBQUw7QUFBZ0M7QUFDOUIsK0NBQ0t6RCxLQURMO0FBRUU2QixrQkFBUSxFQUFFcUMsTUFBTSxDQUFDdkQ7QUFGbkI7QUFJRDs7QUFDRCxTQUFLK0MseUJBQUw7QUFBZ0M7QUFDOUIsaUNBQ0sxRCxLQURMO0FBR0Q7O0FBQ0QsU0FBSzJELG9CQUFMO0FBQTJCO0FBQ3pCLCtDQUNLM0QsS0FETDtBQUVFOEIsaUJBQU8sRUFBRTtBQUZYO0FBSUQ7O0FBQ0QsU0FBSzhCLG9CQUFMO0FBQTJCO0FBQ3pCLCtDQUNLNUQsS0FETDtBQUVFOEIsaUJBQU8sRUFBRSxDQUFDb0MsTUFBTSxDQUFDdkQsSUFBUjtBQUZYO0FBSUQ7O0FBQ0QsU0FBS2tELG9CQUFMO0FBQTJCO0FBQ3pCLGlDQUNLN0QsS0FETDtBQUdEOztBQUNELFNBQUs4RCxpQkFBTDtBQUF3QjtBQUN0QiwrQ0FDSzlELEtBREw7QUFFRStCLHVCQUFhLEVBQUUsSUFGakI7QUFHRUMsNkJBQW1CLEVBQUU7QUFIdkI7QUFLRDs7QUFDRCxTQUFLK0IsaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0svRCxLQURMO0FBRUUrQix1QkFBYSxFQUFFLEtBRmpCLENBR0U7QUFDQTtBQUNBO0FBQ0E7O0FBTkY7QUFRRDs7QUFDRCxTQUFLaUMsaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0toRSxLQURMO0FBRUUrQix1QkFBYSxFQUFFLEtBRmpCO0FBR0VDLDZCQUFtQixFQUFFa0MsTUFBTSxDQUFDQztBQUg5QjtBQUtEOztBQUNEO0FBQVM7QUFDTCxpQ0FDT25FLEtBRFA7QUFHSDtBQTFKTDtBQTRKSCxDQTdKRDs7QUErSmVpRSxzRUFBZixFOzs7Ozs7Ozs7OztBQ3hOQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy93cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL3dyaXRlXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvciBhcyBFZGl0b3JUeXBlLCBFZGl0b3JQcm9wcyB9IGZyb20gJ0B0b2FzdC11aS9yZWFjdC1lZGl0b3InO1xuaW1wb3J0IHsgVHVpRWRpdG9yV2l0aEZvcndhcmRlZFByb3BzIH0gZnJvbSAnLi9UdWlFZGl0b3JXcmFwcGVyJztcblxuaW50ZXJmYWNlIEVkaXRvclByb3BzV2l0aEhhbmRsZXJzIGV4dGVuZHMgRWRpdG9yUHJvcHMge1xuICBvbkNoYW5nZT8odmFsdWU6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmNvbnN0IEVkaXRvciA9IGR5bmFtaWM8VHVpRWRpdG9yV2l0aEZvcndhcmRlZFByb3BzPigoKSA9PiBpbXBvcnQoXCIuL1R1aUVkaXRvcldyYXBwZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcbmNvbnN0IEVkaXRvcldpdGhGb3J3YXJkZWRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmPEVkaXRvclR5cGUgfCB1bmRlZmluZWQsIEVkaXRvclByb3BzV2l0aEhhbmRsZXJzPigocHJvcHMsIHJlZikgPT4gKFxuICA8RWRpdG9yIHsuLi5wcm9wc30gZm9yd2FyZGVkUmVmPXtyZWYgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxFZGl0b3JUeXBlPn0gLz5cbikpO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBFZGl0b3JQcm9wcyB7XG4gIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHZhbHVlVHlwZT86IFwibWFya2Rvd25cIiB8IFwiaHRtbFwiO1xufVxuXG5jb25zdCBXeXNpd3lnRWRpdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbml0aWFsVmFsdWUsIHByZXZpZXdTdHlsZSwgaGVpZ2h0LCBpbml0aWFsRWRpdFR5cGUsIHVzZUNvbW1hbmRTaG9ydGN1dCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZWRpdG9yUmVmID0gUmVhY3QudXNlUmVmPEVkaXRvclR5cGU+KCk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBlZGl0b3JSZWYuY3VycmVudC5nZXRJbnN0YW5jZSgpO1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHByb3BzLnZhbHVlVHlwZSB8fCBcIm1hcmtkb3duXCI7XG5cbiAgICBwcm9wcy5vbkNoYW5nZSh2YWx1ZVR5cGUgPT09IFwibWFya2Rvd25cIiA/IGluc3RhbmNlLmdldE1hcmtkb3duKCkgOiBpbnN0YW5jZS5nZXRIdG1sKCkpO1xuICB9LCBbcHJvcHMsIGVkaXRvclJlZl0pO1xuXG4gIHJldHVybiA8ZGl2PlxuICAgIDxFZGl0b3JXaXRoRm9yd2FyZGVkUmVmXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBpbml0aWFsVmFsdWU9e2luaXRpYWxWYWx1ZSB8fCBcImhlbGxvIHJlYWN0IGVkaXRvciB3b3JsZCFcIn1cbiAgICAgIHByZXZpZXdTdHlsZT17cHJldmlld1N0eWxlIHx8IFwidmVydGljYWxcIn1cbiAgICAgIGhlaWdodD17aGVpZ2h0IHx8IFwiNjAwcHhcIn1cbiAgICAgIGluaXRpYWxFZGl0VHlwZT17aW5pdGlhbEVkaXRUeXBlIHx8IFwibWFya2Rvd25cIn1cbiAgICAgIHVzZUNvbW1hbmRTaG9ydGN1dD17dXNlQ29tbWFuZFNob3J0Y3V0IHx8IHRydWV9XG4gICAgICByZWY9e2VkaXRvclJlZn1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgLz5cbiAgPC9kaXY+O1xufTtcbiBcbmV4cG9ydCBkZWZhdWx0IFd5c2l3eWdFZGl0b3I7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgV3lzaXd5Z0VkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL1d5c2l3eWdFZGl0b3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RpdGxlVGV4dCwgc2V0VGl0bGVUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ViVGl0bGVUZXh0LCBzZXRTdWJUaXRsZVRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGlzQWRkaW5nUG9zdCwgcG9zdEFkZGVkIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwb3N0QWRkZWQpIHtcclxuICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfSwgW3Bvc3RBZGRlZF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aXRsZVRleHQgfHwgIXRpdGxlVGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfsoJzrqqnsnYQg7J6R7ISx7ZWY7IS47JqULicpOyAvLyByZXR1cm7snLzroZwg64GK7Ja07KSY7JW8IOuwkeyXkOu2gOu2hCDsi6TtlonslYjrkKggXHJcbiAgICB9XHJcbiAgICBpZiAoIXN1YlRpdGxlVGV4dCB8fCAhc3ViVGl0bGVUZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+yGjOygnOuqqeydhCDsnpHshLHtlZjshLjsmpQuJyk7ICBcclxuICAgIH1cclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpOyBcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZVRleHQsXHJcbiAgICAgICAgc3ViVGl0bGU6IHN1YlRpdGxlVGV4dCxcclxuICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICB9LFxyXG4gICAgfSwgW3RpdGxlVGV4dCwgc3ViVGl0bGVUZXh0LCB0ZXh0XSk7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gIH0sW3RpdGxlVGV4dCwgc3ViVGl0bGVUZXh0LCB0ZXh0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCd0ZXh0OiAnLCB0ZXh0KVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRpdGxlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUaXRsZVRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTdWJUaXRsZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0U3ViVGl0bGVUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCcgfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICA8aDE+SGVsbG8gTmV4dC5qcyDwn5GLPC9oMT5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgbWF4TGVuZ3RoPXs1MH0gcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7KCB7Ja07KO87IS47JqUXCIgdmFsdWU9e3RpdGxlVGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGVUZXh0fSBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fSAvPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezEwMH0gcGxhY2Vob2xkZXI9XCLshozsoJzrqqnsnYQg7KCB7Ja07KO87IS47JqUXCIgdmFsdWU9e3N1YlRpdGxlVGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlU3ViVGl0bGVUZXh0fSBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fSAvPlxyXG4gICAgICAgIDxXeXNpd3lnRWRpdG9yIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFRleHQodmFsdWUpfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtpc0FkZGluZ1Bvc3R9PuynueynuTwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufSIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgYWRkUG9zdEVycm9yUmVhc29uOiAnJywgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOykkVxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDshLHqs7VcclxuICAgIGhhc2hUYWdzOiBbXSxcclxuICAgIFxyXG4gICAgYXJ0aWNsZTogW10sXHJcblxyXG4gICAgaXNFZGl0aW5nUG9zdDogZmFsc2UsXHJcbiAgICBlZGl0UG9zdEVycm9yUmVhc29uOiAnJywgLy8g6rKM7Iuc6riAIOyImOyglSDsi6TtjKgg7IKs7JygXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVEFSR0VUX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9UQVJHRVRfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RBUkdFVF9QT1NUU19TVUNDRVNTID0gJ0xPQURfVEFSR0VUX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UQVJHRVRfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1RBUkdFVF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9IQVNIVEFHU19SRVFVRVNUID0gJ0xPQURfQUxMX0hBU0hUQUdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfSEFTSFRBR1NfU1VDQ0VTUyA9ICdMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0hBU0hUQUdTX0ZBSUxVUkUgPSAnTE9BRF9BTExfSEFTSFRBR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9BUlRJQ0xFX1JFUVVFU1QgPSAnTE9BRF9BUlRJQ0xFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BUlRJQ0xFX1NVQ0NFU1MgPSAnTE9BRF9BUlRJQ0xFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BUlRJQ0xFX0ZBSUxVUkUgPSAnTE9BRF9BUlRJQ0xFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9SRVFVRVNUID0gJ0VESVRfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9TVUNDRVNTID0gJ0VESVRfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9GQUlMVVJFID0gJ0VESVRfUE9TVF9GQUlMVVJFJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogdHJ1ZSxcclxuICAgICAgICAgICAgYWRkUG9zdEVycm9yUmVhc29uOiAnJyxcclxuICAgICAgICAgICAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBhZGRQb3N0RXJyb3JSZWFzb246IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOiBcclxuICAgICAgICBjYXNlIExPQURfVEFSR0VUX1BPU1RTX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6IFxyXG4gICAgICAgIGNhc2UgTE9BRF9UQVJHRVRfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTogXHJcbiAgICAgICAgY2FzZSBMT0FEX1RBUkdFVF9QT1NUU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7IC8vIOuCtOqwgCAn7KKL7JWE7JqUJyDriITrpbgg6rKM7Iuc66y87J20IOuqh+uyiOynuCDtj6zsiqTtirjsnbjsp4AgXHJcbiAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBMaWtlcnMgPSBbeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0sIC4uLnBvc3QuTGlrZXJzXTsgLy8gJ+yii+yVhOyalCfriITrpbgg7IKs656M66qp66Gd7JeQIOuCtCDsnbTrpoQg7LaU6rCAIFxyXG4gICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgTGlrZXJzIH07XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XTtcclxuICAgICAgICAgIGNvbnN0IExpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZCk7IC8vICfsoovslYTsmpQn64iE66W4IOyCrOuejOuqqeuhneyXkOyEnCDrgrQg7J2066aEIOu5vOq4sCAoPe2VhO2EsOungSkgXHJcbiAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0geyAuLi5wb3N0LCBMaWtlcnMgfTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9IQVNIVEFHU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaGFzaFRhZ3M6IFtdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQUxMX0hBU0hUQUdTX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBoYXNoVGFnczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfSEFTSFRBR1NfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BUlRJQ0xFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhcnRpY2xlOiBbXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FSVElDTEVfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFydGljbGU6IFthY3Rpb24uZGF0YV0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BUlRJQ0xFX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVESVRfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nUG9zdDogdHJ1ZSxcclxuICAgICAgICAgICAgZWRpdFBvc3RFcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEVESVRfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nUG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIG1lOiB7XHJcbiAgICAgICAgICAgIC8vICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIC8vICAgYXJ0aWNsZTogYWN0aW9uLmRhdGEsIC8vIG1lLmFydGljbGXsnYAg7JeG7J2MIFxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFRElUX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzRWRpdGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBlZGl0UG9zdEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0b2FzdC11aS9yZWFjdC1lZGl0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
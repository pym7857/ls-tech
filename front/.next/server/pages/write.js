module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/write.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/QuillEditor.js":
/*!***********************************!*\
  !*** ./components/QuillEditor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuillEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\YOUNG\\Documents\\GitHub\\ls-tech\\front\\components\\QuillEditor.js";

function QuillEditor({
  body,
  handleQuillChange,
  mountBody
}) {
  const quillElement = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const quillInstance = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: isError,
    1: setIsError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isLoaded) {
      /* isLoaded가 true인 상태에서 rerenderBody를 통해 body 적용시 Quill 초기화 없이
         innerHTML만 body로 바꿉니다. 이 조건이 없을 시 툴바가 중복되어 여러 개 나타나게
         됩니다. */
      const quill = quillInstance.current;
      quill.root.innerHTML = body;
      return;
    }

    if (quillElement.current && window.Quill) {
      /* isLoaded가 false일 때는 Quill을 초기화합니다. */

      /* Quill 옵션을 원하는 대로 수정하세요. */
      const toolbarOptions = {
        container: [[{
          'size': ['small', false, 'large', 'huge']
        }], // custom dropdown
        [{
          'header': [1, 2, 3, 4, 5, 6, false]
        }], [{
          'align': []
        }], ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [{
          'color': []
        }, {
          'background': []
        }], // dropdown with defaults from theme
        [{
          'header': 1
        }, {
          'header': 2
        }], // custom button values
        [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }], [{
          'script': 'sub'
        }, {
          'script': 'super'
        }], // superscript/subscript
        [{
          'indent': '-1'
        }, {
          'indent': '+1'
        }], // outdent/indent
        [{
          'direction': 'rtl'
        }], // text direction
        ['clean'], // remove formatting button
        ['blockquote', 'link', 'code-block', 'formula', 'image', 'video'] // media
        ]
      };
      quillInstance.current = new window.Quill(quillElement.current, {
        modules: {
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
          },
          syntax: true,
          toolbar: toolbarOptions
        },
        placeholder: "본문 입력",
        theme: 'snow'
      });
      const quill = quillInstance.current;
      quill.root.setAttribute("spellcheck", "false"); // 초기 body state 적용

      quill.root.innerHTML = body;
      /* quill에서 text-change 이벤트 발생시에 setBody(innerHTML)을 통해 body를 업데이트합니다.
         body가 업데이트되어도 useEffect 발생 조건 인자([isError, mountBody])에 body가 없으므로
         QuillEditor 컴포넌트는 다시 렌더링되지 않습니다. 이는 입력 중 커서가 맨 앞으로 이동하는
         문제를 방지합니다. 대신 외부에서 body가 수정되어도 rerenderBody가 호출되지 않으면 변경된
         body가 적용되지 않습니다. */

      quill.on("text-change", () => {
        handleQuillChange(quill.root.innerHTML);
      });
      setIsLoaded(true);
    } else {
      /* quill.min.js가 로드되어 있지 않아 window.Quill이 undefined이면 isError가
         계속 변경되면서 재시도합니다. */
      setIsError(prevIsError => !prevIsError);
    }
  }, [isError, mountBody]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: quillElement
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, this);
}

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_QuillEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/QuillEditor */ "./components/QuillEditor.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\YOUNG\\Documents\\GitHub\\ls-tech\\front\\pages\\write.js";








function Write() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    isAddingPost,
    postAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    e.preventDefault();

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }

    console.log(text);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: {
        //content: text.trim(),
        content: text
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
  }, [text]); // useCallback안에서 쓴 state는 여기에 무조건 넣어주어야 한다 
  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []);
  //const [body, setBody] = useState('');  // Quill 에디터의 innerHTML을 담는 state

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onSubmit: onSubmitForm,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Quill Sample"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.quilljs.com/1.3.6/quill.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "//cdn.quilljs.com/1.3.6/quill.snow.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Quill Sample"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '80%',
          marginTop: '40px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_QuillEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
          body: text,
          handleQuillChange: setText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '80%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "text state \uBBF8\uB9AC\uBCF4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), text]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          style: {
            float: 'right'
          },
          htmlType: "submit",
          loading: isAddingPost,
          children: "\uC9F9\uC9F9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, default */
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [],
  addPostErrorReason: '',
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중
  postAdded: false // 포스트 업로드 성공

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

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F"
};


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWlsbEVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlF1aWxsRWRpdG9yIiwiYm9keSIsImhhbmRsZVF1aWxsQ2hhbmdlIiwibW91bnRCb2R5IiwicXVpbGxFbGVtZW50IiwidXNlUmVmIiwicXVpbGxJbnN0YW5jZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwidXNlU3RhdGUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwidXNlRWZmZWN0IiwicXVpbGwiLCJjdXJyZW50Iiwicm9vdCIsImlubmVySFRNTCIsIndpbmRvdyIsIlF1aWxsIiwidG9vbGJhck9wdGlvbnMiLCJjb250YWluZXIiLCJtb2R1bGVzIiwiaGlzdG9yeSIsImRlbGF5IiwibWF4U3RhY2siLCJ1c2VyT25seSIsInN5bnRheCIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwic2V0QXR0cmlidXRlIiwib24iLCJwcmV2SXNFcnJvciIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRleHQiLCJzZXRUZXh0IiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwiUm91dGVyIiwicHVzaCIsIm1hcmdpbiIsInN0eWxlcyIsInRpdGxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RFcnJvclJlYXNvbiIsIkxPQURfTUFJTl9QT1NUU19SRVFVRVNUIiwiTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwicmVkdWNlciIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsImlkIiwicG9zdElkIiwiTGlrZXJzIiwidXNlcklkIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFZSxTQUFTQSxXQUFULENBQXFCO0FBQUVDLE1BQUY7QUFBUUMsbUJBQVI7QUFBMkJDO0FBQTNCLENBQXJCLEVBQTZEO0FBQ3hFLFFBQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxRQUFNQyxhQUFhLEdBQUdELG9EQUFNLEVBQTVCO0FBRUEsUUFBTTtBQUFBLE9BQUNFLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJRixRQUFKLEVBQWM7QUFDVjtBQUNaO0FBQ0E7QUFDWSxZQUFNRyxLQUFLLEdBQUdQLGFBQWEsQ0FBQ1EsT0FBNUI7QUFDQUQsV0FBSyxDQUFDRSxJQUFOLENBQVdDLFNBQVgsR0FBdUJmLElBQXZCO0FBQ0E7QUFDSDs7QUFDRCxRQUFJRyxZQUFZLENBQUNVLE9BQWIsSUFBd0JHLE1BQU0sQ0FBQ0MsS0FBbkMsRUFBMEM7QUFDdEM7O0FBRUE7QUFDQSxZQUFNQyxjQUFjLEdBQUc7QUFDbkJDLGlCQUFTLEVBQUUsQ0FDUCxDQUFDO0FBQUUsa0JBQVEsQ0FBQyxPQUFELEVBQVUsS0FBVixFQUFpQixPQUFqQixFQUEwQixNQUExQjtBQUFWLFNBQUQsQ0FETyxFQUM2QztBQUNwRCxTQUFDO0FBQUUsb0JBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixLQUFuQjtBQUFaLFNBQUQsQ0FGTyxFQUdQLENBQUM7QUFBRSxtQkFBUztBQUFYLFNBQUQsQ0FITyxFQUlQLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsRUFBZ0MsUUFBaEMsQ0FKTyxFQUk2QztBQUNwRCxTQUFDO0FBQUUsbUJBQVM7QUFBWCxTQUFELEVBQWtCO0FBQUUsd0JBQWM7QUFBaEIsU0FBbEIsQ0FMTyxFQUs2QztBQUNwRCxTQUFDO0FBQUUsb0JBQVU7QUFBWixTQUFELEVBQWtCO0FBQUUsb0JBQVU7QUFBWixTQUFsQixDQU5PLEVBTTZDO0FBQ3BELFNBQUM7QUFBRSxrQkFBUTtBQUFWLFNBQUQsRUFBdUI7QUFBRSxrQkFBUTtBQUFWLFNBQXZCLENBUE8sRUFRUCxDQUFDO0FBQUUsb0JBQVU7QUFBWixTQUFELEVBQXFCO0FBQUUsb0JBQVU7QUFBWixTQUFyQixDQVJPLEVBUTZDO0FBQ3BELFNBQUM7QUFBRSxvQkFBVTtBQUFaLFNBQUQsRUFBb0I7QUFBRSxvQkFBVTtBQUFaLFNBQXBCLENBVE8sRUFTNkM7QUFDcEQsU0FBQztBQUFFLHVCQUFhO0FBQWYsU0FBRCxDQVZPLEVBVTZDO0FBQ3BELFNBQUMsT0FBRCxDQVhPLEVBVzZDO0FBQ3BELFNBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsWUFBdkIsRUFBcUMsU0FBckMsRUFBZ0QsT0FBaEQsRUFBeUQsT0FBekQsQ0FaTyxDQVkyRDtBQVozRDtBQURRLE9BQXZCO0FBaUJBZCxtQkFBYSxDQUFDUSxPQUFkLEdBQXdCLElBQUlHLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQmQsWUFBWSxDQUFDVSxPQUE5QixFQUF1QztBQUMzRE8sZUFBTyxFQUFFO0FBQ0xDLGlCQUFPLEVBQUc7QUFDTkMsaUJBQUssRUFBRSxJQUREO0FBRU5DLG9CQUFRLEVBQUUsR0FGSjtBQUdOQyxvQkFBUSxFQUFFO0FBSEosV0FETDtBQU1MQyxnQkFBTSxFQUFHLElBTko7QUFPTEMsaUJBQU8sRUFBR1I7QUFQTCxTQURrRDtBQVUzRFMsbUJBQVcsRUFBRSxPQVY4QztBQVczREMsYUFBSyxFQUFHO0FBWG1ELE9BQXZDLENBQXhCO0FBY0EsWUFBTWhCLEtBQUssR0FBR1AsYUFBYSxDQUFDUSxPQUE1QjtBQUVBRCxXQUFLLENBQUNFLElBQU4sQ0FBV2UsWUFBWCxDQUF3QixZQUF4QixFQUFzQyxPQUF0QyxFQXJDc0MsQ0F1Q3RDOztBQUNBakIsV0FBSyxDQUFDRSxJQUFOLENBQVdDLFNBQVgsR0FBdUJmLElBQXZCO0FBRUE7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFDWVksV0FBSyxDQUFDa0IsRUFBTixDQUFTLGFBQVQsRUFBd0IsTUFBTTtBQUMxQjdCLHlCQUFpQixDQUFDVyxLQUFLLENBQUNFLElBQU4sQ0FBV0MsU0FBWixDQUFqQjtBQUNILE9BRkQ7QUFJQUwsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxLQXBERCxNQW9ETztBQUNIO0FBQ1o7QUFDWUgsZ0JBQVUsQ0FBRXdCLFdBQUQsSUFBa0IsQ0FBQ0EsV0FBcEIsQ0FBVjtBQUNIO0FBQ0osR0FsRVEsRUFrRU4sQ0FBQ3pCLE9BQUQsRUFBVUosU0FBVixDQWxFTSxDQUFUO0FBcUVBLHNCQUNJO0FBQUssT0FBRyxFQUFFQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTNkIsS0FBVCxHQUFpQjtBQUM5QixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCNUIsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFFNkIsZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQThCQywrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBaEIsQ0FBL0M7QUFFQTlCLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUkyQixTQUFKLEVBQWU7QUFDYkYsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNFLFNBQUQsQ0FKTSxDQUFUO0FBTUEsUUFBTUksWUFBWSxHQUFHQyx5REFBVyxDQUFFQyxDQUFELElBQU87QUFDdENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJLENBQUNWLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNXLElBQUwsRUFBZCxFQUEyQjtBQUN6QixhQUFPQyxLQUFLLENBQUMsYUFBRCxDQUFaLENBRHlCLENBQ0k7QUFDOUI7O0FBQ0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFaO0FBQ0FGLFlBQVEsQ0FBQztBQUNQaUIsVUFBSSxFQUFFQywrREFEQztBQUVQQyxVQUFJLEVBQUU7QUFDSjtBQUNBQyxlQUFPLEVBQUVsQjtBQUZMO0FBRkMsS0FBRCxDQUFSO0FBT0FtQixzREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNELEdBZCtCLEVBYzdCLENBQUNwQixJQUFELENBZDZCLENBQWhDLENBWDhCLENBeUJsQjtBQUVaO0FBQ0E7QUFDQTtBQUVBOztBQUVBLHNCQUNFLHFFQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVxQixZQUFNLEVBQUU7QUFBVixLQUFiO0FBQXdDLFdBQU8sRUFBQyxxQkFBaEQ7QUFBc0UsWUFBUSxFQUFFZCxZQUFoRjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFZSw4REFBTSxDQUFDdEMsU0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFO0FBQU0sY0FBSSxFQUFDLHdEQUFYO0FBQW9FLGFBQUcsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0U7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUU7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBU0U7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFjRTtBQUFJLGlCQUFTLEVBQUVzQyw4REFBTSxDQUFDQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBa0JFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxLQUFUO0FBQWdCQyxtQkFBUyxFQUFFO0FBQTNCLFNBQVo7QUFBQSwrQkFDRSxxRUFBQywrREFBRDtBQUNFLGNBQUksRUFBRXpCLElBRFI7QUFFRSwyQkFBaUIsRUFBRUM7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUF5QkU7QUFBSyxhQUFLLEVBQUU7QUFBRXVCLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHeEIsSUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUE4QkU7QUFBQSwrQkFDRSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGVBQUssRUFBRTtBQUFFMEIsaUJBQUssRUFBRTtBQUFULFdBQTlCO0FBQWtELGtCQUFRLEVBQUMsUUFBM0Q7QUFBb0UsaUJBQU8sRUFBRXhCLFlBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRk0sTUFBTXlCLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFFLEVBRGE7QUFFeEJDLG9CQUFrQixFQUFFLEVBRkk7QUFFQTtBQUN4QjNCLGNBQVksRUFBRSxLQUhVO0FBR0g7QUFDckJDLFdBQVMsRUFBRSxLQUphLENBSU47O0FBSk0sQ0FBckI7QUFPQSxNQUFNMkIsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTXRCLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU11QixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7O0FBRVAsTUFBTUMsT0FBTyxHQUFHLENBQUM3QyxLQUFLLEdBQUdzQixZQUFULEVBQXVCd0IsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDcEMsSUFBZjtBQUNJLFNBQUtDLGdCQUFMO0FBQXVCO0FBQ3JCLCtDQUNLWCxLQURMO0FBRUVILHNCQUFZLEVBQUUsSUFGaEI7QUFHRTJCLDRCQUFrQixFQUFFLEVBSHRCO0FBSUUxQixtQkFBUyxFQUFFO0FBSmI7QUFNRDs7QUFDRCxTQUFLb0MsZ0JBQUw7QUFBdUI7QUFDckIsK0NBQ0tsQyxLQURMO0FBRUVILHNCQUFZLEVBQUUsS0FGaEI7QUFHRTBCLG1CQUFTLEVBQUUsQ0FBQ3VCLE1BQU0sQ0FBQ2xDLElBQVIsRUFBYyxHQUFHWixLQUFLLENBQUN1QixTQUF2QixDQUhiO0FBSUV6QixtQkFBUyxFQUFFO0FBSmI7QUFNRDs7QUFDRCxTQUFLcUMsZ0JBQUw7QUFBdUI7QUFDckIsK0NBQ0tuQyxLQURMO0FBRUVILHNCQUFZLEVBQUUsS0FGaEI7QUFHRTJCLDRCQUFrQixFQUFFc0IsTUFBTSxDQUFDQztBQUg3QjtBQUtEOztBQUNELFNBQUt0Qix1QkFBTDtBQUNBLFNBQUtHLDBCQUFMO0FBQ0EsU0FBS0csdUJBQUw7QUFBOEI7QUFDNUIsK0NBQ0svQixLQURMO0FBRUV1QixtQkFBUyxFQUFFO0FBRmI7QUFJRDs7QUFDRCxTQUFLRyx1QkFBTDtBQUNBLFNBQUtHLDBCQUFMO0FBQ0EsU0FBS0csdUJBQUw7QUFBOEI7QUFDNUIsK0NBQ0toQyxLQURMO0FBRUV1QixtQkFBUyxFQUFFdUIsTUFBTSxDQUFDbEM7QUFGcEI7QUFJRDs7QUFDRCxTQUFLZSx1QkFBTDtBQUNBLFNBQUtHLDBCQUFMO0FBQ0EsU0FBS0csdUJBQUw7QUFBOEI7QUFDNUIsaUNBQ0tqQyxLQURMO0FBR0Q7O0FBQ0QsU0FBS29DLGlCQUFMO0FBQXdCO0FBQ3RCLGlDQUNLcEMsS0FETDtBQUdEOztBQUNELFNBQUtxQyxpQkFBTDtBQUF3QjtBQUN0QixjQUFNVyxTQUFTLEdBQUdoRCxLQUFLLENBQUN1QixTQUFOLENBQWdCMEIsU0FBaEIsQ0FBMEJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNMLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWXdDLE1BQXBELENBQWxCLENBRHNCLENBQ3lEOztBQUMvRSxjQUFNbkQsSUFBSSxHQUFHRCxLQUFLLENBQUN1QixTQUFOLENBQWdCeUIsU0FBaEIsQ0FBYjtBQUNBLGNBQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUVGLFlBQUUsRUFBRUwsTUFBTSxDQUFDbEMsSUFBUCxDQUFZMEM7QUFBbEIsU0FBRCxFQUE2QixHQUFHckQsSUFBSSxDQUFDb0QsTUFBckMsQ0FBZixDQUhzQixDQUd1Qzs7QUFDN0QsY0FBTTlCLFNBQVMsR0FBRyxDQUFDLEdBQUd2QixLQUFLLENBQUN1QixTQUFWLENBQWxCO0FBQ0FBLGlCQUFTLENBQUN5QixTQUFELENBQVQsbUNBQTRCL0MsSUFBNUI7QUFBa0NvRDtBQUFsQztBQUNBLCtDQUNLckQsS0FETDtBQUVFdUI7QUFGRjtBQUlEOztBQUNELFNBQUtlLGlCQUFMO0FBQXdCO0FBQ3RCLGlDQUNLdEMsS0FETDtBQUdEOztBQUNELFNBQUt1QyxtQkFBTDtBQUEwQjtBQUN4QixpQ0FDS3ZDLEtBREw7QUFHRDs7QUFDRCxTQUFLd0MsbUJBQUw7QUFBMEI7QUFDeEIsY0FBTVEsU0FBUyxHQUFHaEQsS0FBSyxDQUFDdUIsU0FBTixDQUFnQjBCLFNBQWhCLENBQTBCQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTTCxNQUFNLENBQUNsQyxJQUFQLENBQVl3QyxNQUFwRCxDQUFsQjtBQUNBLGNBQU1uRCxJQUFJLEdBQUdELEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0J5QixTQUFoQixDQUFiO0FBQ0EsY0FBTUssTUFBTSxHQUFHcEQsSUFBSSxDQUFDb0QsTUFBTCxDQUFZRSxNQUFaLENBQW1CTCxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTTCxNQUFNLENBQUNsQyxJQUFQLENBQVkwQyxNQUE3QyxDQUFmLENBSHdCLENBRzZDOztBQUNyRSxjQUFNL0IsU0FBUyxHQUFHLENBQUMsR0FBR3ZCLEtBQUssQ0FBQ3VCLFNBQVYsQ0FBbEI7QUFDQUEsaUJBQVMsQ0FBQ3lCLFNBQUQsQ0FBVCxtQ0FBNEIvQyxJQUE1QjtBQUFrQ29EO0FBQWxDO0FBQ0EsK0NBQ0tyRCxLQURMO0FBRUV1QjtBQUZGO0FBSUQ7O0FBQ0QsU0FBS2tCLG1CQUFMO0FBQTBCO0FBQ3hCLGlDQUNLekMsS0FETDtBQUdEOztBQUNEO0FBQVM7QUFDTCxpQ0FDT0EsS0FEUDtBQUdIO0FBN0ZMO0FBK0ZILENBaEdEOztBQWtHZTZDLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpbGxFZGl0b3IoeyBib2R5LCBoYW5kbGVRdWlsbENoYW5nZSwgbW91bnRCb2R5IH0pIHtcclxuICAgIGNvbnN0IHF1aWxsRWxlbWVudCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgcXVpbGxJbnN0YW5jZSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIHRydWXsnbgg7IOB7YOc7JeQ7IScIHJlcmVuZGVyQm9keeulvCDthrXtlbQgYm9keSDsoIHsmqnsi5wgUXVpbGwg7LSI6riw7ZmUIOyXhuydtFxyXG4gICAgICAgICAgICAgICBpbm5lckhUTUzrp4wgYm9keeuhnCDrsJTqv4nri4jri6QuIOydtCDsobDqsbTsnbQg7JeG7J2EIOyLnCDtiLTrsJTqsIAg7KSR67O165CY7Ja0IOyXrOufrCDqsJwg64KY7YOA64KY6rKMXHJcbiAgICAgICAgICAgICAgIOuQqeuLiOuLpC4gKi9cclxuICAgICAgICAgICAgY29uc3QgcXVpbGwgPSBxdWlsbEluc3RhbmNlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVpbGxFbGVtZW50LmN1cnJlbnQgJiYgd2luZG93LlF1aWxsKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIGZhbHNl7J28IOuVjOuKlCBRdWlsbOydhCDstIjquLDtmZTtlanri4jri6QuICovXHJcblxyXG4gICAgICAgICAgICAvKiBRdWlsbCDsmLXshZjsnYQg7JuQ7ZWY64qUIOuMgOuhnCDsiJjsoJXtlZjshLjsmpQuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sICAgIC8vIGN1c3RvbSBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IDEgfSwgeyAnaGVhZGVyJzogMiB9XSwgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCd9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdpbmRlbnQnOiAnLTEnfSwgeyAnaW5kZW50JzogJysxJyB9XSwgICAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnbGluaycsICdjb2RlLWJsb2NrJywgJ2Zvcm11bGEnLCAnaW1hZ2UnLCAndmlkZW8nXSAvLyBtZWRpYVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsSW5zdGFuY2UuY3VycmVudCA9IG5ldyB3aW5kb3cuUXVpbGwocXVpbGxFbGVtZW50LmN1cnJlbnQsIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5IDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3RhY2s6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9ubHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bnRheCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhciA6IHRvb2xiYXJPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi67O466y4IOyeheugpVwiLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUgOiAnc25vdydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWlsbCA9IHF1aWxsSW5zdGFuY2UuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3Quc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g7LSI6riwIGJvZHkgc3RhdGUg7KCB7JqpXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuXHJcbiAgICAgICAgICAgIC8qIHF1aWxs7JeQ7IScIHRleHQtY2hhbmdlIOydtOuypO2KuCDrsJzsg53si5zsl5Agc2V0Qm9keShpbm5lckhUTUwp7J2EIO2Gte2VtCBib2R566W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgYm9keeqwgCDsl4XrjbDsnbTtirjrkJjslrTrj4QgdXNlRWZmZWN0IOuwnOyDnSDsobDqsbQg7J247J6QKFtpc0Vycm9yLCBtb3VudEJvZHldKeyXkCBib2R56rCAIOyXhuycvOuvgOuhnFxyXG4gICAgICAgICAgICAgICBRdWlsbEVkaXRvciDsu7Ttj6zrhIztirjripQg64uk7IucIOugjOuNlOungeuQmOyngCDslYrsirXri4jri6QuIOydtOuKlCDsnoXroKUg7KSRIOy7pOyEnOqwgCDrp6gg7JWe7Jy866GcIOydtOuPme2VmOuKlFxyXG4gICAgICAgICAgICAgICDrrLjsoJzrpbwg67Cp7KeA7ZWp64uI64ukLiDrjIDsi6Ag7Jm467aA7JeQ7IScIGJvZHnqsIAg7IiY7KCV65CY7Ja064+EIHJlcmVuZGVyQm9keeqwgCDtmLjstpzrkJjsp4Ag7JWK7Jy866m0IOuzgOqyveuQnFxyXG4gICAgICAgICAgICAgICBib2R56rCAIOyggeyaqeuQmOyngCDslYrsirXri4jri6QuICovXHJcbiAgICAgICAgICAgIHF1aWxsLm9uKFwidGV4dC1jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUXVpbGxDaGFuZ2UocXVpbGwucm9vdC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qIHF1aWxsLm1pbi5qc+qwgCDroZzrk5zrkJjslrQg7J6I7KeAIOyViuyVhCB3aW5kb3cuUXVpbGzsnbQgdW5kZWZpbmVk7J2066m0IGlzRXJyb3LqsIBcclxuICAgICAgICAgICAgICAg6rOE7IaNIOuzgOqyveuQmOuptOyEnCDsnqzsi5zrj4Ttlanri4jri6QuICovXHJcbiAgICAgICAgICAgIHNldElzRXJyb3IoKHByZXZJc0Vycm9yKSA9PiAoIXByZXZJc0Vycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRXJyb3IsIG1vdW50Qm9keV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtxdWlsbEVsZW1lbnR9PjwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUXVpbGxFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9RdWlsbEVkaXRvcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgaXNBZGRpbmdQb3N0LCBwb3N0QWRkZWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBvc3RBZGRlZCkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LCBbcG9zdEFkZGVkXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTsgLy8gcmV0dXJu7Jy866GcIOuBiuyWtOykmOyVvCDrsJHsl5DrtoDrtoQg7Iuk7ZaJ7JWI65CoIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAvL2NvbnRlbnQ6IHRleHQudHJpbSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW3RleHRdKTsgLy8gdXNlQ2FsbGJhY2vslYjsl5DshJwg7JO0IHN0YXRl64qUIOyXrOq4sOyXkCDrrLTsobDqsbQg64Sj7Ja07KO87Ja07JW8IO2VnOuLpCBcclxuXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAvLyAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy9jb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBRdWlsbCDsl5DrlJTthLDsnZggaW5uZXJIVE1M7J2EIOuLtOuKlCBzdGF0ZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5RdWlsbCBTYW1wbGU8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Lyog6rSA66Co65CcIOumrOyGjOyKpCDroZzrk5wgKENTU+uKlCBfYXBwLmpz7JeQ7IScIGdsb2JhbCBDU1ProZwg66Gc65Oc7ZWY64qUIO2OuOydtCDsoovsnYQg6rGwIOqwmeuLpC4pKi99XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2hpZ2hsaWdodGpzL2Nkbi1yZWxlYXNlQDEwLjcuMi9idWlsZC9oaWdobGlnaHQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvaGlnaGxpZ2h0anMvY2RuLXJlbGVhc2VAMTAuNy4yL2J1aWxkL3N0eWxlcy9kZWZhdWx0Lm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLnNub3cuY3NzXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFF1aWxsIFNhbXBsZVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cclxuICAgICAgICAgIDxRdWlsbEVkaXRvclxyXG4gICAgICAgICAgICBib2R5PXt0ZXh0fVxyXG4gICAgICAgICAgICBoYW5kbGVRdWlsbENoYW5nZT17c2V0VGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19PlxyXG4gICAgICAgICAgPHA+dGV4dCBzdGF0ZSDrr7jrpqzrs7TquLA8L3A+XHJcbiAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nUG9zdH0+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufSIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgYWRkUG9zdEVycm9yUmVhc29uOiAnJywgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOykkVxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDshLHqs7VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGFkZFBvc3RFcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgYWRkUG9zdEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogW10sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpOyAvLyDrgrTqsIAgJ+yii+yVhOyalCcg64iE66W4IOqyjOyLnOusvOydtCDrqofrsojsp7gg7Y+s7Iqk7Yq47J247KeAIFxyXG4gICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgTGlrZXJzID0gW3sgaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9LCAuLi5wb3N0Lkxpa2Vyc107IC8vICfsoovslYTsmpQn64iE66W4IOyCrOuejOuqqeuhneyXkCDrgrQg7J2066aEIOy2lOqwgCBcclxuICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSB7IC4uLnBvc3QsIExpa2VycyB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBMaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpOyAvLyAn7KKL7JWE7JqUJ+uIhOuluCDsgqzrnozrqqnroZ3sl5DshJwg64K0IOydtOumhCDrubzquLAgKD3tlYTthLDrp4EpIFxyXG4gICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgTGlrZXJzIH07XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
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
    } //console.log(text);


    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: {
        //content: text.trim(),
        content: text
      }
    }, [text]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWlsbEVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlF1aWxsRWRpdG9yIiwiYm9keSIsImhhbmRsZVF1aWxsQ2hhbmdlIiwibW91bnRCb2R5IiwicXVpbGxFbGVtZW50IiwidXNlUmVmIiwicXVpbGxJbnN0YW5jZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwidXNlU3RhdGUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwidXNlRWZmZWN0IiwicXVpbGwiLCJjdXJyZW50Iiwicm9vdCIsImlubmVySFRNTCIsIndpbmRvdyIsIlF1aWxsIiwidG9vbGJhck9wdGlvbnMiLCJjb250YWluZXIiLCJtb2R1bGVzIiwiaGlzdG9yeSIsImRlbGF5IiwibWF4U3RhY2siLCJ1c2VyT25seSIsInN5bnRheCIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwic2V0QXR0cmlidXRlIiwib24iLCJwcmV2SXNFcnJvciIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRleHQiLCJzZXRUZXh0IiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJSb3V0ZXIiLCJwdXNoIiwibWFyZ2luIiwic3R5bGVzIiwidGl0bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImZsb2F0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiYWRkUG9zdEVycm9yUmVhc29uIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyIsIkxPQURfTUFJTl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJwb3N0SWQiLCJMaWtlcnMiLCJ1c2VySWQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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LEtBQVNMLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWXdDLE1BQXBELENBQWxCO0FBQ0EsY0FBTWpELElBQUksR0FBR0QsS0FBSyxDQUFDcUIsU0FBTixDQUFnQnlCLFNBQWhCLENBQWI7QUFDQSxjQUFNSyxNQUFNLEdBQUdsRCxJQUFJLENBQUNrRCxNQUFMLENBQVlFLE1BQVosQ0FBbUJMLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNMLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWTBDLE1BQTdDLENBQWYsQ0FId0IsQ0FHNkM7O0FBQ3JFLGNBQU0vQixTQUFTLEdBQUcsQ0FBQyxHQUFHckIsS0FBSyxDQUFDcUIsU0FBVixDQUFsQjtBQUNBQSxpQkFBUyxDQUFDeUIsU0FBRCxDQUFULG1DQUE0QjdDLElBQTVCO0FBQWtDa0Q7QUFBbEM7QUFDQSwrQ0FDS25ELEtBREw7QUFFRXFCO0FBRkY7QUFJRDs7QUFDRCxTQUFLa0IsbUJBQUw7QUFBMEI7QUFDeEIsaUNBQ0t2QyxLQURMO0FBR0Q7O0FBQ0Q7QUFBUztBQUNMLGlDQUNPQSxLQURQO0FBR0g7QUE3Rkw7QUErRkgsQ0FoR0Q7O0FBa0dlMkMsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy93cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvd3JpdGUuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWlsbEVkaXRvcih7IGJvZHksIGhhbmRsZVF1aWxsQ2hhbmdlLCBtb3VudEJvZHkgfSkge1xyXG4gICAgY29uc3QgcXVpbGxFbGVtZW50ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBxdWlsbEluc3RhbmNlID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgLyogaXNMb2FkZWTqsIAgdHJ1ZeyduCDsg4Htg5zsl5DshJwgcmVyZW5kZXJCb2R566W8IO2Gte2VtCBib2R5IOyggeyaqeyLnCBRdWlsbCDstIjquLDtmZQg7JeG7J20XHJcbiAgICAgICAgICAgICAgIGlubmVySFRNTOunjCBib2R566GcIOuwlOq/ieuLiOuLpC4g7J20IOyhsOqxtOydtCDsl4bsnYQg7IucIO2ItOuwlOqwgCDspJHrs7XrkJjslrQg7Jes65+sIOqwnCDrgpjtg4DrgpjqsoxcclxuICAgICAgICAgICAgICAg65Cp64uI64ukLiAqL1xyXG4gICAgICAgICAgICBjb25zdCBxdWlsbCA9IHF1aWxsSW5zdGFuY2UuY3VycmVudDtcclxuICAgICAgICAgICAgcXVpbGwucm9vdC5pbm5lckhUTUwgPSBib2R5O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxdWlsbEVsZW1lbnQuY3VycmVudCAmJiB3aW5kb3cuUXVpbGwpIHtcclxuICAgICAgICAgICAgLyogaXNMb2FkZWTqsIAgZmFsc2Xsnbwg65WM64qUIFF1aWxs7J2EIOy0iOq4sO2ZlO2VqeuLiOuLpC4gKi9cclxuXHJcbiAgICAgICAgICAgIC8qIFF1aWxsIOyYteyFmOydhCDsm5DtlZjripQg64yA66GcIOyImOygle2VmOyEuOyalC4gKi9cclxuICAgICAgICAgICAgY29uc3QgdG9vbGJhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSwgICAgLy8gY3VzdG9tIGRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV0gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2FsaWduJzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdjb2xvcic6IFtdIH0sIHsgJ2JhY2tncm91bmQnOiBbXSB9XSwgICAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJ30sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnc2NyaXB0JzogJ3N1Yid9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLCAgICAgICAgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2luZGVudCc6ICctMSd9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLCAgICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2RpcmVjdGlvbic6ICdydGwnIH1dLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIFsnYmxvY2txdW90ZScsICdsaW5rJywgJ2NvZGUtYmxvY2snLCAnZm9ybXVsYScsICdpbWFnZScsICd2aWRlbyddIC8vIG1lZGlhXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcXVpbGxJbnN0YW5jZS5jdXJyZW50ID0gbmV3IHdpbmRvdy5RdWlsbChxdWlsbEVsZW1lbnQuY3VycmVudCwge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTdGFjazogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyT25seTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ludGF4IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyIDogdG9vbGJhck9wdGlvbnNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLrs7jrrLgg7J6F66ClXCIsXHJcbiAgICAgICAgICAgICAgICB0aGVtZSA6ICdzbm93J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHF1aWxsID0gcXVpbGxJbnN0YW5jZS5jdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgcXVpbGwucm9vdC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XHJcblxyXG4gICAgICAgICAgICAvLyDstIjquLAgYm9keSBzdGF0ZSDsoIHsmqlcclxuICAgICAgICAgICAgcXVpbGwucm9vdC5pbm5lckhUTUwgPSBib2R5O1xyXG5cclxuICAgICAgICAgICAgLyogcXVpbGzsl5DshJwgdGV4dC1jaGFuZ2Ug7J2067Kk7Yq4IOuwnOyDneyLnOyXkCBzZXRCb2R5KGlubmVySFRNTCnsnYQg7Ya17ZW0IGJvZHnrpbwg7JeF642w7J207Yq47ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICBib2R56rCAIOyXheuNsOydtO2KuOuQmOyWtOuPhCB1c2VFZmZlY3Qg67Cc7IOdIOyhsOqxtCDsnbjsnpAoW2lzRXJyb3IsIG1vdW50Qm9keV0p7JeQIGJvZHnqsIAg7JeG7Jy866+A66GcXHJcbiAgICAgICAgICAgICAgIFF1aWxsRWRpdG9yIOy7tO2PrOuEjO2KuOuKlCDri6Tsi5wg66CM642U66eB65CY7KeAIOyViuyKteuLiOuLpC4g7J2064qUIOyeheugpSDspJEg7Luk7ISc6rCAIOunqCDslZ7snLzroZwg7J2064+Z7ZWY64qUXHJcbiAgICAgICAgICAgICAgIOusuOygnOulvCDrsKnsp4Dtlanri4jri6QuIOuMgOyLoCDsmbjrtoDsl5DshJwgYm9keeqwgCDsiJjsoJXrkJjslrTrj4QgcmVyZW5kZXJCb2R56rCAIO2YuOy2nOuQmOyngCDslYrsnLzrqbQg67OA6rK965CcXHJcbiAgICAgICAgICAgICAgIGJvZHnqsIAg7KCB7Jqp65CY7KeAIOyViuyKteuLiOuLpC4gKi9cclxuICAgICAgICAgICAgcXVpbGwub24oXCJ0ZXh0LWNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVRdWlsbENoYW5nZShxdWlsbC5yb290LmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLyogcXVpbGwubWluLmpz6rCAIOuhnOuTnOuQmOyWtCDsnojsp4Ag7JWK7JWEIHdpbmRvdy5RdWlsbOydtCB1bmRlZmluZWTsnbTrqbQgaXNFcnJvcuqwgFxyXG4gICAgICAgICAgICAgICDqs4Tsho0g67OA6rK965CY66m07IScIOyerOyLnOuPhO2VqeuLiOuLpC4gKi9cclxuICAgICAgICAgICAgc2V0SXNFcnJvcigocHJldklzRXJyb3IpID0+ICghcHJldklzRXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNFcnJvciwgbW91bnRCb2R5XSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3F1aWxsRWxlbWVudH0+PC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBRdWlsbEVkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL1F1aWxsRWRpdG9yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyaXRlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBpc0FkZGluZ1Bvc3QsIHBvc3RBZGRlZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocG9zdEFkZGVkKSB7XHJcbiAgICAgIHNldFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH0sIFtwb3N0QWRkZWRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpOyAvLyByZXR1cm7snLzroZwg64GK7Ja07KSY7JW8IOuwkeyXkOu2gOu2hCDsi6TtlonslYjrkKggXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLy9jb250ZW50OiB0ZXh0LnRyaW0oKSxcclxuICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICB9LFxyXG4gICAgfSwgW3RleHRdKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW3RleHRdKTsgLy8gdXNlQ2FsbGJhY2vslYjsl5DshJwg7JO0IHN0YXRl64qUIOyXrOq4sOyXkCDrrLTsobDqsbQg64Sj7Ja07KO87Ja07JW8IO2VnOuLpCBcclxuXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAvLyAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy9jb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBRdWlsbCDsl5DrlJTthLDsnZggaW5uZXJIVE1M7J2EIOuLtOuKlCBzdGF0ZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5RdWlsbCBTYW1wbGU8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Lyog6rSA66Co65CcIOumrOyGjOyKpCDroZzrk5wgKENTU+uKlCBfYXBwLmpz7JeQ7IScIGdsb2JhbCBDU1ProZwg66Gc65Oc7ZWY64qUIO2OuOydtCDsoovsnYQg6rGwIOqwmeuLpC4pKi99XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2hpZ2hsaWdodGpzL2Nkbi1yZWxlYXNlQDEwLjcuMi9idWlsZC9oaWdobGlnaHQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvaGlnaGxpZ2h0anMvY2RuLXJlbGVhc2VAMTAuNy4yL2J1aWxkL3N0eWxlcy9kZWZhdWx0Lm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLnNub3cuY3NzXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFF1aWxsIFNhbXBsZVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cclxuICAgICAgICAgIDxRdWlsbEVkaXRvclxyXG4gICAgICAgICAgICBib2R5PXt0ZXh0fVxyXG4gICAgICAgICAgICBoYW5kbGVRdWlsbENoYW5nZT17c2V0VGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19PlxyXG4gICAgICAgICAgPHA+dGV4dCBzdGF0ZSDrr7jrpqzrs7TquLA8L3A+XHJcbiAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nUG9zdH0+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufSIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgYWRkUG9zdEVycm9yUmVhc29uOiAnJywgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOykkVxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDshLHqs7VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGFkZFBvc3RFcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgYWRkUG9zdEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogW10sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpOyAvLyDrgrTqsIAgJ+yii+yVhOyalCcg64iE66W4IOqyjOyLnOusvOydtCDrqofrsojsp7gg7Y+s7Iqk7Yq47J247KeAIFxyXG4gICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgTGlrZXJzID0gW3sgaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9LCAuLi5wb3N0Lkxpa2Vyc107IC8vICfsoovslYTsmpQn64iE66W4IOyCrOuejOuqqeuhneyXkCDrgrQg7J2066aEIOy2lOqwgCBcclxuICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSB7IC4uLnBvc3QsIExpa2VycyB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBMaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpOyAvLyAn7KKL7JWE7JqUJ+uIhOuluCDsgqzrnozrqqnroZ3sl5DshJwg64K0IOydtOumhCDrubzquLAgKD3tlYTthLDrp4EpIFxyXG4gICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgTGlrZXJzIH07XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
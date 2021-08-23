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

var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\components\\QuillEditor.js";

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

var _jsxFileName = "C:\\Users\\ympark4\\Documents\\GitHub\\ls-tech\\front\\pages\\write.js";








function Write() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: titleText,
    1: setTitleText
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: subTitleText,
    1: setSubTitleText
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    isAddingPost,
    postAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post); // useEffect(() => {
  //   if (postAdded) {
  //     setText('');
  //   }
  // }, [postAdded]);

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    e.preventDefault();

    if (!titleText || !titleText.trim()) {
      return alert('제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }

    if (!subTitleText || !subTitleText.trim()) {
      return alert('소제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    } //console.log(text);


    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: {
        title: titleText,
        subTitle: subTitleText,
        //content: text.trim(),
        content: text
      }
    }, [titleText, subTitleText, text]);
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
  }, [titleText, subTitleText, text]); // useCallback안에서 쓴 state는 여기에 무조건 넣어주어야 한다 
  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []);

  const onChangeTitleText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    setTitleText(e.target.value);
  }, []);
  const onChangeSubTitleText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    setSubTitleText(e.target.value);
  }, []);
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
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "//cdn.quilljs.com/1.3.6/quill.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "//cdn.quilljs.com/1.3.6/quill.snow.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Quill Sample"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        maxLength: 50,
        placeholder: "\uC81C\uBAA9\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",
        value: titleText,
        onChange: onChangeTitleText,
        style: {
          height: '30px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        maxLength: 100,
        placeholder: "\uC18C\uC81C\uBAA9\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",
        value: subTitleText,
        onChange: onChangeSubTitleText,
        style: {
          height: '30px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '80%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "text state \uBBF8\uB9AC\uBCF4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), text]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWlsbEVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlF1aWxsRWRpdG9yIiwiYm9keSIsImhhbmRsZVF1aWxsQ2hhbmdlIiwibW91bnRCb2R5IiwicXVpbGxFbGVtZW50IiwidXNlUmVmIiwicXVpbGxJbnN0YW5jZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwidXNlU3RhdGUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwidXNlRWZmZWN0IiwicXVpbGwiLCJjdXJyZW50Iiwicm9vdCIsImlubmVySFRNTCIsIndpbmRvdyIsIlF1aWxsIiwidG9vbGJhck9wdGlvbnMiLCJjb250YWluZXIiLCJtb2R1bGVzIiwiaGlzdG9yeSIsImRlbGF5IiwibWF4U3RhY2siLCJ1c2VyT25seSIsInN5bnRheCIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwic2V0QXR0cmlidXRlIiwib24iLCJwcmV2SXNFcnJvciIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRpdGxlVGV4dCIsInNldFRpdGxlVGV4dCIsInN1YlRpdGxlVGV4dCIsInNldFN1YlRpdGxlVGV4dCIsInRleHQiLCJzZXRUZXh0IiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsInRpdGxlIiwic3ViVGl0bGUiLCJjb250ZW50IiwiUm91dGVyIiwicHVzaCIsIm9uQ2hhbmdlVGl0bGVUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVN1YlRpdGxlVGV4dCIsIm1hcmdpbiIsInN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0RXJyb3JSZWFzb24iLCJoYXNoVGFncyIsImFydGljbGUiLCJMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCIsIkxPQURfTUFJTl9QT1NUU19TVUNDRVNTIiwiTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkxPQURfQUxMX0hBU0hUQUdTX1JFUVVFU1QiLCJMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTIiwiTE9BRF9BTExfSEFTSFRBR1NfRkFJTFVSRSIsIkxPQURfQVJUSUNMRV9SRVFVRVNUIiwiTE9BRF9BUlRJQ0xFX1NVQ0NFU1MiLCJMT0FEX0FSVElDTEVfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJpZCIsInBvc3RJZCIsIkxpa2VycyIsInVzZXJJZCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQyxNQUFGO0FBQVFDLG1CQUFSO0FBQTJCQztBQUEzQixDQUFyQixFQUE2RDtBQUN4RSxRQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHRCxvREFB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpbGxFZGl0b3IoeyBib2R5LCBoYW5kbGVRdWlsbENoYW5nZSwgbW91bnRCb2R5IH0pIHtcclxuICAgIGNvbnN0IHF1aWxsRWxlbWVudCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgcXVpbGxJbnN0YW5jZSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIHRydWXsnbgg7IOB7YOc7JeQ7IScIHJlcmVuZGVyQm9keeulvCDthrXtlbQgYm9keSDsoIHsmqnsi5wgUXVpbGwg7LSI6riw7ZmUIOyXhuydtFxyXG4gICAgICAgICAgICAgICBpbm5lckhUTUzrp4wgYm9keeuhnCDrsJTqv4nri4jri6QuIOydtCDsobDqsbTsnbQg7JeG7J2EIOyLnCDtiLTrsJTqsIAg7KSR67O165CY7Ja0IOyXrOufrCDqsJwg64KY7YOA64KY6rKMXHJcbiAgICAgICAgICAgICAgIOuQqeuLiOuLpC4gKi9cclxuICAgICAgICAgICAgY29uc3QgcXVpbGwgPSBxdWlsbEluc3RhbmNlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVpbGxFbGVtZW50LmN1cnJlbnQgJiYgd2luZG93LlF1aWxsKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIGZhbHNl7J28IOuVjOuKlCBRdWlsbOydhCDstIjquLDtmZTtlanri4jri6QuICovXHJcblxyXG4gICAgICAgICAgICAvKiBRdWlsbCDsmLXshZjsnYQg7JuQ7ZWY64qUIOuMgOuhnCDsiJjsoJXtlZjshLjsmpQuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sICAgIC8vIGN1c3RvbSBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IDEgfSwgeyAnaGVhZGVyJzogMiB9XSwgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCd9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdpbmRlbnQnOiAnLTEnfSwgeyAnaW5kZW50JzogJysxJyB9XSwgICAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnbGluaycsICdjb2RlLWJsb2NrJywgJ2Zvcm11bGEnLCAnaW1hZ2UnLCAndmlkZW8nXSAvLyBtZWRpYVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsSW5zdGFuY2UuY3VycmVudCA9IG5ldyB3aW5kb3cuUXVpbGwocXVpbGxFbGVtZW50LmN1cnJlbnQsIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5IDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3RhY2s6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9ubHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bnRheCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhciA6IHRvb2xiYXJPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi67O466y4IOyeheugpVwiLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUgOiAnc25vdydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWlsbCA9IHF1aWxsSW5zdGFuY2UuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3Quc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g7LSI6riwIGJvZHkgc3RhdGUg7KCB7JqpXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuXHJcbiAgICAgICAgICAgIC8qIHF1aWxs7JeQ7IScIHRleHQtY2hhbmdlIOydtOuypO2KuCDrsJzsg53si5zsl5Agc2V0Qm9keShpbm5lckhUTUwp7J2EIO2Gte2VtCBib2R566W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgYm9keeqwgCDsl4XrjbDsnbTtirjrkJjslrTrj4QgdXNlRWZmZWN0IOuwnOyDnSDsobDqsbQg7J247J6QKFtpc0Vycm9yLCBtb3VudEJvZHldKeyXkCBib2R56rCAIOyXhuycvOuvgOuhnFxyXG4gICAgICAgICAgICAgICBRdWlsbEVkaXRvciDsu7Ttj6zrhIztirjripQg64uk7IucIOugjOuNlOungeuQmOyngCDslYrsirXri4jri6QuIOydtOuKlCDsnoXroKUg7KSRIOy7pOyEnOqwgCDrp6gg7JWe7Jy866GcIOydtOuPme2VmOuKlFxyXG4gICAgICAgICAgICAgICDrrLjsoJzrpbwg67Cp7KeA7ZWp64uI64ukLiDrjIDsi6Ag7Jm467aA7JeQ7IScIGJvZHnqsIAg7IiY7KCV65CY7Ja064+EIHJlcmVuZGVyQm9keeqwgCDtmLjstpzrkJjsp4Ag7JWK7Jy866m0IOuzgOqyveuQnFxyXG4gICAgICAgICAgICAgICBib2R56rCAIOyggeyaqeuQmOyngCDslYrsirXri4jri6QuICovXHJcbiAgICAgICAgICAgIHF1aWxsLm9uKFwidGV4dC1jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUXVpbGxDaGFuZ2UocXVpbGwucm9vdC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qIHF1aWxsLm1pbi5qc+qwgCDroZzrk5zrkJjslrQg7J6I7KeAIOyViuyVhCB3aW5kb3cuUXVpbGzsnbQgdW5kZWZpbmVk7J2066m0IGlzRXJyb3LqsIBcclxuICAgICAgICAgICAgICAg6rOE7IaNIOuzgOqyveuQmOuptOyEnCDsnqzsi5zrj4Ttlanri4jri6QuICovXHJcbiAgICAgICAgICAgIHNldElzRXJyb3IoKHByZXZJc0Vycm9yKSA9PiAoIXByZXZJc0Vycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRXJyb3IsIG1vdW50Qm9keV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtxdWlsbEVsZW1lbnR9PjwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUXVpbGxFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9RdWlsbEVkaXRvcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RpdGxlVGV4dCwgc2V0VGl0bGVUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ViVGl0bGVUZXh0LCBzZXRTdWJUaXRsZVRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGlzQWRkaW5nUG9zdCwgcG9zdEFkZGVkIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChwb3N0QWRkZWQpIHtcclxuICAvLyAgICAgc2V0VGV4dCgnJyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3Bvc3RBZGRlZF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aXRsZVRleHQgfHwgIXRpdGxlVGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfsoJzrqqnsnYQg7J6R7ISx7ZWY7IS47JqULicpOyAvLyByZXR1cm7snLzroZwg64GK7Ja07KSY7JW8IOuwkeyXkOu2gOu2hCDsi6TtlonslYjrkKggXHJcbiAgICB9XHJcbiAgICBpZiAoIXN1YlRpdGxlVGV4dCB8fCAhc3ViVGl0bGVUZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+yGjOygnOuqqeydhCDsnpHshLHtlZjshLjsmpQuJyk7IC8vIHJldHVybuycvOuhnCDrgYrslrTspJjslbwg67CR7JeQ67aA67aEIOyLpO2WieyViOuQqCBcclxuICAgIH1cclxuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpOyAvLyByZXR1cm7snLzroZwg64GK7Ja07KSY7JW8IOuwkeyXkOu2gOu2hCDsi6TtlonslYjrkKggXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlVGV4dCxcclxuICAgICAgICBzdWJUaXRsZTogc3ViVGl0bGVUZXh0LFxyXG4gICAgICAgIC8vY29udGVudDogdGV4dC50cmltKCksXHJcbiAgICAgICAgY29udGVudDogdGV4dCxcclxuICAgICAgfSxcclxuICAgIH0sIFt0aXRsZVRleHQsIHN1YlRpdGxlVGV4dCwgdGV4dF0pO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbdGl0bGVUZXh0LCBzdWJUaXRsZVRleHQsIHRleHRdKTsgLy8gdXNlQ2FsbGJhY2vslYjsl5DshJwg7JO0IHN0YXRl64qUIOyXrOq4sOyXkCDrrLTsobDqsbQg64Sj7Ja07KO87Ja07JW8IO2VnOuLpCBcclxuXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAvLyAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUaXRsZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGl0bGVUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU3ViVGl0bGVUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFN1YlRpdGxlVGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5RdWlsbCBTYW1wbGU8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Lyog6rSA66Co65CcIOumrOyGjOyKpCDroZzrk5wgKENTU+uKlCBfYXBwLmpz7JeQ7IScIGdsb2JhbCBDU1ProZwg66Gc65Oc7ZWY64qUIO2OuOydtCDsoovsnYQg6rGwIOqwmeuLpC4pKi99XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2hpZ2hsaWdodGpzL2Nkbi1yZWxlYXNlQDEwLjcuMi9idWlsZC9oaWdobGlnaHQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvaGlnaGxpZ2h0anMvY2RuLXJlbGVhc2VAMTAuNy4yL2J1aWxkL3N0eWxlcy9kZWZhdWx0Lm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLnNub3cuY3NzXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFF1aWxsIFNhbXBsZVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezUwfSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsoIHslrTso7zshLjsmpRcIiB2YWx1ZT17dGl0bGVUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZVRleHR9IHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIG1heExlbmd0aD17MTAwfSBwbGFjZWhvbGRlcj1cIuyGjOygnOuqqeydhCDsoIHslrTso7zshLjsmpRcIiB2YWx1ZT17c3ViVGl0bGVUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VTdWJUaXRsZVRleHR9IHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwJScsIG1hcmdpblRvcDogJzQwcHgnIH19PlxyXG4gICAgICAgICAgPFF1aWxsRWRpdG9yXHJcbiAgICAgICAgICAgIGJvZHk9e3RleHR9XHJcbiAgICAgICAgICAgIGhhbmRsZVF1aWxsQ2hhbmdlPXtzZXRUZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwJScgfX0+XHJcbiAgICAgICAgICA8cD50ZXh0IHN0YXRlIOuvuOumrOuztOq4sDwvcD5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17aXNBZGRpbmdQb3N0fT7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBhZGRQb3N0RXJyb3JSZWFzb246ICcnLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOyLpO2MqCDsgqzsnKBcclxuICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7KSRXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOyEseqztVxyXG4gICAgaGFzaFRhZ3M6IFtdLFxyXG4gICAgYXJ0aWNsZTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0hBU0hUQUdTX1JFUVVFU1QgPSAnTE9BRF9BTExfSEFTSFRBR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTID0gJ0xPQURfQUxMX0hBU0hUQUdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfSEFTSFRBR1NfRkFJTFVSRSA9ICdMT0FEX0FMTF9IQVNIVEFHU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfUkVRVUVTVCA9ICdMT0FEX0FSVElDTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfU1VDQ0VTUyA9ICdMT0FEX0FSVElDTEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FSVElDTEVfRkFJTFVSRSA9ICdMT0FEX0FSVElDTEVfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGFkZFBvc3RFcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWluUG9zdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgYWRkUG9zdEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogW10sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpOyAvLyDrgrTqsIAgJ+yii+yVhOyalCcg64iE66W4IOqyjOyLnOusvOydtCDrqofrsojsp7gg7Y+s7Iqk7Yq47J247KeAIFxyXG4gICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgTGlrZXJzID0gW3sgaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9LCAuLi5wb3N0Lkxpa2Vyc107IC8vICfsoovslYTsmpQn64iE66W4IOyCrOuejOuqqeuhneyXkCDrgrQg7J2066aEIOy2lOqwgCBcclxuICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSB7IC4uLnBvc3QsIExpa2VycyB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBMaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpOyAvLyAn7KKL7JWE7JqUJ+uIhOuluCDsgqzrnozrqqnroZ3sl5DshJwg64K0IOydtOumhCDrubzquLAgKD3tlYTthLDrp4EpIFxyXG4gICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgTGlrZXJzIH07XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfSEFTSFRBR1NfUkVRVUVTVDoge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGhhc2hUYWdzOiBbXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9IQVNIVEFHU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaGFzaFRhZ3M6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQUxMX0hBU0hUQUdTX0ZBSUxVUkU6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQVJUSUNMRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYXJ0aWNsZTogW10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BUlRJQ0xFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhcnRpY2xlOiBbYWN0aW9uLmRhdGFdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQVJUSUNMRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var _components_QuillEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QuillEditor */ "./components/QuillEditor.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\YOUNG\\Documents\\GitHub\\ls-tech\\front\\pages\\write.js";




function Write() {
  const {
    0: body,
    1: setBody
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''); // Quill 에디터의 innerHTML을 담는 state

  const {
    0: mountBody,
    1: setMountBody
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false); // 리렌더링 용도 state

  /* 외부에서 body의 수정이 일어난 경우 body에 자동으로 적용되지 않습니다!
     이 함수를 호출했을 때 컴포넌트 내의 useEffect가 실행되어 body의 수정 사항이 적용됩니다.*/

  function rerenderBody() {
    setMountBody(mb => !mb);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Quill Sample"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "//cdn.quilljs.com/1.3.6/quill.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "//cdn.quilljs.com/1.3.6/quill.snow.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: "Quill Sample"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: '80%',
        marginTop: '40px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_QuillEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
        body: body,
        handleQuillChange: setBody,
        mountBody: mountBody
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: '80%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "body state \uBBF8\uB9AC\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this), body]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => {
          setBody(b => b + '<p>수정</p>');
        },
        children: "body \uC218\uC815 \uBC1C\uC0DD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: rerenderBody,
        children: "body \uC218\uC815 \uC0AC\uD56D \uC801\uC6A9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWlsbEVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93cml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUXVpbGxFZGl0b3IiLCJib2R5IiwiaGFuZGxlUXVpbGxDaGFuZ2UiLCJtb3VudEJvZHkiLCJxdWlsbEVsZW1lbnQiLCJ1c2VSZWYiLCJxdWlsbEluc3RhbmNlIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJ1c2VFZmZlY3QiLCJxdWlsbCIsImN1cnJlbnQiLCJyb290IiwiaW5uZXJIVE1MIiwid2luZG93IiwiUXVpbGwiLCJ0b29sYmFyT3B0aW9ucyIsImNvbnRhaW5lciIsIm1vZHVsZXMiLCJoaXN0b3J5IiwiZGVsYXkiLCJtYXhTdGFjayIsInVzZXJPbmx5Iiwic3ludGF4IiwidG9vbGJhciIsInBsYWNlaG9sZGVyIiwidGhlbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbiIsInByZXZJc0Vycm9yIiwiV3JpdGUiLCJzZXRCb2R5Iiwic2V0TW91bnRCb2R5IiwicmVyZW5kZXJCb2R5IiwibWIiLCJzdHlsZXMiLCJ0aXRsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiYiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7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RSxLQUFUO0FBQWdCQyxpQkFBUyxFQUFFO0FBQTNCLE9BQVo7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUNFLFlBQUksRUFBRXhDLElBRFI7QUFFRSx5QkFBaUIsRUFBRWlDLE9BRnJCO0FBR0UsaUJBQVMsRUFBRS9CO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUF5QkU7QUFBSyxXQUFLLEVBQUU7QUFBRXFDLGFBQUssRUFBRTtBQUFULE9BQVo7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUd2QyxJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRixlQTZCRTtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFLE1BQU07QUFBRWlDLGlCQUFPLENBQUVRLENBQUQsSUFBUUEsQ0FBQyxHQUFHLFdBQWIsQ0FBUDtBQUFtQyxTQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUSxlQUFPLEVBQUVOLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NELEM7Ozs7Ozs7Ozs7O0FDcERIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpbGxFZGl0b3IoeyBib2R5LCBoYW5kbGVRdWlsbENoYW5nZSwgbW91bnRCb2R5IH0pIHtcclxuICAgIGNvbnN0IHF1aWxsRWxlbWVudCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgcXVpbGxJbnN0YW5jZSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIHRydWXsnbgg7IOB7YOc7JeQ7IScIHJlcmVuZGVyQm9keeulvCDthrXtlbQgYm9keSDsoIHsmqnsi5wgUXVpbGwg7LSI6riw7ZmUIOyXhuydtFxyXG4gICAgICAgICAgICAgICBpbm5lckhUTUzrp4wgYm9keeuhnCDrsJTqv4nri4jri6QuIOydtCDsobDqsbTsnbQg7JeG7J2EIOyLnCDtiLTrsJTqsIAg7KSR67O165CY7Ja0IOyXrOufrCDqsJwg64KY7YOA64KY6rKMXHJcbiAgICAgICAgICAgICAgIOuQqeuLiOuLpC4gKi9cclxuICAgICAgICAgICAgY29uc3QgcXVpbGwgPSBxdWlsbEluc3RhbmNlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVpbGxFbGVtZW50LmN1cnJlbnQgJiYgd2luZG93LlF1aWxsKSB7XHJcbiAgICAgICAgICAgIC8qIGlzTG9hZGVk6rCAIGZhbHNl7J28IOuVjOuKlCBRdWlsbOydhCDstIjquLDtmZTtlanri4jri6QuICovXHJcblxyXG4gICAgICAgICAgICAvKiBRdWlsbCDsmLXshZjsnYQg7JuQ7ZWY64qUIOuMgOuhnCDsiJjsoJXtlZjshLjsmpQuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sICAgIC8vIGN1c3RvbSBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IDEgfSwgeyAnaGVhZGVyJzogMiB9XSwgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCd9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdpbmRlbnQnOiAnLTEnfSwgeyAnaW5kZW50JzogJysxJyB9XSwgICAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnbGluaycsICdjb2RlLWJsb2NrJywgJ2Zvcm11bGEnLCAnaW1hZ2UnLCAndmlkZW8nXSAvLyBtZWRpYVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsSW5zdGFuY2UuY3VycmVudCA9IG5ldyB3aW5kb3cuUXVpbGwocXVpbGxFbGVtZW50LmN1cnJlbnQsIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5IDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3RhY2s6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9ubHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bnRheCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhciA6IHRvb2xiYXJPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi67O466y4IOyeheugpVwiLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUgOiAnc25vdydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWlsbCA9IHF1aWxsSW5zdGFuY2UuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3Quc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g7LSI6riwIGJvZHkgc3RhdGUg7KCB7JqpXHJcbiAgICAgICAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gYm9keTtcclxuXHJcbiAgICAgICAgICAgIC8qIHF1aWxs7JeQ7IScIHRleHQtY2hhbmdlIOydtOuypO2KuCDrsJzsg53si5zsl5Agc2V0Qm9keShpbm5lckhUTUwp7J2EIO2Gte2VtCBib2R566W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgYm9keeqwgCDsl4XrjbDsnbTtirjrkJjslrTrj4QgdXNlRWZmZWN0IOuwnOyDnSDsobDqsbQg7J247J6QKFtpc0Vycm9yLCBtb3VudEJvZHldKeyXkCBib2R56rCAIOyXhuycvOuvgOuhnFxyXG4gICAgICAgICAgICAgICBRdWlsbEVkaXRvciDsu7Ttj6zrhIztirjripQg64uk7IucIOugjOuNlOungeuQmOyngCDslYrsirXri4jri6QuIOydtOuKlCDsnoXroKUg7KSRIOy7pOyEnOqwgCDrp6gg7JWe7Jy866GcIOydtOuPme2VmOuKlFxyXG4gICAgICAgICAgICAgICDrrLjsoJzrpbwg67Cp7KeA7ZWp64uI64ukLiDrjIDsi6Ag7Jm467aA7JeQ7IScIGJvZHnqsIAg7IiY7KCV65CY7Ja064+EIHJlcmVuZGVyQm9keeqwgCDtmLjstpzrkJjsp4Ag7JWK7Jy866m0IOuzgOqyveuQnFxyXG4gICAgICAgICAgICAgICBib2R56rCAIOyggeyaqeuQmOyngCDslYrsirXri4jri6QuICovXHJcbiAgICAgICAgICAgIHF1aWxsLm9uKFwidGV4dC1jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUXVpbGxDaGFuZ2UocXVpbGwucm9vdC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qIHF1aWxsLm1pbi5qc+qwgCDroZzrk5zrkJjslrQg7J6I7KeAIOyViuyVhCB3aW5kb3cuUXVpbGzsnbQgdW5kZWZpbmVk7J2066m0IGlzRXJyb3LqsIBcclxuICAgICAgICAgICAgICAg6rOE7IaNIOuzgOqyveuQmOuptOyEnCDsnqzsi5zrj4Ttlanri4jri6QuICovXHJcbiAgICAgICAgICAgIHNldElzRXJyb3IoKHByZXZJc0Vycm9yKSA9PiAoIXByZXZJc0Vycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRXJyb3IsIG1vdW50Qm9keV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtxdWlsbEVsZW1lbnR9PjwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUXVpbGxFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9RdWlsbEVkaXRvcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZSgpIHtcclxuXHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBRdWlsbCDsl5DrlJTthLDsnZggaW5uZXJIVE1M7J2EIOuLtOuKlCBzdGF0ZVxyXG4gICAgY29uc3QgW21vdW50Qm9keSwgc2V0TW91bnRCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g66as66CM642U66eBIOyaqeuPhCBzdGF0ZVxyXG4gIFxyXG4gICAgLyog7Jm467aA7JeQ7IScIGJvZHnsnZgg7IiY7KCV7J20IOydvOyWtOuCnCDqsr3smrAgYm9keeyXkCDsnpDrj5nsnLzroZwg7KCB7Jqp65CY7KeAIOyViuyKteuLiOuLpCFcclxuICAgICAgIOydtCDtlajsiJjrpbwg7Zi47Lac7ZaI7J2EIOuVjCDsu7Ttj6zrhIztirgg64K07J2YIHVzZUVmZmVjdOqwgCDsi6TtlonrkJjslrQgYm9keeydmCDsiJjsoJUg7IKs7ZWt7J20IOyggeyaqeuQqeuLiOuLpC4qL1xyXG4gICAgZnVuY3Rpb24gcmVyZW5kZXJCb2R5KCkge1xyXG4gICAgICBzZXRNb3VudEJvZHkobWIgPT4gIW1iKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5RdWlsbCBTYW1wbGU8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Lyog6rSA66Co65CcIOumrOyGjOyKpCDroZzrk5wgKENTU+uKlCBfYXBwLmpz7JeQ7IScIGdsb2JhbCBDU1ProZwg66Gc65Oc7ZWY64qUIO2OuOydtCDsoovsnYQg6rGwIOqwmeuLpC4pKi99XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9rYXRleEAwLjEzLjMvZGlzdC9rYXRleC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2hpZ2hsaWdodGpzL2Nkbi1yZWxlYXNlQDEwLjcuMi9idWlsZC9oaWdobGlnaHQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvaGlnaGxpZ2h0anMvY2RuLXJlbGVhc2VAMTAuNy4yL2J1aWxkL3N0eWxlcy9kZWZhdWx0Lm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLnF1aWxsanMuY29tLzEuMy42L3F1aWxsLnNub3cuY3NzXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgUXVpbGwgU2FtcGxlXHJcbiAgICAgICAgPC9oMT5cclxuICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODAlJywgbWFyZ2luVG9wOiAnNDBweCcgfX0+XHJcbiAgICAgICAgICA8UXVpbGxFZGl0b3JcclxuICAgICAgICAgICAgYm9keT17Ym9keX1cclxuICAgICAgICAgICAgaGFuZGxlUXVpbGxDaGFuZ2U9e3NldEJvZHl9XHJcbiAgICAgICAgICAgIG1vdW50Qm9keT17bW91bnRCb2R5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODAlJyB9fT5cclxuICAgICAgICAgIDxwPmJvZHkgc3RhdGUg66+466as67O06riwPC9wPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBzZXRCb2R5KChiKSA9PiAoYiArICc8cD7siJjsoJU8L3A+JykpIH19PmJvZHkg7IiY7KCVIOuwnOyDnTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXJlbmRlckJvZHl9PmJvZHkg7IiY7KCVIOyCrO2VrSDsoIHsmqk8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
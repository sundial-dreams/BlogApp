module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GQL/GraphQL.js":
/*!************************!*\
  !*** ./GQL/GraphQL.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


var developmentServerHost = "http://localhost:8769/graphql";
var productServerHost = "http://www.theaurora.cn:8769/graphql";
var graphqlClient = new apollo_boost__WEBPACK_IMPORTED_MODULE_0___default.a({
  uri: developmentServerHost,
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_1___default.a
});
/* harmony default export */ __webpack_exports__["default"] = (graphqlClient);

/***/ }),

/***/ "./GQL/Mutation.js":
/*!*************************!*\
  !*** ./GQL/Mutation.js ***!
  \*************************/
/*! exports provided: LOGIN, REGISTER, POST_ARTICLE, CREATE_COMMENT, LIKE_ARTICLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ARTICLE", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT", function() { return CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_ARTICLE", function() { return LIKE_ARTICLE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

var LOGIN = function LOGIN() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation Login($email: String!, $password: String!){\n login(email: $email, password: $password) {\n    err\n    message\n    response {\n      id\n      email\n      nickname\n      picture\n      position\n      company\n      description\n      text\n    }\n }\n}");
};
var REGISTER = function REGISTER() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateUser($nickname: String!, $password: String!, $email: String!){\n   createUser(input: {\n     nickname: $nickname\n     password: $password\n     email: $email\n   }){\n     err\n     message\n     response {\n      id\n      email\n      nickname\n      picture\n     }\n   }\n}");
};
var POST_ARTICLE = function POST_ARTICLE() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateArticle($input: InputArticle!){\n     createArticle(input: $input){\n          err\n          message\n          response {\n            id\n          }\n       }\n}");
};
var CREATE_COMMENT = function CREATE_COMMENT() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateComment($input: InputComment!){\n  createComment(input: $input){\n    err\n    message\n  }\n}");
};
var LIKE_ARTICLE = function LIKE_ARTICLE() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation ArticleLike($id: ID!){\n  articleLike(id: $id){\n    err\n    message\n  }\n}");
};

/***/ }),

/***/ "./GQL/Query.js":
/*!**********************!*\
  !*** ./GQL/Query.js ***!
  \**********************/
/*! exports provided: QUERY_ARTICLE_BY_CLASSIFY, QUERY_ARTICLE_AND_COMMENT_BY_ID, QUERY_USER_BY_ID, QUERY_CLASSIFY, QUERY_LABEL_BY_CLASSIFY, QUERY_CLASSIFY_AND_LABEL, QUERY_COMMENT_BY_ArticleId, QUERY_REPLY_BY_COMMENT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_BY_CLASSIFY", function() { return QUERY_ARTICLE_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_AND_COMMENT_BY_ID", function() { return QUERY_ARTICLE_AND_COMMENT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_USER_BY_ID", function() { return QUERY_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY", function() { return QUERY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_LABEL_BY_CLASSIFY", function() { return QUERY_LABEL_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY_AND_LABEL", function() { return QUERY_CLASSIFY_AND_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_COMMENT_BY_ArticleId", function() { return QUERY_COMMENT_BY_ArticleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_REPLY_BY_COMMENT_ID", function() { return QUERY_REPLY_BY_COMMENT_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

var QUERY_ARTICLE_BY_CLASSIFY = function QUERY_ARTICLE_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery Article($classify: String!) {\n          article(classify: $classify) {\n              id\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n     }\n}");
};
var QUERY_ARTICLE_AND_COMMENT_BY_ID = function QUERY_ARTICLE_AND_COMMENT_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ArticleAndCommentById($id: ID!) {\n          articleById(id: $id) {\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n              position\n              company\n              description\n          }\n          commentByArticleId(id: $id){\n              userId\n              text\n              nickname\n              articleId\n              time\n              id\n              picture\n          }\n          \n}");
};
var QUERY_USER_BY_ID = function QUERY_USER_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery User($id: ID!) {\n    user(id: $id){\n      id\n      email\n      nickname\n      picture\n      position\n      company\n      description\n      text\n    }\n}");
};
var QUERY_CLASSIFY = function QUERY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery{\n    classify{\n      name\n      description\n      picture\n    }\n}");
};
var QUERY_LABEL_BY_CLASSIFY = function QUERY_LABEL_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery  LabelByClassify($classify: String!) {\n          labelByClassify(classify: $classify){\n            id\n            name\n            classify\n            description\n            picture\n      } \n}");
};
var QUERY_CLASSIFY_AND_LABEL = function QUERY_CLASSIFY_AND_LABEL() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery labelByClassify($defaultClassify: String!) {\n      labelByClassify(classify: $defaultClassify){\n        id\n        name\n      } \n      classify{\n         name\n      }\n}");
};
var QUERY_COMMENT_BY_ArticleId = function QUERY_COMMENT_BY_ArticleId() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery CommentByArticleId($id: ID){\n  commentByArticleId(id: $id){\n    userId\n    text\n    nickname\n    articleId\n    time\n    id\n    picture\n  }\n}");
};
var QUERY_REPLY_BY_COMMENT_ID = function QUERY_REPLY_BY_COMMENT_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ReplyByComment{\n  replyByComment(id: $id) {\n    id\n    userId\n    commentId\n    text\n    time\n  }\n}");
};

/***/ }),

/***/ "./components/View/article.js":
/*!************************************!*\
  !*** ./components/View/article.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Article; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/component/component */ "./components/component/component.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./components/View/comment.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\article.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Article =
/*#__PURE__*/
function (_Component) {
  _inherits(Article, _Component);

  function Article(props) {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, _getPrototypeOf(Article).call(this, props));
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          articleState = _this$props.articleState,
          comments = _this$props.comments;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.article,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/editor.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["article-title"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, articleState.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["article-info"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_component_component__WEBPACK_IMPORTED_MODULE_2__["UserPicture"], {
        picture: articleState.picture,
        size: 60,
        url: {
          pathname: "/user",
          query: {
            id: articleState.userId
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, articleState.nickname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u9605\u8BFB", " " + articleState.readNumber), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u53D1\u5E03\u4E8E ", " " + new Date(parseInt(articleState.publishTime)).toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.more,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "More"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["article-body"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: articleState.text
        },
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        comments: comments,
        articleId: articleState.articleId,
        userId: articleState.userId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Article.propTypes = {
  articleState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  comments: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array
};

/***/ }),

/***/ "./components/View/comment.js":
/*!************************************!*\
  !*** ./components/View/comment.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/component/component */ "./components/component/component.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var GQL_Mutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! GQL/Mutation */ "./GQL/Mutation.js");
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\comment.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var ReplyItem = function ReplyItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["user-avatar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_component_component__WEBPACK_IMPORTED_MODULE_2__["UserPicture"], {
    picture: "/static/img/test-head.jpg",
    size: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "dpf")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-body"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "te"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "2018-01-04")));
};

ReplyItem.props = {};

var ReplyComment =
/*#__PURE__*/
function (_Component) {
  _inherits(ReplyComment, _Component);

  function ReplyComment(props) {
    var _this;

    _classCallCheck(this, ReplyComment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReplyComment).call(this, props));
    _this.state = {
      active: false,
      text: ""
    };
    return _this;
  }

  _createClass(ReplyComment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-comment"], this.state.active && _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-active"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              active: !state.active
            };
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u56DE\u590D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-textarea"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "write reply...",
        value: this.state.text,
        onChange: function onChange(e) {
          return _this2.setState({
            text: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u53D1\u8868")));
    }
  }]);

  return ReplyComment;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var CommentItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(CommentItem, _Component2);

  function CommentItem(props) {
    var _this3;

    _classCallCheck(this, CommentItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CommentItem).call(this, props));
    _this3.state = {
      reply: []
    };
    return _this3;
  }

  _createClass(CommentItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      GQL_GraphQL__WEBPACK_IMPORTED_MODULE_8__["default"].query({
        query: Object(GQL_Query__WEBPACK_IMPORTED_MODULE_7__["QUERY_REPLY_BY_COMMENT_ID"])(),
        variables: {
          id: this.props.comment.id
        }
      }).then(function (_ref) {
        var replyByComment = _ref.data.replyByComment;
        return replyByComment;
      }).then(function (reply) {
        _this4.setState({
          reply: reply
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          comment = _this$props.comment,
          userId = _this$props.userId;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-item"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-head"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_component_component__WEBPACK_IMPORTED_MODULE_2__["UserPicture"], {
        picture: comment.picture,
        size: 50,
        url: {
          pathname: "/user",
          id: userId
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, comment.nickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, new Date(parseInt(comment.time)).toDateString())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-body"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, comment.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.state.reply.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReplyItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-reply"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReplyComment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })));
    }
  }]);

  return CommentItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CommentItem.propTypes = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

var WriteComment =
/*#__PURE__*/
function (_Component3) {
  _inherits(WriteComment, _Component3);

  function WriteComment(props) {
    var _this5;

    _classCallCheck(this, WriteComment);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(WriteComment).call(this, props));
    _this5.state = {
      active: false,
      text: ""
    };
    _this5.handleChange = _this5.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this5)));
    _this5.handlePost = _this5.handlePost.bind(_assertThisInitialized(_assertThisInitialized(_this5)));
    return _this5;
  }

  _createClass(WriteComment, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: "handlePost",
    value: function handlePost() {
      var handlePost = this.props.handlePost;
      this.setState({
        active: false,
        text: ""
      });
      handlePost(this.state.text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["write-comment"], this.state.active && _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["write-comment-active"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this6.setState(function (state) {
            return {
              active: !state.active
            };
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "\u5199\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["input-comment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "write some comment...",
        onChange: this.handleChange,
        value: this.state.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["post-comment"],
        onClick: this.handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "\u53D1\u8868")));
    }
  }]);

  return WriteComment;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WriteComment.propTypes = {
  handlePost: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var Comment =
/*#__PURE__*/
function (_Component4) {
  _inherits(Comment, _Component4);

  function Comment(props) {
    var _this7;

    _classCallCheck(this, Comment);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Comment).call(this, props));
    _this7.state = {
      comments: []
    };
    _this7.handlePost = _this7.handlePost.bind(_assertThisInitialized(_assertThisInitialized(_this7)));
    return _this7;
  }

  _createClass(Comment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        comments: this.props.comments.sort(function (a, b) {
          return parseInt(b.time) - parseInt(a.time);
        })
      });
    }
  }, {
    key: "handlePost",
    value: function handlePost(commentText) {
      var _this8 = this;

      var _this$props$userState = this.props.userState,
          picture = _this$props$userState.picture,
          nickname = _this$props$userState.nickname,
          id = _this$props$userState.id;
      var articleId = this.props.articleId;
      var now = Date.now().toString();
      GQL_GraphQL__WEBPACK_IMPORTED_MODULE_8__["default"].mutate({
        mutation: Object(GQL_Mutation__WEBPACK_IMPORTED_MODULE_6__["CREATE_COMMENT"])(),
        variables: {
          input: {
            time: now,
            text: commentText,
            userId: id,
            articleId: articleId
          }
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      }).then(function (_ref3) {
        var err = _ref3.err,
            message = _ref3.message;
        console.log(err, message);
        if (err) return "err";

        _this8.setState(function (state) {
          return {
            comments: [].concat(_toConsumableArray(state.comments), [{
              picture: picture,
              nickname: nickname,
              time: now,
              text: commentText
            }]).sort(function (a, b) {
              return parseInt(b.time) - parseInt(a.time);
            })
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var isLogin = this.props.userState.isLogin;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["article-comment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Comment", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WriteComment, {
        handlePost: this.handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }) : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, this.state.comments.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentItem, {
          comment: v,
          userId: _this9.props.userId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }));
      })));
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Comment.propTypes = {
  comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  userState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  articleId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return {
    userState: state.user
  };
})(Comment));

/***/ }),

/***/ "./components/View/loading.js":
/*!************************************!*\
  !*** ./components/View/loading.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\loading.js";



function ArticleLoading(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "<"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "blog ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "/>"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "LOADING"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ArticleLoading);

/***/ }),

/***/ "./components/View/style.less":
/*!************************************!*\
  !*** ./components/View/style.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"view-blog": "view-blog___1CBcVwKtpe",
	"left": "left___WK3pLMln2q",
	"middle": "middle___oSg5grs0Tt",
	"right": "right___2g5fuDv_eJ",
	"article": "article___20JrUIlmUc",
	"article-title": "article-title___17GexP3-p2",
	"article-info": "article-info___3fHB_mEerm",
	"more": "more___2LThvHTZ0f",
	"article-body": "article-body___38oXPlyWdL",
	"text": "text___1CN3hLf1U7",
	"user-info": "user-info___2NlUWHrEJs",
	"active": "active___2J0EjQuZdh",
	"author-info": "author-info___3kZKRx5xhD",
	"about-author": "about-author___1fYorBBA-p",
	"tool-box": "tool-box___241WV3hIdf",
	"share": "share___WaZFVASEkp",
	"article-comment": "article-comment___3Z_UIGUuhg",
	"comment-item": "comment-item___3eb1wvQrpo",
	"comment-head": "comment-head___2hlCy2pJLl",
	"comment-body": "comment-body___3v5TTQUxAe",
	"reply": "reply___15yqvzrdPs",
	"write-comment": "write-comment___2oaZ3m2Fy9",
	"write-comment-active": "write-comment-active___2NVOCuf48R",
	"input-comment": "input-comment___1U_xj6koRL",
	"loading": "loading___4c0vbKb1y9",
	"main": "main___3IICCiDB4S",
	"loading-animate": "loading-animate___2yTUM45S2e",
	"comment-reply": "comment-reply___3fYukz9Zer",
	"reply-item": "reply-item___32SgMC83DM",
	"user-avatar": "user-avatar___2Q60qxi2dk",
	"reply-body": "reply-body___1paOZsBvlR",
	"reply-comment": "reply-comment___R1kA6j-Lni",
	"reply-active": "reply-active___15H948kdzV",
	"reply-textarea": "reply-textarea___2sZZl-G0Ce",
	"blog-animate": "blog-animate___30WOZfapKw"
};

/***/ }),

/***/ "./components/View/toolBox.js":
/*!************************************!*\
  !*** ./components/View/toolBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app/button/articleButton */ "./components/app/button/articleButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var GQL_Mutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! GQL/Mutation */ "./GQL/Mutation.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\toolBox.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ToolBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ToolBox, _Component);

  function ToolBox(props) {
    var _this;

    _classCallCheck(this, ToolBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolBox).call(this, props));
    _this.handleLike = _this.handleLike.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isLike: false,
      likeNumber: 0
    };
    return _this;
  }

  _createClass(ToolBox, [{
    key: "handleLike",
    value: function handleLike() {
      var _this2 = this;

      GQL_GraphQL__WEBPACK_IMPORTED_MODULE_5__["default"].mutate({
        mutation: Object(GQL_Mutation__WEBPACK_IMPORTED_MODULE_4__["LIKE_ARTICLE"])(),
        variables: {
          id: this.props.articleId
        }
      }).then(function () {
        _this2.setState({
          isLike: true,
          likeNumber: _this2.state.likeNumber + 1
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        likeNumber: this.props.likeNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          isLogin = _this$props.userState.isLogin,
          collectionNumber = _this$props.collectionNumber,
          shareNumber = _this$props.shareNumber,
          commentNumber = _this$props.commentNumber;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["tool-box"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: this.state.likeNumber,
        disabled: this.state.isLike,
        icon: "fa fa-thumbs-up",
        onClick: this.handleLike,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: collectionNumber,
        disabled: false,
        icon: "fa fa-star",
        onClick: function onClick() {
          return _this3.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: commentNumber,
        disabled: false,
        icon: "fa fa-comment-alt",
        onClick: function onClick() {
          return _this3.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.share,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "SHARE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: shareNumber,
        disabled: false,
        icon: "fa fa-share-square",
        onClick: function onClick() {
          return _this3.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style4",
        noTip: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: this.state.number,
        disabled: false,
        icon: "fa fa-question",
        onClick: function onClick() {
          return _this3.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style5",
        noTip: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))) : "");
    }
  }]);

  return ToolBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ToolBox.propTypes = {
  userState: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  likeNumber: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  commentNumber: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  collectionNumber: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  shareNumber: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  articleId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {
    userState: state.user
  };
})(ToolBox));

/***/ }),

/***/ "./components/View/userInfo.js":
/*!*************************************!*\
  !*** ./components/View/userInfo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/component/component */ "./components/component/component.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\userInfo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var UserInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(UserInfo, _Component);

  function UserInfo(props) {
    var _this;

    _classCallCheck(this, UserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserInfo).call(this, props));
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var userState = this.props.userState;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["user-info"], this.state.active && _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.active),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["about-author"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              active: !state.active
            };
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "About Author")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["author-info"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_component_component__WEBPACK_IMPORTED_MODULE_2__["UserPicture"], {
        picture: userState.picture,
        url: {
          pathname: "/user",
          query: {
            id: userState.userId
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, userState.nickname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "email:"), " ", userState.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "description:"), " ", userState.description ? userState.description : "no description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, " position:"), " ", userState.position ? userState.position : "none"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, " company:"), " ", " ", userState.company ? userState.company : "none")));
    }
  }]);

  return UserInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


UserInfo.propTypes = {
  userState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ }),

/***/ "./components/View/viewArticle.js":
/*!****************************************!*\
  !*** ./components/View/viewArticle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_app_toolButton_toolButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app/toolButton/toolButton */ "./components/app/toolButton/toolButton.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article */ "./components/View/article.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userInfo */ "./components/View/userInfo.js");
/* harmony import */ var _toolBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolBox */ "./components/View/toolBox.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading */ "./components/View/loading.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\View\\viewArticle.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var ViewBlog =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewBlog, _Component);

  function ViewBlog(props) {
    _classCallCheck(this, ViewBlog);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewBlog).call(this, props));
  }

  _createClass(ViewBlog, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["view-blog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["Query"], {
        query: Object(GQL_Query__WEBPACK_IMPORTED_MODULE_5__["QUERY_ARTICLE_AND_COMMENT_BY_ID"])(),
        variables: {
          id: this.props.router.query.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            err = _ref.err,
            _ref$data = _ref.data,
            articleById = _ref$data.articleById,
            commentByArticleId = _ref$data.commentByArticleId;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
        if (err) return "err";
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.left,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toolBox__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, articleById, {
          articleId: _this.props.router.query.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.middle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_article__WEBPACK_IMPORTED_MODULE_3__["default"], {
          articleState: Object.assign(articleById, {
            articleId: _this.props.router.query.id
          }),
          comments: commentByArticleId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.right,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
          userState: articleById,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_toolButton_toolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }));
      }));
    }
  }]);

  return ViewBlog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ViewBlog));

/***/ }),

/***/ "./components/app/button/articleButton.js":
/*!************************************************!*\
  !*** ./components/app/button/articleButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/app/button/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\app\\button\\articleButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ArticleButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ArticleButton, _Component);

  function ArticleButton(props) {
    _classCallCheck(this, ArticleButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArticleButton).call(this, props));
  }

  _createClass(ArticleButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentNumber = _this$props.currentNumber,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          style = _this$props.style,
          onClick = _this$props.onClick,
          noTip = _this$props.noTip;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["article-button"], _style_less__WEBPACK_IMPORTED_MODULE_1___default.a[style], disabled && _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.active),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: onClick,
        disabled: disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), !noTip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, currentNumber) : "");
    }
  }]);

  return ArticleButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ArticleButton.propTypes = {
  currentNumber: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  noTip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./components/app/button/style.less":
/*!******************************************!*\
  !*** ./components/app/button/style.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"star-button": "star-button___1dPpzwNJAb",
	"active": "active___1EqSO1jIkX",
	"pay-button": "pay-button___3Yhpl8RRSj",
	"button-wrapper": "button-wrapper___3kr5fbvsc7",
	"pay-div-pay": "pay-div-pay___e9WowQ5rTy",
	"pay-div-process": "pay-div-process___3xKz5q0zCz",
	"pay-div-success": "pay-div-success___1QauDEEUil",
	"process": "process___1ASkN59vRA",
	"success": "success___3gyR-QmXzW",
	"article-button": "article-button___s_Jhy8Sdtv",
	"style2": "style2___26CJxW0DZQ",
	"style3": "style3___3neMM0VAUY",
	"style4": "style4___CQ-gUzpxvD",
	"style5": "style5___WhsHTxjZpw"
};

/***/ }),

/***/ "./components/app/toolButton/style.less":
/*!**********************************************!*\
  !*** ./components/app/toolButton/style.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tool-button": "tool-button___bJ89p9ANSJ",
	"active": "active___fJRb8r7Ize",
	"main-button": "main-button___14rgV0Xuqu",
	"mixin": "mixin___20nYLFxk7j",
	"user-button": "user-button___1gRPxJ3ueX",
	"write-article-button": "write-article-button___1f8o4kdiF-",
	"other-button": "other-button___38o8G695yh"
};

/***/ }),

/***/ "./components/app/toolButton/toolButton.js":
/*!*************************************************!*\
  !*** ./components/app/toolButton/toolButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/app/toolButton/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/component/component */ "./components/component/component.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\app\\toolButton\\toolButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ToolButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ToolButton, _Component);

  function ToolButton(props) {
    var _this;

    _classCallCheck(this, ToolButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolButton).call(this, props));
    _this.state = {
      isPop: false
    };
    return _this;
  }

  _createClass(ToolButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$userState = this.props.userState,
          isLogin = _this$props$userState.isLogin,
          picture = _this$props$userState.picture,
          id = _this$props$userState.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["tool-button"], this.state.isPop && _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.active),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["main-button"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              isPop: !state.isPop
            };
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["user-button"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_component_component__WEBPACK_IMPORTED_MODULE_2__["UserPicture"], {
        picture: isLogin ? picture : "",
        size: 60,
        url: isLogin ? {
          pathname: "/user",
          query: {
            id: id
          }
        } : "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["write-article-button"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/editor");
        },
        disabled: !isLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pencil-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["other-button"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {},
        disabled: !isLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))));
    }
  }]);

  return ToolButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ToolButton.propTypes = {
  userState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return {
    userState: state.user
  };
})(ToolButton));

/***/ }),

/***/ "./components/component/component.js":
/*!*******************************************!*\
  !*** ./components/component/component.js ***!
  \*******************************************/
/*! exports provided: UserPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPicture", function() { return UserPicture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/component/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\component\\component.js";





var UserPicture = function UserPicture(props) {
  var isLogin = Boolean(props.picture);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_1___default.a["user-picture"], isLogin || _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["not-login"]),
    style: {
      width: "".concat(props.size, "px"),
      height: "".concat(props.size, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.picture,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : "未登录"));
};
UserPicture.defaultProps = {
  size: 60,
  url: "",
  picture: ""
};
UserPicture.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./components/component/style.less":
/*!*****************************************!*\
  !*** ./components/component/style.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"user-picture": "user-picture___3ZI2PcaH_w",
	"not-login": "not-login___3wIV_6c4D7"
};

/***/ }),

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewBlog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_View_viewArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/View/viewArticle */ "./components/View/viewArticle.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\pages\\view.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ViewBlog =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewBlog, _Component);

  function ViewBlog(props) {
    _classCallCheck(this, ViewBlog);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewBlog).call(this, props));
  }

  _createClass(ViewBlog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "__page",
        id: "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_View_viewArticle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    }
  }]);

  return ViewBlog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: mergeClassName, convertTime, validateEmail, validatePassword, validateNickname, setCookies, loadCookies, removeCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeClassName", function() { return mergeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTime", function() { return convertTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNickname", function() { return validateNickname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookies", function() { return setCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCookies", function() { return loadCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookies", function() { return removeCookies; });
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);

var mergeClassName = function mergeClassName() {
  for (var _len = arguments.length, className = new Array(_len), _key = 0; _key < _len; _key++) {
    className[_key] = arguments[_key];
  }

  return className.filter(function (v) {
    return v;
  }).join(" ");
};
function convertTime(longNumber) {
  var number = Number(longNumber);
  number = parseInt(number / 1000);

  if (number > 0 && number < 60) {
    return number + " sec";
  } else {
    number = parseInt(number / 60);

    if (number > 0 && number < 60) {
      return number + " min";
    } else {
      number = parseInt(number / 60);

      if (number > 0 && number < 24) {
        return number + " hour";
      } else {
        number = parseInt(number / 24);

        if (number > 0 && number < 30) {
          return number + " day";
        } else {
          number = parseInt(number / 30);

          if (number > 0 && number < 12) {
            return number + " mouth";
          } else {
            number = parseInt(number / 12);
            return number + " year";
          }
        }
      }
    }
  }
}
function validateEmail(email) {
  var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;

  if (!email) {
    return {
      err: true,
      message: "未输入邮箱"
    };
  }

  if (!reg.test(email)) {
    return {
      err: true,
      message: "邮箱格式错误"
    };
  }

  return {
    err: false
  };
}
function validatePassword(password) {
  var reg = /[A-Za-z0-9]{6,15}/;

  if (!password) {
    return {
      err: true,
      message: "未输入密码"
    };
  }

  if (!reg.test(password)) {
    return {
      err: true,
      message: "密码格式错误，请输入A~Z,a~z,0~9，且长度为6-15的密码"
    };
  }

  return {
    err: false
  };
}
function validateNickname(nickname) {
  var reg = /[a-zA-Z0-9\-_.]{5,10}/;

  if (!nickname) {
    return {
      err: true,
      message: "未输入昵称"
    };
  }

  if (!reg.test(nickname)) {
    return {
      err: true,
      message: "昵称格式错误，请输入a~z,A~Z,0~9,特殊字符_-.的昵称"
    };
  }

  return {
    err: false
  };
}
var setCookies = function setCookies(id) {
  var expires = new Date(Date.now());
  expires.setDate(expires.getDate() + 2);
  return react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.save("userId", id, {
    path: "/",
    maxAge: 3600 * 2
  });
};
var loadCookies = function loadCookies(key) {
  return react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.load(key);
};
var removeCookies = function removeCookies(key) {
  return react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
};

/***/ }),

/***/ 9:
/*!*****************************!*\
  !*** multi ./pages/view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/view.js */"./pages/view.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=view.js.map
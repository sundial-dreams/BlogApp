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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./GQL/Query.js":
/*!**********************!*\
  !*** ./GQL/Query.js ***!
  \**********************/
/*! exports provided: QUERY_ARTICLE_BY_CLASSIFY, getArticleByClassify, QUERY_ARTICLE_AND_COMMENT_BY_ID, getArtCommById, QUERY_USER_BY_ID, getUserById, QUERY_CLASSIFY, getAllClassify, QUERY_LABEL_BY_CLASSIFY, getLabelByClassify, QUERY_CLASSIFY_AND_LABEL, getClassifyLabel, QUERY_COMMENT_BY_ArticleId, getCommByArtId, QUERY_REPLY_BY_COMMENT_ID, getReplyByCommId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_BY_CLASSIFY", function() { return QUERY_ARTICLE_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleByClassify", function() { return getArticleByClassify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_AND_COMMENT_BY_ID", function() { return QUERY_ARTICLE_AND_COMMENT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtCommById", function() { return getArtCommById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_USER_BY_ID", function() { return QUERY_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY", function() { return QUERY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClassify", function() { return getAllClassify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_LABEL_BY_CLASSIFY", function() { return QUERY_LABEL_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelByClassify", function() { return getLabelByClassify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY_AND_LABEL", function() { return QUERY_CLASSIFY_AND_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassifyLabel", function() { return getClassifyLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_COMMENT_BY_ArticleId", function() { return QUERY_COMMENT_BY_ArticleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommByArtId", function() { return getCommByArtId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_REPLY_BY_COMMENT_ID", function() { return QUERY_REPLY_BY_COMMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplyByCommId", function() { return getReplyByCommId; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GraphQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphQL */ "./GQL/GraphQL.js");


var QUERY_ARTICLE_BY_CLASSIFY = function QUERY_ARTICLE_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery Article($classify: String!) {\n          article(classify: $classify) {\n              id\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n     }\n}");
};
var getArticleByClassify = function getArticleByClassify(classify) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_ARTICLE_BY_CLASSIFY(),
    variables: {
      classify: classify
    }
  }).then(function (_ref) {
    var article = _ref.data.article;
    return article;
  });
};
var QUERY_ARTICLE_AND_COMMENT_BY_ID = function QUERY_ARTICLE_AND_COMMENT_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ArticleAndCommentById($id: ID!) {\n          articleById(id: $id) {\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n              position\n              company\n              description\n          }\n          commentByArticleId(id: $id){\n              userId\n              text\n              nickname\n              articleId\n              time\n              id\n              picture\n          }\n          \n}");
};
var getArtCommById = function getArtCommById(id) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_ARTICLE_AND_COMMENT_BY_ID(),
    variables: {
      id: id
    }
  }).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  });
};
var QUERY_USER_BY_ID = function QUERY_USER_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery User($id: ID!) {\n    user(id: $id){\n      id\n      email\n      nickname\n      picture\n      position\n      company\n      description\n      text\n    }\n}");
};
var getUserById = function getUserById(id) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_USER_BY_ID(),
    variables: {
      id: id
    }
  }).then(function (_ref3) {
    var id = _ref3.data.id;
    return id;
  });
};
var QUERY_CLASSIFY = function QUERY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery{\n    classify{\n      name\n      description\n      picture\n    }\n}");
};
var getAllClassify = function getAllClassify() {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_CLASSIFY()
  }).then(function (_ref4) {
    var data = _ref4.data;
    return data;
  });
};
var QUERY_LABEL_BY_CLASSIFY = function QUERY_LABEL_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery  LabelByClassify($classify: String!) {\n          labelByClassify(classify: $classify){\n            id\n            name\n            classify\n            description\n            picture\n      } \n}");
};
var getLabelByClassify = function getLabelByClassify(classify) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_LABEL_BY_CLASSIFY(),
    variables: {
      classify: classify
    }
  }).then(function (_ref5) {
    var labelByClassify = _ref5.data.labelByClassify;
    return labelByClassify;
  });
};
var QUERY_CLASSIFY_AND_LABEL = function QUERY_CLASSIFY_AND_LABEL() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery labelByClassify($defaultClassify: String!) {\n      labelByClassify(classify: $defaultClassify){\n        id\n        name\n      } \n      classify{\n         name\n      }\n}");
};
var getClassifyLabel = function getClassifyLabel(defaultClassify) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_CLASSIFY_AND_LABEL(),
    variables: {
      defaultClassify: defaultClassify
    }
  }).then(function (_ref6) {
    var data = _ref6.data;
    return data;
  });
};
var QUERY_COMMENT_BY_ArticleId = function QUERY_COMMENT_BY_ArticleId() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery CommentByArticleId($id: ID){\n  commentByArticleId(id: $id){\n    userId\n    text\n    nickname\n    articleId\n    time\n    id\n    picture\n  }\n}");
};
var getCommByArtId = function getCommByArtId(id) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_COMMENT_BY_ArticleId(),
    variables: {
      id: id
    }
  }).then(function (_ref7) {
    var commentByArticleId = _ref7.data.commentByArticleId;
    return commentByArticleId;
  });
};
var QUERY_REPLY_BY_COMMENT_ID = function QUERY_REPLY_BY_COMMENT_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ReplyByComment{\n  replyByComment(id: $id) {\n    id\n    userId\n    commentId\n    text\n    time\n  }\n}");
};
var getReplyByCommId = function getReplyByCommId(id) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_REPLY_BY_COMMENT_ID(),
    variables: {
      id: id
    }
  }).then(function (_ref8) {
    var replyByComment = _ref8.data.replyByComment;
    return replyByComment;
  });
};

/***/ }),

/***/ "./actions/actions.js":
/*!****************************!*\
  !*** ./actions/actions.js ***!
  \****************************/
/*! exports provided: loginUser, registerUser, fetchUserResponse, fetchUser, indexPageSelectClassify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserResponse", function() { return fetchUserResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexPageSelectClassify", function() { return indexPageSelectClassify; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsTypes */ "./actions/actionsTypes.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var loginUser = function loginUser(userInfo) {
  return _objectSpread({
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER"],
    isLogin: true
  }, userInfo);
};
var registerUser = function registerUser(userInfo) {
  return _objectSpread({
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_USER"],
    isLogin: true
  }, userInfo);
};
var fetchUserResponse = function fetchUserResponse(userInfo) {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_SUCCESS"],
    response: _objectSpread({}, userInfo)
  };
};
var fetchUser = function fetchUser(id) {
  return function (dispatch) {
    dispatch({
      type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_REQUEST"],
      isFetching: true,
      err: false
    });
    return GQL_GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
      query: Object(GQL_Query__WEBPACK_IMPORTED_MODULE_2__["QUERY_USER_BY_ID"])(),
      variables: {
        id: id
      }
    }).then(function (data) {
      return data.data.user;
    }).then(function (user) {
      console.log(user, _typeof(user));
      dispatch(fetchUserResponse(user));
    }).catch(function (err) {
      return dispatch({
        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_FAILURE"],
        isFetching: false,
        err: true
      });
    });
  };
};
var indexPageSelectClassify = function indexPageSelectClassify(classify) {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["UI_INDEX_SELECT_CLASSIFY"],
    classify: classify
  };
};

/***/ }),

/***/ "./actions/actionsTypes.js":
/*!*********************************!*\
  !*** ./actions/actionsTypes.js ***!
  \*********************************/
/*! exports provided: LOGIN_USER, REGISTER_USER, FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS, UI_INDEX_SELECT_CLASSIFY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER", function() { return REGISTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_REQUEST", function() { return FETCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_FAILURE", function() { return FETCH_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_SUCCESS", function() { return FETCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_INDEX_SELECT_CLASSIFY", function() { return UI_INDEX_SELECT_CLASSIFY; });
var LOGIN_USER = "login_user";
var REGISTER_USER = "register_user";
var FETCH_USER_REQUEST = "fetch_user_request";
var FETCH_USER_FAILURE = "fetch_user_failure";
var FETCH_USER_SUCCESS = "fetch_user_success";
var UI_INDEX_SELECT_CLASSIFY = "ui_index_select_classify";

/***/ }),

/***/ "./components/Layout/layout.js":
/*!*************************************!*\
  !*** ./components/Layout/layout.js ***!
  \*************************************/
/*! exports provided: LeftRightLayout, LeftMiddleRightLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftRightLayout", function() { return LeftRightLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMiddleRightLayout", function() { return LeftMiddleRightLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.less */ "./components/Layout/layout.less");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\Layout\\layout.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var LeftRightLayout = function LeftRightLayout(props) {
  var _props$children = _slicedToArray(props.children, 2),
      leftElement = _props$children[0],
      rightElement = _props$children[1],
      leftWidth = props.leftWidth;

  if (!(leftElement && rightElement)) throw new Error("the component need two children");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a["left-right-layout"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a.left,
    style: {
      flex: "auto auto ".concat(leftWidth, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, leftElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, rightElement));
};
LeftRightLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  leftWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
var LeftMiddleRightLayout = function LeftMiddleRightLayout(props) {
  var _props$children2 = _slicedToArray(props.children, 3),
      leftElement = _props$children2[0],
      middleElement = _props$children2[1],
      rightElement = _props$children2[2],
      _props$flex = props.flex,
      flex = _props$flex === void 0 ? [1, 1, 1] : _props$flex;

  if (!(leftElement && middleElement && rightElement)) throw new Error("children not null");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a["left-middle-right-layout"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a.left,
    style: {
      flex: flex[0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, leftElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a.middle,
    style: {
      flex: flex[1]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, middleElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_less__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    style: {
      flex: flex[2]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, rightElement));
};
LeftMiddleRightLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  flex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./components/Layout/layout.less":
/*!***************************************!*\
  !*** ./components/Layout/layout.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"left-right-layout": "left-right-layout___cB8fWtL8HJ",
	"left": "left___28nrxF9EHo",
	"right": "right___Rog90yRl5g",
	"left-middle-right-layout": "left-middle-right-layout___38qjMSLQQN"
};

/***/ }),

/***/ "./components/app/mainMenu/mainMenu.js":
/*!*********************************************!*\
  !*** ./components/app/mainMenu/mainMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainMenu_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainMenu.less */ "./components/app/mainMenu/mainMenu.less");
/* harmony import */ var _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\app\\mainMenu\\mainMenu.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var MainMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(MainMenu, _Component);

  function MainMenu(props) {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, props));
    _this.state = {
      currentActive: 0
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MainMenu, [{
    key: "handleClick",
    value: function handleClick(current) {
      this.setState({
        currentActive: current
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var router = this.props.router;
      var currentActive = this.state.currentActive;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-logo"],
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
        alt: "none",
        src: "/static/img/logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: router.homeUrl,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-home"], currentActive === 0 && _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        onClick: function onClick() {
          return _this2.handleClick(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["left-effect"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-icons8-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: router.momentUrl,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-moment"], currentActive === 1 && _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        onClick: function onClick() {
          return _this2.handleClick(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["left-effect"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-icons8-binoculars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: router.searchUrl,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-search"], currentActive === 2 && _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        onClick: function onClick() {
          return _this2.handleClick(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["left-effect"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-icons8-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: router.resourceUrl,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-resource"], currentActive === 3 && _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        onClick: function onClick() {
          return _this2.handleClick(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["left-effect"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-icons8-opened-folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: router.messageUrl,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["nav-message"], currentActive === 4 && _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        onClick: function onClick() {
          return _this2.handleClick(4);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _mainMenu_less__WEBPACK_IMPORTED_MODULE_2___default.a["left-effect"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-icons8-speech-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


MainMenu.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf({
    homeUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    momentUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    searchUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    resourceUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    messageUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  })
};

/***/ }),

/***/ "./components/app/mainMenu/mainMenu.less":
/*!***********************************************!*\
  !*** ./components/app/mainMenu/mainMenu.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"nav": "nav___2HTmSzSsGp",
	"mixin-nav": "mixin-nav___2hpJTcbf9m",
	"mixin-transition": "mixin-transition___1wZh8-DGeg",
	"nav-logo": "nav-logo___1Cd416VB_S",
	"logo": "logo___3bwhIcxfiM",
	"nav-home": "nav-home___23Rb4frGpm",
	"left-effect": "left-effect___2HddtzZqAl",
	"active": "active___1EcEaDq8AM",
	"nav-moment": "nav-moment___DXN73SCUFE",
	"nav-search": "nav-search___26qwkFEYM3",
	"nav-resource": "nav-resource___3yOU9HSNOT",
	"nav-message": "nav-message___2GrjhlHHLX"
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_app_mainMenu_mainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/app/mainMenu/mainMenu */ "./components/app/mainMenu/mainMenu.js");
/* harmony import */ var components_Layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout/layout */ "./components/Layout/layout.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/store */ "./store/store.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var actions_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/actions */ "./actions/actions.js");

var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\pages\\_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var BlogApp =
/*#__PURE__*/
function (_App) {
  _inherits(BlogApp, _App);

  _createClass(BlogApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function BlogApp(props) {
    _classCallCheck(this, BlogApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogApp).call(this, props));
  }

  _createClass(BlogApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //载入cookies
      var userId = Object(utils_utils__WEBPACK_IMPORTED_MODULE_10__["loadCookies"])("userId");

      if (userId) {
        store_store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch(Object(actions_actions__WEBPACK_IMPORTED_MODULE_11__["fetchUser"])(userId));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
        client: GQL_GraphQL__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: store_store__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/reset.css",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/font-icon.css",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Layout_layout__WEBPACK_IMPORTED_MODULE_5__["LeftRightLayout"], {
        leftWidth: 60,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_app_mainMenu_mainMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
        router: {
          homeUrl: "/",
          momentUrl: "/moment",
          searchUrl: "/find",
          resourceUrl: "/ebooks",
          messageUrl: "/message"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))))));
    }
  }]);

  return BlogApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./reducer/initialState.js":
/*!*********************************!*\
  !*** ./reducer/initialState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  userState: {
    isLogin: false,
    nickname: "",
    email: "",
    id: "",
    picture: "",
    company: "",
    text: "",
    description: "",
    position: ""
  },
  indexPage: {
    classify: "前端"
  },
  messagePage: {}
});

/***/ }),

/***/ "./reducer/reducer.js":
/*!****************************!*\
  !*** ./reducer/reducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ "./reducer/initialState.js");
/* harmony import */ var actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/actionsTypes */ "./actions/actionsTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var userReducer = function userReducer() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_0__["default"].userState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER"]:
      {
        delete action.type;
        return _objectSpread({}, initialState, action);
      }

    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["REGISTER_USER"]:
      {
        delete action.type;
        console.log("register user", action);
        return _objectSpread({}, initialState, action);
      }

    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_REQUEST"]:
      {
        return _objectSpread({}, initialState, {
          isLogin: false
        });
      }

    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_FAILURE"]:
      {
        return _objectSpread({}, initialState, {
          isLogin: false
        });
      }

    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_SUCCESS"]:
      {
        return _objectSpread({}, initialState, action.response, {
          isLogin: true
        });
      }

    default:
      {
        return initialState;
      }
  }
};

var IndexPageReducer = function IndexPageReducer() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_0__["default"].indexPage;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["UI_INDEX_SELECT_CLASSIFY"]:
      {
        return _objectSpread({}, initialState, {
          classify: action.classify
        });
      }

    default:
      {
        return initialState;
      }
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    user: userReducer(state.userState, action),
    indexPage: IndexPageReducer(state.indexPage, action)
  };
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reducer_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducer/reducer */ "./reducer/reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));
/* harmony default export */ __webpack_exports__["default"] = (store);

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

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
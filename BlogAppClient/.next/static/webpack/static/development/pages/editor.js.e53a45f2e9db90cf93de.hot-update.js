webpackHotUpdate("static\\development\\pages\\editor.js",{

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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
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

/***/ "./components/RichEditor/postArticle.js":
/*!**********************************************!*\
  !*** ./components/RichEditor/postArticle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.less */ "./components/RichEditor/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\RichEditor\\postArticle.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var defaultClassify = "前端";

var PostMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(PostMenu, _Component);

  function PostMenu(props) {
    _classCallCheck(this, PostMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostMenu).call(this, props));
  }

  _createClass(PostMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isShowMenu = _this$props.isShowMenu,
          initState = _this$props.initState,
          handleSelectClassify = _this$props.handleSelectClassify,
          handleSelectLabel = _this$props.handleSelectLabel,
          currentClassify = _this$props.currentClassify,
          currentLabel = _this$props.currentLabel,
          handlePost = _this$props.handlePost;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_2___default.a["post-selection"], isShowMenu && _style_less__WEBPACK_IMPORTED_MODULE_2___default.a["show-menu"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u53D1\u5E03\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_2___default.a["classify"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, initState.classify ? initState.classify.map(function (_ref, i) {
        var name = _ref.name;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: currentClassify === i ? _style_less__WEBPACK_IMPORTED_MODULE_2___default.a.check : "",
          onClick: function onClick() {
            handleSelectClassify(name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, name);
      }) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u6807\u7B7E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_2___default.a["label"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, initState.label ? initState.label.map(function (_ref2, i) {
        var name = _ref2.name;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: currentLabel === i ? _style_less__WEBPACK_IMPORTED_MODULE_2___default.a["label-check"] : "",
          onClick: function onClick() {
            handleSelectLabel(name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      }) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u53D1\u5E03"));
    }
  }]);

  return PostMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PostMenu.propTypes = {
  isShowMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  initState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleSelectClassify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleSelectLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentClassify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  handlePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Post =
/*#__PURE__*/
function (_Component2) {
  _inherits(Post, _Component2);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props));
    _this.state = {
      isShowMenu: false,
      classify: [],
      label: [],
      currentClassify: 0,
      currentLabel: 0
    };
    _this.handlePost = _this.handlePost.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelectClassify = _this.handleSelectClassify.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelectLabel = _this.handleSelectLabel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Post, [{
    key: "handleSelectClassify",
    value: function handleSelectClassify(name) {
      var _this2 = this;

      var classify = this.state.classify.map(function (_ref3) {
        var name = _ref3.name;
        return name;
      });
      this.setState({
        currentClassify: classify.indexOf(name)
      });
      Object(GQL_Query__WEBPACK_IMPORTED_MODULE_5__["getLabelByClassify"])(name).then(function (label) {
        return _this2.setState({
          label: label
        });
      }); // gqlClient.query({
      //   query: QUERY_LABEL_BY_CLASSIFY(),
      //   variables: { classify: name }
      // }).then(({ data }) => data)
      //   .then(({ labelByClassify }) => {
      //     this.setState({ label: labelByClassify })
      //   })
    }
  }, {
    key: "handleSelectLabel",
    value: function handleSelectLabel(name) {
      var label = this.state.label.map(function (_ref4) {
        var name = _ref4.name;
        return name;
      });
      this.setState({
        currentLabel: label.indexOf(name)
      });
    }
  }, {
    key: "handlePost",
    value: function handlePost() {
      var _this$state = this.state,
          classify = _this$state.classify,
          currentClassify = _this$state.currentClassify,
          label = _this$state.label,
          currentLabel = _this$state.currentLabel;
      var currentClassifyName = classify.map(function (_ref5) {
        var name = _ref5.name;
        return name;
      })[currentClassify];
      var currentLabelId = label.map(function (_ref6) {
        var id = _ref6.id;
        return id;
      })[currentLabel];
      this.props.handlePost(currentClassifyName, currentLabelId);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      Object(GQL_Query__WEBPACK_IMPORTED_MODULE_5__["getAllClassify"])().then(function (_ref7) {
        var labelByClassify = _ref7.labelByClassify,
            classify = _ref7.classify;
        console.log("labelByClassify", labelByClassify, classify);

        _this3.setState({
          classify: classify,
          label: labelByClassify
        });
      }); // gqlClient.query({
      //   query: QUERY_CLASSIFY_AND_LABEL(),
      //   variables: { defaultClassify }
      // }).then(({ data }) => data).then(({ labelByClassify, classify }) => {
      //   console.log(labelByClassify, classify);
      //   this.setState({
      //     classify,
      //     label: labelByClassify
      //   })
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isShowMenu = this.state.isShowMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(utils_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassName"])(_style_less__WEBPACK_IMPORTED_MODULE_2___default.a["post-article"], isShowMenu && _style_less__WEBPACK_IMPORTED_MODULE_2___default.a.active),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.setState(function (state) {
            return {
              isShowMenu: !state.isShowMenu
            };
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "POST ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: isShowMenu ? "fa fa-caret-up" : "fa fa-caret-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_2___default.a["post-menu"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostMenu, {
        isShowMenu: isShowMenu,
        initState: {
          classify: this.state.classify,
          label: this.state.label
        },
        handleSelectClassify: this.handleSelectClassify,
        handleSelectLabel: this.handleSelectLabel,
        currentLabel: this.state.currentLabel,
        currentClassify: this.state.currentClassify,
        handlePost: this.handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Post.propTypes = {
  handlePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=editor.js.e53a45f2e9db90cf93de.hot-update.js.map
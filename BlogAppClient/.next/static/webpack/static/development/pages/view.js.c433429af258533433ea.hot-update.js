webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./components/View/comment.js":
/*!************************************!*\
  !*** ./components/View/comment.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/component/component */ "./components/component/component.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./utils/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
          lineNumber: 43
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
          lineNumber: 44
        },
        __self: this
      }, "\u56DE\u590D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply-textarea"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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

      Object(GQL_Query__WEBPACK_IMPORTED_MODULE_7__["getReplyByCommId"])(this.props.comment.id).then(function (reply) {
        _this4.setState({
          reply: reply
        });
      }); // gqlClient.query({
      //   query: QUERY_REPLY_BY_COMMENT_ID(),
      //   variables: { id: this.props.comment.id }
      // }).then(({ data: { replyByComment } }) => replyByComment)
      //   .then(reply => {
      //     this.setState({
      //       reply
      //     })
      //   })
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
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-head"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
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
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, comment.nickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, new Date(parseInt(comment.time)).toDateString())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-body"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, comment.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["reply"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.state.reply.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReplyItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["comment-reply"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReplyComment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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
          lineNumber: 153
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
          lineNumber: 154
        },
        __self: this
      }, "\u5199\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["input-comment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "write some comment...",
        onChange: this.handleChange,
        value: this.state.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["post-comment"],
        onClick: this.handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
      Object(GQL_Mutation__WEBPACK_IMPORTED_MODULE_6__["toCreateComment"])({
        time: now,
        text: commentText,
        userId: id,
        articleId: articleId
      }).then(function (_ref) {
        var err = _ref.err,
            message = _ref.message;
        console.log(_typeof(err), message);
        if (err === "true") return "err";
        var comments = [].concat(_toConsumableArray(_this8.state.state.comments), [{
          picture: picture,
          nickname: nickname,
          time: now,
          text: commentText
        }]).sort(function (a, b) {
          return parseInt(b.time) - parseInt(a.time);
        });
        console.log("comments=", comments);

        _this8.setState({
          comments: comments
        });
      });
      /*gqlClient.mutate({
        mutation: CREATE_COMMENT(),
        variables: {
          input: { time: now, text: commentText, userId: id, articleId }
        }
      })
        .then(({ data }) => data)
        .then(({ err, message }) => {
          console.log(err, message);
          if (err) return "err";
          this.setState(state => ({
            comments: [...state.comments, {
              picture,
              nickname,
              time: now,
              text: commentText
            }].sort((a, b) => parseInt(b.time) - parseInt(a.time))
          }));
        })*/
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
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Comment", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WriteComment, {
        handlePost: this.handlePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }) : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, this.state.comments.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentItem, {
          comment: v,
          userId: _this9.props.userId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
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

/***/ })

})
//# sourceMappingURL=view.js.c433429af258533433ea.hot-update.js.map
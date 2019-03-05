webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./components/View/toolBox.js":
/*!************************************!*\
  !*** ./components/View/toolBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app/button/articleButton */ "./components/app/button/articleButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var GQL_Mutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! GQL/Mutation */ "./GQL/Mutation.js");
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
    return _this;
  }

  _createClass(ToolBox, [{
    key: "handleLike",
    value: function handleLike() {
      GQL_GraphQL__WEBPACK_IMPORTED_MODULE_5__["default"].mutate({
        mutation: Object(GQL_Mutation__WEBPACK_IMPORTED_MODULE_4__["LIKE_ARTICLE"])(),
        variables: {
          id: this.props.articleId
        }
      }).then(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isLogin = _this$props.userState.isLogin,
          likeNumber = _this$props.likeNumber,
          collectionNumber = _this$props.collectionNumber,
          shareNumber = _this$props.shareNumber,
          commentNumber = _this$props.commentNumber;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["tool-box"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: likeNumber,
        disabled: false,
        icon: "fa fa-thumbs-up",
        onClick: this.handleLike,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: collectionNumber,
        disabled: false,
        icon: "fa fa-star",
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: commentNumber,
        disabled: false,
        icon: "fa fa-comment-alt",
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.share,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "SHARE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: shareNumber,
        disabled: false,
        icon: "fa fa-share-square",
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style4",
        noTip: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: this.state.number,
        disabled: false,
        icon: "fa fa-question",
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              number: state.number + 1
            };
          });
        },
        style: "style5",
        noTip: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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

/***/ "./components/View/viewArticle.js":
/*!****************************************!*\
  !*** ./components/View/viewArticle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/View/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_app_toolButton_toolButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app/toolButton/toolButton */ "./components/app/toolButton/toolButton.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article */ "./components/View/article.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
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

/***/ })

})
//# sourceMappingURL=view.js.510111a0205bf1f8b133.hot-update.js.map
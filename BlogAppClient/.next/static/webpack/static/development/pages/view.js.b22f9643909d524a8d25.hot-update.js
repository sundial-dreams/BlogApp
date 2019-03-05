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
    _this.state = {
      isLike: false
    };
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
          lineNumber: 30
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_app_button_articleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentNumber: likeNumber,
        disabled: false,
        icon: "fa fa-thumbs-up",
        onClick: this.handleLike,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
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
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.share,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "SHARE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
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
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
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

/***/ "./components/app/button/articleButton.js":
/*!************************************************!*\
  !*** ./components/app/button/articleButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/app/button/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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

/***/ })

})
//# sourceMappingURL=view.js.b22f9643909d524a8d25.hot-update.js.map
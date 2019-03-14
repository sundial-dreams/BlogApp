webpackHotUpdate("static\\development\\pages\\editor.js",{

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

      Object(GQL_Query__WEBPACK_IMPORTED_MODULE_5__["getAllClassify"])(defaultClassify).then(function (_ref7) {
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
//# sourceMappingURL=editor.js.fc24b83420de03686837.hot-update.js.map
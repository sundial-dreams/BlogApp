webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./components/User/user.js":
/*!*********************************!*\
  !*** ./components/User/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.less */ "./components/User/user.less");
/* harmony import */ var _user_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var GQL_GraphQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! GQL/GraphQL */ "./GQL/GraphQL.js");
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\User\\user.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, props));
    _this.state = {
      userState: {}
    };
    return _this;
  }

  _createClass(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.router.query.id;
      GQL_GraphQL__WEBPACK_IMPORTED_MODULE_3__["default"].query({
        query: Object(GQL_Query__WEBPACK_IMPORTED_MODULE_4__["QUERY_USER_BY_ID"])(),
        variables: {
          id: id
        }
      }).then(function (_ref) {
        var user = _ref.data.user;
        return user;
      }).then(function (user) {
        _this2.setState({
          userState: user
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.userState;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["title-pen"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " Blog ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "APP")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["user-profile"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        src: user.picture,
        alt: "Ash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, user.nickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.bio,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, user.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, user.text ? user.text : "not write something"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["entypo-heart"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, " 127")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["entypo-eye"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " 853")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["entypo-user"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, " 311")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "concat me:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://dribbble.com/shots/1033074-User-Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _user_less__WEBPACK_IMPORTED_MODULE_1___default.a["entypo-dribbble"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), " link"))));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(User));

/***/ })

})
//# sourceMappingURL=user.js.db20b4aa12a2009bcb0b.hot-update.js.map
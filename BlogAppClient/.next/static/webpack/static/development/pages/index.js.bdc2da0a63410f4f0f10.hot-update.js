webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Index/content/middleContent.js":
/*!***************************************************!*\
  !*** ./components/Index/content/middleContent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./components/Index/content/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _articleItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleItem */ "./components/Index/content/articleItem.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var GQL_Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! GQL/Query */ "./GQL/Query.js");
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading */ "./components/Index/loading/loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Engineering\\javascript\\BlogAppClient\\components\\Index\\content\\middleContent.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var QueryArticle = function QueryArticle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
    query: Object(GQL_Query__WEBPACK_IMPORTED_MODULE_6__["QUERY_ARTICLE_BY_CLASSIFY"])(),
    variables: {
      classify: props.classify
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        article = _ref.data.article;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_loading__WEBPACK_IMPORTED_MODULE_7__["ArticleLading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
    if (error) return "error";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, article.sort(function (a, b) {
      return parseInt(b.publishTime) - parseInt(a.publishTime);
    }).map(function (v, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_articleItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: {
          nickname: v.nickname,
          picture: v.picture,
          userId: v.userId
        },
        article: Object.assign(_objectSpread({}, v), {
          level: 4
        }),
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
            pathname: "/view",
            query: {
              id: v.id
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }));
  });
};

QueryArticle.propTypes = {
  classify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

var MiddleContent = function MiddleContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a["middle-content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_1___default.a.article,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueryArticle, {
    classify: props.classify,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
};

MiddleContent.propTypes = {
  classify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (MiddleContent);

/***/ })

})
//# sourceMappingURL=index.js.bdc2da0a63410f4f0f10.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./GQL/Mutation.js":
/*!*************************!*\
  !*** ./GQL/Mutation.js ***!
  \*************************/
/*! exports provided: LOGIN, toLogin, REGISTER, toRegister, POST_ARTICLE, toPostArticle, CREATE_COMMENT, toCreateComment, LIKE_ARTICLE, toLikeArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLogin", function() { return toLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRegister", function() { return toRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ARTICLE", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPostArticle", function() { return toPostArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT", function() { return CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCreateComment", function() { return toCreateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_ARTICLE", function() { return LIKE_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLikeArticle", function() { return toLikeArticle; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GraphQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphQL */ "./GQL/GraphQL.js");


var LOGIN = function LOGIN() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation Login($email: String!, $password: String!){\n login(email: $email, password: $password) {\n    err\n    message\n    response {\n      id\n      email\n      nickname\n      picture\n      position\n      company\n      description\n      text\n    }\n }\n}");
};
var toLogin = function toLogin(email, password) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].mutate({
    mutation: LOGIN(),
    variables: {
      email: email,
      password: password
    }
  }).then(function (_ref) {
    var login = _ref.data.login;
    return login;
  });
};
var REGISTER = function REGISTER() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateUser($nickname: String!, $password: String!, $email: String!){\n   createUser(input: {\n     nickname: $nickname\n     password: $password\n     email: $email\n   }){\n     err\n     message\n     response {\n      id\n      email\n      nickname\n      picture\n     }\n   }\n}");
};
var toRegister = function toRegister(nickname, password, email) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].mutate({
    mutation: REGISTER(),
    variables: {
      input: {
        nickname: nickname,
        password: password,
        email: email
      }
    }
  }).then(function (_ref2) {
    var createUser = _ref2.data.createUser;
    return createUser;
  });
};
var POST_ARTICLE = function POST_ARTICLE() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateArticle($input: InputArticle!){\n     createArticle(input: $input){\n          err\n          message\n          response {\n            id\n          }\n       }\n}");
};
var toPostArticle = function toPostArticle(article) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].mutate({
    mutation: POST_ARTICLE(),
    variables: {
      input: article
    }
  }).then(function (_ref3) {
    var createArticle = _ref3.data.createArticle;
    return createArticle;
  });
};
var CREATE_COMMENT = function CREATE_COMMENT() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation CreateComment($input: InputComment!){\n  createComment(input: $input){\n    err\n    message\n  }\n}");
};
var toCreateComment = function toCreateComment(comment) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].mutate({
    mutation: CREATE_COMMENT(),
    variables: {
      input: comment
    }
  }).then(function (_ref4) {
    var createComment = _ref4.data.createComment;
    return createComment;
  });
};
var LIKE_ARTICLE = function LIKE_ARTICLE() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nmutation ArticleLike($id: ID!){\n  articleLike(id: $id){\n    err\n    message\n  }\n}");
};
var toLikeArticle = function toLikeArticle(id) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].mutate({
    mutation: LIKE_ARTICLE(),
    variables: {
      id: id
    }
  }).then(function (_ref5) {
    var articleLike = _ref5.data.articleLike;
    return articleLike;
  });
};

/***/ })

})
//# sourceMappingURL=view.js.625ba09d8a1899acf8f8.hot-update.js.map
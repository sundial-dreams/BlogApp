webpackHotUpdate("static\\development\\pages\\view.js",{

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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
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

/***/ })

})
//# sourceMappingURL=view.js.6b6021836bc173b99f28.hot-update.js.map
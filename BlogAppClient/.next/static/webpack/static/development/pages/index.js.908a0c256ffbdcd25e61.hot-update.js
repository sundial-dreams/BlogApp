webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./GQL/Query.js":
/*!**********************!*\
  !*** ./GQL/Query.js ***!
  \**********************/
/*! exports provided: QUERY_ARTICLE_BY_CLASSIFY, QUERY_ARTICLE_AND_COMMENT_BY_ID, QUERY_USER_BY_ID, QUERY_CLASSIFY, QUERY_LABEL_BY_CLASSIFY, QUERY_CLASSIFY_AND_LABEL, QUERY_COMMENT_BY_ArticleId, QUERY_REPLY_BY_COMMENT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_BY_CLASSIFY", function() { return QUERY_ARTICLE_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ARTICLE_AND_COMMENT_BY_ID", function() { return QUERY_ARTICLE_AND_COMMENT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_USER_BY_ID", function() { return QUERY_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY", function() { return QUERY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_LABEL_BY_CLASSIFY", function() { return QUERY_LABEL_BY_CLASSIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLASSIFY_AND_LABEL", function() { return QUERY_CLASSIFY_AND_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_COMMENT_BY_ArticleId", function() { return QUERY_COMMENT_BY_ArticleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_REPLY_BY_COMMENT_ID", function() { return QUERY_REPLY_BY_COMMENT_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

var QUERY_ARTICLE_BY_CLASSIFY = function QUERY_ARTICLE_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery Article($classify: String!) {\n          article(classify: $classify) {\n              id\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n     }\n}");
};
var QUERY_ARTICLE_AND_COMMENT_BY_ID = function QUERY_ARTICLE_AND_COMMENT_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ArticleAndCommentById($id: ID!) {\n          articleById(id: $id) {\n              title\n              classify\n              text\n              publishTime\n              readNumber\n              likeNumber\n              commentNumber\n              collectionNumber\n              shareNumber\n              image\n              userId\n              nickname\n              email\n              picture\n              name\n              position\n              company\n              description\n          }\n          commentByArticleId(id: $id){\n              userId\n              text\n              nickname\n              articleId\n              time\n              id\n              picture\n          }\n          \n}");
};
var QUERY_USER_BY_ID = function QUERY_USER_BY_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery User($id: ID!) {\n    user(id: $id){\n      id\n      email\n      nickname\n      picture\n      position\n      company\n      description\n      text\n    }\n}");
};
var QUERY_CLASSIFY = function QUERY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery{\n    classify{\n      name\n      description\n      picture\n    }\n}");
};
var QUERY_LABEL_BY_CLASSIFY = function QUERY_LABEL_BY_CLASSIFY() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery  LabelByClassify($classify: String!) {\n          labelByClassify(classify: $classify){\n            id\n            name\n            classify\n            description\n            picture\n      } \n}");
};
var QUERY_CLASSIFY_AND_LABEL = function QUERY_CLASSIFY_AND_LABEL() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery labelByClassify($defaultClassify: String!) {\n      labelByClassify(classify: $defaultClassify){\n        id\n        name\n      } \n      classify{\n         name\n      }\n}");
};
var QUERY_COMMENT_BY_ArticleId = function QUERY_COMMENT_BY_ArticleId() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery CommentByArticleId($id: ID){\n  commentByArticleId(id: $id){\n    userId\n    text\n    nickname\n    articleId\n    time\n    id\n    picture\n  }\n}");
};
var QUERY_REPLY_BY_COMMENT_ID = function QUERY_REPLY_BY_COMMENT_ID() {
  return graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()("\nquery ReplyByComment{\n  replyByComment(id: $id) {\n    id\n    userId\n    commentId\n    text\n    time\n  }\n}");
};

/***/ })

})
//# sourceMappingURL=index.js.908a0c256ffbdcd25e61.hot-update.js.map
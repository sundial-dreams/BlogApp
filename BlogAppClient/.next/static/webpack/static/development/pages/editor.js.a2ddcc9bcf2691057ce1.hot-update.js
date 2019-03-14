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
var getAllClassify = function getAllClassify(defaultClassify) {
  return _GraphQL__WEBPACK_IMPORTED_MODULE_1__["default"].query({
    query: QUERY_CLASSIFY(),
    variables: {
      defaultClassify: defaultClassify
    }
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

/***/ })

})
//# sourceMappingURL=editor.js.a2ddcc9bcf2691057ce1.hot-update.js.map
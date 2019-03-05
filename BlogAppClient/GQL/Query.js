import gql from "graphql-tag";
import graphqlClient from "./GraphQL";

export const QUERY_ARTICLE_BY_CLASSIFY = () => gql(`
query Article($classify: String!) {
          article(classify: $classify) {
              id
              title
              classify
              text
              publishTime
              readNumber
              likeNumber
              commentNumber
              collectionNumber
              shareNumber
              image
              userId
              nickname
              email
              picture
              name
     }
}`);
export const getArticleByClassify = (classify) => graphqlClient.query({
  query: QUERY_ARTICLE_BY_CLASSIFY(),
  variables: { classify }
}).then(({ data: { article } }) => article);


export const QUERY_ARTICLE_AND_COMMENT_BY_ID = () => gql(`
query ArticleAndCommentById($id: ID!) {
          articleById(id: $id) {
              title
              classify
              text
              publishTime
              readNumber
              likeNumber
              commentNumber
              collectionNumber
              shareNumber
              image
              userId
              nickname
              email
              picture
              name
              position
              company
              description
          }
          commentByArticleId(id: $id){
              userId
              text
              nickname
              articleId
              time
              id
              picture
          }
          
}`
);

export const getArtCommById = (id) => graphqlClient.query({
  query: QUERY_ARTICLE_AND_COMMENT_BY_ID(),
  variables: { id }
}).then(({ data }) => data);

export const QUERY_USER_BY_ID = () => gql(`
query User($id: ID!) {
    user(id: $id){
      id
      email
      nickname
      picture
      position
      company
      description
      text
    }
}`);

export const getUserById = (id) => graphqlClient.query({
  query: QUERY_USER_BY_ID(),
  variables: { id }
}).then(({ data: { id } }) => id);


export const QUERY_CLASSIFY = () => gql(`
query{
    classify{
      name
      description
      picture
    }
}`);
export const getAllClassify = () => graphqlClient.query({
  query: QUERY_CLASSIFY()
}).then(({ data: { classify } }) => classify);

export const QUERY_LABEL_BY_CLASSIFY = () => gql(`
query  LabelByClassify($classify: String!) {
          labelByClassify(classify: $classify){
            id
            name
            classify
            description
            picture
      } 
}`);
export const getLabelByClassify = (classify) => graphqlClient.query({
  query: QUERY_LABEL_BY_CLASSIFY(),
  variables: { classify }
}).then(({ data: { labelByClassify } }) => labelByClassify);

export const QUERY_CLASSIFY_AND_LABEL = () => gql(`
query labelByClassify($defaultClassify: String!) {
      labelByClassify(classify: $defaultClassify){
        id
        name
      } 
      classify{
         name
      }
}`);

export const getClassifyLabel = (defaultClassify) => graphqlClient.query({
  query: QUERY_CLASSIFY_AND_LABEL(),
  variables: { defaultClassify }
}).then(({ data}) => data);

export const QUERY_COMMENT_BY_ArticleId = () => gql(`
query CommentByArticleId($id: ID){
  commentByArticleId(id: $id){
    userId
    text
    nickname
    articleId
    time
    id
    picture
  }
}`);
export const getCommByArtId = (id) => graphqlClient.query({
  query: QUERY_COMMENT_BY_ArticleId(),
  variables: { id }
}).then(({ data: { commentByArticleId } }) => commentByArticleId);

export const QUERY_REPLY_BY_COMMENT_ID = () => gql(`
query ReplyByComment{
  replyByComment(id: $id) {
    id
    userId
    commentId
    text
    time
  }
}`);
export const getReplyByCommId = (id) => graphqlClient.query({
  query: QUERY_REPLY_BY_COMMENT_ID(),
  variables: { id }
}).then(({ data: { replyByComment } }) => replyByComment);
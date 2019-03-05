import gql from "graphql-tag";
import graphqlClient from "./GraphQL";

export const LOGIN = () => gql(`
mutation Login($email: String!, $password: String!){
 login(email: $email, password: $password) {
    err
    message
    response {
      id
      email
      nickname
      picture
      position
      company
      description
      text
    }
 }
}`);
export const toLogin = (email, password) => graphqlClient.mutate({
  mutation: LOGIN(),
  variables: { email, password }
}).then(({ data: { login } }) => login);

export const REGISTER = () => gql(`
mutation CreateUser($nickname: String!, $password: String!, $email: String!){
   createUser(input: {
     nickname: $nickname
     password: $password
     email: $email
   }){
     err
     message
     response {
      id
      email
      nickname
      picture
     }
   }
}`);
export const toRegister = (nickname, password, email) => graphqlClient.mutate({
  mutation: REGISTER(),
  variables: { input: { nickname, password, email } }
}).then(({ data: { createUser } }) => createUser);
export const POST_ARTICLE = () => gql(`
mutation CreateArticle($input: InputArticle!){
     createArticle(input: $input){
          err
          message
          response {
            id
          }
       }
}`);

export const toPostArticle = (article) => graphqlClient.mutate({
  mutation: POST_ARTICLE(),
  variables: { input: article }
}).then(({ data: createArticle }) => createArticle);

export const CREATE_COMMENT = () => gql(`
mutation CreateComment($input: InputComment!){
  createComment(input: $input){
    err
    message
  }
}`);
export const toCreateComment = (comment) => graphqlClient.mutate({
  mutation: CREATE_COMMENT(),
  variables: { input: comment }
}).then(({ data: { createComment } }) => createComment);

export const LIKE_ARTICLE = () => gql(`
mutation ArticleLike($id: ID!){
  articleLike(id: $id){
    err
    message
  }
}`);

export const toLikeArticle = (id) => graphqlClient.mutate({
  mutation: LIKE_ARTICLE(),
  variables: { id }
}).then(({ data: { articleLike } }) => articleLike);
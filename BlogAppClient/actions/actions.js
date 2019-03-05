import * as Types from "./actionsTypes";
import client from "GQL/GraphQL";
import { QUERY_USER_BY_ID } from "GQL/Query";

export const loginUser = userInfo => ({ type: Types.LOGIN_USER, isLogin: true, ...userInfo });

export const registerUser = userInfo => ({
  type: Types.REGISTER_USER,
  isLogin: true,
  ...userInfo
});

export const fetchUserResponse = userInfo => ({
  type: Types.FETCH_USER_SUCCESS,
  response: {
    ...userInfo
  }
});
export const fetchUser = id => dispatch => {
  dispatch({ type: Types.FETCH_USER_REQUEST, isFetching: true, err: false });
  return client.query({ query: QUERY_USER_BY_ID(), variables: { id } })
    .then(data => data.data.user)
    .then(user => {
      console.log(user, typeof user);
      dispatch(fetchUserResponse(user))
    })
    .catch(err => dispatch({ type: Types.FETCH_USER_FAILURE, isFetching: false, err: true }))
};

export const indexPageSelectClassify = classify => ({
  type: Types.UI_INDEX_SELECT_CLASSIFY,
  classify
});
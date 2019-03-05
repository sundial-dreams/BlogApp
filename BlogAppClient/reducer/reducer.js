import mainState from "./initialState";
import * as ActionTypes from "actions/actionsTypes";


const userReducer = (initialState = mainState.userState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER : {
      delete action.type;
      return {
        ...initialState,
        ...action
      }
    }
    case ActionTypes.REGISTER_USER : {
      delete action.type;
      console.log("register user", action);
      return {
        ...initialState,
        ...action
      }
    }
    case ActionTypes.FETCH_USER_REQUEST: {
      return {
        ...initialState,
        isLogin: false,
      }
    }
    case ActionTypes.FETCH_USER_FAILURE: {
      return {
        ...initialState,
        isLogin: false,
      }
    }
    case ActionTypes.FETCH_USER_SUCCESS: {
      return {
        ...initialState,
        ...action.response,
        isLogin: true,
      }
    }
    default : {
      return initialState
    }
  }
};
const IndexPageReducer = (initialState = mainState.indexPage, action) => {
  switch (action.type) {
    case ActionTypes.UI_INDEX_SELECT_CLASSIFY: {
      return {
        ...initialState,
        classify: action.classify,
      }
    }
    default : {
      return initialState
    }
  }
};


export default function reducer (state = mainState, action) {
  return {
    user: userReducer(state.userState, action),
    indexPage: IndexPageReducer(state.indexPage, action)
  }
}
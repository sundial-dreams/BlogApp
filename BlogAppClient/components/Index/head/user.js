import React from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import { UserPicture } from "components/component/component";
import Router from "next/router";
import { loadCookies, removeCookies } from "utils/utils";

const User = props => {
  const { userPicture, articleNumber } = props;
  const isLogin = Boolean(userPicture);
  return (<div className={ less.user }>
    <div className={ less["user-head"] }>
      <UserPicture picture={ userPicture } size={ 60 } url={ isLogin ? { pathname: "/user", query: { id: loadCookies("userId") }} : "/login" }/>
        </div>
        <div className={ less["user-info"] }>
        <button onClick={ () => { removeCookies("userId") } }>
        +
        </button>
        </div>
        <div className={ less["user-article"] }>
        <div>
        <h3>发布文章</h3>
        <p>{ articleNumber } <span>篇</span></p>
        </div>
        </div>
        </div>)
      };
      User.propTypes = {
      userPicture: PropTypes.string,
      articleNumber: PropTypes.number
    };
      export default User;
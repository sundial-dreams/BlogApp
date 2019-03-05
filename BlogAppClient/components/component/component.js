import React from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import Link from "next/link";
import { mergeClassName } from "utils/utils";

export const UserPicture = props => {
  const isLogin = Boolean(props.picture);
  return (
    <Link href={ props.url }>
      <div className={ mergeClassName(less["user-picture"], isLogin || less["not-login"]) }
           style={ { width: `${ props.size }px`, height: `${ props.size }px` } }>
        {
          isLogin ? <img src={ props.picture } alt=""/> : "未登录"
        }
      </div>
    </Link>
  );
};
UserPicture.defaultProps = {
  size: 60,
  url: "",
  picture: ""
};
UserPicture.propTypes = {
  size: PropTypes.number,
  picture: PropTypes.string.isRequired,
  url: PropTypes.string
};


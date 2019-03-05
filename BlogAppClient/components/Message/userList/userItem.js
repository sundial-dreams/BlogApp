import React from "react";
import less from "./style.less";
import { mergeClassName } from "utils/utils";
import { UserPicture } from "components/component/component";
import PropTypes from "prop-types";

function UserItem (props) {
  let { active, picture, nickname, message, time } = props;
  return (
    <div className={ mergeClassName(less["user-item"], active && less.active) }>
      <div className={ less.tip }>2</div>
      <div className={ less.left }>
        <UserPicture picture={ picture } size={ 50 }/>
      </div>
      <div className={ less.right }>
        <h3>{ nickname }</h3>
        <div>
          <span>{ message }</span>
          <span>{ time }</span>
        </div>
      </div>
      <p className={ less.line }/>
    </div>
  )
}

UserItem.propTypes = {
  active: PropTypes.bool,
  picture: PropTypes.string,
  nickname: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string
};
export default UserItem
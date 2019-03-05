import React, { Fragment } from "react";
import less from "./style.less";
import { mergeClassName } from "utils/utils";
import { UserPicture } from "components/component/component";
import PropTypes from "prop-types";

const User = props => (
  <div className={ less["item-left"] }>
    <UserPicture picture={ props.picture } size={ 50 }/>
  </div>);
User.propTyes = {
  picture: PropTypes.string
};

const Message = props => (<div className={ mergeClassName(less["item-right"], props.right && less["right"]) }>
  <div className={ less["user-message"] }>
    {
      props.message
    }
  </div>
</div>);
Message.propTypes = {
  right: PropTypes.bool,
  message: PropTypes.string
};

function MessageItem (props) {
  let { right, picture, message } = props;
  const content = right ?
    (<Fragment>
      <Message right message={ message }/>
      <User picture={ picture }/>
    </Fragment>) :
    (<Fragment>
      <User picture={ picture }/>
      <Message message={ message }/>
    </Fragment>);
  return (
    <div className={ less["message-item"] }>
      { content }
      <p className={ less.line }/>
    </div>
  )
}

MessageItem.propTypes = {
  right: PropTypes.bool,
  picture: PropTypes.string,
  message: PropTypes.string
};
export default MessageItem
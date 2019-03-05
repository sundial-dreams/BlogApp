import React, { Component } from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import Post from "./postArticle";
import { UserPicture } from "components/component/component";
import { connect } from "react-redux";

class Head extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { title, onTitleChange, userState, handlePost } = this.props;
    return (
      <div className={ less["editor-head"] }>
        <div className={ less["head-left"] }>
          <div className={ less["article-title"] }>
            <input placeholder="Write Title..." value={ title } onChange={ onTitleChange }/>
          </div>
        </div>
        <div className={ less["head-right"] }>
          <div className={ less["head-post"] }>
            <Post handlePost={ handlePost }/>
          </div>
          <div className={ less["head-user"] }>
            <UserPicture picture={ userState.picture } size={ 60 } url={{pathname: "/user", query: {id: userState.id}}}/>
          </div>
        </div>
      </div>
    )
  }
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  userState: PropTypes.object,
  handlePost: PropTypes.func
};

export default connect(
  ({ user }) => ({ userState: user }),
  dispatch => ({})
)(Head);
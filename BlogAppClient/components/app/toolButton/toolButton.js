import React, { Component } from "react";
import less from "./style.less";
import { UserPicture } from "components/component/component";
import { mergeClassName } from "utils/utils";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Router from "next/router";

class ToolButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isPop: false
    };
  }

  render () {
    const { isLogin, picture, id } = this.props.userState;
    return (
      <div className={ mergeClassName(less["tool-button"], this.state.isPop && less.active) }>
        <div className={ less["main-button"] }>
          <button onClick={ () => this.setState(state => ({ isPop: !state.isPop })) }>
            +
          </button>
        </div>
        <div className={ less["user-button"] }>
          <UserPicture picture={ isLogin ? picture : "" } size={ 60 } url={ isLogin ? {
            pathname: "/user",
            query: { id }
          } : "/login" }/>
        </div>
        <div className={ less["write-article-button"] }>
          <button onClick={ () => Router.push("/editor") } disabled={ !isLogin }>
            <i className="fa fa-pencil-alt"/>
          </button>
        </div>
        <div className={ less["other-button"] }>
          <button onClick={ () => {
          } } disabled={ !isLogin }>
            <i className="fa fa-blog"/>
          </button>
        </div>
      </div>
    );
  }
}

ToolButton.propTypes = {
  userState: PropTypes.object
};
export default connect(state => ({ userState: state.user }))(ToolButton);
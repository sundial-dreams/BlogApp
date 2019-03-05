import React, { Component } from "react";
import LoginRegister from "components/LoginRegister/loginRegister";
import Router from "next/router";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Login extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    if (this.props.userState.isLogin) {
      Router.push("/")
        .then(() => console.log("ok"))
    }
    return (
      <div className="__page" id="login">
        <LoginRegister/>
      </div>
    )
  }
}

Login.propTypes = {
  userState: PropTypes.object
};
export default connect(state => ({ userState: state.user }))(Login)
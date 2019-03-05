import React, { Component } from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import Router from "next/router";
import { connect } from "react-redux";
import { loginUser } from "actions/actions";
import { setCookies } from "utils/utils";

export const Check = ({ err, enable }) => (<i className={ !err ? "fa fa-check" : "fa fa-times" }
                                              style={ {
                                                color: !err ? "chartreuse" : "red",
                                                display: enable ? "none" : "inline"
                                              } }
/>);

class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailMessage: "",
      passwordMessage: "",
      waiting: false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  handleEmailChange (e) {
    const validate = this.props.validateEmail;
    const status = validate(e.target.value);
    this.setState({
      email: e.target.value,
      emailMessage: status.err ? status.message : ""
    })
  }

  handlePasswordChange (e) {
    const validate = this.props.validatePassword;
    const status = validate(e.target.value);
    this.setState({
      password: e.target.value,
      passwordMessage: status.err ? status.message : ""
    })
  }

  onLogin () {
    const { handleSubmit, loginSuccess } = this.props;
    handleSubmit(this.state.email, this.state.password)
      .then(({ err, message, response }) => {
        if (err) {
          if (message.search(/password/)) {
            this.setState({
              passwordMessage: message
            });
          } else {
            this.setState({
              emailMessage: message
            });
          }
        } else {
          //set cookies
          setCookies(response.id);
          loginSuccess(response);
          Router.push("/").then(() => {});
        }
      })
  }

  render () {
    return (
      <div className={ less.login }>
        <div className={ less["email"] }>
          <input placeholder="email" onChange={ this.handleEmailChange } autoComplete="off"/>
          <Check err={ this.state.emailMessage !== "" } enable={ this.state.email === "" }/>
          <div className={ less.tip }>
            { this.state.emailMessage }
          </div>
        </div>
        <div className={ less["password"] }>
          <input type="password" placeholder="password"
                 onChange={ this.handlePasswordChange } autoComplete="off"/>
          <Check err={ this.state.passwordMessage !== "" } enable={ this.state.password === "" }/>
          <div className={ less.tip }>
            { this.state.passwordMessage }
          </div>
        </div>
        <button onClick={ this.onLogin }
                disabled={ (this.state.passwordMessage || this.state.emailMessage || (!this.state.password || !this.state.email)) }>
          Login
        </button>
      </div>
    )
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.objectOf({ then: PropTypes.func, catch: PropTypes.func }),
  validateEmail: PropTypes.func,
  validatePassword: PropTypes.func,
  loginSuccess: PropTypes.func
};


const mapStateToProps = (state, props) => {
  return {
    userState: state
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    loginSuccess: userInfo => dispatch(loginUser(userInfo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
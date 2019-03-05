import React, { Component } from "react";
import less from "./style.less";
import { Check } from "./login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Router from "next/router";
import { registerUser, loginUser } from "actions/actions";
import { setCookies } from "utils/utils";

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      password: "",
      emailMessage: "",
      nicknameMessage: "",
      passwordMessage: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  handleEmailChange (e) {
    const validate = this.props.validateEmail;
    const status = validate(e.target.value);
    this.setState({
      email: e.target.value,
      emailMessage: status.err ? status.message : ""
    });
  }

  handleNicknameChange (e) {
    const validate = this.props.validateNickname;
    const status = validate(e.target.value);
    this.setState({
      nickname: e.target.value,
      nicknameMessage: status.err ? status.message : ""
    });
  }

  handlePasswordChange (e) {
    const validate = this.props.validatePassword;
    const status = validate(e.target.value);
    this.setState({
      password: e.target.value,
      passwordMessage: status.err ? status.message : ""
    });
  }

  onRegister () {
    const { handleSubmit, registerSuccess, loginSuccess } = this.props;
    handleSubmit(this.state.nickname, this.state.email, this.state.password)
      .then(({ err, message, response }) => {
        if (err) {
          this.setState({ emailMessage: message })
        } else {
          setCookies(response.id);
          delete response.__typename;
          setTimeout(() => loginSuccess(response), 0);
          Router.push("/").then(() => {})
        }
      })
  }

  render () {
    return (
      <div className={ less.register }>
        <div className={ less["nickname"] }>
          <input placeholder="nickname" onChange={ this.handleNicknameChange } autoComplete="off"/>
          <Check err={ this.state.nicknameMessage } enable={ !this.state.nickname }/>
          <div className={ less.tip }>
            { this.state.nicknameMessage }
          </div>
        </div>
        <div className={ less["email"] }>
          <input placeholder="email" onChange={ this.handleEmailChange } autoComplete="off"/>
          <Check err={ this.state.emailMessage } enable={ !this.state.email }/>
          <div className={ less.tip }>
            { this.state.emailMessage }
          </div>
        </div>
        <div className={ less["password"] }>
          <input type="password" placeholder="password"
                 onChange={ this.handlePasswordChange }
                 autoComplete="off"/>
          <Check err={ this.state.passwordMessage } enable={ !this.state.password }/>
          <div className={ less.tip }>
            { this.state.passwordMessage }
          </div>
        </div>
        <button onClick={ this.onRegister }
                disabled={ (this.state.nicknameMessage || this.state.passwordMessage || this.state.emailMessage ||
                  !this.state.email || !this.state.nickname || !this.state.password) }>
          Register
        </button>
      </div>
    )
  }
}

Register.propTypes = {
  validateNickname: PropTypes.func,
  validateEmail: PropTypes.func,
  validatePassword: PropTypes.func,
  handleSubmit: PropTypes.func,
  registerSuccess: PropTypes.func,
  loginSuccess: PropTypes.func
};

const mapStateToProps = state => {
  return {
    userState: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    registerSuccess: userInfo => dispatch(registerUser(userInfo)),
    loginSuccess: userInfo => dispatch(loginUser(userInfo))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register)
import React, { Component } from "react";
import less from "./style.less";
import Login from "./login";
import Register from "./register";
import { mergeClassName } from "utils/utils";
import client from "GQL/GraphQL";
import { LOGIN, REGISTER, toLogin, toRegister } from "GQL/Mutation";
import { validateNickname, validateEmail, validatePassword } from "utils/utils";

export default class LoginRegister extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentActive: 0,
    };
  }

  static handleLogin (email, password) {
    return toLogin(email, password)
  }

  static handleRegister (nickname, email, password) {
    return toRegister(nickname, email, password)
  }

  render () {
    const cur = this.state.currentActive;
    const { pending, fulfill, reject } = this.state;
    return (
      <div className={ less["login-register"] }>
        <div className={ less.bg }>
          <div/>
          <div/>
          <div/>
        </div>
        <div
          className={ mergeClassName(less.container, pending && less.process, fulfill && less.fulfill, reject && less.error) }>
          <div className={ less.title }>
            <button className={ mergeClassName(less["login-button"], cur === 0 && less.active) }
                    onClick={ () => this.setState({
                      currentActive: 0
                    }) }>
              LOGIN
            </button>
            <button className={ mergeClassName(less["register-button"], cur === 1 && less.active) }
                    onClick={ () => this.setState({
                      currentActive: 1
                    }) }
            >
              REGISTER
            </button>
          </div>
          {
            cur === 0 ? <Login validateEmail={ validateEmail }
                               validatePassword={ validatePassword }
                               handleSubmit={ LoginRegister.handleLogin }
              />
              : <Register validatePassword={ validatePassword }
                          validateEmail={ validateEmail }
                          validateNickname={ validateNickname }
                          handleSubmit={ LoginRegister.handleRegister }

              />
          }
        </div>
      </div>
    )
  }
}


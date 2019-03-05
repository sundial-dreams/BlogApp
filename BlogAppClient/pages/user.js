import React, { Component } from "react";
import UserComponent from "components/User/user";

export default class User extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="user" className="__page">
        <UserComponent/>
      </div>
    )
  }
}

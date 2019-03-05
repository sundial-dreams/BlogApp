import React, { Component } from "react";
import { LeftRightLayout } from "components/Layout/layout";
import UserList from "components/Message/userList/userList";
import MessageList from "components/Message/messageList/messageList";

export default class Message extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id="message" className="__page">
        <LeftRightLayout leftWidth={ 500 }>
          <UserList/>
          <MessageList/>
        </LeftRightLayout>
      </div>
    )
  }
}
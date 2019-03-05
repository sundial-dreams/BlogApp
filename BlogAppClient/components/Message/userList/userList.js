import React, { Component } from "react";
import less from "./style.less";
import UserItem from "./userItem";

export default class UserList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<div className={ less.userList } style={ { height: "100vh" } }>
      <div className={ less.head }>
        <input placeholder="Search"/>
        <button>
          +
        </button>
      </div>
      <div className={ less.body }>
        <ul>
          {
            Array.from({ length: 5 }, (v, i) => <li key={i}>
              <UserItem
                active={i === 1}
                picture="/static/img/test-head.jpg"
                time="2018-10-10"
                nickname="daydream"
                message="hello"
            /></li>)
          }
        </ul>
      </div>
    </div>)
  }
}
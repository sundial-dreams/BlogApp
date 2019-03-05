import React, { Component } from "react";
import less from "./user.less";
import { withRouter } from "next/router";
import gqlClient from "GQL/GraphQL";
import { QUERY_USER_BY_ID } from "GQL/Query";

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userState: {}
    };
  }

  componentDidMount () {
    const id = this.props.router.query.id;
    gqlClient.query({
      query: QUERY_USER_BY_ID(),
      variables: { id }
    }).then(({ data: { user } }) => user)
      .then(user => {
        this.setState({ userState: user })
      })
  }

  render () {

    const user = this.state.userState;
    return (
      <div className={ less.user }>
        <h1 className={ less["title-pen"] }> Blog <span>APP</span></h1>
        <div className={ less["user-profile"] }>
          <img className={ less.avatar }
               src={ user.picture }
               alt="Ash"/>
          <div className={ less.username }>{ user.nickname }</div>
          <div className={ less.bio }>
            { user.email }
          </div>
          <div className={ less.description }>
            {user.text ? user.text : "not write something"}
          </div>
          <ul className={ less.data }>
            <li>
              <span className={ less["entypo-heart"] }> 127</span>
            </li>
            <li>
              <span className={ less["entypo-eye"] }> 853</span>
            </li>
            <li>
              <span className={ less["entypo-user"] }> 311</span>
            </li>
          </ul>
        </div>
        <footer>
          <h1>concat me:
            <a href="https://dribbble.com/shots/1033074-User-Profile">
              <span className={ less["entypo-dribbble"] }/> link</a>
          </h1>
        </footer>
      </div>
    );
  }
}

export default withRouter(User);




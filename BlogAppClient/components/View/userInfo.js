import React, { Component } from "react";
import less from "./style.less";
import { UserPicture } from "components/component/component";
import PropTypes from "prop-types";
import { mergeClassName } from "utils/utils";

export default class UserInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    };

  }

  render () {
    const { userState } = this.props;
    return (
      <div className={ mergeClassName(less["user-info"], this.state.active && less.active) }>
        <div className={ less["about-author"] }>
          <button onClick={ () => this.setState(state => ({ active: !state.active })) }>
            About Author
          </button>
        </div>
        <div className={ less["author-info"] }>
          <div>
            <UserPicture picture={ userState.picture } url={ {
              pathname: "/user",
              query: { id: userState.userId }
            } }/>
            <h3>{ userState.nickname }</h3>
          </div>
          <div>
            <strong>email:</strong>{ " " }{ userState.email }
          </div>
          <div>
            <strong>description:</strong>{ " " }{ userState.description ? userState.description : "no description" }
          </div>
          <div>
            <strong> position:</strong>{ " " }{ userState.position ? userState.position : "none" }
          </div>
          <div>
            <strong> company:</strong> { " " }{ userState.company ? userState.company : "none" }
          </div>
        </div>
      </div>
    );
  }
}
UserInfo.propTypes = {
  userState: PropTypes.object
};
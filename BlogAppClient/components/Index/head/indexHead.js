import React, { Component } from "react";
import less from "./style.less";
import User from "./user";
import HeadMiddle from "./headMiddle";
import Search from "./search";
import { LeftMiddleRightLayout } from "components/Layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUser } from "actions/actions";

class IndexHead extends Component {
  constructor (props) {
    super(props);

  }

  //jsx
  render () {
    const { userState, onSelectClassify } = this.props;
    return (
      <div className={ less["head-nav"] }>
        <LeftMiddleRightLayout flex={ [1, 2, 1] }>
          <User articleNumber={ 202 } userPicture={ userState.picture }/>
          <HeadMiddle nickname={ userState.nickname } level={ 4 } selectClassify={ onSelectClassify }/>
          <Search/>
        </LeftMiddleRightLayout>
      </div>
    )
  }
}

IndexHead.propTypes = {
  userState: PropTypes.object,
  onSelectClassify: PropTypes.func
};
const mapStateToProps = ({ user }) => {
  console.log(user);
  return {
    userState: user
  }
};
const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexHead)




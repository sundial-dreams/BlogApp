import React, { Component } from "react";
import less from "./style.less";
import LeftContent from "./leftContent";
import MiddleContent from "./middleContent";
import RightContent from "./rightContent";
import { LeftMiddleRightLayout } from "components/Layout/layout";
import PropTypes from "prop-types";

export default class IndexContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={ less.content }>
        <LeftMiddleRightLayout flex={ [1, 2, 1] }>
          <LeftContent/>
          <MiddleContent classify={this.props.classify}/>
          <RightContent/>
        </LeftMiddleRightLayout>
      </div>
    )
  }
}

IndexContent.propTypes = {
  classify: PropTypes.string
};
import React, { Component } from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import { mergeClassName } from "utils/utils";

export default class ArticleButton extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    const { currentNumber, disabled, icon, style, onClick, noTip } = this.props;
    return (
      <div className={ mergeClassName(less["article-button"], less[style], disabled && less.active) }>
        <button onClick={ onClick } disabled={disabled}>
          <i className={ icon }/>
        </button>
        { !noTip ? <span>{ currentNumber }</span> : "" }
      </div>
    );
  }
}
ArticleButton.propTypes = {
  currentNumber: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  noTip: PropTypes.bool
};

import React from "react";
import less from "./style.less";
import { mergeClassName } from "utils/utils";

export default class PayButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      process: false,
      success: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      process: true,
      success: false
    });
    setTimeout(() => this.setState({
      process: false,
      success: true
    }), 1000)
  }

  render () {
    const { text } = this.props;
    return (
      <div
        className={
          mergeClassName(less["pay-button"], this.state.process && less.process, this.state.success && less.success) }
        onClick={ this.handleClick }
      >
        <div className={ less["button-wrapper"] }>
          <div className={ less["pay-div-success"] }>Success</div>
          <div className={ less["pay-div-process"] }>Process</div>
          <div className={ less["pay-div-pay"] }>{ text }</div>
        </div>
      </div>
    );
  }
}
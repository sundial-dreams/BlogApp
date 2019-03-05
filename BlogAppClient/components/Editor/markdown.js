import React, { Component, createRef } from "react";
import less from "./style.less";
import PropTypes from "prop-types";

export default class Markdown extends Component {
  constructor (props) {
    super(props);
    this.textarea = createRef();
  }

  componentDidMount () {
    const textarea = this.textarea.current;

    function resize () {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + 'px';
    }

    function delayResize () {
      setTimeout(resize, 0)
    }

    textarea.addEventListener("change", resize);
    textarea.addEventListener("cut", delayResize);
    textarea.addEventListener("paste", delayResize);
    textarea.addEventListener("drop", delayResize);
    textarea.addEventListener("keydown", delayResize);
    textarea.focus();
    textarea.select();
    resize();
  }

  render () {
    const { source, handleChange } = this.props;
    return (
      <div className={ less.markdown }>
        <div className={ less["markdown-head"] }>
          <input placeholder="type title..."/>
        </div>
        <div className={ less["markdown-body"] }>
          <textarea ref={ this.textarea }
                    placeholder="type something..."
                    value={ source }
                    onChange={ handleChange }/>
        </div>
      </div>
    )
  }
}
Markdown.propTypes = {
  source: PropTypes.string,
  handleChange: PropTypes.func
};

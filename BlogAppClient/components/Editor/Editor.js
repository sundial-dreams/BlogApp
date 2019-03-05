import React, { Component } from "react";
import less from "./style.less";
import Markdown from "./markdown";
import MarkdownTransform from "./markdownTransform";

export default class BlogEditor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      source: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      source: e.target.value
    })
  }

  render () {
    return (
      <div className={ less.editor }>
        <div className={ less["editor-left"] }>
          <Markdown source={ this.state.source } handleChange={ this.handleChange }/>
        </div>
        <div className={ less["editor-right"] }>
          <MarkdownTransform source={ this.state.source }/>
        </div>
      </div>
    )
  }
}



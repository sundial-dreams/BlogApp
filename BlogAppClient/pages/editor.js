import React, { Component } from "react";
import BlogEditor from "components/RichEditor/editor";
import ToolButton from "components/app/toolButton/toolButton";

export default class Editor extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="blog-editor" className="__page">
        <BlogEditor/>
        <ToolButton/>
      </div>
    )
  }
}



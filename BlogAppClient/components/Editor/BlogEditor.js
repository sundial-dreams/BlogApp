import React, { Component } from "react";
import less from "./style.less";
import Editor from "./Editor";

export default class BlogEditor extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ less["blog-editor"] }>
        <div className={ less["head"] }>

        </div>
        <div className={ less["body"] }>
          <Editor/>
        </div>
      </div>
    )
  }
}



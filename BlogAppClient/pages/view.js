import React, { Component } from "react";
import ViewArticle from "components/View/viewArticle";

export default class ViewBlog extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="__page" id="view">
        <ViewArticle/>
      </div>
    )
  }
}



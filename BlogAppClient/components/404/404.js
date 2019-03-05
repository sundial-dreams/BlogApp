import React, { Component } from "react";
import less from "./404.less";

export default class Error extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className={ less.error }>
        <div className={ less["code-area"] }>
  <span style={ { color: "#777", fontStyle: "italic" } }>
    // 404 page not found.
  </span>
          <span>
    <span style={ { color: "#d65562" } }>
      if
    </span>
	  (<span style={ { color: "#4ca8ef" } }>!</span><span style={ { fontStyle: "italic", color: "#bdbdbd" } }>found</span>)
            { "{" }
              </span>
          <span>
              <span style={ { paddingLeft: "15px", color: "#2796ec" } }>
              <i style={ { width: "10px", display: "inline-block" } }/>throw new Error
              </span>
              <span>
              (<span style={ { color: "#a6a61f" } }>"(╯°□°)╯︵ ┻━┻"</span>);
              </span>
              <span style={ { display: "block" } }>}</span>
          <span style={ { color: "#777", fontStyle: "italic" } }>
		  // <a href="/">Go home!</a>
	  </span>
        </span>
        </div>
      </div>
    );
  }

}

import React, { Component } from "react";
import Error from "components/404/404";

export default class Moments extends Component{
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className="__page" id="moment">
        <Error/>
      </div>
    );
  }

}

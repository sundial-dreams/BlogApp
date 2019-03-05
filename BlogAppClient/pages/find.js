import React, { Component } from "react";
import Search from "components/Search/search";
export default class Finds extends Component{
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className="__page" id="find">
        <Search/>
      </div>
    );
  }

}

import React, { Component } from "react";
import less from "./style.less";
import { mergeClassName } from "utils/utils";

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render () {


    return (
      <div className={less.find}>
      <div className={ mergeClassName(less.search, this.state.isOpen && less.open) }>
        <input type="search" className={ less["search-box"] }/>
        <span className={ less["search-button"] } onClick={ () => this.setState(state => ({ isOpen: !state.isOpen })) }>
          <span className={ less["search-icon"] }/>
        </span>
      </div>
      </div>
    );
  }
}

export default Search;




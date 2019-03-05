import React, { Component } from "react";
import Router from "next/router";
import less from "./mainMenu.less";
import { mergeClassName } from "utils/utils";
import PropTypes from "prop-types";
import Link from "next/link";

export default class MainMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentActive: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (current) {
    this.setState({
      currentActive: current
    });
  }

  render () {
    const { router } = this.props;
    const { currentActive } = this.state;

    return (
      <div className={ less.nav }>
        <div className={ less["nav-logo"] }
             onClick={ () => Router.push("/") }
        >
          <img className={ less.logo } alt="none" src="/static/img/logo.png"/>
        </div>
        <Link href={ router.homeUrl } prefetch>
          <div className={ mergeClassName(less["nav-home"], currentActive === 0 && less.active) }
               onClick={ () => this.handleClick(0) }
          >
            <div className={ less["left-effect"] }/>
            <i className="icon-icons8-home"/>
          </div>
        </Link>
        <Link href={ router.momentUrl } prefetch>
          <div className={ mergeClassName(less["nav-moment"], currentActive === 1 && less.active) }
               onClick={ () => this.handleClick(1) }
          >
            <div className={ less["left-effect"] }/>
            <i className="icon-icons8-binoculars"/>
          </div>
        </Link>
        <Link href={ router.searchUrl } prefetch>
          <div className={ mergeClassName(less["nav-search"], currentActive === 2 && less.active) }
               onClick={ () => this.handleClick(2) }
          >
            <div className={ less["left-effect"] }/>
            <i className="icon-icons8-search"/>
          </div>
        </Link>
        <Link href={ router.resourceUrl } prefetch>
          <div className={ mergeClassName(less["nav-resource"], currentActive === 3 && less.active) }
               onClick={ () => this.handleClick(3) }
          >
            <div className={ less["left-effect"] }/>
            <i className="icon-icons8-opened-folder"/>
          </div>
        </Link>
        <Link href={ router.messageUrl } prefetch>
          <div className={ mergeClassName(less["nav-message"], currentActive === 4 && less.active) }
               onClick={ () => this.handleClick(4) }
          >
            <div className={ less["left-effect"] }/>
            <i className="icon-icons8-speech-bubble"/>
          </div>
        </Link>
      </div>
    )
  }
}

MainMenu.propTypes = {
  router: PropTypes.objectOf({
    homeUrl: PropTypes.string,
    momentUrl: PropTypes.string,
    searchUrl: PropTypes.string,
    resourceUrl: PropTypes.string,
    messageUrl: PropTypes.string
  })
};
import React, { Fragment } from "react";
import less from "./style.less";
import StarButton from "components/app/button/starButton";
import PropTypes from "prop-types";
import { mergeClassName } from "utils/utils";
import { connect } from "react-redux";
import { indexPageSelectClassify } from "actions/actions";

const NavItem = props => {
  const { icon, text, active } = props;
  return (<div className={ mergeClassName(less["nav-item"], active && less.active) }>
    <div className={ less["item-icon"] }>
      <i className={ icon }/>
    </div>
    <div className={ less["item-text"] }>
      { text }
    </div>
    <div className={ less["bottom-line"] }/>
  </div>)
};
NavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
};

class HeadMiddle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentActive: 0,
      classify: ["前端", "后端", "编程语言"]
    };
  }

  render () {
    const { level, nickname, selectClassify } = this.props;
    const { currentActive } = this.state;
    const isLogin = Boolean(nickname);
    return (
      <div className={ less.nav }>

        <div className={ less["user-nickname"] }>

          { isLogin ? <Fragment>
            <h3>{ nickname }</h3>
            <div>
              <span> 等级 </span>
              <StarButton level={ level } readonly/>
            </div>
          </Fragment> : ""
          }
        </div>
        <div className={ less.classify }>
          <ul className={ less["nav-ul"] }>
            <li onClick={
              () => {
                this.setState({ currentActive: 0 });
                selectClassify(this.state.classify[0]);
              }
            }>
              <NavItem text="前端" icon="icon-icons8-javascript" active={ currentActive === 0 }/>
            </li>
            <li onClick={
              () => {
                this.setState({ currentActive: 1 });
                selectClassify(this.state.classify[1]);
              }
            }>
              <NavItem text="后端" icon="icon-icons8-php-logo" active={ currentActive === 1 }/>
            </li>
            <li onClick={
              () => {
                this.setState({ currentActive: 2 });
                selectClassify(this.state.classify[2]);
              }
            }>
              <NavItem text="编程语言" icon="icon-icons8-c" active={ currentActive === 2 }/>
            </li>
            <li onClick={
              () => {
                this.setState({ currentActive: 3 })
              }
            }>
              <NavItem text="更多分类" icon="icon-icons8-menu-filled" active={ currentActive === 3 }/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

HeadMiddle.propTypes = {
  nickname: PropTypes.string,
  level: PropTypes.number,
  selectClassify: PropTypes.func
};

export default HeadMiddle
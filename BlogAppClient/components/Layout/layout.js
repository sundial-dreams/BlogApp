import React from "react";
import less from "./layout.less";
import PropTypes from "prop-types";

export const LeftRightLayout = props => {
  const { children: [leftElement, rightElement], leftWidth } = props;
  if (!(leftElement && rightElement)) throw new Error("the component need two children");
  return (
    <div className={ less["left-right-layout"] }>
      <div className={ less.left }
           style={ { flex: `auto auto ${ leftWidth }px` } }>
        { leftElement }
      </div>
      <div className={ less.right } >
        { rightElement }
      </div>
    </div>
  )
};
LeftRightLayout.propTypes = {
  children: PropTypes.array,
  leftWidth: PropTypes.number
};

export const LeftMiddleRightLayout = props => {
  const { children: [leftElement, middleElement, rightElement], flex = [1, 1, 1] } = props;
  if (!(leftElement && middleElement && rightElement)) throw new Error("children not null");
  return (
    <div className={ less["left-middle-right-layout"] }>
      <div className={ less.left } style={ { flex: flex[0] } }>
        { leftElement }
      </div>
      <div className={ less.middle } style={ { flex: flex[1] } }>
        { middleElement }
      </div>
      <div className={ less.right } style={ { flex: flex[2] } }>
        { rightElement }
      </div>
    </div>
  )
};
LeftMiddleRightLayout.propTypes = {
  children: PropTypes.array,
  flex: PropTypes.array
};
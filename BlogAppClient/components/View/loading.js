import React from "react";
import less from "./style.less";

function ArticleLoading (props) {

  return (
    <div className={ less.loading }>
      <div className={less.main}>
        <span>{ "<" }</span>
        <span>blog <sup>2</sup></span>
        <span>{ "/>" }</span>
        <div>
          <span>LOADING</span>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </div>
  )
}

export default ArticleLoading

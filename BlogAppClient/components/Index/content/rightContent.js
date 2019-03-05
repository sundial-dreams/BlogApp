import React from "react";
import less from "./style.less";
import { UserPicture } from "components/component/component";
import PropTypes from "prop-types";

const TopicItem = props => {
  const { userPicture, title, author, publish } = props;
  return (
    <div className={ less["hot-content"] }>
      <div className={ less["hot-left"] }>
        <UserPicture picture={ userPicture } size={ 50 }/>
      </div>
      <div className={ less["hot-right"] }>
        <h4>{ title }</h4>
        <div>
          <span>by{ " " + author }</span>
          <span>{ publish }</span>
        </div>
      </div>
    </div>
  )
};

TopicItem.propTypes = {
  userPicture: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publish: PropTypes.string
};

const RightContent = props => {
  return (
    <div className={ less["right-content"] }>
      <div className={ less["hot"] }>
        <div className={ less["hot-title"] }>
          <h3>
            HOT
          </h3>
          <button>MORE</button>
        </div>
        <ul>
          {
            [2, 3, 4, 5].map(v => <li key={ v }>
              <TopicItem userPicture="/static/img/test-head.jpg"
                         title="javascript async"
                         publish="2018-01-03"
                         author="dpf"/>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
};

export default RightContent;
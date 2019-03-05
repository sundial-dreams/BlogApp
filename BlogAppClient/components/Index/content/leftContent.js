import React from "react";
import less from "./style.less";
import PropTypes from "prop-types";
import StarButton from "components/app/button/starButton";
import { UserPicture } from "components/component/component";

const CollectItem = props => (
  <div className={ less["collect-item"] }>
    <div className={ less["collect-item-left"] }>
      <UserPicture picture={ props.picture } size={ 50 }/>
    </div>
    <div className={ less["collect-item-right"] }>
      <h3>
        { props.title }
      </h3>
      <StarButton level={ props.articleLevel } readonly/>
    </div>
  </div>
);
CollectItem.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  articleLevel: PropTypes.number
};

const LeftContent = props => {
  return (
    <div className={ less["left-content"] }>
      <div className={ less["left-content-collect"] }>
        <div className={ less["collect-title"] }>
          <h3>
            <i className="fa fa-book"/>{ " " }收藏集
          </h3>
          <button>
            More
          </button>
        </div>
        <ul>
          {
            [1, 2, 3, 4].map((v) =>
              <li key={v}>
                <CollectItem picture="/static/img/test-head.jpg" title="javascript async" articleLevel={ 5 }/>
              </li>)
          }
        </ul>
      </div>
      <div className={ less["left-content-comment"] }>
        <div className={ less["comment-title"] }>
          <h3>
            <i className="fa fa-users"/>{ " " }最新评论
          </h3>
          <button>
            More
          </button>
        </div>
        <ul>
          {
            [1, 2, 3, 4].map(() => <li>
              <div>
                <p>
                  <strong>
                    dpf comment:
                  </strong>
                  it is ok
                </p>
              </div>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
};
export default LeftContent;
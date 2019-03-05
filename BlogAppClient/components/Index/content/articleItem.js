import less from "./style.less";
import { UserPicture } from "components/component/component";
import StarButton from "components/app/button/starButton";
import PropTypes from "prop-types";
import React from "react";
import { convertTime } from "utils/utils";

const ArticleItem = props => {
  const {
    user,
    article,
    onClick
  } = props;
  const time = convertTime(Date.now() - parseInt(article.publishTime));
  return (
    <div className={ less["article-item"] }>
      <div className={ less.left }>
        <UserPicture picture={ user.picture } size={ 60 } url={ {
          pathname: "/user",
          query: { id: user.userId }
        } }/>
      </div>
      <div className={ less.right }>
        <div className={ less["article-info"] }>
          <h3>{ user.nickname }</h3>
          <p>about{ " " + time + " " }ago</p>
          <span>{ new Date(parseInt(article.publishTime)).toDateString() }</span>
        </div>
        <div className={ less["article-text"] } onClick={ onClick }>
          <div className={ less.picture }>
            <img src={ article.image ? article.image : "/static/img/test-article.jpg" } alt="none"/>
          </div>
          <div className={ less["title"] }>
            <div className={ less["title-left"] }>
              <h2>{ article.title }</h2>
              <p>分类: { " " + article.classify + "   " } 标签: { article.name }</p>
            </div>
            <div className={ less["title-right"] }>
              <span>推荐指数: </span><StarButton level={ article.level } readonly/>
            </div>
          </div>
        </div>
        <div className={ less["article-script"] }>
          <div className={ less["script-left"] }>
            <span><i className="fa fa-star"/>{ " " }{ article.likeNumber }</span>
            <span><i className="fa fa-comment"/>{ " " }{ article.commentNumber }</span>
            <span><i className="fa fa-share"/>{ " " }{ article.shareNumber }</span>
          </div>
          <div className={ less["script-right"] }>
            <button>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  )

};

ArticleItem.propTypes = {
  user: PropTypes.objectOf({
    nickname: PropTypes.string,
    picture: PropTypes.string,
    userId: PropTypes.string
  }),
  article: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string,
    level: PropTypes.number,
    likeNumber: PropTypes.number,
    commentNumber: PropTypes.number,
    shareNumber: PropTypes.number,
    image: PropTypes.string,
    classify: PropTypes.string,
    name: PropTypes.string,
    publishTime: PropTypes.string
  }),
  onClick: PropTypes.func
};
export default ArticleItem;

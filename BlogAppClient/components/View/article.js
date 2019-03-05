import React, { Component } from "react";
import less from "./style.less";
import { UserPicture } from "components/component/component";
import Head from "next/head";
import Comment from "./comment";
import PropTypes from "prop-types";

export default class Article extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { articleState, comments } = this.props;
    return (
      <div className={ less.article }>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/editor.css"/>
        </Head>
        <div className={ less["article-title"] }>
          { articleState.title }
        </div>
        <div className={ less["article-info"] }>
          <span>
            <UserPicture picture={ articleState.picture } size={ 60 } url={ {pathname: "/user", query: {id: articleState.userId}} }/>
          </span>
          <span>
            <h3>{ articleState.nickname }</h3>
          </span>
          <span>
            阅读{ " " + articleState.readNumber }
          </span>
          <span>
            发布于 { " " + new Date(parseInt(articleState.publishTime)).toDateString() }
          </span>
          <span className={ less.more }>
            <button>
              More
            </button>
          </span>
        </div>
        <div className={ less["article-body"] }>
          <div dangerouslySetInnerHTML={ { __html: articleState.text } } className={ less.text }>
          </div>
        </div>
        <Comment comments={ comments } articleId={ articleState.articleId } userId={ articleState.userId }/>
      </div>
    );
  }
}

Article.propTypes = {
  articleState: PropTypes.object,
  comments: PropTypes.array
};
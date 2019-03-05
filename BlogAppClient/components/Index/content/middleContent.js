import React from "react";
import less from "./style.less";
import ArticleItem from "./articleItem";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { QUERY_ARTICLE_BY_CLASSIFY } from "GQL/Query";
import { ArticleLading } from "../loading/loading";
import Router from "next/router";

const QueryArticle = props => (
  <Query query={ QUERY_ARTICLE_BY_CLASSIFY() } variables={ { classify: props.classify } }>
    {
      ({ loading, error, data: { article } }) => {
        if (loading) return <ArticleLading/>;
        if (error) return "error";
        return (
          <ul>
            {
              article.sort((a,b) => parseInt(b.publishTime) - parseInt(a.publishTime)).map((v, i) => <li key={ i }>
                <ArticleItem
                  user={ {
                    nickname: v.nickname,
                    picture: v.picture,
                    userId: v.userId
                  } }
                  article={ Object.assign({ ...v }, {
                    level: 4,
                  }) }
                  onClick={ () => Router.push({
                    pathname: "/view",
                    query: {id : v.id}
                  }) }
                />
              </li>)
            }
          </ul>
        )
      }
    }
  </Query>
);
QueryArticle.propTypes = {
  classify: PropTypes.string
};

const MiddleContent = props => {
  return (
    <div className={ less["middle-content"] }>
      <div className={ less.article }>
        <QueryArticle classify={ props.classify }/>
      </div>
    </div>
  )
};

MiddleContent.propTypes = {
  classify: PropTypes.object
};

export default MiddleContent;
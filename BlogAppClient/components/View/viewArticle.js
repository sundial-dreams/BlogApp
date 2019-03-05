import React, { Component, Fragment } from "react";
import less from "./style.less";
import ToolButton from "components/app/toolButton/toolButton";
import Article from "./article";
import { withRouter } from "next/router";
import { QUERY_ARTICLE_AND_COMMENT_BY_ID, getArtCommById } from "GQL/Query";
import { Query } from "react-apollo";
import UserInfo from "./userInfo";
import ToolBox from "./toolBox";
import Loading from "./loading";

class ViewBlog extends Component {
  constructor (props) {
    super(props);
  }


  render () {

    return (
      <div className={ less["view-blog"] }>
        <Query query={ QUERY_ARTICLE_AND_COMMENT_BY_ID() }
               variables={ { id: this.props.router.query.id } }
        >
          {
            ({ loading, err, data: { articleById, commentByArticleId } }) => {
              if (loading) return <Loading/>;
              if (err) return "err";

              return (
                <Fragment>
                  <div className={ less.left }>
                    <ToolBox { ...articleById } articleId={ this.props.router.query.id }/>
                  </div>
                  <div className={ less.middle }>
                    <Article articleState={ Object.assign(articleById, { articleId: this.props.router.query.id }) }
                             comments={ commentByArticleId }
                    />
                  </div>
                  <div className={ less.right }>
                    <UserInfo userState={
                      articleById
                    }/>
                  </div>
                  <ToolButton/>
                </Fragment>
              )

            }
          }
        </Query>
      </div>
    );
  }
}


export default withRouter(ViewBlog);



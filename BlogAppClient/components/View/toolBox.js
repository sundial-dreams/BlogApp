import React, { Component } from "react";
import less from "./style.less";
import Button from "components/app/button/articleButton";
import { connect } from "react-redux";
import { LIKE_ARTICLE } from "GQL/Mutation";
import gqlClient from "GQL/GraphQL";
import PropTypes from "prop-types";

class ToolBox extends Component {
  constructor (props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state = {
      isLike: false,
      likeNumber: 0
    };
  }

  handleLike () {
    gqlClient.mutate({
      mutation: LIKE_ARTICLE(),
      variables: { id: this.props.articleId }
    }).then(() => {
      this.setState({
        isLike: true,
        likeNumber: this.state.likeNumber + 1
      })
    })
  }
 componentDidMount () {
    this.setState({
      likeNumber: this.props.likeNumber
    })
 }

  render () {
    const { userState: { isLogin }, collectionNumber, shareNumber, commentNumber } = this.props;
    return (
      <div className={ less["tool-box"] }>
        {
          isLogin ? <ul>
            <li>
              <Button currentNumber={ this.state.likeNumber }
                      disabled={ this.state.isLike }
                      icon="fa fa-thumbs-up"
                      onClick={ this.handleLike }
              />
            </li>
            <li>
              <Button currentNumber={ collectionNumber }
                      disabled={ false }
                      icon="fa fa-star"
                      onClick={ () => this.setState(state => ({ number: state.number + 1 })) }
                      style={ "style2" }
              />
            </li>
            <li>
              <Button currentNumber={ commentNumber }
                      disabled={ false }
                      icon="fa fa-comment-alt"
                      onClick={ () => this.setState(state => ({ number: state.number + 1 })) }
                      style={ "style3" }
              />
            </li>
            <li className={ less.share }>
              SHARE
            </li>
            <li>
              <Button currentNumber={ shareNumber }
                      disabled={ false }
                      icon="fa fa-share-square"
                      onClick={ () => this.setState(state => ({ number: state.number + 1 })) }
                      style={ "style4" }
                      noTip
              />
            </li>
            <li>
              <Button currentNumber={ this.state.number }
                      disabled={ false }
                      icon="fa fa-question"
                      onClick={ () => this.setState(state => ({ number: state.number + 1 })) }
                      style={ "style5" }
                      noTip
              />
            </li>
          </ul> : ""
        }
      </div>
    );
  }
}

ToolBox.propTypes = {
  userState: PropTypes.object,
  likeNumber: PropTypes.number,
  commentNumber: PropTypes.number,
  collectionNumber: PropTypes.number,
  shareNumber: PropTypes.number,
  articleId: PropTypes.string
};
export default connect(state => ({
  userState: state.user
}))(ToolBox)
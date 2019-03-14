import React, { Component } from "react";
import less from "./style.less";
import { UserPicture } from "components/component/component";
import PropTypes from "prop-types";
import { mergeClassName } from "utils/utils";
import { connect } from "react-redux";
import { CREATE_COMMENT, toCreateComment } from "GQL/Mutation";
import { QUERY_REPLY_BY_COMMENT_ID, getReplyByCommId } from "GQL/Query";
import gqlClient from "GQL/GraphQL";

const ReplyItem = props => {
  return (
    <div className={ less["reply-item"] }>
      <div className={ less["user-avatar"] }>
        <UserPicture picture={ "/static/img/test-head.jpg" } size={ 40 }/>
        <span>dpf</span>
      </div>
      <div className={ less["reply-body"] }>
        <span>
          te
        </span>
        <span>
          2018-01-04
        </span>
      </div>
    </div>
  )
};

ReplyItem.props = {};

class ReplyComment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false,
      text: ""
    };
  }

  render () {
    return (
      <div className={ mergeClassName(less["reply-comment"], this.state.active && less["reply-active"]) }>
        <button onClick={ () => this.setState(state => ({ active: !state.active })) }>
          回复
        </button>
        <div className={ less["reply-textarea"] }>
          <textarea placeholder="write reply..." value={ this.state.text }
                    onChange={ e => this.setState({ text: e.target.value }) }/>
          <button>
            发表
          </button>
        </div>
      </div>
    )
  }
}

class CommentItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      reply: []
    }
  }

  componentDidMount () {
    getReplyByCommId(this.props.comment.id)
      .then((reply) => {
        this.setState({ reply })
      });

    // gqlClient.query({
    //   query: QUERY_REPLY_BY_COMMENT_ID(),
    //   variables: { id: this.props.comment.id }
    // }).then(({ data: { replyByComment } }) => replyByComment)
    //   .then(reply => {
    //     this.setState({
    //       reply
    //     })
    //   })
  }

  render () {
    const { comment, userId } = this.props;
    return (
      <div className={ less["comment-item"] }>
        <div className={ less["comment-head"] }>
          <UserPicture picture={ comment.picture } size={ 50 } url={ { pathname: "/user", id: userId } }/>
          <span>
        { comment.nickname }
      </span>
          <span>
        { new Date(parseInt(comment.time)).toDateString() }
      </span>
        </div>
        <div className={ less["comment-body"] }>
      <span>
      { comment.text }
      </span>
        </div>
        <div className={ less["reply"] }>
          <ul>
            {
              this.state.reply.map((v, i) => <li key={ i }>
                <ReplyItem/>
              </li>)
            }
          </ul>
        </div>
        <div className={ less["comment-reply"] }>
          <ReplyComment/>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object,
  userId: PropTypes.string
};

class WriteComment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false,
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handlePost () {
    const { handlePost } = this.props;
    this.setState({
      active: false,
      text: ""
    });
    handlePost(this.state.text)
  }

  render () {

    return (
      <div className={ mergeClassName(less["write-comment"], this.state.active && less["write-comment-active"]) }>
        <button onClick={ () => {
          this.setState(state => ({ active: !state.active }))
        } }>
          写评论
        </button>
        <div className={ less["input-comment"] }>
          <textarea placeholder="write some comment..."
                    onChange={ this.handleChange }
                    value={ this.state.text }/>
          <button className={ less["post-comment"] }
                  onClick={ this.handlePost }
          >
            发表
          </button>
        </div>
      </div>
    )
  }
}

WriteComment.propTypes = {
  handlePost: PropTypes.func
};

class Comment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: []
    };
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount () {
    this.setState({
      comments: this.props.comments.sort((a, b) => parseInt(b.time) - parseInt(a.time))
    })
  }

  handlePost (commentText) {
    const { picture, nickname, id } = this.props.userState;
    const { articleId } = this.props;
    const now = Date.now().toString();
    toCreateComment({ time: now, text: commentText, userId: id, articleId })
      .then(({ err, message }) => {
        if (err === "true") return "err";

        this.setState(state => ({
          comments: [...state.comments, {
            picture,
            nickname,
            time: now,
            text: commentText
          }].sort((a, b) => parseInt(b.time) - parseInt(a.time))
        }))
      });
    /*gqlClient.mutate({
      mutation: CREATE_COMMENT(),
      variables: {
        input: { time: now, text: commentText, userId: id, articleId }
      }
    })
      .then(({ data }) => data)
      .then(({ err, message }) => {
        console.log(err, message);
        if (err) return "err";
        this.setState(state => ({
          comments: [...state.comments, {
            picture,
            nickname,
            time: now,
            text: commentText
          }].sort((a, b) => parseInt(b.time) - parseInt(a.time))
        }));
      })*/
  }

  render () {

    const { userState: { isLogin } } = this.props;
    return (
      <div className={ less["article-comment"] }>
        <h3>Comment
          <span>
            {
              isLogin ? <WriteComment handlePost={ this.handlePost }/> : ""
            }
        </span>
        </h3>
        <ul>
          {
            this.state.comments.map((v, i) => <li key={ i }>
              <CommentItem comment={ v } userId={ this.props.userId }/>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

Comment.propTypes = {
  comments: PropTypes.array,
  userState: PropTypes.object,
  articleId: PropTypes.string,
  userId: PropTypes.string
};

export default connect(state => ({ userState: state.user }))(Comment)
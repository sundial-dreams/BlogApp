import React, { Component } from "react";
import less from "./style.less";
import RichEditor from "./richEditor";
import EditorHead from "./head";
import { EditorState, convertToRaw } from "draft-js";
import gqlClient from "GQL/GraphQL";
import { POST_ARTICLE, toPostArticle } from "GQL/Mutation";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import draftToHtml from "draftjs-to-html";
import Router from "next/router";

class Editor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      articleTitle: "",
      editorState: EditorState.createEmpty()
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditorStateChange = this.handleEditorStateChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleEditorStateChange (editorState) {
    this.setState(
      { editorState }
    )
  }

  handleTitleChange (e) {
    this.setState({
      articleTitle: e.target.value
    })
  }

  handlePost (classifyName, labelId) {
    const html = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(html, html.split(/"/).join("\\\""));
    toPostArticle({
      classify: classifyName,
      label: labelId,
      author: this.props.userState.id,
      title: this.state.articleTitle,
      text: html
    }).then((createArticle) => {
      if (createArticle.err) {
        return createArticle.message
      }
      Router.push({ pathname: "/view", query: { id: createArticle.response.id } })
        .then(() => {
          console.log("ok")
        });
    });
    // gqlClient.mutate({
    //   mutation: POST_ARTICLE(),
    //   variables: {
    //     input: {
    //       classify: classifyName,
    //       label: labelId,
    //       author: this.props.userState.id,
    //       title: this.state.articleTitle,
    //       text: html
    //     }
    //   }
    // }).then(({ data }) => data)
    //   .then(({ createArticle }) => {
    //     if (createArticle.err) {
    //       return createArticle.message
    //     }
    //     Router.push({ pathname: "/view", query: { id: createArticle.response.id } })
    //       .then(() => {
    //         console.log("ok")
    //       });
    //   })
  }

  render () {
    return (
      <div className={ less.editor }>
        <div className={ less.head }>
          <EditorHead title={ this.state.articleTitle }
                      onTitleChange={ this.handleTitleChange }
                      handlePost={ this.handlePost }
          />
        </div>
        <div className={ less.body }>
          <RichEditor editorState={ this.state.editorState }
                      onEditorStateChange={ this.handleEditorStateChange }/>
        </div>
      </div>
    )
  }
}

Editor.propTypes = {
  userState: PropTypes.object
};

export default connect(state => ({ userState: state.user }))(Editor)

import React, { Component } from "react";
import less from "./style.less";
import Head from "next/head";
import { Editor } from "react-draft-wysiwyg";
import PropTypes from "prop-types";

export default class RichEditor extends Component {
  constructor (props) {
    super(props);
  }


  render () {
    const { editorState, onEditorStateChange } = this.props;
    return (
      <div className={ less["rich-editor"] }>
        <Head>
          <link rel="stylesheet"
                href="/static/css/editor.css"
                type="text/css"
          />
        </Head>
        <Editor
          editorState={ editorState }
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={ onEditorStateChange }
          placeholder="Write article..."
        />
      </div>
    )

  }
}

RichEditor.propTypes = {
  editorState: PropTypes.object.isRequired,
  onEditorStateChange: PropTypes.func.isRequired
};

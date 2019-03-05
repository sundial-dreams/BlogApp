import React, { Component } from "react";
import less from "./style.less";
import Markdown from "react-markdown/with-html";
import CodeBlock from "./codeBlock";
import PropTypes from "prop-types";

export default class MarkdownTransform extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    const { source } = this.props;
    console.log(source);
    return (
      <div className={ less["markdown-transform"] }>
        <Markdown
          className={ less.results }
          source={ source }
          escapeHtml={ false }
          renderers={ { code: CodeBlock } }
        />
      </div>
    )
  }
}
MarkdownTransform.propTypes = {
  source: PropTypes.string
};




import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import less from "./style.less";
import Head from "next/head";
import highlight from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

highlight.registerLanguage("javascript", javascript);

export default class CodeBlock extends Component {
  constructor (props) {
    super(props);
    this.code = createRef();
  }

  componentDidMount () {
    highlight.highlightBlock(this.code)
  }

   componentWillUnmount () {
     highlight.highlightBlock(this.code);
   }

  render () {
    const { value, language } = this.props;
    console.log("this", value);
    return (
      <div className={ less["code-highlight"] }>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/code.css"/>
        </Head>
        <pre>
          <code ref={ this.code } className={ `language-${ language }` }>
            { value }
          </code>
        </pre>
      </div>
    )
  }
}
CodeBlock.defaultProps = {
  language: "javascript"
};
CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
};




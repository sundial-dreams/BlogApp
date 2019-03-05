import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./style.less";
import { mergeClassName } from "utils/utils";
import gqlClient from "GQL/GraphQL";
import {
  QUERY_CLASSIFY_AND_LABEL,
  QUERY_LABEL_BY_CLASSIFY,
  getClassifyLabel,
  getLabelByClassify,
  getAllClassify
} from "GQL/Query";

const defaultClassify = "前端";

class PostMenu extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      isShowMenu,
      initState,
      handleSelectClassify,
      handleSelectLabel,
      currentClassify,
      currentLabel,
      handlePost
    } = this.props;
    return (
      <div className={ mergeClassName(less["post-selection"], isShowMenu && less["show-menu"]) }>
        <h2>发布文章</h2>
        <h3>分类</h3>
        <div className={ less["classify"] }>
          {
            initState.classify ? initState.classify.map(({ name }, i) =>
              <span className={ currentClassify === i ? less.check : "" }
                    onClick={ () => {
                      handleSelectClassify(name)
                    } }>{ name }</span>) : ""
          }
        </div>
        <h3>标签</h3>
        <div className={ less["label"] }>
          {
            initState.label ? initState.label.map(({ name }, i) =>
              <span className={ currentLabel === i ? less["label-check"] : "" } onClick={ () => {
                handleSelectLabel(name);
              } }>{ name }<i className="fa fa-check"/></span>) : ""
          }
        </div>
        <button onClick={ handlePost }>发布</button>
      </div>
    );
  }
}

PostMenu.propTypes = {
  isShowMenu: PropTypes.bool.isRequired,
  initState: PropTypes.object,
  handleSelectClassify: PropTypes.func,
  handleSelectLabel: PropTypes.func,
  currentClassify: PropTypes.number,
  currentLabel: PropTypes.number,
  handlePost: PropTypes.func
};


export default class Post extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isShowMenu: false,
      classify: [],
      label: [],
      currentClassify: 0,
      currentLabel: 0
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleSelectClassify = this.handleSelectClassify.bind(this);
    this.handleSelectLabel = this.handleSelectLabel.bind(this);
  }

  handleSelectClassify (name) {
    const classify = this.state.classify.map(({ name }) => name);
    this.setState({
      currentClassify: classify.indexOf(name)
    });
    getLabelByClassify(name).then(label => this.setState({ label }));
    // gqlClient.query({
    //   query: QUERY_LABEL_BY_CLASSIFY(),
    //   variables: { classify: name }
    // }).then(({ data }) => data)
    //   .then(({ labelByClassify }) => {
    //     this.setState({ label: labelByClassify })
    //   })
  }

  handleSelectLabel (name) {
    const label = this.state.label.map(({ name }) => name);
    this.setState({
      currentLabel: label.indexOf(name)
    });
  }

  handlePost () {
    const { classify, currentClassify, label, currentLabel } = this.state;
    const currentClassifyName = classify.map(({ name }) => name)[currentClassify];
    const currentLabelId = label.map(({ id }) => id)[currentLabel];
    this.props.handlePost(currentClassifyName, currentLabelId);
  }

  componentDidMount () {
    getAllClassify(defaultClassify).then(
      ({ labelByClassify, classify }) => {
        console.log(labelByClassify, classify);
        this.setState({
          classify,
          label: labelByClassify
        })
      }
    );
    // gqlClient.query({
    //   query: QUERY_CLASSIFY_AND_LABEL(),
    //   variables: { defaultClassify }
    // }).then(({ data }) => data).then(({ labelByClassify, classify }) => {
    //   console.log(labelByClassify, classify);
    //   this.setState({
    //     classify,
    //     label: labelByClassify
    //   })
    // })
  }

  render () {
    const { isShowMenu } = this.state;
    return (
      <div className={ mergeClassName(less["post-article"], isShowMenu && less.active) }>
        <button onClick={
          () => this.setState(state => ({
            isShowMenu: !state.isShowMenu
          }))
        }>
          POST <i className={ isShowMenu ? "fa fa-caret-up" : "fa fa-caret-down" }/>
        </button>
        <div className={ less["post-menu"] }>
          <PostMenu isShowMenu={ isShowMenu }
                    initState={ { classify: this.state.classify, label: this.state.label } }
                    handleSelectClassify={ this.handleSelectClassify }
                    handleSelectLabel={ this.handleSelectLabel }
                    currentLabel={ this.state.currentLabel }
                    currentClassify={ this.state.currentClassify }
                    handlePost={ this.handlePost }
          />
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  handlePost: PropTypes.func
};

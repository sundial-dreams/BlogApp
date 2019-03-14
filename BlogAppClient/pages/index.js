import React, { Component, Fragment, createRef } from "react";
import IndexHead from "components/Index/head/indexHead";
import IndexContent from "components/Index/content/indexContent";
import IndexLoading from "components/Index/loading/loading";
import ToolButton from "components/app/toolButton/toolButton";

export default class Index extends Component {
  static async getInitialProps (args) {
        console.log("error");
  }

  constructor (props) {
    super(props);
    this.state = {
      child: <IndexLoading/>,
      currentClassify: "前端"
    };
      this.handleSelectClassify = this.handleSelectClassify.bind(this);
  }

  handleSelectClassify(classify) {
      this.setState({
        currentClassify: classify
      })
  }

  render () {
    // setTimeout(() => this.setState({
    //   child: <Fragment>
    //     <IndexHead/>
    //     <IndexContent/>
    //   </Fragment>
    // }), 0);
    return (
      <div id="index" className="__page">
        <Fragment>
          <IndexHead onSelectClassify={this.handleSelectClassify}/>
          <IndexContent classify={this.state.currentClassify}/>
        </Fragment>
        <ToolButton/>
      </div>
    );
  }
}


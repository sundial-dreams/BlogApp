import React, { Component } from "react";
import { LeftMiddleRightLayout } from "components/Layout/layout";
import less from "./loading.less";

export default class Loading extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={ less.loading }>
        <div className={ less.head }>
          <LeftMiddleRightLayout flex={ [1, 2, 1] }>
            <div className={ less.left }>
              <div className={ less.picture }/>
              <div className={ less.other }/>
            </div>
            <div className={ less.middle }/>
            <div className={ less.right }/>
          </LeftMiddleRightLayout>
        </div>
        <div className={ less.content }>
          <LeftMiddleRightLayout flex={ [1, 2, 1] }>
            <div className={ less["content-left"] }>
              <div className={ less["left-item1"] }>
                <div className={ less["item1-title"] }/>
                <div className={ less["item1-content"] }>
                  {
                    Array.from({ length: 9 },
                      v => <div className={ less["item1-item"] }/>
                    )
                  }
                </div>
              </div>
              <div className={ less["left-item2"] }>
                <div className={ less["left-item2-title"] }/>
                <div className={ less["left-item2-content"] }/>
              </div>
            </div>
            <div className={ less["content-middle"] }>
              <div className={ less["middle-item1"] }>
                <div className={ less["middle-item1-picture"] }/>
                <div className={ less["middle-item1-content"] }>
                  <div className={ less.name }/>
                  <div className={ less["article-content"] }>
                    <div className={ less.picture }/>
                    <div className={ less.title }/>
                  </div>
                </div>
              </div>
              <div className={ less["middle-item2"] }>
                <div className={ less["middle-item2-picture"] }/>
                <div className={ less["middle-item2-content"] }>
                  <div className={ less.name }/>
                  <div className={ less["article-content"] }>
                    <div className={ less.title }/>
                  </div>
                </div>
              </div>
            </div>
            <div className={ less["content-right"] }>
              <div className={ less["right-item"] }/>
            </div>
          </LeftMiddleRightLayout>
        </div>
      </div>
    )
  }
}

export const ArticleLading = props => (
  <div className={ less["content-middle"] }>
    <div className={ less["middle-item1"] }>
      <div className={ less["middle-item1-picture"] }/>
      <div className={ less["middle-item1-content"] }>
        <div className={ less.name }/>
        <div className={ less["article-content"] }>
          <div className={ less.picture }/>
          <div className={ less.title }/>
        </div>
      </div>
    </div>
    <div className={ less["middle-item2"] }>
      <div className={ less["middle-item2-picture"] }/>
      <div className={ less["middle-item2-content"] }>
        <div className={ less.name }/>
        <div className={ less["article-content"] }>
          <div className={ less.title }/>
        </div>
      </div>
    </div>
  </div>);

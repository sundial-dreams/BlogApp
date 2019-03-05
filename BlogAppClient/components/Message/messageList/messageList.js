import React from "react";
import less from "./style.less";
import MessageItem from "./messageItem";

export default class MessageBox extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={ less.message }>
        <div className={ less["message-head"] }>
          <div className={ less["head-left"] }>
            <h3>daydream</h3>
            <p>love some thing</p>
          </div>
          <div className={ less["head-right"] }>
            <button>
              ...
            </button>
          </div>
        </div>
        <div className={ less["message-box"] }>
          <ul>
            {
              Array.from({ length: 8 }, (v, i) =>
                <li key={ i }>
                  <MessageItem
                    right={ i % 2 === 0 }
                    message={"hello"}
                    picture={"/static/img/test-head.jpg"}
                  />
                </li>)
            }
          </ul>
        </div>
        <div className={ less["message-input"] }>
          <div className={ less["input-left"] }>
            <input placeholder="type something to send..."/>
          </div>
          <div className={ less["input-right"] }>
            <button>
              <i className="fa fa-smile"/>
            </button>
            <button>
              <i className="fa fa-paper-plane"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
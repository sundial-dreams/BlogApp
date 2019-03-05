import React from "react";
import less from "./style.less";
import PropTypes from "prop-types";

export default class StarButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      star: [0, 0, 0, 0, 0]
    };
  }

  componentDidMount () {
    const { level } = this.props;
    this.setState({
      star: [0, 0, 0, 0, 0].fill(1, 0, level)
    })
  }

  render () {

    return (
      <div className={ less["star-button"] }>
        {
          this.state.star.map((v, i) => <span
            key={ i }
            className={ v ? less.active : "" }
            onClick={
              this.props.readonly ? () => {} : ((i) => () => this.setState({ star: [0, 0, 0, 0, 0].fill(1, 0, i + 1) }))(i)
            }>
            <i className="fa fa-star"/>
                     </span>
          )
        }
      </div>
    )
  }
}
StarButton.propTypes = {
  level: PropTypes.number,
  readonly: PropTypes.bool
};

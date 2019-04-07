import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { name } = this.props;
    return (
      <textarea
        className="form-control"
        name={name}
        onChange={this.props.onChange}
        value={this.props.other}
      />
    );
  }
}

export default TextArea;

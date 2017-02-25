import React, { Component } from 'react';

class Piece extends Component {
  render() {
    let classNames = "piece " + this.props.color + " " + this.props.type + " " + this.props.coordinate;
    return (
      <div className={classNames} />
    );
  }
}

export default Piece;

import React, { Component } from 'react';

class Piece extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"piece " + this.props.color + " " + this.props.type + " " + this.props.coordinate} />
    );
  }
}

export default Piece;

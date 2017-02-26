import React, { Component } from 'react';

class Piece extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.state = {
      coordinates: props.coordinates
    }
  }

  get coordinates() {
    return this.state.coordinates;
  }

  set coordinates(newCoordinates) {
    this.setState({
      coordinates: newCoordinates
    });
  }

  clicked(e) {
    this.props.onClick(e, this);
  }

  render() {
    let classNames = "piece " + this.props.color + " " + this.props.type + " " + this.state.coordinates;
    return (
      <div onClick={this.clicked} className={classNames} />
    );
  }
}

export default Piece;

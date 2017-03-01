import React, { Component } from 'react';

class Piece extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);

    this.state = {
      coordinates: props.coordinates
    }
  }

  get color() {
    return this.props.color === 'b' ? 'black' : 'white';
  }

  get type() {
    return this.props.type === 'p' ? 'pawn' :
           this.props.type === 'r' ? 'rook' :
           this.props.type === 'n' ? 'knight' :
           this.props.type === 'b' ? 'bishop' :
           this.props.type === 'q' ? 'queen' :
           this.props.type === 'k' ? 'king' : this.props.type;
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
    let classNames = "piece " + this.color + " " + this.type + " " + this.coordinates;
    return (
      <div onClick={this.clicked} className={classNames} onTransitionEnd={this.props.transitionEnd} />
    );
  }
}

export default Piece;

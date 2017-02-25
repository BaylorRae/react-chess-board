import React, { Component } from 'react';

import Piece from '../components/piece';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <Piece type="pawn" color="white" coordinate="a2" />
      </div>
    );
  }
}

export default Board;

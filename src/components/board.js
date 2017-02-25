import React, { Component } from 'react';

import Piece from '../components/piece';

class Board extends Component {
  render() {
    let whitePawns = [],
        blackPawns = [];

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((v, i) => {
      blackPawns.push(v + '7');
      whitePawns.push(v + '2');
    });

    return (
      <div className="board">
        {whitePawns.map(c => <Piece key={c} type="pawn" color="white" coordinate={c} />)}
        {blackPawns.map(c => <Piece key={c} type="pawn" color="black" coordinate={c} />)}
      </div>
    );
  }
}

export default Board;

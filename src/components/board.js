import React, { Component } from 'react';
import Chess from 'chess.js';

import Piece from './piece';
import LegalSquare from './legal_square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.clickedPiece = this.clickedPiece.bind(this);
    this.clickedLegalSquare = this.clickedLegalSquare.bind(this);

    this.state = {
      activePiece: null,
      legalSquares: []
    }
  }

  componentDidMount() {
    this.chess = new Chess();
  }

  render() {
    let whitePawns = [],
        blackPawns = [];

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((v, i) => {
      blackPawns.push(v + '7');
      whitePawns.push(v + '2');
    });

    return (
      <div className="board">
        {this.state.legalSquares.map(c => <LegalSquare onClick={this.clickedLegalSquare} key={c} coordinates={c} />)}
        {whitePawns.map(c => <Piece onClick={this.clickedPiece} key={c} type="pawn" color="white" coordinates={c} />)}
        {blackPawns.map(c => <Piece onClick={this.clickedPiece} key={c} type="pawn" color="black" coordinates={c} />)}
      </div>
    );
  }

  clickedPiece(e, piece) {
    this.setState({
      activePiece: piece,
      legalSquares: this.chess.moves({ square: piece.coordinates })
    });
  }

  clickedLegalSquare(e, square) {
    this.state.activePiece.coordinates = square.coordinates;
    this.chess.move(square.coordinates);
    this.setState({
      activePiece: null,
      legalSquares: []
    });
  }
}

export default Board;

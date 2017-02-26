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
      pieces: [],
      legalSquares: []
    }
  }

  componentDidMount() {
    this.chess = new Chess();
    this._loadBoardPosition();
  }

  render() {
    const pieces = this.state.pieces.map(piece => {
      return (
        <Piece key={piece.coordinates + piece.color + piece.type} onClick={this.clickedPiece} type={piece.type} color={piece.color} coordinates={piece.coordinates} />
      );
    })

    return (
      <div className="board">
        {this.state.legalSquares.map(c => <LegalSquare onClick={this.clickedLegalSquare} key={c} coordinates={c} />)}
        {pieces}
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
    this.chess.move(square.coordinates, { sloppy: true });
    this.setState({
      activePiece: null,
      legalSquares: []
    });
    this._loadBoardPosition();
  }

  _loadBoardPosition() {
    this.setState({
      pieces: this.chess.SQUARES.map(s => {
        let piece = this.chess.get(s);

        if (piece == null)
          return null;

        return {
          coordinates: s,
          type: piece.type,
          color: piece.color
        }
      }).filter(v => v != null)
    });
  }
}

export default Board;

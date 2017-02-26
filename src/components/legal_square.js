import React, { Component } from 'react';

export default class LegalSquare extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  get coordinates() {
    return this.props.coordinates;
  }

  render() {
    return (
      <div onClick={this.clicked} className={"legal-square " + this.props.coordinates}></div>
    );
  }

  clicked(e) {
    this.props.onClick(e, this);
  }
}

import React from "react";
import cardsData from "./data";
import { shuffle } from "lodash";
import Piles from "./piles";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = shuffle(cardsData);
    this.wastePile = [];
  }

  render() {
    return (
      <div className="piles">
        <Piles deck={this.deck} />
      </div>
    );
  }
}

export default Game;

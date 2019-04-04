import React from "react";
import cardsData from "./cardDetails";
import { shuffle } from "lodash";
import Piles from "./piles";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = shuffle(cardsData);
  }

  render() {
    return (
      <div>
        <div className="piles">
          <Piles deck={this.deck} />
        </div>
      </div>
    );
  }
}

export default Game;

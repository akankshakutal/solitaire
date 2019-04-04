import React from "react";
import cardsData from "./cardDetails";
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
      <div>
        <div className="upper-pile">
          <div className="upper-pile">
            <div className="main-deck" />
            <div className="main-deck" />
          </div>
          <div className="upper-pile">
            <div className="main-deck" />
            <div className="main-deck" />
            <div className="main-deck" />
            <div className="main-deck" />
          </div>
        </div>
        <div className="piles">
          <Piles deck={this.deck} wastePile={this.wastePile} />
        </div>
      </div>
    );
  }
}

export default Game;

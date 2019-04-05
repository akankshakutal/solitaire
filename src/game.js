import React from "react";
import Piles from "./piles";
import Deck from "./model/deck";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.state = {
      wasteCards: this.deck.wasteCard(),
      piles: this.deck.getPiles(),
      drawnCards: []
    };
  }

  render() {
    return (
      <div>
        <div className="piles">
          <Piles
            wasteCards={this.state.wasteCards}
            piles={this.state.piles}
            drawnCards={this.state.drawnCards}
          />
        </div>
      </div>
    );
  }
}

export default Game;

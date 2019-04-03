import React from "react";
import Pile from "./pile";

class Piles extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
    this.state = { piles: this.setPiles() };
  }

  setPiles() {
    let piles = new Array(7).fill(0).map(() => []);
    for (let pileNumber = 0; pileNumber < 7; pileNumber++) {
      for (let cardNumber = 0; cardNumber <= pileNumber; cardNumber++) {
        piles[pileNumber].push(this.deck.pop());
      }
    }
    this.wastePile = this.deck.slice();
    return piles;
  }

  render() {
    let pilesJSX = [];
    for (let pileNum = 0; pileNum < 7; pileNum++) {
      pilesJSX.push(
        <div>
          <Pile pileNum={pileNum} piles={this.state.piles} />
        </div>
      );
    }
    return pilesJSX;
  }
}

export default Piles;

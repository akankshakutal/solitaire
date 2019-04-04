import React from "react";
import Pile from "./pile";

class Piles extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
    this.wastePile = props.wastePile;
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

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data);
    element.className = "dropped-card";
    ev.target.appendChild(element);
  }

  render() {
    let pilesJSX = [];
    for (let pileNum = 0; pileNum < 7; pileNum++) {
      let pile = <Pile pileNum={pileNum} piles={this.state.piles} />;
      pilesJSX.push(
        <div
          key={pileNum}
          style={{ margin: "5px" }}
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
        >
          {pile}
        </div>
      );
    }
    return pilesJSX;
  }
}

export default Piles;

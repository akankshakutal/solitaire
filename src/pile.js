import React from "react";
import Card from "./card";

class Pile extends React.Component {
  constructor(props) {
    super(props);
    this.pileNum = props.pileNum;
    this.state = { piles: props.piles };
  }

  render() {
    let pileJSX = [];
    let totalCardCount = this.state.piles[this.pileNum].length;
    for (let cardNum = 0; cardNum < totalCardCount; cardNum++) {
      let card = this.state.piles[this.pileNum][cardNum];
      let cardJSX = (
        <Card
          unicode={card.unicode}
          color={card.color}
          key={card.id}
          cardNum={cardNum}
          id={card.id}
        />
      );
      pileJSX.push(cardJSX);
    }
    return pileJSX;
  }
}

export default Pile;

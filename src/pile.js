import React from "react";
import Card from "./card";

class Pile extends React.Component {
  constructor(props) {
    super(props);
    this.pileData = this.props.pileData;
  }

  render() {
    let pileJSX = [];
    let totalCardCount = this.pileData.length;
    for (let cardNum = 0; cardNum < totalCardCount; cardNum++) {
      let card = this.pileData[cardNum];
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

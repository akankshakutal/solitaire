import React from "react";
import Pile from "./pile";
import Card from "./card";

class Piles extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
    const { wastePile, piles } = this.setPiles();
    this.state = { piles, wastePile, drawnCards: [] };
  }

  setPiles() {
    let piles = new Array(7).fill(0).map(() => []);
    for (let pileNumber = 0; pileNumber < 7; pileNumber++) {
      for (let cardNumber = 0; cardNumber <= pileNumber; cardNumber++) {
        piles[pileNumber].push(this.deck.pop());
      }
    }
    const wastePile = this.deck.slice();
    return { piles, wastePile };
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

  drawCard() {
    const wastePile = this.state.wastePile;
    console.log(wastePile);
    const card = wastePile.pop();
    const drawnCards = this.state.drawnCards;
    drawnCards.push(
      <Card
        unicode={card.unicode}
        color={card.color}
        key={card.id}
        id={card.id}
      />
    );
    this.setState({
      wastePile,
      drawnCards
    });
  }
  render() {
    let pilesJSX = [];
    pilesJSX.push(
      <div className="main-deck" onClick={this.drawCard.bind(this)} />
    );
    pilesJSX.push(<div className="main-deck">{this.state.drawnCards}</div>);
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

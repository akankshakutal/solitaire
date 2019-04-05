import React from "react";
import Card from "./card";

class Piles extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
    this.state = {
      wasteCards: props.wasteCards,
      piles: props.piles,
      drawnCards: props.drawnCards
    };
  }

  drop(targetPileNum, ev) {
    ev.preventDefault();
    let draggedCardId = ev.dataTransfer.getData("text");
    this.updatePiles(draggedCardId, targetPileNum);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  updatePiles(draggedCardId, targetPileNum) {
    let removedCards = this.removeCard(draggedCardId);
    this.addCard(targetPileNum, removedCards);
    this.setState(state => state);
  }

  addCard(pileNum, removedCards) {
    this.state.piles[pileNum] = this.state.piles[pileNum].concat(removedCards);
  }

  removeCard(cardId) {
    const requiredPileIndex = Object.keys(this.state.piles).find(pile =>
      this.state.piles[pile].some(x => x.id == cardId)
    );
    let requiredPile = this.state.piles[requiredPileIndex];
    if (requiredPile == undefined) {
      requiredPile = this.state.drawnCards;
    }
    let cardIndex = requiredPile.findIndex(card => card.id == cardId);
    return requiredPile.splice(cardIndex);
  }

  drawCard() {
    let card = this.state.wasteCards.pop();
    this.state.drawnCards.push(card);
    const drawnCards = this.state.drawnCards;
    drawnCards.push(
      <Card
        unicode={card.unicode}
        color={card.color}
        key={card.id}
        id={card.id}
      />
    );
    this.setState(state => state);
  }

  getPileView(pileData) {
    let pileJSX = [];
    let totalCardCount = pileData.length;
    for (let cardNum = 0; cardNum < totalCardCount; cardNum++) {
      let card = pileData[cardNum];
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

  render() {
    let pilesJSX = [];
    pilesJSX.push(
      <div className="main-deck" onClick={this.drawCard.bind(this)} />
    );
    pilesJSX.push(<div className="main-deck">{this.state.drawnCards}</div>);
    for (let pileNum = 1; pileNum < 8; pileNum++) {
      // let pile = <Pile pileData={this.state.piles[pileNum]} />;
      let pile = this.getPileView(this.state.piles[pileNum]);
      pilesJSX.push(
        <div
          key={pileNum}
          style={{ margin: "5px" }}
          onDrop={this.drop.bind(this, pileNum)}
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

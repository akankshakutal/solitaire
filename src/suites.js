import React from "react";
import Suit from "./suite";
class Suites extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
  }
  allowDrop(event) {
    this.inPlaceCard = this.createCardJson(event.target.id);
    if (this.deck.isDraggable(this.draggedCard, this.inPlaceCard)) {
      event.preventDefault();
    }
  }

  drag(event) {
    try {
      this.belowCardID =
        event.target.parentElement.children[
          event.target.parentElement.children.length - 2
        ].id;
    } catch {}
    this.draggedCard = this.createCardJson(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(event) {
    event.preventDefault();
    try {
      const belowCard = this.createCardJson(this.belowCardID);
      const cardData = this.cards.filter(card => {
        return (
          card.type === belowCard.type && card.number === "" + belowCard.number
        );
      });
      this.makeCardDragAndDroppale(cardData);
    } catch {}
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div className="final-deck">
        <Suit
          id="suit1"
          className="card"
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
        />
        <Suit
          id="suit2"
          className="card"
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
        />
        <Suit
          id="suit3"
          className="card"
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
        />
        <Suit
          id="suit4"
          className="card"
          onDrop={this.drop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
        />
      </div>
    );
  }
}

export default Suites;

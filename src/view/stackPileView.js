import React from "react";
import { EmptyCard, Default } from "../data/cardDetails";
import CardView from "./cardView";

class StackPileView extends React.Component {
  renderClosedCards(stackPile, id) {
    return new Array(stackPile.getNoOfClosedCards())
      .fill(0)
      .map(x => (
        <CardView
          className="adjustable-card"
          id={"stackPiles_" + id}
          card={Default}
        />
      ));
  }

  renderOpenCards(stackPile, id, drag, doubleClick) {
    const openCards = stackPile.getOpenCards();
    const noOfOpenCards = openCards.length;
    if (noOfOpenCards === 0) {
      return [];
    }
    return openCards.map((card, index) => {
      return (
        <CardView
          className="adjustable-card"
          card={card}
          id={"stackPiles_" + id + "_" + (noOfOpenCards - index)}
          onDragStart={drag}
          draggable="true"
          doubleClick={doubleClick}
        />
      );
    });
  }

  render() {
    const { stackPile, id, drag, drop, allowDrop, doubleClick } = this.props;
    if (!stackPile.hasCard()) {
      return (
        <div
          className="stack-pile stack-pile-separator"
          id={"stackPiles_" + id}
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <CardView
            className="card adjustable-card"
            id={"stackPiles_" + id}
            card={EmptyCard}
          />
        </div>
      );
    }
    return (
      <div
        className="stack-pile stack-pile-separator"
        id={"stackPiles_" + id}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        {this.renderClosedCards(stackPile, id)}
        {this.renderOpenCards(stackPile, id, drag, doubleClick)}
      </div>
    );
  }
}

export default StackPileView;

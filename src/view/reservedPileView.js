import React from "react";

import { EmptyCard } from "../data/cardDetails";
import CardView from "./cardView";

class ReservedPileView extends React.Component {
  render() {
    const pile = this.props.pile;

    if (pile.hasLastCard()) {
      const card = pile.getLastCard();
      return (
        <CardView
          id={"reservedPiles_" + this.props.id}
          draggable="true"
          onDragStart={this.props.drag}
          className="pile-separator"
          onDrop={this.props.drop}
          onDragOver={this.props.allowDrop}
          card={card}
        />
      );
    }

    return (
      <CardView
        id={"reservedPiles_" + this.props.id}
        className="pile-separator"
        onDrop={this.props.drop}
        onDragOver={this.props.allowDrop}
        card={EmptyCard}
      />
    );
  }
}

export default ReservedPileView;

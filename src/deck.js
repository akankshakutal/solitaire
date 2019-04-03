import React from "react";

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
  }

  render() {
    const cards = this.state.cards.map((card, index) => (
      <div key={index} className="card" style={{ color: card.getColor() }}>
        {card.getUnicode()}
      </div>
    ));
    return <div>{cards}</div>;
  }
}

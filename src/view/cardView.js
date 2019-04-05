import React from "react";

class CardView extends React.Component {
  render() {
    const {
      card,
      onClick,
      className,
      id,
      draggable,
      onDragStart,
      onDrop,
      onDragOver
    } = this.props;

    return (
      <div
        style={{ color: card.color }}
        className={"card " + className}
        id={id}
        draggable={draggable}
        onDragStart={onDragStart}
        onClick={onClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {card.unicode}
      </div>
    );
  }
}

export default CardView;

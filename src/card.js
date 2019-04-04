import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.unicode = props.unicode;
    this.color = props.color;
    this.id = props.id;
    this.cardNum = props.cardNum;
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  render() {
    let className = "card";
    if (this.cardNum == 0) {
      className = "cards";
    }
    return (
      <div
        key={this.id}
        className={className}
        style={{ color: this.color }}
        draggable="true"
        onDragStart={this.drag.bind(this)}
        id={this.id}
      >
        <div className="card-div">{this.unicode}</div>
      </div>
    );
  }
}

export default Card;

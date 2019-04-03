import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.unicode = props.unicode;
    this.color = props.color;
    this.id = props.id;
  }

  getUnicode() {
    return this.unicode;
  }

  getColor() {
    return this.color;
  }

  render() {
    return (
      <div key={this.id} className="card" style={{ color: this.color }}>
        {this.unicode}
      </div>
    );
  }
}

export default Card;

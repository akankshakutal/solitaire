class Card {
  constructor(cardDetails) {
    this.type = cardDetails.type;
    this.number = +cardDetails.number;
    this.color = cardDetails.color;
    this.unicode = cardDetails.unicode;
  }

  getUnicode() {
    return this.unicode;
  }

  checkNumber(number) {
    return this.number === number;
  }

  isNextNumber(card) {
    return this.number === card.number + 1;
  }

  isPreviousNumber(card) {
    return this.number === card.number - 1;
  }

  isOfSameType(card) {
    return this.type === card.type;
  }

  isOfSameColor(card) {
    return this.color === card.color;
  }
}

export default Card;

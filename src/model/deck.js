class Deck {
  constructor(cards) {
    this.closedCards = cards;
    this.openCards = [];
  }

  hasNext() {
    return this.closedCards.length !== 0;
  }

  hasOpenCard() {
    return this.openCards.length !== 0;
  }

  getOpenCard() {
    return this.openCards[this.openCards.length - 1];
  }

  getCards() {
    return this.openCards.slice(-1);
  }

  removeCards() {
    this.openCards.splice(-1);
  }

  update() {
    if (this.closedCards.length === 0) {
      this.closedCards = this.openCards.reverse();
      this.openCards = [];
      return;
    }
    const lastCard = this.closedCards.pop();
    this.openCards.push(lastCard);
  }
}

export default Deck;

class ReservedPile {
  constructor(cards) {
    this.cards = cards;
  }

  hasLastCard() {
    return this.cards.length !== 0;
  }

  getLastCard() {
    return this.cards[this.cards.length - 1];
  }

  checkCards(checkingCards) {
    const cards = checkingCards.slice();
    let initialCard = cards.shift();
    if (cards.length === 0) return true;
    return cards.every(card => {
      const result = initialCard.isNextForReserved(card);
      initialCard = card;
      return result;
    });
  }

  addCards(cards) {
    if (this.areAddable(cards)) {
      this.cards = this.cards.concat(cards);
      return true;
    }
    return false;
  }

  areAddable(cards) {
    if (!this.checkCards(cards)) {
      return false;
    }
    if (!this.hasLastCard()) {
      return cards[0].checkNumber(1);
    }
    return this.areOfThisTypeCards(this.getLastCard(), cards[0]);
  }

  areOfThisTypeCards(previousCard, currentCard) {
    return (
      previousCard.isPreviousNumber(currentCard) &&
      previousCard.isOfSameType(currentCard)
    );
  }
  
  getCards() {
    return this.cards.slice(-1);
  }

  removeCards() {
    this.cards.splice(-1);
  }
}

export default ReservedPile;
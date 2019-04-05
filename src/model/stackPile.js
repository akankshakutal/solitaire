class StackPile {
  constructor(closedCards, openCards) {
    this.closedCards = closedCards;
    this.openCards = openCards;
  }

  hasCard() {
    return this.openCards.length !== 0;
  }

  getNoOfClosedCards() {
    return this.closedCards.length;
  }

  getOpenCards() {
    return this.openCards;
  }

  addCards(cards) {
    if (this.areAddable(cards)) {
      this.openCards = this.openCards.concat(cards);
      return true;
    }
    return false;
  }

  getLastCard() {
    return this.openCards[this.openCards.length - 1];
  }

  areAddable(cards) {
    if (!this.checkCards(cards)) {
      return false;
    }
    if (!this.hasCard()) {
      return cards[0].checkNumber(13);
    }
    return this.areOfThisTypeCards(this.getLastCard(), cards[0]);
  }

  checkCards(checkingCards) {
    const cards = checkingCards.slice();
    const previousCardDetail = { card: cards.shift(), result: true };
    return cards.reduce((previousCardDetail, card) => {
      if (!previousCardDetail.result) {
        return previousCardDetail;
      }
      const result = this.areOfThisTypeCards(previousCardDetail.card, card);
      return { card, result };
    }, previousCardDetail).result;
  }

  areOfThisTypeCards(previousCard, currentCard) {
    return (
      previousCard.isNextNumber(currentCard) &&
      !previousCard.isOfSameColor(currentCard)
    );
  }

  getCards(noOfCards) {
    return this.openCards.slice(-noOfCards);
  }

  removeCards(noOfCards) {
    this.openCards.splice(-noOfCards);
    if (this.openCards.length === 0 && this.closedCards.length !== 0) {
      const newCard = this.closedCards.shift();
      this.openCards.push(newCard);
    }
  }
}

export default StackPile;

class Tableau {
  updatePiles(draggedCardId, targetPileNum) {
    let removedCards = this.removeCard(draggedCardId);
    this.addCard(targetPileNum, removedCards);
  }

  addCard(pileNum, removedCards) {
    this.state.piles[pileNum] = this.state.piles[pileNum].concat(removedCards);
  }

  removeCard(cardId) {
    const requiredPileIndex = Object.keys(this.state.piles).find(pile =>
      this.state.piles[pile].some(x => x.id == cardId)
    );
    const requiredPile = this.state.piles[requiredPileIndex];
    let cardIndex = requiredPile.findIndex(card => card.id == cardId);
    return requiredPile.splice(cardIndex);
  }
}

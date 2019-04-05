import cards from "../data/cardDetails";
import lodash from "lodash";

class Deck {
  constructor() {
    this.cards = cards;
    this.piles = this.createInitialPiles();
  }

  shuffleDeck() {
    return (this.cards = lodash.shuffle(this.cards));
  }

  wasteCard() {
    return this.cards;
  }

  createInitialPiles() {
    const piles = {};
    this.shuffleDeck();
    for (let count = 1; count <= 7; count++) {
      piles[count] = this.cards.splice(0, count);
    }
    return piles;
  }

  getPiles() {
    return this.piles;
  }
}

export default Deck;

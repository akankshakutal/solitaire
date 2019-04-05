import React from "react";
import ReactDOM from "react-dom";
import lodash from "lodash";

//css
import "./index.css";

//data
import { Cards } from "./data/cardDetails";

//view models
import GameView from "./view/gameView";

//game modles
import Game from "./model/game";
import Deck from "./model/deck";
import Card from "./model/card";
import ReservedPile from "./model/reservedPile";
import StackPile from "./model/stackPile";

const shuffledCards = lodash.shuffle(Cards).map(card => new Card(card));

const deckCards = [];
for (let cardNumber = 0; cardNumber < 24; cardNumber++) {
  const card = shuffledCards.shift();
  deckCards.push(card);
}

const reservedPiles = [];
for (let noOfReservedPiles = 0; noOfReservedPiles < 4; noOfReservedPiles++) {
  const reservedPile = new ReservedPile([]);
  reservedPiles.push(reservedPile);
}

const stackPiles = [];
for (let noOfStackPile = 0; noOfStackPile < 7; noOfStackPile++) {
  const closedCards = [];
  for (
    let noOfClosedCards = 0;
    noOfClosedCards <= noOfStackPile - 1;
    noOfClosedCards++
  ) {
    const card = shuffledCards.shift();
    closedCards.push(card);
  }
  const openCards = [];
  openCards.push(shuffledCards.shift());
  const stackPile = new StackPile(closedCards, openCards);
  stackPiles.push(stackPile);
}

const deck = new Deck(deckCards);
const game = new Game(deck, reservedPiles, stackPiles);

ReactDOM.render(<GameView game={game} />, document.getElementById("root"));

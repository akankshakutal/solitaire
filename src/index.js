import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./card";
import Deck from "./deck";
import cardsData from "./data";
import * as serviceWorker from "./serviceWorker";

let cards = cardsData.map(card => {
  return new Card(card);
});

ReactDOM.render(<Deck cards={cards} />, document.getElementById("root"));

serviceWorker.unregister();

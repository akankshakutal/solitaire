export default class Card {
  constructor({ unicode, color }) {
    this.unicode = unicode;
    this.color = color;
  }

  getUnicode() {
    return this.unicode;
  }

  getColor() {
    return this.color;
  }
}

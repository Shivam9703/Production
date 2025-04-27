import { LightningElement, api } from "lwc";

export default class StarRating extends LightningElement {
  @api rating = 0;
  @api max = 5;
  hoverRating = 0;

  get stars() {
    const starsArray = [];
    const current = this.hoverRating || this.rating;
    for (let i = 1; i <= this.max; i++) {
      starsArray.push({
        value: i,
        class: i <= current ? "star filled" : "star"
      });
    }
    return starsArray;
  }

  handleStarClick(event) {
    const value = Number(event.target.dataset.value);
    this.rating = value;
    this.dispatchEvent(new CustomEvent("ratingchange", { detail: value }));
  }

  handleMouseOver(event) {
    this.hoverRating = Number(event.target.dataset.value);
  }

  handleMouseOut() {
    this.hoverRating = 0;
  }
}

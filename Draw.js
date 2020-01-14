class Draw {
  constructor() {
    this.options = ["img/plum.png", "img/diamond.png", "img/luck.png"];
    let _result = this.drawResult();

    this.getDrawResult = () => _result;
  }

  drawResult() {
    let colors = [];

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];

      colors.push(color);
    }
    return colors;
  }
}

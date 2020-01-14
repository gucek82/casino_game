class Statistics {
  constructor() {
    this.gameResutls = [];
  }

  addGameToStatistics(win, bid) {
    let gameRestul = {
      win: win,
      bid: bid
    };

    this.gameResutls.push(gameRestul);
  }

  showGameStatistics() {
    let games = this.gameResutls.length;
    let wins = this.gameResutls.filter(result => result.win).length;
    let losses = this.gameResutls.filter(result => !result.win).length;

    return [games, wins, losses];
  }
}

const stats = new Statistics();

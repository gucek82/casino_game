class Wallet {
  constructor(money) {
    let _money = money;
    // pobieranie aktualnej warości portfela
    this.getWalletValue = () => _money;

    // sprawdzanie czy uzytkownik ma odpowiednią ilość srodków

    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    };

    // zmiana wartości portfela w zaleznosci od wyniku gry

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error("Nieprawdiłowa liczba");
      }
    };
  }
}

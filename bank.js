class BankAccount {
  constructor (user, money, overdraft){
    this.user = user;
    this.money = money;
    this.overdraft = overdraft;
  }
   // Ajout d'une méthode
  currentCash() {
    console.log('Le solde de ' + this.user + 'est de ' + this.money + ' BitCointCash.');
  }
  addCash(sumDeposited) {

    if ( sumDeposited > 0 ) {
      this.money = this.money + sumDeposited;
      console.log('Le nouveau solde de ' + this.user + ' est de ' + this.money + ' BitCointCash après ce dépot.');
      } else {
        console.log('Erreur ! Un dépot négatif ou null est interdit !');
      }
    }
  removCash(sumRemoved) {
    if (sumRemoved > 0) {
      let newMoney = this.money - sumRemoved;
      if (newMoney >= this.overdraft){
        this.money = newMoney;
        console.log('Le nouveau solde de ' + this.user + ' est de ' + this.money + ' BitCointCash après ce retrait.')
      } else {
        console.log('Le découvert autorisé de ' + this.user + ' ne permet pas ce retrait.');
     }

    } else {
      console.log('Erreur ! Un retrait négatif ou null est interdit !');
    }
  }
}

const picsouAccount = new BankAccount (
  "Picsou",
  76098,
  -700);

picsouAccount.currentCash();

picsouAccount.addCash(500);

picsouAccount.removCash(77298);

function Account(){
  this._balance = 0;
  this._transactionList = [];
};

Account.prototype.getBalance = function() {
  return this._balance
}

Account.prototype.updateBalance = function(amount) {
  this._balance += amount
}

Account.prototype.deposit = function(amount, transaction = new Transaction()) {
  transaction.addDebit(amount)
  this.updateBalance(amount)
}

Account.prototype.withdraw = function(amount, transaction = new Transaction()) {
  transaction.addCredit(amount)
  this.updateBalance(-amount)
}

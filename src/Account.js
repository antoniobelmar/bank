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

Account.prototype.deposit = function(amount) {
  this.updateBalance(amount)
}

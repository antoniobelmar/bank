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

Account.prototype.getTransactionList = function() {
  return this._transactionList
}

Account.prototype.addTransaction = function(transaction) {
  this._transactionList.push(transaction)
}

Account.prototype.deposit = function(amount, transaction = new Transaction()) {
  transaction.addDebit(amount)
  this.updateBalance(amount)
  this.addTransaction(transaction)
}

Account.prototype.withdraw = function(amount, transaction = new Transaction()) {
  transaction.addCredit(amount)
  this.updateBalance(-amount)
  this.addTransaction(transaction)
}

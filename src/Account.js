function Account(transactionList = new TransactionList()){
  this._balance = 0;
  this._transactionList = transactionList;
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

Account.prototype.deposit = function(amount, transaction = new Transaction()) {
  transaction.addDebit(amount)
  this.updateBalance(amount)
  this._transactionList.addTransaction(transaction)
}

Account.prototype.withdraw = function(amount, transaction = new Transaction()) {
  transaction.addCredit(amount)
  this.updateBalance(-amount)
  this._transactionList.addTransaction(transaction)
}

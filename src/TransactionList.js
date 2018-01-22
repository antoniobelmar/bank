function TransactionList() {
  this._transactions = []
}

TransactionList.prototype.getTransactions = function() {
  return this._transactions
}

TransactionList.prototype.addTransaction = function(transaction) {
  this._transactions.push(transaction)
}

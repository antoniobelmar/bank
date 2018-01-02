function Statement(account) {
  this._account = account;
};

Statement.prototype.getAccount = function() {
  return this._account
}

Statement.prototype.print = function() {
  var statement = "Date || Credit || Debit || Balance";
  var balance = 0;
  this.getAccount().getTransactionList().forEach(function(transaction) {
    balance +=(-transaction.getCredit() + transaction.getDebit())
    statement+= "\n" + (transaction.getDate().toLocaleDateString() + " || " + transaction.getCredit() + " || " + transaction.getDebit()) + " || " + balance
  })
  return statement;
}

function Statement(account) {
  this._account = account;
};

Statement.prototype.print = function() {
  var statement = "Date || Credit || Debit || Balance";
  var balance = 0;
  this._account.getTransactionList().getTransactions().forEach(function(transaction) {
    balance +=(-transaction.getCredit() + transaction.getDebit())
    statement+= "\n" + (transaction.getDate().toLocaleDateString() + " || " + transaction.getCredit() + " || " + transaction.getDebit()) + " || " + balance
  })
  return statement;
}

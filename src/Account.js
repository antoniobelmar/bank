function Account(){
  this._balance = 0;
  this._transactionList = [];
};

Account.prototype.getBalance = function() {
  return this._balance
}

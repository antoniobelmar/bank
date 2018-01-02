function Transaction(date = new Date()) {
  this._date = date;
  this._debit = 0;
  this._credit = 0;
};

Transaction.prototype.getDate = function() {
  return this._date;
}

Transaction.prototype.getDebit = function() {
  return this._debit;
};

Transaction.prototype.getCredit = function() {
  return this._credit;
};

Transaction.prototype.addDebit = function(amount) {
  this._debit += amount;
};

Transaction.prototype.addCredit = function(amount) {
  this._credit += amount;
};

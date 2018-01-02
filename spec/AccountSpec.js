describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  describe('Is a constructor', function() {
    it('Can be initialized', function() {
      expect(account).toBeDefined()
    });
  })

  describe('It has a balance property', function() {
    it('Balance starts at 0', function() {
      expect(account._balance).toEqual(0)
    })
    it('Has a getter that returns the balance', function(){
      expect(account.getBalance()).toEqual(account._balance)
    })
  })

  describe('It has a transaction list property', function() {
    it('Transaction list starts as empty array', function() {
      expect(account._transactionList).toEqual([])
    })
  })

});

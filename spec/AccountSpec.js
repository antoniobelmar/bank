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
    it('Has a setter that updates the balance', function() {
      account.updateBalance(10)
      expect(account.getBalance()).toEqual(10)
    })
  })

  describe('It has a transaction list property', function() {
    it('Transaction list starts as empty array', function() {
      expect(account._transactionList).toEqual([])
    })
  })

  describe('Depositing money', function() {
    it('Increases balance by argument', function() {
      account.deposit(500)
      expect(account.getBalance()).toEqual(500)
    })
  })

  describe('Withdrawing money', function() {
    it('Decreases balance by argument', function() {
      account.withdraw(500)
      expect(account.getBalance()).toEqual(-500)
    })
  })

});

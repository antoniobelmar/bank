describe('Account', function() {
  var account;

  beforeEach(function() {
    transactionList = jasmine.createSpyObj('transactionList', ['addTransaction'])
    transaction = jasmine.createSpyObj('transaction', ['addDebit', 'addCredit'])
    account = new Account(transactionList);
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
    it('Transaction list is an instance of TransactionList', function() {
      expect(account._transactionList).toEqual(transactionList)
    })
    it('Has a getter that returns the transaction list array', function() {
      expect(account.getTransactionList()).toEqual(account._transactionList)
    })
  })

  describe('Depositing money', function() {
    it('Increases balance by argument', function() {
      account.deposit(500)
      expect(account.getBalance()).toEqual(500)
    })
    it('Calls the add debit method on the transaction object', function() {
      account.deposit(500,transaction)
      expect(transaction.addDebit).toHaveBeenCalledWith(500)
    })
    it('Calls addTransaction on the transactionList property', function() {
      account.deposit(500,transaction)
      expect(transactionList.addTransaction).toHaveBeenCalledWith(transaction)
    })
  })

  describe('Withdrawing money', function() {
    it('Decreases balance by argument', function() {
      account.withdraw(500)
      expect(account.getBalance()).toEqual(-500)
    })
    it('Calls the add credit method on the transaction object', function() {
      account.withdraw(500,transaction)
      expect(transaction.addCredit).toHaveBeenCalledWith(500)
    })
    it('Adds the transaction to the transaction list', function() {
      account.withdraw(500,transaction)
      expect(transactionList.addTransaction).toHaveBeenCalledWith(transaction)
    })
  })

});

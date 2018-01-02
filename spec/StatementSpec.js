describe("Statement", function() {
  var statement, account, transaction, transaction2;

  beforeEach(function(){
    account = jasmine.createSpyObj("account",["getTransactionList"])
    transaction = jasmine.createSpyObj("transaction", ["getDate", "getCredit", "getDebit"])
    transaction2 = jasmine.createSpyObj("transaction2", ["getDate", "getCredit", "getDebit"])
    statement = new Statement(account);
  });

  describe("It is a constructor", function() {
    it("Can be initialized", function() {
      expect(statement).toBeDefined()
    });
  });

  describe("Has an account property", function() {
    it('Sets account property to the argument of constructor', function(){
      expect(statement._account).toEqual(account)
    })
    it('Has a getter that returns the account property', function() {
      expect(statement.getAccount()).toEqual(statement._account)
    })
  })

  describe("Print statement", function() {
    it('Prints the statement headers to the console', function(){
      account.getTransactionList.and.returnValue([transaction])
      expect(statement.print()).toContain("Date || Credit || Debit || Balance")
    })
    it('Prints the correct statement for one transaction', function() {
      account.getTransactionList.and.returnValue([transaction])
      transaction.getDate.and.returnValue("01-01-2018")
      transaction.getCredit.and.returnValue(5)
      transaction.getDebit.and.returnValue(0)
      expect(statement.print()).toContain("01-01-2018 || 5 || 0 || -5")
    })
    it('Prints the correct statement for mutiple transactions', function() {
      account.getTransactionList.and.returnValue([transaction, transaction2])
      transaction.getDate.and.returnValue("01-01-2018")
      transaction.getCredit.and.returnValue(5)
      transaction.getDebit.and.returnValue(0)
      transaction2.getDate.and.returnValue("02-01-2018")
      transaction2.getCredit.and.returnValue(0)
      transaction2.getDebit.and.returnValue(10)
      expect(statement.print()).toContain("01-01-2018 || 5 || 0 || -5" + "\n" + "02-01-2018 || 0 || 10 || 5")
    })
  })
});

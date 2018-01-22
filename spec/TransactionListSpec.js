describe('TransactionList', function() {
  var transactionList;

  beforeEach(function() {
    transaction = jasmine.createSpy()
    transactionList = new TransactionList();
  });

  describe('Is a constructor', function() {
    it('Can be initialized', function() {
      expect(transactionList).toBeDefined()
    });
  })

  describe('Add transaction', function() {
    it('Updates the transactions property with the transaction called as argument', function(){
      transactionList.addTransaction(transaction)
      expect(transactionList._transactions).toContain(transaction)
    })
  })

})

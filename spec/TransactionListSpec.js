describe('TransactionList', function() {
  var transactionList;

  beforeEach(function() {
    transactionList = new TransactionList();
  });

  describe('Is a constructor', function() {
    it('Can be initialized', function() {
      expect(transactionList).toBeDefined()
    });
  })

})

describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction;
  });

  describe('Is a constructor', function() {
    it('Can be initialized', function() {
      expect(transaction).toBeDefined()
    });
  })
})

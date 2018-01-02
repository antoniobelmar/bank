describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction("01-01-2018");
  });

  describe('Is a constructor', function() {
    it('Can be initialized', function() {
      expect(transaction).toBeDefined()
    });
  })

  describe('Has a date property', function() {
    it('Sets date property to the argument of constructor', function() {
      expect(transaction._date).toEqual("01-01-2018")
    })
    it('Has a getter that returns the date property', function(){
      expect(transaction.getDate()).toEqual(transaction._date)
    })
  })

  describe('It has a debit property', function() {
    it('Debit starts at 0', function() {
      expect(transaction._debit).toEqual(0)
    })
    it('Has a getter that returns debit amount', function() {
      expect(transaction.getDebit()).toEqual(transaction._debit)
    })
    it('Has a setter to update debit amount', function(){
      transaction.addDebit(10)
      expect(transaction._debit).toEqual(10)
    })
  })

  describe('It has a credit property', function() {
    it('Credit starts at 0', function() {
      expect(transaction._credit).toEqual(0)
    })
    it('Has a getter that returns credit amount', function() {
      expect(transaction.getCredit()).toEqual(transaction._credit)
    })
    it('Has a setter to update credit amount', function(){
      transaction.addCredit(5)
      expect(transaction._credit).toEqual(5)
    })
  })
})

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
  })

});

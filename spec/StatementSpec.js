describe("Statement", function() {
  var statement;

  beforeEach(function(){
    account = jasmine.createSpyObj("account",["getBalance", "getTransactionList"])
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
  })
});

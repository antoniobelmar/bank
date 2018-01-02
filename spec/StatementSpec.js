describe("Statement", function() {
  var statement;

  beforeEach(function(){
    statement = new Statement
  })

  describe("It is a constructor", function() {
    it("Can be initialized", function() {
      expect(statement).toBeDefined()
    })
  })
});

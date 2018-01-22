## Bank Tech Test

### Specification

* The user should be able to interact with the code via the JavaScript console.
* Handles both deposits and withdrawals.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Approach
The first step I took when approaching this project was to decide which objects I would need. I immediately came up with an Account object that would handle an account balance and a Transaction object which would record all specifics of a transaction. Additionally, I had a statement object which would print statements for the account in a user friendly format. The Account object would contain key user functions such as withdrawals and deposits whereas the statement object would handle all printing. Later on, I did realize that my Account object had the responsibility of maintaining the balance and updating the list of transactions as well a so I created a transactionList object who would take on the latter ones.

### Structure
The final solution has four different objects:
- Account: responsible for knowing the current balance (includes withdrawal and deposit functions)
- TransactionList = responsible for storing all current transactions of an account
- Transaction - responsible for storing all the individual transaction details (date, credit amount and debit amount)
- Statement - responsible to print statements in a user friendly format (includes function print).


### Using the program and running tests
To interact with the program, do the following and then open the browser console:
```
$ git clone https://github.com/antoniobelmar/bank
$ cd bank
$ open index.html
```
Create a new account:
```javascript
account = new Account();
> Account {_balance: 0, _transactionList: TransactionList}
```
You can see that it is initiated with a transactionList:
```javascript
account.getTransactionList();
> TransactionList {_transactions: Array(0)}
```
You can now deposit some funds into the account. Let's say £50:
```javascript
account.deposit(50);
> undefined
```
Let's now check the balance of our account:
```javascript
account.getBalance();
> 50
```
Let's withdraw £20 and check our updated balance:
```javascript
account.withdraw(20);
> undefined
> account.getBalance();
30
```
We can now print a statement:
```javascript
statement = new Statement(account);
> Statement {_account: Account}
statement.print();
```
Which returns:
```
> "Date || Credit || Debit || Balance
22/01/2018 || 0 || 50 || 50
22/01/2018 || 20 || 0 || 30"
```
If we add one transaction and re-print, the transaction is now recorded:
```javascript
account.withdraw(5);
> undefined
statement.print();
```
Which returns:
```
> "Date || Credit || Debit || Balance
22/01/2018 || 0 || 50 || 50
22/01/2018 || 20 || 0 || 30
22/01/2018 || 5 || 0 || 25"
```

Errors are not thrown when trying to withdraw more money than the current balance as this is expected to be handled from a potential user view.

I used Jasmine as my testrunner and in order to run the tests you should run:
```
$ open SpecRunner.html
```

import { SavingsAccount } from '../../src/domain/entity/savingsAccount.entity';
import { Transaction } from '../../src/domain/entity/transaction.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');

describe('savingAccountTest', () => {

  let account: SavingsAccount;

  it('Create saving account test', () => {
    account = new SavingsAccount();
    account.number = '111';
    account.name = 'Saving Example';
    account.city = 'Valledupar';
    account.consign(new Transaction(50000, 'Valledupar'));
    assert.equal(account.balance,50000);
  });

  it('Consign saving account test', () => {
    account = new SavingsAccount();
    account.number = '111';
    account.name = 'Saving Example';
    account.city = 'Valledupar';
    account.consign(new Transaction(50000, 'Valledupar'));
    account.withdrawal(new Transaction(20000, 'Valledupar'));
    account.consign(new Transaction(10000, 'Valledupar'));
    assert.equal(account.balance,30000);
  });

  it('Withdrawal saving account test', () => {
    account = new SavingsAccount();
    account.number = '111';
    account.name = 'Saving Example';
    account.city = 'Valledupar';
    account.consign(new Transaction(50000, 'Valledupar'));
    account.withdrawal(new Transaction(30000, 'Valledupar'));
    assert.equal(account.balance,20000);
  });

});
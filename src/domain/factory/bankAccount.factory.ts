import { BankAccount } from '../entity/bankAccount.entity';
import { SavingsAccount } from '../entity/savingsAccount.entity';
import { CurrentAccount } from '../entity/currentAccount.entity';

export class BankAccountFactory{

  public create(accountType: string): BankAccount{
    switch (accountType){
      case 'Ahorro':
        return new SavingsAccount();
      case 'Corriente':
        return new CurrentAccount();
    }
  }
}
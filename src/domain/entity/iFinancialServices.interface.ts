import { Transaction } from './transaction.entity';

export interface IFinancialServicesInterface {

  name: string;
  number: string;
  balance: number;

  consign(transaction: Transaction);
  withdrawal(transaction: Transaction);
  move(financialService: IFinancialServicesInterface, transaction: Transaction);
}

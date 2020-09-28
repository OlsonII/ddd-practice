import { Transaction } from './transaction.entity';
export interface IFinancialServicesInterface {
    name: string;
    number: string;
    balance: number;
    consign(transaction: Transaction): any;
    withdrawal(transaction: Transaction): any;
    move(financialService: IFinancialServicesInterface, transaction: Transaction): any;
}

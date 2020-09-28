import { Transaction } from "./transaction.entity";
import { IFinancialServicesInterface } from './iFinancialServices.interface';
import { FinancialMovement } from './financialMovement.entity';
export declare class BankAccount implements IFinancialServicesInterface {
    balance: number;
    name: string;
    number: string;
    city: string;
    movements: FinancialMovement[];
    constructor();
    consign(transaction: Transaction): void;
    move(financialService: IFinancialServicesInterface, transaction: Transaction): void;
    withdrawal(transaction: Transaction): void;
}

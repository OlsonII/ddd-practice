import { FinancialMovementOrm } from './financialMovement.orm.repository';
export declare class BankAccountOrm {
    balance: number;
    name: string;
    number: string;
    city: string;
    movements: FinancialMovementOrm[];
}

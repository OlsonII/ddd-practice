import { Transaction } from './transaction.entity';
import { BankAccount } from './bankAccount.entity';
export declare class SavingsAccount extends BankAccount {
    private maxWithdrawal;
    private costWithdrawal;
    constructor();
    consign(transaction: Transaction): void;
    withdrawal(transaction: Transaction): void;
    private validateMonthWithdrawals;
    private verifyFirstConsign;
}

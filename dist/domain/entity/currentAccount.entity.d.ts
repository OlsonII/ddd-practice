import { Transaction } from './transaction.entity';
import { BankAccount } from './bankAccount.entity';
export declare class CurrentAccount extends BankAccount {
    _minimumWithdrawal: number;
    consign(transaction: Transaction): void;
    withdrawal(transaction: Transaction): void;
    private verifyFirstConsign;
    private applyTax;
}

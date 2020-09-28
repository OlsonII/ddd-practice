import { IUnitOfWork } from '../contracts/unitOfWork.interface';
import { Connection } from 'typeorm';
import { BankAccountRepository } from '../repositories/bankAccount.repository';
import { FinancialMovementRepository } from '../repositories/financialMovement.repository';
export declare class UnitOfWork implements IUnitOfWork {
    private readonly asyncDatabaseConnection;
    private readonly queryRunner;
    private transactionManager;
    bankAccountRepository: BankAccountRepository;
    financialMovementRepository: FinancialMovementRepository;
    constructor(asyncDatabaseConnection: Connection);
    setTransactionManager(): void;
    complete(work: () => any): Promise<any>;
    start(): Promise<void>;
}

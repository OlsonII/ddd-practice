import { BankAccountRepository } from '../repositories/bankAccount.repository';
import { FinancialMovementRepository } from '../repositories/financialMovement.repository';

export interface IUnitOfWork{

  //REPOSITORIES
  bankAccountRepository: BankAccountRepository;
  financialMovementRepository: FinancialMovementRepository;

  start(): void;
  complete(work: () => any): Promise<any>;
}
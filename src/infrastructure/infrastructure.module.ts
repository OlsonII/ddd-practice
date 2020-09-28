import { Module } from '@nestjs/common';
import { BankAccountRepository } from './repositories/bankAccount.repository';
import { FinancialMovementRepository } from './repositories/financialMovement.repository';
import { UnitOfWork } from './unitOfWork/unitOfWork';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [BankAccountRepository, FinancialMovementRepository, UnitOfWork],
  exports: [BankAccountRepository, FinancialMovementRepository, UnitOfWork]
})
export class InfrastructureModule{}

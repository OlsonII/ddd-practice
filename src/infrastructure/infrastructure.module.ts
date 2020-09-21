import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountOrm } from './database/entity/bankAccount.orm.repository';
import { FinancialMovementOrm } from './database/entity/financialMovement.orm.repository';
import { databaseProviders } from './database/databaseConnection.service';
import { BankAccountRepository } from './repositories/bankAccount.repository';
import { FinancialMovementRepository } from './repositories/financialMovement.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature(
    [BankAccountOrm, FinancialMovementOrm, BankAccountRepository, FinancialMovementRepository]
    )
  ],
  providers: [...databaseProviders, BankAccountRepository, FinancialMovementRepository],
  exports: [...databaseProviders, BankAccountRepository, FinancialMovementRepository]
})
export class InfrastructureModule{}

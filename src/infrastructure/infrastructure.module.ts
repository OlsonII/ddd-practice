import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountOrm } from './database/entity/bankAccount.orm.repository';
import { FinancialMovementOrm } from './database/entity/financialMovement.orm.repository';
import { databaseProviders } from './database/databaseConnection.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
    [BankAccountOrm, FinancialMovementOrm]
    )
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class InfrastructureModule{}

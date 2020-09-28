import { Module } from '@nestjs/common';
import {
  CreateBankAccountService,
} from './createBankAccount.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { BankAccount } from '../domain/entity/bankAccount.entity';
import { ConsignBankAccountService } from './consignBankAccount.service';
import { SearchAllBankAccountsService } from './searchAllBankAccounts.service';

@Module({
  imports: [
    BankAccount,
    InfrastructureModule,
    CreateBankAccountService,
    ConsignBankAccountService,
    SearchAllBankAccountsService
  ],
  exports: [
    CreateBankAccountService,
    ConsignBankAccountService,
    SearchAllBankAccountsService
  ]
})
export class ApplicationModule{}

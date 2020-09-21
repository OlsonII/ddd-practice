import { Module } from '@nestjs/common';
import { BankAccountController } from './bankAccount.controller';
import { ApplicationModule } from '../application/application.module';
import { ConsignBankAccountService } from '../application/consignBankAccount.service';
import { SearchAllBankAccountsService } from '../application/searchAllBankAccounts.service';

@Module({
  imports: [
    ApplicationModule,
    ConsignBankAccountService,
    SearchAllBankAccountsService
  ],
  controllers: [BankAccountController],
})
export class ControllersModule{}

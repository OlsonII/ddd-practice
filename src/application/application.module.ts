import { Module } from '@nestjs/common';
import {
  CreateBankAccountService,
} from './createBankAccount.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { BankAccount } from '../domain/entity/bankAccount.entity';

@Module({
  imports: [
    BankAccount,
    InfrastructureModule
  ],
  providers: [CreateBankAccountService],
  exports: [
    CreateBankAccountService
  ]
})
export class ApplicationModule{}

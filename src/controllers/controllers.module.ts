import { Module } from '@nestjs/common';
import { BankAccountController } from './bankAccount.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [BankAccountController],
})
export class ControllersModule{}

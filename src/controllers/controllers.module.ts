import { Module } from '@nestjs/common';
import { BankAccountController } from './bankAccount.controller';
import { ApplicationModule } from '../application/application.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule
  ],
  controllers: [BankAccountController],
})
export class ControllersModule{}

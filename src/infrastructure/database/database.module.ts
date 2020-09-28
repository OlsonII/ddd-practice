import { Module } from '@nestjs/common';
import { bankAccountProviders, financialMovementsProviders } from './migrations/entities.provider';
import { databaseProviders } from './provider/database.provider';


@Module({
  providers: [
    ...databaseProviders,
    ...bankAccountProviders,
    ...financialMovementsProviders
  ],
  exports: [
    ...databaseProviders,
    ...bankAccountProviders,
    ...financialMovementsProviders
  ]
})
export class DatabaseModule{}
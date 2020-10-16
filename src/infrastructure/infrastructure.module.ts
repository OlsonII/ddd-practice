import { Module } from '@nestjs/common';
import { UnitOfWork } from './unitOfWork/unitOfWork';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UnitOfWork],
  exports: [UnitOfWork]
})
export class InfrastructureModule{}

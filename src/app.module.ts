import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ControllersModule } from './controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApplicationModule,
    ControllersModule,
    InfrastructureModule
  ]
})
export class AppModule {
}

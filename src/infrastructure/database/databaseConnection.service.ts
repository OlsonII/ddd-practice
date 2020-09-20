import { createConnection } from "typeorm";
import { BankAccountOrm } from './entity/bankAccount.orm.repository';
import { FinancialMovementOrm } from './entity/financialMovement.orm.repository';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1981',
      database: 'financial_services_test',
      entities: ['dist/infrastructure/database/entity/*.js']
    }),
  },
];

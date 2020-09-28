import { Connection } from 'typeorm';
import { BankAccountOrm } from '../entity/bankAccount.orm.repository';
import { FinancialMovementOrm } from '../entity/financialMovement.orm.repository';
export declare const bankAccountProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<BankAccountOrm>;
    inject: string[];
}[];
export declare const financialMovementsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<FinancialMovementOrm>;
    inject: string[];
}[];

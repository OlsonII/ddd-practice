"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financialMovementsProviders = exports.bankAccountProviders = void 0;
const bankAccount_orm_repository_1 = require("../entity/bankAccount.orm.repository");
const financialMovement_orm_repository_1 = require("../entity/financialMovement.orm.repository");
exports.bankAccountProviders = [
    {
        provide: 'BANK_ACCOUNT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(bankAccount_orm_repository_1.BankAccountOrm),
        inject: ['DATABASE_CONNECTION'],
    },
];
exports.financialMovementsProviders = [
    {
        provide: 'FINANCIAL_MOVEMENTS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(financialMovement_orm_repository_1.FinancialMovementOrm),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=entities.provider.js.map
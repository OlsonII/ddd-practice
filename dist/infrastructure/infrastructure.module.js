"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const bankAccount_repository_1 = require("./repositories/bankAccount.repository");
const financialMovement_repository_1 = require("./repositories/financialMovement.repository");
const unitOfWork_1 = require("./unitOfWork/unitOfWork");
const database_module_1 = require("./database/database.module");
let InfrastructureModule = class InfrastructureModule {
};
InfrastructureModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        providers: [bankAccount_repository_1.BankAccountRepository, financialMovement_repository_1.FinancialMovementRepository, unitOfWork_1.UnitOfWork],
        exports: [bankAccount_repository_1.BankAccountRepository, financialMovement_repository_1.FinancialMovementRepository, unitOfWork_1.UnitOfWork]
    })
], InfrastructureModule);
exports.InfrastructureModule = InfrastructureModule;
//# sourceMappingURL=infrastructure.module.js.map
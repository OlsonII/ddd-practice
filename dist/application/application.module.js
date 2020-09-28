"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const createBankAccount_service_1 = require("./createBankAccount.service");
const infrastructure_module_1 = require("../infrastructure/infrastructure.module");
const bankAccount_entity_1 = require("../domain/entity/bankAccount.entity");
const consignBankAccount_service_1 = require("./consignBankAccount.service");
const searchAllBankAccounts_service_1 = require("./searchAllBankAccounts.service");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            bankAccount_entity_1.BankAccount,
            infrastructure_module_1.InfrastructureModule,
            createBankAccount_service_1.CreateBankAccountService,
            consignBankAccount_service_1.ConsignBankAccountService,
            searchAllBankAccounts_service_1.SearchAllBankAccountsService
        ],
        exports: [
            createBankAccount_service_1.CreateBankAccountService,
            consignBankAccount_service_1.ConsignBankAccountService,
            searchAllBankAccounts_service_1.SearchAllBankAccountsService
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map
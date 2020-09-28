"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountRepository = void 0;
const generic_repository_1 = require("../base/generic.repository");
const bankAccount_orm_repository_1 = require("../database/entity/bankAccount.orm.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BankAccountRepository = class BankAccountRepository extends generic_repository_1.GenericRepository {
};
BankAccountRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(bankAccount_orm_repository_1.BankAccountOrm)
], BankAccountRepository);
exports.BankAccountRepository = BankAccountRepository;
//# sourceMappingURL=bankAccount.repository.js.map
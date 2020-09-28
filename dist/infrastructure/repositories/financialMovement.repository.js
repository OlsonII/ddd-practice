"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialMovementRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const financialMovement_orm_repository_1 = require("../database/entity/financialMovement.orm.repository");
const generic_repository_1 = require("../base/generic.repository");
let FinancialMovementRepository = class FinancialMovementRepository extends generic_repository_1.GenericRepository {
    searchAllById(id) {
        return this.find({ where: { bankAccount: id } });
    }
};
FinancialMovementRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(financialMovement_orm_repository_1.FinancialMovementOrm)
], FinancialMovementRepository);
exports.FinancialMovementRepository = FinancialMovementRepository;
//# sourceMappingURL=financialMovement.repository.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmUnitOfWork = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const bankAccount_repository_1 = require("../repositories/bankAccount.repository");
const financialMovement_repository_1 = require("../repositories/financialMovement.repository");
let TypeOrmUnitOfWork = class TypeOrmUnitOfWork {
    constructor(asyncDatabaseConnection) {
        this.asyncDatabaseConnection = asyncDatabaseConnection;
        this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();
        this.bankAccountRepository = this.asyncDatabaseConnection.getCustomRepository(bankAccount_repository_1.BankAccountRepository);
        this.financialMovementRepository = this.asyncDatabaseConnection.getCustomRepository(financialMovement_repository_1.FinancialMovementRepository);
    }
    setTransactionManager() {
        this.transactionManager = this.queryRunner.manager;
    }
    async complete(work) {
        try {
            const response = await work();
            await this.queryRunner.commitTransaction();
            return response;
        }
        catch (error) {
            await this.queryRunner.rollbackTransaction();
            return error.toString();
        }
        finally {
            await this.queryRunner.release();
        }
    }
    async start() {
        await this.queryRunner.startTransaction();
        this.setTransactionManager();
    }
};
TypeOrmUnitOfWork = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], TypeOrmUnitOfWork);
exports.TypeOrmUnitOfWork = TypeOrmUnitOfWork;
//# sourceMappingURL=typeOrmUnitOfWork.js.map
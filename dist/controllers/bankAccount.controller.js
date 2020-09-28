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
exports.BankAccountController = void 0;
const common_1 = require("@nestjs/common");
const createBankAccount_service_1 = require("../application/createBankAccount.service");
const consignBankAccount_service_1 = require("../application/consignBankAccount.service");
const searchAllBankAccounts_service_1 = require("../application/searchAllBankAccounts.service");
const unitOfWork_1 = require("../infrastructure/unitOfWork/unitOfWork");
let BankAccountController = class BankAccountController {
    constructor(_unitOfWork) {
        this._unitOfWork = _unitOfWork;
    }
    async createBankAccount(request) {
        const service = new createBankAccount_service_1.CreateBankAccountService(this._unitOfWork);
        const res = await this._unitOfWork.complete(async () => await service.execute(request));
        return res.message;
    }
    async consignBankAccount(request) {
        const service = new consignBankAccount_service_1.ConsignBankAccountService(this._unitOfWork);
        const res = await this._unitOfWork.complete(async () => await service.execute(request));
        return res.message;
    }
    async getAllBankAccounts() {
        const res = await this._unitOfWork.complete(async () => await new searchAllBankAccounts_service_1.SearchAllBankAccountsService(this._unitOfWork).execute());
        return res;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createBankAccount_service_1.CreateBankAccountRequest]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "createBankAccount", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [consignBankAccount_service_1.ConsignBankAccountRequest]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "consignBankAccount", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "getAllBankAccounts", null);
BankAccountController = __decorate([
    common_1.Controller('bankAccount'),
    __metadata("design:paramtypes", [unitOfWork_1.UnitOfWork])
], BankAccountController);
exports.BankAccountController = BankAccountController;
//# sourceMappingURL=bankAccount.controller.js.map
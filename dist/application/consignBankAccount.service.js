"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsignBankAccountResponse = exports.ConsignBankAccountRequest = exports.ConsignBankAccountService = void 0;
const transaction_entity_1 = require("../domain/entity/transaction.entity");
const createBankAccount_service_1 = require("./createBankAccount.service");
const bankAccount_factory_1 = require("../domain/factory/bankAccount.factory");
class ConsignBankAccountService {
    constructor(_unitOfWork) {
        this._unitOfWork = _unitOfWork;
    }
    async execute(request) {
        await this._unitOfWork.start();
        const accountOrm = await this._unitOfWork.bankAccountRepository.searchData(request.number);
        accountOrm.movements = await this._unitOfWork.financialMovementRepository.searchAllById(accountOrm.number);
        if (accountOrm != undefined) {
            const bankAccount = new bankAccount_factory_1.BankAccountFactory().create(request.type);
            bankAccount.name = accountOrm.name;
            bankAccount.city = accountOrm.city;
            bankAccount.number = accountOrm.number;
            bankAccount.balance = accountOrm.balance;
            bankAccount.movements = accountOrm.movements;
            bankAccount.consign(new transaction_entity_1.Transaction(request.value, request.city));
            await this._unitOfWork.bankAccountRepository.saveData(bankAccount);
            await this._unitOfWork.financialMovementRepository.saveData(bankAccount.movements[bankAccount.movements.length - 1]);
            return new createBankAccount_service_1.CreateBankAccountResponse('Se consignaron ' + request.value + ' a la cuenta: ' + bankAccount.number + ' balance total: ' + bankAccount.balance);
        }
        return new createBankAccount_service_1.CreateBankAccountResponse('El numero de cuenta no existe');
    }
}
exports.ConsignBankAccountService = ConsignBankAccountService;
class ConsignBankAccountRequest {
}
exports.ConsignBankAccountRequest = ConsignBankAccountRequest;
class ConsignBankAccountResponse {
    constructor(message) {
        this.message = message;
    }
}
exports.ConsignBankAccountResponse = ConsignBankAccountResponse;
//# sourceMappingURL=consignBankAccount.service.js.map
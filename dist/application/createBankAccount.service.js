"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBankAccountResponse = exports.CreateBankAccountRequest = exports.CreateBankAccountService = void 0;
const bankAccount_factory_1 = require("../domain/factory/bankAccount.factory");
class CreateBankAccountService {
    constructor(_unitOfWork) {
        this._unitOfWork = _unitOfWork;
    }
    async execute(request) {
        await this._unitOfWork.start();
        let newBankAccount;
        const bankAccount = await this._unitOfWork.bankAccountRepository.searchData(request.number);
        if (bankAccount == undefined) {
            newBankAccount = new bankAccount_factory_1.BankAccountFactory().create(request.type);
            newBankAccount.number = request.number;
            newBankAccount.city = request.city;
            newBankAccount.balance = 0;
            newBankAccount.name = request.name;
            newBankAccount.movements = [];
            const savedData = await this._unitOfWork.bankAccountRepository.saveData(newBankAccount);
            return new CreateBankAccountResponse('Cuenta de ' + request.type + ' ' + savedData.number + ' creada satisfactoriamente');
        }
        return new CreateBankAccountResponse('El numero de cuenta ya existe');
    }
}
exports.CreateBankAccountService = CreateBankAccountService;
class CreateBankAccountRequest {
}
exports.CreateBankAccountRequest = CreateBankAccountRequest;
class CreateBankAccountResponse {
    constructor(message, typeBankAccountCreated) {
        this.message = message;
        this.typeBankAccountCreated = typeBankAccountCreated;
    }
}
exports.CreateBankAccountResponse = CreateBankAccountResponse;
//# sourceMappingURL=createBankAccount.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAllBankAccountsResponse = exports.SearchAllBankAccountsService = void 0;
class SearchAllBankAccountsService {
    constructor(_unitOfWork) {
        this._unitOfWork = _unitOfWork;
    }
    async execute() {
        await this._unitOfWork.start();
        const accounts = await this._unitOfWork.bankAccountRepository.searchAll();
        for (let i = 0; i < accounts.length; i++) {
            accounts[i].movements = await this._unitOfWork.financialMovementRepository.searchAllById(accounts[i].number);
        }
        console.log(accounts);
        return new SearchAllBankAccountsResponse(accounts);
    }
}
exports.SearchAllBankAccountsService = SearchAllBankAccountsService;
class SearchAllBankAccountsResponse {
    constructor(accounts) {
        this.accounts = accounts;
    }
}
exports.SearchAllBankAccountsResponse = SearchAllBankAccountsResponse;
//# sourceMappingURL=searchAllBankAccounts.service.js.map
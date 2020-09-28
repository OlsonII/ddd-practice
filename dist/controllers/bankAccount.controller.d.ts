import { CreateBankAccountRequest } from '../application/createBankAccount.service';
import { ConsignBankAccountRequest } from '../application/consignBankAccount.service';
import { SearchAllBankAccountsResponse } from '../application/searchAllBankAccounts.service';
import { UnitOfWork } from '../infrastructure/unitOfWork/unitOfWork';
export declare class BankAccountController {
    private readonly _unitOfWork;
    constructor(_unitOfWork: UnitOfWork);
    createBankAccount(request: CreateBankAccountRequest): Promise<string>;
    consignBankAccount(request: ConsignBankAccountRequest): Promise<string>;
    getAllBankAccounts(): Promise<SearchAllBankAccountsResponse>;
}

import { BankAccountOrm } from '../infrastructure/database/entity/bankAccount.orm.repository';
import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
export declare class SearchAllBankAccountsService {
    private readonly _unitOfWork;
    constructor(_unitOfWork: IUnitOfWork);
    execute(): Promise<SearchAllBankAccountsResponse>;
}
export declare class SearchAllBankAccountsResponse {
    readonly accounts: BankAccountOrm[];
    constructor(accounts: BankAccountOrm[]);
}

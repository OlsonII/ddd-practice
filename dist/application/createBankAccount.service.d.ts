import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
export declare class CreateBankAccountService {
    private readonly _unitOfWork;
    constructor(_unitOfWork: IUnitOfWork);
    execute(request: CreateBankAccountRequest): Promise<CreateBankAccountResponse>;
}
export declare class CreateBankAccountRequest {
    name: string;
    number: string;
    city: string;
    type: string;
}
export declare class CreateBankAccountResponse {
    message: string;
    typeBankAccountCreated?: string;
    constructor(message: string, typeBankAccountCreated?: string);
}

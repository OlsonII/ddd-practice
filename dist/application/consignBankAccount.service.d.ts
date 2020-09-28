import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
export declare class ConsignBankAccountService {
    private readonly _unitOfWork;
    constructor(_unitOfWork: IUnitOfWork);
    execute(request: ConsignBankAccountRequest): Promise<ConsignBankAccountResponse>;
}
export declare class ConsignBankAccountRequest {
    number: string;
    city: string;
    value: number;
    type: string;
}
export declare class ConsignBankAccountResponse {
    message: string;
    constructor(message: string);
}

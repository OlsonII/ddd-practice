import { BankAccount } from '../domain/entity/bankAccount.entity';
import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { SavingsAccount } from '../domain/entity/savingsAccount.entity';

export class CreateBankAccountService{

  repository: BankAccountRepository;


  constructor(repository: BankAccountRepository) {
    this.repository = repository;
  }

  public async execute(request: CreateBankAccountRequest): Promise<CreateBankAccountResponse>{
    let newBankAccount: BankAccount;
    const bankAccount = await this.repository.searchData(request.number);
    if (bankAccount == undefined){
      newBankAccount = new SavingsAccount();
      newBankAccount.number = request.number;
      newBankAccount.city = request.city;
      newBankAccount.balance = 0;
      newBankAccount.name = request.name;
      await this.repository.saveData(newBankAccount);
      return new CreateBankAccountResponse('Cuenta de ' + request.type + ' creada satisfactoriamente');
    }
    return new CreateBankAccountResponse('El numero de cuenta ya existe');
  }
}

export class CreateBankAccountRequest{
  public name: string;
  public number: string;
  public city: string;
  public type: string
}

export class CreateBankAccountResponse{
  constructor(
    public message: string,
    public typeBankAccountCreated?: string
  ){}
}

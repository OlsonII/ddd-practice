import { BankAccount } from '../domain/entity/bankAccount.entity';
import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { SavingsAccount } from '../domain/entity/savingsAccount.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class CreateBankAccountService{

  repository: BankAccountRepository;

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getCustomRepository(BankAccountRepository);
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
      newBankAccount.movements = []
      const savedData = await this.repository.saveData(newBankAccount);
      return new CreateBankAccountResponse('Cuenta de '+ request.type + ' ' + savedData.number + ' creada satisfactoriamente');
    }
    return new CreateBankAccountResponse('El numero de cuenta ya existe');
  }
}

export class CreateBankAccountRequest{
  public name: string;
  public number: string;
  public city: string;
  public type: string;
}

export class CreateBankAccountResponse{
  constructor(
    public message: string,
    public typeBankAccountCreated?: string
  ){}
}

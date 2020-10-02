import { BankAccount } from '../domain/entity/bankAccount.entity';
import { Injectable } from '@nestjs/common';
import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
import { BankAccountFactory } from '../domain/factory/bankAccount.factory';
import { UnitOfWork } from '../infrastructure/unitOfWork/unitOfWork';


export class CreateBankAccountService{

  constructor(private readonly _unitOfWork : IUnitOfWork) { }

  public async execute(request: CreateBankAccountRequest): Promise<CreateBankAccountResponse>{

    let newBankAccount: BankAccount;
    const bankAccount = await this._unitOfWork.bankAccountRepository.searchData(request.number);
    if (bankAccount == undefined){
      newBankAccount = new BankAccountFactory().create(request.type);
      newBankAccount.number = request.number;
      newBankAccount.city = request.city;
      newBankAccount.balance = 0;
      newBankAccount.name = request.name;
      newBankAccount.movements = [];
      await this._unitOfWork.start();
      const savedData = await this._unitOfWork.bankAccountRepository.saveData(newBankAccount);
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

import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { Connection } from 'typeorm';
import { BankAccount } from '../domain/entity/bankAccount.entity';
import { SavingsAccount } from '../domain/entity/savingsAccount.entity';
import { Transaction } from '../domain/entity/transaction.entity';
import { CreateBankAccountResponse } from './createBankAccount.service';
import { Injectable } from '@nestjs/common';
import { FinancialMovementRepository } from '../infrastructure/repositories/financialMovement.repository';
import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
import { BankAccountFactory } from '../domain/factory/bankAccount.factory';
import { UnitOfWork } from '../infrastructure/unitOfWork/unitOfWork';


export class ConsignBankAccountService{


  constructor(private readonly _unitOfWork: IUnitOfWork) {}

  async execute(request: ConsignBankAccountRequest) : Promise<ConsignBankAccountResponse>{
    const accountOrm = await this._unitOfWork.bankAccountRepository.findOne(request.number);
    accountOrm.movements = await this._unitOfWork.financialMovementRepository.find({ where: { bankAccount: accountOrm.number}});
    if(accountOrm != undefined){
      const bankAccount: BankAccount = new BankAccountFactory().create(request.type);
      bankAccount.name = accountOrm.name;
      bankAccount.city = accountOrm.city;
      bankAccount.number = accountOrm.number;
      bankAccount.balance = accountOrm.balance;
      bankAccount.movements = accountOrm.movements;
      bankAccount.consign(new Transaction(request.value, request.city));
      await this._unitOfWork.start();
      await this._unitOfWork.bankAccountRepository.save(bankAccount);
      await this._unitOfWork.financialMovementRepository.save(bankAccount.movements[bankAccount.movements.length - 1]);
      return new CreateBankAccountResponse('Se consignaron ' + request.value + ' a la cuenta: ' + bankAccount.number + ' balance total: ' + bankAccount.balance);
    }
    return new CreateBankAccountResponse('El numero de cuenta no existe');
  }

}

export class ConsignBankAccountRequest{
  public number: string;
  public city: string;
  public value: number;
  public type: string;
}

export class ConsignBankAccountResponse{
  constructor(
    public message: string
  ){}
}

import { BankAccountOrm } from '../infrastructure/database/entity/bankAccount.orm.repository';
import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FinancialMovementRepository } from '../infrastructure/repositories/financialMovement.repository';
import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
import { UnitOfWork } from '../infrastructure/unitOfWork/unitOfWork';


export class SearchAllBankAccountsService{

  constructor(private readonly _unitOfWork: IUnitOfWork) {}

  async execute() : Promise<SearchAllBankAccountsResponse>{
    const accounts: BankAccountOrm[] = await this._unitOfWork.bankAccountRepository.find();
    for (let i = 0; i < accounts.length; i++){
      await this._unitOfWork.start();
      accounts[i].movements = await this._unitOfWork.financialMovementRepository.find({ where: { bankAccount: accounts[i].number}});
    }
    console.log(accounts);
    return new SearchAllBankAccountsResponse(accounts);
  }

}

export class SearchAllBankAccountsResponse{
  constructor(public readonly accounts: BankAccountOrm[]) {}
}


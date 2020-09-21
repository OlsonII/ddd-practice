import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { Connection } from 'typeorm';
import { BankAccount } from '../domain/entity/bankAccount.entity';
import { SavingsAccount } from '../domain/entity/savingsAccount.entity';
import { Transaction } from '../domain/entity/transaction.entity';
import { CreateBankAccountResponse } from './createBankAccount.service';
import { Injectable } from '@nestjs/common';
import { FinancialMovementRepository } from '../infrastructure/repositories/financialMovement.repository';

@Injectable()
export class ConsignBankAccountService{

  accountRepository: BankAccountRepository;
  movementRepository: FinancialMovementRepository;


  constructor(private readonly connection: Connection) {
    this.accountRepository = this.connection.getCustomRepository(BankAccountRepository);
    this.movementRepository = this.connection.getCustomRepository(FinancialMovementRepository);
  }

  async execute(request: ConsignBankAccountRequest) : Promise<ConsignBankAccountResponse>{

    const accountOrm = await this.accountRepository.searchData(request.number);
    accountOrm.movements = await this.movementRepository.searchAllById(accountOrm.number);
    //TODO: IMPLEMENT ABSTRACT FACTORY
    if(accountOrm != undefined){
      const bankAccount: BankAccount = new SavingsAccount();
      bankAccount.name = accountOrm.name;
      bankAccount.city = accountOrm.city;
      bankAccount.number = accountOrm.number;
      bankAccount.balance = accountOrm.balance;
      bankAccount.movements = accountOrm.movements;
      bankAccount.consign(new Transaction(request.value, request.city));
      await this.accountRepository.saveData(bankAccount);
      await this.movementRepository.saveData(bankAccount.movements[bankAccount.movements.length - 1]);
      return new CreateBankAccountResponse('Se consignaron ' + request.value + ' a la cuenta: ' + bankAccount.number + ' balance total: ' + bankAccount.balance);
    }
    return new CreateBankAccountResponse('El numero de cuenta no existe');
  }

}

export class ConsignBankAccountRequest{
  public number: string;
  public city: string;
  public value: number;
}

export class ConsignBankAccountResponse{
  constructor(
    public message: string
  ){}
}

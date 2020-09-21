import { BankAccountOrm } from '../infrastructure/database/entity/bankAccount.orm.repository';
import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FinancialMovementRepository } from '../infrastructure/repositories/financialMovement.repository';

@Injectable()
export class SearchAllBankAccountsService{

  accountRepository: BankAccountRepository;
  financialRepository: FinancialMovementRepository;

  constructor(private readonly connection: Connection) {
    this.accountRepository = this.connection.getCustomRepository(BankAccountRepository);
    this.financialRepository = this.connection.getCustomRepository(FinancialMovementRepository);
  }

  async execute() : Promise<SearchAllBankAccountsResponse>{
    const accounts: BankAccountOrm[] = await this.accountRepository.searchAll();
    for (let i = 0; i < accounts.length; i++){
      accounts[i].movements = await this.financialRepository.searchAllById(accounts[i].number);
    }
    console.log(accounts);
    return new SearchAllBankAccountsResponse(accounts);
  }

}

export class SearchAllBankAccountsResponse{
  constructor(public readonly accounts: BankAccountOrm[]) {}
}


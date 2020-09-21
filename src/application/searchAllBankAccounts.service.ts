import { BankAccountOrm } from '../infrastructure/database/entity/bankAccount.orm.repository';
import { BankAccountRepository } from '../infrastructure/repositories/bankAccount.repository';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchAllBankAccountsService{

  repository: BankAccountRepository;

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getCustomRepository(BankAccountRepository);
  }

  async execute() : Promise<SearchAllBankAccountsResponse>{

    const accounts: BankAccountOrm[] = await this.repository.searchAll();
    console.log(accounts);
    return new SearchAllBankAccountsResponse(accounts);
  }

}

export class SearchAllBankAccountsResponse{
  constructor(public readonly accounts: BankAccountOrm[]) {}
}


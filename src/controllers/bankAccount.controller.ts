import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {CreateBankAccountRequest, CreateBankAccountResponse, CreateBankAccountService } from '../application/createBankAccount.service';
import {
  ConsignBankAccountRequest,
  ConsignBankAccountResponse, ConsignBankAccountService,
} from '../application/consignBankAccount.service';
import {
  SearchAllBankAccountsResponse, SearchAllBankAccountsService,
} from '../application/searchAllBankAccounts.service';
import { IUnitOfWork } from '../infrastructure/contracts/unitOfWork.interface';
import { UnitOfWork } from '../infrastructure/unitOfWork/unitOfWork';

@Controller('bankAccount')
export class BankAccountController{

  constructor(private readonly _unitOfWork: UnitOfWork) {
  }

  @Post()
  async createBankAccount(@Body() request: CreateBankAccountRequest){
    const service: CreateBankAccountService = new CreateBankAccountService(this._unitOfWork);
    const res: CreateBankAccountResponse = await this._unitOfWork.complete(async () => await service.execute(request))
    return res.message;
  }

  @Put()
  async consignBankAccount(@Body() request: ConsignBankAccountRequest){
    const service: ConsignBankAccountService = new ConsignBankAccountService(this._unitOfWork);
    const res: ConsignBankAccountResponse = await this._unitOfWork.complete(async () => await service.execute(request))
    return res.message;
  }

  @Get()
  async getAllBankAccounts(){
    const res: SearchAllBankAccountsResponse = await this._unitOfWork.complete(async () => await new SearchAllBankAccountsService(this._unitOfWork).execute());
    return res;
  }

}

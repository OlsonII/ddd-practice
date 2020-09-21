import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {CreateBankAccountRequest, CreateBankAccountResponse, CreateBankAccountService } from '../application/createBankAccount.service';
import {
  ConsignBankAccountRequest,
  ConsignBankAccountResponse,
  ConsignBankAccountService,
} from '../application/consignBankAccount.service';
import {
  SearchAllBankAccountsResponse,
  SearchAllBankAccountsService,
} from '../application/searchAllBankAccounts.service';

@Controller('bankAccount')
export class BankAccountController{

  constructor(
    private readonly createBankAccountService: CreateBankAccountService,
    private readonly consignBankAccountService: ConsignBankAccountService,
    private readonly searchBankAccountService: SearchAllBankAccountsService
  ) { }

  @Post()
  async createBankAccount(@Body() request: CreateBankAccountRequest){
    const res: CreateBankAccountResponse = await this.createBankAccountService.execute(request)
    return res.message;
  }

  @Put()
  async consignBankAccount(@Body() request: ConsignBankAccountRequest){
    const res: ConsignBankAccountResponse = await this.consignBankAccountService.execute(request);
    return res.message;
  }

  @Get()
  async getAllBankAccounts(){
    const res: SearchAllBankAccountsResponse = await this.searchBankAccountService.execute();
    return res;
  }

}

import { Body, Controller, Post } from '@nestjs/common';
import {CreateBankAccountRequest, CreateBankAccountResponse, CreateBankAccountService } from '../application/createBankAccount.service';

@Controller('bankAccount')
export class BankAccountController{

  constructor(private readonly createBankAccountService: CreateBankAccountService) {}

  @Post()
  async createBankAccount(@Body() request: CreateBankAccountRequest){
    const res: CreateBankAccountResponse = await this.createBankAccountService.execute(request)
    return res.message;
  }

}

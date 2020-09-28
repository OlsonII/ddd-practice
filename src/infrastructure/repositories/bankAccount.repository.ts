import { GenericRepository } from '../base/generic.repository';
import { BankAccountOrm } from '../database/entity/bankAccount.orm.repository';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository(BankAccountOrm)
export class BankAccountRepository extends GenericRepository<BankAccountOrm>{}

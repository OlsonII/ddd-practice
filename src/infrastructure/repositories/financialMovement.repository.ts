import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { FinancialMovementOrm } from '../database/entity/financialMovement.orm.repository';
import { GenericRepository } from '../base/generic.repository';


@Injectable()
@EntityRepository(FinancialMovementOrm)
export class FinancialMovementRepository extends GenericRepository<FinancialMovementOrm>{

  searchAllById(id: any): Promise<FinancialMovementOrm[]>{
    return this.find({ where: { bankAccount: id} });
  }

}

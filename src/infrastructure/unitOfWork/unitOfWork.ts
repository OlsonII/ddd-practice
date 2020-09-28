import { IUnitOfWork } from '../contracts/unitOfWork.interface';
import { Connection, EntityManager, QueryRunner } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { BankAccountRepository } from '../repositories/bankAccount.repository';
import { FinancialMovementRepository } from '../repositories/financialMovement.repository';

@Injectable()
export class UnitOfWork implements IUnitOfWork{

  private readonly queryRunner: QueryRunner;
  private transactionManager: EntityManager;
  public bankAccountRepository: BankAccountRepository;
  public financialMovementRepository: FinancialMovementRepository;

  constructor(@Inject('DATABASE_CONNECTION') private readonly asyncDatabaseConnection: Connection) {
    this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();
    this.bankAccountRepository = this.asyncDatabaseConnection.getCustomRepository(BankAccountRepository);
    this.financialMovementRepository = this.asyncDatabaseConnection.getCustomRepository(FinancialMovementRepository);
  }

  setTransactionManager(){
    this.transactionManager = this.queryRunner.manager;
  }

  async complete(work: () => any): Promise<any> {
    try{
      const response = await work();
      await this.queryRunner.commitTransaction();
      return response;
    }catch (error){
      await this.queryRunner.rollbackTransaction();
      return error.toString();
    }finally {
      await this.queryRunner.release();
    }
  }

  async start() {
    await this.queryRunner.startTransaction();
    this.setTransactionManager();
  }

}
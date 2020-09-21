import { Transaction } from "./transaction.entity";
import { IFinancialServicesInterface } from './iFinancialServices.interface';
import { FinancialMovement } from './financialMovement.entity';

export class BankAccount implements IFinancialServicesInterface{

  public balance: number;
  public name: string;
  public number: string;
  public city: string;
  public movements: FinancialMovement[];

  constructor() {
    this.balance = 0;
    this.movements = [];
  }

  public consign(transaction: Transaction) {
    const movement: FinancialMovement = new FinancialMovement();
    movement.bankAccount = this.number;
    movement.consignValue = parseInt(transaction.value.toString());
    movement.movementDate = Date();
    movement.withdrawalValue = 0;
    this.balance += movement.consignValue;
    this.movements.push(movement);
  }

  public move(financialService: IFinancialServicesInterface, transaction: Transaction) {
    this.withdrawal(transaction);
    financialService.consign(transaction);
  }

  public withdrawal(transaction: Transaction) {
    this.balance -= transaction.value;
  }

}

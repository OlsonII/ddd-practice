import { Transaction } from "./transaction.entity";
import { IFinancialServicesInterface } from './iFinancialServices.interface';
import { FinancialMovement } from './financialMovement.entity';

export class BankAccount implements IFinancialServicesInterface{

  public balance: number;
  public name: string;
  public number: string;
  public city: string;
  public movements: FinancialMovement[];

  public consign(transaction: Transaction) {
    const movement: FinancialMovement = new FinancialMovement();
    movement.consignValue = transaction.value;
    movement.movementDate = Date();
    this.balance += transaction.value
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

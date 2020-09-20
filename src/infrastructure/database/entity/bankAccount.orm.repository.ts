import { FinancialMovementOrm } from './financialMovement.orm.repository';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class BankAccountOrm{

  @Column()
  public balance: number;

  @Column()
  public name: string;

  @PrimaryColumn()
  public number: string;

  @Column()
  public city: string;

  @OneToMany(type => FinancialMovementOrm, financialMovement => financialMovement.id)
  public movements: FinancialMovementOrm[];

}

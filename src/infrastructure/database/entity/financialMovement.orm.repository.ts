import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BankAccountOrm } from './bankAccount.orm.repository';

@Entity()
export class FinancialMovementOrm{

  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => BankAccountOrm, account => account.movements)
  @JoinColumn({name : 'bankAccount'})
  bankAccount: string;
  @Column({default: 0})
  consignValue: number;
  @Column({default: 0})
  withdrawalValue: number;
  @Column()
  movementDate: string;

}

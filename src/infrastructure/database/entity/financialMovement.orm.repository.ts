import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FinancialMovementOrm{

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bankAccount: string;
  @Column()
  consignValue: number;
  @Column()
  withdrawalValue: number;
  @Column()
  movementDate: string;

}

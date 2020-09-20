import { GenericRepository } from '../base/generic.repository';
import { BankAccountOrm } from '../database/entity/bankAccount.orm.repository';


export class BankAccountRepository extends GenericRepository<BankAccountOrm>{}

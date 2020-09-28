import { FinancialMovementOrm } from '../database/entity/financialMovement.orm.repository';
import { GenericRepository } from '../base/generic.repository';
export declare class FinancialMovementRepository extends GenericRepository<FinancialMovementOrm> {
    searchAllById(id: any): Promise<FinancialMovementOrm[]>;
}

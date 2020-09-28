import { Connection } from 'typeorm';
import { IUnitOfWork } from '../contracts/unitOfWork.interface';
export declare class UnitOfWorkFactory {
    private readonly connection;
    constructor(connection: Connection);
    makeUnitOfWork(ormType: string): IUnitOfWork;
}

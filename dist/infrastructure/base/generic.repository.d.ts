import { Repository } from 'typeorm';
import { IRepository } from '../contracts/repo.interface';
export declare class GenericRepository<T> extends Repository<T> implements IRepository<T> {
    saveData(entity: T): Promise<T>;
    searchAll(): Promise<T[]>;
    searchData(id: any): Promise<T>;
}

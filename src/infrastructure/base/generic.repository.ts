import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IRepository } from '../contracts/repo.interface';

@Injectable()
export class GenericRepository<T> extends Repository<T> implements IRepository<T>{

  async saveData(entity: T): Promise<T> {
    return this.save(entity);
  }

  searchAll(): Promise<T[]> {
    return this.find();
  }

  searchData(id: any): Promise<T> {
    return this.findOne(id);
  }

}

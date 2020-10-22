import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenericRepository<T> extends Repository<T>{}

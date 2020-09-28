import { IUnitOfWork } from '../../src/infrastructure/contracts/unitOfWork.interface';
import {
  CreateBankAccountRequest,
  CreateBankAccountResponse,
  CreateBankAccountService,
} from '../../src/application/createBankAccount.service';
import { createConnection } from 'typeorm';
import { UnitOfWork } from '../../src/infrastructure/unitOfWork/unitOfWork';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');

describe('Bank Account Tests', ()=>{

  let unitOfWork: IUnitOfWork;

  beforeEach(async ()=>{
    unitOfWork = new UnitOfWork(await createConnection({
      name: 'test',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      dropSchema: true,
      synchronize: true,
      logging: true,
      username: 'root',
      password: '1981',
      database: 'financial_services_test',
      entities: ['src/infrastructure/database/entity/*.ts']
    }));
  })

  it('create Bank Account', async ()=>{
    const service: CreateBankAccountService = new CreateBankAccountService(unitOfWork);
    const request: CreateBankAccountRequest = new CreateBankAccountRequest();
    request.city = 'Valledupar';
    request.name = 'AccountTest';
    request.number = '1111';
    request.type = 'Ahorro';
    const response: CreateBankAccountResponse = await unitOfWork.complete(() => service.execute(request));
    assert.equal(response.message, 'Cuenta de Ahorro 1111 creada satisfactoriamente');
  })

})
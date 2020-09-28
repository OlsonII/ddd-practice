"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1981',
            database: 'FINANCIAL_SERVICES_TEST',
            entities: [
                'dist/infrastructure/database/entity/*.js',
            ],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.provider.js.map
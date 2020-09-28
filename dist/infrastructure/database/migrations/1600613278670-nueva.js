"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nueva1600613278670 = void 0;
class nueva1600613278670 {
    constructor() {
        this.name = 'nueva1600613278670';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `financial_movement_orm` (`id` int NOT NULL AUTO_INCREMENT, `bankAccount` varchar(255) NOT NULL, `consignValue` int NOT NULL, `withdrawalValue` int NOT NULL, `movementDate` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bank_account_orm` (`balance` int NOT NULL, `name` varchar(255) NOT NULL, `number` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, PRIMARY KEY (`number`)) ENGINE=InnoDB");
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE `bank_account_orm`");
        await queryRunner.query("DROP TABLE `financial_movement_orm`");
    }
}
exports.nueva1600613278670 = nueva1600613278670;
//# sourceMappingURL=1600613278670-nueva.js.map
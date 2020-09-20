/*
import {MigrationInterface, QueryRunner} from "typeorm";

export class nueva1600613278670 implements MigrationInterface {
    name = 'nueva1600613278670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `financial_movement_orm` (`id` int NOT NULL AUTO_INCREMENT, `bankAccount` varchar(255) NOT NULL, `consignValue` int NOT NULL, `withdrawalValue` int NOT NULL, `movementDate` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bank_account_orm` (`balance` int NOT NULL, `name` varchar(255) NOT NULL, `number` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, PRIMARY KEY (`number`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `bank_account_orm`");
        await queryRunner.query("DROP TABLE `financial_movement_orm`");
    }

}
*/

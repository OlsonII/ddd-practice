"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
const financialMovement_entity_1 = require("./financialMovement.entity");
class BankAccount {
    constructor() {
        this.balance = 0;
        this.movements = [];
    }
    consign(transaction) {
        const movement = new financialMovement_entity_1.FinancialMovement();
        movement.bankAccount = this.number;
        movement.consignValue = parseInt(transaction.value.toString());
        movement.movementDate = Date();
        movement.withdrawalValue = 0;
        this.balance += movement.consignValue;
        this.movements.push(movement);
    }
    move(financialService, transaction) {
        this.withdrawal(transaction);
        financialService.consign(transaction);
    }
    withdrawal(transaction) {
        this.balance -= transaction.value;
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=bankAccount.entity.js.map
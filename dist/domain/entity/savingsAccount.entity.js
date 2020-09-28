"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const financialMovement_entity_1 = require("./financialMovement.entity");
const bankAccount_entity_1 = require("./bankAccount.entity");
class SavingsAccount extends bankAccount_entity_1.BankAccount {
    constructor() {
        super();
        this.maxWithdrawal = 20000;
        this.costWithdrawal = 5000;
        this.movements = [];
    }
    consign(transaction) {
        if (this.verifyFirstConsign() && transaction.value >= 50000) {
            super.consign(transaction);
        }
        else if (!this.verifyFirstConsign() && transaction.value >= 0) {
            if (!this.city.localeCompare(transaction.city))
                transaction.value -= 10000;
            super.consign(transaction);
        }
    }
    withdrawal(transaction) {
        if (!this.validateMonthWithdrawals())
            transaction.value += this.costWithdrawal;
        const newBalance = this.balance - transaction.value;
        if (newBalance >= this.maxWithdrawal) {
            let movement = new financialMovement_entity_1.FinancialMovement();
            movement.withdrawalValue = transaction.value;
            movement.movementDate = Date();
            this.balance = newBalance;
            this.movements.push(movement);
        }
    }
    validateMonthWithdrawals() {
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let count = 0;
        for (let _i = 0; _i < this.movements.length; _i++) {
            let monthOfMovement = new Date(this.movements[_i].movementDate).getMonth();
            let yearOfMovement = new Date(this.movements[_i].movementDate).getFullYear();
            if (year == yearOfMovement && month == monthOfMovement) {
                count++;
            }
        }
        return count < 3;
    }
    verifyFirstConsign() {
        if (this.movements == undefined) {
            this.movements = [];
            return true;
        }
        return false;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=savingsAccount.entity.js.map
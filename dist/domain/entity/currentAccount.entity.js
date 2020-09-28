"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const bankAccount_entity_1 = require("./bankAccount.entity");
const financialMovement_entity_1 = require("./financialMovement.entity");
class CurrentAccount extends bankAccount_entity_1.BankAccount {
    constructor() {
        super(...arguments);
        this._minimumWithdrawal = -100000;
    }
    consign(transaction) {
        if (this.verifyFirstConsign() && transaction.value >= 100000) {
            super.consign(transaction);
        }
        else if (!this.verifyFirstConsign()) {
            super.consign(transaction);
        }
    }
    withdrawal(transaction) {
        let newBalance = this.balance - this.applyTax(transaction.value);
        if (newBalance >= this._minimumWithdrawal) {
            let movement = new financialMovement_entity_1.FinancialMovement();
            movement.withdrawalValue = transaction.value;
            movement.movementDate = Date();
            this.balance = newBalance;
            this.movements.push(movement);
        }
    }
    verifyFirstConsign() {
        return this.movements.length == 0;
    }
    applyTax(value) {
        return (value + (value * 4 / 1000));
    }
}
exports.CurrentAccount = CurrentAccount;
//# sourceMappingURL=currentAccount.entity.js.map
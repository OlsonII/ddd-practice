"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountFactory = void 0;
const savingsAccount_entity_1 = require("../entity/savingsAccount.entity");
const currentAccount_entity_1 = require("../entity/currentAccount.entity");
class BankAccountFactory {
    create(accountType) {
        switch (accountType) {
            case 'Ahorro':
                return new savingsAccount_entity_1.SavingsAccount();
            case 'Corriente':
                return new currentAccount_entity_1.CurrentAccount();
        }
    }
}
exports.BankAccountFactory = BankAccountFactory;
//# sourceMappingURL=bankAccount.factory.js.map
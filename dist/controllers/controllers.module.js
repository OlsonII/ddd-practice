"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersModule = void 0;
const common_1 = require("@nestjs/common");
const bankAccount_controller_1 = require("./bankAccount.controller");
const application_module_1 = require("../application/application.module");
const infrastructure_module_1 = require("../infrastructure/infrastructure.module");
let ControllersModule = class ControllersModule {
};
ControllersModule = __decorate([
    common_1.Module({
        imports: [
            application_module_1.ApplicationModule,
            infrastructure_module_1.InfrastructureModule
        ],
        controllers: [bankAccount_controller_1.BankAccountController],
    })
], ControllersModule);
exports.ControllersModule = ControllersModule;
//# sourceMappingURL=controllers.module.js.map
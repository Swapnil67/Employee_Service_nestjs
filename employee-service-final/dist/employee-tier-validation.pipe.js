"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTierValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const Employees_enums_1 = require("./employees/Employees.enums");
let EmployeeTierValidationPipe = class EmployeeTierValidationPipe {
    transform(value, metadata) {
        if (!(value.tier in Employees_enums_1.EmployeeTier)) {
            throw new common_1.BadRequestException(`${value.tier} is not a valid tier`);
        }
        console.log(value);
        return value;
    }
};
EmployeeTierValidationPipe = __decorate([
    common_1.Injectable()
], EmployeeTierValidationPipe);
exports.EmployeeTierValidationPipe = EmployeeTierValidationPipe;
//# sourceMappingURL=employee-tier-validation.pipe.js.map
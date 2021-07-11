"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Empoloyee_Repository_1 = require("./dto/Empoloyee.Repository");
const employees_controller_1 = require("./employees.controller");
const employees_service_1 = require("./employees.service");
const Employee_Schema_1 = require("./schema/Employee.Schema");
let EmployeesModule = class EmployeesModule {
};
EmployeesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: Employee_Schema_1.Employee.name, schema: Employee_Schema_1.EmployeeSchema }])],
        controllers: [employees_controller_1.EmployeesController],
        providers: [employees_service_1.EmployeesService, Empoloyee_Repository_1.EmployeeRepository],
    })
], EmployeesModule);
exports.EmployeesModule = EmployeesModule;
//# sourceMappingURL=employees.module.js.map
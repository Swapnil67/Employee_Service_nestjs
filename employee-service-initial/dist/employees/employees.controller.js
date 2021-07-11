"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const employees_service_1 = require("./employees.service");
const EmployeeSearch_dto_1 = require("./dto/EmployeeSearch.dto");
const EmployeeCreate_dto_1 = require("./dto/EmployeeCreate.dto");
const employee_tier_validation_pipe_1 = require("../employee-tier-validation.pipe");
let EmployeesController = class EmployeesController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async getAllEmployees(param) {
        console.log(common_1.ValidationPipe);
        if (Object.keys(param).length) {
            console.log('with Paran');
            return this.employeeService.employeeSearch(param);
        }
        else {
            console.log('with no Paran');
            return this.employeeService.getAllEmployees();
        }
    }
    async getEmployeeId(id) {
        return this.employeeService.getEmployeeById(id);
    }
    async createEmployee(emplolyeeCreateDto) {
        return this.employeeService.createEmployee(emplolyeeCreateDto);
    }
    updateEmployeeId(body, id) {
        return this.employeeService.updateEmployeeById(id, body);
    }
    deleteEmployeeById(id) {
        return this.employeeService.deleteEmployeeById(id);
    }
};
__decorate([
    common_1.Get(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmployeeSearch_dto_1.EmployeeSearchDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "getAllEmployees", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "getEmployeeId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.UsePipes(new employee_tier_validation_pipe_1.EmployeeTierValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmployeeCreate_dto_1.EmployeeCreateDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "createEmployee", null);
__decorate([
    common_1.Put('/update/:id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "updateEmployeeId", null);
__decorate([
    common_1.Delete('/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "deleteEmployeeById", null);
EmployeesController = __decorate([
    common_1.Controller('employees'),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeesController);
exports.EmployeesController = EmployeesController;
//# sourceMappingURL=employees.controller.js.map
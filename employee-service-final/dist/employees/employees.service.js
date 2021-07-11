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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const Empoloyee_Repository_1 = require("./dto/Empoloyee.Repository");
let EmployeesService = class EmployeesService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    getAllEmployees() {
        return this.employeeRepository.findAll();
    }
    async getEmployeeById(id) {
        return await this.employeeRepository.findById(id);
    }
    createEmployee(employeeCreateDto) {
        return this.employeeRepository.create(employeeCreateDto);
    }
    employeeSearch(employeeSearchDto) {
        return this.employeeRepository.FindByNameOrStatus(employeeSearchDto);
    }
    async updateEmployeeById(id, employeeUpdateDto) {
        const employee = this.getEmployeeById(id);
        return await this.employeeRepository.UpdateById(id, employeeUpdateDto);
    }
    async deleteEmployeeById(id) {
        return await this.employeeRepository.DeleteOne(id);
    }
};
EmployeesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Empoloyee_Repository_1.EmployeeRepository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map
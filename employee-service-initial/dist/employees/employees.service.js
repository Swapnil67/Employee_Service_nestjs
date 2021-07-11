"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const employee_model_1 = require("./employee.model");
const uuid_1 = require("uuid");
let EmployeesService = class EmployeesService {
    constructor() {
        this.employees = [];
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployeeById(id) {
        const employees = this.getAllEmployees();
        let employee = employees.find(employee => employee.id === id);
        if (!employee) {
            throw new common_1.NotFoundException(`${id} is not exists`);
        }
        return employee;
    }
    createEmployee(employeeCreateDto) {
        const employee = {
            id: uuid_1.v1(),
            firstName: employeeCreateDto.firstName,
            lastName: employeeCreateDto.lastName,
            destination: employeeCreateDto.designation,
            nearestCity: employeeCreateDto.nearestCity,
            tier: employeeCreateDto.tier,
            status: employee_model_1.EmployeeStatus.ACTIVE,
        };
        this.employees.push(employee);
        return this.employees;
    }
    employeeSearch(employeeSearchDto) {
        const { status, name } = employeeSearchDto;
        console.log(employeeSearchDto);
        let employees = this.getAllEmployees();
        if (status) {
            employees = employees.filter(employee => employee.status === status);
        }
        if (name) {
            employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name));
        }
        return employees;
    }
    updateEmployeeById(id, employeeUpdateDto) {
        const employee = this.getEmployeeById(id);
        employee.firstName = employeeUpdateDto.firstName === undefined ? employee.firstName : employeeUpdateDto.firstName;
        employee.lastName = employeeUpdateDto.lastName === undefined ? employee.lastName : employeeUpdateDto.lastName;
        employee.nearestCity = employeeUpdateDto.nearestCity === undefined ? employee.nearestCity : employeeUpdateDto.nearestCity;
        employee.destination = employeeUpdateDto.destination === undefined ? employee.destination : employeeUpdateDto.destination;
        employee.tier = employeeUpdateDto.tier === undefined ? employee.tier : employeeUpdateDto.tier;
        employee.status = employeeUpdateDto.status === undefined ? employee.status : employeeUpdateDto.status;
        return employee;
    }
    deleteEmployeeById(id) {
        const employees = this.getAllEmployees();
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        return employees.splice(employeeIndex, 1);
    }
};
EmployeesService = __decorate([
    common_1.Injectable()
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map
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
exports.EmployeeRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Employee_Schema_1 = require("../schema/Employee.Schema");
let EmployeeRepository = class EmployeeRepository {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async create(createEmployeeDTO) {
        let newEmployee = new this.employeeModel(createEmployeeDTO);
        return await newEmployee.save();
    }
    async findAll() {
        return await this.employeeModel.find();
    }
    async FindByNameOrStatus(employeeSearchDto) {
        const { status, name } = employeeSearchDto;
        const allEmployees = await this.employeeModel.aggregate([
            {
                "$match": {
                    $or: [
                        { status: status },
                        { firstName: name },
                        { lastName: name }
                    ]
                }
            }
        ]);
        return allEmployees;
    }
    async findById(id) {
        const employee = await this.employeeModel.findOne({ _id: id });
        return employee;
    }
    async UpdateById(id, employeeUpdateDto) {
        var conditions = {
            _id: id
        };
        const employee = await this.employeeModel.findOne({ _id: id });
        var updatedEmployee = {
            firstName: employeeUpdateDto.firstName === undefined ? employee.firstName : employeeUpdateDto.firstName,
            lastName: employeeUpdateDto.lastName === undefined ? employee.lastName : employeeUpdateDto.lastName,
            nearestPlanet: employeeUpdateDto.nearestPlanet === undefined ? employee.nearestPlanet : employeeUpdateDto.nearestPlanet,
            designation: employeeUpdateDto.designation === undefined ? employee.designation : employeeUpdateDto.designation,
            tier: employeeUpdateDto.tier === undefined ? employee.tier : employeeUpdateDto.tier,
            status: employeeUpdateDto.status === undefined ? employee.status : employeeUpdateDto.status,
        };
        await this.employeeModel.findOneAndUpdate(conditions, updatedEmployee);
        return updatedEmployee;
    }
    async DeleteOne(id) {
        return await this.employeeModel.findOneAndDelete({ _id: id });
    }
};
EmployeeRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Employee_Schema_1.Employee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeeRepository);
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=Empoloyee.Repository.js.map
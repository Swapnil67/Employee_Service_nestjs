import { Model } from "mongoose";
import { Employee, EmployeeDocument } from "../schema/Employee.Schema";
import { EmployeeCreateDto } from "./EmployeeCreate.dto";
import { EmployeeSearchDto } from "./EmployeeSearch.dto";
import { EmployeeUpdateDto } from "./EmployeeUpdate.dto";
export declare class EmployeeRepository {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    create(createEmployeeDTO: EmployeeCreateDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    FindByNameOrStatus(employeeSearchDto: EmployeeSearchDto): Promise<Employee[]>;
    findById(id: string): Promise<Employee>;
    UpdateById(id: string, employeeUpdateDto: EmployeeUpdateDto): Promise<Employee>;
    DeleteOne(id: string): Promise<Employee>;
}

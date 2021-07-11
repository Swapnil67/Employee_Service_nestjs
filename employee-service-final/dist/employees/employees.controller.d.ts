import { EmployeesService } from './employees.service';
import { AllEmployeeSearchDto, EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from './dto/EmployeeCreate.dto';
export declare class EmployeesController {
    private employeeService;
    constructor(employeeService: EmployeesService);
    getAllEmployees(param: EmployeeSearchDto | AllEmployeeSearchDto): Promise<import("./schema/Employee.Schema").Employee[]>;
    getEmployeeId(id: string): Promise<import("./schema/Employee.Schema").Employee>;
    createEmployee(emplolyeeCreateDto: EmployeeCreateDto): Promise<import("./schema/Employee.Schema").Employee>;
    updateEmployeeId(body: EmployeeUpdateDto, id: string): Promise<import("./schema/Employee.Schema").Employee>;
    deleteEmployeeById(id: string): Promise<import("./schema/Employee.Schema").Employee>;
}

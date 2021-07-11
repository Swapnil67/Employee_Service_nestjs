import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from './dto/EmployeeCreate.dto';
export declare class EmployeesController {
    private employeeService;
    constructor(employeeService: EmployeesService);
    getAllEmployees(param: EmployeeSearchDto): Promise<import("./employee.model").Employee[]>;
    getEmployeeId(id: string): Promise<import("./employee.model").Employee>;
    createEmployee(emplolyeeCreateDto: EmployeeCreateDto): Promise<import("./employee.model").Employee[]>;
    updateEmployeeId(body: EmployeeUpdateDto, id: string): import("./employee.model").Employee;
    deleteEmployeeById(id: string): import("./employee.model").Employee[];
}

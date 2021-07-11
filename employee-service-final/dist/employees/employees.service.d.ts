import { Employee } from './schema/Employee.Schema';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from './dto/EmployeeCreate.dto';
import { EmployeeRepository } from './dto/Empoloyee.Repository';
export declare class EmployeesService {
    private employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getAllEmployees(): Promise<Employee[]>;
    getEmployeeById(id: string): Promise<Employee>;
    createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee>;
    employeeSearch(employeeSearchDto: EmployeeSearchDto): Promise<Employee[]>;
    updateEmployeeById(id: string, employeeUpdateDto: EmployeeUpdateDto): Promise<Employee>;
    deleteEmployeeById(id: string): Promise<Employee>;
}

import { Employee } from './employee.model';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from './dto/EmployeeCreate.dto';
export declare class EmployeesService {
    private employees;
    getAllEmployees(): Employee[];
    getEmployeeById(id: string): Employee;
    createEmployee(employeeCreateDto: EmployeeCreateDto): Employee[];
    employeeSearch(employeeSearchDto: EmployeeSearchDto): Employee[];
    updateEmployeeById(id: string, employeeUpdateDto: EmployeeUpdateDto): Employee;
    deleteEmployeeById(id: string): Employee[];
}

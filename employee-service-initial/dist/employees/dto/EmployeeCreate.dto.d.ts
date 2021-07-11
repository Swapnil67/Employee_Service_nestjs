import { EmployeeStatus, EmployeeTier } from "../employee.model";
export declare class EmployeeCreateDto {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    nearestCity: string;
    tier: EmployeeTier;
    status: EmployeeStatus;
}

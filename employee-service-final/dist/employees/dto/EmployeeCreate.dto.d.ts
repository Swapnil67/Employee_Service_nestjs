import { EmployeeStatus, EmployeeTier } from "../Employees.enums";
export declare class EmployeeCreateDto {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    nearestPlanet: string;
    tier: EmployeeTier;
    status: EmployeeStatus;
}

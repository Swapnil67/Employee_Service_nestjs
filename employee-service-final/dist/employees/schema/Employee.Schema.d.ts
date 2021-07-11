import { Document } from "mongoose";
import { EmployeeStatus, EmployeeTier } from "../Employees.enums";
export declare type EmployeeDocument = Employee & Document;
export declare class Employee {
    firstName: string;
    lastName: string;
    designation: string;
    nearestPlanet: string;
    tier: EmployeeTier;
    status: EmployeeStatus;
}
export declare const EmployeeSchema: import("mongoose").Schema<Document<Employee, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;

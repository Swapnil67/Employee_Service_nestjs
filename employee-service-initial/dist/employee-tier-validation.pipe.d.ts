import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class EmployeeTierValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}

import { Controller, Get } from '@nestjs/common';

import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly service: CustomerService) {}

    @Get()
    async findAll(): Promise<Array<Customer>> {
        return this.service.findAll();
    }
}

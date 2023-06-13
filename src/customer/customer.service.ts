import { Injectable } from '@nestjs/common';

import { CustomerRepository } from './customer.repository';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(private readonly repository: CustomerRepository) {}

    async findAll(): Promise<Array<Customer>> {
        return this.repository.findAll();
    }
}

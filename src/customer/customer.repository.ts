import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Customer } from './customer.entity';

@Injectable()
export class CustomerRepository {
    constructor(@InjectRepository(Customer) private readonly repository: Repository<Customer>) {}

    async findAll(): Promise<Customer[]> {
        return this.repository.find();
    }

    async exist(accountId: number): Promise<boolean> {
        return (await this.repository.countBy({ accountId })) > 0;
    }

    async create(customer: Customer): Promise<Customer> {
        return this.repository.save(customer);
    }
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Customer } from './customer.entity';

@Injectable()
export class CustomerRepository {
    constructor(@InjectRepository(Customer) private readonly repository: Repository<Customer>) {}

    async findAll(): Promise<Array<Customer>> {
        return this.repository.find();
    }
}

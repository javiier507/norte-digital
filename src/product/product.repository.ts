import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
    constructor(@InjectRepository(Product) private readonly repository: Repository<Product>) {}

    async findAll(): Promise<Array<Product>> {
        return this.repository.find();
    }

    async create(product: Product): Promise<Product> {
        return this.repository.save(product);
    }
}

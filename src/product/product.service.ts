import { Injectable } from '@nestjs/common';

import { ProductRepository } from './product.repository';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(private readonly repository: ProductRepository) {}

    async findAll(): Promise<Array<Product>> {
        return this.repository.findAll();
    }
}

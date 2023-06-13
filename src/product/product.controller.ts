import { Controller, Get } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    
    constructor(private readonly service: ProductService) {}

    @Get()
    async findAll(): Promise<Array<Product>> {
        return this.service.findAll();
    }
}

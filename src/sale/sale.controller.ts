import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { SaleService } from './sale.service';
import { Sale } from './sale.dto';

@Controller('sale')
export class SaleController {
    constructor(private readonly service: SaleService){}

    @Post()
    @HttpCode(201)
    async create(@Body() sale: Sale): Promise<any> {
        this.service.create(sale);
        return 'ola k ase';
    }
}

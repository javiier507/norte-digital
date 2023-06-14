import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { SaleService } from './sale.service';
import { Sale as SaleRequest } from './dto/sale.request';
import { Sale } from './sale.entity';

@Controller('sale')
export class SaleController {
    constructor(private readonly service: SaleService){}

    @Post()
    @HttpCode(201)
    async create(@Body() sale: SaleRequest): Promise<void> {
        this.service.create(sale);
    }

    @Get()
    async findByDate(): Promise<Sale[]> {
        return this.service.findByDate('2023-01-15');
    }
}

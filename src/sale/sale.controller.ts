import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';

import { SaleService } from './sale.service';
import { Sale as SaleRequest } from './dto/sale.request';
import { Sale as SaleResponse } from './dto/sale.response';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';

@Controller('sale')
export class SaleController {
    constructor(private readonly service: SaleService){}

    @Post()
    @HttpCode(201)
    @ApiCreatedResponse({description: 'Venta registrada'})
    async create(@Body() sale: SaleRequest): Promise<void> {
        this.service.create(sale);
    }

    @Get()
    @ApiOkResponse({description: 'Devuelve las ventas de acuerdo a la fecha consultada', type: [SaleResponse]})
    @ApiQuery({name: 'date', description: 'Fecha de la venta'})
    async findByDate(@Query('date') date: string): Promise<SaleResponse[]> {
        return this.service.findByDate(date);
    }
}

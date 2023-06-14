import {
    BadRequestException,
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    Query,
} from '@nestjs/common';

import { SaleService } from './sale.service';
import { Sale as SaleRequest } from './dto/sale.request';
import { Sale as SaleResponse } from './dto/sale.response';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiQuery,
} from '@nestjs/swagger';
import { EntityNotFoundException } from 'src/shared/exceptions';

@Controller('sale')
export class SaleController {
    constructor(private readonly service: SaleService) {}

    @Post()
    @ApiCreatedResponse({ description: 'Venta registrada', status: 201 })
    @ApiBadRequestResponse({ description: 'Hay uno o mas datos invalidos', status: 400 })
    async create(@Body() sale: SaleRequest): Promise<void> {
        try {
            await this.service.create(sale);
        } catch (error) {
            if (error instanceof EntityNotFoundException) {
                throw new BadRequestException(error.message);
            }

            throw new InternalServerErrorException();
        }
    }

    @Get()
    @ApiOkResponse({
        description: 'Devuelve las ventas de acuerdo a la fecha consultada',
        type: [SaleResponse],
    })
    @ApiQuery({ name: 'date', description: 'Fecha de la venta en formato ISO (YYYY-MM-DD)', example: '2020-12-18' })
    async findByDate(@Query('date') date: string): Promise<SaleResponse[]> {
        return this.service.findByDate(date);
    }
}

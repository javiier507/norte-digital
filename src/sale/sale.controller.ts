import { Controller, Post } from '@nestjs/common';

import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
    constructor(private readonly service: SaleService){}

    @Post()
    async create(): Promise<any> {
        return 'ola k ase';
    }
}

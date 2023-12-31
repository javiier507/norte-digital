import { Controller, Get } from '@nestjs/common';

import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) {}

    @Get()
    async findAll(): Promise<Array<Seller>> {
        return this.sellerService.findAll();
    }
}

import { Injectable } from '@nestjs/common';

import { SellerRepository } from './seller.repository';
import { Seller } from './seller.entity';

@Injectable()
export class SellerService {
    constructor(private readonly sellerRepository: SellerRepository) {}

    async findAll(): Promise<Array<Seller>> {
        return this.sellerRepository.findAll();
    }
}

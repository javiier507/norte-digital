import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Seller } from './seller.entity';

@Injectable()
export class SellerRepository {
    constructor(@InjectRepository(Seller) private readonly repository: Repository<Seller>) {}

    async findAll(): Promise<Array<Seller>> {
        return this.repository.find();
    }

    async exist(accountId: number): Promise<boolean> {
        return await this.repository.countBy({accountId}) > 0;
    }
}

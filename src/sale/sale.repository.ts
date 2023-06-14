import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Sale, SaleItem } from './sale.entity';

@Injectable()
export class SaleRepository {
    constructor(@InjectRepository(Sale) private readonly repository: Repository<Sale>) {}

    async create(sale: Sale, saleItem: SaleItem[]): Promise<void> {
        await this.repository.manager.transaction(async transactionalEntityManager => {
            await transactionalEntityManager.save(sale);
            await transactionalEntityManager.save(saleItem);
        });
    }
}

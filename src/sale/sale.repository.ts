import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Sale, SaleItem } from './sale.entity';

@Injectable()
export class SaleRepository {
    constructor(@InjectRepository(Sale) private readonly repository: Repository<Sale>) {}

    async create(sale: Sale, saleItems: SaleItem[]): Promise<void> {
        await this.repository.manager.transaction(async transactionalEntityManager => {
            const saleInserted = await transactionalEntityManager.save(sale);
            const saleItemsMapped: SaleItem[] = saleItems.map(item => {
                let saleItem = new SaleItem();
                saleItem = item;
                saleItem.saleId = saleInserted.id
                return saleItem;
            });
            await transactionalEntityManager.save(saleItemsMapped);
        });
    }
}

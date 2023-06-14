import { Injectable } from '@nestjs/common';

import { SaleRepository } from './sale.repository';
import { Sale, SaleItem } from './sale.entity';
import { Sale as SaleRequest } from './dto/sale.request';
import { Sale as SaleResponse } from './dto/sale.response';

@Injectable()
export class SaleService {
    constructor(private readonly repository: SaleRepository){}

    async create(saleDto: SaleRequest): Promise<void> {
        let sale = new Sale();
        sale.date = saleDto.date;
        sale.customerId = saleDto.customer.id;
        sale.sellerId= saleDto.seller.id;
        sale.branchOfficeId = saleDto.branchOffice.id;
        sale.total = 0;

        const saleItems: SaleItem[] = saleDto.items.map(item => {
            const saleItem = new SaleItem();
            saleItem.quantity = item.quantity;
            saleItem.productId = item.product.id;
            return saleItem; 
        });

        this.repository.create(sale, saleItems);
    }

    async findByDate(date: string): Promise<Sale[]> {
        return this.repository.findByDate(date);
    }
}

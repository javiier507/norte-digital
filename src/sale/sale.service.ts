import { Injectable } from '@nestjs/common';
import { SaleRepository } from './sale.repository';
import { Sale as SaleDto } from './sale.dto';
import { Sale, SaleItem } from './sale.entity';

@Injectable()
export class SaleService {
    constructor(private readonly repository: SaleRepository){}

    async create(saleDto: SaleDto): Promise<void> {
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
}

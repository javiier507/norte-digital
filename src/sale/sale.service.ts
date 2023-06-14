import { Injectable } from '@nestjs/common';

import { SaleRepository } from './sale.repository';
import { Sale, SaleItem } from './sale.entity';
import { Sale as SaleRequest } from './dto/sale.request';
import { Sale as SaleResponse, SaleItem as SaleItemResponse, Product as ProductResponse, BranchOffice as BranchOfficeResponse, Customer as CustomerResponse, Seller as SellerResponse } from './dto/sale.response';

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

    async findByDate(date: string): Promise<SaleResponse[]> {
        const sales = await this.repository.findByDate(date);
        return sales.map(this.mapSales);
    }

    private mapSales(entity: Sale): SaleResponse {
        let sale = new SaleResponse();

        let seller = new SellerResponse();
        seller.rut = entity.seller.account.rut;
        seller.name = entity.seller.account.name;
        seller.lastname = entity.seller.account.lastname;
        seller.telephone = entity.seller.account.telephone;
        seller.birthdate = entity.seller.birthdate;
        seller.email = entity.seller.email;

        let customer = new CustomerResponse();
        customer.rut = entity.customer.account.rut;
        customer.name = entity.customer.account.name;
        customer.lastname = entity.customer.account.lastname;
        customer.telephone = entity.customer.account.telephone;

        let branchOffice = new BranchOfficeResponse();
        branchOffice.country = entity.branchOffice.country;

        let salesItems = entity.items.map((item) => {
            let saleItem = new SaleItemResponse();

            let product = new ProductResponse();
            product.name = item.product.name;
            product.price = item.product.price;
            product.stock = item.product.stock;

            saleItem.quantity = item.quantity;
            saleItem.product = product;

            return saleItem;
        });

        sale.date = entity.date;
        sale.seller = seller;
        sale.customer = customer;
        sale.branchOffice = branchOffice;
        sale.items = salesItems;
        sale.total = entity.total;
        
        return sale;
    }
}

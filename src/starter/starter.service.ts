import { Injectable, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { BranchOfficeRepository } from 'src/branchoffice/branchoffice.repository';
import { CustomerRepository } from 'src/customer/customer.repository';
import { ProductRepository } from 'src/product/product.repository';
import { ProviderRepository } from 'src/provider/provider.repository';
import { SaleRepository } from 'src/sale/sale.repository';
import { SellerRepository } from 'src/seller/seller.repository';
import { Provider, ProviderAddress } from 'src/provider/provider.entity';
import { BranchOffice } from 'src/branchoffice/branchoffice.entity';
import { Product } from 'src/product/product.entity';
import { Seller } from 'src/seller/seller.entity';
import { Account, AccountAddress } from 'src/account/account.entity';
import { Customer } from 'src/customer/customer.entity';
import { Sale, SaleItem } from 'src/sale/sale.entity';

@Injectable()
export class StarterService implements OnModuleInit {
    constructor(
        private readonly providerRepository: ProviderRepository,
        private readonly productRepository: ProductRepository,
        private readonly branchOfficeRepositoy: BranchOfficeRepository,
        private readonly sellerRepository: SellerRepository,
        private readonly customerRepository: CustomerRepository,
        private readonly saleRepository: SaleRepository
    ) {}

    async onModuleInit() {
        
        let provider = new Provider();
        await this.runIterations(100, async () => {
            let providerAddress = new ProviderAddress();
            providerAddress.street = faker.location.street();
            providerAddress.number = 12;
            providerAddress.neighborhood = faker.location.direction();
            providerAddress.city = faker.location.city();
            providerAddress = await this.providerRepository.createAdress(providerAddress);

            provider.rut = faker.string.uuid();
            provider.name = faker.company.name();
            provider.address = providerAddress;
            provider.telephone = faker.phone.number();
            provider.webPage = faker.internet.url();
            provider = await this.providerRepository.create(provider);
        });

        let branchOffice = new BranchOffice();
        await this.runIterations(10, async () => {
            branchOffice.country = faker.location.country();
            branchOffice = await this.branchOfficeRepositoy.create(branchOffice);
        });

        let product = new Product();
        await this.runIterations(110, async () => {
            product.name = faker.commerce.productName();
            product.price = 12;
            product.stock = 20;
            product.provider = provider;
            product = await this.productRepository.create(product);
        });

        let seller = new Seller();
        await this.runIterations(20, async () => {
            let accountAdress = new AccountAddress();
            accountAdress.street = faker.location.street();
            accountAdress.number = 43;
            accountAdress.neighborhood = faker.location.direction();
            accountAdress.city = faker.location.city();
            accountAdress = await this.sellerRepository.createAccountAddress(accountAdress);

            let account = new Account();
            account.rut = faker.string.uuid();
            account.name = faker.person.firstName();
            account.lastname = faker.person.lastName();
            account.telephone = faker.phone.number();
            account.address = accountAdress;
            account = await this.sellerRepository.createAccount(account);

            seller.account = account;
            seller.birthdate = faker.date.birthdate().toISOString();
            seller.email = faker.internet.email();
            seller = await this.sellerRepository.create(seller);
        });

        let customer = new Customer();
        await this.runIterations(100, async () => {
            let accountAdress = new AccountAddress();
            accountAdress.street = faker.location.street();
            accountAdress.number = 25;
            accountAdress.neighborhood = faker.location.direction();
            accountAdress.city = faker.location.city();
            accountAdress = await this.sellerRepository.createAccountAddress(accountAdress);

            let account = new Account();
            account.rut = faker.string.uuid();
            account.name = faker.person.firstName();
            account.lastname = faker.person.lastName();
            account.telephone = faker.phone.number();
            account.address = accountAdress;
            account = await this.sellerRepository.createAccount(account);

            customer.account = account;
            customer = await this.customerRepository.create(customer);
        });

        await this.runIterations(100, async () => {
            let sale = new Sale();
            sale.date = '2020-12-18';
            sale.customer = customer;
            sale.seller = seller;
            sale.branchOffice = branchOffice;
            sale.total = 0;
            
            let saleItem1 = new SaleItem();
            saleItem1.quantity = 2;
            saleItem1.product = product;

            let saleItem2 = new SaleItem();
            saleItem2.quantity = 4;
            saleItem2.product = product;            

            await this.saleRepository.create(sale, [saleItem1, saleItem2]);
        });

        console.log('.............................................................................................');
        console.log('INSERT EJECUTADOS!');        
    }

    private async runIterations(iteration: number, callback) {
        for(let i = 0; i < iteration; i++) {
            await callback();
        }
    }
}

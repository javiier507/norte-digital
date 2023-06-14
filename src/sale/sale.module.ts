import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from 'src/product/product.module';
import { Sale, SaleItem } from './sale.entity';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SaleRepository } from './sale.repository';
import { CustomerModule } from 'src/customer/customer.module';
import { SellerModule } from 'src/seller/seller.module';
import { BranchofficeModule } from 'src/branchoffice/branchoffice.module';

@Module({
    imports: [
        ProductModule,
        TypeOrmModule.forFeature([Sale, SaleItem]),
        CustomerModule,
        SellerModule,
        BranchofficeModule,
    ],
    providers: [SaleRepository, SaleService],
    controllers: [SaleController],
    exports: [SaleRepository]
})
export class SaleModule {}

import { Module } from '@nestjs/common';
import { StarterService } from './starter.service';
import { ProviderModule } from 'src/provider/provider.module';
import { ProductModule } from 'src/product/product.module';
import { SellerModule } from 'src/seller/seller.module';
import { CustomerModule } from 'src/customer/customer.module';
import { SaleModule } from 'src/sale/sale.module';
import { BranchofficeModule } from 'src/branchoffice/branchoffice.module';

@Module({
    imports: [
        ProviderModule,
        ProductModule,
        BranchofficeModule,
        SellerModule,
        CustomerModule,
        SaleModule,
    ],
    providers: [StarterService],
})
export class StarterModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from 'src/product/product.module';
import { Sale, SaleDetail } from './sale.entity';

@Module({
    imports: [
        ProductModule,
        TypeOrmModule.forFeature([Sale, SaleDetail])
    ]
})
export class SaleModule {}

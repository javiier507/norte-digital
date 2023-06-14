import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from 'src/product/product.module';
import { Sale, SaleDetail } from './sale.entity';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SaleRepository } from './sale.repository';

@Module({
    imports: [
        ProductModule,
        TypeOrmModule.forFeature([Sale, SaleDetail])
    ],
    providers: [SaleRepository, SaleService],
    controllers: [SaleController]
})
export class SaleModule {}

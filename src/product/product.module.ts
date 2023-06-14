import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchOffice } from 'src/branchoffice/branchoffice.entity';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';

@Module({
    imports: [BranchOffice, TypeOrmModule.forFeature([Product])],
    providers: [ProductRepository, ProductService],
    controllers: [ProductController],
    exports: [ProductRepository]
})
export class ProductModule {}

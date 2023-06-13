import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchOffice } from 'src/branchoffice/branchoffice.entity';
import { Product } from './product.entity';

@Module({
    imports: [BranchOffice, TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}

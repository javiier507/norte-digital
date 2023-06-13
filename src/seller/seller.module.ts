import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountModule } from 'src/account/account.module';

import { SellerController } from './seller.controller';
import { Seller } from './seller.entity';
import { SellerRepository } from './seller.repository';
import { SellerService } from './seller.service';

@Module({
    controllers: [SellerController],
    imports: [AccountModule, TypeOrmModule.forFeature([Seller])],
    providers: [SellerRepository, SellerService],
})
export class SellerModule {}

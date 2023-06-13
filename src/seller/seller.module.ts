import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SellerController } from './seller.controller';
import { SellerAddress } from './address.entity';
import { Seller } from './seller.entity';
import { SellerRepository } from './seller.repository';
import { SellerService } from './seller.service';

@Module({
  controllers: [SellerController],
  imports: [TypeOrmModule.forFeature([SellerAddress, Seller])],
  providers: [SellerRepository, SellerService]
})
export class SellerModule {}

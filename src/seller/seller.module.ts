import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SellerController } from './seller.controller';
import { SellerRepository } from './seller.repository';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@Module({
  controllers: [SellerController],
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerRepository, SellerService]
})
export class SellerModule {}

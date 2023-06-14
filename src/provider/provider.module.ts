import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProviderController } from './provider.controller';
import { Provider, ProviderAddress } from './provider.entity';
import { ProviderRepository } from './provider.repository';
import { ProviderService } from './provider.service';

@Module({
    controllers: [ProviderController],
    imports: [TypeOrmModule.forFeature([ProviderAddress, Provider])],
    providers: [ProviderRepository, ProviderService],
    exports: [ProviderRepository]
})
export class ProviderModule {}

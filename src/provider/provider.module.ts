import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProviderController } from './provider.controller';
import { Provider } from './provider.entity';
import { ProviderRepository } from './provider.repository';
import { ProviderService } from './provider.service';

@Module({
    controllers: [ProviderController],
    imports: [TypeOrmModule.forFeature([Provider])],
    providers: [ProviderRepository, ProviderService]
})
export class ProviderModule {}

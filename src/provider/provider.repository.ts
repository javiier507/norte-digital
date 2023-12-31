import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Provider, ProviderAddress } from './provider.entity';

@Injectable()
export class ProviderRepository {
    constructor(@InjectRepository(Provider) private readonly repository: Repository<Provider>) {}

    async findAll(): Promise<Array<Provider>> {
        return this.repository.find();
    }

    async createAdress(address: ProviderAddress): Promise<ProviderAddress> {
        return this.repository.manager.save(address);
    }

    async create(provider: Provider): Promise<Provider> {
        return this.repository.save(provider);
    }
}

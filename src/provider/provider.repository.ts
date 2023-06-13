import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Provider } from './provider.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProviderRepository {
    constructor(@InjectRepository(Provider) private readonly repository: Repository<Provider>) {}

    async findAll(): Promise<Array<Provider>> {
        return this.repository.find();
    }
}

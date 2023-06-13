import { Injectable } from '@nestjs/common';

import { ProviderRepository } from './provider.repository';
import { Provider } from './provider.entity';

@Injectable()
export class ProviderService {

    constructor(private readonly providerRepository: ProviderRepository) {}

    async findAll(): Promise<Array<Provider>> {
        return this.providerRepository.findAll();
    }
}

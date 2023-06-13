import { Controller, Get } from '@nestjs/common';

import { ProviderRepository } from './provider.repository';
import { Provider } from './provider.entity';

@Controller('provider')
export class ProviderController {

    constructor(private readonly providerRepository: ProviderRepository) {}

    @Get()
    async findAll(): Promise<Array<Provider>> {
        return this.providerRepository.findAll();
    }
}

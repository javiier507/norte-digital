import { Controller, Get } from '@nestjs/common';

import { ProviderService } from './provider.service';
import { Provider } from './provider.entity';

@Controller('provider')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {}

    @Get()
    async findAll(): Promise<Array<Provider>> {
        return this.providerService.findAll();
    }
}

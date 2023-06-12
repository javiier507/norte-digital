import { Controller, Get } from '@nestjs/common';

@Controller('provider')
export class ProviderController {
    @Get()
    findAll(): string {
        return 'providers!';
    }
}

import { Controller, Get } from '@nestjs/common';

import { BranchofficeService } from './branchoffice.service';
import { BranchOffice } from './branchoffice.entity';

@Controller('branchoffice')
export class BranchofficeController {
    constructor(private readonly branchOfficeService: BranchofficeService) {}

    @Get()
    async findAll(): Promise<Array<BranchOffice>> {
        return this.branchOfficeService.findAll();
    }
}

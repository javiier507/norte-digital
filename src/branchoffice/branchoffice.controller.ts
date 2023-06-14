import { Controller, Get } from '@nestjs/common';

import { BranchofficeService } from './branchoffice.service';
import { BranchOffice } from './branchoffice.entity';

@Controller('branch-office')
export class BranchofficeController {
    constructor(private readonly branchOfficeService: BranchofficeService) {}

    @Get()
    async findAll(): Promise<Array<BranchOffice>> {
        return this.branchOfficeService.findAll();
    }
}

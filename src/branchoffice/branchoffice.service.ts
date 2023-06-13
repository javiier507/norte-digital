import { Injectable } from '@nestjs/common';
import { BranchOfficeRepository } from './branchoffice.repository';

import { BranchOffice } from './branchoffice.entity';

@Injectable()
export class BranchofficeService {
    constructor(private readonly branchOfficeRepository: BranchOfficeRepository) {}

    async findAll(): Promise<Array<BranchOffice>> {
        return this.branchOfficeRepository.findAll();
    }
}

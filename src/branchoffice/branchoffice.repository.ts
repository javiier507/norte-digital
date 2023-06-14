import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BranchOffice } from './branchoffice.entity';

@Injectable()
export class BranchOfficeRepository {
    constructor(
        @InjectRepository(BranchOffice) private readonly repository: Repository<BranchOffice>,
    ) {}

    async findAll(): Promise<Array<BranchOffice>> {
        return this.repository.find();
    }

    async exist(id: number): Promise<boolean> {
        return await this.repository.countBy({id}) > 0;
    }
}

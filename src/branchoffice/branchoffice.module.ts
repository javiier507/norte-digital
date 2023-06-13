import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchofficeController } from './branchoffice.controller';
import { BranchOffice } from './branchoffice.entity';
import { BranchofficeService } from './branchoffice.service';
import { BranchOfficeRepository } from './branchoffice.repository';

@Module({
    controllers: [BranchofficeController],
    imports: [TypeOrmModule.forFeature([BranchOffice])],
    providers: [BranchOfficeRepository, BranchofficeService],
})
export class BranchofficeModule {}

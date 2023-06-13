import { Test, TestingModule } from '@nestjs/testing';
import { BranchofficeController } from './branchoffice.controller';

describe('BranchofficeController', () => {
    let controller: BranchofficeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BranchofficeController],
        }).compile();

        controller = module.get<BranchofficeController>(BranchofficeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

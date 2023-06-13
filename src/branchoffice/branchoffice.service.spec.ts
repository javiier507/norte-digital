import { Test, TestingModule } from '@nestjs/testing';
import { BranchofficeService } from './branchoffice.service';

describe('BranchofficeService', () => {
  let service: BranchofficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchofficeService],
    }).compile();

    service = module.get<BranchofficeService>(BranchofficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

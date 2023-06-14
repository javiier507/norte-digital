import { Test, TestingModule } from '@nestjs/testing';
import { StarterService } from './starter.service';

describe('StarterService', () => {
    let service: StarterService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StarterService],
        }).compile();

        service = module.get<StarterService>(StarterService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

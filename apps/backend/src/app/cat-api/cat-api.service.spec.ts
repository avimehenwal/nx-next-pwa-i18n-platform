import { Test, TestingModule } from '@nestjs/testing';
import { CatApiService } from './cat-api.service';

describe('CatApiService', () => {
  let service: CatApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatApiService],
    }).compile();

    service = module.get<CatApiService>(CatApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

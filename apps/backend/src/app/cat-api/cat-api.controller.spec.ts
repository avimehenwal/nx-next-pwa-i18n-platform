import { Test, TestingModule } from '@nestjs/testing';
import { CatApiController } from './cat-api.controller';
import { CatApiService } from './cat-api.service';

describe('CatApiController', () => {
  let controller: CatApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatApiController],
      providers: [CatApiService],
    }).compile();

    controller = module.get<CatApiController>(CatApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

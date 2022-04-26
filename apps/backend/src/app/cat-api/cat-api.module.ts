import { Module } from '@nestjs/common';
import { CatApiService } from './cat-api.service';
import { CatApiController } from './cat-api.controller';

@Module({
  controllers: [CatApiController],
  providers: [CatApiService],
})
export class CatApiModule {}

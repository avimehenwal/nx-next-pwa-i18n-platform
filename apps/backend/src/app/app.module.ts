import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatApiModule } from './cat-api/cat-api.module';

@Module({
  imports: [CatApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

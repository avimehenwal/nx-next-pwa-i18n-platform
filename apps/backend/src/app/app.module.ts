import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatApiModule } from './cat-api/cat-api.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CatApiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

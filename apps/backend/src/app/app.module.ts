import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatApiModule } from './cat-api/cat-api.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';

@Module({
  imports: [CatApiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}

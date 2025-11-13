import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { IconsModule } from './icons/icons.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, IconsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { StudentModule } from './models/student/student.module';

@Module({
  imports: [PrismaModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

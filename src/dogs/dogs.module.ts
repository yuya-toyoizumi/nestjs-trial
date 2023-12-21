import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { PrismaService } from './../prisma.service'

@Module({
  controllers: [DogsController],
  providers: [DogsService, PrismaService],
})
export class DogsModule {}

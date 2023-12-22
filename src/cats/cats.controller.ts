import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats' 
  }
}


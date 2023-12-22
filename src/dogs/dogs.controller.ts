import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.createDog(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.dogs({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.dog(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.updateDog(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.deleteDog(+id);
  }
}

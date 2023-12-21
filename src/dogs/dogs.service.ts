import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from './../prisma.service'
import { Dog, Prisma } from '@prisma/client';

@Injectable()
export class DogsService {
  constructor(private prisma: PrismaService) {}

  createDog(createDogDto: CreateDogDto) {
   return 'This action adds a new dog';
  }

  async dogs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DogWhereUniqueInput;
    where?: Prisma.DogWhereInput;
    orderBy?: Prisma.DogOrderByWithRelationInput;
  }): Promise<Dog[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  dog(id: number) {
    return `This action returns a #${id} dog`;
  }

  updateDog(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  deleteDog(id: number) {
    return `This action removes a #${id} dog`;
  }
}

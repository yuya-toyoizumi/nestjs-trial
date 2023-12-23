import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from './../prisma.service'
import { Dog, Prisma } from '@prisma/client';

@Injectable()
export class DogsService {
  constructor(private prisma: PrismaService) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    return this.prisma.dog.create({ data: createDogDto });
  }

  async findAll(): Promise<Dog[]> {
    return this.prisma.dog.findMany();
  }

  async findOne(id: string): Promise<Dog | null> {
    return this.prisma.dog.findUnique({ where: { id } });
  }

  async update(id: string, updateDogDto: UpdateDogDto): Promise<Dog> {
    return this.prisma.dog.update({
      where: { id },
      data: updateDogDto,
    });
  }

  async delete(id: string): Promise<Dog> {
    return this.prisma.dog.delete({ where: { id } });
  }
}

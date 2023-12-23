import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDogDto {
  @IsString()
  @ApiProperty({
    description: 'The name of a dog',
    default: 'shiba inu',
  })
  name: string;
}

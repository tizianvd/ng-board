import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  login = "";

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username = "";

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password = "";
}

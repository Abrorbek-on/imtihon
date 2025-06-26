import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { Length } from 'sequelize-typescript';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  full_name: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('UZ')
  phone: string;

  @IsOptional()
  @IsString()
  country: string;
}
    
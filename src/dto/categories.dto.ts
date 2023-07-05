import { MinLength, IsString } from 'class-validator';

export class CategoryDto {
  @MinLength(5, { message: 'This field must be than 5 character!' })
  categoryName?: string;

  @IsString()
  description?: string;
}

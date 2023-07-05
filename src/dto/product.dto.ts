import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  categoryId?: number;

  @MinLength(5, { message: 'this field must be longer than 5 character' })
  productName?: string;

  @IsNumber()
  price?: number;
}

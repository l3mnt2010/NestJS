import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class carDto {
  @IsNotEmpty()
  category_Id?: number;
  @MinLength(1, { message: 'this field must be longer than 1 character' })
  carName?: string;
  @IsNumber()
  price?: number;
}

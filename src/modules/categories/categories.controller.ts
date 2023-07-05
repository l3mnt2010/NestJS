import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  Body,
  Put,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Response } from 'src/global/globalClass';
import { Categories } from 'src/models/categories.model';
import { HttpMessage, HttpStatus } from '../../global/gobalEnum';
import { ResponseType } from '../../global/globalType';
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async listCategory(): Promise<ResponseType<Categories[]>> {
    try {
      return await new Response<Categories[]>(
        await this.categoryService.getCategories(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return await new Response<Categories[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}

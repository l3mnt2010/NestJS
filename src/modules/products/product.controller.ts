import {
  Get,
  Post,
  Body,
  Controller,
  Put,
  Delete,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { Response } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/gobalEnum';
import { Products } from 'src/models/products.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts(): Response<Products[]> {
    try {
      return new Response<Products[]>(
        this.productsService.getProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new Response<Products[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post('creatProduct')
  createProduct(data: Products): Response<Products[]> {
    try {
      return new Response<Products[]>(
        this.productsService.createProduct(data),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new Response<Products[]>(
        null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    }
  }
  @Post('newProduct')
  newProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): Response<Products> {
    try {
      return new Response<Products>(
        this.productsService.newProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new Response<Products>(
        null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    }
  }

  @Get('/:id')
  getDetailProduct(@Param('id') id: number): Response<Products> {
    try {
      return new Response<Products>(
        this.productsService.getDetailProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new Response<Products>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
  @Put('/:id')
  putProduct(
    @Body() productDto: ProductDto,
    @Param('id')
    id: number,
  ): Response<Products> {
    try {
      return new Response<Products>(
        this.productsService.updateProduct(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new Response<Products>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
  @Delete('/:id')
  deleteProduct(@Param('id') id: number): Response<string> {
    try {
      return new Response<string>(
        this.productsService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new Response<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}

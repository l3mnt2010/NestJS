import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Products } from 'src/models/products.model';

@Injectable()
export class ProductsService {
  private products: Products[] = [
    { id: 1, categoryId: 5, productName: 'Game', price: 80000 },
    { id: 2, categoryId: 6, productName: 'Gamer', price: 80001 },
    { id: 3, categoryId: 7, productName: 'Hunter', price: 80002 },
    { id: 4, categoryId: 8, productName: 'Killer', price: 80003 },
  ];
  getProducts(): Products[] {
    return this.products;
  }
  createProduct(data: Products): Products[] {
    this.products.push(data);
    return this.products;
  }
  newProduct(productDto: ProductDto): Products {
    const product: Products = {
      id: this.products.length + 1,
      ...productDto,
    };
    this.products.push(product);
    return product;
  }
  getDetailProduct(id: number): Products {
    return this.products.find((itm) => itm.id === Number(id));
  }
  updateProduct(productDto: ProductDto, id: number): Products {
    const index: number = this.products.findIndex(
      (itm) => itm.id === Number(id),
    );
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].productName = productDto.productName;
    this.products[index].price = productDto.price;
    return this.products[index];
  }
  deleteProduct(id: number): string {
    const index: number = this.products.findIndex(
      (itm) => itm.id === Number(id),
    );
    if (index !== null && index >= 0 && index < this.products.length) {
      try {
        this.products.filter((itm) => itm.id === index);
        return 'Deleted item success';
      } catch (e) {
        return 'Delete failed';
      }
    } else {
      return 'Delete Failed !!!';
    }
  }
}

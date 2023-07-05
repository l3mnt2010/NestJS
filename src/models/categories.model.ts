export class Categories {
  id?: number;
  categoryId?: number;
  productName?: string;
  price?: number;
  constructor({ id, categoryId, productName, price }) {
    if (this.id !== null) this.id = id;
    if (this.categoryId !== null) this.categoryId = categoryId;
    if (this.productName !== null) this.productName = productName;
    if (this.price !== null) this.price = price;
  }
}

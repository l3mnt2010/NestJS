export class Car {
  id?: number;
  category_Id?: number;
  carName?: string;
  price?: string;
  constructor({ id, category_Id, carName, price }) {
    if (id !== undefined) this.id = id;
    if (price !== undefined) this.price = price;
    if (category_Id !== undefined) this.category_Id = category_Id;
    if (carName !== undefined) this.carName = carName;
  }
}

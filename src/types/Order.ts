export interface Order {
  _id: string;
  table: string;
  status: string;
  products: ProductElement[];
}

export interface ProductElement {
  _id: string;
  product: ProductProduct;
  quantity: number;
}

export interface ProductProduct {
  name: string;
  imagePath: string;
  price: number;
}

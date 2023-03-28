export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export interface Order {
  _id: string;
  table: string;
  status: OrderStatus;
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

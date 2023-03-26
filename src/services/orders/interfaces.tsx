import { Order } from '../../types/Order';

export type GetOrdersResponseData = Order[];

export type CancelOrderRequestData = {
  orderId: string;
};

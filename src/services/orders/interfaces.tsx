import { Order } from '../../types/Order';

export type GetOrdersResponseData = Order[];

export type CancelOrderRequestData = {
  orderId: string;
};

export type ChangeOrderStatusRequestData = {
  orderId: string;
  status: string;
};

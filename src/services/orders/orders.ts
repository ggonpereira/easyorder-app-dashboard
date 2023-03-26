import { api } from '../api';
import { CancelOrderRequestData, GetOrdersResponseData } from './interfaces';

export async function getOrders() {
  const response = await api.get<GetOrdersResponseData>(`/orders`);

  return response?.data;
}

export async function cancelOrder({ orderId }: CancelOrderRequestData) {
  await api.delete(`/orders/${orderId}`);
}

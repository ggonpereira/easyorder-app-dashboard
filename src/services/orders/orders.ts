import { api } from '../api';
import {
  CancelOrderRequestData,
  ChangeOrderStatusRequestData,
  GetOrdersResponseData,
} from './interfaces';

export async function getOrders() {
  const response = await api.get<GetOrdersResponseData>(`/orders`);

  return response?.data;
}

export async function cancelOrder({ orderId }: CancelOrderRequestData) {
  await api.delete(`/orders/${orderId}`);
}

export async function changeOrderStatus({
  orderId,
  status,
}: ChangeOrderStatusRequestData) {
  await api.patch(`/orders/${orderId}`, {
    status,
  });
}

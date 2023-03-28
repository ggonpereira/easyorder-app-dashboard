import { Order, OrderStatus } from '../../types/Order';

export interface BoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => Promise<void>;
  onChangeOrderStatus?: (orderId: string, status: OrderStatus) => Promise<void>;
}

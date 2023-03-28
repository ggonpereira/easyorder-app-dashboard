import { Order } from '../../types/Order';

export interface OrderModalProps {
  onCancelOrder: () => Promise<void>;
  onCloseModal: () => void;
  onChangeOrderStatus: () => Promise<void>;
  order: Order;
  isLoading: boolean;
}

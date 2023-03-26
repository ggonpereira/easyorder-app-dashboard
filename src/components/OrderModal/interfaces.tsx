import { Order } from '../../types/Order';

export interface OrderModalProps {
  onCancelOrder: () => void;
  onCloseModal: () => void;
  order: Order;
  isLoading: boolean;
}

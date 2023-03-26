import { useState } from 'react';
import { useTheme } from 'styled-components';
import { cancelOrder } from '../../services/orders';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Typography } from '../Typography';
import { toast } from 'react-toastify';
import * as S from './Board.styles';

interface BoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export const Board = ({ icon, title, orders }: BoardProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();

  const handleOpenOrderModal = (order: Order) => {
    setIsModalOpened(true);
    setCurrentOrder(order);
  };

  const handleCloseOrderModal = () => {
    setIsModalOpened(false);
    setCurrentOrder(null);
  };

  const handleCancelOrder = async () => {
    if (currentOrder?._id) {
      setIsLoading(true);
      await cancelOrder({ orderId: currentOrder?._id });

      handleCloseOrderModal();
      toast.success(`The order of table ${currentOrder.table} was canceled.`);
    }
  };

  return (
    <S.Container>
      {isModalOpened && currentOrder && (
        <OrderModal
          order={currentOrder}
          onCloseModal={handleCloseOrderModal}
          onCancelOrder={handleCancelOrder}
          isLoading={isLoading}
        />
      )}

      <S.BoardHeader>
        {icon}

        <Typography variant="sm" isBold>
          {title}
        </Typography>

        <Typography variant="sm">{`(${orders.length})`}</Typography>
      </S.BoardHeader>

      {orders.map((order) => (
        <S.BoardContent
          type="button"
          key={order._id}
          onClick={() => handleOpenOrderModal(order)}
        >
          <Typography fontWeight={500}>Table {order.table}</Typography>
          <Typography color={theme.colors.gray[400]} variant="sm">
            {order.products.length} itens
          </Typography>
        </S.BoardContent>
      ))}
    </S.Container>
  );
};

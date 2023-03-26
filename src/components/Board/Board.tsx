import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Typography } from '../Typography';
import * as S from './Board.styles';

interface BoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export const Board = ({ icon, title, orders }: BoardProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const theme = useTheme();

  const handleOpenOrderModal = (order: Order) => {
    setIsModalOpened(true);
    setCurrentOrder(order);
  };

  const handleCloseOrderModal = () => {
    setIsModalOpened(false);
    setCurrentOrder(null);
  };

  return (
    <S.Container>
      {isModalOpened && currentOrder && (
        <OrderModal
          order={currentOrder}
          handleCloseModal={handleCloseOrderModal}
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

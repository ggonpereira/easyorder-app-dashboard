import { useState } from 'react';
import { useTheme } from 'styled-components';
import { cancelOrder } from '../../services/orders';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Typography } from '../Typography';
import { toast } from 'react-toastify';
import * as S from './Board.styles';
import { BoardProps } from './interfaces';

export const Board = ({
  onChangeOrderStatus,
  onCancelOrder,
  icon,
  title,
  orders,
}: BoardProps) => {
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

  const handleChangeOrderStatus = async () => {
    if (currentOrder?._id && onChangeOrderStatus) {
      setIsLoading(true);

      const status =
        currentOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

      await onChangeOrderStatus(currentOrder._id, status);

      handleCloseOrderModal();
      toast.success(`The status of the order was changed.`);
    }
  };

  const handleCancelOrder = async () => {
    if (currentOrder?._id) {
      setIsLoading(true);

      await onCancelOrder(currentOrder._id);

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
          onChangeOrderStatus={handleChangeOrderStatus}
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

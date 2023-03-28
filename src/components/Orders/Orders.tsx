import { useEffect, useState } from 'react';
import {
  cancelOrder,
  changeOrderStatus,
  getOrders,
} from '../../services/orders';
import { Order, OrderStatus } from '../../types/Order';
import { Board } from '../Board';
import * as S from './Orders.styles';

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrders();

      setOrders(data);
    };

    fetchData();
  }, []);

  const waitingOrders = orders.filter((order) => order.status === 'WAITING');
  const inProductionOrders = orders.filter(
    (order) => order.status === 'IN_PRODUCTION',
  );
  const doneOrders = orders.filter((order) => order.status === 'DONE');

  const handleCancelOrder = async (orderId: string) => {
    await cancelOrder({ orderId });

    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId),
    );
  };

  const handleChangeOrderStatus = async (
    orderId: string,
    status: OrderStatus,
  ) => {
    await changeOrderStatus({
      orderId,
      status,
    });

    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId
          ? {
              ...order,
              status,
            }
          : order,
      ),
    );
  };

  return (
    <S.Container>
      <Board
        icon="🕑"
        title="On queue"
        orders={waitingOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />
      <Board
        icon="👨‍🍳"
        title="In production"
        orders={inProductionOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />
      <Board
        icon="✅"
        title="Done!"
        orders={doneOrders}
        onCancelOrder={handleCancelOrder}
      />
    </S.Container>
  );
};

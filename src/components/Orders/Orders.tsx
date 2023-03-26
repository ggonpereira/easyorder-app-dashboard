import { useEffect, useState } from 'react';
import { getOrders } from '../../services/orders';
import { Order } from '../../types/Order';
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
  });

  const waitingOrders = orders.filter((order) => order.status === 'WAITING');
  const inProductionOrders = orders.filter(
    (order) => order.status === 'IN_PRODUCTION',
  );
  const doneOrders = orders.filter((order) => order.status === 'DONE');

  return (
    <S.Container>
      <Board icon="🕑" title="On queue" orders={waitingOrders} />
      <Board icon="👨‍🍳" title="In production" orders={inProductionOrders} />
      <Board icon="✅" title="Done!" orders={doneOrders} />
    </S.Container>
  );
};

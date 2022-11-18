import { orders } from '../../constants/orders';
import { Board } from '../Board';
import * as S from './Orders.styles';

export const Orders = () => (
  <S.Container>
    <Board icon="🕑" title="On queue" orders={[orders[1], orders[2]]} />
    <Board icon="👨‍🍳" title="In production" orders={[orders[0]]} />
    <Board icon="✅" title="Done!" orders={[]} />
  </S.Container>
);

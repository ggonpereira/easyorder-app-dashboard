import { Board } from '../Board';
import * as S from './Orders.styles';

export const Orders = () => (
  <S.Container>
    <Board icon="🕑" quantity={1} title="On queue" />
    <Board icon="👨‍🍳" quantity={1} title="In production" />
    <Board icon="✅" quantity={1} title="Done!" />
  </S.Container>
);

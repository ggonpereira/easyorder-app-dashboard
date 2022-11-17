import { useTheme } from 'styled-components';
import { Typography } from '../Typography';
import * as S from './Board.styles';

interface BoardProps {
  icon: String;
  title: String;
  quantity: Number;
}

export const Board = ({ icon, title, quantity }: BoardProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.BoardHeader>
        {icon}

        <Typography variant="sm" isBold>
          {title}
        </Typography>

        <Typography variant="sm">{`(${quantity})`}</Typography>
      </S.BoardHeader>

      <S.BoardContent type="button">
        <Typography fontWeight={500}>Mesa 2</Typography>
        <Typography color={theme.colors.gray[400]} variant="sm">
          2 itens
        </Typography>
      </S.BoardContent>
      <S.BoardContent type="button">
        <Typography fontWeight={500}>Mesa 2</Typography>
        <Typography color={theme.colors.gray[400]} variant="sm">
          2 itens
        </Typography>
      </S.BoardContent>
    </S.Container>
  );
};

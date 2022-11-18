import { Typography } from '../Typography';
import * as S from './Header.styles';
import { Heading } from '../Heading';
import { useTheme } from 'styled-components';
import { Logo } from '../../assets/images/icons';

export const Header = () => {
  const theme = useTheme();

  return (
    <S.Header>
      <S.Content>
        <S.PageDetails>
          <Heading variant="h3" color={theme.colors.white}>
            Orders
          </Heading>
          <Typography color={theme.colors.white}>
            Track customer orders
          </Typography>
        </S.PageDetails>

        <S.AppIllustration>
          <Logo />

          <S.TextSection>
            <span>
              <Heading color={theme.colors.white}>EasyOrder</Heading>
              <Typography color={theme.colors.white}>App</Typography>
            </span>

            <Typography color={theme.colors.white}>The waiter app</Typography>
          </S.TextSection>
        </S.AppIllustration>
      </S.Content>
    </S.Header>
  );
};

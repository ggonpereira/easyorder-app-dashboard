import { ReactNode } from 'react';
import * as S from './Heading.styles';

interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: ReactNode;
}

export const Heading = ({ variant = 'h3', color, children }: HeadingProps) => (
  <S.Text variant={variant} color={color}>
    {children}
  </S.Text>
);

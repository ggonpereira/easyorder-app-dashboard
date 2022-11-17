import { ReactNode } from 'react';
import * as S from './Typography.styles';

interface TypographyProps {
  variant?: 'sm' | 'md' | 'lg';
  color?: string;
  isBold?: boolean;
  fontWeight?: number;
  children: ReactNode;
}

export const Typography = ({
  variant = 'md',
  color,
  isBold,
  fontWeight,
  children,
}: TypographyProps) => (
  <S.Text
    variant={variant}
    color={color}
    isBold={isBold}
    fontWeight={fontWeight}
  >
    {children}
  </S.Text>
);

import { ReactNode } from "react";
import * as S from "./Typography.styles";

interface TypographyProps {
  variant?: "sm" | "md" | "lg";
  color?: string;
  isBold?: boolean;
  children: ReactNode;
}

export const Typography = ({
  variant = "md",
  color,
  isBold,
  children,
}: TypographyProps) => (
  <S.Text variant={variant} color={color} isBold={isBold}>
    {children}
  </S.Text>
);

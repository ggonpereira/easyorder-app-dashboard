import styled, { css } from 'styled-components';

interface TextProps {
  variant: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
}

const displayVariantCSS = css`
  font-size: 5.6rem;
`;

const h1VariantCSS = css`
  font-size: 4.8rem;
`;

const h2VariantCSS = css`
  font-size: 4rem;
`;

const h3VariantCSS = css`
  font-size: 3.2rem;
`;

const h4VariantCSS = css`
  font-size: 2.4rem;
`;

const h5VariantCSS = css`
  font-size: 2rem;
`;

const h6VariantCSS = css`
  font-size: 1.6rem;
`;

export const Text = styled.span<TextProps>`
  line-height: 120%;
  font-weight: 600;
  font-family: 'GeneralSans', sans-serif;

  ${({ variant }) => variant === 'display' && displayVariantCSS}
  ${({ variant }) => variant === 'h1' && h1VariantCSS}
  ${({ variant }) => variant === 'h2' && h2VariantCSS}
  ${({ variant }) => variant === 'h3' && h3VariantCSS}
  ${({ variant }) => variant === 'h4' && h4VariantCSS}
  ${({ variant }) => variant === 'h5' && h5VariantCSS}
  ${({ variant }) => variant === 'h6' && h6VariantCSS}

  color: ${({ color, theme }) => color || theme.colors.gray[500]};
`;

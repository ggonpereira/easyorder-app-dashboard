import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

const primaryButtonCSS = css`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease-in;

  &:focus {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

const secondaryButtonCSS = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.brand.blue};
`;

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(4.5px);
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 48rem;
  padding: 3.2rem;
  width: 100%;
  z-index: 10;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const OrderOverview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderProduct = styled.div`
  &:first-of-type {
    margin-top: 1.6rem;
  }

  display: flex;
  gap: 1.2rem;

  & + & {
    margin-top: 1.6rem;
  }
`;

export const ProductImage = styled.div`
  height: 3rem;
  object-fit: cover;
  width: 4.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.6rem;
  }
`;

export const ProductNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Total = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
  width: 100%;
`;

export const ActionsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 4.8rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  height: 4.4rem;

  ${({ variant }) => variant === 'primary' && primaryButtonCSS}
  ${({ variant }) => variant === 'secondary' && secondaryButtonCSS}

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

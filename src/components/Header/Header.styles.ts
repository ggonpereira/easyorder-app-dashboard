import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand.blue};
  display: flex;
  height: 198px;
  justify-content: center;
`;

export const Content = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1216px;
  width: 100%;
`;

export const PageDetails = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const AppIllustration = styled.div`
  align-items: center;
  display: flex;
  gap: 2.4rem;

  span > * {
    font-size: 2.4rem;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

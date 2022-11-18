import styled from 'styled-components';

interface ContainerProps {
  shouldCentralize: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(204, 204, 204, 0.4);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;
  justify-content: ${({ shouldCentralize }) =>
    shouldCentralize ? 'center' : undefined};
  padding: 1.6rem;
`;

export const BoardHeader = styled.span`
  align-items: center;
  display: flex;
  gap: 0.8rem;
  height: 3.7rem;
`;

export const BoardContent = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(204, 204, 204, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  height: 12.8rem;
  justify-content: center;
  width: 100%;
`;

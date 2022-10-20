import styled from 'styled-components';

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['background-300']};
  color: ${(props) => props.theme['text-500']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 1.25rem;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['primary-500']};
    transition: background-color 0.2s;
  }
`;

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div {
    margin: 4rem auto 0;
    padding: 0 1.5rem;
  }
`;

import styled from 'styled-components';

export const ButtonSumit = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['primary-500']};
  color: ${(props) => props.theme['text-500']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['primary-600']};
    color: ${(props) => props.theme.white};
  }
`;

import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

interface SummaryCardProps {
  variant?: 'positive' | 'negative';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['background-300']};
  color: ${(props) => props.theme['text-400']};
  border-radius: 6px;
  padding: 2rem;
  font-family: ${(props) => props.theme['font-title']};
  letter-spacing: 2px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['text-300']};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.75rem;
  }

  ${(props) =>
    props.variant === 'positive' &&
    css`
      color: ${(props) => props.theme['green-500']};
      background: ${props.theme['background-500']};
    `}

  ${(props) =>
    props.variant === 'negative' &&
    css`
      color: ${(props) => props.theme['red-500']};
      background: ${props.theme['background-500']};
    `}

    svg {
    ${(props) =>
      props.variant === 'positive' &&
      css`
        color: ${(props) => props.theme['green-500']};
        background: ${props.theme['background-500']};
      `}
    ${(props) =>
      props.variant === 'negative' &&
      css`
        color: ${(props) => props.theme['red-500']};
        background: ${props.theme['background-500']};
      `};
  }
`;

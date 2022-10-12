import styled from 'styled-components';

interface CardColor {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div<CardColor>`
  color: #f5f5f5;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  border-radius: 6px;
  min-width: 280px;
  min-height: 12.5rem;
  background: ${(props) => props.color || props.theme['primary-500']};
  padding: 2rem;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #0000008c, #00000036);
  }

  h3 {
    font-size: 1.25rem;
    font-family: ${(props) => props.theme['font-default']};
    text-transform: uppercase;
    z-index: 10;
  }

  ul {
    margin: 3rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    text-indent: 2px;
    font-size: 20px;
    z-index: 10;
  }
`;

export const Info = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme['background-300']};
  border-radius: 6px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:nth-child(2) {
      span {
        &:last-child {
          color: ${(props) => props.theme['red-500']};
        }
      }
    }
    span {
      display: block;

      &:first-child {
        color: ${(props) => props.theme['text-300']};
      }
      &:last-child {
        font-weight: 700;
      }
    }
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 1rem;
    border: none;
    font-weight: 700;
    border-radius: 6px;
    color: ${(props) => props.theme['primary-600']};
    background: ${(props) => props.theme['background-200']};
    cursor: pointer;
    transition: background 200ms ease, color 250ms ease;

    &:hover {
      color: ${(props) => props.theme['text-500']};
      background: ${(props) => props.theme['primary-500']};
    }
  }
`;
export const Transactions = styled.section``;
export const WrapperWallet = styled.section``;

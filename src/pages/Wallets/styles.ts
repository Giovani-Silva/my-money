import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Card = styled.div`
  color: #f5f5f5;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  border-radius: 6px;
  min-width: 280px;
  min-height: 12.5rem;
  background: ${(props) => props.theme['primary-500']};
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
    background: linear-gradient(45deg, #000000c6, #00000036);
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

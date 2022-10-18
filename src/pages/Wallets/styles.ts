import * as Dialog from '@radix-ui/react-dialog';
import * as SelectPrimitive from '@radix-ui/react-select';
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
`;

export const InfoBlock = styled.div`
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
`;

export const Action = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme['background-200']};
  width: 100%;
  padding: 2rem 1rem 1rem;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-top: 1rem;
`;

export const BaseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
`;

export const DeleteButton = styled(BaseButton)`
  color: ${(props) => props.theme['red-500']};
  background: ${(props) => props.theme['red-300']};
  transition: background 200ms ease, color 250ms ease;

  &:hover {
    color: ${(props) => props.theme['background-200']};
    background: ${(props) => props.theme['red-500']};
  }
`;

export const SelectButton = styled(BaseButton)`
  color: ${(props) => props.theme['text-200']};
  background: ${(props) => props.theme['background-500']};
  &:hover {
    color: ${(props) => props.theme['text-300']};
    background: ${(props) => props.theme.black};
  }
`;

export const SelectViewPort = styled(SelectPrimitive.Viewport)`
  padding: 1rem;
  color: ${(props) => props.theme['text-300']};
  background: ${(props) => props.theme.black};
  border: none;
  border-radius: 6px;
  outline: none;

  box-sizing: border-box;
`;

export const SelectItem = styled(SelectPrimitive.Item)`
  all: 'unset';
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 250ms ease;
  &:hover {
    color: ${(props) => props.theme['primary-500']};
  }
`;

export const SelectItemText = styled(SelectPrimitive.ItemText)`
  color: ${(props) => props.theme['text-200']};
  padding-left: 1rem;
`;

export const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  right: 1rem;
  width: 1.5625rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmDeleteWalletModal = styled.div`
  margin: 3rem 0 0;
  display: flex;
  gap: 2rem;
`;

export const CancelButton = styled(Dialog.Close)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: none;
  font-weight: 700;
  border-radius: 6px;
  color: ${(props) => props.theme['text-300']};
  background: ${(props) => props.theme['background-300']};
  cursor: pointer;
  transition: background 200ms ease, color 250ms ease;

  &:hover {
    color: ${(props) => props.theme['text-500']};
    background: ${(props) => props.theme['primary-500']};
  }
`;
